"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Search, Sun, Film, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CloudDivider from "@/components/CloudDivider";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import Link from "next/link";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites and web applications built for performance and scale.", path: "/services/web-development" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps that users love.", path: "/services/mobile-app-development" },
  { icon: Search, title: "Generative Search Optimization", desc: "AI-powered search strategies to dominate the digital landscape.", path: "/services/generative-search-optimization" },
  { icon: Sun, title: "Solar Panel Installation", desc: "Sustainable energy solutions engineered for maximum efficiency.", path: "/services/solar-panel-installation" },
  { icon: Film, title: "Motion Graphics, 2D & 3D", desc: "Stunning visual content that captivates and converts.", path: "/services/motion-graphics" },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img src={heroBg.src} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-6">Innovation • Technology • Results</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground leading-[1.05] text-balance">
              Building the
              <span className="gradient-text"> Future with </span>
              Hard & Soft Tech.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We craft world-class digital experiences, innovative tech solutions, and sustainable energy systems that propel businesses forward.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary text-lg"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary/50 transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <CloudDivider />

      {/* Stats */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CloudDivider flip />

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 text-balance">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-muted-foreground max-w-xl mb-16">
              From concept to deployment, we deliver end-to-end solutions that drive growth and innovation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08}>
                <Link href={svc.path} className="block h-full">
                  <div className="glass rounded-2xl p-8 h-full group hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                    <svc.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CloudDivider />

      {/* About Preview */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">About Us</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                We're a Team of Innovators
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NexaTech is a forward-thinking technology company committed to delivering transformative digital solutions. Our multidisciplinary team combines expertise in software engineering, design, AI, and renewable energy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in building technology that matters — solutions that are not only cutting-edge but also sustainable and impactful.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Read Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass rounded-3xl p-8 glow-primary">
                <div className="grid grid-cols-2 gap-4">
                  {["Strategy", "Design", "Engineering", "Innovation"].map((item) => (
                    <div key={item} className="rounded-xl bg-secondary/50 p-6 text-center">
                      <span className="font-heading font-semibold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CloudDivider flip />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Let's Build Something
              <span className="gradient-text"> Extraordinary</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Ready to elevate your business with world-class technology? Get in touch and let's make it happen.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary text-lg"
            >
              Get a Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
