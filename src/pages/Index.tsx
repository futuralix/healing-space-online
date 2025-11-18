import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
      
      <footer className="bg-foreground/5 py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 Therapy Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
