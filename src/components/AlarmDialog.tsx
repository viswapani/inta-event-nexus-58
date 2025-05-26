
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { alarm-clock, Clock, Plus, X } from 'lucide-react';

interface BookmarkAlarm {
  id: string;
  minutes: number;
  enabled: boolean;
}

interface AlarmDialogProps {
  sessionTitle: string;
  sessionTime: string;
  alarms: BookmarkAlarm[];
  onAlarmsUpdate: (alarms: BookmarkAlarm[]) => void;
  trigger: React.ReactNode;
}

const PRESET_ALARMS = [
  { minutes: 5, label: '5 minutes before' },
  { minutes: 15, label: '15 minutes before' },
  { minutes: 30, label: '30 minutes before' },
  { minutes: 60, label: '1 hour before' },
  { minutes: 120, label: '2 hours before' },
];

const AlarmDialog = ({ sessionTitle, sessionTime, alarms, onAlarmsUpdate, trigger }: AlarmDialogProps) => {
  const [currentAlarms, setCurrentAlarms] = useState<BookmarkAlarm[]>(alarms);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddAlarm = (minutes: number) => {
    const newAlarm: BookmarkAlarm = {
      id: Date.now().toString(),
      minutes,
      enabled: true,
    };
    const updated = [...currentAlarms, newAlarm];
    setCurrentAlarms(updated);
  };

  const handleRemoveAlarm = (alarmId: string) => {
    const updated = currentAlarms.filter(alarm => alarm.id !== alarmId);
    setCurrentAlarms(updated);
  };

  const handleToggleAlarm = (alarmId: string) => {
    const updated = currentAlarms.map(alarm => 
      alarm.id === alarmId ? { ...alarm, enabled: !alarm.enabled } : alarm
    );
    setCurrentAlarms(updated);
  };

  const handleSave = () => {
    onAlarmsUpdate(currentAlarms);
    setIsOpen(false);
  };

  const formatAlarmTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <alarm-clock className="w-5 h-5" />
            Set Alarms
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-medium text-sm text-gray-900">{sessionTitle}</h4>
            <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
              <Clock className="w-4 h-4" />
              {sessionTime}
            </p>
          </div>

          <div>
            <h5 className="font-medium text-sm mb-3">Active Alarms</h5>
            {currentAlarms.length === 0 ? (
              <p className="text-sm text-gray-500 italic">No alarms set</p>
            ) : (
              <div className="space-y-2">
                {currentAlarms.map((alarm) => (
                  <div key={alarm.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        checked={alarm.enabled}
                        onCheckedChange={() => handleToggleAlarm(alarm.id)}
                      />
                      <span className={`text-sm ${alarm.enabled ? 'text-gray-900' : 'text-gray-500'}`}>
                        {formatAlarmTime(alarm.minutes)} before
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveAlarm(alarm.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h5 className="font-medium text-sm mb-3">Add Alarm</h5>
            <div className="flex flex-wrap gap-2">
              {PRESET_ALARMS.map((preset) => {
                const alreadyExists = currentAlarms.some(alarm => alarm.minutes === preset.minutes);
                return (
                  <Button
                    key={preset.minutes}
                    variant="outline"
                    size="sm"
                    disabled={alreadyExists}
                    onClick={() => handleAddAlarm(preset.minutes)}
                    className="text-xs"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {preset.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} className="flex-1">
              Save Alarms
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlarmDialog;
