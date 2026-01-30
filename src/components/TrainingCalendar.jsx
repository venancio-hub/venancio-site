import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, User, CheckCircle2, Loader2, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateRandomCalendar } from '@/utils/RandomCalendarGenerator';
import { buttonVariants } from '@/styles/buttonStyles';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';

const TrainingCalendar = ({ regionName = "Macaé" }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');
  const [uniqueTypes, setUniqueTypes] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    const loadData = () => {
      const data = generateRandomCalendar(15);
      setEvents(data);
      
      // Extract unique types for filter
      const types = [...new Set(data.map(item => item.typeId))];
      setUniqueTypes(types);
      
      setLoading(false);
    };

    const timer = setTimeout(loadData, 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = filter === 'ALL' 
    ? events 
    : events.filter(e => e.typeId === filter);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b pb-6">
        <div>
           <h3 className="text-2xl font-bold text-[#1a3a52] flex items-center gap-2">
             <Calendar className="w-6 h-6 text-[#FFD700]" /> Próximas Turmas em {regionName}
           </h3>
           <p className="text-gray-500 text-sm mt-1">Calendário atualizado em tempo real</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 hide-scrollbar">
          <Filter className="w-4 h-4 text-gray-400 mr-1" />
          <Button 
            variant={filter === 'ALL' ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter('ALL')}
            className={filter === 'ALL' ? "bg-[#1a3a52] hover:bg-[#2a4a62]" : "text-gray-600"}
          >
            Todos
          </Button>
          {uniqueTypes.map(type => (
            <Button 
              key={type}
              variant={filter === type ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(type)}
              className={filter === type ? "bg-[#1a3a52] hover:bg-[#2a4a62]" : "text-gray-600"}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-10 h-10 text-[#1a3a52] animate-spin" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#FFD700] transition-colors flex flex-col group"
              >
                <div className="bg-[#1a3a52] p-4 text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-2 opacity-10">
                     <CheckCircle2 className="w-16 h-16" />
                   </div>
                   <div className="flex justify-between items-start relative z-10">
                     <span className="font-bold text-lg">{event.typeId}</span>
                     <span className="bg-[#25D366] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        {event.spots} vagas
                     </span>
                   </div>
                   <h4 className="text-sm font-medium opacity-90 mt-1 relative z-10 line-clamp-2 min-h-[40px]">
                     {event.title}
                   </h4>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-[#FFD700] flex-shrink-0" />
                      <span className="font-medium">{event.dateStr}</span>
                      <span className="text-gray-400 mx-1">•</span>
                      <span className="capitalize text-gray-500">{event.weekday}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-[#FFD700] flex-shrink-0" />
                      <span>{event.time} ({event.duration})</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-[#FFD700] flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <User className="w-4 h-4 mr-2 text-[#FFD700] flex-shrink-0" />
                      <span className="truncate">{event.instructor}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <BudgetRequestFormModal 
                      trigger={
                        <Button className={buttonVariants.primary.replace("px-6 py-3 text-lg", "w-full text-sm")}>
                          Solicitar Orçamento <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      }
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {!loading && filteredEvents.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-4">Nenhum treinamento encontrado para este filtro.</p>
          <Button variant="outline" onClick={() => setFilter('ALL')}>Limpar Filtros</Button>
        </div>
      )}
    </div>
  );
};

export default TrainingCalendar;