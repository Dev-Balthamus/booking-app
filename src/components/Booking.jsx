import CarCard from "./CarCard";
import DataForm from "./DataForm";
import BookingSummary from "./BookingSummary";
import useWishlist from "../hooks/useWishlist";
import useSWR from "swr";
import { BASEURL, fetcher, PATCH } from "../utils";
import { useRef } from "react";

export default function Booking() {
  const { handleWishlist, isWish } = useWishlist();
  const { data, error, isLoading, mutate } = useSWR(BASEURL + "/cars", fetcher);

  const idRef = useRef();
  const nameRef = useRef();

  const handleChangeName = async (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const name = nameRef.current.value;
    await PATCH(BASEURL + "/cars/" + id, { name });
    // questa riga viene eseguita dopo l'await sopra
    // creiamo una nuova costante che contiene le info aggiornate
    const newData = data.map((car) => {
      if (id == car.id) car.name = name;
      return car;
    });
    mutate(newData);
  };

  return (
    <div>
      <DataForm />
      <form onSubmit={handleChangeName}>
        <input type="text" placeholder="Inserisci ID" ref={idRef} />
        <input type="text" placeholder="Inserisci nome" ref={nameRef} />
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
