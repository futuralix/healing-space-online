const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Our Approach
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              We believe in creating a warm, non-judgmental environment where you can feel safe to explore your thoughts, 
              feelings, and experiences. Our therapeutic approach is grounded in evidence-based practices while remaining 
              flexible to meet your individual needs.
            </p>
            
            <p className="text-muted-foreground">
              Every person's journey is unique, and we honor that by tailoring our methods to best serve you. Whether 
              you're dealing with anxiety, depression, relationship issues, or simply seeking personal growth, we're here 
              to support you every step of the way.
            </p>
            
            <div className="bg-secondary/50 p-8 rounded-lg border border-border/50 mt-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">What to Expect</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>A confidential, supportive space to share your concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Collaborative goal-setting based on your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Evidence-based therapeutic techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Regular progress reviews and adjustments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
