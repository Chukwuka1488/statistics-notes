// Module 2 notes and data
const MODULE2_NOTES = {
  overview2: [
    {
      id: 15,
      title: "Module 2: Descriptive Statistics - Learning Objectives",
      category: "objectives",
      content: "Title: Descriptive Statistics\n\nObjective:\nUpon completion of this module, the students will be able to:\n\n2.1 Construct a frequency distribution table including class interval, frequency, relative frequency, cumulative frequency and cumulative relative frequency for a given dataset with at least 80% accuracy.\n\n2.2 Following the Bar Chart Rubric, create a bar chart using Excel for a given business dataset with accurate rate of no less than 80%.\n\n2.3 Following the Pie Chart Rubric, create a pie chart exhibiting category name, percentage and value using Excel for a given dataset with accurate rate of no less than 80%.\n\n2.4 Create a stem and leaf chart for a given dataset with accurate rate of no less than 80%.\n\n2.5 Compute column percentages and row percentages for a given crosstabulation with at least 80% accuracy.\n\n2.6 Following the Scatter Plot Rubric, create a scatter plot using Excel for a given business dataset.\n\n2.7 Identify the most appropriate chart or graph among histogram, ogive, bar, pie, dot, pareto, stem and leaf, and scatter plot for given business scenarios with at least 80% accuracy.\n\n2.8 Compute numerical measures of location including mean, median, mode, percentile and quartile for an ungrouped dataset with at least 80% accuracy.\n\n2.9 Compute numerical measures of variability including range, interquartile range, variance, standard deviation and coefficient of variation for ungrouped datasets with at least 80% accuracy.\n\n2.10 Compute numerical measures of distribution shape including skewness, z-score, five points of box-plots for ungrouped datasets with at least 80% accuracy.\n\n2.11 Interpret numerical measures of association between two variables with at least 80% accuracy.\n\n2.12 Compute mean, variance and standard deviation of grouped data using Excel spreadsheet with at least 80% accuracy.\n\n2.13 Compute mean, variance and standard deviation of grouped data using Excel spreadsheet with at least 80% accuracy.",
      timestamp: new Date().toLocaleString(),
    }
  ],
  categorical: [
    {
      id: 18,
      title: "Summarizing Data for Categorical Variables",
      category: "categorical-summary",
      content: `Categorical data summarization involves organizing and presenting data for variables that represent categories or groups.

<h3><strong>Types of Categorical Data Summaries</strong></h3>

<h4><strong>1. Frequency Distribution</strong></h4>
<ul>
<li><strong>What:</strong> Shows the count (number) of observations in each category</li>
<li><strong>When to use:</strong> When you need actual counts, sample sizes, or absolute numbers</li>
<li><strong>Applications:</strong> Inventory counts, survey responses, quality control defects</li>
<li><strong>ML/AI Relevance:</strong> Feature encoding, class distribution analysis, imbalanced dataset detection</li>
</ul>

<h4><strong>2. Relative Frequency Distribution</strong></h4>
<ul>
<li><strong>What:</strong> Shows the proportion (fraction) of observations in each category</li>
<li><strong>When to use:</strong> Comparing datasets of different sizes, standardizing for analysis</li>
<li><strong>Applications:</strong> Market research, demographic analysis, A/B testing</li>
<li><strong>ML/AI Relevance:</strong> Probability distributions, class weights, cross-validation splits</li>
</ul>

<h4><strong>3. Percent Frequency Distribution</strong></h4>
<ul>
<li><strong>What:</strong> Shows the percentage of observations in each category</li>
<li><strong>When to use:</strong> Business reporting, presentations, easy interpretation</li>
<li><strong>Applications:</strong> Sales reports, customer segmentation, performance metrics</li>
<li><strong>ML/AI Relevance:</strong> Model accuracy metrics, confusion matrix analysis, feature importance</li>
</ul>

<h4><strong>4. Bar Charts</strong></h4>
<ul>
<li><strong>What:</strong> Visual representation using bars to show frequencies/percentages</li>
<li><strong>When to use:</strong> Comparing categories, more than 7 categories, ordinal data</li>
<li><strong>Applications:</strong> Sales by region, survey results, performance comparisons</li>
<li><strong>ML/AI Relevance:</strong> Feature distribution visualization, model performance comparison</li>
</ul>

<h4><strong>5. Pie Charts</strong></h4>
<ul>
<li><strong>What:</strong> Circular chart showing parts of a whole</li>
<li><strong>When to use:</strong> Composition analysis, 5-7 categories maximum, part-to-whole relationships</li>
<li><strong>Applications:</strong> Budget allocation, market share, resource distribution</li>
<li><strong>ML/AI Relevance:</strong> Class distribution in datasets, ensemble model contributions</li>
</ul>

<h3><strong>Decision Matrix: Which Method to Use When</strong></h3>
` + Utils.createBlueTable(
  ['Scenario', 'Best Method', 'Reason'],
  [
    ['Different sample sizes', 'Relative/Percent Frequency', 'Standardizes for comparison'],
    ['Business presentation', 'Percent Frequency + Bar Chart', 'Easy interpretation'],
    ['Academic research', 'All three + Bar Chart', 'Complete statistical picture'],
    ['Comparing 10+ categories', 'Frequency + Bar Chart', 'Pie charts become cluttered'],
    ['Part-to-whole analysis', 'Percent + Pie Chart', 'Shows composition clearly'],
    ['Time series data', 'Frequency + Bar Chart', 'Shows trends over time'],
    ['ML model evaluation', 'All methods + Bar Chart', 'Comprehensive analysis']
  ]
) + `

<h3><strong>Real-World Example: Soft Drink Purchases</strong></h3>

Let's analyze a sample of 50 soft drink purchases from Coca-Cola, Diet Coke, Dr. Pepper, Pepsi, and Sprite.

<h4><strong>Raw Data (Sample of 50 purchases):</strong></h4>
Coca-Cola, Diet Coke, Pepsi, Diet Coke, Coca-Cola, Coca-Cola, Dr. Pepper, Diet Coke, Pepsi, Pepsi, Coca-Cola, Dr. Pepper, Sprite, Coca-Cola, Diet Coke, Coca-Cola, Coca-Cola, Sprite, Coca-Cola, Diet Coke, Coca-Cola, Diet Coke, Coca-Cola, Sprite, Pepsi, Coca-Cola, Coca-Cola, Coca-Cola, Pepsi, Coca-Cola, Sprite, Dr. Pepper, Pepsi, Diet Coke, Pepsi, Coca-Cola, Coca-Cola, Coca-Cola, Pepsi, Dr. Pepper, Coca-Cola, Diet Coke, Pepsi, Pepsi, Pepsi, Pepsi, Coca-Cola, Dr. Pepper, Pepsi, Sprite

<h4><strong>Frequency Distribution:</strong></h4>
` + Utils.createBlueTable(
  ['Soft Drink', 'Frequency'],
  [
    ['Coca-Cola', '19'],
    ['Diet Coke', '8'],
    ['Dr. Pepper', '5'],
    ['Pepsi', '13'],
    ['Sprite', '5'],
    ['Total', '50']
  ]
) + `

<h4><strong>Relative Frequency and Percent Frequency Distributions:</strong></h4>
<p>A frequency distribution shows the number of observations in each class. However, we are often interested in the <strong>proportion</strong> or <strong>percentage</strong> of observations in each class.</p>

<p><strong>Relative Frequency Formula:</strong></p>
<p>Relative frequency of a class = Frequency of the class / n</p>
<p>Where n = total number of observations</p>

<p><strong>Percent Frequency:</strong> The percent frequency of a class is the relative frequency multiplied by 100.</p>

` + Utils.createBlueTable(
  ['Soft Drink', 'Frequency', 'Relative Frequency', 'Percent Frequency'],
  [
    ['Coca-Cola', '19', '19/50 = 0.38', '38%'],
    ['Diet Coke', '8', '8/50 = 0.16', '16%'],
    ['Dr. Pepper', '5', '5/50 = 0.10', '10%'],
    ['Pepsi', '13', '13/50 = 0.26', '26%'],
    ['Sprite', '5', '5/50 = 0.10', '10%'],
    ['Total', '50', '1.00', '100%']
  ]
) + `

<h3><strong>Key Insights:</strong></h3>
<ul>
<li><strong>Coca-Cola leads</strong> with relative frequency of 0.38 (38% of purchases)</li>
<li><strong>Diet Coke</strong> has relative frequency of 0.16 (16% of purchases)</li>
<li><strong>Pepsi is second</strong> with 26% market share</li>
<li><strong>Top 3 brands</strong> (Coca-Cola + Pepsi + Diet Coke) = 38% + 26% + 16% = 80% of purchases</li>
<li><strong>Dr. Pepper and Sprite</strong> each have 10% market share</li>
</ul>

<h3><strong>Understanding the Calculations:</strong></h3>
<ul>
<li><strong>Relative Frequency for Coca-Cola:</strong> 19/50 = 0.38</li>
<li><strong>Relative Frequency for Diet Coke:</strong> 8/50 = 0.16</li>
<li><strong>Percent Frequency:</strong> Multiply relative frequency by 100</li>
<li><strong>Verification:</strong> All relative frequencies sum to 1.00 (100%)</li>
</ul>`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 19,
      title: "Bar Charts and Pie Charts for Categorical Data",
      category: "categorical-visualization",
      content: `<h3><strong>Bar Charts for Categorical Data</strong></h3>
<p>Bar charts are graphical displays for depicting categorical data summarized in frequency, relative frequency, or percent frequency distributions.</p>

<h4><strong>Soft Drink Example - Bar Chart:</strong></h4>
<div class='chart-container' data-chart='bar' id='softDrinkBarChart' style='width: 100%; height: 300px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px; padding: 10px;'></div>

<h3><strong>Pie Charts for Categorical Data</strong></h3>
<p>Pie charts provide graphical display for presenting relative frequency and percent frequency distributions.</p>

<h4><strong>Soft Drink Example - Pie Chart:</strong></h4>
<div class='chart-container' data-chart='pie' id='softDrinkPieChart' style='width: 100%; height: 300px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px; padding: 10px;'></div>

<h3><strong>Detailed Guide: When to Use Each Chart Type</strong></h3>

<h4><strong>Bar Charts - Use When:</strong></h4>
<ul>
<li><strong>Comparing categories:</strong> Which brand sells more?</li>
<li><strong>Many categories:</strong> 7+ categories (pie charts become cluttered)</li>
<li><strong>Ordinal data:</strong> Rankings, ratings, education levels</li>
<li><strong>Time series:</strong> Changes over time periods</li>
<li><strong>Precise comparisons:</strong> Need to see exact differences</li>
<li><strong>Negative values:</strong> Can show negative frequencies or changes</li>
</ul>

<h4><strong>Pie Charts - Use When:</strong></h4>
<ul>
<li><strong>Parts of whole:</strong> Market share, budget allocation</li>
<li><strong>Few categories:</strong> 2-7 categories maximum</li>
<li><strong>Composition analysis:</strong> What percentage each part represents</li>
<li><strong>Proportional relationships:</strong> How categories relate to total</li>
<li><strong>Simple message:</strong> One dominant category or balanced distribution</li>
</ul>

<h4><strong>Avoid Pie Charts When:</strong></h4>
<ul>
<li><strong>Too many slices:</strong> 8+ categories create confusion</li>
<li><strong>Similar percentages:</strong> Hard to distinguish between similar slices</li>
<li><strong>Precise comparison needed:</strong> Small differences are hard to see</li>
<li><strong>Multiple datasets:</strong> Can't easily compare multiple pie charts</li>
</ul>

` + Utils.createBlueTable(
  ['Situation', 'Best Choice', 'Example'],
  [
    ['Customer satisfaction (5 ratings)', 'Bar Chart', 'Easy to compare rating levels'],
    ['Sales by 3 regions', 'Either works', 'Bar for comparison, Pie for share'],
    ['Website traffic sources', 'Pie Chart', 'Shows traffic composition'],
    ['Monthly sales trends', 'Bar Chart', 'Shows changes over time'],
    ['Survey: 15 job categories', 'Bar Chart', 'Too many for pie chart'],
    ['Budget: 4 expense types', 'Pie Chart', 'Perfect for showing allocation']
  ]
) + `

<p><strong>Pro Tip:</strong> Research shows people are better at judging differences in length (bar charts) than differences in angles (pie charts). Use bar charts for comparisons, pie charts for composition!</p>

<h3><strong>ML/AI Applications:</strong></h3>
<ul>
<li><strong>Class Distribution:</strong> Use bar charts to identify imbalanced datasets</li>
<li><strong>Feature Analysis:</strong> Bar charts for categorical feature frequencies</li>
<li><strong>Model Performance:</strong> Bar charts to compare accuracy across models</li>
<li><strong>Ensemble Models:</strong> Pie charts to show model contribution weights</li>
</ul>`,
      timestamp: new Date().toLocaleString(),
    }
  ],
  quantitative: [
    {
      id: 20,
      title: "Frequency Distribution for Quantitative Variables",
      category: "quantitative-frequency",
      content: `<h3><strong>Quantitative Variable Frequency Distribution</strong></h3>

<p>A frequency distribution is a tabular summary showing the number of observations in each of several nonoverlapping categories or classes. With quantitative data, we must carefully define the nonoverlapping classes.</p>

<h4><strong>Example: Audit Time Data</strong></h4>
<p>Consider year-end audit completion times (in days) for 20 clients:</p>
<p><strong>Raw Data:</strong> 12, 14, 14, 13, 18, 16, 16, 25, 19, 18, 17, 18, 17, 26, 21, 33, 28, 23, 23, 21</p>

<h3><strong>Three Steps to Create Classes:</strong></h3>

<h4><strong>1. Determine Number of Classes</strong></h4>
<ul>
<li><strong>General guideline:</strong> Use between 5 and 20 classes</li>
<li><strong>Small datasets:</strong> 5-6 classes (like our n=20 example)</li>
<li><strong>Large datasets:</strong> More classes needed</li>
<li><strong>Goal:</strong> Show variation without too few items per class</li>
</ul>

<h4><strong>2. Determine Class Width</strong></h4>
<p><strong>Formula:</strong> Approximate class width = (Largest value - Smallest value) / Number of classes</p>
<p><strong>For audit data:</strong> (33 - 12) / 5 = 4.2 ≈ 5 days (rounded for convenience)</p>

<h4><strong>3. Determine Class Limits</strong></h4>
<ul>
<li><strong>Lower class limit:</strong> Smallest possible value in class</li>
<li><strong>Upper class limit:</strong> Largest possible value in class</li>
<li><strong>Each data item belongs to exactly one class</strong></li>
</ul>

<div style="background-color: #eef2f9; border-left: 4px solid #4285f4; padding: 15px; margin: 15px 0;">
  <h4><strong>A Note on Judgment in Class Creation</strong></h4>
  <p>No single frequency distribution is best for a data set. Different people may construct different, but equally acceptable, frequency distributions. The goal is to reveal the natural grouping and variation in the data.</p>
  <p>In practice, the number of classes and the appropriate class width are determined by <strong>trial and error</strong>. An analyst uses judgment to determine the combination of class number and width that provides the best summary. The rounding of class width (e.g., 4.2 to 5) is also a matter of preference for convenience.</p>
</div>

<h4><strong>Audit Time Frequency Distribution:</strong></h4>
` + Utils.createBlueTable(
  ['Audit Time (days)', 'Frequency'],
  [
    ['10-14', '4'],
    ['15-19', '8'],
    ['20-24', '5'],
    ['25-29', '2'],
    ['30-34', '1'],
    ['Total', '20']
  ]
) + `

<h4><strong>Key Insights:</strong></h4>
<ul>
<li><strong>Most frequent class:</strong> 15-19 days (8 out of 20 audits)</li>
<li><strong>Only 1 audit</strong> required 30+ days</li>
<li><strong>Class width:</strong> 5 days (difference between consecutive lower limits: 15-10=5)</li>
</ul>

<h4><strong>Class Midpoints:</strong></h4>
<p>Midpoint = (Lower limit + Upper limit) / 2</p>
` + Utils.createBlueTable(
  ['Class', 'Lower Limit', 'Upper Limit', 'Midpoint'],
  [
    ['10-14', '10', '14', '12'],
    ['15-19', '15', '19', '17'],
    ['20-24', '20', '24', '22'],
    ['25-29', '25', '29', '27'],
    ['30-34', '30', '34', '32']
  ]
) + ``,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 21,
      title: "Relative and Percent Frequency for Quantitative Data",
      category: "quantitative-relative",
      content: `<h3><strong>Relative and Percent Frequency Distributions</strong></h3>

<p>We define relative frequency and percent frequency for quantitative data the same way as for categorical data:</p>
<ul>
<li><strong>Relative frequency:</strong> Frequency of class / n</li>
<li><strong>Percent frequency:</strong> Relative frequency × 100</li>
</ul>

<h4><strong>Audit Time - Complete Distribution:</strong></h4>
` + Utils.createBlueTable(
  ['Audit Time (days)', 'Frequency', 'Relative Frequency', 'Percent Frequency'],
  [
    ['10-14', '4', '4/20 = 0.20', '20%'],
    ['15-19', '8', '8/20 = 0.40', '40%'],
    ['20-24', '5', '5/20 = 0.25', '25%'],
    ['25-29', '2', '2/20 = 0.10', '10%'],
    ['30-34', '1', '1/20 = 0.05', '5%'],
    ['Total', '20', '1.00', '100%']
  ]
) + `

<h4><strong>Interpretation:</strong></h4>
<ul>
<li><strong>40% of audits</strong> required 15-19 days</li>
<li><strong>Only 5% of audits</strong> required 30+ days</li>
<li><strong>85% of audits</strong> completed in 24 days or less (20% + 40% + 25%)</li>
</ul>`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 22,
      title: "Cumulative Distributions for Quantitative Data",
      category: "quantitative-cumulative", 
      content: `<h3><strong>Cumulative Frequency Distributions</strong></h3>

<p>Shows the number of data items with values <strong>less than or equal to</strong> the upper class limit of each class.</p>

<h4><strong>Audit Time - Cumulative Distributions:</strong></h4>
` + Utils.createBlueTable(
  ['Audit Time (days)', 'Cumulative Frequency', 'Cumulative Relative Frequency', 'Cumulative Percent Frequency'],
  [
    ['≤ 14', '4', '0.20', '20%'],
    ['≤ 19', '12', '0.60', '60%'],
    ['≤ 24', '17', '0.85', '85%'],
    ['≤ 29', '19', '0.95', '95%'],
    ['≤ 34', '20', '1.00', '100%']
  ]
) + `

<h4><strong>How to Calculate Cumulative Frequency:</strong></h4>
<ul>
<li><strong>≤ 14:</strong> 4 (just the 10-14 class)</li>
<li><strong>≤ 19:</strong> 4 + 8 = 12 (10-14 + 15-19 classes)</li>
<li><strong>≤ 24:</strong> 4 + 8 + 5 = 17 (10-14 + 15-19 + 20-24 classes)</li>
<li><strong>≤ 29:</strong> 4 + 8 + 5 + 2 = 19</li>
<li><strong>≤ 34:</strong> 4 + 8 + 5 + 2 + 1 = 20 (all data)</li>
</ul>

<h4><strong>Key Insights:</strong></h4>
<ul>
<li><strong>85% of audits</strong> completed in 24 days or less</li>
<li><strong>95% of audits</strong> completed in 29 days or less</li>
<li><strong>Only 20%</strong> completed in 14 days or less</li>
</ul>`,
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 23,
      title: "Graphical Displays: Dot Plots, Histograms, and Stem-and-Leaf",
      category: "quantitative-graphics",
      content: `<h3><strong>Graphical Displays for Quantitative Data</strong></h3>

<h4><strong>1. Dot Plot</strong></h4>
<div class='chart-container' data-chart='dotplot' id='auditTimeDotPlot' style='width: 100%; height: 300px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px; padding: 10px;'></div>
<ul>
<li><strong>Simplest graphical summary</strong></li>
<li><strong>Horizontal axis:</strong> Shows data range</li>
<li><strong>Dots:</strong> Each data value represented above axis</li>
<li><strong>Useful for:</strong> Comparing distributions, showing details</li>
</ul>

<h4><strong>2. Histogram</strong></h4>
<div class='chart-container' data-chart='histogram' id='auditTimeHistogram' style='width: 100%; height: 300px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px; padding: 10px;'></div>
<ul>
<li><strong>Most common display</strong> for quantitative data</li>
<li><strong>Horizontal axis:</strong> Variable of interest (class intervals)</li>
<li><strong>Vertical axis:</strong> Frequency, relative frequency, or percent frequency</li>
<li><strong>Key feature:</strong> Adjacent rectangles touch, unlike in a bar graph. This lack of natural separation helps show that all values between the lower limit of the first class and the upper limit of the last class are possible.</li>
</ul>

<h4><strong>Histogram Shapes:</strong></h4>
<ul>
<li><strong>Skewed Left:</strong> Tail extends left (exam scores - few low scores)</li>
<li><strong>Skewed Right:</strong> Tail extends right (housing prices - few expensive houses)</li>
<li><strong>Symmetric:</strong> Left tail mirrors right tail (SAT scores, heights)</li>
<li><strong>Highly Skewed Right:</strong> Long right tail (salaries, purchase amounts)</li>
</ul>

<h4><strong>3. Stem-and-Leaf Display</strong></h4>
<p>A stem-and-leaf display is a graphical display used to show simultaneously the <strong>rank order</strong> and <strong>shape</strong> of a distribution of data. It's a hybrid between a table and a graph.</p>

<h5><strong>Construction Process (Aptitude Test Example)</strong></h5>
<p>Consider the following scores from a 150-question aptitude test given to 50 individuals:</p>
<p><strong>Raw Data:</strong> 112, 72, 69, 97, 107, 73, 92, 76, 86, 73, 126, 128, 118, 127, 124, 82, 104, 132, 134, 83, 92, 108, 96, 100, 92, 115, 76, 91, 102, 81, 95, 141, 81, 80, 106, 84, 119, 113, 98, 75, 68, 98, 115, 106, 95, 100, 85, 94, 106, 119</p>

<h6><strong>Step 1: Define Stems and Leaves & Place Unordered Leaves</strong></h6>
<p>We arrange the leading digits of each data value (the "stem") to the left of a vertical line. To the right, we record the last digit for each data value (the "leaf").</p>

<h6><strong>Step 2: Sort Leaves (Final Display)</strong></h6>
<pre>
6 | 8 9
7 | 2 3 3 5 6 6
8 | 0 1 1 2 3 4 5 6
9 | 1 2 2 2 4 5 5 6 7 8 8
10| 0 0 2 4 6 6 6 7 8
11| 2 3 5 5 8 9 9
12| 4 6 7 8
13| 2 4
14| 1
</pre>

<h5><strong>How to Read the Display</strong></h5>
<ul>
    <li>The numbers to the left of the line (6, 7, 8...) are the <strong>stems</strong>.</li>
    <li>Each digit to the right is a <strong>leaf</strong>.</li>
    <li>Example: The row <code>7 | 2 3 3 5 6 6</code> indicates six data values: 72, 73, 73, 75, 76, and 76.</li>
    <li><strong>Shape:</strong> If you rotate the display 90 degrees counter-clockwise, it provides a picture of the data similar to a histogram.</li>
</ul>

<h5><strong>Advantages Over a Histogram</strong></h5>
<ol>
    <li>The stem-and-leaf display is easier to construct by hand.</li>
    <li>Within a class interval, it provides more information because it shows the <strong>actual data values</strong>.</li>
</ol>

<h5><strong>Advanced Technique 1: Stretched Stem-and-Leaf Display</strong></h5>
<p>If the original display seems too condensed, you can stretch it by using two or more stems for each leading digit. For example, one stem for leaves 0-4 and a second for leaves 5-9.</p>
<pre>
6 | 8 9
7 | 2 3 3
7 | 5 6 6
8 | 0 1 1 2 3 4
8 | 5 6
...and so on.
</pre>
<p>This is similar to a frequency distribution with smaller class intervals (e.g., 70-74, 75-79).</p>

<h5><strong>Advanced Technique 2: Handling More Digits with a Leaf Unit</strong></h5>
<p>For data with many digits (e.g., 1565, 1852), we can use a "leaf unit" to keep the display clean. A single digit is used for the leaf, and the leaf unit tells us how to interpret it.</p>
<p><strong>Example: Hamburger Sales Data</strong></p>
<pre>
Leaf unit = 10
15 | 6
16 | 4 7
17 | 3 6 9
18 | 1 5 5 8
19 | 1 5 6
20 | 0 4
</pre>
<p><strong>How to Read:</strong> Take the first stem and leaf: <code>15 | 6</code>. This becomes 156. We then multiply by the leaf unit: 156 * 10 = 1560. This is an approximation of the original value (1565). This method allows for summarizing large numbers while maintaining the display's structure.</p>

<h3><strong>When to Use Each Method:</strong></h3>
` + Utils.createBlueTable(
  ['Method', 'Best For', 'Advantages', 'Limitations'],
  [
    ['Dot Plot', 'Small datasets, comparisons', 'Shows all data points', 'Gets cluttered with large n'],
    ['Histogram', 'Large datasets, shape analysis', 'Clear shape visualization', 'Loses individual data points'],
    ['Stem-and-Leaf', 'Medium datasets, detail + shape', 'Shows actual values + shape', 'Can be unwieldy for large n'],
    ['Frequency Table', 'All sizes, precise counts', 'Exact frequencies', 'Less visual impact']
  ]
) + ``,
      timestamp: new Date().toLocaleString(),
    }
  ],
  twoVariables: [
    {
      id: 24,
      title: "Summarizing Data for Two Variables Using Crosstabulation",
      category: "crosstabulation",
      content: `<h3><strong>Summarizing Data for Two Variables Using Tables</strong></h3>
<p>Often, a manager needs to summarize data for two variables to reveal the relationship (if any) between them. A <strong>crosstabulation</strong> is a tabular summary of data for two variables. It can be used for two categorical variables, two quantitative variables, or one of each.</p>

<h4><strong>Example: Restaurant Quality and Meal Price</strong></h4>
<p>Let's analyze data from 300 restaurants in Los Angeles, looking at their Quality Rating (categorical) and Meal Price (quantitative).</p>

<h5><strong>Crosstabulation of Quality Rating and Meal Price</strong></h5>
<p>To create the crosstabulation, the quantitative ` + "`Meal Price`" + ` variable is grouped into classes. We can then count the number of restaurants that fall into each combination of categories.</p>
` + Utils.createBlueTable(
  ['Quality Rating', '$10-19', '$20-29', '$30-39', '$40-49', 'Total'],
  [
    ['Good', '42', '40', '2', '0', '84'],
    ['Very Good', '34', '64', '46', '6', '150'],
    ['Excellent', '2', '14', '28', '22', '66'],
    ['Total', '78', '118', '76', '28', '300']
  ]
) + `

<h5><strong>Interpreting the Crosstabulation</strong></h5>
<ul>
    <li>The greatest number of restaurants (64) have a "Very Good" rating and a meal price in the $20-29 range.</li>
    <li>Only 2 restaurants have an "Excellent" rating and a meal price in the $10-19 range.</li>
    <li>The margins of the table give us the frequency distribution for each variable individually. For example, 84 restaurants were rated "Good," and 78 restaurants have a meal price between $10-19.</li>
</ul>

<h4><strong>Using Row Percentages for Deeper Insight</strong></h4>
<p>The primary value of a crosstabulation is understanding the relationship between the variables. To see this more clearly, we can convert the frequencies into row percentages.</p>

<h5><strong>Row Percentages for Each Quality Rating Category</strong></h5>
` + Utils.createBlueTable(
  ['Quality Rating', '$10-19', '$20-29', '$30-39', '$40-49', 'Total'],
  [
    ['Good', '50.0%', '47.6%', '2.4%', '0.0%', '100%'],
    ['Very Good', '22.7%', '42.7%', '30.6%', '4.0%', '100%'],
    ['Excellent', '3.0%', '21.2%', '42.4%', '33.4%', '100%']
  ]
) + `

<h5><strong>Analysis of Row Percentages</strong></h5>
<ul>
    <li>For "Good" restaurants, the overwhelming majority are in the lower price ranges (50% in $10-19 and 47.6% in $20-29).</li>
    <li>For "Excellent" restaurants, the pattern is reversed. The greatest percentages are for the most expensive meals (42.4% in $30-39 and 33.4% in $40-49).</li>
    <li><strong>Conclusion:</strong> The data clearly show that restaurants with higher meal prices tend to receive higher quality ratings.</li>
</ul>

<p>Crosstabulations are a widely used and powerful tool for investigating the relationship between two variables, forming the basis for many statistical reports.</p>
`
    },
    {
      id: 25,
      title: "Simpson's Paradox: A Warning About Aggregated Data",
      category: "simpsons-paradox",
      content: `<h3><strong>Simpson’s Paradox: A Warning About Aggregated Data</strong></h3>
<p>When data from two or more crosstabulations are combined (aggregated), the conclusions drawn from the summary table can be the complete opposite of the conclusions from the individual tables. This reversal of conclusions is called <strong>Simpson’s paradox</strong>.</p>

<h4><strong>Example: Verdicts for Two Judges in Two Courts</strong></h4>
<p>Judges Ron Luckett and Dennis Kendall presided over cases in Common Pleas Court and Municipal Court. Some of their verdicts were appealed. Let's analyze their records.</p>

<h5><strong>Aggregated Data: Combining Both Courts</strong></h5>
<p>If we combine the data from both courts into a single table, we get the following result, which compares the two judges directly.</p>
` + Utils.createBlueTable(
  ['Verdict', 'Judge Luckett', 'Judge Kendall', 'Total'],
  [
    ['Upheld', '129 (86%)', '110 (88%)', '239'],
    ['Reversed', '21 (14%)', '15 (12%)', '36'],
    ['Total', '150 (100%)', '125 (100%)', '275']
  ]
) + `
<p><strong>Conclusion from Aggregated Data:</strong> Judge Kendall appears to have a better record, with 88% of his verdicts upheld, compared to Judge Luckett's 86%.</p>

<h5><strong>Unaggregated Data: Looking at Each Court Separately</strong></h5>
<p>Now, let's look at the data for each court individually. This reveals the "hidden variable" of the type of court.</p>

<div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
    <div style="width: 48%;">
        <h6><strong>Judge Luckett's Record</strong></h6>
` + Utils.createBlueTable(
  ['Verdict', 'Common Pleas', 'Municipal', 'Total'],
  [
    ['Upheld', '29 (91%)', '100 (85%)', '129'],
    ['Reversed', '3 (9%)', '18 (15%)', '21'],
    ['Total', '32 (100%)', '118 (100%)', '150']
  ]
) + `
    </div>
    <div style="width: 48%;">
        <h6><strong>Judge Kendall's Record</strong></h6>
` + Utils.createBlueTable(
  ['Verdict', 'Common Pleas', 'Municipal', 'Total'],
  [
    ['Upheld', '90 (90%)', '20 (80%)', '110'],
    ['Reversed', '10 (10%)', '5 (20%)', '15'],
    ['Total', '100 (100%)', '25 (100%)', '125']
  ]
) + `
    </div>
</div>

<h5><strong>Analysis of Unaggregated Data</strong></h5>
<ul>
    <li><strong>In Common Pleas Court:</strong> Judge Luckett has a 91% upheld rate, while Judge Kendall has a 90% rate. <strong>Luckett is better.</strong></li>
    <li><strong>In Municipal Court:</strong> Judge Luckett has an 85% upheld rate, while Judge Kendall has an 80% rate. <strong>Luckett is better again.</strong></li>
</ul>

<h4><strong>The Paradox Explained</strong></h4>
<p>The conclusion is completely reversed! Judge Luckett has a better record in <strong>both</strong> courts, but his record looks worse when the data is aggregated. Why?</p>
<p>The reversal is caused by the <strong>hidden variable</strong> of the court type. Municipal Court has a much higher reversal rate for both judges. Judge Luckett tried a very large number of his cases (118 out of 150) in the more difficult Municipal Court, which dragged down his overall average. Judge Kendall tried most of his cases (100 out of 125) in the easier Common Pleas Court.</p>

<div style="background-color: #fce8e6; border-left: 4px solid #d93025; padding: 15px; margin: 15px 0;">
  <h4><strong>Key Takeaway</strong></h4>
  <p>Because of the possibility of Simpson’s paradox, be very careful when drawing conclusions from aggregated crosstabulation data. Always investigate whether a hidden variable could be affecting the results. Unaggregated data often provides better and more accurate insight.</p>
</div>
`
    }
  ],
  graphicalDisplay: [
    {
      id: 26,
      title: "Graphical Displays for Two Variables",
      category: "two-variables-graphical",
      content: `<h3><strong>Summarizing Data for Two Variables Using Graphical Displays</strong></h3>
<p>While crosstabulations are powerful, graphical displays are often more useful for recognizing patterns and trends. Creative visualizations can lead to powerful, common-sense inferences.</p>

<hr>

<h4><strong>1. Scatter Diagram and Trendline</strong></h4>
<p>A <strong>scatter diagram</strong> is a graphical display of the relationship between two quantitative variables. A <strong>trendline</strong> is a line that provides an approximation of the relationship.</p>
<h5><strong>Example: Stereo Store Advertising vs. Sales</strong></h5>
<p>A stereo store tracked the number of TV commercials shown over 10 weeks and the corresponding sales data.</p>
` + Utils.createBlueTable(
  ['Week', 'Number of Commercials (x)', 'Sales ($100s) (y)'],
  [
    ['1', '2', '50'],
    ['2', '5', '57'],
    ['3', '1', '41'],
    ['4', '3', '54'],
    ['5', '4', '54'],
    ['6', '1', '38'],
    ['7', '5', '63'],
    ['8', '3', '48'],
    ['9', '4', '59'],
    ['10', '2', '46']
  ]
) + `
<div class='chart-container' data-chart='scatter' id='stereoScatterPlot' style='width: 100%; height: 400px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px; padding: 10px;'></div>
<h5><strong>Interpretation of the Scatter Diagram</strong></h5>
<ul>
    <li>There is a <strong>positive relationship</strong> between commercials and sales. Higher sales are associated with more commercials.</li>
    <li>The relationship is not perfect (the points don't form a perfect line), but the trendline clearly shows the positive association.</li>
</ul>

<hr>

<h4><strong>2. Side-by-Side and Stacked Bar Charts</strong></h4>
<p>These are extensions of basic bar charts used to display and compare two variables on the same chart, which helps in understanding their relationship.</p>

<h5><strong>Side-by-Side Bar Chart</strong></h5>
<p>This is a graphical display for depicting multiple bar charts on the same display. Let's revisit the restaurant quality and meal price data.</p>
<div class='chart-container' data-chart='side-by-side-bar' id='restaurantSideBySideBarChart' style='width: 100%; height: 400px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px; padding: 10px;'></div>
<h5><strong>Interpretation of the Side-by-Side Chart</strong></h5>
<ul>
    <li>In the lowest price category ($10-$19), ratings are mostly "Good" and "Very Good," with very few "Excellent" ratings.</li>
    <li>In the highest price category ($40-$49), the pattern reverses, with mostly "Excellent" ratings and no "Good" ratings.</li>
    <li>As price increases (left to right), the "Good" bars (blue) decrease, while the "Excellent" bars (green) generally increase, showing a clear positive relationship between price and quality.</li>
</ul>

<h5><strong>Stacked Bar Chart</strong></h5>
<p>A stacked bar chart breaks each bar into rectangular segments, showing the relative frequency of each class, similar to a pie chart.</p>
<div class='chart-container' data-chart='stacked-bar' id='restaurantStackedBarChart' style='width: 100%; height: 400px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px; padding: 10px;'></div>
<h5><strong>Interpretation of the Stacked Chart</strong></h5>
<p>Because this chart uses percentages, it shows the relationship even more clearly. As you move from the low-price categories to the high-price categories, the proportion of the bar that is blue ("Good") shrinks, while the proportion that is green ("Excellent") grows dramatically.</p>
`
    }
  ],
  bestPractices: [
    {
      id: 27,
      title: "Data Visualization: Best Practices in Creating Effective Graphical Displays",
      category: "best-practices",
      content: `<h3><strong>Data Visualization: Best Practices in Creating Effective Graphical Displays</strong></h3>
<p>Data visualization is the use of graphical displays to summarize and present information about a data set. The goal is to communicate as effectively and clearly as possible the key information about the data.</p>

<h4><strong>Creating Effective Graphical Displays</strong></h4>
<p>Let's examine an example from Gustin Chemical showing planned versus actual sales by region:</p>

<h5><strong>Gustin Chemical Sales Data</strong></h5>
` + Utils.createBlueTable(
  ['Sales Region', 'Planned Sales ($1000s)', 'Actual Sales ($1000s)'],
  [
    ['Northeast', '540', '447'],
    ['Northwest', '420', '447'],
    ['Southeast', '575', '556'],
    ['Southwest', '360', '341']
  ]
) + `

<p>This data contains two quantitative variables (planned sales and actual sales) and one categorical variable (sales region). A side-by-side bar chart would enable management to:</p>
<ul>
<li>Visualize how each region performed relative to planned sales</li>
<li>Compare sales performance across regions simultaneously</li>
</ul>

<h4><strong>Guidelines for Effective Graphical Displays</strong></h4>
<div style="background-color: #e8f4fd; border-left: 4px solid #2196F3; padding: 15px; margin: 15px 0;">
<p>Creating an effective graphical display is as much <strong>art</strong> as it is <strong>science</strong>. Follow these guidelines:</p>
<ul>
<li><strong>Give the display a clear and concise title</strong></li>
<li><strong>Keep the display simple</strong> - Don't use three dimensions when two dimensions are sufficient</li>
<li><strong>Clearly label each axis</strong> and provide the units of measure</li>
<li><strong>Use distinct colors</strong> if color is used to distinguish categories</li>
<li><strong>Include a legend</strong> if multiple colors or line types are used, and place it close to the data representation</li>
<li><strong>Start the scale at zero</strong> when appropriate</li>
<li><strong>Use spacing effectively</strong> to show distinct categories</li>
</ul>
</div>

<h4><strong>Choosing the Type of Graphical Display</strong></h4>
<p>Different displays serve different purposes. Here's a comprehensive guide:</p>

<h5><strong>Displays Used to Show the Distribution of Data</strong></h5>
` + Utils.createBlueTable(
  ['Display Type', 'Purpose', 'Best For'],
  [
    ['Bar Chart', 'Show frequency/relative frequency distribution', 'Categorical data'],
    ['Pie Chart', 'Show relative frequency and percent frequency', 'Categorical data (≤7 categories)'],
    ['Dot Plot', 'Show distribution over entire range', 'Quantitative data (small datasets)'],
    ['Histogram', 'Show frequency distribution over class intervals', 'Quantitative data (larger datasets)'],
    ['Stem-and-Leaf', 'Show rank order and shape simultaneously', 'Quantitative data (medium datasets)']
  ]
) + `

<h5><strong>Displays Used to Make Comparisons</strong></h5>
` + Utils.createBlueTable(
  ['Display Type', 'Purpose', 'Best For'],
  [
    ['Side-by-Side Bar Chart', 'Compare two variables', 'Comparing categories across groups'],
    ['Stacked Bar Chart', 'Compare relative frequency/percent frequency', 'Two categorical variables (composition)']
  ]
) + `

<h5><strong>Displays Used to Show Relationships</strong></h5>
` + Utils.createBlueTable(
  ['Display Type', 'Purpose', 'Best For'],
  [
    ['Scatter Diagram', 'Show relationship between variables', 'Two quantitative variables'],
    ['Trendline', 'Approximate relationship', 'Linear relationships in scatter plots']
  ]
) + `

<h4><strong>Data Dashboards</strong></h4>
<p>A <strong>data dashboard</strong> is a set of visual displays that organizes and presents information used to monitor performance in a manner that is easy to read, understand, and interpret.</p>

<h5><strong>Key Concepts</strong></h5>
<ul>
<li><strong>Analogy:</strong> Like a car dashboard showing speed, fuel, temperature - provides critical information at a glance</li>
<li><strong>KPIs (Key Performance Indicators):</strong> Metrics that need monitoring (inventory, daily sales, on-time deliveries, revenue)</li>
<li><strong>Goal:</strong> Provide timely summary information that informs rather than overwhelms</li>
</ul>

<h5><strong>Dashboard Design Principles</strong></h5>
<ul>
<li><strong>Minimize screen scrolling</strong></li>
<li><strong>Avoid unnecessary color or 3D displays</strong></li>
<li><strong>Use borders between charts</strong> to improve readability</li>
<li><strong>Follow the "simpler is better" rule</strong></li>
<li><strong>Update in real-time</strong> when possible</li>
<li><strong>Group related information</strong> logically</li>
</ul>

<h5><strong>Dashboard Applications by Management Level</strong></h5>
` + Utils.createBlueTable(
  ['Level', 'Purpose', 'Example KPIs', 'Update Frequency'],
  [
    ['Operational', 'Day-to-day decisions', 'Call center volume, staffing levels, current inventory', 'Real-time'],
    ['Tactical', 'Medium-term planning', 'On-time performance, carrier costs, monthly sales', 'Daily/Weekly'],
    ['Strategic', 'Long-term planning', 'Financial health, capacity utilization, quarterly revenue', 'Weekly/Monthly']
  ]
) + `

<h4><strong>Example: IT Call Center Dashboard</strong></h4>
<p>A real-world example from Grogan Oil Company's IT call center demonstrates effective dashboard design:</p>

<h5><strong>Dashboard Components:</strong></h5>
<ul>
<li><strong>Stacked Bar Chart:</strong> Call volume by problem type over time</li>
<li><strong>Pie Chart:</strong> Time breakdown (Software 46%, Internet 18%, Email 22%, Idle 14%)</li>
<li><strong>Side-by-Side Bar Chart:</strong> Call volume by office location</li>
<li><strong>Bar Chart:</strong> Unresolved cases beyond 15 minutes</li>
<li><strong>Histogram:</strong> Distribution of resolution times</li>
</ul>

<h5><strong>Key Insights Provided:</strong></h5>
<ul>
<li><strong>Staffing Optimization:</strong> Call mix and idle time help determine staffing levels</li>
<li><strong>Problem Identification:</strong> Location-specific issues can be quickly identified</li>
<li><strong>Resource Allocation:</strong> Long-unresolved cases (like case T57 at 300+ minutes) get attention</li>
<li><strong>Performance Monitoring:</strong> Resolution time distribution shows efficiency</li>
</ul>

<div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 15px; margin: 15px 0;">
<h4><strong>Remember: The Art and Science of Visualization</strong></h4>
<p>Effective data visualization combines technical knowledge (the science) with design intuition (the art). The best visualizations make complex data immediately understandable and actionable for decision-makers.</p>
</div>
`
    }
  ]
};