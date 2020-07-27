import React, { useState, useEffect } from "react";
import { formatDate } from "../../../utils/garden";

const Days = ({ values, size, space, padX, padY, roasts, setActivity }) => {
    const [roastDates, setRoastDates] = useState([])

  const click = (e, date) => {
      setActivity(date)
  };

  useEffect(() => {
    const roastedDates = roasts.map((roast) => {
      return {
        date: formatDate(new Date(roast.createdAt)),
        name: roast.name,
      };
    });
    setRoastDates(roastedDates);
  }, [roasts]);

  return (
    <g>
      {values.map((value, i) => {
        const s = size + space * 2;
        const x = padX + i * s + space;
        const y0 = padY + space;
        return (
          <g key={i}>
            {value.map((d, i) => {
              const date = formatDate(d.date);
              const sameDay = roastDates.filter(roast => roast.date === date)
              return (
                <rect
                  className="day"
                  key={`${d}-${i}`}
                  x={x}
                  y={d.day * s + y0}
                  rx="8"
                  width={10}
                  height={15}
                  fill={sameDay.length > 0 ? "#815839" : "#9be9a8"}
                  data-count={d.count}
                  data-date={date}
                  onClick={(e) => click(e, d.date)}
                >
                  <title>{`${sameDay.length || 'No'} roasts on ${date}`}</title>
                </rect>
              );
            })}
          </g>
        );
      })}
    </g>
  );
};

export default Days;
