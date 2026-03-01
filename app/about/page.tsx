"use client"
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CloudDivider from "@/components/CloudDivider";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
// import ThreeBackground from "./ThreeBackground";

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "We push boundaries and embrace emerging technologies to deliver cutting-edge solutions." },
  { icon: Target, title: "Results Driven", desc: "Every project is measured by the tangible impact it creates for our clients' businesses." },
  { icon: Users, title: "Collaborative Spirit", desc: "We work as true partners, integrating seamlessly with your team and vision." },
  { icon: Award, title: "Excellence Always", desc: "Quality is non-negotiable — from the first line of code to the final pixel." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative pt-32 pb-20 section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
          About NexaTech
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight max-w-4xl text-balance">
          Pioneering Technology for a Better Tomorrow
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          We are a multidisciplinary team of engineers, designers, and strategists united by a passion for building technology that transforms industries and improves lives.
        </motion.p>
      </div>
    </section>

    <CloudDivider />

    {/* <section className="section-padding bg-slate-700/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded with the vision of bridging the gap between innovative technology and real-world impact, NexaTech has grown into a trusted partner for businesses worldwide.</p>
              <p>Our diverse portfolio — spanning web development, mobile apps, AI-driven search, renewable energy, and creative media — reflects our belief that great technology knows no boundaries.</p>
              <p>Today, we serve clients across industries, from startups to enterprises, helping them navigate digital transformation with confidence and clarity.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-3xl p-10 glow-accent">
              <div className="space-y-6">
                {[
                  { num: "2010", label: "Founded" },
                  { num: "200+", label: "Projects Completed" },
                  { num: "50+", label: "Team Members" },
                  { num: "15+", label: "Countries Served" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <span className="text-3xl font-heading font-bold gradient-text w-24">{s.num}</span>
                    <span className="text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section> */}
    {/* <ThreeBackground /> */}

    <section className="relative section-padding bg-slate-700/10 overflow-hidden">

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Story
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with the vision of bridging the gap between innovative technology and real-world impact, NexaTech has grown into a trusted partner for businesses worldwide.
              </p>
              <p>
                Our diverse portfolio — spanning web development, mobile apps, AI-driven search, renewable energy, and creative media — reflects our belief that great technology knows no boundaries.
              </p>
              <p>
                Today, we serve clients across industries, from startups to enterprises, helping them navigate digital transformation with confidence and clarity.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass rounded-3xl p-10 glow-accent backdrop-blur-xl bg-white/5">
              <div className="space-y-6">
                {[
                  { num: "2010", label: "Founded" },
                  { num: "200+", label: "Projects Completed" },
                  { num: "50+", label: "Team Members" },
                  { num: "15+", label: "Countries Served" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <span className="text-3xl font-heading font-bold gradient-text w-24">
                      {s.num}
                    </span>
                    <span className="text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>

    <CloudDivider flip />

    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">The principles that guide everything we do.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CloudDivider />

    <section className="section-padding bg-card/30">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Join Our Journey</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">We're always looking for talented individuals who share our passion for innovation.</p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary text-lg">
            Get in Touch
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
