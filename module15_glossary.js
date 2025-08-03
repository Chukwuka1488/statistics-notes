// Module 15 - Glossary of Key Terms
const MODULE15_GLOSSARY_NOTES = {
    glossary: [
        {
            id: 151,
            title: "Glossary of Key Terms",
            category: "glossary",
            content: `<h3><strong>Glossary of Key Terms</strong></h3>
<p>This glossary provides clear definitions of the essential terms used in probability distributions and discrete random variables.</p>

<h4><strong>Basic Concepts</strong></h4>

<h5><strong>Random Variable</strong></h5>
<p>A numerical description of the outcome of an experiment.</p>

<h5><strong>Discrete Random Variable</strong></h5>
<p>A random variable that may assume either a finite number of values or an infinite sequence of values.</p>

<h5><strong>Continuous Random Variable</strong></h5>
<p>A random variable that may assume any numerical value in an interval or collection of intervals.</p>

<h4><strong>Probability Distributions</strong></h4>

<h5><strong>Probability Distribution</strong></h5>
<p>A description of how the probabilities are distributed over the values of the random variable.</p>

<h5><strong>Probability Function</strong></h5>
<p>A function, denoted by f(x), that provides the probability that x assumes a particular value for a discrete random variable.</p>

<h5><strong>Empirical Discrete Distribution</strong></h5>
<p>A discrete probability distribution for which the relative frequency method is used to assign the probabilities.</p>

<h5><strong>Discrete Uniform Probability Distribution</strong></h5>
<p>A probability distribution for which each possible value of the random variable has the same probability.</p>

<h4><strong>Measures of Central Tendency and Variability</strong></h4>

<h5><strong>Expected Value</strong></h5>
<p>A measure of the central location of a random variable.</p>

<h5><strong>Variance</strong></h5>
<p>A measure of the variability, or dispersion, of a random variable.</p>

<h5><strong>Standard Deviation</strong></h5>
<p>The positive square root of the variance.</p>

<h4><strong>Bivariate Analysis</strong></h4>

<h5><strong>Bivariate Probability Distribution</strong></h5>
<p>A probability distribution involving two random variables. A discrete bivariate probability distribution provides a probability for each pair of values that may occur for the two random variables.</p>

<h4><strong>Specific Probability Distributions</strong></h4>

<h5><strong>Binomial Experiment</strong></h5>
<p>An experiment having the four properties stated at the beginning of Section 5.5:</p>
<ol>
<li>The experiment consists of a sequence of n identical trials</li>
<li>Two outcomes are possible on each trial (success and failure)</li>
<li>The probability of success does not change from trial to trial</li>
<li>The trials are independent</li>
</ol>

<h5><strong>Binomial Probability Distribution</strong></h5>
<p>A probability distribution showing the probability of x successes in n trials of a binomial experiment.</p>

<h5><strong>Binomial Probability Function</strong></h5>
<p>The function used to compute binomial probabilities: f(x) = C(n,x) × p^x × (1-p)^(n-x)</p>

<h5><strong>Poisson Probability Distribution</strong></h5>
<p>A probability distribution showing the probability of x occurrences of an event over a specified interval of time or space.</p>

<h5><strong>Poisson Probability Function</strong></h5>
<p>The function used to compute Poisson probabilities: f(x) = (μ^x × e^(-μ)) / x!</p>

<h5><strong>Hypergeometric Probability Distribution</strong></h5>
<p>A probability distribution showing the probability of x successes in n trials from a population with r successes and N-r failures.</p>

<h5><strong>Hypergeometric Probability Function</strong></h5>
<p>The function used to compute hypergeometric probabilities: f(x) = [C(r,x) × C(N-r,n-x)] / C(N,n)</p>

<h4><strong>Key Differences Summary</strong></h4>

<h5><strong>Binomial vs Hypergeometric</strong></h5>
<ul>
<li><strong>Binomial:</strong> Independent trials, constant probability, infinite population</li>
<li><strong>Hypergeometric:</strong> Dependent trials, changing probability, finite population</li>
</ul>

<h5><strong>Poisson vs Binomial</strong></h5>
<ul>
<li><strong>Poisson:</strong> No upper limit, random occurrences, mean equals variance</li>
<li><strong>Binomial:</strong> Fixed number of trials, fixed probability, different mean and variance</li>
</ul>

<h5><strong>Discrete vs Continuous</strong></h5>
<ul>
<li><strong>Discrete:</strong> Finite or countably infinite values, probability mass function</li>
<li><strong>Continuous:</strong> Infinite values in intervals, probability density function</li>
</ul>

<h4><strong>Mathematical Notation</strong></h4>

<h5><strong>Common Symbols</strong></h5>
<ul>
<li><strong>E(x):</strong> Expected value of random variable x</li>
<li><strong>Var(x):</strong> Variance of random variable x</li>
<li><strong>σ:</strong> Standard deviation</li>
<li><strong>μ:</strong> Mean or expected value</li>
<li><strong>f(x):</strong> Probability function</li>
<li><strong>P(x):</strong> Probability of event x</li>
<li><strong>C(n,r):</strong> Combination of n items taken r at a time</li>
<li><strong>n:</strong> Number of trials</li>
<li><strong>p:</strong> Probability of success</li>
<li><strong>q:</strong> Probability of failure (1-p)</li>
</ul>

<h4><strong>Business Applications</strong></h4>

<h5><strong>Quality Control</strong></h5>
<ul>
<li>Binomial: Defective items in production batches</li>
<li>Poisson: Equipment failures per time period</li>
<li>Hypergeometric: Sampling inspection results</li>
</ul>

<h5><strong>Customer Service</strong></h5>
<ul>
<li>Poisson: Customer arrivals per hour</li>
<li>Binomial: Customer satisfaction surveys</li>
<li>Hypergeometric: Customer segment analysis</li>
</ul>

<h5><strong>Financial Analysis</strong></h5>
<ul>
<li>Binomial: Investment success rates</li>
<li>Poisson: Insurance claims per month</li>
<li>Hypergeometric: Portfolio risk assessment</li>
</ul>

<h4><strong>Study Tips</strong></h4>

<h5><strong>When to Use Each Distribution</strong></h5>
<ul>
<li><strong>Binomial:</strong> When you have a fixed number of trials with two outcomes</li>
<li><strong>Poisson:</strong> When events occur randomly over time or space</li>
<li><strong>Hypergeometric:</strong> When sampling without replacement from finite populations</li>
<li><strong>Uniform:</strong> When all outcomes are equally likely</li>
</ul>

<h5><strong>Key Questions to Ask</strong></h5>
<ol>
<li>Is the population finite or infinite?</li>
<li>Are trials independent or dependent?</li>
<li>Is the probability constant or changing?</li>
<li>Are you counting occurrences or successes?</li>
<li>Is there an upper limit to the number of events?</li>
</ol>

<h5><strong>Common Mistakes to Avoid</strong></h5>
<ul>
<li>Using binomial when sampling without replacement</li>
<li>Using Poisson when there's a fixed number of trials</li>
<li>Confusing discrete and continuous variables</li>
<li>Forgetting to check distribution assumptions</li>
<li>Using wrong probability function formulas</li>
</ul>`
        }
    ]
}; 