// Module 4 notes and data - Distribution Shape, Relative Location, and Outliers
const MODULE4_DISTRIBUTION_SHAPE_NOTES = {
    distributionShape: [
        {
            id: 34,
            title: "Measures of Distribution Shape, Relative Location, and Detecting Outliers",
            category: "distribution-shape-overview",
            content: `<h3><strong>Measures of Distribution Shape, Relative Location, and Detecting Outliers</strong></h3>
<p>In addition to measures of location and variability, it is often important to have a measure of the shape of a distribution. An important numerical measure of the shape of a distribution is called skewness.</p>

<h4><strong>Distribution Shape (Skewness)</strong></h4>
<p>Skewness is a measure of the asymmetry of a probability distribution. For data skewed to the left, the skewness is negative; for data skewed to the right, the skewness is positive. If the data are symmetric, the skewness is zero.</p>
<ul>
    <li>For a <strong>symmetric distribution</strong>, the mean and the median are equal.</li>
    <li>When the data are <strong>positively skewed</strong>, the mean will usually be greater than the median.</li>
    <li>When the data are <strong>negatively skewed</strong>, the mean will usually be less than the median.</li>
</ul>

<h4><strong>z-Scores (Standardized Values)</strong></h4>
<p>In addition to measures of location, variability, and shape, we are also interested in the relative location of values within a data set. By using both the mean and standard deviation, we can determine the relative location of any observation.</p>
<p class="formula">zi = (xi - x̄) / s</p>
<p>The z-score can be interpreted as the number of standard deviations xi is from the mean x̄. A z-score greater than zero occurs for observations with a value greater than the mean, and a z-score less than zero occurs for observations with a value less than the mean. A z-score of zero indicates that the value of the observation is equal to the mean.</p>

<h5><strong>Example: Calculating z-Scores for Class Size Data</strong></h5>
` + Utils.createBlueTable(
    ['Class Size (xi)', 'Deviation (xi - x̄)', 'z-Score ((xi - x̄) / s)'],
    [
        ['46', '2', '2/8 = 0.25'],
        ['32', '-12', '-12/8 = -1.50'],
        ['54', '10', '10/8 = 1.25'],
        ['42', '-2', '-2/8 = -0.25'],
        ['46', '2', '2/8 = 0.25']
    ]
) + `
<p>The z-score of -1.50 for the fifth observation shows it is farthest from the mean; it is 1.50 standard deviations below the mean.</p>

<h4><strong>Chebyshev's Theorem</strong></h4>
<p>Chebyshev’s theorem enables us to make statements about the proportion of data values that must be within a specified number of standard deviations of the mean.</p>
<p class="formula">At least (1 - 1/z²) of the data values must be within z standard deviations of the mean, where z is any value greater than 1.</p>
<ul>
    <li>At least .75, or 75%, of the data values must be within z = 2 standard deviations of the mean.</li>
    <li>At least .89, or 89%, of the data values must be within z = 3 standard deviations of the mean.</li>
    <li>At least .94, or 94%, of the data values must be within z = 4 standard deviations of the mean.</li>
</ul>

<h4><strong>Empirical Rule</strong></h4>
<p>In many practical applications, data sets exhibit a symmetric mound-shaped or bell-shaped distribution. When the data are believed to approximate this distribution, the empirical rule can be used to determine the percentage of data values that must be within a specified number of standard deviations of the mean.</p>
<ul>
    <li>Approximately 68% of the data values will be within one standard deviation of the mean.</li>
    <li>Approximately 95% of the data values will be within two standard deviations of the mean.</li>
    <li>Almost all of the data values will be within three standard deviations of the mean.</li>
</ul>

<h4><strong>Detecting Outliers</strong></h4>
<p>Sometimes a data set will have one or more observations with unusually large or unusually small values. These extreme values are called outliers. An outlier may be a data value that has been incorrectly recorded, from an observation that was incorrectly included in the data set, or an unusual data value that has been recorded correctly and belongs in the data set. In such cases, it should remain.</p>
<p>Standardized values (z-scores) can be used to identify outliers. We recommend treating any data value with a z-score less than -3 or greater than +3 as an outlier. Such data values can then be reviewed for accuracy and to determine whether they belong in the data set.</p>
<p>Another approach to identifying outliers is based upon the values of the first and third quartiles (Q1 and Q3) and the interquartile range (IQR). Using this method, we first compute the following lower and upper limits:</p>
<p class="formula">Lower Limit = Q1 - 1.5(IQR)</p>
<p class="formula">Upper Limit = Q3 + 1.5(IQR)</p>
<p>An observation is classified as an outlier if its value is less than the lower limit or greater than the upper limit.</p>
`
        }
    ]
};