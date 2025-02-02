import { Card } from "@/components/ui/card";
import { Users, Target, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Customer-Centric",
      description: "We put our customers first in everything we do, ensuring the best possible experience.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Mission-Driven",
      description: "Our mission is to revolutionize chatbot technology and make it accessible to everyone.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Security-Focused",
      description: "Your data security and privacy are our top priorities, with enterprise-grade protection.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">About BeyondChats</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're dedicated to revolutionizing how businesses interact with their customers through
          intelligent chatbot solutions. Our platform combines cutting-edge AI technology with
          intuitive design to create exceptional user experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          To create a world where every business, regardless of size, can provide exceptional
          customer service through intelligent automation. We believe in making AI-powered
          communication accessible, effective, and human-centric.
        </p>
      </div>
    </div>
  );
};

export default About;