import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title }) => <h1 className={css.header}>{title}</h1>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
