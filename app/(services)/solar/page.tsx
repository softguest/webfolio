import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Sun, Battery, DollarSign, Leaf, Shield, Wrench } from "lucide-react";

const SolarPanelInstallation = () => (
  <ServicePageTemplate
    title="Sustainable Energy Solutions"
    subtitle="Solar Panel Installation"
    description="Professional solar panel installation and energy systems engineered for maximum efficiency, savings, and environmental impact."
    process={[
      { title: "Site Assessment", description: "Detailed analysis of your property, energy needs, and solar potential." },
      { title: "System Design", description: "Custom solar system design optimized for your specific requirements." },
      { title: "Installation", description: "Professional installation by certified technicians with minimal disruption." },
      { title: "Monitoring", description: "Smart monitoring systems and maintenance for peak performance." },
    ]}
    benefits={[
      { icon: "sun", title: "Maximum Efficiency", description: "Premium panels and inverters delivering industry-leading energy output." },
      { icon: "battery", title: "Battery Storage", description: "Energy storage solutions for 24/7 power independence." },
      { icon: "dollarSign", title: "Cost Savings", description: "Reduce your energy bills by up to 70% with our optimized systems." },
      { icon: "leaf", title: "Eco-Friendly", description: "Reduce your carbon footprint and contribute to a greener future." },
      { icon: "shield", title: "25-Year Warranty", description: "Industry-leading warranty coverage for total peace of mind." },
      { icon: "wrench", title: "Full Maintenance", description: "Comprehensive maintenance packages to keep your system at peak performance." },
    ]}
    portfolioItems={[
      { title: "Commercial Complex", description: "500kW rooftop installation powering an entire office building." },
      { title: "Residential Community", description: "Solar solutions for 200+ homes in a sustainable development." },
      { title: "Agricultural Farm", description: "Off-grid solar system supporting sustainable farming operations." },
    ]}
  />
);

export default SolarPanelInstallation;