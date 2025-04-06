"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FileText, Plus } from "lucide-react";
import { investigations } from "@/app/components/home/data";
import InvestigationTable from "@/app/components/home/InvestigationTable";

const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto py-8 px-4">
                <Card className="mb-6">
                    <CardContent className="flex items-center justify-between py-4">
                        <div>
                            <h1 className="text-lg font-medium">Your Investigations</h1>
                            <p className="text-xs text-muted-foreground">Manage and monitor your automated investigations</p>
                        </div>
                        <Button onClick={() => (window.location.href = "/workflow")} className="bg-primary hover:bg-primary/90">
                            <Plus className="h-4 w-4 mr-2" />
                            New Investigation
                        </Button>
                    </CardContent>
                </Card>

                <div className="rounded-lg border bg-card">
                    <div className="flex relative">
                        <div className="w-[400px] absolute left-0 top-0 bottom-0 bg-background z-10 border-r">
                            <div className="h-[64px] border-b flex items-center px-6">
                                <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <span className="text-sm font-medium">Investigation Name</span>
                                </div>
                            </div>
                            {investigations.map((investigation) => (
                                <div key={investigation.id} className="h-[64px] border-b last:border-b-0 flex items-center px-6 hover:bg-muted/50">
                                    <Link href={`/workflow?id=${investigation.id}`} className="font-medium text-primary hover:underline">
                                        {investigation.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <InvestigationTable data={investigations} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
