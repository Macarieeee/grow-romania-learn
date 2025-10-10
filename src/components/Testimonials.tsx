import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Popescu",
      role: "Părinte",
      content: "Fiica mea a început să vorbească engleza cu încredere după doar 3 luni! Profesorii sunt minunați și atmosfera foarte plăcută.",
      rating: 5,
    },
    {
      name: "Andrei Ionescu",
      role: "Student - 16 ani",
      content: "Am reușit să iau certificatul Cambridge B2 datorită pregătirii excelente de aici. Lecțiile sunt interactive și niciodată plictisitoare.",
      rating: 5,
    },
    {
      name: "Elena Dumitrescu",
      role: "Părinte",
      content: "Tabăra de vară a fost o experiență extraordinară pentru cei doi copii ai mei. Au învățat, s-au distrat și au făcut prieteni noi.",
      rating: 5,
    },
    {
      name: "Alexandru Georgescu",
      role: "Adult - Curs Germană",
      content: "Ca adult, mă îngrijoram că va fi dificil să învăț o limbă nouă. Dar abordarea personalizată și ritmul flexibil m-au ajutat enorm.",
      rating: 5,
    },
    {
      name: "Cristina Marinescu",
      role: "Părinte",
      content: "Cursurile de dezvoltare personală l-au transformat pe fiul meu. E mult mai încrezător și comunică mai bine cu colegii.",
      rating: 5,
    },
    {
      name: "David Popa",
      role: "Student - 12 ani",
      content: "Îmi plac cursurile de dans și de engleză! Profesorii sunt foarte funny și învăț multe lucruri interesante.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ce Spun Elevii și Părinții Noștri
          </h2>
          <p className="text-lg text-muted-foreground">
            Feedback real de la familiile care ne-au ales și au văzut rezultate concrete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
