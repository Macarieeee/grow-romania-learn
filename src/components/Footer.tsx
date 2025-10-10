import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-xl">Language School</span>
            </div>
            <p className="text-white/80 mb-4">
              Școala ta de limbă și dezvoltare personală din România.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Cursuri */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Cursuri</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#courses" className="hover:text-white transition-smooth">
                  Limba Engleză
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-smooth">
                  Germană & Franceză
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-smooth">
                  Dezvoltare Personală
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-smooth">
                  Dans & Creativitate
                </a>
              </li>
              <li>
                <a href="#camps" className="hover:text-white transition-smooth">
                  Tabere de Vară
                </a>
              </li>
            </ul>
          </div>

          {/* Link-uri Rapide */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition-smooth">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-smooth">
                  Testimoniale
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Str. Educației nr. 10, București, România</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+40123456789" className="hover:text-white transition-smooth">
                  +40 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@languageschool.ro" className="hover:text-white transition-smooth">
                  contact@languageschool.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Language & Personal Development School. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
