import { useState } from 'react';
import { Send } from 'lucide-react';

interface IdeaFormProps {
  type: 'idea' | 'partner';
}

export default function IdeaForm({ type }: IdeaFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    idea: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${type} submission:`, formData);
    alert(`Thank you for your ${type === 'idea' ? 'idea' : 'interest in partnering'}! We'll be in touch soon.`);
    setFormData({ name: '', idea: '', contact: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-2">
          {type === 'idea' ? 'Your Idea / Inquiry' : 'Partnership Proposal'}
        </label>
        <textarea
          id="idea"
          required
          value={formData.idea}
          onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all resize-none"
          placeholder={
            type === 'idea'
              ? 'Tell us about your business idea or inquiry...'
              : 'Describe your investment interests and partnership goals...'
          }
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
          Contact Information
        </label>
        <input
          type="text"
          id="contact"
          required
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:border-transparent transition-all"
          placeholder="Email or phone number"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#C0392B] hover:bg-[#A93226] text-white py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
      >
        <span>Submit</span>
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
