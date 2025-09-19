import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Target,
  Eye,
  Award,
  Truck,
  HeadphonesIcon,
  Shield,
  Users,
  Globe,
  CheckCircle,
  Factory
} from 'lucide-react';
import manufacturingImage from '@/assets/manufacturing-facility.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Durability',
      description: 'Built to last with premium materials and rigorous quality testing for long-term reliability.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Efficient logistics network ensuring timely delivery across India with real-time tracking.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Assistance',
      description: '24/7 expert support and consultation for all your electrical infrastructure needs.',
    },
    {
      icon: Globe,
      title: 'Pan-India Logistics',
      description: 'Comprehensive distribution network covering all major cities and remote locations.',
    },
  ];

  const milestones = [
    { year: '2016', event: 'Company Founded', description: 'Started with a vision to revolutionize electrical safety in India' },
    { year: '2018', event: 'ISO Certification', description: 'Achieved ISO 9001:14001 certification for quality management' },
    { year: '2020', event: 'Product Expansion', description: 'Expanded product line to include advanced safety equipment' },
    { year: '2022', event: 'Pan-India Network', description: 'Established distribution network across 50+ cities' },
    { year: '2023', event: 'Technology Upgrade', description: 'Invested in CNC laser cutting and automation technology' },
    { year: '2025', event: 'Industry Leadership', description: 'Recognized as leading manufacturer in electrical safety equipment' },
  ];

  const certifications = [
    'ISO 9001:14001 Certified',
    'BIS & ISI Approved',
    'IS 3043 Compliant',
    'Fire Retardant Materials',
    'CE Marking',
    'Environmental Compliance'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              About Easy Electrical & Safety
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Building India's electrical infrastructure with safety, reliability, and innovation at our core
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
                Pioneering Electrical Safety Since 2016
              </h2>
              <p className="text-lg text-industrial-medium leading-relaxed">
                Easy Electrical & Safety (EES) has been at the forefront of electrical infrastructure 
                manufacturing in India for over 10 years. Founded with a vision to make electrical 
                installations safer and more reliable, we have grown from a small startup to a 
                trusted name in the industry.
              </p>
              <p className="text-lg text-industrial-medium leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has enabled us to 
                serve thousands of clients across residential, commercial, and industrial sectors. 
                From modular switchboards to custom electrical enclosures, we deliver solutions 
                that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-industrial-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-industrial-medium">Products Delivered</div>
                </div>
              </div>
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

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="industrial-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-dark">Our Mission</h3>
                <p className="text-industrial-medium leading-relaxed">
                  To provide innovative, reliable, and safe electrical infrastructure solutions 
                  that empower buildings and protect lives. We are committed to advancing 
                  electrical safety standards while delivering exceptional value to our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-dark">Our Vision</h3>
                <p className="text-industrial-medium leading-relaxed">
                  To be India's most trusted manufacturer of electrical safety equipment, 
                  setting industry benchmarks for quality, innovation, and customer service. 
                  We envision a future where every electrical installation is inherently safe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Why Choose Easy Electrical & Safety?
            </h2>
            <p className="text-xl text-industrial-medium max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our business, 
              from product design to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="industrial-card group cursor-pointer h-full">
                <CardContent className="p-6 space-y-4 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-industrial-dark">
                    {value.title}
                  </h3>
                  <p className="text-industrial-medium leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Our Journey
            </h2>
            <p className="text-xl text-industrial-medium">
              Milestones that shaped our growth and industry leadership
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <Card className="industrial-card flex-grow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-industrial-dark mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-industrial-medium">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-industrial-medium">
              Our commitment to quality is validated by industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="industrial-card group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-industrial-dark">
                    {cert}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="section-padding hero-section">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Expert Leadership Team
            </h2>
            <p className="text-xl text-gray-200">
              Our experienced leadership combines decades of industry expertise with 
              innovative thinking to drive the company forward.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">50+ Engineers</h3>
                <p className="text-gray-300 text-sm">Expert technical team</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Advanced Facility</h3>
                <p className="text-gray-300 text-sm">State-of-the-art manufacturing</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Quality Assurance</h3>
                <p className="text-gray-300 text-sm">Rigorous testing protocols</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;