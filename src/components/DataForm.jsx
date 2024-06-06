import { useRef, useState } from "react";
import "../assets/css/DataForm.css";
import useSWR from "swr";
import { BASEURL, fetcher } from "../utils";
export default function DataForm() {
  const pickupReturnRef = useRef();
  const pickupDateRef = useRef();
  const pickupTimeRef = useRef();
  const returnDateRef = useRef();
  const returnTimeRef = useRef();

  const [selectedLocation, setSelectedLocation] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      pickupReturn: pickupReturnRef.current.value,
      pickupDate: pickupDateRef.current.value,
      pickupTime: pickupTimeRef.current.value,
      returnDate: returnDateRef.current.value,
      returnTime: returnTimeRef.current.value,
    };

    console.log(form);
  };

  const { data, error, isLoading } = useSWR(BASEURL + "/locations", fetcher);

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedLocation(id);
  };

  return (
    <form className="form-data" onSubmit={handleSubmit}>
      <div className="location">
        <select id="pickupSelect" onChange={handleSelectChange}>
          <option>Scegli la località</option>
          {!isLoading &&
            !error &&
            data.length > 0 &&
            data.map(({ id, name }) => (
              <option key={id} value={id} disabled={id == selectedLocation}>
                {name}
              </option>
            ))}
        </select>
        <select id="returnSelect" onChange={handleSelectChange}>
          <option>Scegli la località</option>
          {!isLoading &&
            !error &&
            data.length > 0 &&
            data.map(({ id, name }) => (
              <option key={id} value={id} disabled={id == selectedLocation}>
                {name}
              </option>
            ))}
        </select>
      </div>
      <div className="date">
        <input
          type="text"
          className="pickupd"
          ref={pickupDateRef}
          placeholder="Pickup Date"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      </div>
      <div className="time">
        <input
          type="text"
          className="pickupt"
          ref={pickupTimeRef}
          placeholder="Time"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div className="date">
        <input
          type="text"
          className="returnd"
          ref={returnDateRef}
          placeholder="Return Date"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      </div>
      <div className="time">
        <input
          type="text"
          className="returnt"
          ref={returnTimeRef}
          placeholder="Time"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div className="location">
        <button className="horizontal-padding button-primary">
          Get Started
        </button>
      </div>
    </form>
  );
}
