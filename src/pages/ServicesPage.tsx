import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Brain, Sparkles, Smile, Shield } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your unique needs, providing a safe space to explore your thoughts and feelings.",
    details: [
      "Personalized treatment plans",
      "Weekly or bi-weekly sessions",
      "Focus on your specific goals",
      "Confidential and supportive environment"
    ]
  },
  {
    icon: Users,
    title: "Couples Counseling",
    description: "Strengthen your relationship through improved communication and deeper understanding of each other's perspectives.",
    details: [
      "Communication skill building",
      "Conflict resolution strategies",
      "Rebuilding trust and intimacy",
      "Pre-marital counseling available"
    ]
  },
  {
    icon: Brain,
    title: "Cognitive Behavioral Therapy",
    description: "Evidence-based approach to help you identify and change negative thought patterns and behaviors.",
    details: [
      "Proven effective for anxiety & depression",
      "Practical tools and techniques",
      "Homework exercises for skill building",
      "Short-term, goal-oriented approach"
    ]
  },
  {
    icon: Sparkles,
    title: "Mindfulness & Wellness",
    description: "Learn techniques to reduce stress, increase self-awareness, and cultivate inner peace in your daily life.",
    details: [
      "Meditation and breathing exercises",
      "Stress management techniques",
      "Work-life balance strategies",
      "Self-compassion practices"
    ]
  },
  {
    icon: Smile,
    title: "Anxiety & Depression Treatment",
    description: "Specialized support for managing symptoms of anxiety and depression through proven therapeutic approaches.",
    details: [
      "Symptom assessment and monitoring",
      "Coping strategies development",
      "Medication management coordination",
      "Long-term wellness planning"
    ]
  },
  {
    icon: Shield,
    title: "Trauma-Focused Therapy",
    description: "Compassionate care for those dealing with past traumatic experiences, using gentle, evidence-based methods.",
    details: [
      "EMDR and trauma-focused CBT",
      "Safe processing of difficult memories",
      "Building resilience and coping skills",
      "Healing at your own pace"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health support tailored to your unique needs. 
            Every service is delivered with compassion, professionalism, and respect for your journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            How Sessions Work
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Initial Consultation</h3>
                <p>We'll discuss your concerns, goals, and determine if we're a good fit. This first session is about getting to know each other.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Treatment Planning</h3>
                <p>Together, we'll create a personalized treatment plan with clear goals and realistic timelines for your therapy journey.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Regular Sessions</h3>
                <p>We'll meet regularly (typically weekly or bi-weekly) to work through challenges, develop new skills, and track your progress.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ongoing Support</h3>
                <p>Your treatment evolves with you. We'll regularly review progress and adjust our approach to best serve your changing needs.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule Your First Session
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-foreground/5 py-8 text-center mt-16">
        <p className="text-muted-foreground">
          © 2024 Therapy Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ServicesPage;
