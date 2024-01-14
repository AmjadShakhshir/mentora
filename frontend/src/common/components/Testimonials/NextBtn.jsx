import PropTypes from "prop-types";
import { FaCircleArrowRight } from "react-icons/fa6";

const NextBtn = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <FaCircleArrowRight style={{ color: "#994d47", fontSize: "30px" }} />
        </div>
    );
};

NextBtn.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func
};

NextBtn.defaultProps = {
    className: "slick-next slick-arrow",
    icon: <div>Next</div>,
    onClick: () => {}
};

export default NextBtn;