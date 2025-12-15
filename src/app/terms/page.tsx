import { Card, CardContent } from '@/components/ui/card';
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600">
            <span className="text-orange-600 font-semibold">PT PENDAWA LESTARI PERKASA</span> - Ketentuan Penggunaan Layanan
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selamat datang di Syarat dan Ketentuan <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span>. 
                Dokumen ini mengatur penggunaan website dan layanan yang kami sediakan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
                Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan website atau layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span> menyediakan layanan konstruksi meliputi:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Konstruksi jalan raya dan infrastruktur transportasi</li>
                <li>Pembangunan jembatan dan struktur penunjang</li>
                <li>Pengembangan infrastruktur skala besar</li>
                <li>Konsultasi teknis dan perencanaan konstruksi</li>
                <li>Manajemen proyek konstruksi</li>
                <li>Pemeliharaan dan perbaikan infrastruktur</li>
              </ul>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Catatan:</strong> Semua layanan kami dilaksanakan sesuai dengan standar kualitas 
                  dan keselamatan yang berlaku di Indonesia.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Kewajiban Pengguna</h2>
              <p className="text-gray-700 mb-4">
                Sebagai pengguna website dan layanan kami, Anda setuju untuk:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Informasi Akurat</h4>
                  <p className="text-gray-600">Memberikan informasi yang benar, akurat, dan lengkap</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Penggunaan yang Wajar</h4>
                  <p className="text-gray-600">Menggunakan website hanya untuk tujuan yang sah dan legal</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Tidak Melanggar Hukum</h4>
                  <p className="text-gray-600">Tidak melakukan aktivitas yang melanggar hukum atau peraturan</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Respek terhadap Hak Kekayaan Intelektual</h4>
                  <p className="text-gray-600">Menghormati hak cipta dan kekayaan intelektual kami</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Batasan Tanggung Jawab</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span> tidak bertanggung jawab atas:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Kerugian langsung atau tidak langsung yang timbul dari penggunaan website</li>
                <li>Keterlambatan atau gangguan layanan di luar kendali kami</li>
                <li>Konten dari pihak ketiga yang terhubung dengan website kami</li>
                <li>Kesalahan atau ketidakakuratan informasi yang disediakan</li>
                <li>Kerusakan sistem atau kehilangan data</li>
              </ul>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>Penting:</strong> Layanan konstruksi kami dilaksanakan dengan standar tertinggi, 
                  namun kami tidak bertanggung jawab atas kondisi alam atau faktor eksternal lainnya 
                  yang mempengaruhi proyek.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Semua konten, desain, logo, dan materi di website ini merupakan hak milik 
                <span className="font-semibold text-orange-600"> PT PENDAWA LESTARI PERKASA</span> atau dilindungi oleh hak cipta pihak ketiga.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Yang Dilindungi:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Logo dan merek dagang</li>
                    <li>• Desain website</li>
                    <li>• Konten teks dan gambar</li>
                    <li>• Dokumen teknis</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Penggunaan yang Dilarang:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reproduksi tanpa izin</li>
                    <li>• Penggunaan komersial</li>
                    <li>• Modifikasi konten</li>
                    <li>• Distribusi ulang</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Syarat Pembayaran</h2>
              <p className="text-gray-700 mb-4">
                Untuk layanan konstruksi yang kami sediakan, berlaku syarat pembayaran sebagai berikut:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Uang Muka</h4>
                  <p className="text-gray-600">Minimal 30% dari total nilai kontrak</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Pembayaran Bertahap</h4>
                  <p className="text-gray-600">Sesuai dengan milestone proyek yang disepakati</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Pelunasan</h4>
                  <p className="text-gray-600">Sebelum serah terima proyek</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Metode Pembayaran</h4>
                  <p className="text-gray-600">Transfer bank atau sesuai kesepakatan kontrak</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Pengakhiran Layanan</h2>
              <p className="text-gray-700 mb-4">
                Kami berhak menghentikan atau menangguhkan layanan jika:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Anda melanggar syarat dan ketentuan ini</li>
                <li>Informasi yang Anda berikan ternyata tidak akurat</li>
                <li>Adanya indikasi penipuan atau aktivitas ilegal</li>
                <li>Kondisi force majeure yang tidak dapat dihindari</li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Hukum yang Berlaku</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia. 
                Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan diselesaikan 
                melalui perundingan baik-baik terlebih dahulu.
              </p>
              <p className="text-gray-700">
                Jika perundingan tidak mencapai kesepakatan, sengketa akan diselesaikan melalui pengadilan yang berwenang 
                di wilayah hukum Jakarta Selatan.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi 
                <span className="font-semibold text-orange-600"> PT PENDAWA LESTARI PERKASA</span>:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <strong>Email:</strong> legal@pendawalestariperkasa.co.id
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
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Pembaruan Syarat</h2>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-orange-600">PT PENDAWA LESTARI PERKASA</span> dapat memperbarui 
                Syarat dan Ketentuan ini dari waktu ke waktu. Perubahan akan berlaku efektif setelah diposting di website.
              </p>
              <p className="text-gray-700">
                Syarat dan Ketentuan ini terakhir diperbarui pada: <strong>{new Date().toLocaleDateString('id-ID', { 
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