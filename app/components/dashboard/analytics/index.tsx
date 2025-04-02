import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert } from '@/components/alerts/Alert';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle } from 'lucide-react';

import AnalyticsCard from './AnalyticsCard';
import PerformanceChart from './PerformanceChart';
import EntityDistChart from './EntityDistChart';
import { analyticsCards, performanceData, entityDistribution, recentAlerts, systemStatus } from '../data';

interface AnalyticsProps {}

const Analytics: React.FC<AnalyticsProps> = ({}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {analyticsCards.map((card, index) => (
                <AnalyticsCard key={index} {...card} />
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3 space-y-4">
                <PerformanceChart data={performanceData} />
                <EntityDistChart data={entityDistribution} />
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentAlerts.map((alert, index) => (
                        <Alert 
                          key={index}
                          title={alert.title}
                          time={alert.time}
                          severity={alert.severity}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {systemStatus.map((service) => (
                        <div key={service.name} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{service.name}</span>
                          <Badge variant={service.status === 'operational' ? 'default' : 'secondary'}>
                            <div className="flex items-center gap-2">
                              {service.status === 'operational' ? (
                                <CheckCircle2 className="h-3 w-3" />
                              ) : (
                                <AlertCircle className="h-3 w-3" />
                              )}
                              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                            </div>
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
        </>
    );
};

export default Analytics;