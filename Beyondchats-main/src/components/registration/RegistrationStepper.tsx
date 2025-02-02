import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import OrganizationSetup from "./OrganizationSetup";
import WebsiteScraping from "./WebsiteScraping";
import ChatbotIntegration from "./ChatbotIntegration";
import SuccessScreen from "./SuccessScreen";

const RegistrationStepper = () => {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`flex items-center ${
                index !== 4 ? "flex-1" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= index
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index}
              </div>
              {index !== 4 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step > index ? "bg-primary-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Account</span>
          <span>Organization</span>
          <span>Website</span>
          <span>Integration</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {step === 1 && <RegistrationForm onNext={handleNext} />}
        {step === 2 && (
          <OrganizationSetup onNext={handleNext} onBack={handleBack} />
        )}
        {step === 3 && (
          <WebsiteScraping onNext={handleNext} onBack={handleBack} />
        )}
        {step === 4 && (
          <ChatbotIntegration onNext={handleNext} onBack={handleBack} />
        )}
        {step === 5 && <SuccessScreen />}
      </div>
    </div>
  );
};

export default RegistrationStepper;