import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Școala Ta de Încredere din România</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Învață Engleza și
            <br />
            <span className="gradient-warm inline-block px-4 py-2 rounded-lg">Crește cu Încredere</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
            Cursuri de limbă engleză, germană și franceză pentru toate vârstele. Plus dezvoltare personală, dans și tabere de vară.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="warm" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection("cta")}
            >
              <BookOpen className="mr-2" />
              Rezervă Consultație Gratuită
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-white/95 hover:bg-white border-0"
              onClick={() => scrollToSection("courses")}
            >
              Descoperă Cursurile
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90">Elevi Fericiți</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90">Ani de Experiență</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-white/90">Profesori Pasionați</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
