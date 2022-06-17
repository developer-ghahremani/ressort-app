import { IButton, INumberFormat } from "../general";
import { useAppDispatch, useAppSelector } from "../../store";

import React from "react";
import ResortModel from "../../models/Ressort.model";
import { toggleBucket } from "../../store/bucket";
import { useI18Next } from "../../i18n";

type Props = { resort: ResortModel };

const Resort = (props: Props) => {
  const { t } = useI18Next();
  const bucket = useAppSelector((s) => s.bucket);
  const dispatch = useAppDispatch();
  const isExist =
    bucket.findIndex((item) => item.id === props.resort.id) < 0 ? false : true;

  const handleToggleBucket = () => {
    dispatch(toggleBucket(props.resort));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4 h-auto">
        <div className="md:col-span-4 flex flex-col col-span-9 justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-xl">{props.resort.title}</p>
            <INumberFormat
              displayType="text"
              value={props.resort.price}
              thousandSeparator
              prefix="$"
              className="text-2xl"
            />
          </div>

          <IButton
            className={`text-white ${
              isExist ? " bg-rose-500" : "bg-gray-200 text-black font-bold"
            }`}
            onClick={handleToggleBucket}>
            {!isExist
              ? t("general.addToBucket")
              : t("general.removeFromBucket")}
          </IButton>
        </div>
        <div className="md:col-span-5 h-auto col-span-9">
          <img className="w-full" src={props.resort.imageUrl} alt="" />
        </div>
      </div>
      <p className="mt-4">{props.resort.description}</p>
    </div>
  );
};

export default Resort;
