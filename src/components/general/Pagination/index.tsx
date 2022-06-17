import { LeftArrow, RightArrow } from "../../icons";

import { range } from "lodash";

type Props = {
  length: number;
  page: number;
  pageSize: number;
  onChange: (page: number) => void;
};

const Pagination = (props: Props) => {
  const pageCount = Math.ceil(props.length / props.pageSize);

  const handleChangePage = (targetPage: number) => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    props.onChange(targetPage);
  };

  return (
    <div className="flex justify-center my-6 items-center">
      {props.page > 1 && (
        <LeftArrow
          className="cursor-pointer border h-8 w-8 rounded-tr-xl rounded-bl-xl"
          onClick={() => handleChangePage(props.page - 1)}
        />
      )}
      {range(1, pageCount + 1).map((item) => (
        <p
          className={`text-md  mx-1 rounded-lg px-3 py-1 cursor-pointer ${
            props.page === item ? "bg-blue-600 text-white" : "border"
          }`}
          onClick={() => handleChangePage(item)}>
          {item}
        </p>
      ))}
      {props.page !== pageCount && (
        <RightArrow
          className="cursor-pointer border h-8 w-8 rounded-tl-xl rounded-br-xl"
          onClick={() => handleChangePage(props.page + 1)}
        />
      )}
    </div>
  );
};

export default Pagination;
