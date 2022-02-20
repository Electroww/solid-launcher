import { Component } from 'solid-js';
import styles from './icon-button.module.css';

const iconButton: Component = (props) => {
  return <div class={styles.iconButton}>{props.children}</div>;
};

export default iconButton;
