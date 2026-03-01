import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-border bg-card/30">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500 from-primary to-accent flex items-center justify-center font-heading font-extrabold text-primary-foreground text-lg">S</div>
            <span className="font-heading font-bold text-xl text-foreground">SubjectSpot</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Transforming ideas into digital reality with cutting-edge technology solutions.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
          <div className="space-y-2.5">
            <Link href="/solar" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Solar Panel Installation</Link>
            <Link href="/web-develop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Web Development</Link>
            <Link href="/mobile-develop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mobile App Development</Link>
            <Link href="/generative" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Generative Search Optimization</Link>
            <Link href="/motion-graphics" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Motion Graphics, 2D & 3D</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
          <div className="space-y-2.5">
            <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
          <p className="text-sm text-muted-foreground">info@subjectspot.com</p>
          <p className="text-sm text-muted-foreground mt-1">+237 6 73 58 99 99</p>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SubjectSpot. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
