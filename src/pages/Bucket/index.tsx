import { MainLayout } from "../../components/layout";
import React from "react";
import { ResortItem } from "../../components/items";
import { useAppSelector } from "../../store";

const Bucket = () => {
  const bucket = useAppSelector((s) => s.bucket);
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bucket.map((item, index) => (
          <ResortItem resort={item} index={index} key={item.id} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Bucket;
