import React, { useState } from 'react';
import { MapPin, Calendar, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectStatus = 'All' | 'Completed' | 'In Process';

interface Project {
  id: number;
  title: string;
  location: string;
  status: 'Completed' | 'In Process';
  date: string;
  description: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectStatus>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Ward 1-10 Integrated Collection Pilot",
      location: "Begusarai Municipal Area",
      status: "Completed",
      date: "March 2024",
      description: "Successfully implemented 100% door-to-door source segregated waste collection for over 2,500 households. The project achieved a 95% segregation compliance rate.",
      imageUrl: "https://images.unsplash.com/photo-1595278069441-2cf29f525a3c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Central Material Recovery Facility",
      location: "Industrial Zone, Begusarai",
      status: "Completed",
      date: "May 2024",
      description: "Establishment of a semi-automated MRF with a capacity of 5 TPD. This facility sorts dry waste into 20+ categories for recycling, diverting significant waste from landfills.",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Legacy Waste Bio-Mining",
      location: "Municipal Dump Site",
      status: "In Process",
      date: "Ongoing",
      description: "Reclamation of 5 acres of land through bio-mining of legacy waste. We are deploying trommels and excavators to process over 10,000 tons of accumulated waste.",
      imageUrl: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Organic Waste Composting Hub",
      location: "Zone B Expansion Area",
      status: "In Process",
      date: "Dec 2024",
      description: "Construction of aerobic composting pits to convert wet waste from local vegetable markets and residences into high-quality city compost for agricultural use.",
      imageUrl: "https://images.unsplash.com/photo-1589714878470-3631a0bc3d2c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const filters: ProjectStatus[] = ['All', 'Completed', 'In Process'];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            Transforming the landscape of Bihar, one project at a time.
          </motion.p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-slate-50/90 backdrop-blur-md py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex">
            {filters.map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === status
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full group"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${
                      project.status === 'Completed' 
                        ? 'bg-emerald-500/90 text-white border-emerald-400' 
                        : 'bg-amber-400/90 text-amber-950 border-amber-300'
                    } flex items-center gap-2 shadow-lg`}>
                      {project.status === 'Completed' ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-center px-3 py-1 bg-slate-50 rounded-lg">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                      {project.location}
                    </div>
                    <div className="flex items-center px-3 py-1 bg-slate-50 rounded-lg">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-slate-500 mb-8 leading-relaxed flex-grow font-light">
                    {project.description}
                  </p>
                  
                  <button className="w-full py-4 rounded-xl border border-slate-200 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center group/btn">
                    View Details 
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;