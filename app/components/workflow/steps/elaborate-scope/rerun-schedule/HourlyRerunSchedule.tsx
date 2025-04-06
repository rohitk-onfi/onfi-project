import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { hourPresets } from "@/app/components/workflow/data";

interface HourlyRerunScheduleProps {
    customHourly: boolean;
    hourlyMinute: string;
    hourlyInterval: string;
    handleHourlyPresetChange: (minutes: string, hours?: string) => void;
    setHourlyMinute: React.Dispatch<React.SetStateAction<string>>;
    setCustomHourly: React.Dispatch<React.SetStateAction<boolean>>;
    setHourlyInterval: React.Dispatch<React.SetStateAction<string>>;
}

const HourlyRerunSchedule: React.FC<HourlyRerunScheduleProps> = ({ customHourly, hourlyMinute, hourlyInterval, handleHourlyPresetChange, setHourlyMinute, setCustomHourly, setHourlyInterval }) => {
    return (
        <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                {hourPresets.map((preset, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={`justify-start h-auto py-2 px-3 relative ${
                            (!customHourly && preset.value === hourlyMinute) || (customHourly && preset.hours === `*/${hourlyInterval}` && preset.minutes === hourlyMinute) ? "border-primary" : ""
                        }`}
                        onClick={() => handleHourlyPresetChange(preset.minutes || preset.value || "", preset.hours)}>
                        <div className="flex flex-col items-start">
                            <span className="text-sm">{preset.label}</span>
                        </div>
                        {(!customHourly && preset.value === hourlyMinute) || (customHourly && preset.hours === `*/${hourlyInterval}` && preset.minutes === hourlyMinute) ? (
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
    );
};

export default HourlyRerunSchedule;