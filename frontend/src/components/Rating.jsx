import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const getStarIcon = (value, threshold) => {
  if (value >= threshold) return <FaStar />;
  if (value >= threshold - 0.5) return <FaStarHalfAlt />;
  return <FaRegStar />;
};

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((threshold) => (
        <span key={threshold} style={{ color }}>
          {getStarIcon(value, threshold)}
        </span>
      ))}
      <span className="rating-text">{text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
