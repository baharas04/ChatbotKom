import React from "react";
import { FaBook, FaQuestionCircle, FaRobot } from "react-icons/fa";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-blue-500 p-8 rounded-lg shadow-lg">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Image
            src="/images/bot.png"
            alt="Descriptive Image"
            width={500}
            height={500}
            layout="responsive"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="flex flex-col items-center md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-white mb-4">
            Selamat datang di BotKom!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-justify text-white max-w-2xl md:w-full mx-auto mb-6">
            Aplikasi Chatbot interaktif yang bisa membantu kamu belajar berbagai
            topik pada mata pelajaran Informatika khusus kelas X SMK. Saya siap
            membantu kamu belajar. Yuk, mulai!
          </p>
          <Button className="text-2xl py-6 my-10">
            <Link href="/chat-bot">Mulai Sekarang</Link>
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="font-bold text-2xl border-b-2 md:text-4xl my-8 text-center text-gray-900">
          Fitur yang disediakan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link href="/chat-bot">
            <span>
              <Card className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                <CardHeader>
                  <CardTitle>
                    <Avatar className="bg-blue-100 h-20 w-20 flex items-center justify-center rounded-full">
                      <FaRobot className="text-4xl text-blue-600" />
                    </Avatar>
                  </CardTitle>
                </CardHeader>
                <CardDescription>
                  <p className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
                    <strong>Bot</strong> <br />
                    Chatbot yang membantu menjawab pertanyaan terkait komputer.
                  </p>
                </CardDescription>
              </Card>
            </span>
          </Link>

          {/* Card 2 */}
          <Link href="/materi">
            <span>
              <Card className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                <CardHeader>
                  <CardTitle>
                    <Avatar className="bg-green-100 h-20 w-20 flex items-center justify-center rounded-full">
                      <FaBook className="text-4xl text-green-600" />
                    </Avatar>
                  </CardTitle>
                </CardHeader>
                <CardDescription>
                  <p className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
                    <strong>Materi</strong> <br />
                    Akses berbagai materi dan informasi komputer.
                  </p>
                </CardDescription>
              </Card>
            </span>
          </Link>

          {/* Card 3 */}
          <Link href="/petunjuk">
            <span>
              <Card className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                <CardHeader>
                  <CardTitle>
                    <Avatar className="bg-yellow-100 h-20 w-20 flex items-center justify-center rounded-full">
                      <FaQuestionCircle className="text-4xl text-yellow-600" />
                    </Avatar>
                  </CardTitle>
                </CardHeader>
                <CardDescription>
                  <p className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
                    <strong>Petunjuk</strong> <br />
                    Panduan penggunaan untuk memaksimalkan pengalaman.
                  </p>
                </CardDescription>
              </Card>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
