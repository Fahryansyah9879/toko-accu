import { Star, Quote, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Cikarang Selatan",
    rating: 5,
    date: "November 2024",
    review:
      "Pelayanan sangat cepat dan ramah. Aki yang saya beli berkualitas bagus dan harganya bersaing. Teknisi juga datang tepat waktu untuk pasang di rumah. Sangat recommended!",
    vehicle: "Toyota Avanza",
  },
  {
    id: 2,
    name: "Dewi Lestari",
    location: "Cikarang Utara",
    rating: 5,
    date: "Oktober 2024",
    review:
      "Toko aki terlengkap di Cikarang. Saya beli aki motor dan langsung dipasangkan. Harga lebih murah dari toko lain dan pelayanannya sangat baik.",
    vehicle: "Honda Beat",
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    location: "Cikarang Barat",
    rating: 4,
    date: "Oktober 2024",
    review:
      "Aki GS Astra yang saya beli sudah 6 bulan dan masih bagus. Proses tukar tambah aki lama juga mudah dan dapat potongan lumayan. Recommended!",
    vehicle: "Daihatsu Xenia",
  },
  {
    id: 4,
    name: "Siti Rahayu",
    location: "Cibarusah",
    rating: 5,
    date: "September 2024",
    review:
      "Layanan darurat sangat membantu! Mobil saya mogok di jalan dan mereka datang dalam 30 menit untuk ganti aki. Terima kasih Prima Battery!",
    vehicle: "Honda Jazz",
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    location: "Sukaresmi",
    rating: 4,
    date: "September 2024",
    review:
      "Sudah langganan di sini untuk aki mobil dan motor. Harga jujur, produk original, dan pelayanan memuaskan. Pokoknya top!",
    vehicle: "Suzuki Ertiga",
  },
  {
    id: 6,
    name: "Rina Wulandari",
    location: "Cikarang Pusat",
    rating: 5,
    date: "Agustus 2024",
    review:
      "Beli aki Yuasa di sini. Kualitas bagus dan ada garansi resmi. Teknisi juga membantu cek kelistrikan mobil gratis. Sangat puas!",
    vehicle: "Mitsubishi Pajero",
  },
];

const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-[#FFB703] fill-[#FFB703]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewsPage() {
  const averageRating = 4.4;
  const totalReviews = reviews.length;

  return (
    <div data-testid="reviews-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
              Ulasan <span className="text-[#FFB703]">Pelanggan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Apa kata pelanggan tentang layanan kami
            </p>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="font-heading text-6xl font-bold text-[#1D3557]">
                    {averageRating}
                  </span>
                  <Star
                    className="w-10 h-10 text-[#FFB703]"
                    fill="currentColor"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  <RatingStars rating={Math.round(averageRating)} />
                </div>
                <p className="text-gray-500">
                  Berdasarkan {totalReviews}+ ulasan
                </p>
              </div>
              <div className="hidden md:block w-px h-24 bg-gray-200"></div>
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#E63946] p-2 rounded-lg">
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-heading text-xl font-bold text-[#1D3557] uppercase">
                    Dipercaya Pelanggan
                  </span>
                </div>
                <p className="text-gray-600 max-w-sm">
                  Ratusan pelanggan di Cikarang telah mempercayakan kebutuhan
                  aki mereka kepada kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="testimonial-card card-lift h-full"
                data-testid={`review-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#1D3557] flex items-center justify-center text-white font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1D3557]">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-[#FFB703] opacity-50" />
                  </div>
                  <RatingStars rating={review.rating} />
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    "{review.review}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                    <span className="text-gray-500">{review.vehicle}</span>
                    <span className="text-gray-400">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1D3557]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-6">
              Ingin Berbagi Pengalaman?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Bagikan ulasan Anda dan bantu pelanggan lain menemukan layanan aki
              terbaik
            </p>
            <a
              href="https://wa.me/6282158544469?text=Halo,%20saya%20ingin%20memberikan%20ulasan%20tentang%20layanan%20Prima%20Battery"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="share-review-btn"
            >
              <Button className="bg-[#FFB703] hover:bg-[#FFCA3A] text-[#1D3557] px-8 py-6 text-lg font-bold uppercase rounded-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Tulis Ulasan
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
