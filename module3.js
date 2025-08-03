// Module 3 notes and data - Measures of Location
const MODULE3_NOTES = {
  mean: [
    {
      id: 29,
      title: "The Mean: Arithmetic Average",
      category: "mean-calculation",
      content: `<h3><strong>The Mean (Arithmetic Average)</strong></h3>
<p>Perhaps the most important measure of location is the mean, or average value, for a variable. It provides a measure of central location for the data. If the data are for a sample, the mean is denoted by <strong>x̄</strong>; if the data are for a population, it is denoted by the Greek letter <strong>μ</strong>.</p>

<h4><strong>Sample Mean (x̄)</strong></h4>
<p>For a sample with n observations, the formula for the sample mean is:</p>
<p class="formula">x̄ = Σxi / n</p>
<p>Where Σ (sigma) is the summation sign, and xi represents each observation.</p>

<h5><strong>Example 1: Class Size Data</strong></h5>
<p>Consider the class sizes for a sample of five college classes: 46, 54, 42, 46, 32.</p>
<p class="formula">x̄ = (46 + 54 + 42 + 46 + 32) / 5 = 220 / 5 = 44</p>
<p>The sample mean class size is 44 students. The mean acts as the "center of balance" for the data.</p>

<h5><strong>Example 2: Monthly Starting Salaries</strong></h5>
<p>For a sample of 12 business school graduates, the mean monthly starting salary is calculated as:</p>
` + Utils.createBlueTable(
  ['Graduate', 'Starting Salary ($)', 'Graduate', 'Starting Salary ($)'],
  [
    ['1', '3850', '7', '3890'],
    ['2', '3950', '8', '4130'],
    ['3', '4050', '9', '3940'],
    ['4', '3880', '10', '4325'],
    ['5', '3755', '11', '3920'],
    ['6', '3710', '12', '3880']
  ]
) + `
<p class="formula">x̄ = (3850 + 3950 + ... + 3880) / 12 = 47,280 / 12 = $3,940</p>
<p>The sample mean x̄ is a <strong>point estimator</strong> of the population mean μ.</p>

<h4><strong>Population Mean (μ)</strong></h4>
<p>The formula for the mean of a population is the same, but with different notation. The number of observations in a population is denoted by N.</p>
<p class="formula">μ = Σxi / N</p>

<hr>

<h3><strong>Weighted Mean</strong></h3>
<p>In some cases, each observation should not be treated with equal importance. A <strong>weighted mean</strong> is computed by giving each observation a weight that reflects its relative importance.</p>
<p class="formula">x̄w = (Σwi * xi) / (Σwi)</p>
<p>Where wi is the weight for observation i.</p>

<h5><strong>Example: Raw Material Purchases</strong></h5>
<p>Consider five purchases of a raw material where both cost and quantity vary.</p>
` + Utils.createBlueTable(
  ['Purchase', 'Cost per Pound (xi)', 'Number of Pounds (wi)'],
  [
    ['1', '$3.00', '1200'],
    ['2', '$3.40', '500'],
    ['3', '$2.80', '2750'],
    ['4', '2.90', '1000'],
    ['5', '$3.25', '800']
  ]
) + `
<p>To find the mean cost per pound, we must weight each cost by the quantity purchased.</p>
<p class="formula">x̄w = [(1200*3.00) + (500*3.40) + (2750*2.80) + (1000*2.90) + (800*3.25)] / [1200 + 500 + 2750 + 1000 + 800]</p>
<p class="formula">x̄w = 18,500 / 6250 = $2.96</p>

<div style="background-color: #fce8e6; border-left: 4px solid #d93025; padding: 15px; margin: 15px 0;">
  <h4><strong>A Common Mistake</strong></h4>
  <p>If we had calculated a simple mean of the costs, we would get a misleading result:</p>
  <p class="formula">(3.00 + 3.40 + 2.80 + 2.90 + 3.25) / 5 = $3.07</p>
  <p>This overstates the true mean cost because it doesn't account for the fact that the largest purchase was made at the lowest price.</p>
</div>

<p>The choice of weights depends on the application. For a Grade Point Average (GPA), the weights are the number of credit hours for each course.</p>
`
    }
  ],
  median: [
    {
      id: 30,
      title: "The Median: The Middle Value",
      category: "median-calculation",
      content: `<h3><strong>The Median: The Middle Value</strong></h3>
<p>The median is another measure of central location. It is the value in the middle when the data are arranged in ascending order (smallest value to largest value).</p>

<h4><strong>How to Calculate the Median</strong></h4>
<ol>
    <li>Arrange the data in ascending order.</li>
    <li>
        <ul>
            <li>For an <strong>odd</strong> number of observations, the median is the middle value.</li>
            <li>For an <strong>even</strong> number of observations, the median is the average of the two middle values.</li>
        </ul>
    </li>
</ol>

<h5><strong>Example 1: Odd Number of Observations (Class Size Data)</strong></h5>
<p>Data: 46, 54, 42, 46, 32</p>
<p><strong>Step 1: Sort the data:</strong> 32, 42, <strong>46</strong>, 46, 54</p>
<p>Because n=5 is odd, the median is the middle value. Thus, the median class size is <strong>46</strong> students.</p>

<h5><strong>Example 2: Even Number of Observations (Salary Data)</strong></h5>
<p>We first arrange the data in ascending order:</p>
<p>3710, 3755, 3850, 3880, 3880, <strong>3890</strong>, <strong>3920</strong>, 3940, 3950, 4050, 4130, 4325</p>
<p>Because n=12 is even, we identify the middle two values: 3890 and 3920. The median is the average of these values.</p>
<p class="formula">Median = (3890 + 3920) / 2 = 3905</p>

<div style="background-color: #eef2f9; border-left: 4px solid #4285f4; padding: 15px; margin: 15px 0;">
  <h4><strong>A Conceptual Approach: Trimming</strong></h4>
  <p>You can also find the median by trimming pairs of the lowest and highest values until you are left with one (for odd n) or two (for even n) values. If two values remain, average them.</p>
</div>

<h4><strong>Median vs. Mean: When to Use Which?</strong></h4>
<p>The mean is influenced by extremely small and large data values (outliers). In these cases, the median is often the preferred measure of central location.</p>
<p>If we change the highest starting salary from $4325 to $10,000:</p>
<ul>
    <li>The <strong>mean</strong> changes dramatically from $3940 to $4413.</li>
    <li>The <strong>median</strong> of $3905 is unchanged.</li>
</ul>
<p>For data like annual income or property values, where a few extremely high values can skew the data, the median provides a better measure of central location.</p>
`
    }
  ],
  mode: [
    {
      id: 31,
      title: "The Mode and Geometric Mean",
      category: "mode-geometric-mean",
      content: `<h3><strong>The Mode: The Most Frequent Value</strong></h3>
<p>The mode is the value that occurs with the greatest frequency.</p>
<ul>
    <li>If a single value occurs most often, the data is <strong>unimodal</strong>.</li>
    <li>If two values tie for the greatest frequency, the data is <strong>bimodal</strong>.</li>
    <li>If more than two values tie, the data is <strong>multimodal</strong>.</li>
</ul>

<h5><strong>Example 1: Class Sizes</strong></h5>
<p>Data: 46, 54, 42, 46, 32</p>
<p>The value 46 occurs with a frequency of 2, which is the highest. The mode is <strong>46</strong>.</p>

<h5><strong>Example 2: Starting Salaries</strong></h5>
<p>The only salary that occurs more than once is $3880. The mode is <strong>$3880</strong>.</p>

<hr>

<h3><strong>Geometric Mean</strong></h3>
<p>The geometric mean is a measure of location that is calculated by finding the nth root of the product of n values. It is often used in analyzing growth rates in financial data, where the simple arithmetic mean can provide misleading results.</p>
<p class="formula">x̄g = n√(x1 * x2 * ... * xn)</p>

<h5><strong>Example: Mutual Fund Annual Returns</strong></h5>
<p>Let's analyze the growth of a $100 investment over 10 years based on the following annual returns and their corresponding growth factors (1 + return).</p>
` + Utils.createBlueTable(
  ['Year', 'Return (%)', 'Growth Factor'],
  [
    ['1', '-22.1', '0.779'],
    ['2', '28.7', '1.287'],
    ['3', '10.9', '1.109'],
    ['4', '4.9', '1.049'],
    ['5', '15.8', '1.158'],
    ['6', '5.5', '1.055'],
    ['7', '-37.0', '0.630'],
    ['8', '26.5', '1.265'],
    ['9', '15.1', '1.151'],
    ['10', '2.1', '1.021']
  ]
) + `
<p>To find the value of the investment at the end of 10 years, we multiply the initial investment by the product of all 10 growth factors:</p>
<p class="formula">$100 * (0.779 * 1.287 * ... * 1.021) = $100 * 1.334493 = $133.45</p>

<p>To find the <strong>mean rate of growth</strong>, we calculate the geometric mean of the growth factors:</p>
<p class="formula">x̄g = 10√(1.334493) = 1.029275</p>

<p>The average annual growth rate is (1.029275 - 1) * 100 = <strong>2.9275%</strong>.</p>

<div style="background-color: #fce8e6; border-left: 4px solid #d93025; padding: 15px; margin: 15px 0;">
  <h4><strong>A Common Mistake: Using the Arithmetic Mean for Growth Rates</strong></h4>
  <p>The simple arithmetic mean of the 10 annual percentage returns is 5.04%. A broker using this number would be misleading you. An average growth factor of 1.0504 would have turned $100 into $163.51, not the actual $133.45.</p>
  <p><strong>Rule of thumb:</strong> For a multiplicative process, such as applications involving growth rates, the geometric mean is the appropriate measure of location.</p>
</div>
`
    }
  ],
  percentiles: [
    {
      id: 32,
      title: "Percentiles and Quartiles",
      category: "percentiles-quartiles",
      content: `<h3><strong>Percentiles</strong></h3>
<p>A percentile provides information about how the data are spread over the interval from the smallest value to the largest value. The <strong>pth percentile</strong> is a value such that at least p percent of the observations are less than or equal to this value and at least (100 - p) percent of the observations are greater than or equal to this value.</p>

<h4><strong>Calculating the pth Percentile</strong></h4>
<ol>
    <li>Arrange the data in ascending order.</li>
    <li>Compute an index i: <br> <code class="formula">i = (p / 100) * n</code> <br> where p is the percentile of interest and n is the number of observations.</li>
    <li>
        <ul>
            <li>If i is <strong>not an integer</strong>, round up. The next integer greater than i denotes the position of the pth percentile.</li>
            <li>If i is an <strong>integer</strong>, the pth percentile is the average of the values in positions i and i + 1.</li>
        </ul>
    </li>
</ol>

<h5><strong>Example: Finding the 85th Percentile for Starting Salaries</strong></h5>
<p><strong>Step 1: Arrange the data in ascending order.</strong></p>
<p>3710, 3755, 3850, 3880, 3880, 3890, 3920, 3940, 3950, 4050, <strong>4130</strong>, 4325</p>
<p><strong>Step 2: Compute the index i.</strong></p>
<p class="formula">i = (85 / 100) * 12 = 10.2</p>
<p><strong>Step 3: Determine the position.</strong></p>
<p>Because i is not an integer, we round up. The position of the 85th percentile is the 11th position.</p>
<p>Returning to the data, we see that the 85th percentile is the data value in the 11th position, or <strong>$4130</strong>.</p>

<hr>

<h3><strong>Quartiles</strong></h3>
<p>It is often desirable to divide data into four parts, with each part containing approximately one-fourth, or 25% of the observations. The division points are referred to as the quartiles.</p>
<ul>
    <li><strong>Q1</strong> = first quartile, or 25th percentile</li>
    <li><strong>Q2</strong> = second quartile, or 50th percentile (also the median)</li>
    <li><strong>Q3</strong> = third quartile, or 75th percentile</li>
</ul>
<p>Quartiles are just specific percentiles, so the steps for computing percentiles can be applied directly.</p>

<h5><strong>Example: Calculating Quartiles for the Starting Salary Data</strong></h5>
<p><strong>Calculating Q1 (25th percentile):</strong></p>
<p class="formula">i = (25 / 100) * 12 = 3</p>
<p>Because i is an integer, the first quartile is the average of the 3rd and 4th data values:</p>
<p class="formula">Q1 = (3850 + 3880) / 2 = 3865</p>

<p><strong>Calculating Q3 (75th percentile):</strong></p>
<p class="formula">i = (75 / 100) * 12 = 9</p>
<p>Because i is an integer, the third quartile is the average of the 9th and 10th data values:</p>
<p class="formula">Q3 = (3950 + 4050) / 2 = 4000</p>

<h5><strong>Visualizing the Quartiles</strong></h5>
<p>The quartiles divide the starting salary data into four parts, with each part containing 25% of the observations.</p>
<div style="text-align: center; font-family: monospace; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
  <p>3710, 3755, 3850 | 3880, 3880, 3890 | 3920, 3940, 3950 | 4050, 4130, 4325</p>
  <p><strong>Q1 = 3865</strong> &nbsp;&nbsp;&nbsp;&nbsp; <strong>Q2 = 3905 (Median)</strong> &nbsp;&nbsp;&nbsp;&nbsp; <strong>Q3 = 4000</strong></p>
</div>

<div style="background-color: #eef2f9; border-left: 4px solid #4285f4; padding: 15px; margin: 15px 0;">
  <h4><strong>A Note on Quartile Calculation</strong></h4>
  <p>Other conventions are sometimes used to compute quartiles, and the actual values reported may vary slightly depending on the convention used. Nevertheless, the objective of all procedures for computing quartiles is to divide the data into four equal parts.</p>
</div>
`
    }
  ]
};

const MODULE3_VARIABILITY_NOTES = {
    measuresOfVariability: [
        {
            id: 33,
            title: "Measures of Variability",
            category: "variability-overview",
            content: `<h3><strong>Measures of Variability (Dispersion)</strong></h3>
<p>In addition to measures of location, it is often desirable to consider measures of variability, or dispersion. For example, two suppliers might have the same mean delivery time, but one is more reliable (less variable) than the other.</p>

<h4><strong>Range</strong></h4>
<p>The simplest measure of variability is the range, which is the difference between the largest and smallest values.</p>
<p class="formula">Range = Largest value - Smallest value</p>
<p>For the starting salary data ($4325 - $3710), the range is <strong>$615</strong>. The range is highly influenced by extreme values and is seldom used as the only measure of variability.</p>

<h4><strong>Interquartile Range (IQR)</strong></h4>
<p>The IQR overcomes the dependency on extreme values. It is the range for the middle 50% of the data.</p>
<p class="formula">IQR = Q3 - Q1</p>
<p>For the starting salary data, the IQR is 4000 - 3865 = <strong>135</strong>.</p>

<h4><strong>Variance</strong></h4>
<p>The variance is a measure of variability that utilizes all the data. It is based on the squared deviations of each observation from the mean.</p>
<p><strong>Population Variance (σ²):</strong></p>
<p class="formula">σ² = Σ(xi - μ)² / N</p>
<p><strong>Sample Variance (s²):</strong></p>
<p class="formula">s² = Σ(xi - x̄)² / (n - 1)</p>
<p>The sample variance (s²) is an unbiased estimate of the population variance (σ²).</p>

<h5><strong>Example: Calculating Sample Variance for Class Size Data</strong></h5>
` + Utils.createBlueTable(
    ['Class Size (xi)', 'Mean (x̄)', 'Deviation (xi - x̄)', 'Squared Deviation (xi - x̄)²'],
    [
        ['46', '44', '2', '4'],
        ['54', '44', '10', '100'],
        ['42', '44', '-2', '4'],
        ['46', '44', '2', '4'],
        ['32', '44', '-12', '144'],
        ['<strong>Total</strong>', '', '<strong>0</strong>', '<strong>256</strong>']
    ]
) + `
<p class="formula">s² = 256 / (5 - 1) = 64</p>
<p>The units of variance are squared (e.g., 64 students²), which can be difficult to interpret.</p>

<h4><strong>Standard Deviation</strong></h4>
<p>The standard deviation is the positive square root of the variance. It is measured in the same units as the original data, making it more easily interpretable.</p>
<p><strong>Sample Standard Deviation (s):</strong></p>
<p class="formula">s = √s²</p>
<p>For the class size data, the standard deviation is √64 = <strong>8 students</strong>.</p>
<p>For the starting salary data, the standard deviation is √27,440.91 = <strong>$165.65</strong>.</p>

<h4><strong>Coefficient of Variation</strong></h4>
<p>This measure indicates how large the standard deviation is relative to the mean, expressed as a percentage. It is useful for comparing the variability of variables with different means.</p>
<p class="formula">Coefficient of Variation = (Standard Deviation / Mean) * 100%</p>
<p>For the class size data: (8 / 44) * 100% = <strong>18.2%</strong></p>
<p>For the starting salary data: (165.65 / 3940) * 100% = <strong>4.2%</strong></p>
`
        }
    ]
};