import React, { useState, useEffect } from "react";

export default function Headings({
  headings = [],
  selected,
  onChange,
  className,
  base_heading_width = 150,
  gap,
}) {
  const [heading_width, set_heading_width] = useState(base_heading_width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      set_heading_width(() => {
        if (window.innerWidth < 768) return base_heading_width * 0.8;
        else return base_heading_width;
      });
    });
  }, [base_heading_width, headings]);

  useEffect(() => {
    set_heading_width(base_heading_width);
  }, [headings, base_heading_width]);

  const find_selected_heading_index = () => {
    let ans = 0;
    headings.map((val, index) => {
      if (val.value === selected) ans = index;
    });
    return ans;
  };

  return (
    <div
      className={
        "relative flex flex-col gap-px flex-grow mt-3 md:mt-0 " + className
      }
    >
      <div className="flex flex-row items-center w-full">
        {headings.map((ele, ele_index) => (
          <div
            key={ele_index}
            onClick={() => onChange(ele.value)}
            style={{
              minWidth: heading_width + "px",
              maxWidth: heading_width + "px",
            }}
            className={
              "pb-2 flex flex-col items-center gap-px cursor-pointer border-b-2 border-gray-400"
            }
          >
            <span
              className={
                "text-sm md:text-base md:whitespace-pre truncate break-words " +
                (ele.value === selected ? "text-red-600 " : "text-gray-600 ")
              }
              style={{ lineHeight: "1.5em" }}
            >
              {ele.label}
            </span>
          </div>
        ))}
      </div>
      <div
        className="relative bg-red-500 transform-all duration-200 "
        style={{
          bottom: "4px",
          height: "4px",
          width: heading_width ?? 0,
          marginLeft:
            (heading_width + (gap ?? 10)) * find_selected_heading_index() +
            "px",
        }}
      />
    </div>
  );
}
