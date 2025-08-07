// Module 1 notes and data
const MODULE1_NOTES = {
  overview: [
    {
      id: 1,
      title: "Module 1: Data and Statistics - Learning Objectives",
      category: "objectives",
      content:
        "Title: Data and Statistics\n\nObjective:\nUpon completion of this module, the students will be able to:\n\n1.1 List 5 applications of statistics in business such as Marketing, Management, Finance or Accounting with no more than 1 incorrect or unrelated.\n\n1.2 Correctly identify which ones are descriptive and which ones are inferential statistics for given business scenarios with accurate rate of no less than 80%.\n\n1.3 Identify which ones are respectively quantitative or qualitative data for given business scenarios with accurate rate of no less than 80%.\n\n1.4 Identify which ones are nominal, ordinal, interval or ratio data for given business scenarios with accurate rate of no less than 80%.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      title: "What is Statistics?",
      category: "definition",
      content:
        "Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. It provides methods for making sense of data and drawing conclusions from it. Statistics helps us understand patterns, relationships, and trends in data, enabling evidence-based decision making across various fields including science, business, medicine, and technology.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 3,
      title: "Applications of Statistics in Business",
      category: "business-applications",
      content:
        "Statistics plays a crucial role in business through:\n\n1. Marketing - Customer behavior analysis, market research, campaign effectiveness, customer segmentation, and conversion rate optimization\n2. Management - Performance metrics, employee productivity analysis, resource allocation, and strategic planning\n3. Finance - Risk assessment, portfolio analysis, financial forecasting, and investment decision making\n4. Accounting - Audit sampling, financial statement analysis, cost analysis, and fraud detection\n5. Operations - Quality control, supply chain optimization, inventory management, and process improvement",
      timestamp: new Date().toLocaleString(),
    },
  ],
  types: [
    {
      id: 4,
      title: "Two Types of Statistics: Descriptive",
      category: "descriptive",
      content:
        "Descriptive Statistics summarize and describe the main features of a dataset. It includes:\n\n1. Measures of Central Tendency (mean, median, mode) - showing where data clusters\n2. Measures of Dispersion (range, variance, standard deviation) - showing how spread out data is\n3. Frequency Distributions - showing how often values occur\n4. Graphical Representations (histograms, box plots, scatter plots) - visualizing data patterns\n\nDescriptive statistics answer 'What happened?' by organizing and summarizing data without making predictions.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 5,
      title: "Two Types of Statistics: Inferential",
      category: "inferential",
      content:
        "Inferential Statistics use sample data to make predictions or draw conclusions about a larger population. It includes:\n\n1. Hypothesis Testing - testing assumptions about population parameters\n2. Confidence Intervals - estimating population parameters with a range of values\n3. Regression Analysis - modeling relationships between variables\n4. Correlation Analysis - measuring strength of relationships\n5. ANOVA - comparing means across groups\n\nInferential statistics answer 'What might happen?' by using probability theory to make educated guesses about populations based on sample data.",
      timestamp: new Date().toLocaleString(),
    },
  ],
  dataTypes: [
    {
      id: 6,
      title: "Data Types: Categorical vs Quantitative",
      category: "data-types",
      content:
        "Data can be classified into two main types: Categorical and Quantitative.\n\nCategorical Data:\n- Represents categories or groups\n- Can be numeric or non-numeric\n- Examples: gender, color, brand, category codes\n- Used for grouping and classification\n\nQuantitative Data:\n- Represents measurable quantities\n- Always numeric\n- Examples: age, height, temperature, scores\n- Used for mathematical operations and analysis\n\n<div class='divTable blueTable'>\n<div class='divTableHeading'>\n<div class='divTableRow'>\n<div class='divTableHead'>Data Type</div>\n<div class='divTableHead'>Description</div>\n<div class='divTableHead'>Examples</div>\n<div class='divTableHead'>Operations</div>\n</div>\n</div>\n<div class='divTableBody'>\n<div class='divTableRow'>\n<div class='divTableCell'>Categorical</div>\n<div class='divTableCell'>Categories or groups</div>\n<div class='divTableCell'>Gender, Color, Brand</div>\n<div class='divTableCell'>Count, Group</div>\n</div>\n<div class='divTableRow'>\n<div class='divTableCell'>Quantitative</div>\n<div class='divTableCell'>Measurable quantities</div>\n<div class='divTableCell'>Age, Height, Temperature</div>\n<div class='divTableCell'>All mathematical operations</div>\n</div>\n</div>\n</div>",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 7,
      title: "Categorical Data: Numeric vs Non-Numeric",
      category: "categorical",
      content:
        "Categorical data can be either numeric or non-numeric:\n\nNumeric Categorical:\n1. Category codes (1 = Male, 2 = Female)\n2. Postal codes (10001, 10002)\n3. Product IDs (SKU123, SKU456)\n4. Survey responses (1-5 scale)\n\nNon-Numeric Categorical:\n1. Text labels (Red, Blue, Green)\n2. Names (John, Mary, David)\n3. Categories (High, Medium, Low)\n4. Binary (Yes/No, True/False)\n\nBoth can be Nominal or Ordinal depending on whether order matters.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 8,
      title: "Quantitative Data: Discrete vs Continuous",
      category: "quantitative",
      content:
        "Quantitative data can be either discrete or continuous:\n\nDiscrete Quantitative:\n1. Whole numbers only\n2. Countable values\n3. Examples: number of students, cars, errors\n4. Cannot have fractional values\n\nContinuous Quantitative:\n1. Can have decimal values\n2. Measurable on a continuum\n3. Examples: height, weight, temperature, time\n4. Can be infinitely subdivided\n\nBoth can be Interval or Ratio level depending on whether zero is meaningful.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 9,
      title: "Relationship: Data Types and Measurement Scales",
      category: "relationships",
      content:
        "Data types and measurement scales are closely related:\n\nCategorical Data:\n1. Nominal Scale - categories without order (gender, color)\n2. Ordinal Scale - categories with order (education level, satisfaction)\n\nQuantitative Data:\n1. Interval Scale - numeric with no true zero (temperature, IQ)\n2. Ratio Scale - numeric with true zero (age, height, weight)\n\nKey Points:\n- Categorical can be numeric (category codes) or non-numeric (text)\n- Quantitative is always numeric\n- The scale determines what statistical operations are possible\n- Data type determines the appropriate visualization methods",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 10,
      title: "Data Types Hierarchy Flowchart",
      category: "visualization",
      content:
        "Data Types Hierarchy:\n\n<div class='mermaid'>\ngraph TD\n    A[DATA TYPES] --> B[Categorical]\n    A --> C[Quantitative]\n    \n    B --> D[Numeric Categorical]\n    B --> E[Non-Numeric Categorical]\n    C --> F[Discrete Quantitative]\n    C --> G[Continuous Quantitative]\n    \n    D --> H[Nominal]\n    D --> I[Ordinal]\n    E --> J[Nominal]\n    E --> K[Ordinal]\n    F --> L[Interval]\n    F --> M[Ratio]\n    G --> N[Interval]\n    G --> O[Ratio]\n    \n    style A fill:#e1f5fe\n    style B fill:#f3e5f5\n    style C fill:#e8f5e8\n    style D fill:#fce4ec\n    style E fill:#fce4ec\n    style F fill:#e0f2f1\n    style G fill:#e0f2f1\n    style H fill:#fff3e0\n    style I fill:#fff3e0\n    style J fill:#fff3e0\n    style K fill:#fff3e0\n    style L fill:#e8f5e8\n    style M fill:#e8f5e8\n    style N fill:#e8f5e8\n    style O fill:#e8f5e8\n</div>\n\nExamples:\n• Categorical Numeric Nominal: Gender codes (1,2)\n• Categorical Non-numeric Ordinal: Education level\n• Quantitative Discrete Ratio: Number of students\n• Quantitative Continuous Interval: Temperature",
      timestamp: new Date().toLocaleString(),
    },
  ],
  scales: [
    {
      id: 11,
      title: "Scale of Measurement: Nominal Level",
      category: "nominal",
      content:
        "Nominal Level is the lowest level of measurement where data is categorized without any order or ranking. Examples: gender (male/female), hair color (brown/blonde/black), country of birth, blood type (A/B/AB/O).\n\nCharacteristics:\n1. Categories are mutually exclusive\n2. No mathematical operations possible\n3. Can only count frequency\n4. No inherent order or hierarchy\n\nIn Business: used for customer types, product categories, department codes, and error classifications.\n\n<div class='divTable blueTable'>\n<div class='divTableHeading'>\n<div class='divTableRow'>\n<div class='divTableHead'>Scale Level</div>\n<div class='divTableHead'>Order</div>\n<div class='divTableHead'>Zero Point</div>\n<div class='divTableHead'>Operations</div>\n<div class='divTableHead'>Examples</div>\n</div>\n</div>\n<div class='divTableBody'>\n<div class='divTableRow'>\n<div class='divTableCell'>Nominal</div>\n<div class='divTableCell'>No order</div>\n<div class='divTableCell'>No zero</div>\n<div class='divTableCell'>Count only</div>\n<div class='divTableCell'>Gender, Color</div>\n</div>\n<div class='divTableRow'>\n<div class='divTableCell'>Ordinal</div>\n<div class='divTableCell'>Has order</div>\n<div class='divTableCell'>No zero</div>\n<div class='divTableCell'>Count, Rank</div>\n<div class='divTableCell'>Education Level</div>\n</div>\n<div class='divTableRow'>\n<div class='divTableCell'>Interval</div>\n<div class='divTableCell'>Has order</div>\n<div class='divTableCell'>No true zero</div>\n<div class='divTableCell'>Add, Subtract</div>\n<div class='divTableCell'>Temperature</div>\n</div>\n<div class='divTableRow'>\n<div class='divTableCell'>Ratio</div>\n<div class='divTableCell'>Has order</div>\n<div class='divTableCell'>True zero</div>\n<div class='divTableCell'>All operations</div>\n<div class='divTableCell'>Age, Weight</div>\n</div>\n</div>\n</div>",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 12,
      title: "Scale of Measurement: Ordinal Level",
      category: "ordinal",
      content:
        "Ordinal Level has categories with a meaningful order or ranking, but differences between values are not meaningful. Examples: education level (high school < bachelor's < master's < PhD), satisfaction ratings (1-5 scale), income brackets (low/medium/high), software versions (v1.0 < v2.0 < v3.0).\n\nCharacteristics:\n1. Categories have order\n2. Differences between values not meaningful\n3. Can use median and mode\n4. Cannot perform arithmetic operations\n\nIn Business: used for customer satisfaction ratings, priority levels, performance rankings, and service quality assessments.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 13,
      title: "Scale of Measurement: Interval Level",
      category: "interval",
      content:
        "Interval Level has ordered categories with meaningful differences between values, but no true zero point. Examples: temperature (Celsius/Fahrenheit), IQ scores, pH levels, calendar years.\n\nCharacteristics:\n1. Equal intervals between values\n2. No true zero point\n3. Can add and subtract\n4. Cannot multiply or divide meaningfully\n5. Can use mean, median, mode, and standard deviation\n\nIn Business: used for performance scores, customer satisfaction scales, and standardized test results where zero doesn't mean 'absence'.",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 14,
      title: "Scale of Measurement: Ratio Level",
      category: "ratio",
      content:
        "Ratio Level is the highest level with ordered categories, meaningful differences, and a true zero point. Examples: age, height, weight, income, file size, download speed, number of users.\n\nCharacteristics:\n1. True zero point exists\n2. Can perform all mathematical operations\n3. Can use all statistical measures\n4. Ratios are meaningful (twice as much)\n5. Most powerful level of measurement\n\nIn Business: used for sales figures, revenue, customer counts, inventory levels, and any quantitative data with a meaningful zero.",
      timestamp: new Date().toLocaleString(),
    },
  ],
};

// If you want to use module.exports for Node.js:
// module.exports = MODULE1_NOTES; 