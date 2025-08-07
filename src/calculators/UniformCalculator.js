/**
 * UniformCalculator.js
 * Calculator for Uniform Distribution
 * Extracted from utils.js to follow Single Responsibility Principle
 */

class UniformCalculator {
  constructor() {
    this.name = 'Uniform Distribution Calculator';
    this.containerId = 'uniform-calculator';
  }

  /**
   * Initialize calculator with DOM elements
   */
  init() {
    const container = document.getElementById(this.containerId);
    if (!container) return;
    
    container.innerHTML = this.getHTML();
    this.attachEventListeners();
  }

  /**
   * Get HTML template for calculator
   */
  getHTML() {
    return `
      <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
        <h5 style="color: #007bff; margin-bottom: 15px;">🧮 Uniform Distribution Calculator</h5>
        <p style="margin-bottom: 15px; color: #666;">Calculate probabilities and statistics for uniform distributions</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
          <div>
            <label for="uniform-a" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Minimum (a):</label>
            <input type="number" id="uniform-a" value="10" placeholder="Enter minimum value" step="any" 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
          </div>
          <div>
            <label for="uniform-b" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Maximum (b):</label>
            <input type="number" id="uniform-b" value="20" placeholder="Enter maximum value" step="any" 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
          </div>
          <div>
            <label for="uniform-x1" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Lower Bound (x₁):</label>
            <input type="number" id="uniform-x1" value="12" placeholder="Enter lower bound" step="any" 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
          </div>
          <div>
            <label for="uniform-x2" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Upper Bound (x₂):</label>
            <input type="number" id="uniform-x2" value="18" placeholder="Enter upper bound" step="any" 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
          </div>
        </div>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <button id="uniform-calculate-btn" style="background-color: #007bff; color: white; padding: 10px 20px; 
                  border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
            📊 Calculate Results
          </button>
        </div>
        
        <div id="uniform-results" style="margin-top: 20px;"></div>
        <div id="uniform-graph-container"></div>
      </div>
    `;
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    const button = document.getElementById('uniform-calculate-btn');
    if (button) {
      button.addEventListener('click', () => this.calculate());
    }
  }

  /**
   * Perform calculation
   */
  calculate() {
    // Get input values
    const a = parseFloat(document.getElementById('uniform-a').value);
    const b = parseFloat(document.getElementById('uniform-b').value);
    const x1 = parseFloat(document.getElementById('uniform-x1').value);
    const x2 = parseFloat(document.getElementById('uniform-x2').value);
    
    // Validation
    const error = this.validate(a, b, x1, x2);
    if (error) {
      this.displayError(error);
      return;
    }
    
    // Calculate results
    const results = this.performCalculations(a, b, x1, x2);
    
    // Display results
    this.displayResults(results);
  }

  /**
   * Validate inputs
   */
  validate(a, b, x1, x2) {
    if (isNaN(a) || isNaN(b) || isNaN(x1) || isNaN(x2)) {
      return 'Please enter valid numbers for all fields.';
    }
    if (a >= b) {
      return 'Maximum value (b) must be greater than minimum value (a).';
    }
    if (x1 > x2) {
      return 'Upper bound (x₂) must be greater than or equal to lower bound (x₁).';
    }
    return null;
  }

  /**
   * Perform calculations
   */
  performCalculations(a, b, x1, x2) {
    const pdfHeight = 1 / (b - a);
    
    // Calculate probability P(x1 ≤ X ≤ x2)
    let probability = 0;
    const effectiveX1 = Math.max(x1, a);
    const effectiveX2 = Math.min(x2, b);
    
    if (effectiveX1 <= effectiveX2) {
      probability = (effectiveX2 - effectiveX1) * pdfHeight;
    }
    
    // Calculate statistics
    const mean = (a + b) / 2;
    const variance = Math.pow(b - a, 2) / 12;
    const standardDeviation = Math.sqrt(variance);
    
    return {
      a, b, x1, x2,
      pdfHeight,
      probability,
      mean,
      variance,
      standardDeviation,
      effectiveX1,
      effectiveX2
    };
  }

  /**
   * Display error message
   */
  displayError(message) {
    const resultsDiv = document.getElementById('uniform-results');
    resultsDiv.innerHTML = `<p style="color: red;"><strong>Error:</strong> ${message}</p>`;
  }

  /**
   * Display calculation results
   */
  displayResults(results) {
    const {
      a, b, x1, x2,
      pdfHeight, probability, mean, variance, standardDeviation,
      effectiveX1, effectiveX2
    } = results;
    
    const html = `
      <h6 style="color: #007bff; margin-bottom: 10px;">📊 Results:</h6>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div>
          <h6 style="margin-bottom: 8px;">📈 Probability Distribution:</h6>
          <p><strong>PDF:</strong> f(x) = ${pdfHeight.toFixed(6)} for ${a} ≤ x ≤ ${b}</p>
          <p><strong>P(${x1} ≤ X ≤ ${x2}) = ${probability.toFixed(6)}</strong></p>
          <p><em>Width:</em> ${(effectiveX2 - effectiveX1).toFixed(2)} × <em>Height:</em> ${pdfHeight.toFixed(6)} = ${probability.toFixed(6)}</p>
        </div>
        
        <div>
          <h6 style="margin-bottom: 8px;">📊 Distribution Statistics:</h6>
          <p><strong>Mean (μ):</strong> ${mean.toFixed(4)}</p>
          <p><strong>Variance (σ²):</strong> ${variance.toFixed(4)}</p>
          <p><strong>Standard Deviation (σ):</strong> ${standardDeviation.toFixed(4)}</p>
        </div>
      </div>
      
      <div style="margin-top: 15px; padding: 10px; background-color: #e7f3ff; border-radius: 4px;">
        <h6 style="margin-bottom: 8px;">💡 Interpretation:</h6>
        <p>The probability that X falls between ${x1} and ${x2} is <strong>${(probability * 100).toFixed(2)}%</strong>.</p>
        ${probability === 0 ? `<p style="color: orange;"><em>Note: The specified range is outside the distribution bounds [${a}, ${b}].</em></p>` : ''}
        ${effectiveX1 !== x1 || effectiveX2 !== x2 ? `<p style="color: orange;"><em>Note: Probability calculated for the effective range [${effectiveX1.toFixed(2)}, ${effectiveX2.toFixed(2)}] within distribution bounds.</em></p>` : ''}
      </div>
    `;
    
    document.getElementById('uniform-results').innerHTML = html;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UniformCalculator;
}