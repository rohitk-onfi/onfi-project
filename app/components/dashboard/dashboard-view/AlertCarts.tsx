import React, {useState} from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert } from '@/app/components/alerts/Alert';
import { Clock, Search, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertItem } from '@/app/components/dashboard/data';

interface AlertCardsProps {
    alertsData: AlertItem[];
}

const AlertCards: React.FC<AlertCardsProps> = ({ alertsData }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [alerts, setAlerts] = useState(alertsData);

    const filteredAlerts = alerts.filter(alert =>
      alert.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
        <Card className="overflow-hidden">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Recent Alerts</h2>
              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-secondary">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">Last 24 hours</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search alerts..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                size="default"
                className="shrink-0"
                onClick={() => setAlerts([])}
              >
                <Check className="h-4 w-4 mr-2" />
                Mark all
              </Button>
            </div>
          </div>

          <CardContent className="p-0">
            <div className="space-y-1">
              {filteredAlerts.map((alert) => (
                <Alert
                  key={alert.id}
                  title={alert.title}
                  time={alert.time}
                  severity={alert.severity}
                />
              ))}
            </div>
          </CardContent>
        </Card>
    );
}

export default AlertCards;