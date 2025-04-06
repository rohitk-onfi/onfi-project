import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Edit2, Check } from "lucide-react";

interface PipelineProps {}

const Pipeline: React.FC<PipelineProps> = ({}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [pipelineName, setPipelineName] = useState("Transaction Pattern Analysis");
    const [pipelineDescription, setPipelineDescription] = useState("Automated investigation pipeline for detecting and analyzing transaction patterns across multiple data sources.");
    const [isPipelineActive, setIsPipelineActive] = useState(true);

    return (
        <Card className="mb-8">
            <CardContent className="pt-6">
                {isEditing ? (
                    <div className="space-y-4">
                        <div>
                            <Input value={pipelineName} onChange={(e) => setPipelineName(e.target.value)} className="text-xl font-semibold" placeholder="Enter pipeline name" />
                        </div>
                        <div>
                            <Textarea value={pipelineDescription} onChange={(e) => setPipelineDescription(e.target.value)} className="resize-none" placeholder="Enter pipeline description" />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setIsEditing(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setIsEditing(false)}>
                                <Check className="h-4 w-4 mr-2" />
                                Save Changes
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">{pipelineName}</h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">{isPipelineActive ? "Active" : "Inactive"}</span>
                                    <Switch checked={isPipelineActive} onCheckedChange={setIsPipelineActive} />
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                                    <Edit2 className="h-4 w-4 mr-2" />
                                    Edit
                                </Button>
                            </div>
                        </div>
                        <p className="text-muted-foreground">{pipelineDescription}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default Pipeline;
