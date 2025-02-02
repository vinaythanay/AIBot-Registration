import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface OrganizationSetupProps {
  onNext: () => void;
  onBack: () => void;
}

const OrganizationSetup = ({ onNext, onBack }: OrganizationSetupProps) => {
  const [url, setUrl] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Organization setup complete!",
      description: "Moving to website analysis...",
    });
    onNext();
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    // Simulate auto-fetching meta description
    if (e.target.value.includes(".")) {
      setTimeout(() => {
        toast({
          title: "Website detected!",
          description: "Meta description fetched automatically.",
        });
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">Setup Your Organization</h2>
        <p className="text-gray-500 text-center">
          Tell us about your business to customize your chatbot
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" placeholder="Acme Inc." required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Company Website</Label>
          <Input
            id="website"
            placeholder="https://example.com"
            value={url}
            onChange={handleUrlChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Company Description</Label>
          <Textarea
            id="description"
            placeholder="Tell us about your company..."
            className="min-h-[100px]"
            required
          />
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={onBack} type="button">
            Back
          </Button>
          <Button type="submit" className="flex-1">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OrganizationSetup;