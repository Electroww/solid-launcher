import MenuItemProps from './types';
import styles from './menu.module.css';

const menuItem = (props: MenuItemProps) => {
  return (
    <div class={styles.menuItem}>
      <h2>{props.name}</h2>
    </div>
  );
};

export default menuItem;
