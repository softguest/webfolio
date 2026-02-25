"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import CloudDivider from "./CloudDivider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  title: string;
  description: string;
}

interface Benefit {
  icon: string | LucideIcon;
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  process: ProcessStep[];
  benefits: Benefit[];
  portfolioItems: { title: string; description: string }[];
}

const ServicePageTemplate = ({
  title,
  subtitle,
  description,
  process,
  benefits,
  portfolioItems,
}: ServicePageProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-semibold text-sm tracking-widest uppercase mb-4"
        >
          {subtitle}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight max-w-4xl text-balance"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>

    <CloudDivider />

    {/* Process */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Process</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">A proven methodology delivering exceptional results every time.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full group hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CloudDivider flip />

    {/* Benefits */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">Key advantages that set us apart.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full group hover:border-primary/30 transition-colors">
                <b.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CloudDivider />

    {/* Portfolio */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">Selected projects showcasing our expertise.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CloudDivider flip />

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's turn your vision into reality. Reach out and let's build something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary text-lg"
          >
            Contact Us Today
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServicePageTemplate;
