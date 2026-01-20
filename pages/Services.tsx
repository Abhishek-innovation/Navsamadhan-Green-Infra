import React from 'react';
import { Truck, Recycle, Sprout, Megaphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceItem, PageRoute } from '../types';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const serviceList: ServiceItem[] = [
    {
      title: "Door-to-Door Collection",
      description: "Our fleet of compartmentalized vehicles collects segregated waste (Wet, Dry, Domestic Hazardous) directly from households and commercial establishments daily.",
      icon: Truck
    },
    {
      title: "Material Recovery (MRF)",
      description: "At our Material Recovery Facilities, dry waste is sorted into 20+ categories (PET, HDPE, Paper, Metal) and sent to authorized recyclers, ensuring minimal landfill usage.",
      icon: Recycle
    },
    {
      title: "Wet Waste Processing",
      description: "Using aerobic composting and bio-culture methods, we convert organic kitchen waste into nutrient-rich manure for local agriculture.",
      icon: Sprout
    },
    {
      title: "IEC Awareness",
      description: "We conduct Information, Education, and Communication (IEC) campaigns to educate citizens on the importance of source segregation.",
      icon: Megaphone
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto font-light"
          >
            Comprehensive, technology-enabled waste management solutions designed for the smart cities of tomorrow.
          </motion.p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-8">
                {service.description}
              </p>
              <button 
                onClick={() => onNavigate(PageRoute.CONTACT)}
                className="flex items-center text-emerald-600 font-semibold group/btn"
              >
                Learn more <ArrowRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Need a custom solution?</h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
              We work with municipalities to design tailored waste management plans that fit local demographics and infrastructure.
            </p>
            <button 
              onClick={() => onNavigate(PageRoute.CONTACT)}
              className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all"
            >
              Contact Technical Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;