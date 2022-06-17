import Navbar from "./Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="mx-4 md:mx-auto max-w-3xl pt-12">{props.children}</div>
    </div>
  );
};

export default MainLayout;
