import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Profesori Experimentați și Prietenoși",
      description: "Echipa noastră de pedagogi pasionați face fiecare lecție captivantă și eficientă.",
    },
    {
      title: "Grupe Mici de Învățare",
      description: "Maximum 8 elevi per clasă pentru atenție individualizată și progres rapid.",
    },
    {
      title: "Lecții Interactive și Moderne",
      description: "Folosim tehnologie, jocuri și activități practice pentru o învățare plăcută.",
    },
    {
      title: "Urmărire Personalizată a Progresului",
      description: "Evaluări regulate și feedback detaliat pentru părinți și elevi.",
    },
    {
      title: "Atmosferă Pozitivă și Creativă",
      description: "Mediu sigur și încurajator unde fiecare copil se simte valorizat.",
    },
    {
      title: "Rezultate Dovedite",
      description: "Sute de absolvenți cu certificări internaționale și progres măsurabil.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            De Ce Să Ne Alegi?
          </h2>
          <p className="text-lg text-muted-foreground">
            Ne diferențiem prin dedicarea noastră pentru succesul fiecărui elev și abordarea holistică a educației.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
