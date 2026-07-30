import React, { useMemo, useState } from 'react';
import { NepalMap, getDistrictsByProvince, Province } from 'nepal-district-map';
import { motion, AnimatePresence } from 'framer-motion';

type ViewMode = 'federal' | 'provincial';

// 2026 March Federal Election Data (House of Representatives)
const FEDERAL_DATA: Record<Province, any> = {
  Koshi: {
    voters: '3,348,744',
    districts: 14,
    geography: { himalaya: 3, hilly: 8, terai: 3 },
    seats: { 'RSP': 19, 'Nepali Congress': 5, 'CPN (UML)': 3, 'SSP': 1 }
  },
  Madhesh: {
    voters: '3,331,170',
    districts: 8,
    geography: { himalaya: 0, hilly: 0, terai: 8 },
    seats: { 'RSP': 17, 'Nepali Congress': 7, 'CPN (UML)': 5, 'NCP (Maoist)': 3 }
  },
  Bagmati: {
    voters: '3,412,869',
    districts: 13,
    geography: { himalaya: 3, hilly: 9, terai: 1 },
    seats: { 'RSP': 28, 'Nepali Congress': 2, 'CPN (UML)': 2, 'RPP': 1 }
  },
  Gandaki: {
    voters: '1,812,047',
    districts: 11,
    geography: { himalaya: 2, hilly: 8, terai: 1 },
    seats: { 'RSP': 14, 'Nepali Congress': 2, 'CPN (UML)': 1, 'NCP (Maoist)': 1 }
  },
  Lumbini: {
    voters: '3,219,457',
    districts: 12,
    geography: { himalaya: 1, hilly: 5, terai: 6 },
    seats: { 'RSP': 18, 'Nepali Congress': 4, 'CPN (UML)': 3, 'NCP (Maoist)': 1 }
  },
  Karnali: {
    voters: '1,008,403',
    districts: 10,
    geography: { himalaya: 5, hilly: 5, terai: 0 },
    seats: { 'RSP': 8, 'Nepali Congress': 2, 'NCP (Maoist)': 1, 'CPN (UML)': 1 }
  },
  Sudurpashchim: {
    voters: '1,632,150',
    districts: 9,
    geography: { himalaya: 3, hilly: 4, terai: 2 },
    seats: { 'RSP': 11, 'Nepali Congress': 3, 'CPN (UML)': 1, 'NCP (Maoist)': 1 }
  }
};

// 2022 Provincial Assembly Election Data
const PROVINCIAL_DATA: Record<Province, any> = {
  Koshi: {
    voters: '3,348,744',
    districts: 14,
    geography: { himalaya: 3, hilly: 8, terai: 3 },
    seats: { 'CPN (UML)': 40, 'Nepali Congress': 29, 'Maoist Centre': 13, 'RPP': 6, 'Unified Socialist': 4, 'JSP': 1 }
  },
  Madhesh: {
    voters: '3,331,170',
    districts: 8,
    geography: { himalaya: 0, hilly: 0, terai: 8 },
    seats: { 'CPN (UML)': 23, 'Nepali Congress': 22, 'Janamat Party': 16, 'JSP': 16, 'LSP': 9, 'Maoist Centre': 8, 'Unified Socialist': 7, 'Nagarik Unmukti': 6 }
  },
  Bagmati: {
    voters: '3,412,869',
    districts: 13,
    geography: { himalaya: 3, hilly: 9, terai: 1 },
    seats: { 'Nepali Congress': 37, 'CPN (UML)': 27, 'Maoist Centre': 21, 'RPP': 13, 'Unified Socialist': 7, 'NWPP': 5 }
  },
  Gandaki: {
    voters: '1,812,047',
    districts: 11,
    geography: { himalaya: 2, hilly: 8, terai: 1 },
    seats: { 'Nepali Congress': 27, 'CPN (UML)': 22, 'Maoist Centre': 8, 'RPP': 2, 'Unified Socialist': 1 }
  },
  Lumbini: {
    voters: '3,219,457',
    districts: 12,
    geography: { himalaya: 1, hilly: 5, terai: 6 },
    seats: { 'CPN (UML)': 29, 'Nepali Congress': 27, 'Maoist Centre': 9, 'Nagarik Unmukti': 4, 'RPP': 4, 'Janamat': 3, 'JSP': 3, 'Unified Socialist': 8 }
  },
  Karnali: {
    voters: '1,008,403',
    districts: 10,
    geography: { himalaya: 5, hilly: 5, terai: 0 },
    seats: { 'Nepali Congress': 14, 'Maoist Centre': 13, 'CPN (UML)': 10, 'RPP': 1, 'Unified Socialist': 1, 'SSP': 1 }
  },
  Sudurpashchim: {
    voters: '1,632,150',
    districts: 9,
    geography: { himalaya: 3, hilly: 4, terai: 2 },
    seats: { 'Nepali Congress': 19, 'Maoist Centre': 11, 'CPN (UML)': 10, 'Nagarik Unmukti': 7, 'Unified Socialist': 4, 'RPP': 1, 'LSP': 1 }
  }
};

const PROVINCES: Province[] = ['Koshi', 'Madhesh', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpashchim'];

// Distinct Blue shades for 7 Provinces (Provincial View)
const PROVINCE_COLORS: Record<Province, string> = {
  Koshi: '#1E3A8A', // Blue 900
  Madhesh: '#1E40AF', // Blue 800
  Bagmati: '#1D4ED8', // Blue 700
  Gandaki: '#2563EB', // Blue 600
  Lumbini: '#3B82F6', // Blue 500
  Karnali: '#60A5FA', // Blue 400
  Sudurpashchim: '#93C5FD' // Blue 300
};

// Generate deterministic variations for districts to ensure adjacent ones generally look different
const getDistrictFederalColor = (districtIndex: number) => {
  // A wide array of distinctly different blue/slate shades
  const variations = [
    '#0F172A', '#1E3A8A', '#334155', '#1D4ED8', '#1E293B', '#3B82F6', '#020617', '#2563EB'
  ];
  return variations[districtIndex % variations.length];
};

const InteractiveMap = () => {
  const [view, setView] = useState<ViewMode>('federal');

  // Map our province data to every district in that province based on the active view
  const districtData = useMemo(() => {
    const data: Record<string, any> = {};
    const activeDataSet = view === 'federal' ? FEDERAL_DATA : PROVINCIAL_DATA;
    
    PROVINCES.forEach((province) => {
      const districts = getDistrictsByProvince(province);
      const provData = activeDataSet[province];
      
      districts.forEach((district, index) => {
        data[district] = {
          provinceName: province,
          // Federal gets alternating district colors. Provincial gets uniform province color.
          color: view === 'federal' ? getDistrictFederalColor(index) : PROVINCE_COLORS[province],
          ...provData
        };
      });
    });
    
    return data;
  }, [view]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
            Electoral Landscape
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Data-driven insights across Nepal's diverse political terrain. Hover over any province to reveal key ground values and historical performance.
          </p>

          {/* Premium Data Toggle */}
          <div className="mt-10 flex justify-center items-center">
            <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative shadow-inner border border-slate-200">
              <button
                onClick={() => setView('federal')}
                className={`relative px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 z-10 ${
                  view === 'federal' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Federal (2026)
              </button>
              <button
                onClick={() => setView('provincial')}
                className={`relative px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 z-10 ${
                  view === 'provincial' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Provincial (2022)
              </button>

              {/* Animated Pill Background */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-ink rounded-full shadow-md transition-all duration-300 ease-out z-0 ${
                  view === 'federal' ? 'left-1.5' : 'left-[calc(50%+0.375rem)]'
                }`}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50 border border-slate-200 rounded-3xl p-4 md:p-12 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-transparent opacity-50" />
          
          <div className="relative z-10 h-[50vh] md:h-[85vh] w-full flex items-center justify-center [&>div]:w-full [&>div]:h-full [&>div>svg]:w-full [&>div>svg]:h-full [&>div>svg]:scale-[0.92] md:[&>div>svg]:scale-100 lg:[&>div>svg]:scale-[1.21] origin-center transition-opacity duration-500">
            <NepalMap
              key={view} 
              data={districtData}
              colorMode="data"
              // In Federal view, draw thin lines to show districts. In Provincial, draw very thin lines.
              strokeColor={view === 'federal' ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"} 
              strokeWidth={view === 'federal' ? 0.7 : 0.3}
              hoverColor={view === 'federal' ? "#CBD5E1" : "rgba(255,255,255,0.2)"}
              showLabels={false}
              maxHeight="100%"
              renderTooltip={(districtName, data: any) => {
                if (!data) return null;
                return (
                  <div className="bg-slate-900 text-white p-6 rounded-xl shadow-2xl border border-slate-700 min-w-[300px] backdrop-blur-md bg-opacity-95 pointer-events-none z-50">
                    <div className="border-b border-slate-700 pb-4 mb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-xl font-medium tracking-wide text-white">
                          {data.provinceName} Province
                        </h3>
                        <span className="text-[10px] uppercase tracking-widest bg-slate-800 text-slate-300 px-2 py-1 rounded">
                          {view === 'federal' ? 'House of Reps' : 'Provincial Assembly'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 font-light">District: {districtName}</p>
                    </div>
                    
                    <div className="space-y-4 text-sm font-light">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Total Voters</span>
                        <span className="font-medium text-white">{data.voters}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Districts ({data.districts})</span>
                        <div className="flex gap-2 text-xs">
                          <span title="Himalaya" className="px-2 py-0.5 bg-slate-800 rounded">🏔️ {data.geography.himalaya}</span>
                          <span title="Hilly" className="px-2 py-0.5 bg-slate-800 rounded">⛰️ {data.geography.hilly}</span>
                          <span title="Terai" className="px-2 py-0.5 bg-slate-800 rounded">🌾 {data.geography.terai}</span>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-slate-700">
                        <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider">
                          {view === 'federal' ? 'Federal Seats (Aggregated)' : 'Provincial Assembly Seats'}
                        </p>
                        <div className="space-y-1.5">
                          {Object.entries(data.seats).map(([party, seats]) => (
                            <div key={party} className="flex justify-between items-center">
                              <span>{party}</span>
                              <span className="font-medium">{seats as number}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMap;
