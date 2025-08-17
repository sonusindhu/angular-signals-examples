# Resource API Example 3: SCSS Styles

```scss
:host {
  display: block;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
  padding: 2rem 0;
  width: 100%;
}

.example-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  mat-tab-group {
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 
      0 10px 40px rgba(0, 0, 0, 0.08),
      0 4px 20px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }
}

.content-area {
  max-width: 1200px;
  margin: 0 auto;
  background: transparent;
  padding: 0;
  
  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    text-align: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
  }
  
  > p {
    font-size: 1.1rem;
    color: #64748b;
    text-align: center;
    margin-bottom: 3rem;
    line-height: 1.6;
  }
}

.demo-section {
  margin-top: 2rem;
  
  mat-card {
    margin-bottom: 2rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.08),
      0 2px 10px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.12),
        0 6px 20px rgba(0, 0, 0, 0.08);
    }
  }
}

.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  
  button {
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }
  }
}

.loading-state, .error-state {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  text-align: center;
  justify-content: center;
  
  mat-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
  }
}

.data-table {
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    
    th {
      background: #f8fafc;
      font-weight: 600;
      color: #374151;
    }
    
    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.875rem;
      font-weight: 500;
      background: #fef3c7;
      color: #92400e;
      
      &.completed {
        background: #d1fae5;
        color: #065f46;
      }
    }
  }
}
```
