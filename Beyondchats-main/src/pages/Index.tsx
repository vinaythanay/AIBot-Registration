import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Clock, Globe, Brain, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Clock className="w-8 h-8 text-primary-600" />, title: "24/7 Support", description: "Always available to assist you" },
    { icon: <Brain className="w-8 h-8 text-primary-600" />, title: "AI-Powered", description: "Advanced machine learning capabilities" },
    { icon: <Globe className="w-8 h-8 text-primary-600" />, title: "Multi-Language", description: "Supports multiple languages" },
    { icon: <Shield className="w-8 h-8 text-primary-600" />, title: "Secure", description: "Enterprise-grade security" }
  ];

  const useCases = [
    { title: "Customer Support", description: "Instant responses to common queries" },
    { title: "Education", description: "Interactive learning assistance" },
    { title: "E-commerce", description: "Product recommendations and support" },
    { title: "Healthcare", description: "Basic health information and scheduling" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Customer Service Manager", text: "This chatbot has transformed our customer support efficiency." },
    { name: "Mike Chen", role: "E-commerce Owner", text: "Sales increased by 30% since implementing the chatbot." },
    { name: "Lisa Brown", role: "Education Director", text: "Students love the interactive learning experience." }
  ];

  const plans = [
    {
      name: "Free",
      price: "0",
      features: ["Basic chat support", "5 conversations/day", "Standard response time"],
      buttonText: "Start Free"
    },
    {
      name: "Premium",
      price: "29",
      features: ["Unlimited chats", "Priority support", "Custom training", "Analytics"],
      buttonText: "Get Premium"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary-900 mb-6 animate-fade-in">
            Your AI Assistant for Everything!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven conversations. Get instant responses, 24/7 support, and seamless integration for your business.
          </p>
          <Button
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg animate-fade-in"
            onClick={() => navigate("/signup")}
          >
            Start Chatting <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${index === 1 ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  onClick={() => navigate("/signup")}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;