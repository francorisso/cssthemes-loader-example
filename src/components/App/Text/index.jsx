import React, { PropTypes } from 'react';
import styles from './styles.scss';

const Text = ({ text }) => (
    <div className={styles.text}>{text}</div>
);

Text.propTypes = {};

export default Text;
