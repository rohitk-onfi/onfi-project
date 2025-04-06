'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { entityFiles, metadataColumns, samplingStrategies } from '@/app/components/workflow/data';
import EntityConfig from './entity-config';
import EntitySchema from './entity-schema';
import SamplingStrategyTable from './sampling-strategy';

interface DefineEntitiesProps {
  entityName: string;
  entityDescription: string;
  dataSource: string;
  pollingFrequency: string;
  onEntityNameChange: (value: string) => void;
  onEntityDescriptionChange: (value: string) => void;
  onDataSourceChange: (value: string) => void;
  onPollingFrequencyChange: (value: string) => void;
}

const DefineEntities: React.FC<DefineEntitiesProps> = ({
  entityName,
  entityDescription,
  dataSource,
  pollingFrequency,
  onEntityNameChange,
  onEntityDescriptionChange,
  onDataSourceChange,
  onPollingFrequencyChange
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Entity Name</h3>
            <Input
              placeholder="Enter entity name"
              value={entityName}
              onChange={(e) => onEntityNameChange(e.target.value)}
              className="max-w-md"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Entity Description</h3>
            <Textarea
              placeholder="Enter a detailed description of this entity"
              value={entityDescription}
              onChange={(e) => onEntityDescriptionChange(e.target.value)}
              className="max-w-md min-h-[100px] resize-y"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Data Source</h3>
            <Select value={dataSource} onValueChange={onDataSourceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select data source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rest-api">REST API</SelectItem>
                <SelectItem value="database">Database</SelectItem>
                <SelectItem value="file-system">File System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Polling Frequency</h3>
            <Select value={pollingFrequency} onValueChange={onPollingFrequencyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time</SelectItem>
                <SelectItem value="5min">Every 5 minutes</SelectItem>
                <SelectItem value="15min">Every 15 minutes</SelectItem>
                <SelectItem value="1hour">Hourly</SelectItem>
                <SelectItem value="1day">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <EntityConfig data={entityFiles} />

      <EntitySchema data={metadataColumns} />

      <SamplingStrategyTable data={samplingStrategies} />
    </div>
  );
}

export default DefineEntities;