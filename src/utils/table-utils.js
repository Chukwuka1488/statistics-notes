/**
 * table-utils.js
 * Table creation utilities following DRY principle
 */

class TableUtils {
  /**
   * Create a blue-themed table
   * @param {Array} headers - Table headers
   * @param {Array} rows - Table rows (array of arrays)
   * @param {Object} options - Additional options
   * @returns {string} HTML string for table
   */
  static createBlueTable(headers, rows, options = {}) {
    const {
      className = 'divTable blueTable',
      headerClass = 'divTableHead',
      cellClass = 'divTableCell',
      showTotal = false
    } = options;

    let html = `<div class="${className}">`;
    
    // Create header
    html += '<div class="divTableHeading"><div class="divTableRow">';
    headers.forEach(header => {
      html += `<div class="${headerClass}">${header}</div>`;
    });
    html += '</div></div>';
    
    // Create body
    html += '<div class="divTableBody">';
    rows.forEach(row => {
      html += '<div class="divTableRow">';
      if (Array.isArray(row)) {
        row.forEach(cell => {
          html += `<div class="${cellClass}">${cell}</div>`;
        });
      } else {
        // Handle single cell rows
        html += `<div class="${cellClass}">${row}</div>`;
      }
      html += '</div>';
    });
    
    // Add total row if requested
    if (showTotal && rows.length > 0) {
      html += this.createTotalRow(rows, headers.length, cellClass);
    }
    
    html += '</div></div>';
    
    return html;
  }

  /**
   * Create a frequency table
   * @param {Array} data - Array of objects with category, frequency, relativeFreq, percentage
   * @param {Object} options - Additional options
   * @returns {string} HTML string for frequency table
   */
  static createFrequencyTable(data, options = {}) {
    const headers = ['Category', 'Frequency', 'Relative Frequency', 'Percentage'];
    const rows = data.map(item => [
      item.category,
      item.frequency,
      item.relativeFreq || (item.frequency / this.getTotal(data, 'frequency')).toFixed(3),
      item.percentage || `${((item.frequency / this.getTotal(data, 'frequency')) * 100).toFixed(1)}%`
    ]);
    
    // Add total row
    if (options.showTotal !== false) {
      const total = this.getTotal(data, 'frequency');
      rows.push(['Total', total, '1.00', '100%']);
    }
    
    return this.createBlueTable(headers, rows, options);
  }

  /**
   * Create a cross-tabulation table
   * @param {Object} data - Cross-tab data
   * @param {Object} options - Additional options
   * @returns {string} HTML string for cross-tab table
   */
  static createCrossTab(data, options = {}) {
    const {
      rowLabels,
      colLabels,
      values,
      rowHeader = 'Category',
      showRowTotals = true,
      showColTotals = true
    } = data;

    const headers = [rowHeader, ...colLabels];
    if (showRowTotals) headers.push('Total');

    const rows = [];
    
    // Add data rows
    rowLabels.forEach((rowLabel, i) => {
      const row = [rowLabel, ...values[i]];
      if (showRowTotals) {
        row.push(values[i].reduce((a, b) => a + b, 0));
      }
      rows.push(row);
    });
    
    // Add column totals
    if (showColTotals) {
      const totalRow = ['Total'];
      for (let j = 0; j < colLabels.length; j++) {
        let colSum = 0;
        for (let i = 0; i < rowLabels.length; i++) {
          colSum += values[i][j];
        }
        totalRow.push(colSum);
      }
      if (showRowTotals) {
        const grandTotal = values.flat().reduce((a, b) => a + b, 0);
        totalRow.push(grandTotal);
      }
      rows.push(totalRow);
    }
    
    return this.createBlueTable(headers, rows, options);
  }

  /**
   * Create a statistics summary table
   * @param {Object} stats - Statistics object
   * @param {Object} options - Additional options
   * @returns {string} HTML string for stats table
   */
  static createStatsTable(stats, options = {}) {
    const {
      title = 'Statistical Summary',
      precision = 4
    } = options;

    const rows = Object.entries(stats).map(([key, value]) => {
      const label = this.formatLabel(key);
      const formattedValue = typeof value === 'number' 
        ? value.toFixed(precision) 
        : value;
      return [label, formattedValue];
    });

    return this.createBlueTable(['Statistic', 'Value'], rows, options);
  }

  /**
   * Create a comparison table
   * @param {Array} items - Items to compare
   * @param {Array} criteria - Comparison criteria
   * @param {Object} options - Additional options
   * @returns {string} HTML string for comparison table
   */
  static createComparisonTable(items, criteria, options = {}) {
    const headers = ['Criteria', ...items.map(item => item.name)];
    
    const rows = criteria.map(criterion => {
      const row = [criterion.label];
      items.forEach(item => {
        const value = item[criterion.key];
        row.push(this.formatCellValue(value, criterion.type));
      });
      return row;
    });
    
    return this.createBlueTable(headers, rows, options);
  }

  /**
   * Helper: Calculate total for a property
   */
  static getTotal(data, property) {
    return data.reduce((sum, item) => sum + (parseFloat(item[property]) || 0), 0);
  }

  /**
   * Helper: Create total row
   */
  static createTotalRow(rows, numCols, cellClass) {
    let html = '<div class="divTableRow">';
    html += `<div class="${cellClass}"><strong>Total</strong></div>`;
    
    // Calculate column totals
    for (let col = 1; col < numCols; col++) {
      let total = 0;
      rows.forEach(row => {
        if (Array.isArray(row) && row[col]) {
          const value = parseFloat(row[col]);
          if (!isNaN(value)) total += value;
        }
      });
      html += `<div class="${cellClass}"><strong>${total}</strong></div>`;
    }
    
    html += '</div>';
    return html;
  }

  /**
   * Helper: Format label from camelCase or snake_case
   */
  static formatLabel(key) {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }

  /**
   * Helper: Format cell value based on type
   */
  static formatCellValue(value, type) {
    if (value === null || value === undefined) return '-';
    
    switch (type) {
      case 'percentage':
        return `${(value * 100).toFixed(1)}%`;
      case 'currency':
        return `$${value.toFixed(2)}`;
      case 'number':
        return value.toFixed(2);
      case 'boolean':
        return value ? '✓' : '✗';
      default:
        return value.toString();
    }
  }

  /**
   * Create responsive table wrapper
   * @param {string} tableHTML - Table HTML content
   * @param {Object} options - Additional options
   * @returns {string} Wrapped table HTML
   */
  static wrapResponsive(tableHTML, options = {}) {
    const {
      maxWidth = '100%',
      overflow = 'auto'
    } = options;

    return `
      <div style="max-width: ${maxWidth}; overflow-x: ${overflow};">
        ${tableHTML}
      </div>
    `;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TableUtils;
}