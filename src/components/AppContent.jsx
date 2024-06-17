import { useSelector } from "react-redux";
import Booking from "./Booking";
import Navbar from "./Navbar";

export default function AppContent() {
  const { page } = useSelector((state) => state.global);

  return (
    <div>
      <section className="page">{page === "booking" && <Booking />}</section>
      <Navbar />
    </div>
  );
}
