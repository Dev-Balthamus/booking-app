import DataForm from "./components/DataForm";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import BookingSummary from "./components/BookingSummary";


export default function App() {
  return (
    <main id="app-container">
      <Navbar />
      <Splash />
      <DataForm />
      <Splash />
      <BookingSummary />
    </main>
  );
}
