"use client";

import { scopeData } from "@/app/components/workflow/data";
import ExistingScopeTable from "@/app/components/workflow/steps/elaborate-scope/ExistingScopeTable";
import RerunSchedule from "@/app/components/workflow/steps/elaborate-scope/rerun-schedule/index.tsx";

export const ElaborateScope = () => {
    return (
        <div className="space-y-6">
            {/* Existing Scope Table */}
            <ExistingScopeTable data={scopeData} />

            {/* User-friendly Schedule Configuration */}
            <RerunSchedule data={scopeData} />
        </div>
    );
}

export default ElaborateScope;