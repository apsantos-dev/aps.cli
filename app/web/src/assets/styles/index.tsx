import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: rgba(240, 240, 247, 1);
    --color-primary-lighter: rgba(152, 113, 245, 1);
    --color-primary-light: rgba(145, 107, 234, 1);
    --color-primary: rgba(130, 87, 229, 1);
    --color-primary-dark: rgba(119, 77, 214, 1);
    --color-primary-darker: rgba(104, 66, 194, 1);
    --color-secondary: rgba(4, 211, 97, 1);
    --color-secondary-dark: rgba(4, 191, 88, 1);
    --color-title-in-primary: rgba(255, 255, 255, 1);

    --color-primary-danger: #FF5256;
    --color-secondary-danger: rgba(192, 57, 43, 1.0);
    --color-primary-info: rgba(38, 162, 105, 1);
    --color-secondary-info: rgba(42, 161, 179, 1);
    --color-tertiary-info: rgba(44, 62, 80,1.0)
    --color-primary-success: rgba(38, 162, 105, 1);
    --color-secondary-success: rgba(42, 161, 179, 1);

    --color-text-in-primary: rgba(212, 194, 255, 1);
    --color-text-title: rgba(41, 47, 61, 0.8);
    --color-text-description: rgba(40, 42, 53, 0.7);
    --color-text-complement: rgba(156, 152, 166, 1);
    --color-text-base: rgba(40, 42, 53, 1);
    --color-text-italic: rgba(40, 42, 53, 0.8);
    --color-text-primary-light: rgba(248, 248, 242, 1);
    --color-text-primary-lighter: rgba(248, 248, 242, 0.1);
    --color-text-secondary-light: rgba(248, 248, 242, 0.8);
    --color-text-secondary-lighter: rgba(248, 248, 242, 0.2);

    --color-input-background: rgba(248, 248, 252, 1);
    --color-button-text: rgba(255, 255, 255, 1);

    --color-box-base: rgba(0, 0, 0, 0.8);;

    --color-base-primary-dark: rgba(0, 0, 0, 0.02);
    --color-base-secondary-dark: rgba(0, 0, 0, 0.04);

    --color-line-primary-dark: rgba(0, 0, 0, 0.2);
    --color-line-secondary-dark: rgba(0, 0, 0, 0.4);

    --color-box-footer: rgba(250, 250, 252, 1);

    --color-box-shadow-primary-dark: rgba(0, 0, 0, 0.2);
    --color-box-shadow-secondary-dark: rgba(0, 0, 0, 0.4);

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);

    text-rendering: optimizeLegibility !important;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  textarea {
    color: var(--color-box-base);
    font: 600 1.6rem Jura, sans-serif;
  }

  /* INFO(custom): */

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .animated.infinite {
    animation-iteration-count: infinite;
  }
  .animated.hinge {
    animation-duration: 2s;
  }
  .animated.flipOutX,
  .animated.flipOutY,
  .animated.bounceIn,
  .animated.bounceOut {
    animation-duration: 0.75s;
  }

  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }

  @keyframes load {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  @keyframes animated1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes animated3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes animated2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
