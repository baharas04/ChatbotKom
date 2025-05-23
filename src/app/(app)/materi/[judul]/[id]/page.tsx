"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import axiosInstance from "@/lib/axios";
import React, { useEffect, useState } from "react";
import {
  FaLaptop,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

interface Materi {
  id: string;
  judul: string;
  deskripsi: string;
  category: string;
  link: string | null;
  sumber?: string | null;
}

const getIconByCategory = (category: string) => {
  switch (category) {
    case "Sistem Komputer":
      return <FaLaptop className="text-4xl" />;
    case "Perangkat Keras":
      return <FaServer className="text-4xl" />;
    case "Perangkat Lunak":
      return <FaDatabase className="text-4xl" />;
    case "Sistem Operasi":
      return <FaShieldAlt className="text-4xl" />;
    case "Jaringan Komputer":
      return <FaCloud className="text-4xl" />;
    case "Pemrograman":
      return <FaRobot className="text-4xl" />;
    default:
      return <FaLaptop className="text-4xl" />;
  }
};

const MateriDetailPage = () => {
  const { id } = useParams();
  const [materi, setMateri] = useState<Materi | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMateriDetail = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/materi/show/${id}`);
        setMateri(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching materi detail:", error);
        setError("Terjadi kesalahan saat mengambil data materi");
        setLoading(false);
      }
    };

    fetchMateriDetail();
  }, [id]);
  if (loading) {
    return (
      <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
        <h1 className="text-3xl font-semibold text-center mb-8">
          <Skeleton className="w-1/2 h-8" />
        </h1>
        <div className="flex justify-center mb-8">
          <Skeleton className="w-24 h-24 rounded-full" />
        </div>
        <Card className="p-6 flex flex-col items-center">
          <Skeleton className="w-full h-6 mb-4" />
          <Skeleton className="w-full h-4 mb-4" />
          <Skeleton className="w-full h-10" />
        </Card>
      </main>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!materi) {
    return <div>Materi tidak ditemukan</div>;
  }

  const embedUrl = materi.link || "";

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">
        {materi.judul}
      </h1>
      <div className="flex justify-center mb-8">
        {getIconByCategory(materi.category)}
      </div>
      <Card className="p-6 flex flex-col items-center">
        <CardTitle className="text-xl font-semibold mb-4 text-center">
          {materi.judul}
        </CardTitle>
        <CardDescription className="text-justify text-xl mb-4 text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: materi.deskripsi }} />
        </CardDescription>
        {materi.link && (
          <div className="w-full mb-6">
            <iframe
              src={embedUrl}
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
              title="Materi PDF"
            />
          </div>
        )}
         {/* Sumber ditampilkan setelah PDF */}
  {materi.sumber && (
    <p className="text-sm text-gray-500 italic mt-2">
      Sumber: {materi.sumber}


    </p>
  )}
      </Card>
    </main>
  );
};

export default MateriDetailPage;
