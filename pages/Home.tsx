import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Truck, Users, Leaf, BarChart3, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageRoute, FeatureItem, StatItem } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const features: FeatureItem[] = [
    {
      title: "Tech-Driven Tracking",
      description: "Real-time GPS tracking of waste collection vehicles ensures 100% daily coverage and operational transparency.",
      icon: BarChart3
    },
    {
      title: "Regulatory Compliance",
      description: "Fully compliant with SWM Rules 2016. We ensure zero illegal dumping and strict adherence to norms.",
      icon: ShieldCheck
    },
    {
      title: "Local Employment",
      description: "Empowering Begusarai’s workforce with dignified jobs, safety gear, and social security benefits.",
      icon: Users
    }
  ];

  const directors = [
    { name: "Dheeraj Ranjan", role: "Director", short: "Visionary leader driving sustainable growth strategies." },
    { name: "Anil Kumar", role: "Director", short: "Expert in operational excellence and logistics optimization." },
    { name: "Dhiraj Kumar Singh", role: "Director", short: "Championing community engagement and regulatory compliance." },
    { name: "Ansh Aryan", role: "Director", short: "Innovating for a greener future through technology." }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
           <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop"
            alt="Sustainable Bihar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-6 backdrop-blur-md">
                Building a Cleaner Future
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-white tracking-tight"
            >
              Transforming Bihar through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Sustainable Infrastructure.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Navsamadhan Green Infra delivers end-to-end solid waste management solutions—from AI-monitored collection to scientific disposal. 
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button 
                onClick={() => onNavigate(PageRoute.CONTACT)}
                className="group bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center"
              >
                Partner With Us 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate(PageRoute.SERVICES)}
                className="bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Explore Services
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-100 relative z-20 -mt-20 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-xl overflow-hidden">
        <div className="px-8 py-8 md:flex items-center justify-between gap-8">
          <p className="text-slate-500 font-medium text-sm uppercase tracking-wider mb-6 md:mb-0 text-center md:text-left">Trusted Standards</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented as text/icon combos for this demo */}
            <div className="flex items-center gap-2" title="ISO 9001"><Award className="h-6 w-6 text-slate-600" /><span className="font-display font-bold text-slate-800">ISO 9001</span></div>
            <div className="flex items-center gap-2" title="Swachh Bharat"><Leaf className="h-6 w-6 text-emerald-600" /><span className="font-display font-bold text-slate-800">Swachh Bharat</span></div>
            <div className="flex items-center gap-2" title="MSME"><ShieldCheck className="h-6 w-6 text-blue-600" /><span className="font-display font-bold text-slate-800">MSME</span></div>
            <div className="flex items-center gap-2" title="Safety First"><CheckCircle className="h-6 w-6 text-orange-600" /><span className="font-display font-bold text-slate-800">Safety First</span></div>
          </div>
        </div>
      </div>

      {/* Why Us / Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
            >
              Reimagining Waste Management
            </motion.h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              We combine advanced technology, strict compliance, and community care to deliver superior environmental services.
            </p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <feature.icon className="h-32 w-32 text-emerald-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-300">
                    <feature.icon className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Service Showcase */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Integrated <span className="text-emerald-400">End-to-End</span> <br/> Solutions
              </h2>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed font-light">
                We go beyond simple collection. Our comprehensive ecosystem ensures that waste is processed scientifically, recovering value and minimizing environmental impact.
              </p>
              
              <div className="space-y-6">
                {[
                  "Residential & Commercial Collection",
                  "Material Recovery Facility (MRF)",
                  "Legacy Waste Bio-Mining",
                  "Organic Waste Composting"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <button 
                onClick={() => onNavigate(PageRoute.SERVICES)}
                className="mt-12 text-emerald-400 font-semibold hover:text-white transition-colors flex items-center group text-lg"
              >
                Explore All Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
                alt="Modern waste management facility" 
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-white/10"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Live System Status</span>
                </div>
                <p className="text-slate-900 font-bold text-lg">98% Collection Efficiency Achieved Today</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Visionary Leadership</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Guided by experts committed to transforming Bihar's environmental landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((dir, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-24 h-24 bg-emerald-50 group-hover:bg-emerald-500 transition-colors rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 group-hover:text-white shadow-inner">
                  <span className="text-2xl font-bold font-display">{dir.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{dir.name}</h3>
                <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wider mb-4">{dir.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {dir.short}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[2.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
             {/* Abstract Background Shapes */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-emerald-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 relative z-10">
              <div className="lg:w-1/3">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Real Impact.<br/>Real Time.</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We measure our success not just in tons collected, but in lives improved and environments restored.
                </p>
                <button className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center">
                  View Detailed Reports <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 gap-x-12 gap-y-16">
                {[
                    { value: "200+", label: "Tons Processed", sub: "Monthly Average" },
                    { value: "100%", label: "Compliance", sub: "SWM Rules 2016" },
                    { value: "15+", label: "Green Jobs", sub: "Created Locally" },
                    { value: "24/7", label: "Monitoring", sub: "GPS Enabled Fleet" },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">{stat.value}</div>
                    <div className="text-emerald-400 font-bold text-lg mb-1">{stat.label}</div>
                    <div className="text-slate-500 text-sm">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;