'use server'

import ImageCard, { ImageProp } from "@/components/ImageCard";

export const fetchImage = async (page: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${page}/photos`
  );

  const data = await response.json();

  const newData = data.splice(0,12);

  return newData.map((item: ImageProp, index:number) => (
    <ImageCard key={item.id} imageData={item} index={index} />
  ))
}