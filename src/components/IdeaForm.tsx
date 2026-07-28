import { useState } from 'react';
import { Send } from 'lucide-react';

export default function IdeaForm() {
  const [formData, setFormData] = useState({
    name: '',
    inquiry: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Campaign inquiry submission:`, formData);
    alert(`Thank you for your inquiry. We'll be in touch soon.`);
    setFormData({ name: '', inquiry: '', contact: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
          Your Name / Organization
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-0 focus:border-ink transition-colors"
          placeholder="Enter your name or organization"
        />
      </div>

      <div>
        <label htmlFor="inquiry" className="block text-sm font-medium text-ink mb-2">
          Campaign Inquiry / Needs
        </label>
        <textarea
          id="inquiry"
          required
          value={formData.inquiry}
          onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-0 focus:border-ink transition-colors resize-none"
          placeholder="Tell us about your political campaign, strategy needs, or operational challenges..."
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-ink mb-2">
          Contact Information
        </label>
        <input
          type="text"
          id="contact"
          required
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-0 focus:border-ink transition-colors"
          placeholder="Email or phone number"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-ink hover:bg-ink-light text-white py-4 rounded-none font-medium text-sm tracking-widest uppercase transition-colors duration-300 flex items-center justify-center space-x-2"
      >
        <span>Submit Inquiry</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
