```code
:host {
  display: block;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
  padding: 2rem 0;
  width: 100%;
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
  
  h3 {
    margin: 2rem 0 1.5rem 0;
    font-size: 1.6rem;
    font-weight: 600;
    color: #374151;
    position: relative;
    padding-left: 1rem;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
  }
  
  mat-card {
    margin-bottom: 2rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.08),
      0 2px 10px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.12),
        0 6px 20px rgba(0, 0, 0, 0.08);
    }
  }
}

.demo-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.repo-card {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .repo-stats {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    
    .stat {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.9rem;
      color: #6c757d;
      
      mat-icon {
        font-size: 1rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }
}

.loading-state, .error-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  text-align: center;
  
  mat-icon {
    font-size: 1.5rem;
  }
}

.error-state {
  color: #dc3545;
}

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
  margin: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
}

@media (max-width: 768px) {
  .repos-grid {
    grid-template-columns: 1fr;
  }
  
  .demo-actions {
    flex-direction: column;
  }
}
```
