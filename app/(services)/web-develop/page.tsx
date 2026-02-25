import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Code, Zap, Shield, BarChart, Palette, Rocket } from "lucide-react";

const WebDevelopment = () => (
  <ServicePageTemplate
    title="Web Development That Performs"
    subtitle="Web Development"
    description="We build fast, scalable, and beautiful web experiences using modern frameworks and best practices. From corporate sites to complex web applications, we deliver excellence."
    process={[
      { title: "Discovery", description: "We dive deep into your goals, audience, and competitive landscape to define the perfect strategy." },
      { title: "Design", description: "Our designers craft pixel-perfect interfaces that balance aesthetics with user experience." },
      { title: "Development", description: "Clean, maintainable code built with modern frameworks for performance and scalability." },
      { title: "Launch & Support", description: "Rigorous testing, seamless deployment, and ongoing support to ensure long-term success." },
    ]}
    benefits={[
      { icon: "code", title: "Modern Tech Stack", description: "React, Next.js, TypeScript — we use the best tools for the job." },
      { icon: "zap", title: "Lightning Fast", description: "Optimized for Core Web Vitals with sub-second load times." },
      { icon: "shield", title: "Secure by Design", description: "Security best practices baked into every layer of the stack." },
      { icon: "bar-chart", title: "SEO Optimized", description: "Built-in SEO foundations that help you rank higher organically." },
      { icon: "palette", title: "Stunning Design", description: "Award-worthy interfaces that leave lasting impressions." },
      { icon: "rocket", title: "Scalable Architecture", description: "Infrastructure that grows seamlessly with your business." },
    ]}
    portfolioItems={[
      { title: "E-Commerce Platform", description: "A high-performance online store processing millions in transactions." },
      { title: "SaaS Dashboard", description: "Real-time analytics platform with complex data visualizations." },
      { title: "Corporate Website", description: "Premium brand experience for a Fortune 500 company." },
    ]}
  />
);

export default WebDevelopment;
