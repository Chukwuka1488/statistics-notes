// Module 14 - Poisson Distribution
const MODULE14_POISSON_NOTES = {
    poissonDistribution: [
        {
            id: 141,
            title: "Poisson Distribution",
            category: "poisson-distribution",
            content: `<h3><strong>Poisson Probability Distribution</strong></h3>
<p>In this section we consider a discrete random variable that is often useful in estimating the number of occurrences over a specified interval of time or space. For example, the random variable of interest might be the number of arrivals at a car wash in one hour, the number of repairs needed in 10 miles of highway, or the number of leaks in 100 miles of pipeline.</p>

<h4><strong>Properties of a Poisson Experiment</strong></h4>
<p>If the following two properties are satisfied, the number of occurrences is a random variable described by the Poisson probability distribution.</p>

<h5><strong>PROPERTIES OF A POISSON EXPERIMENT</strong></h5>
<ol>
<li><strong>The probability of an occurrence is the same for any two intervals of equal length.</strong></li>
<li><strong>The occurrence or nonoccurrence in any interval is independent of the occurrence or nonoccurrence in any other interval.</strong></li>
</ol>

<h4><strong>Poisson Probability Function</strong></h4>
<p>The Poisson probability function is defined by equation (5.15):</p>

<h5><strong>POISSON PROBABILITY FUNCTION</strong></h5>
<p class="formula">f(x) = (μˣ × e⁻ᵘ) / x!</p>

<p>where:</p>
<ul>
<li><strong>f(x) =</strong> the probability of x occurrences in an interval</li>
<li><strong>μ =</strong> expected value or mean number of occurrences in an interval</li>
<li><strong>e =</strong> 2.71828 (natural logarithm base)</li>
<li><strong>x =</strong> number of occurrences (0, 1, 2, ... without limit)</li>
</ul>

<h6><strong>Key Characteristics:</strong></h6>
<ul>
<li><strong>Discrete random variable:</strong> x indicates the number of occurrences in the interval</li>
<li><strong>No upper limit:</strong> x can be 0, 1, 2, ... without limit</li>
<li><strong>Practical limit:</strong> x eventually becomes large enough so that f(x) is approximately zero</li>
<li><strong>Mean equals variance:</strong> A property of the Poisson distribution is that the mean and variance are equal</li>
</ul>

<h4><strong>Example: Bank Drive-Up Teller Window</strong></h4>
<p>Suppose that we are interested in the number of arrivals at the drive-up teller window of a bank during a 15-minute period on weekday mornings. If we can assume that the probability of a car arriving is the same for any two time periods of equal length and that the arrival or nonarrival of a car in any time period is independent of the arrival or nonarrival in any other time period, the Poisson probability function is applicable.</p>

<h5><strong>Problem Setup:</strong></h5>
<ul>
<li><strong>Time interval:</strong> 15-minute period</li>
<li><strong>Mean arrivals:</strong> μ = 10 cars per 15-minute period</li>
<li><strong>Random variable:</strong> x = number of cars arriving in any 15-minute period</li>
</ul>

<h5><strong>Probability Function:</strong></h5>
<p class="formula">f(x) = (10ˣ × e⁻¹⁰) / x!</p>

<h5><strong>Example Calculation:</strong></h5>
<p><strong>Probability of exactly 5 arrivals in 15 minutes:</strong></p>
<p class="formula">f(5) = (10⁵ × e⁻¹⁰) / 5! = 0.0378</p>

<h6><strong>Using Poisson Tables:</strong></h6>
<p>Although this probability was determined by evaluating the probability function with μ = 10 and x = 5, it is often easier to refer to a table for the Poisson distribution. The table provides probabilities for specific values of x and μ.</p>

<h5><strong>Selected Values from Poisson Probability Tables</strong></h5>
<p><strong>Example:</strong> μ = 10, x = 5; f(5) = 0.0378</p>

<h6><strong>Table Usage:</strong></h6>
<p>To use the table of Poisson probabilities, we need know only the values of x and μ. From the table, the probability of five arrivals in a 15-minute period is found by locating the value in the row corresponding to x = 5 and the column corresponding to μ = 10. Hence, we obtain f(5) = 0.0378.</p>

<h4><strong>Mean, Variance, and Standard Deviation</strong></h4>
<p>In the preceding example, the mean of the Poisson distribution is μ = 10 arrivals per 15-minute period. A property of the Poisson distribution is that the mean of the distribution and the variance of the distribution are equal.</p>

<h5><strong>Formulas:</strong></h5>
<p class="formula">E(x) = μ</p>
<p class="formula">Var(x) = σ² = μ</p>
<p class="formula">σ = √μ</p>

<h5><strong>Bank Example Calculations:</strong></h5>
<ul>
<li><strong>Mean:</strong> μ = 10 arrivals per 15-minute period</li>
<li><strong>Variance:</strong> σ² = 10</li>
<li><strong>Standard deviation:</strong> σ = √10 = 3.16</li>
</ul>

<h4><strong>Different Time Intervals</strong></h4>
<p>Our illustration involves a 15-minute period, but other time periods can be used. Suppose we want to compute the probability of one arrival in a 3-minute period.</p>

<h5><strong>Rate Conversion:</strong></h5>
<ul>
<li><strong>15-minute rate:</strong> 10 arrivals per 15 minutes</li>
<li><strong>1-minute rate:</strong> 10/15 = 2/3 arrivals per minute</li>
<li><strong>3-minute rate:</strong> (2/3)(3 minutes) = 2 arrivals per 3 minutes</li>
</ul>

<h5><strong>Probability Function for 3-Minute Period:</strong></h5>
<p class="formula">f(x) = (2ˣ × e⁻²) / x!</p>

<h5><strong>Example Calculation:</strong></h5>
<p><strong>Probability of exactly 1 arrival in 3 minutes:</strong></p>
<p class="formula">f(1) = (2¹ × e⁻²) / 1! = 0.2707</p>

<h6><strong>Important Note:</strong></h6>
<p>Note that the probability of one arrival in a three-minute period (0.2707) is not the same as the probability of five arrivals in a 15-minute period (0.0378). When computing a Poisson probability for a different time interval, we must first convert the mean arrival rate to the time period of interest and then compute the probability.</p>

<h4><strong>Example: Highway Defects</strong></h4>
<p>Let us illustrate an application not involving time intervals in which the Poisson distribution is useful. Suppose we are concerned with the occurrence of major defects in a highway one month after resurfacing.</p>

<h5><strong>Problem Setup:</strong></h5>
<ul>
<li><strong>Assumptions:</strong></li>
<ul>
<li>The probability of a defect is the same for any two highway intervals of equal length</li>
<li>The occurrence or nonoccurrence of a defect in any one interval is independent of the occurrence or nonoccurrence of a defect in any other interval</li>
</ul>
<li><strong>Defect rate:</strong> 2 defects per mile</li>
<li><strong>Highway section:</strong> 3-mile section</li>
<li><strong>Expected defects:</strong> μ = (2 defects/mile)(3 miles) = 6 defects</li>
</ul>

<h5><strong>Probability Calculations:</strong></h5>
<p><strong>Probability of no major defects in 3-mile section:</strong></p>
<p class="formula">f(0) = (6⁰ × e⁻⁶) / 0! = 0.0025</p>

<p><strong>Probability of at least one major defect:</strong></p>
<p class="formula">P(X ≥ 1) = 1 - f(0) = 1 - 0.0025 = 0.9975</p>

<h6><strong>Interpretation:</strong></h6>
<p>It is unlikely that no major defects will occur in the three-mile section. In fact, this example indicates a 0.9975 probability of at least one major defect in the three-mile highway section.</p>

<h4><strong>Business Applications</strong></h4>
<ul>
<li><strong>Customer Service:</strong> Number of customer arrivals at service points</li>
<li><strong>Quality Control:</strong> Number of defects in manufactured products</li>
<li><strong>Insurance:</strong> Number of claims filed in a time period</li>
<li><strong>Healthcare:</strong> Number of patients arriving at emergency rooms</li>
<li><strong>Transportation:</strong> Number of accidents on highways</li>
<li><strong>Telecommunications:</strong> Number of calls arriving at call centers</li>
<li><strong>Manufacturing:</strong> Number of machine breakdowns</li>
</ul>

<h4><strong>Key Insights</strong></h4>
<ul>
<li><strong>Two Properties:</strong> Must be satisfied for Poisson experiment</li>
<li><strong>Constant Rate:</strong> Probability of occurrence is same for equal intervals</li>
<li><strong>Independence:</strong> Events occur independently of each other</li>
<li><strong>Mean Equals Variance:</strong> Unique property of Poisson distribution</li>
<li><strong>Rate Conversion:</strong> Must adjust μ for different time/space intervals</li>
<li><strong>No Upper Limit:</strong> x can theoretically go to infinity</li>
<li><strong>Rare Events:</strong> Particularly useful for modeling rare occurrences</li>
<li><strong>Applications:</strong> Widely used in queuing theory and reliability analysis</li>
</ul>

<h4><strong>Comparison with Binomial Distribution</strong></h4>
<ul>
<li><strong>Poisson:</strong> No upper limit on number of events</li>
<li><strong>Binomial:</strong> Fixed number of trials with upper limit</li>
<li><strong>Poisson:</strong> Events occur at random times/locations</li>
<li><strong>Binomial:</strong> Events occur in fixed trials</li>
<li><strong>Poisson:</strong> Mean equals variance</li>
<li><strong>Binomial:</strong> Mean and variance are different</li>
</ul>`
        },
        {
            id: 142,
            title: "Business Applications of Poisson Distribution",
            category: "business-poisson",
            content: `<h3><strong>Business Applications of Poisson Distribution</strong></h3>

<h4><strong>Example 1: Call Center Operations</strong></h4>
<p>A call center receives an average of 15 calls per hour:</p>
<ul>
<li><strong>λ = 15</strong> (average calls per hour)</li>
<li><strong>X = number of calls in one hour</strong></li>
</ul>

<p><strong>Calculations:</strong></p>
<ul>
<li><strong>Expected Value:</strong> E(X) = 15 calls per hour</li>
<li><strong>Variance:</strong> Var(X) = 15</li>
<li><strong>Standard Deviation:</strong> σ = √15 = 3.87 calls</li>
</ul>

<h5><strong>Staffing Applications:</strong></h5>
<ul>
<li>Determine optimal number of agents needed</li>
<li>Calculate probability of call overflow</li>
<li>Plan break schedules during low-call periods</li>
<li>Set service level targets</li>
</ul>

<h4><strong>Example 2: Manufacturing Defects</strong></h4>
<p>A production line averages 2 defects per 100 items:</p>
<ul>
<li><strong>λ = 2</strong> (average defects per 100 items)</li>
<li><strong>X = number of defects in 100 items</strong></li>
</ul>

<p><strong>Calculations:</strong></p>
<ul>
<li><strong>Expected Value:</strong> E(X) = 2 defects per 100 items</li>
<li><strong>Variance:</strong> Var(X) = 2</li>
<li><strong>Standard Deviation:</strong> σ = √2 = 1.41 defects</li>
</ul>

<h5><strong>Quality Control Applications:</strong></h5>
<ul>
<li>Set acceptable defect limits</li>
<li>Monitor process stability</li>
<li>Compare defect rates across shifts</li>
<li>Plan inspection schedules</li>
</ul>

<h4><strong>Example 3: Website Traffic</strong></h4>
<p>A website averages 50 visitors per hour:</p>
<ul>
<li><strong>λ = 50</strong> (average visitors per hour)</li>
<li><strong>X = number of visitors in one hour</strong></li>
</ul>

<p><strong>Calculations:</strong></p>
<ul>
<li><strong>Expected Value:</strong> E(X) = 50 visitors per hour</li>
<li><strong>Variance:</strong> Var(X) = 50</li>
<li><strong>Standard Deviation:</strong> σ = √50 = 7.07 visitors</li>
</ul>

<h5><strong>IT Applications:</strong></h5>
<ul>
<li>Server capacity planning</li>
<li>Bandwidth requirements</li>
<li>Peak traffic management</li>
<li>Performance monitoring</li>
</ul>

<h4><strong>Example 4: Emergency Services</strong></h4>
<p>A hospital emergency room averages 8 patients per day:</p>
<ul>
<li><strong>λ = 8</strong> (average patients per day)</li>
<li><strong>X = number of patients in one day</strong></li>
</ul>

<p><strong>Calculations:</strong></p>
<ul>
<li><strong>Expected Value:</strong> E(X) = 8 patients per day</li>
<li><strong>Variance:</strong> Var(X) = 8</li>
<li><strong>Standard Deviation:</strong> σ = √8 = 2.83 patients</li>
</ul>

<h5><strong>Healthcare Applications:</strong></h5>
<ul>
<li>Staff scheduling and resource allocation</li>
<li>Bed capacity planning</li>
<li>Emergency response planning</li>
<li>Cost analysis and budgeting</li>
</ul>

<h4><strong>Key Business Insights</strong></h4>
<ul>
<li><strong>Rare Event Modeling:</strong> Poisson is ideal for modeling rare, independent events</li>
<li><strong>Resource Planning:</strong> Use expected values for capacity planning</li>
<li><strong>Risk Assessment:</strong> Variance helps assess operational risk</li>
<li><strong>Performance Monitoring:</strong> Compare actual vs. expected outcomes</li>
</ul>`
        }
    ]
}; 