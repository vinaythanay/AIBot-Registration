import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, Zap, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-primary-600" />,
      title: "AI-Powered Chatbots",
      description: "Custom chatbots trained on your business data for intelligent customer interactions.",
      features: ["24/7 Customer Support", "Multi-language Support", "Custom Training"],
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary-600" />,
      title: "Live Chat Integration",
      description: "Seamless integration with your existing customer service platforms.",
      features: ["Real-time Messaging", "File Sharing", "Chat History"],
    },
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Automated Responses",
      description: "Smart response system that learns from customer interactions.",
      features: ["Quick Replies", "Template Management", "Dynamic Responses"],
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary-600" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into your chatbot's performance.",
      features: ["Usage Statistics", "Customer Feedback", "Performance Metrics"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of AI-powered chatbot solutions designed to
          enhance your customer service experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/signup">
                <Button className="bg-primary-600 hover:bg-primary-700">Get Started</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;