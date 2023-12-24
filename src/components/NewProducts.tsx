"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);
  console.log(data?.products);
  return (
    <div>
      <div className="container pt-16">
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {data?.products?.map((item: any, index: number) => (
            <ProductCard
              key={index}
              discount={item.discountPercentage}
              img={item.thumbnail}
              title={item.title}
              rating={Math.floor(item.rating)}
              price={item.price}
              stock={item.stock}
              brand={item.brand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
