
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar } from 'lucide-react';
import SessionCard from './SessionCard';

interface Program {
  id: string;
  title: string;
  description: string;
  days: Array<{
    date: string;
    sessions: Array<{
      time: string;
      title: string;
      location: string;
      track: string;
      speakers: string[];
      description: string;
    }>;
  }>;
}

interface ProgramAccordionProps {
  programs: Program[];
}

const ProgramAccordion = ({ programs }: ProgramAccordionProps) => {
  return (
    <div className="space-y-6">
      <Accordion type="multiple" className="space-y-4">
        {programs.map((program) => (
          <AccordionItem 
            key={program.id} 
            value={program.id}
            className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gray-50 text-left">
              <div>
                <h3 className="text-2xl font-bold text-inta-navy mb-2">{program.title}</h3>
                <p className="text-inta-gray text-lg">{program.description}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0">
              <div className="border-t border-gray-200">
                {program.days.map((day, dayIndex) => (
                  <div key={dayIndex} className="border-b border-gray-100 last:border-b-0">
                    <div className="bg-inta-navy text-white px-8 py-4">
                      <h4 className="text-xl font-semibold flex items-center">
                        <Calendar className="w-6 h-6 mr-3" />
                        {day.date}
                      </h4>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {day.sessions.map((session, sessionIndex) => (
                        <SessionCard 
                          key={sessionIndex} 
                          session={session}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProgramAccordion;
