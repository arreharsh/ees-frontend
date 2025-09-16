import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import CallBackRequestPopup from '@/components/CallBackRequestPopup';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Download,
  MessageSquare,
  Building,
  User,
  FileText
} from 'lucide-react';
import { url } from 'inspector';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      requirement: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Plot-2 Ground Floor, Nangla Gazipur Road', 'Faridabad, Haryana 121005'],
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91-9958382854', '+91-7011806885 (Mobile)'],
      color: 'text-green-500',
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['easyelecrical1154@gmail.com', 'info@easyelectrical.in'],
      color: 'text-purple-500',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'text-orange-500',
    },
  ];

  const quickActions = [
    {
      icon: Download,
      title: 'Download Catalog',
      description: 'Get our complete product catalog with specifications',
      action: 'Download PDF',
      color: 'bg-blue-500',
      url: '/catalog.pdf',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our technical experts in real-time on whatsapp',
      action: 'Start Chat',
      color: 'bg-green-500',
      url: 'https://wa.link/zz7z25',
    },
    {
      icon: Phone,
      title: 'Call Back Request',
      description: 'Schedule a call with our sales representative',
      action: 'Request Call',
      color: 'bg-purple-500',
      url: '',

    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Ready to discuss your electrical infrastructure needs?
              Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Quick Actions
            </h2>
            <p className="text-xl text-industrial-medium">
              Choose the fastest way to get the information you need
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="industrial-card group cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 ${action.color} rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-industrial-dark">
                    {action.title}
                  </h3>
                  <p className="text-industrial-medium">{action.description}</p>

                  {action.title === "Call Back Request" ? (
                    <CallBackRequestPopup
                      trigger={
                        <Button className="w-full btn-hover-lift">
                          {action.action}
                        </Button>
                      }
                    />
                  ) : (
                    <Button
                      className="w-full btn-hover-lift"
                      onClick={() => {
                        window.open(action.url, "_blank");
                      }}
                    >
                      {action.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
           </div>
        </div>
      </section>


      {/* Contact Form & Info */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="industrial-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-industrial-dark flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Request a Quote
                </CardTitle>
                <p className="text-industrial-medium">
                  Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91-XXXXX-XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirement" className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Requirement Type
                    </Label>
                    <Input
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      placeholder="e.g., Distribution Boards, Custom Panels, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-hover-lift">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-industrial-dark">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="industrial-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="space-y-2 flex-grow">
                          <h3 className="text-lg font-semibold text-industrial-dark">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-industrial-medium text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="industrial-card">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-industrial-light to-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-primary mx-auto" />
                      <h3 className="text-lg font-semibold text-industrial-dark">
                        Our Location
                      </h3>
                      <p className="text-industrial-medium">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-industrial-medium">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="industrial-card">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-industrial-dark">
                  What is your typical delivery time?
                </h3>
                <p className="text-industrial-medium">
                  Standard products: 5-7 working days. Custom solutions: 15-20 working days
                  depending on complexity and order quantity.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-card">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-industrial-dark">
                  Do you provide installation services?
                </h3>
                <p className="text-industrial-medium">
                  We provide technical guidance and support. Installation can be arranged
                  through our network of certified partners.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-card">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-industrial-dark">
                  What warranty do you offer?
                </h3>
                <p className="text-industrial-medium">
                  All our products come with a minimum 1-year warranty against
                  manufacturing defects. Extended warranties available.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-card">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-industrial-dark">
                  Can you handle bulk orders?
                </h3>
                <p className="text-industrial-medium">
                  Yes, we specialize in bulk orders for large projects. Volume discounts
                  and dedicated project management available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;