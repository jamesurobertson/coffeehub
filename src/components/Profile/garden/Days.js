import React from 'react'
import { formatDate } from '../../../utils/garden';

export default function Days({
  values, size, space, padX, padY, colorFun, onClick
}) {

    const click = (e) => {
    }
  return (
    <g>
      {values.map((v, i) => {
        const s = size + space * 2;
        const x = padX + i * s + space;
        const y0 = padY + space;
        return (
          <g>
            {v.map((d) => (
              <rect
                class="cg-day"
                x={x}
                y={d.day * s + y0}
                width={10}
                height={10}
                fill={Math.random() < 0.8 ? "#9be9a8" : "#815839"}
                data-count={d.count}
                data-date={formatDate(d.date)}
                onClick={click}>
            <title>{formatDate(d.date)}</title>
            </rect>
            ))}
          </g>
        );
      })}
    </g>
  );
}
