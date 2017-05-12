import React, { PropTypes } from 'react';

import Text from './Text';

import styles from './styles.scss';

const App = () => (
  <div className={styles.container}>
    <h1>Hello World</h1>
    <p className={styles.info}>Exampleee dasdsa</p>
    <Text text="hello world!" />
  </div>
);

App.propTypes = {};

export default App;
