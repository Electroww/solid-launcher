import { Component } from 'solid-js';
import styles from './layout.module.css';
import { Background, Sidebar } from './../../components';

const Layout: Component = (props) => {
  return (
    <div class={styles.layout}>
      <Sidebar></Sidebar>
      <div class={styles.content}>
        <Background></Background>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
