import React from "react";
import { Button } from "@/components/ui/button";

interface MonthlyRerunScheduleProps {
    monthDays: string[];
    setMonthDays: React.Dispatch<React.SetStateAction<string[]>>;
}

const MonthlyRerunSchedule: React.FC<MonthlyRerunScheduleProps> = ({ monthDays, setMonthDays }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">Days of Month</label>
            <div className="flex flex-wrap gap-2">
                {[1, 5, 10, 15, 20, 25].map((day) => (
                    <Button
                        key={day}
                        variant={monthDays.includes(String(day)) ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                            setMonthDays(monthDays.includes(String(day)) ? monthDays.filter((d) => d !== String(day)) : [...monthDays, String(day)]);
                        }}>
                        {day}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default MonthlyRerunSchedule;
