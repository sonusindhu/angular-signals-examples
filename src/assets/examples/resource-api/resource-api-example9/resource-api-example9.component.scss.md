```code
.demo-section {
    padding: 24px;

    h3 {
      margin: 0 0 20px 0;
      color: #333;
      font-size: 20px;
      font-weight: 500;
    }

    .demo-actions {
      margin-bottom: 24px;
      text-align: center;
    }

    .country-display {
      margin: 24px 0;

      .country-card {
        max-width: 600px;
        margin: 0 auto;

        mat-card-header {
          mat-card-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 18px;
            font-weight: 500;

            mat-icon {
              color: #2196f3;
            }
          }
        }

        mat-card-content {
          .country-text {
            font-size: 16px;
            line-height: 1.6;
            margin: 16px 0;
            padding: 16px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #2196f3;
            font-style: italic;
          }
          .country-flag {
            margin-top: 16px;
            max-width: 120px;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          }
        }
      }
    }

    .loading-state, .error-state {
      text-align: center;
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 16px;
      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    }

    .loading-state {
      color: #2196f3;
    }

    .error-state {
      color: #f44336;
    }
  }