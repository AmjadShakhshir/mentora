import PropTypes from "prop-types";
import { FaCircleArrowLeft } from "react-icons/fa6";


const PreviousBtn = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
        <FaCircleArrowLeft style={{ color: "#994d47", fontSize: "30px" }} />
        </div>
    );
};

PreviousBtn.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func
};

PreviousBtn.defaultProps = {
    className: "slick-prev slick-arrow",
    onClick: () => {}
};
export default PreviousBtn;
