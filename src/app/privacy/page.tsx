import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Lock, Cookie } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT PENDAWA LESTARI PERKASA" className="h-8 w-auto" />
              <div>
                <h1 className="text-sm font-bold text-gray-900">PT PENDAWA</h1>
                <p className="text-xs text-gray-600">LESTARI PERKASA</p>
              </div>
            </Link>
            <Button variant="outline" asChild>
              <Link href="/">Kembali ke Beranda</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600">
            <span className="text-orange-600 font-semibold">PT PENDAWA LESTARI PERKASA</span> - Perlindungan Data Anda
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selamat datang di Kebijakan Privasi <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span>. 
                Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
                ketika Anda mengunjungi website kami atau menggunakan layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kami berkomitmen untuk melindungi privasi Anda dan memastikan keamanan data pribadi yang Anda percayakan kepada kami. 
                Kebijakan privasi ini berlaku untuk semua pengunjung website dan pengguna layanan <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span>.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Informasi Pribadi</h3>
                  <p className="text-gray-700 mb-3">Kami dapat mengumpulkan informasi pribadi berikut:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat perusahaan/domisili</li>
                    <li>Informasi kontak lainnya yang Anda berikan secara sukarela</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Informasi Teknis</h3>
                  <p className="text-gray-700 mb-3">Informasi yang dikumpulkan secara otomatis:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser dan sistem operasi</li>
                    <li>Informasi perangkat</li>
                    <li>Data penggunaan website</li>
                    <li>Cookie dan teknologi pelacakan lainnya</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Informasi</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">PT PENDAWA LESTARI PERKASA</span> menggunakan informasi yang dikumpulkan untuk:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Menyediakan layanan dan informasi yang Anda minta</li>
                <li>Merespons pertanyaan dan permintaan Anda</li>
                <li>Mengirimkan informasi tentang layanan konstruksi kami</li>
                <li>Meningkatkan kualitas website dan layanan kami</li>
                <li>Melakukan analisis pasar dan penelitian</li>
                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Keamanan Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span> mengimplementasikan berbagai 
                langkah keamanan untuk melindungi informasi pribadi Anda:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Teknis</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Enkripsi data</li>
                    <li>• Firewall yang aman</li>
                    <li>• Sistem monitoring keamanan</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Prosedural</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Akses terbatas ke data</li>
                    <li>• Pelatihan staf keamanan</li>
                    <li>• Audit keamanan rutin</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700">
                Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik yang 100% aman.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Cookie className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Kebijakan Cookie</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Cookie Esensial</h4>
                  <p className="text-gray-600">Diperlukan untuk fungsi dasar website</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Cookie Analitik</h4>
                  <p className="text-gray-600">Membantu kami memahami penggunaan website</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Cookie Kinerja</h4>
                  <p className="text-gray-600">Mengingat preferensi pengguna</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rights */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Hak Anda</h2>
              <p className="text-gray-700 mb-4">
                Sebagai pengguna, Anda memiliki hak terhadap data pribadi Anda:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                <li><strong>Pembatasan:</strong> Membatasi pemrosesan data Anda</li>
                <li><strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                <li><strong>Penolakan:</strong> Menolak pemrosesan data tertentu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data di 
                <span className="font-semibold text-orange-600"> PT PENDAWA LESTARI PERKASA</span>, 
                silakan hubungi kami:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <strong>Email:</strong> privacy@pendawalestariperkasa.co.id
                  </div>
                  <div>
                    <strong>Telepon:</strong> 085353887273
                  </div>
                  <div>
                    <strong>Alamat:</strong><br />
                    Talavera Suite lantai 15, Talavera Office Park<br />
                    Jl. Letjen. TB. Simatupang Kav. 22-26<br />
                    Jakarta Selatan, DKI Jakarta 12430
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Update Notice */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Pembaruan Kebijakan</h2>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span> dapat memperbarui 
                Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal 
                pembaruan terbaru.
              </p>
              <p className="text-gray-700">
                Kebijakan Privasi ini terakhir diperbarui pada: <strong>{new Date().toLocaleDateString('id-ID', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
          <div className="mt-8 text-gray-600">
            <p>&copy; 2024 PT PENDAWA LESTARI PERKASA. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-orange-600 hover:text-orange-700">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="text-orange-600 hover:text-orange-700">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}