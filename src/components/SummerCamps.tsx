import { Tent, Sun, Users2, Sparkles } from "lucide-react";
import summerCampImage from "@/assets/summer-camp.jpg";

const SummerCamps = () => {
  const features = [
    { icon: Tent, text: "Activități Outdoor" },
    { icon: Sun, text: "Imersiune Lingvistică" },
    { icon: Users2, text: "Teambuilding" },
    { icon: Sparkles, text: "Experiențe Culturale" },
  ];

  return (
    <section id="camps" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <img
                  src={summerCampImage}
                  alt="Summer camp activities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-2 rounded-full font-semibold">
                  🏕️ Tabere 2025
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tabere de Vară & Evenimente
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vacanțe de neuitat unde învățarea se îmbină cu aventura! Elevii noștri participă 
                la tabere educaționale interactive cu focus pe limbi străine, teamwork și activități 
                în aer liber.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-card"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-fresh flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  📅 Sesiuni Disponibile
                </h3>
                <p className="text-muted-foreground mb-4">
                  Iulie - August 2025 | Diferite locații în România
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Grupe organizate pe vârstă (7-14 ani)</li>
                  <li>✓ Instructori certificați și animator</li>
                  <li>✓ Masă completă și cazare confortabilă</li>
                  <li>✓ Lecții de engleză zilnice în format distractiv</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCamps;
