"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaSave } from "react-icons/fa";
import RichTextEditor from "@/components/richtexteditor"; // Importing the editor component

interface EditMateriModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { judul: string; deskripsi: string; link: string }) => void;
  materiData: { judul: string; deskripsi: string; link: string };
}

const EditMateriModal: React.FC<EditMateriModalProps> = ({ isOpen, onClose, onSave, materiData }) => {
  const [judul, setJudul] = useState(materiData.judul);
  const [deskripsi, setDeskripsi] = useState(materiData.deskripsi);
  const [link, setLink] = useState(materiData.link);

  useEffect(() => {
    if (isOpen) {
      setJudul(materiData.judul);
      setDeskripsi(materiData.deskripsi);
      setLink(materiData.link);
    }
  }, [isOpen, materiData]);

  const handleSave = () => {
    onSave({ judul, deskripsi, link });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Materi</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          <div>
            <Label htmlFor="judul">Judul</Label>
            <Input
              id="judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Masukkan judul materi"
            />
          </div>

          <div>
            <Label htmlFor="deskripsi">Deskripsi</Label>
            <RichTextEditor content={deskripsi} onChange={setDeskripsi} />
          </div>

          <div>
            <Label htmlFor="link">Link</Label>
            <Input
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Masukkan link materi"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave} className="bg-blue-500 text-white flex items-center">
            <FaSave className="mr-2" />
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditMateriModal;
