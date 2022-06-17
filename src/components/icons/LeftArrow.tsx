import { FiChevronLeft } from "react-icons/fi";
import { IconBaseProps } from "react-icons";

interface Props extends IconBaseProps {}

const LeftArrow = (props: Props) => <FiChevronLeft {...props} />;

export default LeftArrow;
