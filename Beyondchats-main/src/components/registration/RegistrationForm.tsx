import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { FcGoogle } from "react-icons/fc";

interface RegistrationFormProps {
  onNext: () => void;
}

const RegistrationForm = ({ onNext }: RegistrationFormProps) => {
  const [step, setStep] = useState<"details" | "verification">("details");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { toast } = useToast();

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    if (!/(?=.*[a-z])/.test(value)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return false;
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/(?=.*\d)/.test(value)) {
      setPasswordError("Password must contain at least one number");
      return false;
    }
    if (!/(?=.*[!@#$%^&*])/.test(value)) {
      setPasswordError("Password must contain at least one special character (!@#$%^&*)");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "details") {
      if (!validatePassword(password)) {
        toast({
          title: "Invalid Password",
          description: passwordError,
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Verification code sent!",
        description: "Please check your email for the verification code.",
      });
      setStep("verification");
    } else {
      toast({
        title: "Verification successful!",
        description: "Your email has been verified.",
      });
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent bg-clip-text text-transparent">
          {step === "details" ? "Create your account" : "Verify your email address"}
        </h2>
        <p className="text-gray-500 text-center">
          {step === "details"
            ? "Get started with BeyondChats"
            : "Enter the code sent to your email"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === "details" ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary-700">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="w-full border-primary-200 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-primary-200 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-primary-700">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                className="w-full border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                placeholder="••••••••"
              />
              {passwordError && (
                <p className="text-sm text-red-500 mt-1">{passwordError}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long and contain uppercase, lowercase, 
                numbers, and special characters.
              </p>
            </div>
          </>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="code" className="text-primary-700">Verification Code</Label>
            <Input
              id="code"
              placeholder="Enter 6-digit code"
              required
              className="w-full text-center text-2xl tracking-widest border-primary-200 focus:border-primary-500 focus:ring-primary-500"
              maxLength={6}
            />
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-primary-500 to-accent hover:from-primary-600 hover:to-accent transition-all duration-300"
        >
          {step === "details" ? "Continue" : "Verify Email"}
        </Button>
      </form>

      {step === "details" && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-primary-100" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-primary-500">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-primary-200 hover:bg-primary-50 transition-colors duration-300"
            onClick={() => {
              toast({
                title: "Google Sign In",
                description: "This feature is not implemented in the demo.",
              });
            }}
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;