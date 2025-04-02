import React from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {MessageSquare} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

interface FeedbackTracesProps {
    feedbackEnabled: boolean;
    setFeedbackEnabled: (enabled: boolean) => void;
    logTraces: boolean;
    setLogTraces: (enabled: boolean) => void;
    chatTraces: boolean;
    setChatTraces: (enabled: boolean) => void;
}

const FeedbackTraces: React.FC<FeedbackTracesProps> = ({ feedbackEnabled, setFeedbackEnabled, logTraces, setLogTraces, chatTraces, setChatTraces }) => {
    return (
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-medium">Learning & Debugging</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="feedback"
                checked={feedbackEnabled}
                onCheckedChange={(checked) => setFeedbackEnabled(checked as boolean)}
              />
              <div className="space-y-1">
                <label
                  htmlFor="feedback"
                  className="text-sm font-medium leading-none"
                >
                  Train on feedback
                </label>
                <p className="text-sm text-muted-foreground">
                  Allow the AI to learn from user interactions and feedback
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="traces"
                checked={logTraces}
                onCheckedChange={(checked) => setLogTraces(checked as boolean)}
              />
              <div className="space-y-1">
                <label
                  htmlFor="traces"
                  className="text-sm font-medium leading-none"
                >
                  Log execution traces
                </label>
                <p className="text-sm text-muted-foreground">
                  Record detailed logs of AI decision-making processes
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="chat"
                checked={chatTraces}
                onCheckedChange={(checked) => setChatTraces(checked as boolean)}
              />
              <div className="space-y-1">
                <label
                  htmlFor="chat"
                  className="text-sm font-medium leading-none"
                >
                  Enable chat on traces
                </label>
                <p className="text-sm text-muted-foreground">
                  Allow users to interact with and query execution traces
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
};

export default FeedbackTraces;