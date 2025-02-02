import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const faqs = [
    {
      question: "How do I get started with BeyondChats?",
      answer: "Getting started is easy! Simply sign up for an account and follow our step-by-step setup guide to create your first chatbot.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 technical support through our help desk, live chat, and email. Premium users also get access to dedicated account managers.",
    },
    {
      question: "Can I customize my chatbot's responses?",
      answer: "Yes! Our platform allows full customization of your chatbot's responses, personality, and knowledge base.",
    },
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary-600" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
    },
    {
      icon: <Mail className="w-8 h-8 text-primary-600" />,
      title: "Email Support",
      description: "Send us your questions anytime",
      action: "Send Email",
    },
    {
      icon: <Phone className="w-8 h-8 text-primary-600" />,
      title: "Phone Support",
      description: "Talk to our support team directly",
      action: "Call Now",
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "Documentation",
      description: "Browse our detailed guides",
      action: "View Docs",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">Help Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions and get support from our team.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Support Channels</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                {channel.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <Link to="/signup">
                  <Button variant="outline" className="w-full">
                    {channel.action}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;