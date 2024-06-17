import Splash from "./components/Splash";
import { useState } from "react";
import AppContent from "./components/AppContent";
import Wishlist from "./components/Wishlist";
import { useSelector } from "react-redux";

export default function App() {
  const { page } = useSelector((state) => state.global);

  return (
    <main id="app-container">
      {page === "splash" ? <Splash /> : <AppContent />}
    </main>
  );
}
