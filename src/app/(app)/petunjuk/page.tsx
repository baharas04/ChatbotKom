import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Image from 'next/image';

const PetunjukPage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-6 py-8 pt-10 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600">PETUNJUK PENGGUNAAN WEBSITE CHATBOT</h1>
        <p className="text-xl text-gray-600 mt-2">Panduan langkah demi langkah untuk menggunakan chatbot</p>
      </div>

      <Accordion type="single" collapsible className="space-y-6">
        <AccordionItem value="1">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            1. Memulai Chat dengan Bot
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                Buka menu &quot;ChatBot&quot; di halaman utama untuk masuk kedalam halaman chatbot dan memulai interaksi dengan chatbot.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/menu-chat-bot.png"
                  alt="Memulai Chat"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            2. Memulai Chat Baru
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Pilih options pesan yang berada di sebelah kanan inputan pesan atau menulis pesan yang ingin ditanyakan dengan Chatbot untuk memulainya, dan Chatbot akan memberikan jawabanya.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/massange.png"
                  alt="Memulai Chat Baru"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            3. Menu Tantang Chatbot Kami
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Untuk mengetahui lebih lengkap chatbot dan fitur yang tersedia, buka menu &quot;pelajari lebih lanjut&quot;.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/menu-about.png"
                  alt="Menu About"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            4. Membaca Materi
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Buka menu &quot;Masuk Materi&quot; di halaman utama untuk membaca materi tambahan.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/menu-materi.png"
                  alt="Membaca Materi"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="5">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            5. Menu Petunjuk
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Untuk memahami cara menggunakan website chatbot, klik &quot;Lihat Petunjuk&quot; yang tersedia di halaman utama.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/menu-petunjuk.png"
                  alt="Menyelesaikan Sesi Chat"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default PetunjukPage;
