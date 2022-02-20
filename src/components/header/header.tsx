import { Component } from 'solid-js';
import styles from './header.module.css';
import { BgSelector } from '../';

const header: Component = () => {
  return (
    <div class={styles.header}>
      <BgSelector></BgSelector>
    </div>
  );
};

export default header;
