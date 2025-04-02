import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Zap } from 'lucide-react';

interface MaxDepthConfigProps {
    maxDepth: number;
    setMaxDepth: React.Dispatch<React.SetStateAction<number>>;
}

const MaxDepthConfig: React.FC<MaxDepthConfigProps> = ({ maxDepth, setMaxDepth }) => {
    return (
        <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <h3 className="font-medium">Search Depth</h3>
            </div>
            <div className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium">{maxDepth} Steps</span>
            </div>
          </div>
          <Slider
            value={[maxDepth]}
            onValueChange={([value]) => setMaxDepth(value)}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Faster</span>
            <span>More Accurate</span>
          </div>
        </CardContent>
      </Card>
    )
}

export default MaxDepthConfig;