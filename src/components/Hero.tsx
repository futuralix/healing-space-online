import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-accent/10" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in">
          Find Your Path to
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Inner Peace
          </span>
        </h1>
        
        <p className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Compassionate, professional therapy services to support your mental health journey
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToContact}
          >
            Schedule a Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 hover:bg-secondary/50 transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
