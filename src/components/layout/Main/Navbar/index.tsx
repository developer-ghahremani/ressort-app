import AnimatedText from "../../../AnimatedText";
import { IBadge } from "../../../general";
import LOGO from "./../../../../assets/images/travell.png";
import { Link } from "react-router-dom";
import { pageNames } from "../../../../constant";
import { useAppSelector } from "../../../../store";
import { useI18Next } from "../../../../i18n";

const Navbar = () => {
  const { t } = useI18Next();
  const bucket = useAppSelector((s) => s.bucket);

  const menuOption: { title: string | JSX.Element; to: string }[] = [
    { title: t("general.home"), to: pageNames.home },
    {
      title: (
        <IBadge value={bucket.length}>
          <p>{t("general.bucket")}</p>
        </IBadge>
      ),
      to: pageNames.bucket,
    },
  ];

  return (
    <div className="bg-gray-100 py-4">
      <div className="md:max-w-4xl mx-4 md:mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={LOGO}
            alt=""
            className="w-14 h-14 animate__animated animate__fadeInLeft"
          />
          <AnimatedText
            className="font-sedgwick text-xl mx-[1px]"
            value={t("general.logo")}
          />
        </div>
        <div className="flex">
          {menuOption.map((item, index, array) => (
            <Link
              to={item.to}
              key={index}
              className={`${index !== array.length - 1 ? "mx-2" : ""}`}>
              {typeof item.title === "string" ? (
                <p>{item.title}</p>
              ) : (
                item.title
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
