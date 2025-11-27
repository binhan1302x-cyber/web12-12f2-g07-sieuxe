import { App } from './app.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  const app = new App(root);
  app.render();
});
