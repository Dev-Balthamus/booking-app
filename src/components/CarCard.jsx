import clsx from "clsx";
import "../assets/css/CarCard.css";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../features/booking/bookingSlice";

export default function CarCard({
  id,
  name,
  price,
  image,
  handleWishlist,
  isWish,
}) {
  const dispatch = useDispatch();
  const { idCarToBooking } = useSelector((state) => state.booking);

  return (
    <div className="car-card">
      <div className="car-card-text">
        <h6>{name}</h6>
        <p>{price}</p>
        <button
          type="button"
          onClick={() => dispatch(setId(id))}
          disabled={idCarToBooking == id}
        >
          {idCarToBooking == id ? <span>BOOKED</span> : <span>BOOK NOW</span>}
        </button>
      </div>
      <div className="img-container">
        <img src={image} alt="Car" />
        <button type="button" onClick={() => handleWishlist(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={clsx(isWish(id) ? "red" : "none")}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="heart-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
