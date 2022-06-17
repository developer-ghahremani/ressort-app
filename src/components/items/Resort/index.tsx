import { IButton, INumberFormat } from "../../general";
import { useAppDispatch, useAppSelector } from "../../../store";

import ResortModel from "../../../models/Ressort.model";
import { pageNames } from "../../../constant";
import { stringifyUrl } from "query-string";
import { toggleBucket } from "../../../store/bucket";
import { useI18Next } from "../../../i18n";
import { useNavigate } from "react-router-dom";

type Props = { resort: ResortModel; index: number };

const ResortItem = (props: Props) => {
  const bucket = useAppSelector((s) => s.bucket);
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isExist =
    bucket.findIndex((item) => item.id === props.resort.id) < 0 ? false : true;

  const handleResortDetail = () => {
    navigate(
      stringifyUrl({
        url: pageNames.resortDetail,
        query: { resortId: props.resort.id },
      })
    );
  };

  const handleToggleBucket = () => {
    dispatch(toggleBucket(props.resort));
  };

  return (
    <div
      className="resort_item_container animate__animated animate__fadeInUp"
      style={{ animationDelay: `${props.index / 6}s` }}>
      <img
        onClick={handleResortDetail}
        src={props.resort.imageUrl}
        className="rounded-lg w-40 md:w-full hover:scale-105 cursor-pointer"
        alt=""
      />
      <div className="flex flex-col mx-2 md:mx-0 w-full justify-center">
        <p className="resort-item-title">{props.resort.title}</p>
        <div className="flex justify-between items-center mt-2">
          <INumberFormat
            displayType="text"
            thousandSeparator
            value={props.resort.price}
            prefix="$"
          />
          <IButton className="text-xs" onClick={handleToggleBucket}>
            {!isExist
              ? t("general.addToBucket")
              : t("general.removeFromBucket")}
          </IButton>
        </div>
      </div>
    </div>
  );
};

export default ResortItem;
