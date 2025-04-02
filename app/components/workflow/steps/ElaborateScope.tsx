'use client';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Menu, Tag, ListChecks, MoreVertical, Plus, Clock, AlertCircle, Check } from 'lucide-react';
import { scopeData } from '@/app/config/constants';
import { useState } from 'react';

const hourPresets = [
  { label: 'Every hour', value: '0' },
  { label: 'Every 2 hours', minutes: '0', hours: '*/2' },
  { label: 'Every 4 hours', minutes: '0', hours: '*/4' },
  { label: 'Every 6 hours', minutes: '0', hours: '*/6' },
  { label: 'Every 8 hours', minutes: '0', hours: '*/8' },
  { label: 'Every 12 hours', minutes: '0', hours: '*/12' },
];

const dailyPresets = [
  { label: 'Early morning (6 AM)', time: '06:00' },
  { label: 'Morning (9 AM)', time: '09:00' },
  { label: 'Noon (12 PM)', time: '12:00' },
  { label: 'Afternoon (3 PM)', time: '15:00' },
  { label: 'Evening (6 PM)', time: '18:00' },
  { label: 'Night (9 PM)', time: '21:00' },
];

export function ElaborateScope() {
  const [frequency, setFrequency] = useState('daily');
  const [time, setTime] = useState('09:00');
  const [weekdays, setWeekdays] = useState(['1', '2', '3', '4', '5']);
  const [monthDays, setMonthDays] = useState(['1']);
  const [retryEnabled, setRetryEnabled] = useState(true);
  const [retryAttempts, setRetryAttempts] = useState('3');
  const [retryDelay, setRetryDelay] = useState('15');
  const [customHourly, setCustomHourly] = useState(false);
  const [hourlyInterval, setHourlyInterval] = useState('1');
  const [hourlyMinute, setHourlyMinute] = useState('0');

  const handleHourlyPresetChange = (minutes: string, hours?: string) => {
    if (hours) {
      setCustomHourly(true);
      setHourlyInterval(hours.replace('*/', ''));
      setHourlyMinute(minutes);
    } else {
      setCustomHourly(false);
      setHourlyMinute(minutes);
    }
  };

  // Convert user-friendly settings to cron expression
  const getCronExpression = () => {
    if (frequency === 'hourly') {
      if (customHourly) {
        return `${hourlyMinute} */${hourlyInterval} * * *`;
      }
      return `${hourlyMinute} * * * *`;
    }

    const [hours, minutes] = time.split(':');
    
    switch (frequency) {
      case 'daily':
        return `${minutes} ${hours} * * *`;
      case 'weekly':
        return `${minutes} ${hours} * * ${weekdays.join(',')}`;
      case 'monthly':
        return `${minutes} ${hours} ${monthDays.join(',')} * *`;
      default:
        return '0 0 * * *';
    }
  };

  const getScheduleDescription = () => {
    if (frequency === 'hourly') {
      if (customHourly) {
        return `Every ${hourlyInterval} hours at ${hourlyMinute} minutes past the hour`;
      }
      return `Every hour at ${hourlyMinute} minutes past the hour`;
    }

    const timeStr = new Date(`2000-01-01T${time}`).toLocaleTimeString([], { 
      hour: 'numeric', 
      minute: '2-digit'
    });

    switch (frequency) {
      case 'daily':
        return `Every day at ${timeStr}`;
      case 'weekly':
        return `Every ${weekdays.map(d => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][Number(d)]).join(', ')} at ${timeStr}`;
      case 'monthly':
        return `On day${monthDays.length > 1 ? 's' : ''} ${monthDays.join(', ')} of each month at ${timeStr}`;
      default:
        return 'Schedule not set';
    }
  };

  return (
    <div className="space-y-6">
      {/* Existing Scope Table */}
      <div className="rounded-lg border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex flex-col">
            <h2 className="text-base font-medium">Elaborate Scope</h2>
            <p className="text-xs text-muted-foreground">Investigation Scope Definition</p>
          </div>
          <Button size="sm" className="h-9">
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b">
              <TableHead className="w-[15%] border-r">
                <div className="flex items-center gap-2">
                  <Menu className="h-4 w-4" />
                  Heading
                </div>
              </TableHead>
              <TableHead className="w-[10%] border-r">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Category
                </div>
              </TableHead>
              <TableHead className="w-[67%] border-r">
                <div className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4" />
                  Manner of Investigation
                </div>
              </TableHead>
              <TableHead className="w-[8%] text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scopeData.map((item, index) => (
              <TableRow key={index} className="border-b last:border-b-0">
                <TableCell className="font-medium border-r">{item.heading}</TableCell>
                <TableCell className="border-r">
                  <Badge variant="secondary" className="font-normal">
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="border-r">{item.investigation}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* User-friendly Schedule Configuration */}
      <div className="rounded-lg border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <h2 className="text-base font-medium">Default Rerun Schedule</h2>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Configure when investigations should automatically run</p>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Run Frequency</label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Every Hour</SelectItem>
                    <SelectItem value="daily">Every Day</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {frequency === 'hourly' && (
                <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {hourPresets.map((preset, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={`justify-start h-auto py-2 px-3 relative ${
                          !customHourly && preset.value === hourlyMinute || 
                          (customHourly && preset.hours === `*/${hourlyInterval}` && preset.minutes === hourlyMinute)
                            ? 'border-primary'
                            : ''
                        }`}
                        // onClick={() => handleHourlyPresetChange(preset.minutes || preset.value, preset.hours)}
                      >
                        <div className="flex flex-col items-start">
                          <span className="text-sm">{preset.label}</span>
                        </div>
                        {(!customHourly && preset.value === hourlyMinute) || 
                         (customHourly && preset.hours === `*/${hourlyInterval}` && preset.minutes === hourlyMinute) ? (
                          <Check className="h-4 w-4 absolute top-2 right-2 text-primary" />
                        ) : null}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2 pt-2 border-t">
                    <label className="text-sm font-medium">Custom Settings</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground">Minutes past the hour</label>
                        <Input
                          type="number"
                          min="0"
                          max="59"
                          value={hourlyMinute}
                          onChange={(e) => {
                            setHourlyMinute(e.target.value);
                            setCustomHourly(true);
                          }}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground">Hour interval</label>
                        <Input
                          type="number"
                          min="1"
                          max="12"
                          value={hourlyInterval}
                          onChange={(e) => {
                            setHourlyInterval(e.target.value);
                            setCustomHourly(true);
                          }}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {frequency === 'daily' && (
                <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {dailyPresets.map((preset, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={`justify-start h-auto py-2 px-3 relative ${
                          preset.time === time ? 'border-primary' : ''
                        }`}
                        onClick={() => setTime(preset.time)}
                      >
                        <div className="flex flex-col items-start">
                          <span className="text-sm">{preset.label}</span>
                          <span className="text-xs text-muted-foreground">{preset.time}</span>
                        </div>
                        {preset.time === time && (
                          <Check className="h-4 w-4 absolute top-2 right-2 text-primary" />
                        )}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2 pt-2 border-t">
                    <label className="text-sm font-medium">Custom Time</label>
                    <Input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              )}

              {frequency === 'weekly' && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Days of Week</label>
                  <div className="flex flex-wrap gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                      <Button
                        key={day}
                        variant={weekdays.includes(String(i)) ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          setWeekdays(
                            weekdays.includes(String(i))
                              ? weekdays.filter(d => d !== String(i))
                              : [...weekdays, String(i)]
                          );
                        }}
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {frequency === 'monthly' && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Days of Month</label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 5, 10, 15, 20, 25].map(day => (
                      <Button
                        key={day}
                        variant={monthDays.includes(String(day)) ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          setMonthDays(
                            monthDays.includes(String(day))
                              ? monthDays.filter(d => d !== String(day))
                              : [...monthDays, String(day)]
                          );
                        }}
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="text-sm font-medium mb-2">Schedule Summary</h3>
                <p className="text-sm text-muted-foreground">
                  {getScheduleDescription()}
                </p>
                <div className="mt-2 pt-2 border-t">
                  <p className="text-xs font-mono text-muted-foreground">
                    Cron expression: {getCronExpression()}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={retryEnabled}
                    onCheckedChange={(checked) => setRetryEnabled(checked as boolean)}
                  />
                  <label className="text-sm font-medium">Enable automatic retry on failure</label>
                </div>

                {retryEnabled && (
                  <div className="grid grid-cols-2 gap-6 pl-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Maximum Retry Attempts</label>
                      <Input
                        type="number"
                        min="1"
                        max="10"
                        value={retryAttempts}
                        onChange={(e) => setRetryAttempts(e.target.value)}
                        className="w-full max-w-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Delay Between Retries (minutes)</label>
                      <Input
                        type="number"
                        min="1"
                        max="60"
                        value={retryDelay}
                        onChange={(e) => setRetryDelay(e.target.value)}
                        className="w-full max-w-[100px]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}