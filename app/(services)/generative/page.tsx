import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Search, Brain, TrendingUp, Target, BarChart, Zap } from "lucide-react";

const GenerativeSearchOptimization = () => (
  <ServicePageTemplate
    title="Dominate AI-Powered Search"
    subtitle="Generative Search Optimization"
    description="Stay ahead of the curve with our AI-first search optimization strategies. We help your brand become the answer in generative search experiences."
    process={[
      { title: "Audit", description: "Comprehensive analysis of your current search presence and AI visibility." },
      { title: "Strategy", description: "Custom GSO roadmap aligned with your industry and business objectives." },
      { title: "Optimization", description: "Content restructuring, schema markup, and entity optimization for AI crawlers." },
      { title: "Monitor & Adapt", description: "Continuous tracking and algorithm adaptation to maintain top positions." },
    ]}
    benefits={[
      { icon: "search", title: "AI-First Strategy", description: "Optimized for ChatGPT, Perplexity, Google SGE, and emerging AI search." },
      { icon: "brain", title: "Entity Authority", description: "Build your brand's knowledge graph presence and topical authority." },
      { icon: "trendingUp", title: "Measurable Growth", description: "Clear KPIs and reporting on AI citation frequency and visibility." },
      { icon: "target", title: "Intent Matching", description: "Content structured to match the exact queries your audience asks." },
      { icon: "barChart", title: "Data-Driven", description: "Advanced analytics powering every strategic decision." },
      { icon: "zap", title: "Fast Results", description: "Proven frameworks that accelerate your path to AI search dominance." },
    ]}
    portfolioItems={[
      { title: "B2B SaaS Brand", description: "300% increase in AI search citations within 6 months." },
      { title: "E-Commerce Giant", description: "Featured in 85% of relevant generative search results." },
      { title: "Healthcare Provider", description: "Became the #1 cited source in AI health search queries." },
    ]}
  />
);

export default GenerativeSearchOptimization;
