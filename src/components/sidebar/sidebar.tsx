import { Component } from 'solid-js';
import styles from './sidebar.module.css';
import { Menu } from './../';

const sidebar: Component = () => {
  return (
    <div class={styles.sidebar}>
      <div class={styles.logoContent}>
        <h2 class={styles.logo}>SolidLauncher</h2>
      </div>
      <div class={styles.menuContent}>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default sidebar;
