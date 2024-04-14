import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback_list}>
      {options.map(option => (
        <li className={css.feedback_item}>
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            className={css.feedback_btn}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
