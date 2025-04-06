import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Pause, Play, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { InProgressItem } from "@/app/components/dashboard/data";

interface CurrentlyInProgressProps {
    data: InProgressItem[];
}

const CurrentlyInProgress: React.FC<CurrentlyInProgressProps> = ({ data }) => {
    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Currently In Progress</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {data.map((item, index) => (
                        <div key={index} className="p-6 rounded-lg border bg-card">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Activity className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground">{item.status === "running" ? "Processing..." : "Investigation paused"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <div className="text-sm font-medium">ETA</div>
                                        <div className="text-sm text-muted-foreground">{item.eta}</div>
                                    </div>
                                    <Badge variant={item.status === "running" ? "default" : "secondary"} className="h-7 px-3">
                                        {item.status === "running" ? (
                                            <div className="flex items-center gap-2">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                </span>
                                                Running
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
                                                </span>
                                                Paused
                                            </div>
                                        )}
                                    </Badge>
                                    <Button variant="ghost" size="icon" className="h-7 w-7">
                                        {item.status === "running" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className={cn("h-full rounded-full transition-all duration-500 ease-in-out", item.status === "running" ? "bg-primary" : "bg-muted-foreground")}
                                        style={{ width: `${item.progress}%` }}></div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">{item.progress}%</span>
                                        <span className="text-muted-foreground">complete</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="h-4 w-4" />
                                        <span>Started 2 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CurrentlyInProgress;
