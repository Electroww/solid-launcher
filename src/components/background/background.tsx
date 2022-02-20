import { Component } from 'solid-js';
import styles from './background.module.css';
import LostArkBg from './../../assets/bg/lost-ark.jpg';

const background: Component = () => {
  return (
    <div class={styles.background}>
      <div class={styles.bgMask}></div>
      <img src={LostArkBg} alt="Lost Ark" />
    </div>
  );
};

export default background;
