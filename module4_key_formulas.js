// Module 4: Key Formulas and Applications

const MODULE4_KEY_FORMULAS_NOTES = {
    keyFormulasModule4: [
        {
            id: 472,
            title: "Module 4: Key Formulas and Applications",
            category: "key-formulas-module4",
            content: `<h3><strong>Module 4: Key Formulas and Applications</strong></h3>
            
            <h4><strong>Chapter 6: Continuous Probability Distributions</strong></h4>
            
            <h5><strong>Uniform Probability Density Function</strong></h5>
            <div class="formula">
                <strong>Formula (6.1):</strong><br/>
                f(x) = 1/(b-a) &nbsp;&nbsp;&nbsp;&nbsp;for a ≤ x ≤ b<br/>
                f(x) = 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elsewhere
            </div>
            <p><strong>When to Apply:</strong> Use when all values in an interval [a,b] are equally likely (constant probability density).</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Manufacturing:</strong> Product dimensions within tolerance limits (e.g., pipe diameter 9.95-10.05 mm)</li>
                <li><strong>Transportation:</strong> Flight times when delays are uniformly distributed (e.g., 120-140 minutes)</li>
                <li><strong>Random Number Generation:</strong> Monte Carlo simulations using U(0,1)</li>
                <li><strong>Quality Control:</strong> Measurement errors within specified bounds</li>
            </ul>
            
            <h5><strong>Normal Probability Density Function</strong></h5>
            <div class="formula">
                <strong>Formula (6.2):</strong><br/>
                f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²))
            </div>
            <p><strong>When to Apply:</strong> Use for bell-shaped, symmetric distributions where data clusters around the mean.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Quality Control:</strong> Product specifications (tire mileage, part dimensions)</li>
                <li><strong>Human Resources:</strong> Test scores, performance ratings, employee heights/weights</li>
                <li><strong>Finance:</strong> Investment returns, stock price changes</li>
                <li><strong>Operations:</strong> Processing times when influenced by many small factors</li>
                <li><strong>Customer Analysis:</strong> Purchase amounts, satisfaction scores</li>
            </ul>
            
            <h5><strong>Converting to the Standard Normal Random Variable</strong></h5>
            <div class="formula">
                <strong>Formula (6.3):</strong><br/>
                z = (x - μ)/σ
            </div>
            <p><strong>When to Apply:</strong> Use to standardize any normal distribution for table lookup or comparison.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Probability Calculations:</strong> Finding P(X ≤ k) using standard normal tables</li>
                <li><strong>Percentile Analysis:</strong> Determining what percentage of data falls below a value</li>
                <li><strong>Quality Standards:</strong> Setting specifications based on standard deviations from mean</li>
                <li><strong>Performance Evaluation:</strong> Comparing scores across different scales</li>
                <li><strong>Risk Assessment:</strong> Calculating probability of exceeding thresholds</li>
            </ul>
            
            <h5><strong>Exponential Probability Density Function</strong></h5>
            <div class="formula">
                <strong>Formula (6.4):</strong><br/>
                f(x) = (1/μ) × e^(-x/μ) &nbsp;&nbsp;&nbsp;&nbsp;for x ≥ 0
            </div>
            <p><strong>When to Apply:</strong> Use for modeling waiting times, service times, or time between events.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Customer Service:</strong> Call duration times, help desk response times</li>
                <li><strong>Operations:</strong> Loading/unloading times, processing durations</li>
                <li><strong>Maintenance:</strong> Time between equipment failures, replacement intervals</li>
                <li><strong>Transportation:</strong> Time between arrivals at service points</li>
                <li><strong>Quality Control:</strong> Time between defects in production processes</li>
            </ul>
            
            <h5><strong>Exponential Distribution: Cumulative Probabilities</strong></h5>
            <div class="formula">
                <strong>Formula (6.5):</strong><br/>
                P(X ≤ x₀) = 1 - e^(-x₀/μ)
            </div>
            <p><strong>When to Apply:</strong> Use to calculate the probability that an exponentially distributed variable is less than or equal to a specific value.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Service Level Agreements:</strong> Probability of completing service within time limit</li>
                <li><strong>Reliability Analysis:</strong> Probability of no failure within specified period</li>
                <li><strong>Capacity Planning:</strong> Probability of processing within target time</li>
                <li><strong>Queue Management:</strong> Probability of service completion within acceptable wait time</li>
                <li><strong>Project Management:</strong> Probability of task completion within deadline</li>
            </ul>
            
            <h4><strong>Chapter 7: Sampling Distributions</strong></h4>
            
            <h5><strong>Expected Value of x̄</strong></h5>
            <div class="formula">
                <strong>Formula (7.1):</strong><br/>
                E(x̄) = μ
            </div>
            <p><strong>When to Apply:</strong> When determining the expected value of sample means from any population.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Quality Control:</strong> Expected value of sample means equals population mean for process monitoring</li>
                <li><strong>Performance Measurement:</strong> Sample means of employee performance scores will average to population mean</li>
                <li><strong>Unbiased Estimation:</strong> Confirms that x̄ is an unbiased estimator of μ</li>
            </ul>
            
            <h5><strong>Standard Deviation of x̄ (Infinite Population)</strong></h5>
            <div class="formula">
                <strong>Formula (7.2a):</strong><br/>
                σ_x̄ = σ/√n
            </div>
            <p><strong>When to Apply:</strong> When sampling with replacement or from very large populations where n/N ≤ 0.05.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Customer Surveys:</strong> Sampling from millions of customers where sample is tiny fraction</li>
                <li><strong>Manufacturing:</strong> Sampling with replacement from production line</li>
                <li><strong>Market Research:</strong> National polls where population is effectively infinite</li>
            </ul>
            
            <h5><strong>Standard Deviation of x̄ (Finite Population)</strong></h5>
            <div class="formula">
                <strong>Formula (7.2b):</strong><br/>
                σ_x̄ = (σ/√n) × √[(N-n)/(N-1)]
            </div>
            <p><strong>When to Apply:</strong> When sampling without replacement from finite populations where n/N > 0.05.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Employee Surveys:</strong> Sampling employees from small company (e.g., 50 from 200 employees)</li>
                <li><strong>Inventory Audits:</strong> Sampling products from limited inventory</li>
                <li><strong>Small Population Studies:</strong> When sample represents significant portion of population</li>
            </ul>
            
            <h5><strong>Expected Value of p̂</strong></h5>
            <div class="formula">
                <strong>Formula (7.4):</strong><br/>
                E(p̂) = p
            </div>
            <p><strong>When to Apply:</strong> When determining the expected value of sample proportions for any binomial situation.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Quality Control:</strong> Expected proportion of defective items equals true population proportion</li>
                <li><strong>Market Research:</strong> Sample proportions of customer preferences will average to true proportion</li>
                <li><strong>Political Polling:</strong> Sample proportions of voter support will average to true population support</li>
            </ul>
            
            <h5><strong>Standard Deviation of p̂ (Infinite Population)</strong></h5>
            <div class="formula">
                <strong>Formula (7.5a):</strong><br/>
                σ_p̂ = √[p(1-p)/n]
            </div>
            <p><strong>When to Apply:</strong> When sampling with replacement or from very large populations for proportions where n/N ≤ 0.05.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>National Opinion Polls:</strong> Polling voters from large population</li>
                <li><strong>Brand Awareness Studies:</strong> Sampling consumers from effectively infinite population</li>
                <li><strong>Quality Assurance:</strong> Sampling products with replacement from production</li>
            </ul>
            
            <h5><strong>Standard Deviation of p̂ (Finite Population)</strong></h5>
            <div class="formula">
                <strong>Formula (7.5b):</strong><br/>
                σ_p̂ = √[p(1-p)/n] × √[(N-n)/(N-1)]
            </div>
            <p><strong>When to Apply:</strong> When sampling without replacement from finite populations for proportions where n/N > 0.05.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Employee Opinion Surveys:</strong> Surveying significant portion of workforce</li>
                <li><strong>Customer Satisfaction:</strong> Surveying large fraction of customer base</li>
                <li><strong>Membership Studies:</strong> Polling significant portion of organization members</li>
            </ul>
            
            <h4><strong>Chapter 8: Interval Estimation</strong></h4>
            
            <h5><strong>Interval Estimate of a Population Mean: σ Known</strong></h5>
            <div class="formula">
                <strong>Formula (8.1):</strong><br/>
                x̄ ± z_{α/2} × (σ/√n)
            </div>
            <p><strong>When to Apply:</strong> Use when the population standard deviation σ is known from historical data or other reliable sources.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Manufacturing Quality Control:</strong> When process standard deviation is well-established from years of production data</li>
                <li><strong>Financial Analysis:</strong> When using historical volatility measures for investment returns</li>
                <li><strong>Standardized Testing:</strong> When population standard deviation is known from previous test administrations</li>
            </ul>
            
            <h4><strong>Interval Estimate of a Population Mean: σ Unknown</strong></h4>
            <div class="formula">
                <strong>Formula (8.2):</strong><br/>
                x̄ ± t_{α/2} × (s/√n)<br/>
                where df = n - 1
            </div>
            <p><strong>When to Apply:</strong> Use when the population standard deviation σ is unknown and must be estimated using the sample standard deviation s. This is the most common scenario in business applications.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>New Product Development:</strong> Estimating average customer satisfaction with no historical data</li>
                <li><strong>Employee Training:</strong> Estimating mean training completion time for new program</li>
                <li><strong>Market Research:</strong> Estimating average spending per customer in new market segment</li>
                <li><strong>Process Improvement:</strong> Estimating mean cycle time after implementing changes</li>
            </ul>
            
            <h4><strong>Sample Size for an Interval Estimate of a Population Mean</strong></h4>
            <div class="formula">
                <strong>Formula (8.3):</strong><br/>
                n = (z_{α/2})² × σ² / E²
            </div>
            <p><strong>When to Apply:</strong> Use to determine the required sample size before data collection to achieve a desired margin of error E with specified confidence level.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Survey Planning:</strong> Determining how many customers to survey to estimate average satisfaction within ±0.5 points</li>
                <li><strong>Budget Allocation:</strong> Planning sample size for cost estimation studies within specified precision</li>
                <li><strong>Clinical Trials:</strong> Determining participant numbers to detect treatment effects with desired accuracy</li>
                <li><strong>Audit Sampling:</strong> Planning sample size for financial audits to estimate population values within acceptable error</li>
            </ul>
            
            <h4><strong>Interval Estimate of a Population Proportion</strong></h4>
            <div class="formula">
                <strong>Formula (8.6):</strong><br/>
                p̂ ± z_{α/2} × √[p̂(1-p̂)/n]
            </div>
            <p><strong>When to Apply:</strong> Use when estimating the proportion of a population that has a specific characteristic, provided normal approximation conditions are met (np̂ ≥ 5 and n(1-p̂) ≥ 5).</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Political Polling:</strong> Estimating proportion of voters supporting a candidate</li>
                <li><strong>Quality Control:</strong> Estimating proportion of defective products in manufacturing</li>
                <li><strong>Customer Research:</strong> Estimating proportion of customers who would recommend the company</li>
                <li><strong>Marketing Analysis:</strong> Estimating proportion of target market aware of brand</li>
                <li><strong>Human Resources:</strong> Estimating proportion of employees satisfied with benefits</li>
            </ul>
            
            <h4><strong>Sample Size for an Interval Estimate of a Population Proportion</strong></h4>
            <div class="formula">
                <strong>Formula (8.7):</strong><br/>
                n = (z_{α/2})² × p*(1-p*) / E²
            </div>
            <p><strong>When to Apply:</strong> Use to determine required sample size for proportion studies before data collection to achieve desired margin of error E with specified confidence level.</p>
            <p><strong>Practical Instances:</strong></p>
            <ul>
                <li><strong>Market Research:</strong> Planning sample size to estimate market share within ±3% with 95% confidence</li>
                <li><strong>Opinion Surveys:</strong> Determining how many respondents needed for political polls with ±4% margin of error</li>
                <li><strong>Quality Assurance:</strong> Planning inspection sample size to estimate defect rate within specified precision</li>
                <li><strong>Customer Satisfaction:</strong> Determining survey size to estimate satisfaction rate within ±5%</li>
            </ul>
            
            <h4><strong>Planning Value Guidelines</strong></h4>
            
            <h5><strong>For Population Mean (σ estimation):</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Method</div>
                    <div class="divTableHead">Application</div>
                    <div class="divTableHead">Example</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Previous Studies</strong></div>
                        <div class="divTableCell">Use historical standard deviation</div>
                        <div class="divTableCell">Customer service response times from last year's data</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Pilot Study</strong></div>
                        <div class="divTableCell">Conduct small preliminary study</div>
                        <div class="divTableCell">Test new training program with 30 employees first</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Range Method</strong></div>
                        <div class="divTableCell">σ ≈ (Max - Min) / 4</div>
                        <div class="divTableCell">Production times range 10-50 minutes → σ ≈ 10</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>For Population Proportion (p* estimation):</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Method</div>
                    <div class="divTableHead">Application</div>
                    <div class="divTableHead">Example</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Historical Data</strong></div>
                        <div class="divTableCell">Use previous survey results</div>
                        <div class="divTableCell">Last year's customer satisfaction was 75%</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Pilot Study</strong></div>
                        <div class="divTableCell">Small preliminary survey</div>
                        <div class="divTableCell">Survey 100 customers to estimate preference rate</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Expert Judgment</strong></div>
                        <div class="divTableCell">Industry knowledge estimate</div>
                        <div class="divTableCell">Marketing expects 40% brand awareness</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Conservative (p* = 0.50)</strong></div>
                        <div class="divTableCell">When no other information available</div>
                        <div class="divTableCell">New product with unknown market acceptance</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Confidence Level Selection Guidelines</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Confidence Level</div>
                    <div class="divTableHead">z-value</div>
                    <div class="divTableHead">Business Application</div>
                    <div class="divTableHead">When to Use</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>90%</strong></div>
                        <div class="divTableCell">1.645</div>
                        <div class="divTableCell">Preliminary studies, cost-sensitive research</div>
                        <div class="divTableCell">When lower precision acceptable, budget constraints</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>95%</strong></div>
                        <div class="divTableCell">1.96</div>
                        <div class="divTableCell">Standard business research, most common choice</div>
                        <div class="divTableCell">General purpose studies, balanced risk approach</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>99%</strong></div>
                        <div class="divTableCell">2.576</div>
                        <div class="divTableCell">Critical decisions, regulatory compliance</div>
                        <div class="divTableCell">High-stakes decisions, safety-critical applications</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Formula Selection Decision Tree</strong></h4>
            
            <div class="formula">
                <strong>DECISION FRAMEWORK</strong><br/><br/>
                <strong>Step 1:</strong> Determine what you're estimating<br/>
                • Population Mean → Use formulas (8.1), (8.2), or (8.3)<br/>
                • Population Proportion → Use formulas (8.6) or (8.7)<br/><br/>
                
                <strong>Step 2:</strong> For Population Mean, check σ status<br/>
                • σ Known → Use formula (8.1)<br/>
                • σ Unknown → Use formula (8.2)<br/>
                • Planning sample size → Use formula (8.3)<br/><br/>
                
                <strong>Step 3:</strong> For Population Proportion, check purpose<br/>
                • Have sample data → Use formula (8.6)<br/>
                • Planning sample size → Use formula (8.7)<br/><br/>
                
                <strong>Step 4:</strong> Verify assumptions<br/>
                • Normal population or large sample (n ≥ 30)<br/>
                • For proportions: np̂ ≥ 5 and n(1-p̂) ≥ 5<br/>
                • Random sampling and independence
            </div>
            
            <h4><strong>Common Business Scenarios</strong></h4>
            
            <h5><strong>Scenario 1: New Product Launch</strong></h5>
            <ul>
                <li><strong>Situation:</strong> Estimate customer acceptance rate</li>
                <li><strong>Formula:</strong> (8.7) for sample size planning, then (8.6) for interval</li>
                <li><strong>Planning value:</strong> p* = 0.50 (conservative approach)</li>
            </ul>
            
            <h5><strong>Scenario 2: Process Improvement</strong></h5>
            <ul>
                <li><strong>Situation:</strong> Estimate mean cycle time after changes</li>
                <li><strong>Formula:</strong> (8.2) - σ unknown case with t distribution</li>
                <li><strong>Sample size:</strong> n ≥ 30 recommended for non-normal processes</li>
            </ul>
            
            <h5><strong>Scenario 3: Quality Control</strong></h5>
            <ul>
                <li><strong>Situation:</strong> Estimate defect rate in production</li>
                <li><strong>Formula:</strong> (8.6) for proportion estimation</li>
                <li><strong>Verification:</strong> Ensure np̂ ≥ 5 and n(1-p̂) ≥ 5</li>
            </ul>
            
            <h5><strong>Scenario 4: Market Research</strong></h5>
            <ul>
                <li><strong>Situation:</strong> Estimate average spending per customer</li>
                <li><strong>Formula:</strong> (8.3) for planning, (8.2) for interval if σ unknown</li>
                <li><strong>Planning:</strong> Use range method or pilot study for σ estimate</li>
            </ul>
            
            <h4><strong>Chapter 7 vs Chapter 8: Key Relationships</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Chapter 7 (Sampling Distributions)</div>
                    <div class="divTableHead">Chapter 8 (Interval Estimation)</div>
                    <div class="divTableHead">Relationship</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>E(x̄) = μ</strong><br/>Expected value of sample mean</div>
                        <div class="divTableCell"><strong>x̄ ± margin of error</strong><br/>Confidence interval for μ</div>
                        <div class="divTableCell">Chapter 7 establishes that x̄ is unbiased; Chapter 8 uses x̄ as point estimate</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>σ_x̄ = σ/√n</strong><br/>Standard error of sample mean</div>
                        <div class="divTableCell"><strong>z_{α/2} × (σ/√n)</strong><br/>Margin of error when σ known</div>
                        <div class="divTableCell">Chapter 7 provides theoretical foundation; Chapter 8 applies it for intervals</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>E(p̂) = p</strong><br/>Expected value of sample proportion</div>
                        <div class="divTableCell"><strong>p̂ ± margin of error</strong><br/>Confidence interval for p</div>
                        <div class="divTableCell">Chapter 7 shows p̂ is unbiased; Chapter 8 uses p̂ as point estimate</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>σ_p̂ = √[p(1-p)/n]</strong><br/>Standard error of sample proportion</div>
                        <div class="divTableCell"><strong>z_{α/2} × √[p̂(1-p̂)/n]</strong><br/>Margin of error for proportions</div>
                        <div class="divTableCell">Chapter 7 provides formula; Chapter 8 substitutes p̂ for unknown p</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Finite Population Correction Factor</strong></h4>
            
            <p><strong>When to Apply:</strong> Use when n/N > 0.05 (sampling more than 5% of population without replacement)</p>
            
            <div class="formula">
                <strong>Finite Population Correction Factor:</strong><br/>
                √[(N-n)/(N-1)]<br/><br/>
                Applied to both sampling distributions (Chapter 7) and interval estimation (Chapter 8)
            </div>
            
            <h4><strong>Progressive Learning Path: Chapters 6-8</strong></h4>
            
            <ol>
                <li><strong>Chapter 6 Foundation:</strong> Master continuous probability distributions
                    <ul>
                        <li>Uniform: Equal probability over intervals [Formula 6.1]</li>
                        <li>Normal: Bell-shaped, most important distribution [Formulas 6.2, 6.3]</li>
                        <li>Exponential: Waiting times and reliability [Formulas 6.4, 6.5]</li>
                        <li>PDF concepts and probability calculations</li>
                    </ul>
                </li>
                <li><strong>Chapter 7 Bridge:</strong> Understand sampling distribution properties
                    <ul>
                        <li>Expected values: E(x̄) = μ, E(p̂) = p [Formulas 7.1, 7.4]</li>
                        <li>Standard errors: σ_x̄, σ_p̂ [Formulas 7.2, 7.5]</li>
                        <li>Normal approximation using Chapter 6 knowledge</li>
                        <li>Finite population corrections</li>
                    </ul>
                </li>
                <li><strong>Chapter 8 Application:</strong> Apply all previous knowledge to interval estimation
                    <ul>
                        <li>Use normal distribution (Chapter 6) for confidence intervals</li>
                        <li>Apply sampling distribution theory (Chapter 7)</li>
                        <li>Create practical business applications [Formulas 8.1-8.7]</li>
                        <li>Plan sample sizes for desired precision</li>
                    </ul>
                </li>
            </ol>
            
            <h4><strong>Chapter Integration Summary</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Chapter</div>
                    <div class="divTableHead">Key Formulas</div>
                    <div class="divTableHead">Primary Purpose</div>
                    <div class="divTableHead">Business Impact</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Chapter 6</strong></div>
                        <div class="divTableCell">6.1-6.5: Continuous PDFs</div>
                        <div class="divTableCell">Model continuous phenomena</div>
                        <div class="divTableCell">Quality control, reliability, performance</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Chapter 7</strong></div>
                        <div class="divTableCell">7.1-7.5: Sampling distributions</div>
                        <div class="divTableCell">Understand sample behavior</div>
                        <div class="divTableCell">Research design, survey planning</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Chapter 8</strong></div>
                        <div class="divTableCell">8.1-8.7: Interval estimation</div>
                        <div class="divTableCell">Make inferences with confidence</div>
                        <div class="divTableCell">Decision making, risk assessment</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Best Practices Summary</strong></h4>
            
            <ol>
                <li><strong>Master Chapter 7 first:</strong> Understand sampling distribution foundations</li>
                <li><strong>Check finite population conditions:</strong> Apply correction when n/N > 0.05</li>
                <li><strong>Verify normal approximation:</strong> Ensure conditions are met before proceeding</li>
                <li><strong>Always check assumptions</strong> before applying formulas</li>
                <li><strong>Use conservative planning values</strong> when uncertain</li>
                <li><strong>Consider business context</strong> when selecting confidence levels</li>
                <li><strong>Plan sample sizes carefully</strong> to balance cost and precision</li>
                <li><strong>Document all assumptions</strong> and planning values used</li>
                <li><strong>Verify normal approximation conditions</strong> after data collection</li>
                <li><strong>Round sample sizes up</strong> to ensure adequate precision</li>
                <li><strong>Consider practical constraints</strong> in sample size determination</li>
            </ol>`
        }
    ]
};
