"use client";
import React, { useEffect, useState, useCallback } from "react";
import axiosInstance from "@/lib/axios";
import Swal from "sweetalert2";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import AddMateriModal from "@/components/modal/materi/addmaterimodal";
import EditMateriModal from "@/components/modal/materi/editmaterimodal";
import { AxiosError } from "axios";

interface Materi {
  id: number;
  judul: string;
  deskripsi: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

const stripHtmlTags = (text: string) => {
  return text.replace(/<[^>]*>/g, "");
};

const DashboardMateri = () => {
  const [materi, setMateri] = useState<Materi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMateri, setSelectedMateri] = useState<Materi | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosInstance.get<Materi[]>("/materi/show");
      setMateri(response.data);
    } catch (err) {
      setError(handleError(err));
      console.error("Error fetching materi:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Menangani error
  const handleError = (err: unknown): string => {
    if (err instanceof AxiosError) {
      if (err.response) {
        return `Error: ${err.response.status} - ${err.response.statusText}. ${err.response.data?.message || ""}`;
      } else if (err.request) {
        return "Server tidak merespons. Harap periksa koneksi internet Anda atau coba lagi nanti.";
      } else if (err.message) {
        return `Error: ${err.message}`;
      } else {
        return "Terjadi kesalahan yang tidak diketahui.";
      }
    }
    return "Terjadi kesalahan yang tidak terduga.";
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddMateri = () => {
    setSelectedMateri(null);
    setIsAddModalOpen(true);
  };

  const handleEditMateri = (id: number) => {
    const materiToEdit = materi.find((item) => item.id === id);
    if (materiToEdit) {
      setSelectedMateri(materiToEdit);
      setIsEditModalOpen(true);
    }
  };

  const handleDeleteMateri = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Anda tidak akan bisa mengembalikannya!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
      });

      if (result.isConfirmed) {
        await axiosInstance.delete(`/materi/delete/${id}`);
        setMateri(materi.filter((item) => item.id !== id));
        Swal.fire("Dihapus!", "Materi telah dihapus.", "success");
      }
    } catch (err) {
      setError(handleError(err));
      Swal.fire("Gagal!", "Gagal menghapus materi.", "error");
    }
  };

  const handleShowMateri = (id: number) => {
    const materiToShow = materi.find((item) => item.id === id);
    if (materiToShow) {
      Swal.fire({
        title: materiToShow.judul,
        html: `
          <div style="max-height: 300px; overflow-y: auto;">
            <p>${stripHtmlTags(materiToShow.deskripsi)}</p>
            <a href="${materiToShow.link}" target="_blank" style="color: blue; text-decoration: underline;">
              ${materiToShow.link}
            </a>
          </div>
        `,
        confirmButtonText: "Tutup",
        width: '80%',
      });
    }
  };
  
  const handleSaveMateri = async (data: { judul: string; deskripsi: string; link: string }) => {
    try {
      if (selectedMateri) {
        await axiosInstance.put(`/materi/update/${selectedMateri.id}`, data);
      } else {
        await axiosInstance.post("/materi/create", data);
      }

      setIsAddModalOpen(false);
      setIsEditModalOpen(false);
      setSelectedMateri(null);
      fetchData();
      Swal.fire({
        title: "Sukses!",
        text: "Materi telah disimpan.",
        icon: "success",
      });
    } catch (err) {
      setError(handleError(err));
      Swal.fire("Gagal!", "Gagal menyimpan materi.", "error");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-transparent border-gray-300 rounded-full">
          <span className="sr-only">Memuat...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500 bg-red-100 rounded-md shadow-md">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddMateri}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          <FaPlus className="inline mr-2" /> Tambah Materi
        </button>
      </div>

      <Table className="w-full text-sm text-gray-700 table-fixed">
        <TableCaption>Daftar Materi</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6 px-4 py-2 text-left font-medium">Judul</TableHead>
            <TableHead className="w-1/6 px-4 py-2 text-left font-medium">Deskripsi</TableHead>
            <TableHead className="w-1/6 px-4 py-2 text-left font-medium">Link</TableHead>
            <TableHead className="w-1/6 px-4 py-2 text-left font-medium">Dibuat</TableHead>
            <TableHead className="w-1/6 px-4 py-2 text-left font-medium">Diubah</TableHead>
            <TableHead className="w-1/6 px-4 py-2 text-left font-medium">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materi.map((item) => (
            <TableRow key={item.id} className="border-b hover:bg-gray-100">
              <TableCell className="w-1/6 px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {item.judul}
              </TableCell>
              <TableCell className="w-1/6 px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {stripHtmlTags(item.deskripsi)}
              </TableCell>
              <TableCell className="w-1/6 px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {item.link}
                </a>
              </TableCell>
              <TableCell className="w-1/6 px-4 py-2">{new Date(item.createdAt).toLocaleDateString()}</TableCell>
              <TableCell className="w-1/6 px-4 py-2">{new Date(item.updatedAt).toLocaleDateString()}</TableCell>
              <TableCell className="w-1/6 px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleShowMateri(item.id)}
                  className="text-blue-500 hover:text-blue-700"
                  title="Tampilkan"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleEditMateri(item.id)}
                  className="text-yellow-500 hover:text-yellow-700"
                  title="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteMateri(item.id)}
                  className="text-red-500 hover:text-red-700"
                  title="Hapus"
                >
                  <FaTrash />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal Tambah */}
      <AddMateriModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveMateri}
      />

      {/* Modal Edit */}
      {selectedMateri && (
        <EditMateriModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveMateri}
          materiData={selectedMateri}
        />
      )}
    </div>
  );
};

export default DashboardMateri;
