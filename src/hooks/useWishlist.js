import { useEffect, useState } from "react";

export default function useWishlist() {
  const [wishIds, setWishIds] = useState([]);

  useEffect(() => {
    const storageIds = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishIds(storageIds);
  }, []);

  const handleWishlist = (id) => {
    const newIds = wishIds.includes(id)
      ? wishIds.filter((wishId) => wishId !== id)
      : [...wishIds, id];
    setWishIds(newIds);
    localStorage.setItem("wishlist", JSON.stringify(newIds));
  };

  const isWish = (id) => wishIds.includes(id);

  return {
    wishIds,
    handleWishlist,
    isWish,
  };
}
