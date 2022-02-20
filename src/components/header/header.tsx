import { Component } from 'solid-js';
import styles from './header.module.css';
import { IconButton } from '../';

const header: Component = () => {
  return (
    <div class={styles.header}>
      <IconButton>
        <i class="bx bx-paint"></i>
      </IconButton>
    </div>
  );
};

export default header;
