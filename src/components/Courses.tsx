import { BookOpen, Brain, Music, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Limba Engleză",
      subtitle: "Pentru Copii, Adolescenți & Adulți",
      description: "Cursuri adaptate fiecărei vârste, de la primii pași până la nivel avansat. Pregătire pentru examene Cambridge, conversație, gramatică și vocabular.",
      gradient: "gradient-hero",
    },
    {
      icon: Globe,
      title: "Germană & Franceză",
      subtitle: "Deschide Noi Orizonturi",
      description: "Învață limbi străine cu profesori nativi sau certificați. Programe pentru începători și avansați, focus pe conversație și cultură.",
      gradient: "gradient-warm",
    },
    {
      icon: Brain,
      title: "Dezvoltare Personală",
      subtitle: "Workshops Interactive",
      description: "Gândire critică, încredere în sine, public speaking, leadership pentru copii și adolescenți. Construiește competențe pentru viață.",
      gradient: "gradient-fresh",
    },
    {
      icon: Music,
      title: "Dans & Creativitate",
      subtitle: "Mișcare și Expresie",
      description: "Cursuri de dans pentru copii: modern, hip-hop, balet. Dezvoltă coordonarea, ritmul și creativitatea într-un cadru distractiv.",
      gradient: "gradient-warm",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cursurile Noastre
          </h2>
          <p className="text-lg text-muted-foreground">
            Programe diverse pentru toate vârstele și interesele. Alege cursul potrivit pentru tine sau copilul tău.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-card hover:shadow-hover transition-smooth animate-fade-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 ${course.gradient}`} />
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${course.gradient} flex items-center justify-center mb-4`}>
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
