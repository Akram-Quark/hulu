import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_url}${result.backdrop_path || result.poster_path}` ||
          `${BASE_url}${result.poster_path}`
        }
      />
      <div>
        <p className="truncate max-w-md ">{result.overview}</p>
        <h2 className="mt-1  mb-1  text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date || result.first_air_date}
          
          <ThumbUpIcon className="h-5 mx-2"/>
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});
thumbnail.displayName = "thumbnail";

export default Thumbnail;
