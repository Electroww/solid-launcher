import { Component, For } from 'solid-js';
import styles from './layout.module.css';

const RAY = [styles['ray-1'], styles['ray-2'], styles['ray-3']];

const Layout: Component = (props) => {
  return (
    <div>
      <div class={styles.background}>
        <For each={RAY}>{(ray) => <div class={ray} />}</For>
      </div>
      <div class="bg-light-100">supposed to be left</div>
      {props.children}
    </div>
  );
};

export default Layout;
