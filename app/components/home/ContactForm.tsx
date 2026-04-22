import React from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white font-sans" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Trust & Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-3">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                Ready to plan your <br />
                <span className="text-brand-blue">next destination?</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are looking for a bespoke cultural tour or a large-scale corporate event, our synergized network of local experts is here to assist.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-blue/5 rounded-xl">
                  <MapPin className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Headquarters</h4>
                  <p className="text-gray-600 text-sm">Main Office Street, 123<br />Madrid, Spain</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-blue/5 rounded-xl">
                  <Mail className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600 text-sm">info@oneworld-dmcs.com</p>
                </div>
              </div>
            </div>

            {/* Trust Quote */}
            <div className="p-6 bg-gray-50 rounded-3xl border-l-4 border-brand-cyan">
              <p className="text-gray-700 italic">
                "We combine deep local knowledge with global standards to ensure your travel experience is seamless."
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100 p-8 md:p-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                />
              </div>

              {/* Destination Dropdown */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Destination of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-white">
                  <option>Select a destination...</option>
                  <option>Spain</option>
                  <option>Portugal</option>
                  <option>Morocco</option>
                  <option>Egypt</option>
                  <option>Other / Multiple</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project or travel plans..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-blue-alt text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/30 active:scale-[0.98]"
                >
                  Send Inquiry
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;