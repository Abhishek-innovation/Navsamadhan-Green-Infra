import React, { useState } from 'react';
import { MapPin, Calendar, Clock, CheckCircle2, ArrowUpRight, X, ImageIcon } from 'lucide-react';
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
  gallery: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectStatus>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Ward 1-10 Integrated Collection Pilot",
      location: "Begusarai Municipal Area",
      status: "Completed",
      date: "March 2024",
      description: "Successfully implemented 100% door-to-door source segregated waste collection for over 2,500 households. The project achieved a 95% segregation compliance rate through rigorous IEC campaigns and daily monitoring.",
      imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800", // Garbage truck
      gallery: [
        "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=800", // Segregated bins
        "https://images.unsplash.com/photo-1595278069441-2cf29f525a3c?auto=format&fit=crop&q=80&w=800", // Clean street
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800"  // Bins lined up
      ]
    },
    {
      id: 2,
      title: "Central Material Recovery Facility",
      location: "Industrial Zone, Begusarai",
      status: "Completed",
      date: "May 2024",
      description: "Establishment of a semi-automated MRF with a capacity of 5 TPD. This facility sorts dry waste into 20+ categories for recycling, diverting significant waste from landfills. Features include baling machines and magnetic separators.",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800", // Industrial facility
      gallery: [
        "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800", // Baled plastic
        "https://images.unsplash.com/photo-1562077981-4d7eafd44932?auto=format&fit=crop&q=80&w=800", // Plastic sorting
        "https://images.unsplash.com/photo-1604187351049-9714eaf5347d?auto=format&fit=crop&q=80&w=800"  // Recycling center
      ]
    },
    {
      id: 3,
      title: "Legacy Waste Bio-Mining",
      location: "Municipal Dump Site",
      status: "In Process",
      date: "Ongoing",
      description: "Reclamation of 5 acres of land through bio-mining of legacy waste. We are deploying trommels and excavators to process over 10,000 tons of accumulated waste, recovering soil and RDF.",
      imageUrl: "https://images.unsplash.com/photo-1591193686104-fddba4ed7e8d?auto=format&fit=crop&q=80&w=800", // Excavator
      gallery: [
        "https://images.unsplash.com/photo-1523293836414-f0cc71eb2658?auto=format&fit=crop&q=80&w=800", // Landfill site
        "https://images.unsplash.com/photo-1503596476-1c12a8ab9a04?auto=format&fit=crop&q=80&w=800", // Waste pile
        "https://images.unsplash.com/photo-1582283085025-a1c0d4841603?auto=format&fit=crop&q=80&w=800"  // Construction machinery
      ]
    },
    {
      id: 4,
      title: "Organic Waste Composting Hub",
      location: "Zone B Expansion Area",
      status: "In Process",
      date: "Dec 2024",
      description: "Construction of aerobic composting pits to convert wet waste from local vegetable markets and residences into high-quality city compost for agricultural use. Expected output: 2 tons/day.",
      imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800", // Holding soil/compost
      gallery: [
        "https://images.unsplash.com/photo-1589714878470-3631a0bc3d2c?auto=format&fit=crop&q=80&w=800", // Soil texture
        "https://images.unsplash.com/photo-1622383563227-0440114a8511?auto=format&fit=crop&q=80&w=800", // Seedling growing
        "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&q=80&w=800"  // Greenery
      ]
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
          <AnimatePresence mode="popLayout">
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
                <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
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
                  
                  <p className="text-slate-500 mb-8 leading-relaxed flex-grow font-light line-clamp-3">
                    {project.description}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-4 rounded-xl border border-slate-200 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center group/btn"
                  >
                    View Details & Gallery
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-72 md:h-96 flex-shrink-0">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                  <div className="flex items-center gap-3 mb-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        selectedProject.status === 'Completed' 
                          ? 'bg-emerald-500 text-white border-emerald-400' 
                          : 'bg-amber-500 text-white border-amber-400'
                      }`}>
                        {selectedProject.status}
                      </span>
                      <span className="flex items-center text-sm font-medium text-slate-300">
                        <Calendar className="h-4 w-4 mr-1.5" /> {selectedProject.date}
                      </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-12 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    <div className="flex items-center text-slate-500 font-medium bg-slate-50 p-4 rounded-xl inline-flex">
                      <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                      {selectedProject.location}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-4">Key Stats</h4>
                      <ul className="space-y-3">
                         <li className="flex justify-between text-sm">
                           <span className="text-slate-500">Timeline</span>
                           <span className="font-medium text-slate-900">6 Months</span>
                         </li>
                         <li className="flex justify-between text-sm">
                           <span className="text-slate-500">Impact</span>
                           <span className="font-medium text-slate-900">High</span>
                         </li>
                         <li className="flex justify-between text-sm">
                           <span className="text-slate-500">Contract</span>
                           <span className="font-medium text-slate-900">Municipal</span>
                         </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                      <ImageIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Project Gallery</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Main Image again for context or skip */}
                    {selectedProject.gallery.map((img, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl overflow-hidden h-64 shadow-md group relative"
                      >
                        <img 
                          src={img} 
                          alt={`Gallery ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      </motion.div>
                    ))}
                    {selectedProject.gallery.length === 0 && (
                      <div className="col-span-full py-12 text-center text-slate-400 bg-slate-50 rounded-2xl border-dashed border-2 border-slate-200">
                        Gallery images coming soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;