import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-hero rounded-3xl p-8 md:p-12 text-center shadow-hover animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Începe Călătoria de Învățare Astăzi!
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Rezervă o consultație gratuită și descoperă cum putem ajuta copilul sau tine să atingi obiectivele lingvistice și personale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="warm" size="lg" className="text-lg px-8 py-6 h-auto">
                <Calendar className="mr-2" />
                Rezervă Consultație Gratuită
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-white/95 hover:bg-white border-0"
              >
                <Phone className="mr-2" />
                Sună Acum
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Phone className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold mb-1">Telefon</p>
                <p className="text-white/90">+40 123 456 789</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Mail className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold mb-1">Email</p>
                <p className="text-white/90">contact@languageschool.ro</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Calendar className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold mb-1">Program</p>
                <p className="text-white/90">Lun-Vin: 9:00-20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
