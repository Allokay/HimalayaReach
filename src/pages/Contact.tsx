import SEO from '../components/SEO';
import IdeaForm from '../components/IdeaForm';
import { MapPin, Mail, Phone, Lock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <SEO 
        title="Contact | Himalaya Reach Consultant"
        description="Initiate contact with Himalaya Reach for confidential political strategy and campaign management."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="text-gold font-medium uppercase tracking-[0.2em] text-xs mb-4">Secure Channel</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink leading-tight tracking-tight">
            Initiate Contact.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 border border-gray-200">
            <h2 className="font-serif text-3xl font-bold text-ink mb-8">Direct Inquiry</h2>
            <IdeaForm />
          </div>

          {/* Contact Details & Confidentiality */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            <div className="bg-ink p-10 md:p-14 text-white">
              <h3 className="font-serif text-2xl font-bold mb-8 text-gray-200">Headquarters</h3>
              <div className="space-y-6 text-gray-400 font-light">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gold" strokeWidth={1.5} />
                  <span>
                    Koteshwor, Kathmandu,<br />
                    Bagmati Province, Nepal
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 flex-shrink-0 text-gold" strokeWidth={1.5} />
                  <a href="mailto:info@himalayareach.com" className="hover:text-white transition-colors">
                    info@himalayareach.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 flex-shrink-0 text-gold" strokeWidth={1.5} />
                  <span>+977 9761444489</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-10 md:p-14 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <Lock className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-xl font-bold text-ink">Strict Confidentiality</h3>
              </div>
              <p className="text-gray-500 leading-relaxed font-light">
                Political consulting is a discretion-sensitive business. All inquiries, consultations, and potential engagements are treated with absolute confidentiality. We never publish any client relationship or operational history without explicit sign-off.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
