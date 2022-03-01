import { useState } from "react";
import "./Film.scss";

const Film = ({ img, dateEnd, dateStart, name }) => {
  const start = useState(new Date(dateStart));
  const end = useState(new Date(dateEnd));
  console.log(typeof start[0]);
  return (
    <div className="wraper">
      <img src={img} />
      <span>{name}</span>
      <span>{`C ${start[0].getDay()}.${start[0].getMonth()}.${start[0].getFullYear()} по ${end[0].getDay()}.${end[0].getMonth()}.${start[0].getFullYear()}`}</span>
    </div>
  );
};
export default Film;
