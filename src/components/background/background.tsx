import { Component } from 'solid-js';
import styles from './background.module.css';
import { Cyberpunk2077 } from './../../assets/bg/';

const background: Component = () => {
  return (
    <div class={styles.background}>
      <div class={styles.bgMask}></div>
      <img src={Cyberpunk2077} alt="Lost Ark" />
    </div>
  );
};

export default background;
