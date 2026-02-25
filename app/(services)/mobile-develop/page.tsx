import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Smartphone, Layers, Battery, Globe, Shield, Gauge } from "lucide-react";

const MobileAppDevelopment = () => (
  <ServicePageTemplate
    title="Mobile Apps Users Love"
    subtitle="Mobile App Development"
    description="We design and develop native and cross-platform mobile applications that deliver seamless experiences across iOS and Android."
    process={[
      { title: "Strategy", description: "Define your app's core purpose, target users, and key differentiators." },
      { title: "Prototyping", description: "Interactive prototypes to validate UX flows before writing any code." },
      { title: "Development", description: "Agile development with regular builds and continuous feedback loops." },
      { title: "Launch & Iterate", description: "App store optimization, launch support, and continuous improvement." },
    ]}
    benefits={[
      { icon: "smartphone", title: "Native Performance", description: "Smooth 60fps experiences leveraging platform-specific capabilities." },
      { icon: "layers", title: "Cross-Platform", description: "React Native and Flutter expertise for cost-effective multi-platform reach." },
      { icon: "battery", title: "Optimized Battery", description: "Efficient code that respects device resources and user experience." },
      { icon: "globe", title: "Offline-Ready", description: "Smart caching and sync for reliable offline functionality." },
      { icon: "shield", title: "Enterprise Security", description: "End-to-end encryption and compliance with industry standards." },
      { icon: "gauge", title: "Fast Iteration", description: "Rapid development cycles with OTA updates and A/B testing." },
    ]}
    portfolioItems={[
      { title: "Health & Fitness App", description: "Wearable-integrated wellness platform with 500K+ downloads." },
      { title: "FinTech Wallet", description: "Secure digital payment solution with biometric authentication." },
      { title: "Social Platform", description: "Real-time messaging and content sharing app for communities." },
    ]}
  />
);

export default MobileAppDevelopment;
