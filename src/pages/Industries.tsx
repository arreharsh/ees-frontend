import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building,
  Factory,
  Home,
  Heart,
  GraduationCap,
  Landmark,
  Server,
  ShoppingCart,
  Hotel,
  Truck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Home,
      title: 'Residential',
      description: 'Safe electrical solutions for homes, apartments, and residential complexes.',
      applications: ['Home Electrical Panels', 'Switch Boards', 'Junction Boxes', 'Safety Switches'],
      color: 'bg-blue-500',
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Reliable electrical infrastructure for offices, retail spaces, and commercial buildings.',
      applications: ['Office Distribution Boards', 'Commercial Panels', 'Cable Management', 'Power Distribution'],
      color: 'bg-green-500',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Heavy-duty electrical equipment for manufacturing plants and industrial facilities.',
      applications: ['Motor Control Centers', 'Industrial Panels', 'Control Systems', 'Automation Equipment'],
      color: 'bg-orange-500',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Critical electrical systems for hospitals, clinics, and medical facilities.',
      applications: ['Medical Grade Panels', 'Emergency Systems', 'Isolation Transformers', 'UPS Systems'],
      color: 'bg-red-500',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Safe and reliable electrical solutions for schools, colleges, and universities.',
      applications: ['Classroom Panels', 'Laboratory Equipment', 'Campus Distribution', 'Safety Systems'],
      color: 'bg-purple-500',
    },
    {
      icon: Landmark,
      title: 'Government',
      description: 'Compliant electrical infrastructure for government buildings and public facilities.',
      applications: ['Public Building Systems', 'Security Equipment', 'Emergency Lighting', 'Municipal Infrastructure'],
      color: 'bg-indigo-500',
    },
    {
      icon: Server,
      title: 'Data Centers',
      description: 'Mission-critical electrical systems for data centers and IT facilities.',
      applications: ['Rack PDUs', 'UPS Systems', 'Power Monitoring', 'Redundant Systems'],
      color: 'bg-teal-500',
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Efficient electrical solutions for shopping malls, stores, and retail chains.',
      applications: ['Retail Panels', 'Display Lighting', 'POS Systems', 'Security Infrastructure'],
      color: 'bg-pink-500',
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Comprehensive electrical systems for hotels, restaurants, and entertainment venues.',
      applications: ['Guest Room Systems', 'Kitchen Equipment', 'Entertainment Systems', 'Energy Management'],
      color: 'bg-yellow-500',
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Specialized electrical solutions for airports, railways, and transportation hubs.',
      applications: ['Airport Systems', 'Railway Infrastructure', 'Traffic Management', 'Communication Systems'],
      color: 'bg-gray-500',
    },
  ];

  const benefits = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of sector-specific requirements and regulations.',
      icon: CheckCircle,
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored products designed to meet unique industry challenges.',
      icon: CheckCircle,
    },
    {
      title: 'Compliance Assurance',
      description: 'Products meet all relevant industry standards and certifications.',
      icon: CheckCircle,
    },
    {
      title: 'Proven Track Record',
      description: 'Successful implementations across diverse industry verticals.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Industries We Serve
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Powering diverse sectors with specialized electrical solutions 
              tailored to industry-specific requirements
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Comprehensive Industry Coverage
            </h2>
            <p className="text-xl text-industrial-medium max-w-3xl mx-auto">
              From residential buildings to complex industrial facilities, 
              we provide electrical solutions across all major sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="industrial-card group cursor-pointer h-full hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className={`w-16 h-16 ${industry.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-industrial-dark">
                    {industry.title}
                  </h3>
                  
                  <p className="text-industrial-medium leading-relaxed flex-grow">
                    {industry.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-industrial-dark text-sm">
                      Key Applications:
                    </h4>
                    <div className="space-y-1">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs">
                          <div className={`w-2 h-2 ${industry.color} rounded-full`}></div>
                          <span className="text-industrial-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full mt-auto group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-industrial-medium max-w-3xl mx-auto">
              Our deep understanding of industry requirements ensures that you get 
              the right solutions for your specific applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="industrial-card text-center group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-industrial-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-industrial-medium text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Success Stories
            </h2>
            <p className="text-xl text-industrial-medium">
              Real projects, real results across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="industrial-card">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-dark">
                  Commercial Complex
                </h3>
                <p className="text-industrial-medium">
                  Supplied complete electrical distribution system for a 50-story 
                  commercial complex in Mumbai, ensuring reliable power distribution 
                  across all floors.
                </p>
                <div className="text-sm text-primary font-medium">
                  1000+ electrical panels delivered
                </div>
              </CardContent>
            </Card>

            <Card className="industrial-card">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-dark">
                  Hospital Infrastructure
                </h3>
                <p className="text-industrial-medium">
                  Provided critical electrical systems for a 500-bed hospital 
                  including emergency power distribution and medical-grade equipment.
                </p>
                <div className="text-sm text-primary font-medium">
                  100% uptime critical systems
                </div>
              </CardContent>
            </Card>

            <Card className="industrial-card">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-dark">
                  Manufacturing Plant
                </h3>
                <p className="text-industrial-medium">
                  Custom motor control centers and automation panels for a large 
                  automotive manufacturing facility in Chennai.
                </p>
                <div className="text-sm text-primary font-medium">
                  500+ custom panels manufactured
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding hero-section">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Partner with Industry Experts
            </h2>
            <p className="text-xl text-gray-200">
              Let our experienced team help you design the perfect electrical 
              solution for your industry-specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-safety-orange hover:bg-safety-orange-light text-black font-semibold px-8 py-4 btn-hover-lift"
              >
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white bg-transparent text-white hover:bg-safety-orange hover:text-industrial-dark font-semibold px-8 py-4 btn-hover-lift"
              >
                <Link to="/products">View Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;