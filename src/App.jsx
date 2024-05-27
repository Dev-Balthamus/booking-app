import Splash from "./components/Splash";
import { useState } from "react";
import AppContent from "./components/AppContent";

export default function App() {
  const [page, setPage] = useState("splash");

  return (
    <main id="app-container">
      {page === "splash" ? (
        <Splash setPage={setPage} />
      ) : (
        <AppContent page={page} setPage={setPage} />
      )}
    </main>
  );
}
