"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CloudDivider from "@/components/CloudDivider";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 section-padding">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Contact Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight max-w-3xl text-balance">
            Let's Start a Conversation
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Have a project in mind? We'd love to hear about it. Reach out and let's explore how we can bring your vision to life.
          </motion.p>
        </div>
      </section>

      <CloudDivider />

      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="glass rounded-2xl p-12 text-center glow-primary">
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition">
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Generative Search Optimization</option>
                        <option>Solar Panel Installation</option>
                        <option>Motion Graphics, 2D & 3D</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary text-lg">
                      Send Message
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", detail: "subjectspot@gmail.com" },
                    { icon: Phone, title: "Phone", detail: "+237 6 73 58 99 99" },
                    { icon: MapPin, title: "Office", detail: "Up station Bamenda" },
                  ].map((c) => (
                    <div key={c.title} className="glass rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">{c.title}</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{c.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
