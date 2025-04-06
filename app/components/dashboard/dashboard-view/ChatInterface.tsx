import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Brain, Send } from 'lucide-react';

interface ChatInterfaceProps {
    chatMessage: string;
    setChatMessage: (message: string) => void;
    handleSendMessage: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ chatMessage, setChatMessage, handleSendMessage }) => {
    return (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Ask AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-[200px] overflow-y-auto border rounded-lg p-4 bg-muted/50">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Brain className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm bg-background rounded-lg p-3 inline-block">
                        Hello! I&apos;m your AI assistant. How can I help you with compliance investigations today?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Textarea
                  placeholder="Type your question..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button 
                  className="self-end"
                  onClick={handleSendMessage}
                  disabled={!chatMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
    );
}

export default ChatInterface;