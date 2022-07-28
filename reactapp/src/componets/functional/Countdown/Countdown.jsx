import React from "react";
import { intervalToDuration } from "date-fns/esm";
import { useEffect } from "react";
import { useState } from "react";

const Countdown = (props) => {
  const { toDate, fromDate } = props;
  //   const [state, setState] = useState(0)
  const currentDate = new Date();
  const [date, setDate] = useState(new Date());

  const duration = intervalToDuration({
    start: date,
    end: new Date(2022, 6, 2, 0, 0, 15),
  });

  //   useEffect(() => {
  //     setInterval(() => {
  //         setState(state + 1)
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {duration.years && <p>{duration.years}Y, </p>}
      {duration.months && <p>{duration.months}M, </p>}
      {duration.days && <p>{duration.days}d, </p>}
      {duration.hours && <p>{duration.hours}h, </p>}
      {duration.minutes && <p>{duration.minutes}m, </p>}
      {duration.seconds && <p>{duration.seconds}s </p>}
    </div>
  );
};

export default Countdown;
