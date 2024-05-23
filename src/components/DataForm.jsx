import "../assets/css/DataForm.css";
export default function DataForm() {
  return (
    <form class="form-data">
      <div class="location">
        <input type="text" placeholder="Pickup & Return Location" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          width="1rem"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div>
        <input type="date" class="pickupd" placeholder="time" />
      </div>
      <div>
        <input type="time" class="pickupt" />
      </div>
      <div>
        <input type="date" class="returnd" />
      </div>
      <div>
        <input type="time" class="returnt" />
      </div>
      <div class="location">
        <button type="submit" placeholder="Search">
          Search
        </button>
      </div>
    </form>
  );
}
