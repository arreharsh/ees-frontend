import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Cog,
  Zap,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Award,
  Microscope,
  Settings,
  Wrench,
  BarChart3
} from 'lucide-react';
import manufacturingImage from '@/assets/manufacturing-facility.jpg';

const Technology = () => {
  const technologies = [
    {
      icon: Cog,
      title: 'CNC Laser Cutting',
      description: 'Precision laser cutting technology for accurate and clean cuts on various materials.',
      capabilities: ['±0.1mm Precision', 'Multiple Material Support', 'Complex Geometries', 'Automated Operation'],
      color: 'bg-blue-500',
    },
    {
      icon: Settings,
      title: 'Hydraulic Bending',
      description: 'Advanced hydraulic bending machines for precise sheet metal forming and shaping.',
      capabilities: ['High Tonnage Capacity', 'Angle Precision', 'Repeatability', 'Safety Systems'],
      color: 'bg-green-500',
    },
    {
      icon: Wrench,
      title: 'Automated Assembly',
      description: 'Robotic assembly lines ensuring consistent quality and faster production.',
      capabilities: ['Quality Consistency', 'Increased Throughput', 'Error Reduction', '24/7 Operation'],
      color: 'bg-purple-500',
    },
    {
      icon: Microscope,
      title: 'Quality Testing',
      description: 'State-of-the-art testing equipment for comprehensive quality assurance.',
      capabilities: ['Electrical Testing', 'Mechanical Testing', 'Environmental Testing', 'Certification Support'],
      color: 'bg-red-500',
    },
    {
      icon: BarChart3,
      title: 'Process Monitoring',
      description: 'Real-time monitoring and control systems for optimized manufacturing processes.',
      capabilities: ['Real-time Data', 'Process Control', 'Predictive Maintenance', 'Performance Analytics'],
      color: 'bg-orange-500',
    },
    {
      icon: Lightbulb,
      title: 'R&D Innovation',
      description: 'Continuous research and development for next-generation electrical solutions.',
      capabilities: ['New Product Development', 'Material Research', 'Process Innovation', 'Technology Advancement'],
      color: 'bg-teal-500',
    },
  ];

  const innovations = [
    {
      title: 'Smart Panel Technology',
      description: 'IoT-enabled electrical panels with remote monitoring and diagnostics capabilities.',
      benefits: ['Remote Monitoring', 'Predictive Maintenance', 'Energy Analytics', 'Mobile App Control'],
    },
    {
      title: 'Eco-Friendly Materials',
      description: 'Sustainable and recyclable materials reducing environmental impact.',
      benefits: ['Reduced Carbon Footprint', 'Recyclable Components', 'Energy Efficient', 'Sustainable Manufacturing'],
    },
    {
      title: 'Modular Design',
      description: 'Flexible modular systems allowing easy customization and scalability.',
      benefits: ['Easy Installation', 'Scalable Solutions', 'Cost Effective', 'Future Ready'],
    },
  ];

  const qualityStandards = [
    'ISO 9001:2015 Quality Management',
    'IS 3043 Electrical Standards',
    'IS 8623 Safety Standards',
    'IEC 61439 Switchgear Standards',
    'IP Rating Compliance',
    'CE Marking Requirements'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Technology & R&D
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Advancing electrical safety through cutting-edge technology, 
              precision manufacturing, and continuous innovation
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Technology */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Advanced Manufacturing Technology
            </h2>
            <p className="text-xl text-industrial-medium max-w-3xl mx-auto">
              Our state-of-the-art manufacturing facility employs the latest technology 
              to ensure precision, quality, and efficiency in every product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="industrial-card group cursor-pointer h-full">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className={`w-16 h-16 ${tech.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-industrial-dark">
                    {tech.title}
                  </h3>
                  
                  <p className="text-industrial-medium leading-relaxed flex-grow">
                    {tech.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-industrial-dark text-sm">
                      Key Capabilities:
                    </h4>
                    <div className="space-y-1">
                      {tech.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-industrial-medium">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Showcase */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
                Precision Manufacturing Facility
              </h2>
              <p className="text-lg text-industrial-medium leading-relaxed">
                Our manufacturing facility spans over 50,000 sq ft and houses the most 
                advanced equipment in the industry. From computer-controlled machines 
                to automated quality testing systems, every aspect is designed for excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-industrial-medium">Quality Accuracy</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">50,000</div>
                  <div className="text-sm text-industrial-medium">Sq Ft Facility</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-industrial-medium">Production Capacity</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-industrial-medium">Skilled Workers</div>
                </div>
              </div>

              <Button asChild size="lg" className="btn-hover-lift">
                <Link to="/contact">
                  Schedule Facility Tour
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
              
              {/* Floating tech badges */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  CNC Controlled
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  Automated QC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & R&D */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Innovation & Research
            </h2>
            <p className="text-xl text-industrial-medium max-w-3xl mx-auto">
              Our dedicated R&D team continuously works on developing next-generation 
              electrical solutions that meet evolving industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="industrial-card group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-industrial-dark">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-industrial-medium leading-relaxed">
                    {innovation.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-industrial-dark text-sm">Benefits:</h4>
                    {innovation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-industrial-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
                Quality Standards & Certifications
              </h2>
              <p className="text-lg text-industrial-medium leading-relaxed">
                We adhere to the highest international quality standards and maintain 
                certifications that validate our commitment to excellence and safety.
              </p>
              
              <div className="space-y-3">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-industrial-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="industrial-card text-center">
                <CardContent className="p-6 space-y-3">
                  <Shield className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Safety First</h3>
                  <p className="text-sm text-industrial-medium">
                    Zero compromise on safety standards
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-card text-center">
                <CardContent className="p-6 space-y-3">
                  <Target className="w-8 h-8 text-safety-orange mx-auto" />
                  <h3 className="font-semibold">Precision</h3>
                  <p className="text-sm text-industrial-medium">
                    Accurate manufacturing processes
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-card text-center">
                <CardContent className="p-6 space-y-3">
                  <Zap className="w-8 h-8 text-green-500 mx-auto" />
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-sm text-industrial-medium">
                    Continuous technological advancement
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-card text-center">
                <CardContent className="p-6 space-y-3">
                  <CheckCircle className="w-8 h-8 text-blue-500 mx-auto" />
                  <h3 className="font-semibold">Reliability</h3>
                  <p className="text-sm text-industrial-medium">
                    Consistent quality assurance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding hero-section">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Experience Our Technology
            </h2>
            <p className="text-xl text-gray-200">
              Discover how our advanced manufacturing technology and innovative 
              solutions can benefit your next electrical project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-safety-orange hover:bg-safety-orange-light text-white font-semibold px-8 py-4 btn-hover-lift"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-industrial-dark font-semibold px-8 py-4 btn-hover-lift"
              >
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;