import { MainLayout } from "../../components/layout";
import React from "react";
import { Resort } from "../../components";
import { parse } from "query-string";
import { useGetResortQuery } from "../../store/service/resort";
import { useLocation } from "react-router-dom";

const ResortDetail = () => {
  const { search } = useLocation();
  const { resortId } = parse(search);
  const { data, isFetching } = useGetResortQuery(
    {
      id: !!resortId && typeof resortId === "string" ? resortId : "0",
    },
    { skip: !resortId || typeof resortId !== "string" }
  );

  return (
    <MainLayout>{!isFetching && !!data && <Resort resort={data} />}</MainLayout>
  );
};

export default ResortDetail;
