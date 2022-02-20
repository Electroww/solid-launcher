import { Component, createSignal, Show, For } from 'solid-js';
import styles from './bg-selector.module.css';
import { IconButton } from '../';
import { Background, backgrounds } from './background';

const bgSelector: Component = () => {
  const [getDropTipOpen, setDropTipOpen] = createSignal(false);

  const click = (active: boolean) => {
    setDropTipOpen(active);
  };

  return (
    <div class={styles.bgSelector}>
      <IconButton onClick={click}>
        <i class="bx bx-paint"></i>
      </IconButton>
      <Show when={getDropTipOpen()}>
        <div class={styles.bgSelectorContent}>
          <div class="text-lg font-bold">Select a background</div>
          <div class={styles.bgList}>
            <For each={backgrounds}>
              {(item: Background) => (
                <div style={{ 'background-image': `url(${item.image})` }} class={styles.bgItem}>
                  <div class={styles.bgItemMask}></div>
                </div>
              )}
            </For>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default bgSelector;
