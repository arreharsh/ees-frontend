import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GetAQuotePopup from '@/components/GetAQuotePopup';
import CallBackRequestPopup from '@/components/CallBackRequestPopup';
import {
  Shield,
  CheckCircle,
  Truck,
  Users,
  ArrowRight,
  Zap,
  Send,
  Award,
  Globe,
  HeadphonesIcon
} from 'lucide-react';
import heroImage from '@/assets/hero-electrical.webp';
import manufacturingImage from '@/assets/manufacturing-facility.jpg';

const Home = () => {
  const highlights = [
    { icon: CheckCircle, text: 'IS-Compliant', color: 'text-green-500' },
    { icon: Shield, text: 'Fire-Retardant', color: 'text-red-500' },
    { icon: Globe, text: 'Pan-India Network', color: 'text-blue-500' },
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'IS-compliant products with international quality standards and certifications.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Pan-India logistics network ensuring timely delivery across all major cities.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description: '24/7 technical assistance and expert guidance for all your electrical needs.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced engineers and technicians with decades of industry expertise.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', color: 'text-primary' },
    { number: '10000+', label: 'Products Delivered', color: 'text-safety-orange' },
    { number: '500+', label: 'Happy Clients', color: 'text-green-500' },
    { number: '50+', label: 'Cities Served', color: 'text-purple-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/80 via-industrial-dark/60 to-transparent"></div>

        <div className="relative z-10 container-wide section-padding text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Empowering Buildings with{' '}
                <span className="text-gradient bg-gradient-to-r from-safety-orange to-safety-orange-light bg-clip-text text-transparent">
                  Safe & Smart
                </span>
                <br />
                Electrical Infrastructure
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl">
                Leading manufacturer of electrical boxes and safety equipment in India.
                Trusted by thousands for reliability, innovation and safety.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <highlight.icon className={`w-5 h-5 ${highlight.color}`} />
                    <span className="text-white font-medium">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-safety-orange hover:bg-safety-orange-light text-white font-semibold px-8 py-4 btn-hover-lift"
                >
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <GetAQuotePopup
                  trigger={
                    <Button
                      size="lg"
                      className="bg-blue-800  hover:bg-safety-orange-light text-white font-semibold px-8 py-4 btn-hover-lift"
                    >
                      Get a Quote <Send className="ml-2 w-5 h-5" />
                    </Button>
                  }
                />

              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}

      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className={`text-4xl lg:text-5xl font-bold ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-industrial-medium font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Why Choose Easy Electrical & Safety?
            </h2>
            <p className="text-xl text-industrial-medium max-w-3xl mx-auto">
              We combine cutting-edge technology with decades of expertise to deliver
              electrical solutions that exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="industrial-card group cursor-pointer h-full">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-industrial-dark">
                    {feature.title}
                  </h3>
                  <p className="text-industrial-medium leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
                Pioneering Electrical Safety Since 2009
              </h2>
              <p className="text-lg text-industrial-medium leading-relaxed">
                Easy Electrical & Safety has been at the forefront of electrical infrastructure
                manufacturing in India. Our commitment to safety, innovation, and quality has made
                us a trusted partner for residential, commercial, and industrial projects nationwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ISO 9001:14001 Certified Manufacturing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>BIS & ISI Approved Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Advanced R&D Facilities</span>
                </div>
              </div>
              <Button asChild variant="outline" size="lg" className="btn-hover-lift">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={manufacturingImage}
                alt="Manufacturing Facility"
                className="rounded-lg shadow-industrial w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-section">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Power Your Project?
            </h2>
            <p className="text-xl text-gray-200">
              Get in touch with our experts for customized electrical solutions
              that meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallBackRequestPopup
                trigger={
                  <Button
                    size="lg"
                    className="bg-safety-orange hover:bg-safety-orange-light text-white font-semibold px-8 py-4 btn-hover-lift"
                  >
                    Get Free Consultation
                  </Button>
                }
              />

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-industrial-dark font-semibold px-8 py-4 btn-hover-lift"
              >
                <Link to="/products">View Product Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
