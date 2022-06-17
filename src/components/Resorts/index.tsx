import { ITag, Pagination } from "../general";
import React, { useState } from "react";

import { ResortItem } from "../items";
import constant from "../../constant";
import { toNumber } from "lodash";
import { useGetResortsQuery } from "../../store/service/resort";
import { useI18Next } from "../../i18n";

const Resorts = () => {
  const { isError, isFetching, data } = useGetResortsQuery();
  const [page, setPage] = useState<number>(1);
  const [sortPrice, setSortPrice] = useState<string>("");
  const [sortTitle, setSortTitle] = useState<string>("");
  const { t } = useI18Next();

  const hadnleChangepage = (targetPage: number) => {
    setPage(targetPage);
  };

  const handleChangeSortPrice = (s: string) => {
    setSortTitle("");
    setSortPrice(s);
  };

  const handleChangeSortTitle = (s: string) => {
    setSortPrice("");
    setSortTitle(s);
  };

  if (isFetching || !data) return null;
  return (
    <div>
      <div>
        <div className="bg-gray-100 p-2">
          <p className="font-bold text-lg">{t("general.sortBy")}</p>
          <div className="flex">
            <div className="flex items-center mt-2">
              <p className="font-bold ">{`${t("general.price")} : `}</p>
              <ITag
                onClick={() =>
                  handleChangeSortPrice(
                    sortPrice === constant.asc ? "" : constant.asc
                  )
                }
                selected={constant.asc === sortPrice}>
                {t("general.asc")}
              </ITag>
              <ITag
                onClick={() =>
                  handleChangeSortPrice(
                    sortPrice === constant.desc ? "" : constant.desc
                  )
                }
                selected={constant.desc === sortPrice}>
                {t("general.desc")}
              </ITag>
            </div>
            <div className="flex items-center mt-2">
              <p className="font-bold ">{`${t("general.title")} : `}</p>
              <ITag
                onClick={() =>
                  handleChangeSortTitle(
                    sortTitle === constant.asc ? "" : constant.asc
                  )
                }
                selected={constant.asc === sortTitle}>
                {t("general.asc")}
              </ITag>
              <ITag
                onClick={() =>
                  handleChangeSortTitle(
                    sortTitle === constant.desc ? "" : constant.desc
                  )
                }
                selected={constant.desc === sortTitle}>
                {t("general.desc")}
              </ITag>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {data
            .map((item) => ({ ...item, price: toNumber(item.price) }))
            .sort((a, b) => {
              if (sortTitle && sortTitle === constant.desc)
                return a.title.localeCompare(b.title);
              if (sortTitle && sortTitle === constant.asc)
                return b.title.localeCompare(a.title);
              return 0;
            })
            .sort((a, b) => {
              if (sortPrice && sortPrice === constant.desc)
                return b.price - a.price;
              if (sortPrice && sortPrice === constant.asc)
                return a.price - b.price;
              return 0;
            })
            .slice((page - 1) * 20, page * 20)
            .map((item, index) => (
              <ResortItem resort={item} index={index} />
            ))}
        </div>
        <Pagination
          onChange={hadnleChangepage}
          length={data.length}
          page={page}
          pageSize={20}
        />
      </div>
    </div>
  );
};

export default Resorts;
