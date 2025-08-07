// Module 6 notes and data - Measures of Association Between Two Variables
const MODULE6_ASSOCIATION_MEASURES_NOTES = {
    associationMeasures: [
        {
            id: 36,
            title: "Measures of Association Between Two Variables",
            category: "association-measures-overview",
            content: `<h3><strong>Measures of Association Between Two Variables</strong></h3>
<p>Thus far, we have examined numerical methods used to summarize the data for one variable at a time. Often, a manager or decision-maker is interested in the relationship between two variables. In this section, we present covariance and correlation as descriptive measures of the relationship between two variables.</p>

<h4><strong>Covariance</strong></h4>
<p>For a sample of size n with the observations (x1, y1), (x2, y2), and so on, the sample covariance is defined as follows:</p>
<p class="formula">sxy = Σ((xi - x̄)(yi - ȳ)) / (n - 1)</p>
<p>To measure the strength of the linear relationship between the number of commercials x and the sales volume y in the stereo and sound equipment store problem, we use the formula to compute the sample covariance. The calculations in the table show the computation of Σ((xi - x̄)(yi - ȳ)).</p>
` + Utils.createBlueTable(
    ['xi', 'yi', 'xi - x̄', 'yi - ȳ', '(xi - x̄)(yi - ȳ)'],
    [
        ['2', '50', '-1', '-1', '1'],
        ['5', '57', '2', '6', '12'],
        ['1', '41', '-2', '-10', '20'],
        ['3', '54', '0', '3', '0'],
        ['4', '54', '1', '3', '3'],
        ['1', '38', '-2', '-13', '26'],
        ['5', '63', '2', '12', '24'],
        ['3', '48', '0', '-3', '0'],
        ['4', '59', '1', '8', '8'],
        ['2', '46', '-1', '-5', '5']
    ]
) + `
<p>The sample covariance is sxy = 99 / (10 - 1) = 11.</p>

<h4><strong>Interpretation of the Covariance</strong></h4>
<p>A positive value for sxy indicates a positive linear association between x and y (as x increases, y increases). A negative value for sxy indicates a negative linear association (as x increases, y decreases). A value of sxy close to zero indicates no linear association.</p>

<h4><strong>Correlation Coefficient</strong></h4>
<p>The correlation coefficient is a measure of the relationship between two variables that is not affected by the units of measurement for x and y. For sample data, the Pearson product moment correlation coefficient is defined as follows:</p>
<p class="formula">rxy = sxy / (sx * sy)</p>
<p>The sample correlation coefficient rxy is a point estimator of the population correlation coefficient ρxy. The correlation coefficient ranges from -1 to +1. Values close to -1 or +1 indicate a strong linear relationship. The closer the correlation is to zero, the weaker the relationship.</p>
`
        }
    ]
};