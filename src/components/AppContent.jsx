import Booking from "./Booking";
import BookingSummary from "./BookingSummary";
import Navbar from "./Navbar";

export default function AppContent({ page, setPage }) {
  return (
    <div>
      <section className="page">{page === "booking" && <Booking />}</section>
      <Navbar page={page} setPage={setPage} />
    </div>
  );
}
