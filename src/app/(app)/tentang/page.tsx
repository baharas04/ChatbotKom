import { Card } from "@/components/ui/card";

const AboutChatbotPage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Tentang BotKom</h1>

      <Card className="p-6 mb-8 shadow-lg">
        {/* Section Chatbot */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chatbot</h2>
          <p className="text-lg text-gray-700">
            Bot-Kom dirancang untuk membantu Anda berinteraksi dengan layanan
            kami secara lebih efisien. Ditenagai oleh kecerdasan buatan yang
            canggih, chatbot ini dapat membantu menjawab pertanyaan terkait
            sistem komputer, memberikan dukungan, dan membimbing Anda melalui
            berbagai proses dengan cara yang mudah digunakan.
          </p>
        </section>

        {/* Section Fitur Tersedia */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Fitur Tersedia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-xl p-4">
              <h3 className="text-xl font-semibold mb-2">Tersedia 24/7</h3>
              <p className="text-gray-700">
                Bot-Kom selalu tersedia, memberikan tanggapan secara real-time
                terhadap pertanyaan Anda kapan saja.
              </p>
            </Card>

            <Card className="shadow-xl p-4">
              <h3 className="text-xl font-semibold mb-2">Mudah Digunakan</h3>
              <p className="text-gray-700">
                Chatbot ini menawarkan antarmuka yang sederhana dan intuitif,
                memungkinkan pengguna untuk berinteraksi tanpa kesulitan.
              </p>
            </Card>

            <Card className="shadow-xl p-4">
              <h3 className="text-xl font-semibold mb-2">Dapat Disesuaikan</h3>
              <p className="text-gray-700">
                Chatbot ini mudah dikustomisasi untuk berbagai industri dan
                kebutuhan pelanggan spesifik.
              </p>
            </Card>
          </div>
        </section>

        {/* Section Cara Kerja */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cara Kerja</h2>
          <p className="text-lg text-gray-700">
            Dengan menggunakan pemrosesan bahasa alami (NLP), chatbot ini dapat
            memahami masukan dari pengguna dan memberikan tanggapan yang relevan
            dan akurat. Anda dapat mengajukan pertanyaan, meminta informasi,
            atau mencari panduan tentang cara menggunakan layanan ini. Chatbot
            ini terus belajar dan meningkat seiring waktu, memastikan pengalaman
            pengguna yang lebih baik.
          </p>
        </section>

        {/* Section Mengapa Memilih BotKom */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Mengapa Memilih BotKom?</h2>
          <p className="text-lg text-gray-700">
            Dengan menggunakan Bot-Kom, Anda memastikan bahwa pelanggan atau
            pengguna Anda mendapatkan bantuan terbaik, baik itu untuk menemukan
            informasi yang tepat, memecahkan masalah, atau membuat keputusan
            dengan lebih cepat. Ini adalah solusi yang hemat biaya untuk bisnis
            yang ingin meningkatkan kepuasan pelanggan dan menyederhanakan
            proses dukungan mereka.
          </p>
        </section>
      </Card>

      {/* Section Tentang Pengembang */}
{/* Section Tentang Pengembang */}
<Card className="p-6 shadow-lg max-w-3xl mx-auto bg-white rounded-lg">
  <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-600">
    Pengembang
  </h2>

  <div className="flex flex-col items-center text-center space-y-4 md:max-w-xl md:mx-auto">
    {/* Logo di atas nama */}
    <div className="flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full w-20 h-20 text-3xl font-bold shadow-md mb-3">
      BA
    </div>

    <h3 className="text-xl font-semibold mb-1">Bahar Apriyana Setyanurani</h3>
    <p className="italic text-gray-600 mb-3">Fullstack Developer & AI Enthusiast</p>
    <p className="text-gray-700 leading-relaxed">
      Email:{" "}
      <a
        href="mailto:asbahar986@gmail.com"
        className="text-indigo-600 underline hover:text-indigo-800"
      >
        asbahar986@gmail.com
      </a>
      <br />
      Website:{" "}
      <a
        href="https://www.botkom.my.id"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 underline hover:text-indigo-800"
      >
        www.botkom.my.id
      </a>
    </p>
  </div>
</Card>



    </main>
  );
};

export default AboutChatbotPage;
