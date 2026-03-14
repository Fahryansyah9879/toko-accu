import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Mail,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "0821-5854-4469",
    action: "tel:+6282158544469",
    actionLabel: "Hubungi Sekarang",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "Setiap Hari - Tutup 21:00",
    action: null,
    actionLabel: null,
  },
  {
    icon: MapPin,
    title: "Alamat",
    value:
      "Jl. Raya Cikarang - Cibarusah, Sukaresmi, Cikarang Selatan, Kabupaten Bekasi, Jawa Barat 17530",
    action:
      "https://www.google.com/maps/search/?api=1&query=Toko+Accu+Prima+Battery+Cikarang",
    actionLabel: "Lihat di Maps",
  },
];

export default function ContactPage() {
  const phoneNumber = "6282158544469";
  const message = encodeURIComponent(
    "Halo, saya ingin bertanya tentang aki di Toko Accu Prima Battery"
  );

  return (
    <div data-testid="contact-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
              Hubungi <span className="text-[#FFB703]">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Siap melayani kebutuhan aki kendaraan Anda. Hubungi kami untuk
              informasi dan pemesanan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="section-title mb-2">Informasi Kontak</h2>
                <p className="text-gray-600">
                  Temukan kami di lokasi atau hubungi via telepon/WhatsApp
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="contact-info-item shadow-md"
                  data-testid={`contact-info-${index}`}
                >
                  <CardContent className="p-0 flex items-start gap-4">
                    <div className="bg-[#E63946] p-3 rounded-lg flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading font-bold text-[#1D3557] uppercase tracking-tight mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{info.value}</p>
                      {info.action && (
                        <a
                          href={info.action}
                          target={info.action.startsWith("http") ? "_blank" : undefined}
                          rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[#E63946] font-medium text-sm hover:underline inline-flex items-center gap-1"
                        >
                          {info.actionLabel}
                          <Navigation className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  data-testid="contact-whatsapp-btn"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg font-bold uppercase">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat WhatsApp
                  </Button>
                </a>
                <a
                  href="tel:+6282158544469"
                  className="flex-1"
                  data-testid="contact-call-btn"
                >
                  <Button className="w-full btn-primary py-6 text-lg rounded-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Telepon
                  </Button>
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="mb-4">
                <h2 className="section-title mb-2">Lokasi Toko</h2>
                <p className="text-gray-600">
                  Kode Maps: M48C+7C Sukaresmi, Kabupaten Bekasi, Jawa Barat
                </p>
              </div>
              <div
                className="map-container bg-gray-200 rounded-lg overflow-hidden"
                data-testid="google-map"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3534091573396!2d107.15!3d-6.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjEnMDAuMCJTIDEwN8KwMDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Toko Accu Prima Battery"
                  className="w-full h-full"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Toko+Accu+Prima+Battery+Cikarang+Jl+Raya+Cikarang+Cibarusah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
                data-testid="open-maps-btn"
              >
                <Button
                  variant="outline"
                  className="border-2 border-[#1D3557] text-[#1D3557] hover:bg-[#1D3557] hover:text-white"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Buka di Google Maps
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Store Info Banner */}
      <section className="py-12 bg-[#1D3557]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-[#FFB703]">
                Toko Accu Prima Battery
              </h3>
              <p className="text-gray-400">Toko Aki Mobil & Motor</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-[#FFB703]">
                Rating 4.4
              </h3>
              <p className="text-gray-400">Terpercaya di Cikarang</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-[#FFB703]">
                Layanan Antar
              </h3>
              <p className="text-gray-400">Pesan Antar Tersedia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 emergency-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-6">
              Butuh Bantuan Darurat?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Mobil mogok? Aki drop? Hubungi kami sekarang untuk layanan antar
              dan pasang aki darurat!
            </p>
            <a href="tel:+6282158544469" data-testid="emergency-contact-btn">
              <Button className="bg-white text-[#E63946] hover:bg-gray-100 px-8 py-6 text-lg font-bold uppercase rounded-lg">
                <Phone className="w-5 h-5 mr-2" />
                0821-5854-4469
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
