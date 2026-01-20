import React from 'react';
import { Target, Lightbulb, UserCheck, Eye, Shield, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Dheeraj Ranjan",
      role: "Director",
      bio: "As a founding director, Dheeraj spearheads the strategic vision of Navsamadhan Green Infra. With a deep commitment to environmental sustainability, he oversees the company's expansion into new municipalities."
    },
    {
      name: "Anil Kumar",
      role: "Director",
      bio: "Anil brings extensive experience in operations management. He is responsible for optimizing the door-to-door collection fleet, managing the workforce, and ensuring seamless execution of daily protocols."
    },
    {
      name: "Dhiraj Kumar Singh",
      role: "Director",
      bio: "Dhiraj focuses on regulatory compliance and community outreach. He works closely with local bodies to implement IEC activities, ensuring high segregation rates at the source."
    },
    {
      name: "Ansh Aryan",
      role: "Director",
      bio: "Ansh leads the technological integration at Navsamadhan. From GPS tracking of vehicles to data-driven decision making, his focus is on leveraging technology for efficiency."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Editorial Hero Header - Dark Theme for Navbar Consistency */}
      <div className="relative bg-slate-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h5 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              Who We Are
            </h5>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Pioneering the future of <br/> <span className="text-emerald-400">Waste Engineering.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl border-l-4 border-emerald-500 pl-6">
              Incorporated in 2024, Navsamadhan Green Infra is a Begusarai-based entity bridging the gap between waste generation and scientific disposal.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 transform group-hover:scale-110 transition-transform duration-700">
               <Target className="h-40 w-40 text-emerald-600" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                To revolutionize waste management in Bihar by deploying scalable, technology-driven infrastructure that turns 'Waste into Wealth' while protecting our environment.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
               <Eye className="h-40 w-40 text-blue-400" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 border border-blue-500/30">
                <Eye className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the most trusted environmental engineering partner for Urban Local Bodies (ULBs) in Eastern India, setting benchmarks in sustainability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-display font-bold text-slate-900">Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Safety First", desc: "Zero compromise on worker safety. We provide industry-grade gear and regular health checkups.", color: "emerald" },
              { icon: Lightbulb, title: "Innovation", desc: "Adopting the latest composting and recycling technologies to maximize recovery rates.", color: "amber" },
              { icon: UserCheck, title: "Integrity", desc: "Transparent operations with our municipal partners and honest reporting of impact data.", color: "blue" }
            ].map((val, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-full bg-${val.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <val.icon className={`h-6 w-6 text-${val.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Board of Directors */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900">Board of Directors</h2>
          <p className="text-slate-500 mt-4 text-lg">The minds behind the mission.</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
            {team.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-white border border-slate-100 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300"
                >
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-3xl font-display font-bold shadow-inner">
                            {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                          <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-emerald-500 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="text-emerald-600 font-semibold uppercase text-sm tracking-wider mb-4 bg-emerald-50 inline-block px-3 py-1 rounded-lg w-fit">{member.role}</p>
                        <p className="text-slate-500 leading-relaxed text-lg font-light">
                            {member.bio}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;