'use client';

import { useState } from 'react';
import CurrentlyInProgress from '@/app/components/dashboard/dashboard-view/CurrentlyInProgress';
import { inProgressItems, criticalChecklist, dailyCheckStats, recentAlerts, usageStats } from '@/app/components/dashboard/data';
import CriticalChecklist from '@/app/components/dashboard/dashboard-view/CriticalChecklist';
import ComplianceMetrics from '@/app/components/dashboard/dashboard-view/ComplianceMetrics';
import AlertCards from '@/app/components/dashboard/dashboard-view/AlertCarts';
import PlatformUsage from '@/app/components/dashboard/dashboard-view/PlatformUsage';
import ChatInterface from '@/app/components/dashboard/dashboard-view/ChatInterface';

const DashboardView = () => {
  const [chatMessage, setChatMessage] = useState('');

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Main content area */}
      <div className="col-span-8 space-y-6">
        {/* In Progress Section */}
        <CurrentlyInProgress data={inProgressItems} />

        {/* Critical Checklist Items */}
        <CriticalChecklist data={criticalChecklist} />

        {/* Daily Check Statistics */}
        <ComplianceMetrics data={dailyCheckStats} />
      </div>

      {/* Right side - Alerts and Usage */}
      <div className="col-span-4 space-y-6">
        {/* Alerts Card */}
        <AlertCards alertsData={recentAlerts} />

        {/* Platform Usage Card */}
        <PlatformUsage data={usageStats} />

        {/* Chat Interface */}
        <ChatInterface 
          chatMessage={chatMessage}
          setChatMessage={setChatMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default DashboardView;