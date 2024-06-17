import CarCard from "./CarCard";
import DataForm from "./DataForm";
import BookingSummary from "./BookingSummary";
import useWishlist from "../hooks/useWishlist";
import useSWR from "swr";
import { BASEURL, fetcher, PATCH } from "../utils";
import { useRef } from "react";
import { useCreateCarMutation, useGetCarsQuery } from "../services/cars";

export default function Booking() {
  const { handleWishlist, isWish } = useWishlist();
  const { data, error, isLoading } = useGetCarsQuery();

  const [createCar, { isLoading: isUpdating }] = useCreateCarMutation();

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const handleChangeName = async (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const image = imageRef.current.value;

    createCar({ id, name, price, image });
  };

  return (
    <div>
      <DataForm />
      <form onSubmit={handleChangeName}>
        <input type="text" placeholder="Inserisci ID" ref={idRef} />
        <input type="text" placeholder="Inserisci nome" ref={nameRef} />
        <input type="text" placeholder="Inserisci prezzo" ref={priceRef} />
        <input type="text" placeholder="Inserisci immagine" ref={imageRef} />
        <button type="submit">Aggiorna</button>
      </form>
      <div>
        {isLoading && <span>Carico le auto...</span>}
        {error && <span>Errore durante il caricamento delle auto</span>}
        {!isLoading &&
          !error &&
          data.map(({ id, name, price, image }) => (
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
        <BookingSummary />
      </div>
    </div>
  );
}
