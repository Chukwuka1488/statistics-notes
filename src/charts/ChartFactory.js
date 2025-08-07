/**
 * ChartFactory.js
 * Factory for creating charts with DRY pattern
 * Reduces duplication in chart creation
 */

class ChartFactory {
  /**
   * Default chart configuration
   */
  static defaultConfig = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart'
      }
    }
  };

  /**
   * Default color palette
   */
  static colors = {
    primary: 'rgba(66, 133, 244, 0.8)',
    secondary: 'rgba(217, 48, 37, 0.8)',
    success: 'rgba(27, 158, 119, 0.8)',
    warning: 'rgba(255, 193, 7, 0.8)',
    info: 'rgba(23, 162, 184, 0.8)',
    palette: [
      'rgba(220, 38, 38, 0.8)',
      'rgba(37, 99, 235, 0.8)',
      'rgba(107, 114, 128, 0.8)',
      'rgba(139, 69, 19, 0.8)',
      'rgba(34, 197, 94, 0.8)'
    ]
  };

  /**
   * Create a bar chart
   * @param {Object} config - Chart configuration
   */
  static createBarChart(config) {
    const {
      canvasId,
      labels,
      data,
      title = 'Bar Chart',
      xLabel = '',
      yLabel = '',
      colors = this.colors.palette,
      ...additionalConfig
    } = config;

    const canvas = this.createCanvas(canvasId);
    const ctx = canvas.getContext('2d');

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: title,
          data,
          backgroundColor: colors.slice(0, data.length),
          borderColor: colors.map(c => c.replace('0.8', '1')),
          borderWidth: 1
        }]
      },
      options: {
        ...this.defaultConfig,
        plugins: {
          ...this.defaultConfig.plugins,
          title: {
            display: true,
            text: title
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: yLabel !== '',
              text: yLabel
            }
          },
          x: {
            title: {
              display: xLabel !== '',
              text: xLabel
            }
          }
        },
        ...additionalConfig
      }
    });
  }

  /**
   * Create a pie chart
   * @param {Object} config - Chart configuration
   */
  static createPieChart(config) {
    const {
      canvasId,
      labels,
      data,
      title = 'Pie Chart',
      colors = this.colors.palette,
      ...additionalConfig
    } = config;

    const canvas = this.createCanvas(canvasId);
    const ctx = canvas.getContext('2d');

    return new Chart(ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: colors.slice(0, data.length),
          borderColor: colors.map(c => c.replace('0.8', '1')),
          borderWidth: 1
        }]
      },
      options: {
        ...this.defaultConfig,
        plugins: {
          ...this.defaultConfig.plugins,
          title: {
            display: true,
            text: title
          },
          legend: {
            position: 'right'
          }
        },
        ...additionalConfig
      }
    });
  }

  /**
   * Create a scatter plot
   * @param {Object} config - Chart configuration
   */
  static createScatterPlot(config) {
    const {
      canvasId,
      data,
      title = 'Scatter Plot',
      xLabel = '',
      yLabel = '',
      trendline = null,
      ...additionalConfig
    } = config;

    const canvas = this.createCanvas(canvasId);
    const ctx = canvas.getContext('2d');

    const datasets = [{
      label: 'Data Points',
      data,
      backgroundColor: this.colors.primary,
      pointRadius: 6,
      pointHoverRadius: 8
    }];

    // Add trendline if provided
    if (trendline) {
      datasets.push({
        label: 'Trendline',
        data: trendline,
        type: 'line',
        borderColor: this.colors.secondary,
        borderWidth: 2,
        pointRadius: 0,
        fill: false
      });
    }

    return new Chart(ctx, {
      type: 'scatter',
      data: { datasets },
      options: {
        ...this.defaultConfig,
        plugins: {
          ...this.defaultConfig.plugins,
          title: {
            display: true,
            text: title
          }
        },
        scales: {
          x: {
            title: {
              display: xLabel !== '',
              text: xLabel
            }
          },
          y: {
            title: {
              display: yLabel !== '',
              text: yLabel
            }
          }
        },
        ...additionalConfig
      }
    });
  }

  /**
   * Create a histogram
   * @param {Object} config - Chart configuration
   */
  static createHistogram(config) {
    const {
      canvasId,
      bins,
      frequencies,
      title = 'Histogram',
      xLabel = '',
      yLabel = 'Frequency',
      ...additionalConfig
    } = config;

    return this.createBarChart({
      canvasId,
      labels: bins,
      data: frequencies,
      title,
      xLabel,
      yLabel,
      colors: [this.colors.primary],
      ...additionalConfig,
      categoryPercentage: 1.0,
      barPercentage: 1.0
    });
  }

  /**
   * Create stacked bar chart
   * @param {Object} config - Chart configuration
   */
  static createStackedBarChart(config) {
    const {
      canvasId,
      labels,
      datasets,
      title = 'Stacked Bar Chart',
      xLabel = '',
      yLabel = '',
      ...additionalConfig
    } = config;

    const canvas = this.createCanvas(canvasId);
    const ctx = canvas.getContext('2d');

    // Process datasets with colors
    const processedDatasets = datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: this.colors.palette[index % this.colors.palette.length],
      borderWidth: 1,
      ...dataset
    }));

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: processedDatasets
      },
      options: {
        ...this.defaultConfig,
        plugins: {
          ...this.defaultConfig.plugins,
          title: {
            display: true,
            text: title
          }
        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: xLabel !== '',
              text: xLabel
            }
          },
          y: {
            stacked: true,
            title: {
              display: yLabel !== '',
              text: yLabel
            }
          }
        },
        ...additionalConfig
      }
    });
  }

  /**
   * Create canvas element
   * @param {string} id - Canvas ID
   * @returns {HTMLCanvasElement} Canvas element
   */
  static createCanvas(id) {
    const canvas = document.createElement('canvas');
    canvas.id = id + '-canvas';
    canvas.width = 400;
    canvas.height = 300;
    return canvas;
  }

  /**
   * Initialize charts in containers
   * @param {string} selector - Container selector
   */
  static initializeCharts(selector = '.chart-container') {
    const containers = document.querySelectorAll(selector);
    
    containers.forEach(container => {
      if (container.hasChildNodes()) return;
      
      const chartType = container.getAttribute('data-chart');
      const chartId = container.id;
      const chartData = container.getAttribute('data-chart-data');
      
      if (!chartType || !chartId) return;
      
      let chart;
      switch (chartType) {
        case 'bar':
          chart = this.createDefaultBarChart(chartId);
          break;
        case 'pie':
          chart = this.createDefaultPieChart(chartId);
          break;
        case 'scatter':
          chart = this.createDefaultScatterChart(chartId);
          break;
        case 'histogram':
          chart = this.createDefaultHistogram(chartId);
          break;
      }
      
      if (chart) {
        container.appendChild(chart.canvas);
      }
    });
  }

  /**
   * Create default charts for testing
   */
  static createDefaultBarChart(id) {
    return this.createBarChart({
      canvasId: id,
      labels: ['A', 'B', 'C', 'D', 'E'],
      data: [12, 19, 3, 5, 2],
      title: 'Sample Bar Chart'
    });
  }

  static createDefaultPieChart(id) {
    return this.createPieChart({
      canvasId: id,
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      data: [12, 19, 3, 5, 2],
      title: 'Sample Pie Chart'
    });
  }

  static createDefaultScatterChart(id) {
    return this.createScatterPlot({
      canvasId: id,
      data: [
        {x: 1, y: 10},
        {x: 2, y: 20},
        {x: 3, y: 15},
        {x: 4, y: 25},
        {x: 5, y: 22}
      ],
      title: 'Sample Scatter Plot'
    });
  }

  static createDefaultHistogram(id) {
    return this.createHistogram({
      canvasId: id,
      bins: ['0-10', '10-20', '20-30', '30-40', '40-50'],
      frequencies: [5, 8, 12, 7, 3],
      title: 'Sample Histogram'
    });
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChartFactory;
}