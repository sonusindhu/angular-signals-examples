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
    background: #f5f7fa;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
  }
  .nested-section {
    background: #f0f4f8;
    border-radius: 8px;
    padding: 1.2rem 1.5rem;
    margin-bottom: 1.2rem;
    border-left: 4px solid #1976d2;
  }
  p[style*='color:red'] {
    margin: 0.3rem 0 0.7rem 0;
    font-size: 1.05rem;
    font-weight: 500;
    color: #e53935 !important;
    letter-spacing: 0.01em;
  }
  .contact-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 6px rgba(25, 118, 210, 0.08);
    border: 1px solid #e3e8ee;
    padding: 1.2rem 1.2rem 1rem 1.2rem;
    margin-bottom: 1.2rem;
    position: relative;
    transition: box-shadow 0.2s;
  }
  .contact-card:hover {
    box-shadow: 0 4px 16px rgba(25, 118, 210, 0.13);
    border-color: #1976d2;
  }
  .radio-group {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0.7rem;
    align-items: center;
  }
  .radio-group label {
    font-weight: 500;
    color: #333;
    margin-right: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  input[type="radio"] {
    accent-color: #1976d2;
    margin-right: 0.3rem;
  }
  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.7rem;
  }
  input[type="checkbox"] {
    accent-color: #1976d2;
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.3rem;
  }
  select {
    padding: 0.6rem 1rem;
    border: 1px solid #bdbdbd;
    border-radius: 6px;
    font-size: 1rem;
    background: #f9f9f9;
    margin-top: 0.3rem;
    margin-bottom: 0.7rem;
    min-width: 180px;
    transition: border-color 0.2s;
  }
  select:focus {
    border-color: #1976d2;
    outline: none;
    background: #fff;
  }
  @media (max-width: 700px) {
    form {
      padding: 1rem 0.5rem;
      max-width: 100%;
    }
    mat-card {
      padding: 1rem 0.5rem;
    }
    .nested-section {
      padding: 0.7rem 0.5rem;
    }
    input {
      min-width: 120px;
    }
  }
}
