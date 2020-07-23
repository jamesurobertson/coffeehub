import React, { useState, useEffect } from "react";

const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Months = ({values, size, space, padX, padY }) => {
  const [months, setMonths] = useState([]);
  const s = size + space * 2;
  const s2 = s * 2;

  useEffect(() => {
    const monthsData = [];

    // Orders the months in the right order
    values.forEach((group, i) => {
      group.forEach((week, j) => {
        if (j === 0 && week.day === 0) {
          const month = week.date.getMonth();
          const x = i * s + padX + space;
          const last = monthsData.slice(-1).pop();
          if (!last || (month !== last.month && x - last.x > s2)) {
            monthsData.push({ month, x });
          }
        }
      });
    });
    setMonths(monthsData);
  }, [values, padX, s , s2, space]);

  return (
    <g>
      {months.map((v, i) => (
        <text fill="#586069" key={i} x={v.x} y={padY / 2}>
          {MONTH[v.month]}
        </text>
      ))}
    </g>
  );
};

export default Months;
