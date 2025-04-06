"use client";

import { notificationRules, reportFormats } from "@/app/components/workflow/data";
import NotifRules from "./notif-rules";
import ReportTemps from "./report-temps";

interface ReportingProps {}

const Reporting: React.FC<ReportingProps> = ({}) => {
    return (
        <div className="space-y-6">
            <NotifRules data={notificationRules} />
            <ReportTemps data={reportFormats} />
        </div>
    );
};

export default Reporting;
