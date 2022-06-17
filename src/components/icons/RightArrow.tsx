import { FiChevronRight } from "react-icons/fi";
import { IconBaseProps } from "react-icons";

interface Props extends IconBaseProps {}

const RightArrow = (props: Props) => <FiChevronRight {...props} />;

export default RightArrow;
