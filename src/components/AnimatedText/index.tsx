import React from "react";

type Props = { value: string; className: string };

const AnimatedText = (props: Props) => {
  return (
    <div className="flex">
      {props.value.split("").map((item, index) => (
        <p
          style={{ animationDelay: `${index / 5}s` }}
          className={`animate__animated animate__fadeInUp animate__faster ${props.className}`}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default AnimatedText;
