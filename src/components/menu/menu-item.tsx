import { Component } from 'solid-js';
import styles from './menu.module.css';
interface MenuItemProps {
  name: string;
  url: string;
}

const menuItem: Component<MenuItemProps> = (props) => {
  return (
    <div class={styles.menuItem}>
      <h2>{props.name}</h2>
    </div>
  );
};

export default menuItem;
