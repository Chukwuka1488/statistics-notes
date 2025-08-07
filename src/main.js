/**
 * main.js
 * Main integration module that ties all refactored components together
 */

// Import all modules (for module environments)
// In browser, these are loaded via script tags

class StatisticsApp {
  constructor() {
    this.modules = {};
    this.calculators = {};
    this.initialized = false;
  }

  /**
   * Initialize the application
   */
  init() {
    if (this.initialized) return;
    
    console.log('Initializing Statistics App...');
    
    // Initialize components
    this.initializeFactories();
    this.initializeCalculators();
    this.initializeEventHandlers();
    this.initializeCharts();
    
    this.initialized = true;
    console.log('Statistics App initialized successfully');
  }

  /**
   * Initialize factories
   */
  initializeFactories() {
    // Make factories available globally
    if (typeof NoteFactory !== 'undefined') {
      this.modules.NoteFactory = NoteFactory;
    }
    if (typeof TableUtils !== 'undefined') {
      this.modules.TableUtils = TableUtils;
    }
    if (typeof ChartFactory !== 'undefined') {
      this.modules.ChartFactory = ChartFactory;
    }
    if (typeof DOMUtils !== 'undefined') {
      this.modules.DOMUtils = DOMUtils;
    }
  }

  /**
   * Initialize calculators
   */
  initializeCalculators() {
    // Initialize Uniform Calculator
    if (typeof UniformCalculator !== 'undefined') {
      this.calculators.uniform = new UniformCalculator();
      const uniformContainer = document.getElementById('uniform-calculator');
      if (uniformContainer) {
        this.calculators.uniform.init();
      }
    }
    
    // Additional calculators can be added here
    // this.calculators.normal = new NormalCalculator();
    // this.calculators.exponential = new ExponentialCalculator();
  }

  /**
   * Initialize event handlers
   */
  initializeEventHandlers() {
    // Navigation handlers
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => this.handleNavigation(e));
    });
    
    // Module button handlers
    document.querySelectorAll('.module-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleModuleClick(e));
    });
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e));
    }
  }

  /**
   * Initialize charts
   */
  initializeCharts() {
    if (this.modules.ChartFactory) {
      // Initialize any charts that exist in the DOM
      this.modules.ChartFactory.initializeCharts('.chart-container');
    }
  }

  /**
   * Handle navigation
   */
  handleNavigation(event) {
    event.preventDefault();
    const target = event.target;
    const section = target.getAttribute('data-section');
    
    if (section && this.modules.DOMUtils) {
      // Hide all sections
      this.modules.DOMUtils.hideAll('.content-section');
      // Show selected section
      this.modules.DOMUtils.showElement(section);
      // Update active nav
      this.modules.DOMUtils.removeActiveClass('.nav-link');
      target.classList.add('active');
    }
  }

  /**
   * Handle module click
   */
  handleModuleClick(event) {
    const moduleId = event.target.getAttribute('data-module');
    if (moduleId) {
      this.loadModule(moduleId);
    }
  }

  /**
   * Load a module
   */
  loadModule(moduleId) {
    console.log(`Loading module: ${moduleId}`);
    
    // Find the content container
    const contentContainer = document.getElementById('module-content');
    if (!contentContainer) return;
    
    // Load module content based on ID
    switch(moduleId) {
      case 'module1':
        this.loadModule1(contentContainer);
        break;
      case 'module2':
        this.loadModule2(contentContainer);
        break;
      case 'module3':
        this.loadModule3(contentContainer);
        break;
      case 'module4':
        this.loadModule4(contentContainer);
        break;
      case 'module5':
        this.loadModule5(contentContainer);
        break;
      default:
        contentContainer.innerHTML = '<p>Module not found</p>';
    }
  }

  /**
   * Load Module 1 content
   */
  loadModule1(container) {
    if (!this.modules.NoteFactory) return;
    
    const notes = this.modules.NoteFactory.createBatch([
      {
        title: 'What is Statistics?',
        content: 'Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data.',
        category: 'definition'
      },
      {
        title: 'Types of Statistics',
        content: 'Descriptive Statistics and Inferential Statistics',
        category: 'types'
      }
    ]);
    
    // Render notes
    container.innerHTML = this.renderNotes(notes);
  }

  /**
   * Render notes
   */
  renderNotes(notes) {
    let html = '<div class="notes-container">';
    notes.forEach(note => {
      html += `
        <div class="note-item" data-id="${note.id}">
          <h3>${note.title}</h3>
          <p>${note.content}</p>
          <div class="note-meta">
            <span class="category">${note.category}</span>
            <span class="timestamp">${new Date(note.timestamp).toLocaleDateString()}</span>
          </div>
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  /**
   * Handle search
   */
  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const notes = document.querySelectorAll('.note-item');
    
    notes.forEach(note => {
      const title = note.querySelector('h3').textContent.toLowerCase();
      const content = note.querySelector('p').textContent.toLowerCase();
      
      if (title.includes(query) || content.includes(query)) {
        note.style.display = 'block';
      } else {
        note.style.display = 'none';
      }
    });
  }

  /**
   * Create a frequency table
   */
  createFrequencyTable(data) {
    if (!this.modules.TableUtils) return '';
    return this.modules.TableUtils.createFrequencyTable(data);
  }

  /**
   * Create a chart
   */
  createChart(type, config) {
    if (!this.modules.ChartFactory) return null;
    
    switch(type) {
      case 'bar':
        return this.modules.ChartFactory.createBarChart(config);
      case 'pie':
        return this.modules.ChartFactory.createPieChart(config);
      case 'scatter':
        return this.modules.ChartFactory.createScatterPlot(config);
      case 'histogram':
        return this.modules.ChartFactory.createHistogram(config);
      default:
        return null;
    }
  }

  /**
   * Utility method to get a module
   */
  getModule(name) {
    return this.modules[name];
  }

  /**
   * Utility method to get a calculator
   */
  getCalculator(name) {
    return this.calculators[name];
  }
}

// Create and initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.StatisticsApp = new StatisticsApp();
  window.StatisticsApp.init();
  
  // Make the app globally available for debugging
  window.app = window.StatisticsApp;
  
  console.log('Statistics App is ready');
});

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = StatisticsApp;
}