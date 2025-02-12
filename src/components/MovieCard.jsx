import BackCard from "./BackCard";
import FrontCard from "./frontCard";

import React, { useState } from "react";
export default function MovieCard({ movie }) {
  const [side, setSide] = useState(false);
  const handleMouseEnter = () => {
    setSide(true);
  };
  const handleMouseLeave = () => {
    setSide(false);
  };
  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {side ? (
          <BackCard
            title={movie.title || movie.name}
            titleOr={movie.original_movie || movie.original_name}
          />
        ) : (
          <FrontCard img={movie.poster_path} />
        )}
      </div>
    </>
  );
}
