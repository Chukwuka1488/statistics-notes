// Module 16 - Key Formulas and Applications
const MODULE16_KEY_FORMULAS_NOTES = {
    keyFormulas: [
        {
            id: 161,
            title: "Key Formulas and Applications",
            category: "key-formulas",
            content: `<h3><strong>Key Formulas and Applications</strong></h3>
<p>This section provides all essential formulas for discrete probability distributions along with practical guidance on when and how to apply each formula in real-world situations.</p>

<h4><strong>Basic Probability Functions</strong></h4>

<h5><strong>Discrete Uniform Probability Function</strong></h5>
<p class="formula">f(x) = 1/n</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When all possible outcomes have equal probability</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Rolling a fair die (n = 6)</li>
<li>Selecting a card from a well-shuffled deck (n = 52)</li>
<li>Choosing a random number from 1 to 10 (n = 10)</li>
</ul>
<li><strong>Business Application:</strong> Random selection from a finite set of equally likely options</li>
</ul>

<h5><strong>Expected Value of Discrete Random Variable</strong></h5>
<p class="formula">E(x) = μ = Σ[x × f(x)]</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need the average or expected outcome</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Expected daily sales at a store</li>
<li>Average number of defects per batch</li>
<li>Mean customer satisfaction score</li>
</ul>
<li><strong>Business Application:</strong> Forecasting, performance evaluation, risk assessment</li>
</ul>

<h5><strong>Variance of Discrete Random Variable</strong></h5>
<p class="formula">Var(x) = σ² = Σ[(x - μ)² × f(x)]</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need to measure variability or spread</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Variability in production quality</li>
<li>Spread in customer response times</li>
<li>Consistency of service delivery</li>
</ul>
<li><strong>Business Application:</strong> Quality control, performance monitoring, risk management</li>
</ul>

<h5><strong>Standard Deviation of Discrete Random Variable</strong></h5>
<p class="formula">σ = √Var(x)</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need variability in the same units as the original data</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Standard deviation of daily sales (in dollars)</li>
<li>Spread in delivery times (in hours)</li>
<li>Variability in customer ratings (in points)</li>
</ul>
<li><strong>Business Application:</strong> Performance benchmarking, process improvement, customer service analysis</li>
</ul>

<h4><strong>Bivariate Analysis Formulas</strong></h4>

<h5><strong>Covariance of Bivariate Random Variables</strong></h5>
<p class="formula">σxy = ΣΣ[(x - μx)(y - μy)f(x,y)]</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When analyzing the relationship between two variables</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Relationship between advertising spending and sales</li>
<li>Correlation between employee satisfaction and productivity</li>
<li>Association between product quality and customer retention</li>
</ul>
<li><strong>Business Application:</strong> Market analysis, performance correlation, strategic planning</li>
</ul>

<h5><strong>Correlation Coefficient</strong></h5>
<p class="formula">ρ = σxy / (σx × σy)</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need a standardized measure of relationship strength</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Strength of relationship between variables</li>
<li>Standardized comparison across different scales</li>
<li>Normalized measure for decision making</li>
</ul>
<li><strong>Business Application:</strong> Portfolio analysis, risk assessment, performance evaluation</li>
</ul>

<h4><strong>Linear Combination Formulas</strong></h4>

<h5><strong>Expected Value of Linear Combination</strong></h5>
<p class="formula">E(ax + by) = aE(x) + bE(y)</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When combining multiple random variables with weights</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Portfolio expected return calculation</li>
<li>Weighted average of multiple performance metrics</li>
<li>Combined risk assessment</li>
</ul>
<li><strong>Business Application:</strong> Financial portfolio management, performance aggregation, risk modeling</li>
</ul>

<h5><strong>Variance of Linear Combination</strong></h5>
<p class="formula">Var(ax + by) = a²Var(x) + b²Var(y) + 2abσxy</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When calculating combined variability</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Portfolio risk calculation</li>
<li>Combined uncertainty assessment</li>
<li>Total variability in complex systems</li>
</ul>
<li><strong>Business Application:</strong> Risk management, portfolio optimization, system reliability</li>
</ul>

<h4><strong>Combinatorial Formulas</strong></h4>

<h5><strong>Combination Formula</strong></h5>
<p class="formula">C(n,r) = n! / [r!(n-r)!]</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When order doesn't matter in selection</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Selecting committee members</li>
<li>Choosing defective items from a lot</li>
<li>Picking winning lottery numbers</li>
</ul>
<li><strong>Business Application:</strong> Quality control sampling, team formation, selection processes</li>
</ul>

<h5><strong>Permutation Formula</strong></h5>
<p class="formula">P(n,r) = n! / (n-r)!</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When order matters in arrangement</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Arranging items in sequence</li>
<li>Ordering tasks in a process</li>
<li>Ranking candidates</li>
</ul>
<li><strong>Business Application:</strong> Process optimization, scheduling, ranking systems</li>
</ul>

<h4><strong>Specific Distribution Formulas</strong></h4>

<h5><strong>Binomial Probability Function</strong></h5>
<p class="formula">f(x) = C(n,x) × p^x × (1-p)^(n-x)</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you have n independent trials with constant probability</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Number of defective items in a sample</li>
<li>Success rate in marketing campaigns</li>
<li>Customer conversion rates</li>
</ul>
<li><strong>Business Application:</strong> Quality control, marketing analysis, customer behavior modeling</li>
</ul>

<h5><strong>Binomial Expected Value</strong></h5>
<p class="formula">E(x) = μ = np</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need expected number of successes</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Expected sales from n customer contacts</li>
<li>Average number of successful transactions</li>
<li>Mean number of positive customer reviews</li>
</ul>
<li><strong>Business Application:</strong> Sales forecasting, performance prediction, resource planning</li>
</ul>

<h5><strong>Binomial Variance</strong></h5>
<p class="formula">Var(x) = σ² = np(1-p)</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need variability in binomial outcomes</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Variability in sales performance</li>
<li>Spread in conversion rates</li>
<li>Consistency of quality control results</li>
</ul>
<li><strong>Business Application:</strong> Performance monitoring, quality assurance, risk assessment</li>
</ul>

<h5><strong>Poisson Probability Function</strong></h5>
<p class="formula">f(x) = (μ^x × e^(-μ)) / x!</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When events occur randomly over time or space</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Customer arrivals per hour</li>
<li>System failures per day</li>
<li>Defects per square meter</li>
</ul>
<li><strong>Business Application:</strong> Queuing theory, reliability analysis, quality control</li>
</ul>

<h5><strong>Poisson Expected Value and Variance</strong></h5>
<p class="formula">E(x) = Var(x) = μ</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When mean equals variance (Poisson property)</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Customer arrival patterns</li>
<li>Equipment failure rates</li>
<li>Random event occurrences</li>
</ul>
<li><strong>Business Application:</strong> Capacity planning, maintenance scheduling, resource allocation</li>
</ul>

<h5><strong>Hypergeometric Probability Function</strong></h5>
<p class="formula">f(x) = [C(r,x) × C(N-r,n-x)] / C(N,n)</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When sampling without replacement from finite population</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Quality control sampling</li>
<li>Audit procedures</li>
<li>Selection processes</li>
</ul>
<li><strong>Business Application:</strong> Quality assurance, audit planning, personnel selection</li>
</ul>

<h5><strong>Hypergeometric Expected Value</strong></h5>
<p class="formula">E(x) = μ = n × (r/N)</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need expected successes in finite population sampling</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Expected defective items in a sample</li>
<li>Average qualified candidates in selection</li>
<li>Mean errors in audit sample</li>
</ul>
<li><strong>Business Application:</strong> Quality control planning, recruitment analysis, audit risk assessment</li>
</ul>

<h5><strong>Hypergeometric Variance</strong></h5>
<p class="formula">Var(x) = σ² = n × (r/N) × (1 - r/N) × [(N-n)/(N-1)]</p>
<h6><strong>When to Apply:</strong></h6>
<ul>
<li><strong>Situation:</strong> When you need variability in finite population sampling</li>
<li><strong>Examples:</strong></li>
<ul>
<li>Variability in quality control results</li>
<li>Consistency of audit findings</li>
<li>Spread in selection outcomes</li>
</ul>
<li><strong>Business Application:</strong> Quality control planning, audit risk assessment, selection process evaluation</li>
</ul>

<h4><strong>Formula Selection Guide</strong></h4>

<h5><strong>Decision Tree for Formula Selection</strong></h5>
<ol>
<li><strong>Is it a single random variable?</strong></li>
<ul>
<li><strong>Yes:</strong> Use E(x) = Σ[x × f(x)] and Var(x) = Σ[(x - μ)² × f(x)]</li>
<li><strong>No:</strong> Proceed to step 2</li>
</ul>
<li><strong>Are you analyzing two variables together?</strong></li>
<ul>
<li><strong>Yes:</strong> Use covariance and correlation formulas</li>
<li><strong>No:</strong> Proceed to step 3</li>
</ul>
<li><strong>Are you combining variables with weights?</strong></li>
<ul>
<li><strong>Yes:</strong> Use linear combination formulas</li>
<li><strong>No:</strong> Proceed to step 4</li>
</ul>
<li><strong>Which distribution applies?</strong></li>
<ul>
<li><strong>Equal probabilities:</strong> Use uniform distribution</li>
<li><strong>Independent trials, constant probability:</strong> Use binomial</li>
<li><strong>Rare events over time/space:</strong> Use Poisson</li>
<li><strong>Finite population, without replacement:</strong> Use hypergeometric</li>
</ul>
</ol>

<h4><strong>Practical Application Checklist</strong></h4>
<ul>
<li><strong>✓ Identify the experiment type</strong></li>
<li><strong>✓ Verify distribution assumptions</strong></li>
<li><strong>✓ Determine appropriate formula</strong></li>
<li><strong>✓ Calculate required parameters</strong></li>
<li><strong>✓ Apply formula correctly</strong></li>
<li><strong>✓ Interpret results in business context</strong></li>
<li><strong>✓ Validate assumptions</strong></li>
</ul>`
        }
    ]
}; 