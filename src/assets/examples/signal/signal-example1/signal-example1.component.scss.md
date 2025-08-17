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
}

.counter-container {
  background: rgba(255,255,255,0.95);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(59,130,246,0.07), 0 1.5px 8px rgba(139,92,246,0.04);
  padding: 2.5rem 2rem 2rem 2rem;
  margin: 0 auto;
  max-width: 400px;
  transition: box-shadow 0.3s;
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #3b82f6;
    margin-bottom: 1.5rem;
    text-align: center;
  }
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  .count {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    min-width: 48px;
    text-align: center;
    display: inline-block;
  }
}

.info-section {
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  p {
    margin: 0.5rem 0;
  }
}
