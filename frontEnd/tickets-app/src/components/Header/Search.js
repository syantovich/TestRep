import React from "react";

const Search = () => {
  return (
    <div className="search">
      <svg
        width="13"
        height="19"
        viewBox="0 0 13 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="5.43708"
          y1="9.24282"
          x2="0.437078"
          y2="18.2428"
          stroke="black"
        />
        <circle cx="8" cy="5" r="4.5" stroke="black" />
      </svg>
      <input type="text" />
      <span>Информация о фильме</span>
    </div>
  );
};

export default Search;
