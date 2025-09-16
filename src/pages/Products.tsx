import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GetAQuotePopup from '@/components/GetAQuotePopup';
import {
  ArrowRight,
  Zap,
  Shield,
  Settings,
  Box,
  Cable,
  Monitor,
  CheckCircle
} from 'lucide-react';
import customsolImages from '@/assets/custom-sol.webp';
import switchgearImage from '@/assets/switchgear.webp'
import cabletraysImage from '@/assets/cable-trays.jpg';
import panelProductsImage from '@/assets/panel-board.jpg';
import electricalProductsImage from '@/assets/electrical-products.jpg';
import safetyEquipmentImage from '@/assets/safety-equipment.jpg';

const Products = () => {
  const productCategories = [
    {
      icon: Box,
      title: 'Electric Boxes',
      description: 'Complete range of electrical boxes including modular, concealed, junction, surface, and PVC variants.',
      image: electricalProductsImage,
      products: ['Modular Switch Boxes', 'Concealed Boxes', 'Junction Boxes', 'Surface Boxes', 'PVC Boxes'],
      features: ['IS 3043 Compliant', 'Fire Retardant', 'Multiple Sizes', 'Easy Installation']
    },
    {
      icon: Monitor,
      title: 'Distribution Boards',
      description: 'High-quality distribution boards designed for safe and efficient power distribution.',
      image: safetyEquipmentImage,
      products: ['MCB Distribution Boards', 'MCCB Panels', 'Meter Boards', 'Sub-Distribution Boards'],
      features: ['IP Rating Protection', 'Copper Bus Bars', 'Flame Retardant', 'Customizable']
    },
    {
      icon: Shield,
      title: 'Panel Boards',
      description: 'Robust panel boards for industrial and commercial electrical installations.',
      image: panelProductsImage,
      products: ['Control Panels', 'Motor Control Centers', 'Power Panels', 'Automation Panels'],
      features: ['Heavy Duty Construction', 'Weatherproof', 'Custom Configurations', 'Quality Testing']
    },
    {
      icon: Cable,
      title: 'Cable Trays',
      description: 'Durable cable management solutions for organized and safe cable routing.',
      image: cabletraysImage,
      products: ['Perforated Trays', 'Ladder Trays', 'Solid Bottom Trays', 'Wire Mesh Trays'],
      features: ['Galvanized Coating', 'Easy Assembly', 'Corrosion Resistant', 'Load Tested']
    },
    {
      icon: Settings,
      title: 'Switchgear Accessories',
      description: 'Essential accessories and components for complete electrical switchgear systems.',
      image: switchgearImage,
      products: ['Isolators', 'Circuit Breakers', 'Contactors', 'Relays', 'Push Buttons'],
      features: ['High Breaking Capacity', 'Long Service Life', 'Easy Maintenance', 'Reliable Operation']
    },
    {
      icon: Zap,
      title: 'Custom Solutions',
      description: 'Tailor-made electrical enclosures and OEM solutions designed to your specifications.',
      image: customsolImages,
      products: ['OEM Enclosures', 'Custom Panels', 'Special Purpose Boxes', 'Prototype Development'],
      features: ['Design Flexibility', 'Quick Turnaround', 'Engineering Support', 'Quality Assurance']
    },
  ];

  const specifications = [
    'Material: High-grade steel and PVC',
    'Coating: Powder coating/Galvanized',
    'Standards: IS 3043, IS 8623',
    'IP Rating: IP20 to IP65',
    'Temperature: -10°C to +70°C',
    'Humidity: Up to 95% RH'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Products & Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Comprehensive range of electrical boxes, safety equipment, and custom solutions
              for all your infrastructure needs
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
              Our Product Range
            </h2>
            <p className="text-xl text-industrial-medium max-w-3xl mx-auto">
              From standard electrical boxes to custom-engineered solutions,
              we offer everything you need for safe electrical installations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="industrial-card group cursor-pointer overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-xl font-bold text-industrial-dark">
                    {category.title}
                  </CardTitle>

                  <p className="text-industrial-medium leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-industrial-dark">Products Include:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-industrial-medium">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-industrial-dark">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-muted text-xs font-medium rounded-full text-industrial-dark"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    <Link to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-industrial-dark">
                Technical Specifications
              </h2>
              <p className="text-lg text-industrial-medium leading-relaxed">
                All our products are manufactured to meet or exceed Indian and international
                standards for electrical safety and performance.
              </p>

              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-industrial-medium">{spec}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="btn-hover-lift">
                <Link to="/contact">
                  Download Technical Catalog
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="industrial-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Quality Assurance</h3>
                  </div>
                  <p className="text-industrial-medium">
                    Every product undergoes rigorous testing including electrical,
                    mechanical, and environmental tests to ensure reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-8 h-8 text-safety-orange" />
                    <h3 className="text-xl font-semibold">Safety Standards</h3>
                  </div>
                  <p className="text-industrial-medium">
                    Compliant with IS 3043, IS 8623, and other relevant Indian
                    standards for electrical equipment safety.
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-8 h-8 text-industrial-medium" />
                    <h3 className="text-xl font-semibold">Customization</h3>
                  </div>
                  <p className="text-industrial-medium">
                    Custom designs and modifications available to meet specific
                    project requirements and applications.
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-200">
              Our engineering team can design and manufacture custom electrical
              enclosures and solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GetAQuotePopup
                trigger={
                  <Button
                    size="lg"
                    className="bg-safety-orange hover:bg-safety-orange-light text-white font-semibold px-8 py-4 btn-hover-lift"
                  >
                    Request Custom Quote
                  </Button>
                }
              />

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-industrial-dark font-semibold px-8 py-4 btn-hover-lift"
              >
                <Link to="/technology">View Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;