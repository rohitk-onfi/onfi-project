'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import {
  FileText, Clock, AlertCircle, Plus, User, CheckSquare, Database,
  BarChart2, Settings, Pause, Play, Trash2, DollarSign, AlertTriangle, ListChecks, LineChart
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Investigation {
  id: string;
  name: string;
  createdBy: string;
  lastRun: string;
  nextRun: string;
  frequency: string;
  entity: string;
  checklistItems: number;
  sources: number;
  status: 'active' | 'paused' ;
  complianceRate: number;
  queueItems: number;
  alerts7d: number;
  reports7d: number;
}

const investigations: Investigation[] = [
  {
    id: '1',
    name: 'Transaction Pattern Analysis',
    createdBy: 'Sarah Johnson',
    lastRun: '2024-03-21 14:30',
    nextRun: '2024-03-22 14:30',
    frequency: 'Every 24 hours',
    entity: 'Transactions',
    checklistItems: 12,
    sources: 3,
    status: 'active',
    complianceRate: 98.5,
    queueItems: 23,
    alerts7d: 5,
    reports7d: 12
  },
  {
    id: '2',
    name: 'Customer Profile Verification',
    createdBy: 'Michael Chen',
    lastRun: '2024-03-21 12:00',
    nextRun: '2024-03-22 12:00',
    frequency: 'Every 12 hours',
    entity: 'Customers',
    checklistItems: 8,
    sources: 2,
    status: 'active',
    complianceRate: 100,
    queueItems: 0,
    alerts7d: 0,
    reports7d: 8
  },
  {
    id: '3',
    name: 'Regulatory Compliance Check',
    createdBy: 'Alex Thompson',
    lastRun: '2024-03-21 10:15',
    nextRun: '2024-03-22 10:15',
    frequency: 'Every 6 hours',
    entity: 'Regulations',
    checklistItems: 15,
    sources: 5,
    status: 'paused',
    complianceRate: 85.2,
    queueItems: 45,
    alerts7d: 12,
    reports7d: 3
  }
];

export default function Home() {
  const handleStatusToggle = (id: string) => {
    // Implementation for toggling status
    console.log('Toggle status for:', id);
  };

  const handleDelete = (id: string) => {
    // Implementation for deleting investigation
    console.log('Delete investigation:', id);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <Card className="mb-6">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-lg font-medium">Your Investigations</h1>
              <p className="text-xs text-muted-foreground">Manage and monitor your automated investigations</p>
            </div>
            <Button 
              onClick={() => window.location.href = '/workflow'}
              className="bg-primary hover:bg-primary/90"
            >
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
                <div 
                  key={investigation.id} 
                  className="h-[64px] border-b last:border-b-0 flex items-center px-6 hover:bg-muted/50"
                >
                  <Link 
                    href={`/workflow?id=${investigation.id}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {investigation.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto ml-[400px]">
              <table className="w-full min-w-[2200px]">
                <thead>
                  <tr className="h-[64px] border-b">
                    <th className="w-[180px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Created By
                      </div>
                    </th>
                    <th className="w-[160px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Last Run
                      </div>
                    </th>
                    <th className="w-[160px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Next Run
                      </div>
                    </th>
                    <th className="w-[160px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Frequency
                      </div>
                    </th>
                    <th className="w-[140px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Entity
                      </div>
                    </th>
                    <th className="w-[120px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="h-4 w-4" />
                        Checklist
                      </div>
                    </th>
                    <th className="w-[120px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Sources
                      </div>
                    </th>
                    <th className="w-[200px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <LineChart className="h-4 w-4" />
                        Compliance Rate
                      </div>
                    </th>
                    <th className="w-[120px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <ListChecks className="h-4 w-4" />
                        Queue
                      </div>
                    </th>
                    <th className="w-[180px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Alerts (7d)
                      </div>
                    </th>
                    <th className="w-[180px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Reports (7d)
                      </div>
                    </th>
                    <th className="w-[120px] px-6 text-left font-medium border-r">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Status
                      </div>
                    </th>
                    <th className="w-[100px] px-6 text-right font-medium">
                      <div className="flex items-center gap-2 justify-end">
                        <Settings className="h-4 w-4" />
                        Actions
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {investigations.map((investigation) => (
                    <tr key={investigation.id} className="h-[64px] border-b last:border-b-0 hover:bg-muted/50">
                      <td className="px-6 border-r">{investigation.createdBy}</td>
                      <td className="px-6 border-r">{investigation.lastRun}</td>
                      <td className="px-6 border-r">{investigation.nextRun}</td>
                      <td className="px-6 border-r">{investigation.frequency}</td>
                      <td className="px-6 border-r">
                        <Link 
                          href={`/entity/${investigation.entity.toLowerCase()}`}
                          className="text-primary hover:underline"
                        >
                          {investigation.entity}
                        </Link>
                      </td>
                      <td className="px-6 border-r">{investigation.checklistItems}</td>
                      <td className="px-6 border-r">{investigation.sources}</td>
                      <td className="px-6 border-r">
                        <span className={`font-medium ${
                          investigation.complianceRate >= 98 ? 'text-green-600' :
                          investigation.complianceRate >= 90 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {investigation.complianceRate}%
                        </span>
                      </td>
                      <td className="px-6 border-r">{investigation.queueItems}</td>
                      <td className="px-6 border-r">{investigation.alerts7d}</td>
                      <td className="px-6 border-r">{investigation.reports7d}</td>
                      <td className="px-6 border-r">
                        <Badge variant={
                          investigation.status === 'active' ? 'default' :
                          investigation.status === 'completed' ? 'secondary' :
                          investigation.status === 'paused' ? 'outline' :
                          'destructive'
                        }>
                          {investigation.status.charAt(0).toUpperCase() + investigation.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-6 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem onClick={() => window.location.href = `/dashboard/${investigation.id}`}>
                              <BarChart2 className="h-4 w-4 mr-2" />
                              View Dashboard
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => window.location.href = `/workflow?id=${investigation.id}`}>
                              <Settings className="h-4 w-4 mr-2" />
                              Edit Pipeline
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => window.location.href = `/costs/${investigation.id}`}>
                              <DollarSign className="h-4 w-4 mr-2" />
                              Cost Analysis
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusToggle(investigation.id)}>
                              {investigation.status === 'paused' ? (
                                <>
                                  <Play className="h-4 w-4 mr-2" />
                                  Resume Pipeline
                                </>
                              ) : (
                                <>
                                  <Pause className="h-4 w-4 mr-2" />
                                  Pause Pipeline
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleDelete(investigation.id)}
                              className="text-destructive focus:text-destructive"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete Pipeline
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}