import {useEffect, useState} from "react";

export  default function useProducts({salesOnly}) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then(res => res.json())
      .then(data => {
        console.log("네트워크에서 데이터 받아옴")
        setProducts(data);
      })
      .catch(() => setError('에러발생!!!'))
      .finally(() => setLoading(false))
    return () => {
      console.log("깨끗하게 청소 완료.")
    }
  }, [salesOnly]);
  return [loading, products, error];
}

