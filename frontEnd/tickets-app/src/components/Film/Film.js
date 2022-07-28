import { useState } from "react";
import "./Film.scss";
import { Link } from "react-router-dom";
import { usefullFunctions } from "../../usefullFunction/usefullFunctions";

const Film = ({ img, dateEnd, dateStart, name, id }) => {
  const [start] = useState(new Date(dateStart));
  const [end] = useState(new Date(dateEnd));
  return (
    <div className="wrapper">
      <Link to={"../movie/" + id}>
        <img src={img} alt={img} />
        <br />
        <span>{name}</span>
        <br />
        <span>{`C ${usefullFunctions.onlyDayMonthYear(
          start,
          false
        )} по ${usefullFunctions.onlyDayMonthYear(end, false)}`}</span>
      </Link>
    </div>
  );
};
export default Film;
