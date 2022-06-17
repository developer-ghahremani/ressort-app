import React from "react";

type Props = { children: string; selected?: boolean; onClick?: () => void };

const ITag = (props: Props) => {
  const handleClick = () => {
    props.onClick && props.onClick();
  };

  return (
    <div
      className={`app-tag ${props.selected ? "selected-tag" : ""} mx-2`}
      onClick={handleClick}>
      {props.children}
    </div>
  );
};

export default ITag;
