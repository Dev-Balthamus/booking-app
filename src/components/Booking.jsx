import CarCard from "./CarCard";
import DataForm from "./DataForm";
import BookingSummary from "./BookingSummary";
import useWishlist from "../hooks/useWishlist";

export default function Booking() {
  const cars = [
    {
      id: 1,
      name: "Audi R8",
      price: "300 $/Day",
      image: "/AutoPng/audi.png",
    },
    {
      id: 2,
      name: "Audi Q3",
      price: "150$/day",
      image: "/AutoPng/bmw.png",
    },
    {
      id: 3,
      name: "Audi Q3",
      price: "150$/day",
      image: "/AutoPng/ferrari.png",
    },
  ];

  const { handleWishlist, isWish } = useWishlist();

  return (
    <div>
      <DataForm />
      <div>
        {cars.map(({ id, name, price, image }) => (
          <CarCard
            key={id}
            id={id}
            name={name}
            price={price}
            image={image}
            handleWishlist={handleWishlist}
            isWish={isWish}
          />
        ))}
      </div>
    </div>
  );
}
