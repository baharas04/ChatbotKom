// components/layout.tsx

import Navbar from "@/components/navigasi/navigasi";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">{children}</main>
      <footer className="text-light text-center">
        <p>&copy; 2024 BotKom | Pendidikan Teknik Informatika | UMS</p>
      </footer>
    </div>
  );
};

export default Layout;
