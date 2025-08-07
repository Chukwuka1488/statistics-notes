// Utility functions - applying DRY and KISS principles
const Utils = {
    // Common DOM manipulation functions
    hideAll: (selector) => {
        document.querySelectorAll(selector).forEach(el => el.classList.remove('active'));
    },

    showElement: (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('active');
        }
    },

    addActiveClass: (element) => {
        element.classList.add('active');
    },

    removeActiveClass: (selector) => {
        document.querySelectorAll(selector).forEach(el => el.classList.remove('active'));
    },

    // Note rendering functions
    createNoteElement: (note) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note-item';
        noteElement.innerHTML = `
            <div class="note-title">${note.title || 'Untitled'}</div>
            <div class="note-content">${note.content || 'No content available'}</div>
            <div class="drill-down" id="drill-${note.id}">
                <h4>Details:</h4>
                <p><strong>Category:</strong> ${note.category || 'Uncategorized'}</p>
                <p><strong>Added:</strong> ${note.timestamp || 'Unknown'}</p>
                <div class="visualization">
                    <p>Visualization placeholder for: ${note.title || 'Untitled'}</p>
                </div>
            </div>
        `;

        noteElement.addEventListener('click', () => {
            const drillDown = document.getElementById(`drill-${note.id}`);
            drillDown.classList.toggle('active');
        });

        return noteElement;
    },

    // Quiz rendering functions
    createQuizElement: (question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'quiz-item';
        
        let dataTableHTML = '';
        if (question.dataTable) {
            dataTableHTML = `<div class="quiz-data-table">${question.dataTable}</div>`;
        }
        
        questionElement.innerHTML = `
            <div class="quiz-question">Question ${index + 1}: ${question.question}</div>
            ${dataTableHTML}
            <div class="quiz-options">
                ${question.options.map((option, optionIndex) => `
                    <div class="quiz-option ${option.text === question.correctAnswer ? 'correct' : ''}" 
                         data-tooltip="${option.tooltip}"
                         onclick="QuizManager.showAnswer(${question.id}, '${option.text}')">
                        ${String.fromCharCode(97 + optionIndex)}. ${option.text}
                    </div>
                `).join('')}
            </div>
            <div class="quiz-answer" id="answer-${question.id}" style="display: none;">
                <strong>Correct Answer:</strong> ${question.correctAnswer}
                <div class="quiz-explanation">${question.explanation}</div>
            </div>
        `;

        return questionElement;
    },

    // Initialize Mermaid
    initMermaid: () => {
        mermaid.initialize({ 
            startOnLoad: false,
            theme: 'default',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true
            }
        });
    },

    // Render Mermaid charts
    renderMermaidCharts: () => {
        const mermaidElements = document.querySelectorAll('.mermaid');
        mermaidElements.forEach(element => {
            if (!element.hasAttribute('data-processed')) {
                element.setAttribute('data-processed', 'true');
                mermaid.render('mermaid-' + Math.random().toString(36).substr(2, 9), element.textContent).then(({svg}) => {
                    element.innerHTML = svg;
                }).catch(error => {
                    console.error('Mermaid rendering error:', error);
                });
            }
        });
    },

    // Create blue table dynamically
    createBlueTable: (headers, rows) => {
        let tableHTML = '<div class="divTable blueTable">';
        
        // Create header
        tableHTML += '<div class="divTableHeading"><div class="divTableRow">';
        headers.forEach(header => {
            tableHTML += `<div class="divTableHead">${header}</div>`;
        });
        tableHTML += '</div></div>';
        
        // Create body
        tableHTML += '<div class="divTableBody">';
        
        // Handle different input formats
        if (Array.isArray(rows)) {
            rows.forEach(row => {
                tableHTML += '<div class="divTableRow">';
                if (Array.isArray(row)) {
                    row.forEach(cell => {
                        tableHTML += `<div class="divTableCell">${cell}</div>`;
                    });
                } else {
                    // If row is not an array, treat it as a single cell
                    tableHTML += `<div class="divTableCell">${row}</div>`;
                }
                tableHTML += '</div>';
            });
        }
        
        tableHTML += '</div></div>';
        
        return tableHTML;
    },

    // Create frequency table specifically
    createFrequencyTable: (data) => {
        const headers = ['Category', 'Frequency', 'Relative Frequency', 'Percentage'];
        const rows = [];
        
        data.forEach(item => {
            rows.push([item.category, item.frequency, item.relativeFreq, item.percentage]);
        });
        
        return Utils.createBlueTable(headers, rows);
    },

    // Create employee data table
    createEmployeeTable: () => {
        const headers = ['Employee Number', 'Gender', 'Department', 'Years of Experience', 'Employee Rank (1-10)', 'Yearly Salary'];
        const rows = [
            ['23450', 'Male', 'Accounting', '15', '10', '$52,443.00'],
            ['34568', 'Female', 'IT', '24', '7', '$111,239.00'],
            ['23123', 'Female', 'Personnel', '20', '4', '$84,473.00'],
            ['23007', 'Male', 'Finance', '9', '1', '$47,519.00']
        ];
        
        return Utils.createBlueTable(headers, rows);
    },

    // Create example frequency table
    createExampleFrequencyTable: () => {
        const headers = ['Category', 'Frequency', 'Relative Frequency', 'Percentage'];
        const rows = [
            ['Male', '45', '0.45', '45%'],
            ['Female', '55', '0.55', '55%'],
            ['Total', '100', '1.00', '100%']
        ];
        
        return Utils.createBlueTable(headers, rows);
    },

    // Create Chart.js charts
    createSoftDrinkBarChart: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        canvas.width = 400;
        canvas.height = 300;
        
        const ctx = canvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Coca-Cola', 'Pepsi', 'Diet Coke', 'Dr. Pepper', 'Sprite'],
                datasets: [{
                    label: 'Frequency',
                    data: [19, 13, 8, 5, 5],
                    backgroundColor: [
                        'rgba(220, 38, 38, 0.8)',
                        'rgba(37, 99, 235, 0.8)', 
                        'rgba(107, 114, 128, 0.8)',
                        'rgba(139, 69, 19, 0.8)',
                        'rgba(34, 197, 94, 0.8)'
                    ],
                    borderColor: [
                        'rgba(220, 38, 38, 1)',
                        'rgba(37, 99, 235, 1)',
                        'rgba(107, 114, 128, 1)', 
                        'rgba(139, 69, 19, 1)',
                        'rgba(34, 197, 94, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Soft Drink Purchase Frequency'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Frequency'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Soft Drink Brand'
                        }
                    }
                },
                categoryPercentage: 0.9,
                barPercentage: 0.8
            }
        });
        
        return canvas;
    },

    createSoftDrinkPieChart: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        canvas.width = 400;
        canvas.height = 300;
        
        const ctx = canvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Coca-Cola', 'Pepsi', 'Diet Coke', 'Dr. Pepper', 'Sprite'],
                datasets: [{
                    data: [38, 26, 16, 10, 10],
                    backgroundColor: [
                        'rgba(220, 38, 38, 0.8)',
                        'rgba(37, 99, 235, 0.8)',
                        'rgba(107, 114, 128, 0.8)',
                        'rgba(139, 69, 19, 0.8)',
                        'rgba(34, 197, 94, 0.8)'
                    ],
                    borderColor: [
                        'rgba(220, 38, 38, 1)',
                        'rgba(37, 99, 235, 1)',
                        'rgba(107, 114, 128, 1)',
                        'rgba(139, 69, 19, 1)',
                        'rgba(34, 197, 94, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Soft Drink Market Share (%)'
                    },
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
        
        return canvas;
    },

    // Render charts after content is loaded
    renderCharts: () => {
        // Find chart placeholders and render charts
        const barChartContainers = document.querySelectorAll('.chart-container[data-chart="bar"]');
        barChartContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                const chart = Utils.createSoftDrinkBarChart(container.id);
                container.appendChild(chart);
            }
        });

        const pieChartContainers = document.querySelectorAll('.chart-container[data-chart="pie"]');
        pieChartContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                const chart = Utils.createSoftDrinkPieChart(container.id);
                container.appendChild(chart);
            }
        });

        const dotPlotContainers = document.querySelectorAll('.chart-container[data-chart="dotplot"]');
        dotPlotContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                const chart = Utils.createAuditTimeDotPlot(container.id);
                container.appendChild(chart);
            }
        });

        const histogramContainers = document.querySelectorAll('.chart-container[data-chart="histogram"]');
        histogramContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                const chart = Utils.createAuditTimeHistogram(container.id);
                container.appendChild(chart);
            }
        });

        const scatterContainers = document.querySelectorAll('.chart-container[data-chart="scatter"]');
        scatterContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                const chart = Utils.createStereoScatterPlot(container.id);
                container.appendChild(chart);
            }
        });

        const sideBySideBarContainers = document.querySelectorAll('.chart-container[data-chart="side-by-side-bar"]');
        sideBySideBarContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                const chart = Utils.createRestaurantSideBySideBarChart(container.id);
                container.appendChild(chart);
            }
        });

        const stackedBarContainers = document.querySelectorAll('.chart-container[data-chart="stacked-bar"]');
        stackedBarContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                const chart = Utils.createRestaurantStackedBarChart(container.id);
                container.appendChild(chart);
            }
        });
        
        const boxPlotContainers = document.querySelectorAll('.chart-container[data-chart="box"]');
        boxPlotContainers.forEach(container => {
            if (!container.hasChildNodes()) {
                if (container.id === 'salaryBoxPlot') {
                    const chart = Utils.createSalaryBoxPlot(container.id);
                    container.appendChild(chart);
                } else if (container.id === 'salaryByMajorBoxPlot') {
                    const chart = Utils.createSalaryByMajorBoxPlot(container.id);
                    container.appendChild(chart);
                }
            }
        });
    },

    createAuditTimeDotPlot: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        const ctx = canvas.getContext('2d');

        const auditTimes = [12, 14, 14, 13, 18, 16, 16, 25, 19, 18, 17, 18, 17, 26, 21, 33, 28, 23, 23, 21];
        const dataPoints = [];
        const counts = {};
        auditTimes.sort((a, b) => a - b).forEach(time => {
            counts[time] = (counts[time] || 0) + 1;
            dataPoints.push({ x: time, y: counts[time] });
        });

        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Audit Time',
                    data: dataPoints,
                    backgroundColor: 'rgba(66, 133, 244, 0.8)',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Dot Plot for the Audit Time Data'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Audit Time (days)'
                        },
                        min: 10,
                        max: 35
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Frequency Count'
                        },
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            callback: function(value) { if (Number.isInteger(value)) { return value; } }
                        }
                    }
                }
            }
        });
        return canvas;
    },

    createAuditTimeHistogram: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['10-14', '15-19', '20-24', '25-29', '30-34'],
                datasets: [{
                    label: 'Frequency',
                    data: [4, 8, 5, 2, 1],
                    backgroundColor: 'rgba(66, 133, 244, 0.7)',
                    borderColor: 'rgba(66, 133, 244, 1)',
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Histogram for the Audit Time Data'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Frequency'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Audit Time (days)'
                        },
                        barPercentage: 1.0,
                        categoryPercentage: 1.0,
                        grid: {
                            offset: false
                        }
                    }
                }
            }
        });
        return canvas;
    },

    createStereoScatterPlot: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        const ctx = canvas.getContext('2d');

        const scatterData = [
            { x: 2, y: 50 }, { x: 5, y: 57 }, { x: 1, y: 41 }, { x: 3, y: 54 }, { x: 4, y: 54 },
            { x: 1, y: 38 }, { x: 5, y: 63 }, { x: 3, y: 48 }, { x: 4, y: 59 }, { x: 2, y: 46 }
        ];

        // y = 4.95x + 36.15
        const trendlineData = [
            { x: 1, y: 4.95 * 1 + 36.15 },
            { x: 5, y: 4.95 * 5 + 36.15 }
        ];

        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Weekly Sales',
                    data: scatterData,
                    backgroundColor: 'rgba(66, 133, 244, 0.8)',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }, {
                    label: 'Trendline',
                    data: trendlineData,
                    type: 'line',
                    borderColor: 'rgba(217, 48, 37, 0.8)',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Scatter Diagram for Stereo and Sound Equipment Store'
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Number of Commercials' },
                        min: 0,
                        max: 6
                    },
                    y: {
                        title: { display: true, text: 'Sales ($100s)' },
                        min: 35,
                        max: 65
                    }
                }
            }
        });
        return canvas;
    },

    createRestaurantSideBySideBarChart: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['$10-19', '$20-29', '$30-39', '$40-49'],
                datasets: [
                    {
                        label: 'Good',
                        data: [42, 40, 2, 0],
                        backgroundColor: 'rgba(66, 133, 244, 0.8)',
                    },
                    {
                        label: 'Very Good',
                        data: [34, 64, 46, 6],
                        backgroundColor: 'rgba(217, 48, 37, 0.8)',
                    },
                    {
                        label: 'Excellent',
                        data: [2, 14, 28, 22],
                        backgroundColor: 'rgba(27, 158, 119, 0.8)',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Side-by-Side Bar Chart for Quality and Meal Price'
                    }
                },
                scales: {
                    x: { title: { display: true, text: 'Meal Price ($)' } },
                    y: { title: { display: true, text: 'Frequency' }, beginAtZero: true }
                }
            }
        });
        return canvas;
    },

    createRestaurantStackedBarChart: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['$10-19', '$20-29', '$30-39', '$40-49'],
                datasets: [
                    {
                        label: 'Good',
                        data: [53.8, 33.9, 2.6, 0.0],
                        backgroundColor: 'rgba(66, 133, 244, 0.8)',
                    },
                    {
                        label: 'Very Good',
                        data: [43.6, 54.2, 60.5, 21.4],
                        backgroundColor: 'rgba(217, 48, 37, 0.8)',
                    },
                    {
                        label: 'Excellent',
                        data: [2.6, 11.9, 36.8, 78.6],
                        backgroundColor: 'rgba(27, 158, 119, 0.8)',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Stacked Bar Chart for Quality and Meal Price'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y + '%';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        title: { display: true, text: 'Meal Price ($)' }
                    },
                    y: {
                        stacked: true,
                        title: { display: true, text: 'Percentage' },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        return canvas;
    },

    createSalaryBoxPlot: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'boxplot',
            data: {
                labels: ['Monthly Starting Salaries'],
                datasets: [{
                    label: 'Salaries',
                    data: [
                        {
                            min: 3710,
                            q1: 3865,
                            median: 3905,
                            q3: 4000,
                            max: 4130,
                            outliers: [4325]
                        }
                    ],
                    backgroundColor: 'rgba(66, 133, 244, 0.7)',
                    borderColor: 'rgba(66, 133, 244, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Box Plot of Monthly Starting Salary Data'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Salary ($)'
                        }
                    }
                }
            }
        });
        return canvas;
    },

    createSalaryByMajorBoxPlot: (containerId) => {
        const canvas = document.createElement('canvas');
        canvas.id = containerId + '-canvas';
        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'boxplot',
            data: {
                labels: ['Accounting', 'Finance', 'Info Systems', 'Management', 'Marketing'],
                datasets: [{
                    label: 'Monthly Starting Salaries by Major',
                    data: [
                        { min: 3400, q1: 3800, median: 4100, q3: 4400, max: 5000, outliers: [5400, 5800] }, // Accounting
                        { min: 3500, q1: 3900, median: 4200, q3: 4500, max: 5100 }, // Finance
                        { min: 3800, q1: 4200, median: 4500, q3: 4800, max: 5200 }, // Info Systems
                        { min: 3200, q1: 3600, median: 3900, q3: 4200, max: 4800 }, // Management
                        { min: 3300, q1: 3700, median: 4000, q3: 4300, max: 4900, outliers: [5200] } // Marketing
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Box Plots of Monthly Starting Salary by Major'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Monthly Starting Salary ($)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Business Major'
                        }
                    }
                }
            }
        });
        return canvas;
    }
};

// Global function for Uniform Distribution Calculator with Enhanced Math Libraries
function calculateUniform() {
    // Get input values
    const a = parseFloat(document.getElementById('uniform-a').value);
    const b = parseFloat(document.getElementById('uniform-b').value);
    const x1 = parseFloat(document.getElementById('uniform-x1').value);
    const x2 = parseFloat(document.getElementById('uniform-x2').value);
    
    // Validation
    if (isNaN(a) || isNaN(b) || isNaN(x1) || isNaN(x2)) {
        document.getElementById('uniform-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Please enter valid numbers for all fields.</p>';
        return;
    }
    
    if (a >= b) {
        document.getElementById('uniform-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Maximum value (b) must be greater than minimum value (a).</p>';
        return;
    }
    
    if (x1 > x2) {
        document.getElementById('uniform-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Upper bound (x₂) must be greater than or equal to lower bound (x₁).</p>';
        return;
    }
    
    // Enhanced calculations using native JavaScript with high precision
    const enhancedMath = window.EnhancedMath;
    
    // Calculate PDF height with enhanced precision
    const pdfHeight = enhancedMath.divide(1, enhancedMath.subtract(b, a));
    
    // Calculate probability P(x1 ≤ X ≤ x2)
    let probability = 0;
    let effectiveX1 = Math.max(x1, a);  // Can't be below a
    let effectiveX2 = Math.min(x2, b);  // Can't be above b
    
    if (effectiveX1 <= effectiveX2) {
        const width = enhancedMath.subtract(effectiveX2, effectiveX1);
        probability = enhancedMath.multiply(width, pdfHeight);
    }
    
    // Calculate mean and variance with enhanced precision
    const mean = enhancedMath.divide(enhancedMath.add(a, b), 2);
    const range = enhancedMath.subtract(b, a);
    const variance = enhancedMath.divide(enhancedMath.pow(range, 2), 12);
    const standardDeviation = enhancedMath.sqrt(variance);
    
    // Format results with enhanced precision
    const pdfHeightFormatted = enhancedMath.format(pdfHeight, {precision: 8});
    const meanFormatted = enhancedMath.format(mean, {precision: 6});
    const varianceFormatted = enhancedMath.format(variance, {precision: 6});
    const stdDevFormatted = enhancedMath.format(standardDeviation, {precision: 6});
    const probabilityFormatted = enhancedMath.format(probability, {precision: 6});
    
    // Display results with MathJax formatting
    const resultsHTML = `
        <h6 style="color: #007bff; margin-bottom: 10px;">📊 Results:</h6>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
                <h6 style="margin-bottom: 8px;">📈 Probability Distribution:</h6>
                <p><strong>PDF:</strong> \\(f(x) = ${pdfHeightFormatted}\\) for \\(${a} \\leq x \\leq ${b}\\)</p>
                <p><strong>\\(P(${x1} \\leq X \\leq ${x2}) = ${probabilityFormatted}\\)</strong></p>
                <p><em>Width:</em> \\(${(effectiveX2 - effectiveX1).toFixed(2)}\\) × <em>Height:</em> \\(${pdfHeightFormatted}\\) = \\(${probabilityFormatted}\\)</p>
            </div>
            
            <div>
                <h6 style="margin-bottom: 8px;">📊 Distribution Statistics:</h6>
                <p><strong>Mean (\\(\\mu\\)):</strong> \\(${meanFormatted}\\)</p>
                <p><strong>Variance (\\(\\sigma^2\\)):</strong> \\(${varianceFormatted}\\)</p>
                <p><strong>Standard Deviation (\\(\\sigma\\)):</strong> \\(${stdDevFormatted}\\)</p>
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; border-left: 3px solid #007bff;">
            <h6 style="margin-bottom: 8px; color: #007bff;">🧮 Step-by-Step Calculations:</h6>
            
            <div style="margin-bottom: 15px;">
                <strong>1. Mean (Expected Value):</strong><br/>
                $$\\mu = \\frac{a + b}{2} = \\frac{${a} + ${b}}{2} = ${meanFormatted}$$
                <em style="font-size: 0.9em; color: #666;">The mean is the midpoint of the range because all values are equally likely.</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>2. Variance:</strong><br/>
                $$\\sigma^2 = \\frac{(b - a)^2}{12} = \\frac{(${b} - ${a})^2}{12} = \\frac{${(b-a).toFixed(2)}^2}{12} = ${varianceFormatted}$$
                <em style="font-size: 0.9em; color: #666;">Variance measures spread; the division by 12 comes from calculus integration.</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>3. Standard Deviation:</strong><br/>
                $$\\sigma = \\sqrt{\\sigma^2} = \\sqrt{${varianceFormatted}} = ${stdDevFormatted}$$
                <em style="font-size: 0.9em; color: #666;">Square root of variance, giving spread in original units.</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>4. Probability Calculation:</strong><br/>
                $$P(${x1} \\leq X \\leq ${x2}) = \\text{Width} \\times \\text{Height} = ${(effectiveX2 - effectiveX1).toFixed(2)} \\times ${pdfHeightFormatted} = ${probabilityFormatted}$$
                <em style="font-size: 0.9em; color: #666;">Area under the uniform curve (rectangle) between the bounds.</em>
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background-color: #e7f3ff; border-radius: 4px;">
            <h6 style="margin-bottom: 8px;">💡 Interpretation:</h6>
            <p>The probability that X falls between ${x1} and ${x2} is <strong>${(probability * 100).toFixed(2)}%</strong>.</p>
            <p style="margin: 5px 0; font-size: 0.95em;">This means if you randomly select a value from this uniform distribution, there's a ${(probability * 100).toFixed(2)}% chance it will fall within your specified range.</p>
            ${probability === 0 ? '<p style="color: orange;"><em>Note: The specified range is outside the distribution bounds [' + a + ', ' + b + '].</em></p>' : ''}
            ${effectiveX1 !== x1 || effectiveX2 !== x2 ? '<p style="color: orange;"><em>Note: Probability calculated for the effective range [' + effectiveX1.toFixed(2) + ', ' + effectiveX2.toFixed(2) + '] within distribution bounds.</em></p>' : ''}
        </div>
    `;
    
    document.getElementById('uniform-results').innerHTML = resultsHTML;
    
    // Create dynamic graph for uniform distribution
    createUniformDistributionGraph(a, b, effectiveX1, effectiveX2, pdfHeight, probability);
    
    // Trigger MathJax to render the new mathematical expressions
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([document.getElementById('uniform-results')]).catch((err) => {
            console.log('MathJax rendering error:', err);
        });
    }
}

// Function to create dynamic uniform distribution graph using JSXGraph
function createUniformDistributionGraph(a, b, x1, x2, pdfHeight, probability) {
    try {
        // Check if JSXGraph is available
        if (typeof JXG === 'undefined') {
            console.warn('JSXGraph not loaded, skipping graph creation');
            return;
        }
        
        // Check if graph container exists, if not create it
        let graphContainer = document.getElementById('uniform-graph-container');
        if (!graphContainer) {
            // Add graph container after the results
            const resultsDiv = document.getElementById('uniform-results');
            graphContainer = document.createElement('div');
            graphContainer.id = 'uniform-graph-container';
            graphContainer.style.marginTop = '20px';
            resultsDiv.parentNode.insertBefore(graphContainer, resultsDiv.nextSibling);
        }
    
    // Create JSXGraph div if it doesn't exist
    let jsxDiv = document.getElementById('uniform-distribution-jsx');
    if (!jsxDiv) {
        graphContainer.innerHTML = `
            <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px;">
                <h6 style="color: #007bff; margin-bottom: 15px;">📊 Interactive Uniform Distribution Visualization</h6>
                <div id="uniform-distribution-jsx" style="width: 100%; height: 300px; border: 1px solid #ccc; border-radius: 4px;"></div>
                <div style="margin-top: 15px; font-size: 0.9em; color: #666;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; text-align: center;">
                        <div><strong style="color: #007bff;">Blue Rectangle:</strong> Distribution f(x) = ${pdfHeight.toFixed(6)}</div>
                        <div><strong style="color: #28a745;">Green Area:</strong> P(${x1} ≤ X ≤ ${x2}) = ${probability.toFixed(4)}</div>
                        <div><strong style="color: #dc3545;">Red Lines:</strong> Query bounds [${x1}, ${x2}]</div>
                    </div>
                    <div style="margin-top: 10px; text-align: center; font-style: italic;">
                        Interactive: Click and drag to explore • Zoom with mouse wheel
                    </div>
                </div>
            </div>
        `;
        jsxDiv = document.getElementById('uniform-distribution-jsx');
    }
    
    // Clear existing board
    if (window.uniformBoard) {
        JXG.JSXGraph.freeBoard(window.uniformBoard);
    }
    
    // Calculate optimal bounds with proper scaling
    const range = b - a;
    const padding = Math.max(range * 0.15, 1); // Minimum 15% padding or 1 unit
    const xMin = a - padding;
    const xMax = b + padding;
    
    // Dynamic Y scaling based on PDF height
    const yMin = -pdfHeight * 0.1; // Small negative space
    const yMax = pdfHeight * 1.2; // 20% above PDF height
    
    // Create JSXGraph board with proper scaling
    window.uniformBoard = JXG.JSXGraph.initBoard('uniform-distribution-jsx', {
        boundingbox: [xMin, yMax, xMax, yMin],
        axis: true,
        showCopyright: false,
        showNavigation: true,
        zoom: {
            factorX: 1.25,
            factorY: 1.25,
            wheel: true,
            needShift: false,
            eps: 0.1
        },
        pan: {
            enabled: true,
            needTwoFingers: false,
            needShift: false
        },
        grid: {
            hasGrid: true
        }
    });
    
    const board = window.uniformBoard;
    
    // Style configurations
    const distributionStyle = {
        strokeColor: '#007bff',
        fillColor: '#007bff',
        fillOpacity: 0.2,
        strokeWidth: 3,
        highlight: false
    };
    
    const probabilityStyle = {
        strokeColor: '#28a745',
        fillColor: '#28a745',
        fillOpacity: 0.4,
        strokeWidth: 2,
        highlight: false
    };
    
    const boundsStyle = {
        strokeColor: '#dc3545',
        strokeWidth: 2,
        dash: 2,
        highlight: false
    };
    
    // Create the uniform distribution rectangle
    const distPoints = [
        board.create('point', [a, 0], {visible: false}),
        board.create('point', [a, pdfHeight], {visible: false}),
        board.create('point', [b, pdfHeight], {visible: false}),
        board.create('point', [b, 0], {visible: false})
    ];
    
    const distributionRect = board.create('polygon', distPoints, {
        ...distributionStyle,
        name: `f(x) = ${pdfHeight.toFixed(6)}`
    });
    
    // Create probability area if it exists within bounds
    const effectiveX1 = Math.max(x1, a);
    const effectiveX2 = Math.min(x2, b);
    
    if (effectiveX1 <= effectiveX2 && effectiveX1 <= b && effectiveX2 >= a) {
        const probPoints = [
            board.create('point', [effectiveX1, 0], {visible: false}),
            board.create('point', [effectiveX1, pdfHeight], {visible: false}),
            board.create('point', [effectiveX2, pdfHeight], {visible: false}),
            board.create('point', [effectiveX2, 0], {visible: false})
        ];
        
        const probabilityArea = board.create('polygon', probPoints, {
            ...probabilityStyle,
            name: `P = ${probability.toFixed(4)}`
        });
    }
    
    // Create query bound lines
    if (x1 >= xMin && x1 <= xMax) {
        board.create('line', [[x1, yMin], [x1, yMax]], {
            ...boundsStyle,
            name: `x₁ = ${x1}`
        });
    }
    
    if (x2 >= xMin && x2 <= xMax && x2 !== x1) {
        board.create('line', [[x2, yMin], [x2, yMax]], {
            ...boundsStyle,
            name: `x₂ = ${x2}`
        });
    }
    
    // Add axis labels with correct JSXGraph syntax
    board.create('text', [xMax - range * 0.05, yMin + (yMax - yMin) * 0.05, 'x'], {
        fontSize: 14,
        fontWeight: 'bold'
    });
    
    board.create('text', [xMin + range * 0.02, yMax - (yMax - yMin) * 0.05, 'f(x)'], {
        fontSize: 14,
        fontWeight: 'bold'
    });
    
    // Add title as text on graph
    board.create('text', [(xMin + xMax) / 2, yMax - (yMax - yMin) * 0.1, 
        `Uniform Distribution: f(x) = ${pdfHeight.toFixed(6)} for ${a} ≤ x ≤ ${b}`], {
            fontSize: 12,
            fontWeight: 'bold',
            anchorX: 'middle'
        });
    
    // Add probability text if area exists
    if (probability > 0) {
        board.create('text', [(effectiveX1 + effectiveX2) / 2, pdfHeight / 2, 
            `P = ${probability.toFixed(4)}`], {
                fontSize: 11,
                fontWeight: 'bold',
                color: '#28a745',
                anchorX: 'middle'
            });
    }
    
    } catch (error) {
        console.error('Error creating JSXGraph:', error);
        // Fallback: Show a simple message instead of crashing
        let graphContainer = document.getElementById('uniform-graph-container');
        if (graphContainer) {
            graphContainer.innerHTML = `
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; text-align: center;">
                    <h6 style="color: #856404;">📊 Graph Visualization</h6>
                    <p style="color: #856404; margin: 10px 0;">Interactive graph temporarily unavailable.</p>
                    <p style="color: #856404; font-size: 0.9em;">The mathematical calculations above are still accurate!</p>
                </div>
            `;
        }
    }
}

// Function to create dynamic normal distribution graph using JSXGraph
function createNormalDistributionGraph(mu, sigma, x1, x2, probability, z1, z2) {
    try {
        if (typeof JXG === 'undefined') {
            console.warn('JSXGraph not loaded, skipping graph creation');
            return;
        }
        
        let graphContainer = document.getElementById('normal-graph-container');
        if (!graphContainer) {
            const resultsDiv = document.getElementById('calculateNormal-results');
            graphContainer = document.createElement('div');
            graphContainer.id = 'normal-graph-container';
            graphContainer.style.marginTop = '20px';
            resultsDiv.parentNode.insertBefore(graphContainer, resultsDiv.nextSibling);
        }
        
        let jsxDiv = document.getElementById('normal-distribution-jsx');
        if (!jsxDiv) {
            graphContainer.innerHTML = `
                <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px;">
                    <h6 style="color: #007bff; margin-bottom: 15px;">📊 Interactive Normal Distribution Visualization</h6>
                    <div id="normal-distribution-jsx" style="width: 100%; height: 350px; border: 1px solid #ccc; border-radius: 4px;"></div>
                    <div style="margin-top: 15px; font-size: 0.9em; color: #666;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; text-align: center;">
                            <div><strong style="color: #007bff;">Blue Curve:</strong> N(${mu}, ${sigma}²) Normal Distribution</div>
                            <div><strong style="color: #28a745;">Green Area:</strong> P(${x1} ≤ X ≤ ${x2}) = ${probability.toFixed(4)}</div>
                            <div><strong style="color: #dc3545;">Red Lines:</strong> Query bounds [${x1}, ${x2}]</div>
                        </div>
                        <div style="margin-top: 10px; text-align: center; font-style: italic;">
                            Interactive: Click and drag to explore • Zoom with mouse wheel
                        </div>
                    </div>
                </div>
            `;
            jsxDiv = document.getElementById('normal-distribution-jsx');
        }
        
        // Clear existing board
        if (window.normalBoard) {
            JXG.JSXGraph.freeBoard(window.normalBoard);
        }
        
        // Calculate optimal bounds
        const range = 6 * sigma; // Show 6 standard deviations
        const xMin = mu - 3 * sigma;
        const xMax = mu + 3 * sigma;
        const yMin = -0.01 / sigma;
        const yMax = 0.5 / sigma;
        
        // Create JSXGraph board
        window.normalBoard = JXG.JSXGraph.initBoard('normal-distribution-jsx', {
            boundingbox: [xMin, yMax, xMax, yMin],
            axis: true,
            showCopyright: false,
            showNavigation: true,
            zoom: {
                factorX: 1.25,
                factorY: 1.25,
                wheel: true,
                needShift: false,
                eps: 0.1
            },
            pan: {
                enabled: true,
                needTwoFingers: false,
                needShift: false
            },
            grid: {
                hasGrid: true
            }
        });
        
        const board = window.normalBoard;
        
        // Create normal distribution curve
        const normalFunction = function(x) {
            const z = (x - mu) / sigma;
            return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
        };
        
        const curve = board.create('functiongraph', [normalFunction, xMin, xMax], {
            strokeColor: '#007bff',
            strokeWidth: 3,
            name: `N(${mu}, ${sigma}²)`
        });
        
        // Create shaded area for probability
        if (x1 >= xMin && x2 <= xMax && x1 <= x2) {
            const shadedFunction = function(x) {
                if (x >= x1 && x <= x2) {
                    return normalFunction(x);
                }
                return 0;
            };
            
            board.create('functiongraph', [shadedFunction, x1, x2], {
                strokeColor: '#28a745',
                fillColor: '#28a745',
                fillOpacity: 0.3,
                strokeWidth: 2,
                name: `P = ${probability.toFixed(4)}`
            });
        }
        
        // Create boundary lines
        if (x1 >= xMin && x1 <= xMax) {
            board.create('line', [[x1, yMin], [x1, yMax]], {
                strokeColor: '#dc3545',
                strokeWidth: 2,
                dash: 2,
                name: `x₁ = ${x1}`
            });
        }
        
        if (x2 >= xMin && x2 <= xMax && x2 !== x1) {
            board.create('line', [[x2, yMin], [x2, yMax]], {
                strokeColor: '#dc3545',
                strokeWidth: 2,
                dash: 2,
                name: `x₂ = ${x2}`
            });
        }
        
        // Add mean line
        board.create('line', [[mu, yMin], [mu, yMax]], {
            strokeColor: '#ffc107',
            strokeWidth: 2,
            dash: 1,
            name: `μ = ${mu}`
        });
        
        // Add axis labels
        board.create('text', [xMax - range * 0.05, yMin + (yMax - yMin) * 0.05, 'x'], {
            fontSize: 14,
            fontWeight: 'bold'
        });
        
        board.create('text', [xMin + range * 0.02, yMax - (yMax - yMin) * 0.05, 'f(x)'], {
            fontSize: 14,
            fontWeight: 'bold'
        });
        
        // Add title
        board.create('text', [(xMin + xMax) / 2, yMax - (yMax - yMin) * 0.1, 
            `Normal Distribution: N(${mu}, ${sigma}²)`], {
                fontSize: 12,
                fontWeight: 'bold',
                anchorX: 'middle'
            });
        
        // Add probability text
        if (probability > 0) {
            board.create('text', [(x1 + x2) / 2, normalFunction((x1 + x2) / 2) / 2, 
                `P = ${probability.toFixed(4)}`], {
                    fontSize: 11,
                    fontWeight: 'bold',
                    color: '#28a745',
                    anchorX: 'middle'
                });
        }
        
    } catch (error) {
        console.error('Error creating Normal JSXGraph:', error);
        let graphContainer = document.getElementById('normal-graph-container');
        if (graphContainer) {
            graphContainer.innerHTML = `
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; text-align: center;">
                    <h6 style="color: #856404;">📊 Graph Visualization</h6>
                    <p style="color: #856404; margin: 10px 0;">Interactive graph temporarily unavailable.</p>
                    <p style="color: #856404; font-size: 0.9em;">The mathematical calculations above are still accurate!</p>
                </div>
            `;
        }
    }
}

// Function to create dynamic exponential distribution graph using JSXGraph
function createExponentialDistributionGraph(mu, x1, x2, probability, maxPdf) {
    try {
        if (typeof JXG === 'undefined') {
            console.warn('JSXGraph not loaded, skipping graph creation');
            return;
        }
        
        let graphContainer = document.getElementById('exponential-graph-container');
        if (!graphContainer) {
            const resultsDiv = document.getElementById('calculateExponential-results');
            graphContainer = document.createElement('div');
            graphContainer.id = 'exponential-graph-container';
            graphContainer.style.marginTop = '20px';
            resultsDiv.parentNode.insertBefore(graphContainer, resultsDiv.nextSibling);
        }
        
        let jsxDiv = document.getElementById('exponential-distribution-jsx');
        if (!jsxDiv) {
            graphContainer.innerHTML = `
                <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px;">
                    <h6 style="color: #007bff; margin-bottom: 15px;">📊 Interactive Exponential Distribution Visualization</h6>
                    <div id="exponential-distribution-jsx" style="width: 100%; height: 350px; border: 1px solid #ccc; border-radius: 4px;"></div>
                    <div style="margin-top: 15px; font-size: 0.9em; color: #666;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; text-align: center;">
                            <div><strong style="color: #007bff;">Blue Curve:</strong> Exponential(μ=${mu}) Distribution</div>
                            <div><strong style="color: #28a745;">Green Area:</strong> P(${x1} ≤ X ≤ ${x2}) = ${probability.toFixed(4)}</div>
                            <div><strong style="color: #dc3545;">Red Lines:</strong> Query bounds [${x1}, ${x2}]</div>
                        </div>
                        <div style="margin-top: 10px; text-align: center; font-style: italic;">
                            Interactive: Click and drag to explore • Zoom with mouse wheel
                        </div>
                    </div>
                </div>
            `;
            jsxDiv = document.getElementById('exponential-distribution-jsx');
        }
        
        // Clear existing board
        if (window.exponentialBoard) {
            JXG.JSXGraph.freeBoard(window.exponentialBoard);
        }
        
        // Calculate optimal bounds
        const xMin = 0;
        const xMax = Math.max(x2 * 1.5, mu * 4); // Show meaningful range
        const yMin = -maxPdf * 0.05;
        const yMax = maxPdf * 1.15;
        
        // Create JSXGraph board
        window.exponentialBoard = JXG.JSXGraph.initBoard('exponential-distribution-jsx', {
            boundingbox: [xMin, yMax, xMax, yMin],
            axis: true,
            showCopyright: false,
            showNavigation: true,
            zoom: {
                factorX: 1.25,
                factorY: 1.25,
                wheel: true,
                needShift: false,
                eps: 0.1
            },
            pan: {
                enabled: true,
                needTwoFingers: false,
                needShift: false
            },
            grid: {
                hasGrid: true
            }
        });
        
        const board = window.exponentialBoard;
        
        // Create exponential distribution curve
        const exponentialFunction = function(x) {
            if (x < 0) return 0;
            return (1/mu) * Math.exp(-x/mu);
        };
        
        const curve = board.create('functiongraph', [exponentialFunction, xMin, xMax], {
            strokeColor: '#007bff',
            strokeWidth: 3,
            name: `Exp(μ=${mu})`
        });
        
        // Create shaded area for probability
        if (x1 >= 0 && x2 <= xMax && x1 <= x2) {
            const shadedFunction = function(x) {
                if (x >= x1 && x <= x2) {
                    return exponentialFunction(x);
                }
                return 0;
            };
            
            board.create('functiongraph', [shadedFunction, x1, x2], {
                strokeColor: '#28a745',
                fillColor: '#28a745',
                fillOpacity: 0.3,
                strokeWidth: 2,
                name: `P = ${probability.toFixed(4)}`
            });
        }
        
        // Create boundary lines
        if (x1 >= xMin && x1 <= xMax) {
            board.create('line', [[x1, yMin], [x1, yMax]], {
                strokeColor: '#dc3545',
                strokeWidth: 2,
                dash: 2,
                name: `x₁ = ${x1}`
            });
        }
        
        if (x2 >= xMin && x2 <= xMax && x2 !== x1) {
            board.create('line', [[x2, yMin], [x2, yMax]], {
                strokeColor: '#dc3545',
                strokeWidth: 2,
                dash: 2,
                name: `x₂ = ${x2}`
            });
        }
        
        // Add mean line
        board.create('line', [[mu, yMin], [mu, yMax]], {
            strokeColor: '#ffc107',
            strokeWidth: 2,
            dash: 1,
            name: `μ = ${mu}`
        });
        
        // Add axis labels
        board.create('text', [xMax - (xMax - xMin) * 0.05, yMin + (yMax - yMin) * 0.05, 'x (time)'], {
            fontSize: 14,
            fontWeight: 'bold'
        });
        
        board.create('text', [xMin + (xMax - xMin) * 0.02, yMax - (yMax - yMin) * 0.05, 'f(x)'], {
            fontSize: 14,
            fontWeight: 'bold'
        });
        
        // Add title
        board.create('text', [(xMin + xMax) / 2, yMax - (yMax - yMin) * 0.1, 
            `Exponential Distribution: f(x) = (1/${mu})e^(-x/${mu})`], {
                fontSize: 12,
                fontWeight: 'bold',
                anchorX: 'middle'
            });
        
        // Add probability text
        if (probability > 0) {
            const midX = (x1 + x2) / 2;
            const midY = exponentialFunction(midX) / 2;
            board.create('text', [midX, midY, `P = ${probability.toFixed(4)}`], {
                fontSize: 11,
                fontWeight: 'bold',
                color: '#28a745',
                anchorX: 'middle'
            });
        }
        
        // Add key characteristic annotations
        board.create('text', [mu + (xMax - xMin) * 0.05, exponentialFunction(mu) + (yMax - yMin) * 0.05, 
            'Memoryless Property'], {
                fontSize: 10,
                color: '#666',
                anchorX: 'left'
            });
        
    } catch (error) {
        console.error('Error creating Exponential JSXGraph:', error);
        let graphContainer = document.getElementById('exponential-graph-container');
        if (graphContainer) {
            graphContainer.innerHTML = `
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; text-align: center;">
                    <h6 style="color: #856404;">📊 Graph Visualization</h6>
                    <p style="color: #856404; margin: 10px 0;">Interactive graph temporarily unavailable.</p>
                    <p style="color: #856404; font-size: 0.9em;">The mathematical calculations above are still accurate!</p>
                </div>
            `;
        }
    }
}

// ===========================
// REUSABLE CALCULATOR UTILITIES (DRY/KISS)
// ===========================

// Generic calculator container creator
function createCalculatorContainer(calculatorId, title, description) {
    return `
        <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h5 style="color: #007bff; margin-bottom: 15px;">🧮 ${title}</h5>
            <p style="margin-bottom: 15px; color: #666;">${description}</p>
            <div id="${calculatorId}-inputs" style="margin-bottom: 20px;"></div>
            <div style="text-align: center; margin-bottom: 20px;">
                <button onclick="${calculatorId}()" style="background-color: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
                    📊 Calculate Results
                </button>
            </div>
            <div id="${calculatorId}-results" style="margin-top: 20px;"></div>
        </div>
    `;
}

// Generic input field creator
function createInputField(id, label, defaultValue, placeholder) {
    return `
        <div style="margin-bottom: 15px;">
            <label for="${id}" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">${label}:</label>
            <input type="number" id="${id}" value="${defaultValue}" placeholder="${placeholder}" 
                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
        </div>
    `;
}

// ===========================
// NORMAL DISTRIBUTION CALCULATOR
// ===========================

function calculateNormal() {
    // Get input values
    const mu = parseFloat(document.getElementById('normal-mu').value);
    const sigma = parseFloat(document.getElementById('normal-sigma').value);
    const x1 = parseFloat(document.getElementById('normal-x1').value);
    const x2 = parseFloat(document.getElementById('normal-x2').value);
    
    // Validation
    if (isNaN(mu) || isNaN(sigma) || isNaN(x1) || isNaN(x2)) {
        document.getElementById('calculateNormal-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Please enter valid numbers for all fields.</p>';
        return;
    }
    
    if (sigma <= 0) {
        document.getElementById('calculateNormal-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Standard deviation (σ) must be greater than 0.</p>';
        return;
    }
    
    if (x1 > x2) {
        document.getElementById('calculateNormal-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Upper bound (x₂) must be greater than or equal to lower bound (x₁).</p>';
        return;
    }
    
    // Enhanced calculations
    const enhancedMath = window.EnhancedMath;
    
    // Calculate z-scores
    const z1 = enhancedMath.divide(enhancedMath.subtract(x1, mu), sigma);
    const z2 = enhancedMath.divide(enhancedMath.subtract(x2, mu), sigma);
    
    // Approximate normal CDF using error function approximation
    function normalCDF(z) {
        const a1 =  0.254829592;
        const a2 = -0.284496736;
        const a3 =  1.421413741;
        const a4 = -1.453152027;
        const a5 =  1.061405429;
        const p  =  0.3275911;
        
        const sign = z < 0 ? -1 : 1;
        z = Math.abs(z);
        
        const t = 1.0/(1.0 + p*z);
        const y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-z*z);
        
        return 0.5 * (1.0 + sign*y);
    }
    
    // Calculate probabilities
    const prob1 = normalCDF(z1);
    const prob2 = normalCDF(z2);
    const probability = prob2 - prob1;
    
    // Format results
    const z1Formatted = enhancedMath.format(z1, {precision: 4});
    const z2Formatted = enhancedMath.format(z2, {precision: 4});
    const prob1Formatted = enhancedMath.format(prob1, {precision: 6});
    const prob2Formatted = enhancedMath.format(prob2, {precision: 6});
    const probabilityFormatted = enhancedMath.format(probability, {precision: 6});
    
    // Display results
    const resultsHTML = `
        <h6 style="color: #007bff; margin-bottom: 10px;">📊 Results:</h6>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
                <h6 style="margin-bottom: 8px;">📈 Probability Calculation:</h6>
                <p><strong>\\(P(${x1} \\leq X \\leq ${x2}) = ${probabilityFormatted}\\)</strong></p>
                <p><strong>Percentage:</strong> ${(probability * 100).toFixed(2)}%</p>
                <p><em>Area under the normal curve between the bounds</em></p>
            </div>
            
            <div>
                <h6 style="margin-bottom: 8px;">📊 Distribution Parameters:</h6>
                <p><strong>Mean (\\(\\mu\\)):</strong> \\(${mu}\\)</p>
                <p><strong>Standard Deviation (\\(\\sigma\\)):</strong> \\(${sigma}\\)</p>
                <p><strong>Distribution:</strong> \\(N(${mu}, ${sigma}^2)\\)</p>
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; border-left: 3px solid #007bff;">
            <h6 style="margin-bottom: 8px; color: #007bff;">🧮 Step-by-Step Calculations:</h6>
            
            <div style="margin-bottom: 15px;">
                <strong>1. Standardization (Z-scores):</strong><br/>
                $$z_1 = \\frac{x_1 - \\mu}{\\sigma} = \\frac{${x1} - ${mu}}{${sigma}} = ${z1Formatted}$$
                $$z_2 = \\frac{x_2 - \\mu}{\\sigma} = \\frac{${x2} - ${mu}}{${sigma}} = ${z2Formatted}$$
                <em style="font-size: 0.9em; color: #666;">Converting to standard normal distribution Z ~ N(0,1)</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>2. Cumulative Probabilities:</strong><br/>
                $$P(Z \\leq ${z1Formatted}) = ${prob1Formatted}$$
                $$P(Z \\leq ${z2Formatted}) = ${prob2Formatted}$$
                <em style="font-size: 0.9em; color: #666;">Using standard normal distribution table values</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>3. Final Probability:</strong><br/>
                $$P(${x1} \\leq X \\leq ${x2}) = P(Z \\leq ${z2Formatted}) - P(Z \\leq ${z1Formatted})$$
                $$= ${prob2Formatted} - ${prob1Formatted} = ${probabilityFormatted}$$
                <em style="font-size: 0.9em; color: #666;">Difference between cumulative probabilities gives the area between bounds</em>
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background-color: #e7f3ff; border-radius: 4px;">
            <h6 style="margin-bottom: 8px;">💡 Interpretation:</h6>
            <p>The probability that X falls between ${x1} and ${x2} is <strong>${(probability * 100).toFixed(2)}%</strong>.</p>
            <p style="margin: 5px 0; font-size: 0.95em;">In a normal distribution with mean ${mu} and standard deviation ${sigma}, there's a ${(probability * 100).toFixed(2)}% chance that a randomly selected value will fall within your specified range.</p>
        </div>
    `;
    
    document.getElementById('calculateNormal-results').innerHTML = resultsHTML;
    
    // Create dynamic graph for normal distribution
    createNormalDistributionGraph(mu, sigma, x1, x2, probability, z1, z2);
    
    // Trigger MathJax to render
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([document.getElementById('calculateNormal-results')]).catch((err) => {
            console.log('MathJax rendering error:', err);
        });
    }
}

// ===========================
// EXPONENTIAL DISTRIBUTION CALCULATOR
// ===========================

function calculateExponential() {
    // Get input values
    const mu = parseFloat(document.getElementById('exponential-mu').value);
    const x1 = parseFloat(document.getElementById('exponential-x1').value);
    const x2 = parseFloat(document.getElementById('exponential-x2').value);
    
    // Validation
    if (isNaN(mu) || isNaN(x1) || isNaN(x2)) {
        document.getElementById('calculateExponential-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Please enter valid numbers for all fields.</p>';
        return;
    }
    
    if (mu <= 0) {
        document.getElementById('calculateExponential-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Mean (μ) must be greater than 0.</p>';
        return;
    }
    
    if (x1 < 0 || x2 < 0) {
        document.getElementById('calculateExponential-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Time values must be non-negative (≥ 0).</p>';
        return;
    }
    
    if (x1 > x2) {
        document.getElementById('calculateExponential-results').innerHTML = '<p style="color: red;"><strong>Error:</strong> Upper bound (x₂) must be greater than or equal to lower bound (x₁).</p>';
        return;
    }
    
    // Enhanced calculations
    const enhancedMath = window.EnhancedMath;
    
    // Calculate probabilities using CDF: P(X ≤ x) = 1 - e^(-x/μ)
    const prob1 = x1 === 0 ? 0 : 1 - Math.exp(-x1/mu);  // P(X ≤ x1)
    const prob2 = 1 - Math.exp(-x2/mu);                  // P(X ≤ x2)
    const probability = prob2 - prob1;                   // P(x1 ≤ X ≤ x2)
    
    // Calculate PDF values for graphing
    const pdfAtX1 = x1 === 0 ? (1/mu) : (1/mu) * Math.exp(-x1/mu);
    const pdfAtX2 = (1/mu) * Math.exp(-x2/mu);
    const maxPdf = 1/mu; // PDF maximum at x = 0
    
    // Calculate distribution statistics
    const mean = mu;
    const variance = enhancedMath.pow(mu, 2);
    const standardDeviation = mu; // σ = μ for exponential distribution
    
    // Format results
    const prob1Formatted = enhancedMath.format(prob1, {precision: 6});
    const prob2Formatted = enhancedMath.format(prob2, {precision: 6});
    const probabilityFormatted = enhancedMath.format(probability, {precision: 6});
    const meanFormatted = enhancedMath.format(mean, {precision: 4});
    const varianceFormatted = enhancedMath.format(variance, {precision: 4});
    const stdDevFormatted = enhancedMath.format(standardDeviation, {precision: 4});
    
    // Display results
    const resultsHTML = `
        <h6 style="color: #007bff; margin-bottom: 10px;">📊 Results:</h6>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
                <h6 style="margin-bottom: 8px;">📈 Probability Calculation:</h6>
                <p><strong>\\(P(${x1} \\leq X \\leq ${x2}) = ${probabilityFormatted}\\)</strong></p>
                <p><strong>Percentage:</strong> ${(probability * 100).toFixed(2)}%</p>
                <p><em>Area under the exponential curve between the bounds</em></p>
            </div>
            
            <div>
                <h6 style="margin-bottom: 8px;">📊 Distribution Parameters:</h6>
                <p><strong>Mean (\\(\\mu\\)):</strong> \\(${meanFormatted}\\)</p>
                <p><strong>Standard Deviation (\\(\\sigma\\)):</strong> \\(${stdDevFormatted}\\)</p>
                <p><strong>Variance (\\(\\sigma^2\\)):</strong> \\(${varianceFormatted}\\)</p>
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; border-left: 3px solid #007bff;">
            <h6 style="margin-bottom: 8px; color: #007bff;">🧮 Step-by-Step Calculations:</h6>
            
            <div style="margin-bottom: 15px;">
                <strong>1. Exponential Distribution PDF:</strong><br/>
                $$f(x) = \\frac{1}{\\mu} e^{-x/\\mu} = \\frac{1}{${mu}} e^{-x/${mu}}$$
                <em style="font-size: 0.9em; color: #666;">Probability density function for x ≥ 0</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>2. Cumulative Probabilities:</strong><br/>
                $$P(X \\leq ${x1}) = 1 - e^{-${x1}/${mu}} = ${prob1Formatted}$$
                $$P(X \\leq ${x2}) = 1 - e^{-${x2}/${mu}} = ${prob2Formatted}$$
                <em style="font-size: 0.9em; color: #666;">Using exponential CDF formula</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>3. Final Probability:</strong><br/>
                $$P(${x1} \\leq X \\leq ${x2}) = P(X \\leq ${x2}) - P(X \\leq ${x1})$$
                $$= ${prob2Formatted} - ${prob1Formatted} = ${probabilityFormatted}$$
                <em style="font-size: 0.9em; color: #666;">Difference between cumulative probabilities</em>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>4. Distribution Properties:</strong><br/>
                $$\\text{Mean} = \\mu = ${meanFormatted}$$
                $$\\text{Variance} = \\mu^2 = ${varianceFormatted}$$
                $$\\text{Standard Deviation} = \\mu = ${stdDevFormatted}$$
                <em style="font-size: 0.9em; color: #666;">Key property: Mean equals standard deviation</em>
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background-color: #e7f3ff; border-radius: 4px;">
            <h6 style="margin-bottom: 8px;">💡 Interpretation:</h6>
            <p>The probability that the waiting time falls between ${x1} and ${x2} time units is <strong>${(probability * 100).toFixed(2)}%</strong>.</p>
            <p style="margin: 5px 0; font-size: 0.95em;">In an exponential distribution with mean ${mu}, there's a ${(probability * 100).toFixed(2)}% chance that the time until the next event will fall within your specified range.</p>
            <div style="margin-top: 10px; font-size: 0.9em; color: #666;">
                <strong>Business Applications:</strong>
                <ul style="margin: 5px 0 0 20px;">
                    <li>Service times: ${(probability * 100).toFixed(2)}% of customers served in this time range</li>
                    <li>Equipment reliability: ${(probability * 100).toFixed(2)}% chance of failure in this interval</li>
                    <li>Queue management: ${(probability * 100).toFixed(2)}% of arrivals occur in this timeframe</li>
                </ul>
            </div>
        </div>
    `;
    
    document.getElementById('calculateExponential-results').innerHTML = resultsHTML;
    
    // Create dynamic graph for exponential distribution
    createExponentialDistributionGraph(mu, x1, x2, probability, maxPdf);
    
    // Trigger MathJax to render
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([document.getElementById('calculateExponential-results')]).catch((err) => {
            console.log('MathJax rendering error:', err);
        });
    }
}

// Initialize calculators when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (document.getElementById('uniform-a')) {
            calculateUniform();
        }
        if (document.getElementById('normal-mu')) {
            calculateNormal();
        }
        if (document.getElementById('exponential-mu')) {
            calculateExponential();
        }
    }, 500);
});