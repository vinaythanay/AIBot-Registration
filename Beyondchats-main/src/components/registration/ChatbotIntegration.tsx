import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

interface ChatbotIntegrationProps {
  onNext: () => void;
  onBack: () => void;
}

const ChatbotIntegration = ({ onNext, onBack }: ChatbotIntegrationProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleTestChatbot = () => {
    window.open(
      "https://example.com?chatbot=demo",
      "_blank",
      "width=400,height=600"
    );
  };

  const handleSendInstructions = () => {
    toast({
      title: "Instructions Sent!",
      description: `Integration instructions have been sent to ${email}`,
    });
  };

  const integrationCode = `<script>
  window.BEYONDCHATS_CONFIG = {
    widgetId: "demo-widget",
    position: "bottom-right"
  };
</script>
<script src="https://cdn.beyondchats.com/widget.js"></script>`;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">Chatbot Integration</h2>
        <p className="text-gray-500 text-center">
          Test and integrate your chatbot
        </p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Test Your Chatbot</CardTitle>
            <CardDescription>
              Preview how your chatbot will appear on your website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleTestChatbot}>Open Test Environment</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integration Options</CardTitle>
            <CardDescription>
              Choose how you want to integrate the chatbot
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="manual">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="manual">Manual Setup</TabsTrigger>
                <TabsTrigger value="email">Email Instructions</TabsTrigger>
              </TabsList>
              <TabsContent value="manual" className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md">
                  <pre className="text-sm overflow-x-auto">{integrationCode}</pre>
                </div>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(integrationCode);
                    toast({
                      title: "Copied!",
                      description: "Integration code copied to clipboard",
                    });
                  }}
                >
                  Copy Code
                </Button>
              </TabsContent>
              <TabsContent value="email" className="space-y-4">
                <Input
                  type="email"
                  placeholder="Developer's email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleSendInstructions}>
                  Send Instructions
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Complete Setup
        </Button>
      </div>
    </div>
  );
};

export default ChatbotIntegration;