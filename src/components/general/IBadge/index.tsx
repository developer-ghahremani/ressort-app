import React from "react";

type Props = {
  children: React.ReactNode;
  value: number;
};

const IBadge = (props: Props) => {
  return (
    <div className="relative">
      {props.children}
      {props.value !== 0 && (
        <p className="absolute top-[-6px] right-[-12px] rounded-full w-5 h-5 flex justify-center items-center z-50 bg-rose-500 text-white text-xs">
          {props.value}
        </p>
      )}
    </div>
  );
};

export default IBadge;
