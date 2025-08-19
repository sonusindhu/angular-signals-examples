```code
.demo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  mat-card {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .demo-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  .country-display {
    margin-top: 16px;
    .country-card {
      .country-flag {
        width: 60px;
        height: auto;
        margin-top: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
      }
      .country-text {
        margin: 4px 0;
      }
    }
  }
  .loading-state, .error-state {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    margin-top: 16px;
    mat-icon {
      margin-right: 8px;
    }
  }
}
