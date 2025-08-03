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