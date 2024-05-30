import { useRef } from "react";
import "../assets/css/DataForm.css";
export default function DataForm() {
  const pickupReturnRef = useRef();
  const pickupDateRef = useRef();
  const pickupTimeRef = useRef();
  const returnDateRef = useRef();
  const returnTimeRef = useRef();

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

  return (
    <form className="form-data" onSubmit={handleSubmit}>
      <div className="location">
        <input
          type="text"
          placeholder="Pickup & Return Location"
          ref={pickupReturnRef}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div>
        <input
          type="text"
          className="pickupd"
          ref={pickupDateRef}
          placeholder="Pickup Date"
        />
      </div>
      <div>
        <input
          type="text"
          className="pickupt"
          ref={pickupTimeRef}
          placeholder="Time"
        />
      </div>
      <div>
        <input
          type="text"
          className="returnd"
          ref={returnDateRef}
          placeholder="Return Date"
        />
      </div>
      <div>
        <input
          type="text"
          className="returnt"
          ref={returnTimeRef}
          placeholder="Time"
        />
      </div>
      <div className="location">
        <button className="horizontal-padding button-primary">
          Get Started
        </button>
      </div>
    </form>
  );
}
