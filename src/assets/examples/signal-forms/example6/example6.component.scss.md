```scss
:host {
  display: contents;
  form {
    margin: auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    padding: 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  label {
    font-weight: bold;
    margin-bottom: 0.3rem;
    display: block;
  }
  input {
    padding: 0.7rem 1.1rem;
    border: 1px solid #bdbdbd;
    border-radius: 6px;
    min-width: 200px;
    font-size: 1rem;
    background: #f9f9f9;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  input:focus {
    border-color: #1976d2;
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 2px #1976d220;
  }
  button {
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
  h3,
  h4 {
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
    color: #1976d2;
    letter-spacing: 0.02em;
  }
  mat-card {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    background: #f5faff;
  }
  .task-row {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 0.7rem;
    background: #f9f9f9;
    padding: 0.7rem 1rem;
    border-radius: 6px;
  }
}
```
