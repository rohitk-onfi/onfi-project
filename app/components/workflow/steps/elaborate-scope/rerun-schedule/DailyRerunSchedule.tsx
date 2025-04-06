import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { dailyPresets } from "@/app/components/workflow/data";

interface DailyRerunScheduleProps {
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
}

const DailyRerunSchedule: React.FC<DailyRerunScheduleProps> = ({ time, setTime }) => {
    return (
        <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                {dailyPresets.map((preset, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={`justify-start h-auto py-2 px-3 relative ${preset.time === time ? "border-primary" : ""}`}
                        onClick={() => setTime(preset.time)}>
                        <div className="flex flex-col items-start">
                            <span className="text-sm">{preset.label}</span>
                            <span className="text-xs text-muted-foreground">{preset.time}</span>
                        </div>
                        {preset.time === time && <Check className="h-4 w-4 absolute top-2 right-2 text-primary" />}
                    </Button>
                ))}
            </div>

            <div className="space-y-2 pt-2 border-t">
                <label className="text-sm font-medium">Custom Time</label>
                <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full" />
            </div>
        </div>
    );
};

export default DailyRerunSchedule;
