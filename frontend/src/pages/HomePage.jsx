import { Link } from "react-router-dom";
import {
  BatteryCharging,
  Phone,
  Truck,
  Wrench,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const brands = [
  { name: "GS Astra", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GS_Yuasa_logo.svg/200px-GS_Yuasa_logo.svg.png" },
  { name: "Yuasa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GS_Yuasa_logo.svg/200px-GS_Yuasa_logo.svg.png" },
  { name: "Incoe", logo: "https://incoe.astra.co.id/assets/images/logo.png" },
  { name: "Astra Otoparts", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_Astra_Otoparts.svg/200px-Logo_Astra_Otoparts.svg.png" },
];

const services = [
  {
    icon: BatteryCharging,
    title: "Jual Aki",
    description: "Aki mobil & motor berkualitas dari merek ternama",
  },
  {
    icon: Wrench,
    title: "Pasang Aki",
    description: "Layanan pemasangan aki oleh teknisi berpengalaman",
  },
  {
    icon: Truck,
    title: "Layanan Antar",
    description: "Pesan antar aki ke lokasi Anda di Cikarang & sekitar",
  },
  {
    icon: Zap,
    title: "Cek Aki Gratis",
    description: "Pengecekan kondisi aki secara gratis",
  },
  {
    icon: Shield,
    title: "Garansi Resmi",
    description: "Semua aki bergaransi resmi dari distributor",
  },
  {
    icon: Clock,
    title: "Darurat 24 Jam",
    description: "Layanan darurat untuk aki mogok",
  },
];

const features = [
  "Aki Original Bergaransi",
  "Harga Bersaing",
  "Teknisi Berpengalaman",
  "Layanan Antar Gratis*",
];

export default function HomePage() {
  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section pt-20" data-testid="hero-section">
        <div className="hero-overlay"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')`,
          }}
        ></div>
        <div className="hero-content container-custom py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFB703] text-[#1D3557] px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Star className="w-4 h-4" fill="currentColor" />
              <span className="font-bold text-sm uppercase tracking-wider">
                Rating 4.4 - Terpercaya di Cikarang
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              Mobil Mogok?{" "}
              <span className="text-[#FFB703]">Kami Antar Aki Sekarang!</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Pusat Aki Mobil & Motor Terpercaya di Cikarang. Menyediakan aki
              berkualitas dari GS Astra, Yuasa, Incoe dengan layanan pasang dan
              antar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <a
                href="https://wa.me/6282158544469?text=Halo,%20saya%20ingin%20pesan%20aki"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
              >
                <Button className="btn-primary btn-skew w-full sm:w-auto px-8 py-6 text-lg rounded-lg">
                  <span className="flex items-center gap-2">
                    <BatteryCharging className="w-5 h-5" />
                    Pesan Sekarang
                  </span>
                </Button>
              </a>
              <a href="tel:+6282158544469" data-testid="hero-call-btn">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1D3557] w-full sm:w-auto px-8 py-6 text-lg rounded-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0821-5854-4469
                </Button>
              </a>
            </div>
            {/* Features */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="w-4 h-4 text-[#FFB703]" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-16 lg:py-24 bg-[#F8FAFC]"
        data-testid="services-section"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Layanan Kami</h2>
            <p className="section-subtitle">
              Solusi lengkap untuk kebutuhan aki kendaraan Anda
            </p>
          </div>
          <div className="grid-services">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`service-card card-lift opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="bg-[#1D3557] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-[#FFB703]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1D3557] uppercase tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/layanan" data-testid="see-all-services-btn">
              <Button className="btn-secondary px-8 py-3 rounded-lg">
                Lihat Semua Layanan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 lg:py-24 bg-white" data-testid="brands-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Merek Tersedia</h2>
            <p className="section-subtitle">
              Kami menyediakan aki dari merek-merek ternama dan terpercaya
            </p>
          </div>
          <div className="grid-brands">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="brand-logo-container h-32"
                data-testid={`brand-${brand.name.toLowerCase().replace(" ", "-")}`}
              >
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-[#1D3557] uppercase">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 lg:py-24 emergency-gradient"
        data-testid="cta-section"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
              Butuh Aki Sekarang?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Hubungi kami untuk layanan darurat penggantian aki. Kami siap
              antar dan pasang di lokasi Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6282158544469?text=Halo,%20saya%20butuh%20aki%20darurat"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-whatsapp-btn"
              >
                <Button className="bg-white text-[#E63946] hover:bg-gray-100 w-full sm:w-auto px-8 py-6 text-lg font-bold uppercase rounded-lg">
                  Chat WhatsApp
                </Button>
              </a>
              <a href="tel:+6282158544469" data-testid="cta-call-btn">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#E63946] w-full sm:w-auto px-8 py-6 text-lg font-bold uppercase rounded-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon Sekarang
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-[#1D3557]" data-testid="quick-info-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="text-[#FFB703] mb-2">
                <Clock className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-1">
                Jam Buka
              </h3>
              <p className="text-gray-400">Setiap Hari - Tutup 21:00</p>
            </div>
            <div>
              <div className="text-[#FFB703] mb-2">
                <Phone className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-1">
                Telepon
              </h3>
              <a
                href="tel:+6282158544469"
                className="text-gray-400 hover:text-[#FFB703] transition-colors"
              >
                0821-5854-4469
              </a>
            </div>
            <div>
              <div className="text-[#FFB703] mb-2">
                <Truck className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-1">
                Layanan Antar
              </h3>
              <p className="text-gray-400">Area Cikarang & Sekitar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
