'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Shield, 
  Award, 
  Users, 
  Hammer,
  Truck,
  Building,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Solusi Konstruksi Jalan Raya Terpercaya",
      subtitle: "Membangun infrastruktur berkualitas untuk masa depan Indonesia",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Profesional & Berpengalaman",
      subtitle: "Dekade pengalaman dalam industri konstruksi jalan raya",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Kualitas & Keselamatan Prioritas Utama",
      subtitle: "Standar tertinggi dalam setiap proyek konstruksi",
      image: "/api/placeholder/1920/1080"
    }
  ];

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Konstruksi Jalan Raya",
      description: "Pembangunan jalan raya dengan standar kualitas tertinggi untuk mobilitas yang lebih baik."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Jembatan & Infrastruktur",
      description: "Konstruksi jembatan dan infrastruktur pendukung yang kokoh dan berkelanjutan."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Pengembangan Infrastruktur",
      description: "Solusi terintegrasi untuk pengembangan infrastruktur skala besar."
    }
  ];

  const stats = [
    { number: "100+", label: "Proyek Selesai" },
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "50+", label: "Tim Profesional" },
    { number: "98%", label: "Kepuasan Klien" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT PENDAWA LESTARI PERKASA" className="h-10 w-auto" />
              <div>
                <h1 className="text-lg font-bold text-gray-900">PT PENDAWA</h1>
                <p className="text-xs text-gray-600">LESTARI PERKASA</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Layanan</Link>
              <Link href="#projects" className="text-gray-700 hover:text-orange-600 transition-colors">Proyek</Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</Link>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Hubungi Kami
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Beranda</Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Tentang</Link>
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Layanan</Link>
              <Link href="#projects" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Proyek</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Kontak</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-700/90 z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-500 text-white px-4 py-2">
            🏗️ Spesialis Konstruksi Jalan Raya
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-orange-400">PT PENDAWA</span>
            <br />
            <span className="text-white">LESTARI PERKASA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Mitra terpercaya dalam pembangunan infrastruktur jalan raya berkualitas tinggi di seluruh Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4">
              Lihat Proyek
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">Tentang Kami</Badge>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-orange-600">PT PENDAWA LESTARI PERKASA</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Perusahaan konstruksi terkemuka yang berfokus pada pembangunan infrastruktur jalan raya dan proyek transportasi lainnya di Indonesia.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Dengan pengalaman lebih dari 15 tahun, kami telah menjadi mitra terpercaya untuk berbagai proyek infrastruktur skala besar, memberikan solusi konstruksi yang inovatif dan berkelanjutan.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">Berkualitas</h3>
                  <p className="text-sm text-gray-600">Standar tertinggi</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">Berpengalaman</h3>
                  <p className="text-sm text-gray-600">15+ tahun</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">Profesional</h3>
                  <p className="text-sm text-gray-600">Tim ahli</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Informasi Perusahaan</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-semibold">Alamat</p>
                        <p className="text-gray-600">Talavera Suite lantai 15, Talavera Office Park<br />
                        Jl. Letjen. TB. Simatupang Kav. 22-26<br />
                        Kota Adm. Jakarta Selatan, DKI Jakarta 12430</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="font-semibold">Telepon</p>
                        <p className="text-gray-600">085353887273</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">info@pendawalestariperkasa.co.id</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Layanan Kami</Badge>
            <h2 className="text-4xl font-bold mb-4">Solusi Konstruksi Komprehensif</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Menawarkan berbagai layanan konstruksi jalan raya dan infrastruktur terkait
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Membangun Infrastruktur Masa Depan?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Hubungi kami hari ini untuk konsultasi proyek konstruksi jalan raya Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT PENDAWA LESTARI PERKASA" className="h-8 w-auto" />
                <div>
                  <h3 className="font-bold">PT PENDAWA</h3>
                  <p className="text-sm text-gray-400">LESTARI PERKASA</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan konstruksi terpercaya yang berfokus pada pembangunan infrastruktur jalan raya berkualitas tinggi di seluruh Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konstruksi Jalan Raya</li>
                <li>Jembatan & Infrastruktur</li>
                <li>Pengembangan Infrastruktur</li>
                <li>Konsultasi Konstruksi</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>085353887273</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@pendawalestariperkasa.co.id</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Jakarta Selatan, DKI Jakarta</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT PENDAWA LESTARI PERKASA. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="hover:text-orange-400">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-orange-400">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}