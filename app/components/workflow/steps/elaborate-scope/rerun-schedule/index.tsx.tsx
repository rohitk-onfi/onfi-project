import React, { useState } from "react";
import { Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { getCronExpression, getScheduleDescription } from "../helper";
import HourlyRerunSchedule from "@/app/components/workflow/steps/elaborate-scope/rerun-schedule/HourlyRerunSchedule";
import DailyRerunSchedule from "@/app/components/workflow/steps/elaborate-scope/rerun-schedule/DailyRerunSchedule";
import WeeklyRerunSchedule from "@/app/components/workflow/steps/elaborate-scope/rerun-schedule/WeeklyRerunSchedule";
import MonthlyRerunSchedule from "@/app/components/workflow/steps/elaborate-scope/rerun-schedule/MonthlyRerunSchedule";

interface RerunScheduleProps {
    data: any;
}

const RerunSchedule: React.FC<RerunScheduleProps> = ({ data }) => {
    const [frequency, setFrequency] = useState("daily");
    const [time, setTime] = useState("09:00");
    const [weekdays, setWeekdays] = useState(["1", "2", "3", "4", "5"]);
    const [monthDays, setMonthDays] = useState(["1"]);
    const [retryEnabled, setRetryEnabled] = useState(true);
    const [retryAttempts, setRetryAttempts] = useState("3");
    const [retryDelay, setRetryDelay] = useState("15");
    const [customHourly, setCustomHourly] = useState(false);
    const [hourlyInterval, setHourlyInterval] = useState("1");
    const [hourlyMinute, setHourlyMinute] = useState("0");

    const handleHourlyPresetChange = (minutes: string, hours?: string) => {
        if (hours) {
            setCustomHourly(true);
            setHourlyInterval(hours.replace("*/", ""));
            setHourlyMinute(minutes);
        } else {
            setCustomHourly(false);
            setHourlyMinute(minutes);
        }
    };

    return (
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

                        {frequency === "hourly" && (
                            <HourlyRerunSchedule
                                customHourly={customHourly}
                                hourlyMinute={hourlyMinute}
                                hourlyInterval={hourlyInterval}
                                handleHourlyPresetChange={handleHourlyPresetChange}
                                setHourlyMinute={setHourlyMinute}
                                setCustomHourly={setCustomHourly}
                                setHourlyInterval={setHourlyInterval}
                            />
                        )}

                        {frequency === "daily" && <DailyRerunSchedule time={time} setTime={setTime} />}

                        {frequency === "weekly" && <WeeklyRerunSchedule weekdays={weekdays} setWeekdays={setWeekdays} />}

                        {frequency === "monthly" && <MonthlyRerunSchedule monthDays={monthDays} setMonthDays={setMonthDays} />}
                    </div>

                    <div className="space-y-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                            <h3 className="text-sm font-medium mb-2">Schedule Summary</h3>
                            <p className="text-sm text-muted-foreground">{getScheduleDescription(frequency, customHourly, hourlyMinute, hourlyInterval, time, weekdays, monthDays)}</p>
                            <div className="mt-2 pt-2 border-t">
                                <p className="text-xs font-mono text-muted-foreground">
                                    Cron expression: {getCronExpression(frequency, customHourly, hourlyMinute, hourlyInterval, time, weekdays, monthDays)}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-2">
                                <Checkbox checked={retryEnabled} onCheckedChange={(checked) => setRetryEnabled(checked as boolean)} />
                                <label className="text-sm font-medium">Enable automatic retry on failure</label>
                            </div>

                            {retryEnabled && (
                                <div className="grid grid-cols-2 gap-6 pl-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Maximum Retry Attempts</label>
                                        <Input type="number" min="1" max="10" value={retryAttempts} onChange={(e) => setRetryAttempts(e.target.value)} className="w-full max-w-[100px]" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Delay Between Retries (minutes)</label>
                                        <Input type="number" min="1" max="60" value={retryDelay} onChange={(e) => setRetryDelay(e.target.value)} className="w-full max-w-[100px]" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RerunSchedule;
