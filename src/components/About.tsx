import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pasiune pentru Educație",
      description: "Profesorii noștri pasionați creează un mediu cald și inspirațional pentru fiecare elev.",
    },
    {
      icon: Users,
      title: "Grupe Mici",
      description: "Maximum 8 elevi per clasă pentru atenție personalizată și progres rapid.",
    },
    {
      icon: Target,
      title: "Metode Interactive",
      description: "Lecții captivante prin jocuri, conversații și activități practice.",
    },
    {
      icon: Award,
      title: "Rezultate Măsurabile",
      description: "Urmărim progresul fiecărui elev și certificăm competențele dobândite.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Despre Noi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            De peste 15 ani, construim fundații solide pentru viitorul elevilor noștri. 
            Credem în puterea educației personalizate, în bucuria învățării și în dezvoltarea 
            completă a fiecărui copil - academic, emoțional și social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-smooth text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-hero flex items-center justify-center">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
