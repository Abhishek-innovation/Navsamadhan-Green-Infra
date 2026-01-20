import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Municipality',
    requirement: 'Collection',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We have received your inquiry.`);
    setFormData({ name: '', type: 'Municipality', requirement: 'Collection', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dark Hero for Navbar Compatibility */}
      <div className="bg-slate-900 pt-32 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-900/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Get in <span className="text-emerald-400">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto font-light"
          >
            Ready to modernize your waste infrastructure? Reach out to us for partnerships and advisory.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: MapPin, title: "Headquarters", text: "Navsamadhan Green Infra Pvt. Ltd., Near Kali Sthan, Begusarai, Bihar - 851101" },
              { icon: Mail, title: "Email Us", text: "info@navsamadhan.com" },
              { icon: Phone, title: "Call Us", text: "+91 98765 43210" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Main Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="h-6 w-6 text-emerald-500" />
              <h3 className="text-2xl font-display font-bold text-slate-900">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold text-emerald-600 mb-2 uppercase tracking-widest">Name / Organization</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-emerald-500 outline-none transition-all font-medium text-xl placeholder-slate-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="type" className="block text-xs font-bold text-emerald-600 mb-2 uppercase tracking-widest">Type</label>
                  <div className="relative">
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-emerald-500 outline-none appearance-none font-medium text-xl text-slate-800"
                    >
                      <option>Municipality</option>
                      <option>Residential Society</option>
                      <option>Corporate</option>
                      <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-slate-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="requirement" className="block text-xs font-bold text-emerald-600 mb-2 uppercase tracking-widest">Requirement</label>
                  <div className="relative">
                    <select
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-emerald-500 outline-none appearance-none font-medium text-xl text-slate-800"
                    >
                      <option>Collection</option>
                      <option>Bulk Processing</option>
                      <option>Advisory</option>
                      <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-slate-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-emerald-600 mb-2 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-emerald-500 outline-none transition-all font-medium text-xl resize-none placeholder-slate-300"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center text-lg group"
                >
                  Send Enquiry <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;