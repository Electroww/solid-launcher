import { Component, createSignal, JSXElement } from 'solid-js';
import styles from './icon-button.module.css';
interface IconButtonProps {
  children: JSXElement;
  onClick: (active: boolean) => void;
}

const iconButton: Component<IconButtonProps> = (props) => {
  const [getActive, setActive] = createSignal(false);
  const click = () => {
    setActive(!getActive());
    props.onClick(getActive());
  };

  return (
    <div onClick={click} class={`${styles.iconButton} ${getActive() && styles.active}`}>
      {props.children}
    </div>
  );
};

export default iconButton;
