import { useState } from "react";
import { Car, Bike, MessageCircle, Star, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const carBatteries = [
  {
    id: 1,
    name: "GS Astra NS60",
    brand: "GS Astra",
    type: "Aki Basah",
    capacity: "45 AH",
    price: "Rp 650.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "6 Bulan",
    popular: true,
  },
  {
    id: 2,
    name: "GS Astra NS70",
    brand: "GS Astra",
    type: "Aki Basah",
    capacity: "65 AH",
    price: "Rp 850.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "6 Bulan",
    popular: false,
  },
  {
    id: 3,
    name: "Yuasa MF NS60L",
    brand: "Yuasa",
    type: "Maintenance Free",
    capacity: "45 AH",
    price: "Rp 750.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "12 Bulan",
    popular: true,
  },
  {
    id: 4,
    name: "Yuasa MF NS70L",
    brand: "Yuasa",
    type: "Maintenance Free",
    capacity: "65 AH",
    price: "Rp 950.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "12 Bulan",
    popular: false,
  },
  {
    id: 5,
    name: "Incoe Gold NS60",
    brand: "Incoe",
    type: "Aki Kering",
    capacity: "45 AH",
    price: "Rp 700.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "12 Bulan",
    popular: false,
  },
  {
    id: 6,
    name: "GS Astra N100",
    brand: "GS Astra",
    type: "Aki Basah",
    capacity: "100 AH",
    price: "Rp 1.350.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "6 Bulan",
    popular: false,
  },
  {
    id: 7,
    name: "Yuasa MF N50Z",
    brand: "Yuasa",
    type: "Maintenance Free",
    capacity: "50 AH",
    price: "Rp 800.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "12 Bulan",
    popular: true,
  },
  {
    id: 8,
    name: "Incoe Premium DIN55",
    brand: "Incoe",
    type: "Aki Kering",
    capacity: "55 AH",
    price: "Rp 900.000",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    warranty: "18 Bulan",
    popular: false,
  },
];

const motorcycleBatteries = [
  {
    id: 1,
    name: "GS GTZ5S",
    brand: "GS Astra",
    type: "Aki Motor MF",
    capacity: "3.5 AH",
    price: "Rp 180.000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    warranty: "6 Bulan",
    popular: true,
  },
  {
    id: 2,
    name: "GS GTZ7S",
    brand: "GS Astra",
    type: "Aki Motor MF",
    capacity: "6 AH",
    price: "Rp 250.000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    warranty: "6 Bulan",
    popular: false,
  },
  {
    id: 3,
    name: "Yuasa YTX5L-BS",
    brand: "Yuasa",
    type: "Aki Motor MF",
    capacity: "4 AH",
    price: "Rp 200.000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    warranty: "6 Bulan",
    popular: true,
  },
  {
    id: 4,
    name: "Yuasa YTX7L-BS",
    brand: "Yuasa",
    type: "Aki Motor MF",
    capacity: "6 AH",
    price: "Rp 280.000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    warranty: "6 Bulan",
    popular: false,
  },
  {
    id: 5,
    name: "Incoe GM5Z-3B",
    brand: "Incoe",
    type: "Aki Motor",
    capacity: "5 AH",
    price: "Rp 150.000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    warranty: "6 Bulan",
    popular: false,
  },
  {
    id: 6,
    name: "GS GTZ8V",
    brand: "GS Astra",
    type: "Aki Motor MF",
    capacity: "7 AH",
    price: "Rp 320.000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    warranty: "6 Bulan",
    popular: true,
  },
];

const ProductCard = ({ product }) => {
  const phoneNumber = "6282158544469";
  const message = encodeURIComponent(
    `Halo, saya tertarik dengan aki ${product.name} (${product.capacity}) - ${product.price}. Apakah masih tersedia?`
  );

  return (
    <Card
      className="product-card overflow-hidden group"
      data-testid={`product-${product.id}`}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.popular && (
          <div className="absolute top-3 left-3 bg-[#E63946] text-white px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
            <Star className="w-3 h-3" fill="currentColor" />
            Populer
          </div>
        )}
        <div className="absolute top-3 right-3 bg-[#FFB703] text-[#1D3557] px-2 py-1 rounded text-xs font-bold">
          {product.brand}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {product.type}
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold text-[#1D3557] uppercase tracking-tight mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
          <span className="bg-gray-100 px-2 py-0.5 rounded">{product.capacity}</span>
          <span>|</span>
          <span>Garansi {product.warranty}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-[#E63946]">
            {product.price}
          </span>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Pesan
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("mobil");

  return (
    <div data-testid="products-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
              Katalog <span className="text-[#FFB703]">Produk</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Pilihan aki berkualitas untuk mobil dan motor Anda. Semua produk
              original dengan garansi resmi.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white shadow-lg p-2 rounded-lg">
                <TabsTrigger
                  value="mobil"
                  data-testid="tab-mobil"
                  className="px-6 py-3 data-[state=active]:bg-[#1D3557] data-[state=active]:text-white rounded-lg font-heading uppercase tracking-wider"
                >
                  <Car className="w-5 h-5 mr-2" />
                  Aki Mobil
                </TabsTrigger>
                <TabsTrigger
                  value="motor"
                  data-testid="tab-motor"
                  className="px-6 py-3 data-[state=active]:bg-[#1D3557] data-[state=active]:text-white rounded-lg font-heading uppercase tracking-wider"
                >
                  <Bike className="w-5 h-5 mr-2" />
                  Aki Motor
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mobil" className="mt-0">
              <div className="grid-products">
                {carBatteries.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="motor" className="mt-0">
              <div className="grid-products">
                {motorcycleBatteries.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Info Banner */}
          <div className="mt-12 bg-[#1D3557] rounded-lg p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase mb-2">
                  Tidak Menemukan Aki yang Dicari?
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Hubungi kami untuk konsultasi gratis dan rekomendasi aki yang
                  sesuai dengan kendaraan Anda.
                </p>
              </div>
              <a
                href="https://wa.me/6282158544469?text=Halo,%20saya%20ingin%20konsultasi%20aki%20untuk%20kendaraan%20saya"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="consult-btn"
              >
                <Button className="bg-[#FFB703] hover:bg-[#FFCA3A] text-[#1D3557] whitespace-nowrap">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-in Banner */}
      <section className="py-12 emergency-gradient">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase mb-4">
              Terima Tukar Tambah Aki Bekas!
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Dapatkan potongan harga dengan menukarkan aki lama Anda
            </p>
            <a
              href="https://wa.me/6282158544469?text=Halo,%20saya%20ingin%20tukar%20tambah%20aki%20lama"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="tradein-btn"
            >
              <Button className="bg-white text-[#E63946] hover:bg-gray-100 font-bold uppercase">
                Info Tukar Tambah
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
