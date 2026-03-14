import { Link } from "react-router-dom";
import { BatteryCharging, Phone, MapPin, Clock, Mail } from "lucide-react";

const quickLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "Produk", path: "/produk" },
  { name: "Layanan", path: "/layanan" },
  { name: "Ulasan", path: "/ulasan" },
  { name: "Kontak", path: "/kontak" },
];

const services = [
  "Jual Aki Mobil",
  "Jual Aki Motor",
  "Pasang Aki",
  "Cek Aki Gratis",
  "Tukar Tambah Aki",
  "Layanan Antar",
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#1D3557] text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#FFB703] p-2 rounded-lg">
                <BatteryCharging className="w-6 h-6 text-[#1D3557]" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight">
                  Prima Battery
                </h3>
                <p className="text-xs text-gray-400">Cikarang</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Toko aki mobil dan motor terpercaya di Cikarang. Menyediakan aki
              berkualitas dari berbagai merek ternama dengan layanan pasang dan
              antar.
            </p>
            <div className="flex gap-3">
              <span className="badge-rating text-xs">Rating 4.4</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-4 text-[#FFB703]">
              Menu
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="footer-link text-sm hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-4 text-[#FFB703]">
              Layanan
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider mb-4 text-[#FFB703]">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Telepon / WhatsApp</p>
                  <a
                    href="tel:+6282158544469"
                    className="font-semibold hover:text-[#FFB703] transition-colors"
                  >
                    0821-5854-4469
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Alamat</p>
                  <p className="text-sm">
                    Jl. Raya Cikarang - Cibarusah, Sukaresmi, Cikarang Selatan,
                    Bekasi
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FFB703] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Jam Operasional</p>
                  <p className="text-sm">Setiap Hari - Tutup 21:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Toko Accu Prima Battery. Hak
              Cipta Dilindungi.
            </p>
            <p>
              Lokasi: M48C+7C Sukaresmi, Kabupaten Bekasi, Jawa Barat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
