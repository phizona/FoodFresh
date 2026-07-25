import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)]">
      <Navbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;