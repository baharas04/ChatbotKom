import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import ToolBar from "./toolbar";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ content, onChange }) => {
  // Menggunakan state untuk memastikan hanya di-render di client-side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Menandakan bahwa komponen sudah di-render di client
    setIsClient(true);
  }, []);

  // Membuat editor hanya jika berada di client-side
  const editor = useEditor({
    extensions: [
      StarterKit, // Gunakan StarterKit tanpa perlu menambah extension duplikat
      TextAlign.configure({
        types: ["heading", "paragraph"], // Menambahkan konfigurasi TextAlign
      }),
      Highlight, // Menambahkan extension Highlight
      Image, // Menambahkan extension Image
      ImageResize, // Menambahkan extension ImageResize
    ],
    content,
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      onChange(editor.getHTML()); // Mengirimkan konten ke parent component
    },
  });

  if (!isClient) {
    // Jika belum di-render di client, jangan tampilkan editor
    return null;
  }

  return (
    <div>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
