import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Heart, BookOpen } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Dedicated to helping you find clarity, healing, and personal growth
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 15 years of experience in psychotherapy, I've had the privilege of 
                  supporting hundreds of individuals and couples on their journey to mental wellness. 
                  My passion for helping others stems from a deep belief that everyone deserves to 
                  live a fulfilling, authentic life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I approach therapy with warmth, empathy, and evidence-based techniques, creating 
                  a safe space where you can explore your thoughts and feelings without judgment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">My Philosophy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I believe that healing is a collaborative process. Together, we'll work to 
                  understand your unique experiences, identify patterns, and develop strategies 
                  that empower you to create positive change in your life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My approach is integrative, drawing from various therapeutic modalities to 
                  best meet your individual needs and goals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Qualifications & Experience
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">Ph.D. in Clinical Psychology</p>
                  <p className="text-muted-foreground text-sm">Licensed Psychotherapist</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Certifications</h3>
                  <p className="text-muted-foreground">CBT Specialist</p>
                  <p className="text-muted-foreground text-sm">Mindfulness-Based Therapy</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Specializations</h3>
                  <p className="text-muted-foreground">Anxiety & Depression</p>
                  <p className="text-muted-foreground text-sm">Relationship Issues, Trauma</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Professional Memberships</h3>
                  <p className="text-muted-foreground">American Psychological Association</p>
                  <p className="text-muted-foreground text-sm">National Board Certified</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-primary/20 shadow-lg bg-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Taking the first step towards therapy can feel daunting, but you don't have to 
                do it alone. I'm here to support you every step of the way.
              </p>
              <a 
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
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

export default AboutMe;
