import { useState } from "react";
import "./Film.scss";

const Film = (props) => {
  const start = useState(new Date(props.dateStart));
  const end = useState(new Date(props.dateEnd));
  console.log(typeof start[0]);
  return (
    <div className="wraper">
      <img src={props.img} />
      <span>{props.name}</span>
      <span>{`C ${start[0].getDay()}.${start[0].getMonth()}.${start[0].getFullYear()} по ${end[0].getDay()}.${end[0].getMonth()}.${start[0].getFullYear()}`}</span>
    </div>
  );
};
export default Film;
