import {
  BatteryCharging,
  Award,
  Users,
  Target,
  CheckCircle,
  Shield,
  Zap,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Produk Asli",
    description: "Kami hanya menjual aki original bergaransi resmi dari distributor",
  },
  {
    icon: Zap,
    title: "Layanan Cepat",
    description: "Respons cepat untuk kebutuhan darurat penggantian aki",
  },
  {
    icon: Heart,
    title: "Pelayanan Terbaik",
    description: "Kepuasan pelanggan adalah prioritas utama kami",
  },
  {
    icon: Award,
    title: "Berpengalaman",
    description: "Tim teknisi kami berpengalaman dalam pemasangan aki",
  },
];

const milestones = [
  { number: "1000+", label: "Pelanggan Puas" },
  { number: "4.4", label: "Rating Google" },
  { number: "4+", label: "Merek Tersedia" },
  { number: "100%", label: "Produk Asli" },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
              Tentang <span className="text-[#FFB703]">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Toko Accu Prima Battery - Mitra terpercaya untuk kebutuhan aki
              kendaraan Anda di Cikarang dan sekitarnya
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Cerita <span className="text-[#E63946]">Kami</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-[#1D3557]">Toko Accu Prima Battery</strong>{" "}
                  adalah toko aki mobil dan motor yang berlokasi di Cikarang,
                  Bekasi. Kami hadir untuk memberikan solusi terbaik bagi
                  kebutuhan aki kendaraan Anda.
                </p>
                <p>
                  Dengan komitmen untuk menyediakan{" "}
                  <strong className="text-[#1D3557]">produk berkualitas</strong> dari
                  merek-merek ternama seperti GS Astra, Yuasa, dan Incoe, kami
                  memastikan setiap aki yang kami jual adalah produk original
                  dengan garansi resmi.
                </p>
                <p>
                  Kami juga menyediakan{" "}
                  <strong className="text-[#1D3557]">layanan antar dan pasang</strong>{" "}
                  untuk memudahkan pelanggan yang tidak sempat datang ke toko.
                  Tim teknisi kami siap membantu Anda kapan pun dibutuhkan.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {["GS Astra", "Yuasa", "Incoe", "Astra Otoparts"].map(
                  (brand) => (
                    <span
                      key={brand}
                      className="bg-[#1D3557] text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {brand}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80"
                  alt="Toko Aki"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center gap-4">
                  <div className="bg-[#FFB703] p-3 rounded-lg">
                    <BatteryCharging className="w-8 h-8 text-[#1D3557]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#1D3557] uppercase">
                      Toko Accu Prima Battery
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Cikarang, Bekasi - Jawa Barat
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 -right-4 w-full h-full bg-[#FFB703]/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1D3557]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl sm:text-5xl font-bold text-[#FFB703] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Mengapa Memilih <span className="text-[#E63946]">Kami?</span>
            </h2>
            <p className="section-subtitle">
              Komitmen kami untuk memberikan layanan terbaik
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="service-card card-lift"
                data-testid={`value-card-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-[#E63946] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#1D3557] uppercase tracking-tight mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#1D3557] p-3 rounded-lg">
                      <Target className="w-6 h-6 text-[#FFB703]" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#1D3557] uppercase">
                      Visi
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Menjadi toko aki terpercaya dan pilihan utama masyarakat
                    Cikarang dan sekitarnya dalam menyediakan aki berkualitas
                    dengan layanan terbaik.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#E63946] p-3 rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#1D3557] uppercase">
                      Misi
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                      <span>Menyediakan aki original bergaransi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                      <span>Memberikan harga yang kompetitif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                      <span>Layanan cepat dan profesional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
