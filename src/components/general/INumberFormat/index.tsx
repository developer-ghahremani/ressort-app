import NumberFormat, { NumberFormatProps } from "react-number-format";

interface Props extends NumberFormatProps {}

const INumberFormat = ({ className, ...props }: Props) => {
  return (
    <NumberFormat
      {...props}
      renderText={(f) => <p className={className}>{f}</p>}
    />
  );
};

export default INumberFormat;
