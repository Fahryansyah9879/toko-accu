import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, BatteryCharging } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "Produk", path: "/produk" },
  { name: "Layanan", path: "/layanan" },
  { name: "Ulasan", path: "/ulasan" },
  { name: "Kontak", path: "/kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            data-testid="logo-link"
            className="flex items-center gap-2 group"
          >
            <div className="bg-[#1D3557] p-2 rounded-lg group-hover:bg-[#E63946] transition-colors">
              <BatteryCharging className="w-6 h-6 text-[#FFB703]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold text-[#1D3557] uppercase tracking-tight leading-none">
                Prima Battery
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Cikarang
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.path.replace("/", "") || "home"}`}
                className={`nav-link ${isActive(link.path) ? "nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+6282158544469"
              data-testid="call-btn-desktop"
              className="btn-primary btn-skew px-6 py-2.5 rounded-lg flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Hubungi Kami</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+6282158544469"
              data-testid="call-btn-mobile"
              className="bg-[#E63946] text-white p-2.5 rounded-lg"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  data-testid="mobile-menu-btn"
                  className="border-[#1D3557]"
                >
                  <Menu className="w-5 h-5 text-[#1D3557]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col h-full py-6">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="bg-[#1D3557] p-2 rounded-lg">
                      <BatteryCharging className="w-6 h-6 text-[#FFB703]" />
                    </div>
                    <span className="font-heading text-xl font-bold text-[#1D3557] uppercase">
                      Prima Battery
                    </span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.path}>
                        <Link
                          to={link.path}
                          data-testid={`mobile-nav-${link.path.replace("/", "") || "home"}`}
                          className={`mobile-menu-item ${
                            isActive(link.path)
                              ? "bg-[#FFB703]/20 text-[#E63946]"
                              : ""
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <a
                      href="https://wa.me/6282158544469"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="mobile-whatsapp-btn"
                      className="block w-full bg-[#25D366] text-white text-center py-3 rounded-lg font-bold uppercase tracking-wider"
                    >
                      Chat WhatsApp
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
