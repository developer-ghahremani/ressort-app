import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<{}> {}

const IButton = ({ className, ...props }: Props) => {
  return <button className={`px-2 rounded-lg ${className}`} {...props} />;
};

export default IButton;
