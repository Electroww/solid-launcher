import { Component, For } from 'solid-js';
import MenuItem from './menu-item';
import allMenuItems from './menu.json';
import styles from './menu.module.css';

const menu: Component = () => {
  return (
    <div class={styles.menu}>
      <For each={allMenuItems.menu}>{(item) => <MenuItem {...item} />}</For>
    </div>
  );
};

export default menu;
