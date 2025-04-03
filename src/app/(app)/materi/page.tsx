"use client"; 
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLaptop, FaServer, FaDatabase, FaShieldAlt, FaCloud, FaRobot } from 'react-icons/fa';
import { Skeleton } from '@/components/ui/skeleton'; 

interface Materi {
  id: string;
  judul: string;
  deskripsi: string;
  category: string;
  link: string | null;
}

const getIconByCategory = (category: string) => {
  switch (category) {
    case 'Sistem Komputer':
      return <FaLaptop className="text-4xl" />;
    case 'Perangkat Keras':
      return <FaServer className="text-4xl" />;
    case 'Perangkat Lunak':
      return <FaDatabase className="text-4xl" />;
    case 'Sistem Operasi':
      return <FaShieldAlt className="text-4xl" />;
    case 'Jaringan Komputer':
      return <FaCloud className="text-4xl" />;
    case 'Pemrograman':
      return <FaRobot className="text-4xl" />;
    default:
      return <FaLaptop className="text-4xl" />;
  }
};

const MateriPage = () => {
  const [materiList, setMateriList] = useState<Materi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMateri = async () => {
    try {
      const response = await axiosInstance.get('/materi/show');
      const sortedMateri = (response.data as Materi[]).sort((a, b) =>
        a.judul.localeCompare(b.judul)
      );
      setMateriList(sortedMateri);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching materi:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMateri();
  }, []);

  if (loading) {
    return (
      <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Daftar Materi</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="p-6 flex flex-col items-center">
              <Skeleton className="w-24 h-24 mb-4 rounded-full" />
              <Skeleton className="w-full h-6 mb-4" />
              <Skeleton className="w-full h-4 mb-4" />
              <Skeleton className="w-full h-10" />
            </Card>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Daftar Materi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {materiList.map((materi) => {
          const description = materi.deskripsi || 'Deskripsi tidak tersedia';
          const shortDescription = description.length > 30 ? description.slice(0, 30) + '...' : description;

          return (
            <Card key={materi.id} className="p-6 flex flex-col items-center">
              <CardTitle className="text-xl font-semibold mb-4 text-center">{materi.judul}</CardTitle>
              <div className="flex justify-center mb-4">
                {getIconByCategory(materi.category)}
              </div>
              <CardDescription className="text-center mb-4 text-gray-600">
                <div dangerouslySetInnerHTML={{ __html: shortDescription }} />
              </CardDescription>
              <Link href={`/materi/${encodeURIComponent(materi.judul)}/${materi.id}`}>
                <Button className="w-full">Baca Selengkapnya</Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </main>
  );
};

export default MateriPage;
