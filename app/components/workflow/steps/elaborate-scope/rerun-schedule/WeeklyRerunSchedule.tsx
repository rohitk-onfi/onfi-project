import React from "react";
import { Button } from "@/components/ui/button";

interface WeeklyRerunScheduleProps {
    weekdays: string[];
    setWeekdays: React.Dispatch<React.SetStateAction<string[]>>;
}

const WeeklyRerunSchedule: React.FC<WeeklyRerunScheduleProps> = ({ weekdays, setWeekdays }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">Days of Week</label>
            <div className="flex flex-wrap gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                    <Button
                        key={day}
                        variant={weekdays.includes(String(i)) ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                            setWeekdays(weekdays.includes(String(i)) ? weekdays.filter((d) => d !== String(i)) : [...weekdays, String(i)]);
                        }}>
                        {day}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default WeeklyRerunSchedule;