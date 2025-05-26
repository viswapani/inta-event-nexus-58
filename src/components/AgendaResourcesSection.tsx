
import { Button } from '@/components/ui/button';
import { Download, Smartphone, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AgendaResourcesSection = () => {
  const { toast } = useToast();

  const handleDownload = (type: string) => {
    toast({
      title: `${type} Download`,
      description: `${type} download will begin shortly...`
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-100">
      <h3 className="text-2xl font-semibold text-inta-navy mb-6 text-center">Event Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Button 
          onClick={() => handleDownload('Floorplan')}
          className="bg-inta-blue hover:bg-inta-navy text-white h-16 text-lg font-semibold"
        >
          <Download className="w-6 h-6 mr-3" />
          Download the Floorplan
        </Button>
        <Button 
          onClick={() => handleDownload('Mobile App')}
          className="bg-inta-accent hover:bg-orange-600 text-white h-16 text-lg font-semibold"
        >
          <Smartphone className="w-6 h-6 mr-3" />
          Download the Mobile App
        </Button>
        <Button 
          onClick={() => handleDownload('Schedule-at-a-Glance')}
          className="bg-inta-navy hover:bg-gray-800 text-white h-16 text-lg font-semibold"
        >
          <FileText className="w-6 h-6 mr-3" />
          Schedule-at-a-Glance
        </Button>
      </div>
    </div>
  );
};

export default AgendaResourcesSection;
