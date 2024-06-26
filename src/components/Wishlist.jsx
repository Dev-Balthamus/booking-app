import CarCard from "./CarCard";

export default function Wishlist() {
  const cars = [
    {
      id: 1,
      name: "Audi Q3",
      price: "150$/day",
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

  return (
    <div>
      <div>
        {cars.map(({ id, name, price, image }) => (
          <CarCard key={id} name={name} price={price} image={image} />
        ))}
      </div>
    </div>
  );
}
