```scss
:host {
  display: inline-block;
  font-size: 1.1rem;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  border: none;
  margin: 0.5rem 0.5rem 0.5rem 0;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  background: var(--btn-bg, #e3f2fd);
  color: var(--btn-color, #1976d2);
}
:host(:hover) {
  filter: brightness(0.95);
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.12);
}
button {
  background: transparent;
  color: inherit;
  border: none;
  font: inherit;
  padding: 0;
  margin: 0;
  cursor: inherit;
}
