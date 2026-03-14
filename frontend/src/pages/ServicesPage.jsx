import {
  BatteryCharging,
  Wrench,
  Truck,
  Zap,
  RefreshCw,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const services = [
  {
    icon: BatteryCharging,
    title: "Penjualan Aki Mobil",
    description:
      "Menyediakan berbagai merek aki mobil berkualitas seperti GS Astra, Yuasa, Incoe, dan Amaron. Semua produk original dengan garansi resmi.",
    features: [
      "Aki basah & aki kering tersedia",
      "Berbagai kapasitas (45AH - 100AH)",
      "Garansi resmi 6-18 bulan",
      "Harga kompetitif",
    ],
  },
  {
    icon: Zap,
    title: "Penjualan Aki Motor",
    description:
      "Aki motor MF (Maintenance Free) untuk berbagai tipe motor matic, bebek, dan sport. Produk berkualitas dengan performa maksimal.",
    features: [
      "Aki motor MF original",
      "Untuk motor matic & manual",
      "Ukuran lengkap tersedia",
      "Garansi resmi",
    ],
  },
  {
    icon: Wrench,
    title: "Pasang Aki",
    description:
      "Layanan pemasangan aki oleh teknisi berpengalaman. Pemasangan dilakukan dengan hati-hati dan sesuai standar.",
    features: [
      "Teknisi berpengalaman",
      "Pemasangan standar pabrik",
      "Pengecekan kelistrikan",
      "Gratis untuk pembelian di toko",
    ],
  },
  {
    icon: Shield,
    title: "Cek Aki Gratis",
    description:
      "Pengecekan kondisi aki secara gratis untuk mengetahui apakah aki masih layak pakai atau perlu diganti.",
    features: [
      "Cek tegangan aki",
      "Cek kondisi sel aki",
      "Rekomendasi perawatan",
      "Tanpa biaya",
    ],
  },
  {
    icon: RefreshCw,
    title: "Tukar Tambah Aki",
    description:
      "Program tukar tambah aki lama dengan aki baru. Dapatkan potongan harga dengan menukarkan aki bekas Anda.",
    features: [
      "Harga tukar kompetitif",
      "Semua merek diterima",
      "Proses cepat",
      "Potongan langsung",
    ],
  },
  {
    icon: Truck,
    title: "Layanan Antar",
    description:
      "Pesan aki dan kami antarkan ke lokasi Anda di area Cikarang dan sekitarnya. Cocok untuk keadaan darurat.",
    features: [
      "Antar ke lokasi",
      "Area Cikarang & sekitar",
      "Respon cepat",
      "Termasuk pasang",
    ],
  },
];

const faqs = [
  {
    question: "Berapa lama garansi aki yang dijual?",
    answer:
      "Garansi aki bervariasi tergantung merek dan tipe. Umumnya garansi berkisar 6-18 bulan. Garansi berlaku untuk kerusakan pabrik dan tidak termasuk kerusakan akibat pemakaian yang salah.",
  },
  {
    question: "Apakah bisa antar dan pasang ke rumah?",
    answer:
      "Ya, kami menyediakan layanan antar dan pasang ke lokasi Anda di area Cikarang dan sekitarnya. Hubungi kami via WhatsApp untuk informasi lebih lanjut.",
  },
  {
    question: "Bagaimana cara tukar tambah aki?",
    answer:
      "Bawa aki lama Anda ke toko kami, tim kami akan mengecek kondisi aki dan memberikan harga tukar. Potongan harga akan langsung dipotong dari harga aki baru.",
  },
  {
    question: "Aki apa yang cocok untuk mobil saya?",
    answer:
      "Hubungi kami dengan menyebutkan merek dan tipe mobil Anda, tim kami akan memberikan rekomendasi aki yang sesuai dengan spesifikasi kendaraan Anda.",
  },
  {
    question: "Apakah ada pengecekan aki gratis?",
    answer:
      "Ya, kami menyediakan layanan pengecekan aki gratis di toko. Kami akan mengecek tegangan dan kondisi aki Anda untuk memberikan rekomendasi yang tepat.",
  },
];

export default function ServicesPage() {
  return (
    <div data-testid="services-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
              Layanan <span className="text-[#FFB703]">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan aki kendaraan Anda, dari penjualan
              hingga layanan antar pasang
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="service-card card-lift h-full"
                data-testid={`service-detail-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="bg-[#1D3557] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-[#FFB703]" />
                  </div>
                  <CardTitle className="font-heading text-xl font-bold text-[#1D3557] uppercase tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">
                Pertanyaan <span className="text-[#E63946]">Umum</span>
              </h2>
              <p className="section-subtitle">
                Jawaban untuk pertanyaan yang sering diajukan
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#F8FAFC] rounded-lg border-none"
                  data-testid={`faq-${index}`}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-100 rounded-lg">
                    <span className="text-left font-heading font-bold text-[#1D3557]">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 emergency-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider">
                Layanan Darurat
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
              Mobil Mogok? Aki Drop?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Jangan panik! Hubungi kami sekarang dan kami siap antar aki baru
              ke lokasi Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+6282158544469" data-testid="emergency-call-btn">
                <Button className="bg-white text-[#E63946] hover:bg-gray-100 w-full sm:w-auto px-8 py-6 text-lg font-bold uppercase rounded-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  0821-5854-4469
                </Button>
              </a>
              <a
                href="https://wa.me/6282158544469?text=Halo,%20saya%20butuh%20layanan%20darurat%20aki"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="emergency-wa-btn"
              >
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#E63946] w-full sm:w-auto px-8 py-6 text-lg font-bold uppercase rounded-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
