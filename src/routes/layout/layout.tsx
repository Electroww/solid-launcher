import { Component } from 'solid-js';
import styles from './layout.module.css';
import { Background, Sidebar, Header } from './../../components';

const Layout: Component = (props) => {
  return (
    <div class={styles.layout}>
      <Sidebar></Sidebar>
      <div class={styles.content}>
        <Background></Background>
        <div class={styles.pageContent}>
          <Header></Header>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
