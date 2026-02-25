import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Film, Layers, Sparkles, Eye, Palette, Clapperboard } from "lucide-react";

const MotionGraphics = () => (
  <ServicePageTemplate
    title="Visual Stories That Captivate"
    subtitle="Motion Graphics, 2D & 3D"
    description="We create stunning motion graphics, 2D animations, and 3D visuals that bring your brand story to life and captivate audiences across every platform."
    process={[
      { title: "Concept", description: "Storyboarding and creative direction aligned with your brand narrative." },
      { title: "Design", description: "Character design, style frames, and visual development." },
      { title: "Animation", description: "Frame-by-frame animation and 3D rendering with meticulous attention to detail." },
      { title: "Delivery", description: "Final rendering, sound design, and format optimization for all platforms." },
    ]}
    benefits={[
      { icon: "film", title: "Cinematic Quality", description: "Hollywood-grade production values at competitive pricing." },
      { icon: "layers", title: "2D & 3D Expertise", description: "Full-spectrum animation capabilities from flat design to photorealistic 3D." },
      { icon: "sparkles", title: "Brand-Aligned", description: "Every frame is crafted to reinforce your brand identity and messaging." },
      { icon: "eye", title: "Attention-Grabbing", description: "Dynamic visuals engineered to stop scrolling and drive engagement." },
      { icon: "Palette", title: "Custom Styles", description: "Unique visual styles tailored to your brand — never templated." },
      { icon: "clapperboard", title: "Multi-Platform", description: "Optimized for social media, web, presentations, and broadcast." },
    ]}
    portfolioItems={[
      { title: "Brand Explainer Video", description: "Animated explainer that boosted conversion rates by 40%." },
      { title: "Product Launch 3D", description: "Photorealistic 3D product visualization for a tech launch." },
      { title: "Social Media Campaign", description: "Series of animated shorts generating 2M+ views across platforms." },
    ]}
  />
);

export default MotionGraphics;
