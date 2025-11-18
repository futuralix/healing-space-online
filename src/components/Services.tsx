import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your unique needs, providing a safe space to explore your thoughts and feelings."
  },
  {
    icon: Users,
    title: "Couples Counseling",
    description: "Strengthen your relationship through improved communication and deeper understanding of each other's perspectives."
  },
  {
    icon: Brain,
    title: "Cognitive Behavioral Therapy",
    description: "Evidence-based approach to help you identify and change negative thought patterns and behaviors."
  },
  {
    icon: Sparkles,
    title: "Mindfulness & Wellness",
    description: "Learn techniques to reduce stress, increase self-awareness, and cultivate inner peace in your daily life."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mental health support tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
