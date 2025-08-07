const MODULE4_CONTINUOUS_DISTRIBUTIONS_NOTES = {
    continuousDistributions: [
        {
            id: 401,
            title: "Introduction to Continuous Probability Distributions",
            category: "continuous-distributions",
            content: `<h3><strong>Introduction to Continuous Probability Distributions</strong></h3>
            
            <h4><strong>Key Differences from Discrete Distributions</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Aspect</div>
                    <div class="divTableHead">Discrete Distribution</div>
                    <div class="divTableHead">Continuous Distribution</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Variable Type</strong></div>
                        <div class="divTableCell">Countable values (0, 1, 2, 3...)</div>
                        <div class="divTableCell">Uncountable values (any real number)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Probability Function</strong></div>
                        <div class="divTableCell">Probability Mass Function (PMF)</div>
                        <div class="divTableCell">Probability Density Function (PDF)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>P(X = x)</strong></div>
                        <div class="divTableCell">Can be greater than 0</div>
                        <div class="divTableCell">Always equals 0</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Probability Calculation</strong></div>
                        <div class="divTableCell">P(X = specific value)</div>
                        <div class="divTableCell">P(a ≤ X ≤ b) = Area under curve</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Probability Density Function (PDF)</strong></h4>
            <ul>
                <li><strong>Definition:</strong> f(x) describes the relative likelihood of the random variable X taking on a given value</li>
                <li><strong>Properties:</strong>
                    <ul>
                        <li>f(x) ≥ 0 for all x</li>
                        <li>∫ f(x)dx = 1 (total area under curve = 1)</li>
                        <li>P(a ≤ X ≤ b) = ∫[a to b] f(x)dx</li>
                    </ul>
                </li>
            </ul>
            
            <h4><strong>Cumulative Distribution Function (CDF)</strong></h4>
            <ul>
                <li><strong>Definition:</strong> F(x) = P(X ≤ x)</li>
                <li><strong>Relationship to PDF:</strong> F(x) = ∫[-∞ to x] f(t)dt</li>
                <li><strong>Properties:</strong>
                    <ul>
                        <li>F(x) is non-decreasing</li>
                        <li>0 ≤ F(x) ≤ 1</li>
                        <li>F(-∞) = 0, F(∞) = 1</li>
                    </ul>
                </li>
            </ul>
            
            <h4><strong>Expected Value and Variance</strong></h4>
            <div class="formula">
                <strong>Expected Value:</strong> E(X) = μ = ∫ x·f(x)dx<br/>
                <strong>Variance:</strong> Var(X) = σ² = ∫ (x-μ)²·f(x)dx = E(X²) - [E(X)]²<br/>
                <strong>Standard Deviation:</strong> σ = √Var(X)
            </div>
            
            <h4><strong>Common Continuous Distributions</strong></h4>
            <ol>
                <li><strong>Uniform Distribution:</strong> Constant probability over an interval</li>
                <li><strong>Normal Distribution:</strong> Bell-shaped curve, most important in statistics</li>
                <li><strong>Exponential Distribution:</strong> Models waiting times and lifetimes</li>
                <li><strong>Beta Distribution:</strong> Models proportions and percentages</li>
                <li><strong>Gamma Distribution:</strong> Generalizes exponential distribution</li>
            </ol>
            
            <h4><strong>Business Applications</strong></h4>
            <ul>
                <li><strong>Quality Control:</strong> Product dimensions, weights, tolerances</li>
                <li><strong>Finance:</strong> Stock prices, returns, risk modeling</li>
                <li><strong>Operations:</strong> Service times, processing times, waiting times</li>
                <li><strong>Marketing:</strong> Customer lifetime value, response times</li>
                <li><strong>Engineering:</strong> Reliability analysis, failure times</li>
            </ul>`
        }
    ],
    
    uniformDistribution: [
        {
            id: 402,
            title: "Uniform Probability Distribution",
            category: "uniform-distribution",
            content: `<h3><strong>Uniform Probability Distribution</strong></h3>
            
            <h4><strong>Introduction: Flight Time Example</strong></h4>
            <p>Consider the random variable x representing the flight time of an airplane traveling from Chicago to New York. Suppose the flight time can be any value in the interval from 120 minutes to 140 minutes. Because the random variable x can assume any value in that interval, x is a continuous rather than a discrete random variable.</p>
            
            <p>When sufficient actual flight data shows that the probability of a flight time within any 1-minute interval is the same as the probability of a flight time within any other 1-minute interval contained in the larger interval from 120 to 140 minutes, the random variable x is said to have a <strong>uniform probability distribution</strong>.</p>
            
            <p><strong>Key Insight:</strong> <em>Whenever the probability is proportional to the length of the interval, the random variable is uniformly distributed.</em></p>
            
            <h4><strong>Probability Density Function</strong></h4>
            <p>For the flight-time random variable, the probability density function is:</p>
            <div class="formula">
                f(x) = 1/20 &nbsp;&nbsp;&nbsp;&nbsp;for 120 ≤ x ≤ 140<br/>
                f(x) = 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elsewhere
            </div>
            
            <p><strong>General Formula:</strong></p>
            <div class="formula">
                <strong>UNIFORM PROBABILITY DENSITY FUNCTION</strong><br/>
                f(x) = 1/(b-a) &nbsp;&nbsp;&nbsp;&nbsp;for a ≤ x ≤ b<br/>
                f(x) = 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elsewhere<br/>
                <em>where a and b are the minimum and maximum values</em>
            </div>
            
            <h4><strong>Area as a Measure of Probability</strong></h4>
            <p>For continuous random variables, we compute probabilities as the area under the probability density function curve. For the uniform distribution, this creates a rectangular area.</p>
            
            <p><strong>Example Calculation:</strong> What is P(120 ≤ x ≤ 130)?</p>
            <div class="formula">
                Area = width × height<br/>
                Width = 130 - 120 = 10<br/>
                Height = f(x) = 1/20<br/>
                P(120 ≤ x ≤ 130) = 10 × (1/20) = 10/20 = 0.50
            </div>
            
            <h4><strong>Interactive Uniform Distribution Calculator</strong></h4>
            <div style="background-color: #f8f9fa; border: 2px solid #007bff; border-radius: 10px; padding: 20px; margin: 20px 0;">
                <h5 style="color: #007bff; margin-bottom: 15px;">📊 Calculate Uniform Probabilities and Statistics</h5>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <label for="uniform-a" style="display: block; font-weight: bold; margin-bottom: 5px;">Minimum Value (a):</label>
                        <input type="number" id="uniform-a" value="120" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                    </div>
                    <div>
                        <label for="uniform-b" style="display: block; font-weight: bold; margin-bottom: 5px;">Maximum Value (b):</label>
                        <input type="number" id="uniform-b" value="140" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <label for="uniform-x1" style="display: block; font-weight: bold; margin-bottom: 5px;">Lower Bound (x₁):</label>
                        <input type="number" id="uniform-x1" value="125" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                    </div>
                    <div>
                        <label for="uniform-x2" style="display: block; font-weight: bold; margin-bottom: 5px;">Upper Bound (x₂):</label>
                        <input type="number" id="uniform-x2" value="135" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                    </div>
                </div>
                
                <button onclick="calculateUniform()" style="background-color: #007bff; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: bold;">Calculate Results</button>
                
                <div id="uniform-results" style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 6px; border: 1px solid #ddd;">
                    <p><em>Enter values and click "Calculate Results" to see the probability and statistics.</em></p>
                </div>
            </div>
            
            <h4><strong>Key Properties of Continuous Random Variables</strong></h4>
            <p>Two major differences distinguish continuous from discrete random variables:</p>
            <ol>
                <li><strong>Interval Probabilities:</strong> We no longer talk about the probability of the random variable assuming a particular value. Instead, we talk about the probability of the random variable assuming a value within some given interval.</li>
                <li><strong>Area Under Curve:</strong> The probability of a continuous random variable assuming a value within some given interval from x₁ to x₂ is defined to be the area under the graph of the probability density function between x₁ and x₂.</li>
            </ol>
            
            <p><strong>Important Implications:</strong></p>
            <ul>
                <li>The probability of any particular value is zero: P(x = c) = 0</li>
                <li>P(a ≤ x ≤ b) = P(a < x < b) = P(a ≤ x < b) = P(a < x ≤ b)</li>
                <li>Total area under f(x) equals 1: ∫ f(x)dx = 1</li>
                <li>f(x) ≥ 0 for all values of x</li>
            </ul>
            
            <h4><strong>Expected Value and Variance Formulas</strong></h4>
            <p>For the uniform continuous probability distribution:</p>
            <div class="formula">
                <strong>Expected Value:</strong> E(x) = (a + b)/2<br/>
                <strong>Variance:</strong> Var(x) = (b - a)²/12<br/>
                <strong>Standard Deviation:</strong> σ = √[(b - a)²/12]
            </div>
            
            <h4><strong>Flight Time Example Calculations</strong></h4>
            <p>For flight times from Chicago to New York (a = 120, b = 140):</p>
            <div class="formula">
                E(x) = (120 + 140)/2 = 260/2 = 130 minutes<br/>
                Var(x) = (140 - 120)²/12 = 400/12 = 33.33<br/>
                σ = √33.33 = 5.77 minutes
            </div>
            
            <h4><strong>Additional Probability Examples</strong></h4>
            
            <h5><strong>Example 1: Flight Time Between 128 and 136 Minutes</strong></h5>
            <div class="formula">
                Width = 136 - 128 = 8<br/>
                Height = f(x) = 1/20<br/>
                P(128 ≤ x ≤ 136) = 8 × (1/20) = 0.40
            </div>
            
            <h5><strong>Example 2: Verification of Total Probability</strong></h5>
            <div class="formula">
                P(120 ≤ x ≤ 140) = 20 × (1/20) = 1<br/>
                <em>The total area under f(x) equals 1, as required</em>
            </div>
            
            <h4><strong>Business Applications</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Industry</div>
                    <div class="divTableHead">Application</div>
                    <div class="divTableHead">Example</div>
                    <div class="divTableHead">Calculation</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Transportation</div>
                        <div class="divTableCell">Flight/delivery times</div>
                        <div class="divTableCell">120-140 minute flight</div>
                        <div class="divTableCell">P(125 ≤ x ≤ 135) = 10/20 = 0.5</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Manufacturing</div>
                        <div class="divTableCell">Product dimensions</div>
                        <div class="divTableCell">Pipe diameter 9.95-10.05 mm</div>
                        <div class="divTableCell">P(within spec) = (spec range)/0.10</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Finance</div>
                        <div class="divTableCell">Random number generation</div>
                        <div class="divTableCell">Monte Carlo simulations</div>
                        <div class="divTableCell">U(0,1) → transform to other distributions</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Retail</div>
                        <div class="divTableCell">Customer arrival patterns</div>
                        <div class="divTableCell">Peak hour traffic: 5-7 PM</div>
                        <div class="divTableCell">P(5:30-6:30) = 60/120 = 0.5</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Graphical Representation</strong></h4>
            <p>The uniform distribution appears as a rectangle when graphed:</p>
            <ul>
                <li><strong>Height:</strong> Constant at 1/(b-a)</li>
                <li><strong>Width:</strong> From a to b</li>
                <li><strong>Area:</strong> Height × Width = [1/(b-a)] × (b-a) = 1</li>
            </ul>
            
            <h4><strong>Practical Problem-Solving Steps</strong></h4>
            <ol>
                <li><strong>Identify Parameters:</strong> Determine a and b values</li>
                <li><strong>Write PDF:</strong> f(x) = 1/(b-a) for a ≤ x ≤ b</li>
                <li><strong>Calculate Probabilities:</strong> Use area = width × height</li>
                <li><strong>Find Descriptive Statistics:</strong> Apply formulas for mean and variance</li>
                <li><strong>Interpret Results:</strong> Relate back to business context</li>
            </ol>
            
            <h4><strong>Why Uniform Distribution Matters</strong></h4>
            <ul>
                <li><strong>Foundation:</strong> Simplest continuous distribution to understand</li>
                <li><strong>Building Block:</strong> Used to generate other random variables</li>
                <li><strong>Real Applications:</strong> Many business processes exhibit uniform behavior</li>
                <li><strong>Quality Control:</strong> Manufacturing tolerances often uniformly distributed</li>
                <li><strong>Simulation:</strong> Essential for Monte Carlo methods and random sampling</li>
            </ul>`
        }
    ],
    
    normalDistribution: [
        {
            id: 403,
            title: "Normal Probability Distribution",
            category: "normal-distribution",
            content: `<h3><strong>Normal Probability Distribution</strong></h3>
            
            <h4><strong>Introduction: The Most Important Distribution</strong></h4>
            <p>The most important probability distribution for describing a continuous random variable is the <strong>normal probability distribution</strong>. The normal distribution has been used in a wide variety of practical applications in which the random variables are:</p>
            <ul>
                <li>Heights and weights of people</li>
                <li>Test scores</li>
                <li>Scientific measurements</li>
                <li>Amounts of rainfall</li>
                <li>And other similar values</li>
            </ul>
            <p>It is also widely used in <strong>statistical inference</strong>, which is the major topic of the remainder of this book. In such applications, the normal distribution provides a description of the likely results obtained through sampling.</p>
            
            <h4><strong>Normal Curve: The Bell-Shaped Distribution</strong></h4>
            <p>The form, or shape, of the normal distribution is illustrated by the bell-shaped normal curve. The probability density function that defines the bell-shaped curve follows:</p>
            
            <div class="formula">
                <strong>NORMAL PROBABILITY DENSITY FUNCTION</strong><br/>
                f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²))<br/>
                where:<br/>
                μ = mean<br/>
                σ = standard deviation<br/>
                π = 3.14159<br/>
                e = 2.71828
            </div>
            
            <p><strong>Key Insight:</strong> <em>The normal curve has two parameters, μ and σ. They determine the location and shape of the normal distribution.</em></p>
            
            <h4><strong>Characteristics of the Normal Distribution</strong></h4>
            
            <h5><strong>1. Family of Distributions</strong></h5>
            <p>The entire family of normal distributions is differentiated by two parameters: the mean μ and the standard deviation σ.</p>
            
            <h5><strong>2. Central Tendency</strong></h5>
            <p>The highest point on the normal curve is at the mean, which is also the median and mode of the distribution.</p>
            
            <h5><strong>3. Mean Location</strong></h5>
            <p>The mean of the distribution can be any numerical value: negative, zero, or positive. Three normal distributions with the same standard deviation but different means (-10, 0, and 20) show how the curve shifts horizontally.</p>
            
            <h5><strong>4. Symmetry</strong></h5>
            <p>The normal distribution is symmetric, with the shape of the normal curve to the left of the mean a mirror image of the shape of the normal curve to the right of the mean. The tails extend to infinity in both directions and theoretically never touch the horizontal axis. Because it is symmetric, the normal distribution is not skewed; its skewness measure is zero.</p>
            
            <h5><strong>5. Standard Deviation Effect</strong></h5>
            <p>The standard deviation determines how flat and wide the normal curve is. Larger values of the standard deviation result in wider, flatter curves, showing more variability in the data.</p>
            
            <h5><strong>6. Area Properties</strong></h5>
            <p>Probabilities for the normal random variable are given by areas under the normal curve. The total area under the curve for the normal distribution is 1. Because the distribution is symmetric, the area under the curve to the left of the mean is 0.50 and the area under the curve to the right of the mean is 0.50.</p>
            
            <h5><strong>7. Empirical Rule Percentages</strong></h5>
            <p><em>These percentages are the basis for the empirical rule introduced in Section 3.3.</em></p>
            <ul>
                <li><strong>68.3%</strong> of the values of a normal random variable are within plus or minus one standard deviation of its mean</li>
                <li><strong>95.4%</strong> of the values of a normal random variable are within plus or minus two standard deviations of its mean</li>
                <li><strong>99.7%</strong> of the values of a normal random variable are within plus or minus three standard deviations of its mean</li>
            </ul>
            
            <h4><strong>Standard Normal Probability Distribution</strong></h4>
            <p>A random variable that has a normal distribution with a mean of zero and a standard deviation of one is said to have a <strong>standard normal probability distribution</strong>. The letter <strong>z</strong> is commonly used to designate this particular normal random variable.</p>
            
            <p>The standard normal distribution has the special properties of μ = 0 and σ = 1. Because μ = 0 and σ = 1, the formula for the standard normal probability density function is a simpler version:</p>
            
            <div class="formula">
                <strong>STANDARD NORMAL DENSITY FUNCTION</strong><br/>
                f(z) = (1/√(2π)) × e^(-z²/2)
            </div>
            
            <h4><strong>Using the Standard Normal Table</strong></h4>
            <p><em>For the normal probability density function, the height of the normal curve varies and more advanced mathematics is required to compute the areas that represent probability.</em></p>
            
            <p>For the standard normal distribution, areas under the normal curve have been computed and are available in tables. The three types of probabilities we need to compute include:</p>
            <ol>
                <li>The probability that the standard normal random variable z will be <strong>less than or equal to</strong> a given value</li>
                <li>The probability that z will be <strong>between two given values</strong></li>
                <li>The probability that z will be <strong>greater than or equal to</strong> a given value</li>
            </ol>
            
            <h4><strong>Standard Normal Table Examples</strong></h4>
            
            <h5><strong>Example 1: P(z ≤ 1.00)</strong></h5>
            <p><em>Because the standard normal random variable is continuous, P(z ≤ 1.00) = P(z < 1.00).</em></p>
            <div class="formula">
                Using the standard normal table:<br/>
                Row 1.0, Column .00 → Table value = 0.8413<br/>
                Therefore: P(z ≤ 1.00) = 0.8413
            </div>
            
            <h5><strong>Example 2: P(-0.50 ≤ z ≤ 1.25)</strong></h5>
            <p>Three steps are required:</p>
            <ol>
                <li>Find area to the left of z = 1.25: P(z ≤ 1.25) = 0.8944</li>
                <li>Find area to the left of z = -0.50: P(z ≤ -0.50) = 0.3085</li>
                <li>Subtract: P(-0.50 ≤ z ≤ 1.25) = 0.8944 - 0.3085 = 0.5859</li>
            </ol>
            
            <h5><strong>Example 3: P(-1.00 ≤ z ≤ 1.00)</strong></h5>
            <div class="formula">
                P(z ≤ 1.00) = 0.8413<br/>
                P(z ≤ -1.00) = 0.1587<br/>
                P(-1.00 ≤ z ≤ 1.00) = 0.8413 - 0.1587 = 0.6826
            </div>
            
            <h5><strong>Example 4: P(z ≥ 1.58)</strong></h5>
            <div class="formula">
                P(z ≤ 1.58) = 0.9429<br/>
                P(z ≥ 1.58) = 1 - 0.9429 = 0.0571
            </div>
            
            <h4><strong>Inverse Normal Problems</strong></h4>
            <p><em>Given a probability, we can use the standard normal table in an inverse fashion to find the corresponding z value.</em></p>
            
            <h5><strong>Example: Finding z for Upper Tail Probability = 0.10</strong></h5>
            <p>If the upper tail probability is 0.10, then the area to the left must be 0.9000.</p>
            <div class="formula">
                Scanning the table for 0.9000 (closest value is 0.8997)<br/>
                Corresponding z value: z = 1.28<br/>
                Therefore: P(z ≥ 1.28) ≈ 0.10
            </div>
            
            <h4><strong>Converting Any Normal Distribution to Standard Normal</strong></h4>
            <p><em>The formula for the standard normal random variable is similar to the formula we introduced in Chapter 3 for computing z-scores for a data set.</em></p>
            
            <div class="formula">
                <strong>CONVERTING TO THE STANDARD NORMAL RANDOM VARIABLE</strong><br/>
                z = (x - μ)/σ
            </div>
            
            <p><strong>Key Insights:</strong></p>
            <ul>
                <li>A value of x equal to its mean μ results in z = 0</li>
                <li>An x value one standard deviation above its mean corresponds to z = 1</li>
                <li>We can interpret z as the number of standard deviations that x is from its mean μ</li>
            </ul>
            
            <h4><strong>Grear Tire Company Case Study</strong></h4>
            
            <h5><strong>Problem Setup</strong></h5>
            <p>The Grear Tire Company developed a new steel-belted radial tire. From road tests:</p>
            <ul>
                <li>Mean tire mileage: μ = 36,500 miles</li>
                <li>Standard deviation: σ = 5,000 miles</li>
                <li>Normal distribution assumption is reasonable</li>
            </ul>
            
            <h5><strong>Question 1: Percentage of Tires Lasting More Than 40,000 Miles</strong></h5>
            <div class="formula">
                z = (40,000 - 36,500)/5,000 = 3,500/5,000 = 0.70<br/>
                P(z ≤ 0.70) = 0.7580<br/>
                P(x ≥ 40,000) = P(z ≥ 0.70) = 1 - 0.7580 = 0.2420<br/>
                <strong>Answer:</strong> About 24.2% of tires will exceed 40,000 miles
            </div>
            
            <h5><strong>Question 2: Guarantee Mileage for 10% Discount Eligibility</strong></h5>
            <p><em>The guarantee mileage we need to find is 1.28 standard deviations below the mean. Thus, x = μ - 1.28σ.</em></p>
            <div class="formula">
                For 10% in lower tail, we need z = -1.28<br/>
                x = μ + zσ = 36,500 + (-1.28)(5,000)<br/>
                x = 36,500 - 6,400 = 30,100 miles<br/>
                <strong>Decision:</strong> Set guarantee at 30,000 miles
            </div>
            
            <p><em>With the guarantee set at 30,000 miles, the actual percentage eligible for the guarantee will be 9.68%.</em></p>
            
            <h4><strong>Business Applications Summary</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Industry</div>
                    <div class="divTableHead">Application</div>
                    <div class="divTableHead">Example</div>
                    <div class="divTableHead">Normal Distribution Use</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Manufacturing</div>
                        <div class="divTableCell">Product quality control</div>
                        <div class="divTableCell">Tire mileage, part dimensions</div>
                        <div class="divTableCell">Set warranties, specifications</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Finance</div>
                        <div class="divTableCell">Risk assessment</div>
                        <div class="divTableCell">Portfolio returns, loan defaults</div>
                        <div class="divTableCell">Calculate VaR, set reserves</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Human Resources</div>
                        <div class="divTableCell">Performance evaluation</div>
                        <div class="divTableCell">Test scores, employee ratings</div>
                        <div class="divTableCell">Set performance standards</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Marketing</div>
                        <div class="divTableCell">Customer behavior analysis</div>
                        <div class="divTableCell">Purchase amounts, response times</div>
                        <div class="divTableCell">Optimize campaigns, pricing</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Key Problem-Solving Steps</strong></h4>
            <ol>
                <li><strong>Identify Parameters:</strong> Determine μ and σ from problem context</li>
                <li><strong>Visualize Problem:</strong> Sketch normal curve and shade area of interest</li>
                <li><strong>Standardize:</strong> Convert x values to z using z = (x - μ)/σ</li>
                <li><strong>Use Standard Normal Table:</strong> Find probabilities or critical values</li>
                <li><strong>Interpret Results:</strong> State answer in business context</li>
                <li><strong>Make Decisions:</strong> Use probability information for business decisions</li>
            </ol>
            
            <h4><strong>Why Normal Distribution Matters in Business</strong></h4>
            <ul>
                <li><strong>Decision Making:</strong> Provides probability information for risk assessment</li>
                <li><strong>Quality Control:</strong> Helps set specifications and predict defect rates</li>
                <li><strong>Financial Planning:</strong> Models returns and helps calculate risks</li>
                <li><strong>Statistical Inference:</strong> Foundation for hypothesis testing and confidence intervals</li>
                <li><strong>Process Improvement:</strong> Identifies areas for operational enhancement</li>
            </ul>
            
            <h4><strong>Normal Approximation of Binomial Probabilities</strong></h4>
            <p>In Section 5.5 we presented the discrete binomial distribution. Recall that a binomial experiment consists of a sequence of n identical independent trials with each trial having two possible outcomes, a success or a failure. The probability of a success on a trial is the same for all trials and is denoted by p. The binomial random variable is the number of successes in the n trials, and probability questions pertain to the probability of x successes in the n trials.</p>
            
            <h5><strong>When to Use Normal Approximation</strong></h5>
            <p>When the number of trials becomes large, evaluating the binomial probability function by hand or with a calculator is difficult. In cases where <strong>np ≥ 5</strong> and <strong>n(1-p) ≥ 5</strong>, the normal distribution provides an easy-to-use approximation of binomial probabilities.</p>
            
            <div class="formula">
                <strong>NORMAL APPROXIMATION PARAMETERS</strong><br/>
                μ = np<br/>
                σ = √[np(1-p)]
            </div>
            
            <h5><strong>The Continuity Correction Factor</strong></h5>
            <p>Recall that, with a continuous probability distribution, probabilities are computed as areas under the probability density function. As a result, the probability of any single value for the random variable is zero. Thus to approximate the binomial probability of x successes, we compute the area under the corresponding normal curve with appropriate adjustments.</p>
            
            <p>The <strong>continuity correction factor</strong> of 0.5 is introduced because a continuous distribution is being used to approximate a discrete distribution:</p>
            <div class="formula">
                P(X = k) ≈ P(k - 0.5 ≤ Y ≤ k + 0.5)<br/>
                P(X ≤ k) ≈ P(Y ≤ k + 0.5)<br/>
                P(X ≥ k) ≈ P(Y ≥ k - 0.5)<br/>
                P(X < k) ≈ P(Y ≤ k - 0.5)<br/>
                P(X > k) ≈ P(Y ≥ k + 0.5)
            </div>
            
            <h5><strong>Example 1: Invoice Errors - Exact Probability</strong></h5>
            <p><strong>Problem:</strong> A particular company has a history of making errors in 10% of its invoices. A sample of 100 invoices has been taken, and we want to compute the probability that exactly 12 invoices contain errors.</p>
            
            <p><strong>Setup:</strong></p>
            <div class="formula">
                n = 100, p = 0.10<br/>
                Check conditions: np = 100(0.10) = 10 ≥ 5 ✓<br/>
                n(1-p) = 100(0.90) = 90 ≥ 5 ✓<br/>
                μ = np = 100(0.10) = 10<br/>
                σ = √[np(1-p)] = √[100(0.10)(0.90)] = √9 = 3
            </div>
            
            <p><strong>Solution:</strong></p>
            <p>For P(X = 12), we use the continuity correction to find P(11.5 ≤ Y ≤ 12.5):</p>
            <div class="formula">
                At x = 12.5: z = (12.5 - 10)/3 = 2.5/3 = 0.83<br/>
                At x = 11.5: z = (11.5 - 10)/3 = 1.5/3 = 0.50<br/><br/>
                
                P(z ≤ 0.83) = 0.7967<br/>
                P(z ≤ 0.50) = 0.6915<br/>
                P(11.5 ≤ X ≤ 12.5) = 0.7967 - 0.6915 = 0.1052<br/><br/>
                
                <strong>Answer:</strong> The probability of exactly 12 errors is approximately 0.1052 or 10.52%
            </div>
            
            <h5><strong>Example 2: Invoice Errors - Cumulative Probability</strong></h5>
            <p><strong>Problem:</strong> Using the same scenario, suppose we want to compute the probability of 13 or fewer errors in the sample of 100 invoices.</p>
            
            <p><strong>Solution:</strong></p>
            <p>For P(X ≤ 13), we use the continuity correction to find P(Y ≤ 13.5):</p>
            <div class="formula">
                At x = 13.5: z = (13.5 - 10)/3 = 3.5/3 = 1.17<br/><br/>
                
                P(z ≤ 1.17) = 0.8790<br/><br/>
                
                <strong>Answer:</strong> The probability of 13 or fewer errors is approximately 0.8790 or 87.90%
            </div>
            
            <h5><strong>Example 3: Quality Control Application</strong></h5>
            <p><strong>Problem:</strong> A manufacturing process produces 5% defective items. In a batch of 200 items, what is the probability that more than 15 items are defective?</p>
            
            <p><strong>Solution:</strong></p>
            <div class="formula">
                n = 200, p = 0.05<br/>
                Check: np = 10 ≥ 5 ✓, n(1-p) = 190 ≥ 5 ✓<br/>
                μ = 200(0.05) = 10<br/>
                σ = √[200(0.05)(0.95)] = √9.5 = 3.08<br/><br/>
                
                P(X > 15) = P(Y ≥ 15.5) using continuity correction<br/>
                z = (15.5 - 10)/3.08 = 5.5/3.08 = 1.79<br/>
                P(z ≥ 1.79) = 1 - P(z ≤ 1.79) = 1 - 0.9633 = 0.0367<br/><br/>
                
                <strong>Answer:</strong> 3.67% chance of more than 15 defective items
            </div>
            
            <h5><strong>Summary: Normal Approximation Guidelines</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Binomial Probability</div>
                    <div class="divTableHead">Normal Approximation</div>
                    <div class="divTableHead">Continuity Correction</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">P(X = k)</div>
                        <div class="divTableCell">P(k - 0.5 ≤ Y ≤ k + 0.5)</div>
                        <div class="divTableCell">±0.5 around exact value</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">P(X ≤ k)</div>
                        <div class="divTableCell">P(Y ≤ k + 0.5)</div>
                        <div class="divTableCell">+0.5 to upper bound</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">P(X ≥ k)</div>
                        <div class="divTableCell">P(Y ≥ k - 0.5)</div>
                        <div class="divTableCell">-0.5 to lower bound</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">P(X < k)</div>
                        <div class="divTableCell">P(Y ≤ k - 0.5)</div>
                        <div class="divTableCell">-0.5 to strict upper bound</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">P(X > k)</div>
                        <div class="divTableCell">P(Y ≥ k + 0.5)</div>
                        <div class="divTableCell">+0.5 to strict lower bound</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>When Normal Approximation Works Best</strong></h5>
            <ul>
                <li><strong>Large Sample Size:</strong> n ≥ 30 generally provides good approximation</li>
                <li><strong>Moderate p:</strong> Best when p is close to 0.5</li>
                <li><strong>Condition Check:</strong> Both np ≥ 5 and n(1-p) ≥ 5 must be satisfied</li>
                <li><strong>Efficiency:</strong> Much faster than calculating exact binomial probabilities for large n</li>
            </ul>
            
            <h5><strong>Business Applications</strong></h5>
            <ul>
                <li><strong>Quality Control:</strong> Approximating defect rates in large production runs</li>
                <li><strong>Marketing:</strong> Estimating response rates to large-scale campaigns</li>
                <li><strong>Finance:</strong> Modeling default rates in large loan portfolios</li>
                <li><strong>Operations:</strong> Analyzing success rates in large-volume processes</li>
                <li><strong>Audit Sampling:</strong> Estimating error rates in large populations</li>
            </ul>
            
            <p><strong>Final Insight:</strong> <em>Probability does not make a decision recommendation directly, but it provides information that helps the decision maker better understand the risks and uncertainties associated with the problem. Ultimately, this information may assist the decision maker in reaching a good decision.</em></p>
            
            <h4><strong>Interactive Normal Distribution Calculator</strong></h4>
            <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h5 style="color: #007bff; margin-bottom: 15px;">🧮 Normal Distribution Calculator & Graph</h5>
                <p style="margin-bottom: 15px; color: #666;">Calculate probabilities for any normal distribution and visualize the results with an interactive graph.</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div>
                        <h6 style="margin-bottom: 10px; color: #333;">Distribution Parameters:</h6>
                        <div style="margin-bottom: 15px;">
                            <label for="normal-mu" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Mean (μ):</label>
                            <input type="number" id="normal-mu" value="100" placeholder="e.g., 100" 
                                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label for="normal-sigma" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Standard Deviation (σ):</label>
                            <input type="number" id="normal-sigma" value="15" placeholder="e.g., 15" 
                                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                        </div>
                    </div>
                    <div>
                        <h6 style="margin-bottom: 10px; color: #333;">Probability Range:</h6>
                        <div style="margin-bottom: 15px;">
                            <label for="normal-x1" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Lower Bound (x₁):</label>
                            <input type="number" id="normal-x1" value="85" placeholder="e.g., 85" 
                                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label for="normal-x2" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Upper Bound (x₂):</label>
                            <input type="number" id="normal-x2" value="115" placeholder="e.g., 115" 
                                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-bottom: 20px;">
                    <button onclick="calculateNormal()" style="background-color: #007bff; color: white; padding: 12px 25px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold;">
                        📊 Calculate Normal Probability
                    </button>
                </div>
                
                <div id="calculateNormal-results" style="margin-top: 20px;"></div>
            </div>
            
            <div style="margin-top: 15px; padding: 15px; background-color: #e8f4fd; border-radius: 4px; border-left: 4px solid #007bff;">
                <h6 style="color: #007bff; margin-bottom: 8px;">💡 Example Use Cases:</h6>
                <ul style="margin: 5px 0; color: #333;">
                    <li><strong>Quality Control:</strong> μ=100, σ=5, find P(95 ≤ X ≤ 105) for product specifications</li>
                    <li><strong>Test Scores:</strong> μ=500, σ=100, find P(400 ≤ X ≤ 600) for grade distributions</li>
                    <li><strong>Manufacturing:</strong> μ=50, σ=2, find P(48 ≤ X ≤ 52) for tolerance analysis</li>
                    <li><strong>Business Analytics:</strong> μ=1000, σ=200, find P(800 ≤ X ≤ 1200) for sales forecasting</li>
                </ul>
            </div>`
        }
    ],
    
    exponentialDistribution: [
        {
            id: 404,
            title: "Exponential Probability Distribution",
            category: "exponential-distribution",
            content: `<h3><strong>Exponential Probability Distribution</strong></h3>
            
            <h4><strong>Introduction and Applications</strong></h4>
            <p>The exponential probability distribution may be used for random variables such as:</p>
            <ul>
                <li>The time between arrivals at a car wash</li>
                <li>The time required to load a truck</li>
                <li>The distance between major defects in a highway</li>
                <li>And many other similar applications</li>
            </ul>
            
            <p><em>In waiting line applications, the exponential distribution is often used for service time.</em></p>
            
            <h4><strong>Exponential Probability Density Function</strong></h4>
            <div class="formula">
                <strong>EXPONENTIAL PROBABILITY DENSITY FUNCTION</strong><br/>
                f(x) = (1/μ) × e^(-x/μ) &nbsp;&nbsp;&nbsp;&nbsp;for x ≥ 0<br/>
                where μ = expected value or mean
            </div>
            
            <h4><strong>Schips Loading Dock Example</strong></h4>
            <p>As an example of the exponential distribution, suppose that x represents the loading time for a truck at the Schips loading dock and follows such a distribution. If the mean, or average, loading time is 15 minutes (μ = 15), the appropriate probability density function for x is:</p>
            
            <div class="formula">
                f(x) = (1/15) × e^(-x/15)
            </div>
            
            <p>This creates a right-skewed distribution with the highest probability at x = 0, decreasing exponentially as loading time increases.</p>
            
            <h4><strong>Computing Probabilities for the Exponential Distribution</strong></h4>
            <p>As with any continuous probability distribution, the area under the curve corresponding to an interval provides the probability that the random variable assumes a value in that interval.</p>
            
            <p>In the Schips loading dock example:</p>
            <ul>
                <li><strong>P(x ≤ 6):</strong> Probability that loading a truck will take 6 minutes or less (area from x = 0 to x = 6)</li>
                <li><strong>P(x ≤ 18):</strong> Probability that loading time will be 18 minutes or less (area from x = 0 to x = 18)</li>
                <li><strong>P(6 ≤ x ≤ 18):</strong> Probability that loading time will be between 6 and 18 minutes (area from x = 6 to x = 18)</li>
            </ul>
            
            <h4><strong>Cumulative Probability Formula</strong></h4>
            <p>To compute exponential probabilities, we use the following formula for cumulative probabilities:</p>
            
            <div class="formula">
                <strong>EXPONENTIAL DISTRIBUTION: CUMULATIVE PROBABILITIES</strong><br/>
                P(X ≤ x₀) = 1 - e^(-x₀/μ)
            </div>
            
            <h4><strong>Schips Loading Dock Calculations</strong></h4>
            <p>For the Schips loading dock example, x = loading time in minutes and μ = 15 minutes.</p>
            
            <div class="formula">
                P(X ≤ x₀) = 1 - e^(-x₀/15)
            </div>
            
            <h5><strong>Example 1: Loading Time ≤ 6 Minutes</strong></h5>
            <div class="formula">
                P(x ≤ 6) = 1 - e^(-6/15) = 1 - e^(-0.4) = 1 - 0.6703 = 0.3297<br/>
                <strong>Result:</strong> 32.97% probability of loading in 6 minutes or less
            </div>
            
            <h5><strong>Example 2: Loading Time ≤ 18 Minutes</strong></h5>
            <div class="formula">
                P(x ≤ 18) = 1 - e^(-18/15) = 1 - e^(-1.2) = 1 - 0.3012 = 0.6988<br/>
                <strong>Result:</strong> 69.88% probability of loading in 18 minutes or less
            </div>
            
            <h5><strong>Example 3: Loading Time Between 6 and 18 Minutes</strong></h5>
            <div class="formula">
                P(6 ≤ x ≤ 18) = P(x ≤ 18) - P(x ≤ 6)<br/>
                = 0.6988 - 0.3297 = 0.3691<br/>
                <strong>Result:</strong> 36.91% probability of loading between 6 and 18 minutes
            </div>
            
            <h4><strong>Key Property: Mean Equals Standard Deviation</strong></h4>
            <p><em>A property of the exponential distribution is that the mean and standard deviation are equal.</em></p>
            
            <p>In the Schips loading dock example:</p>
            <div class="formula">
                Mean: μ = 15 minutes<br/>
                Standard Deviation: σ = 15 minutes<br/>
                Variance: σ² = (15)² = 225
            </div>
            
            <h4><strong>Relationship Between Poisson and Exponential Distributions</strong></h4>
            <p>The continuous exponential probability distribution is related to the discrete Poisson distribution. <em>If arrivals follow a Poisson distribution, the time between arrivals must follow an exponential distribution.</em></p>
            
            <p><strong>Key Relationship:</strong> If the Poisson distribution provides an appropriate description of the number of occurrences per interval, the exponential distribution provides a description of the length of the interval between occurrences.</p>
            
            <h5><strong>Car Wash Example</strong></h5>
            <p>Suppose the number of cars that arrive at a car wash during one hour is described by a Poisson probability distribution with a mean of 10 cars per hour.</p>
            
            <p><strong>Poisson Distribution (Number of Arrivals):</strong></p>
            <div class="formula">
                f(x) = (10^x × e^(-10))/x!<br/>
                <em>Gives probability of x arrivals per hour</em>
            </div>
            
            <p><strong>Corresponding Exponential Distribution (Time Between Arrivals):</strong></p>
            <div class="formula">
                Average time between arrivals = 1 hour/10 cars = 0.1 hour/car<br/>
                Mean: μ = 0.1 hour per car<br/>
                PDF: f(x) = (1/0.1) × e^(-x/0.1) = 10e^(-10x)
            </div>
            
            <h4><strong>Distribution Characteristics</strong></h4>
            <p><em>As we can see from the distribution shape, the exponential distribution is skewed to the right. Indeed, the skewness measure for exponential distributions is 2. The exponential distribution gives us a good idea what a skewed distribution looks like.</em></p>
            
            <h4><strong>Additional Business Examples</strong></h4>
            
            <h5><strong>Example 4: Customer Service Center</strong></h5>
            <p><strong>Problem:</strong> Service times at a help desk follow an exponential distribution with mean μ = 8 minutes. Find the probability that a service call takes more than 12 minutes.</p>
            
            <p><strong>Solution:</strong></p>
            <div class="formula">
                P(x > 12) = 1 - P(x ≤ 12) = 1 - [1 - e^(-12/8)]<br/>
                = e^(-12/8) = e^(-1.5) = 0.2231<br/>
                <strong>Result:</strong> 22.31% of calls take more than 12 minutes
            </div>
            
            <h5><strong>Example 5: Equipment Maintenance</strong></h5>
            <p><strong>Problem:</strong> Time between equipment failures follows an exponential distribution with μ = 500 hours. What's the probability of no failure in the next 300 hours?</p>
            
            <p><strong>Solution:</strong></p>
            <div class="formula">
                P(x > 300) = e^(-300/500) = e^(-0.6) = 0.5488<br/>
                <strong>Result:</strong> 54.88% chance of no failure in 300 hours
            </div>
            
            <h4><strong>Summary of Key Formulas</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Property</div>
                    <div class="divTableHead">Formula</div>
                    <div class="divTableHead">Description</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">PDF</div>
                        <div class="divTableCell">f(x) = (1/μ)e^(-x/μ)</div>
                        <div class="divTableCell">Probability density function</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">CDF</div>
                        <div class="divTableCell">P(X ≤ x) = 1 - e^(-x/μ)</div>
                        <div class="divTableCell">Cumulative probability</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Mean</div>
                        <div class="divTableCell">E(X) = μ</div>
                        <div class="divTableCell">Expected value</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Variance</div>
                        <div class="divTableCell">Var(X) = μ²</div>
                        <div class="divTableCell">Variance equals mean squared</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Standard Deviation</div>
                        <div class="divTableCell">σ = μ</div>
                        <div class="divTableCell">Equal to the mean</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Business Applications</strong></h4>
            <ul>
                <li><strong>Operations Management:</strong> Service times, processing durations, loading/unloading times</li>
                <li><strong>Quality Control:</strong> Time between defects, equipment failure intervals</li>
                <li><strong>Customer Service:</strong> Call durations, wait times, response times</li>
                <li><strong>Transportation:</strong> Travel times, delivery intervals, arrival patterns</li>
                <li><strong>Maintenance:</strong> Equipment reliability, replacement scheduling</li>
                <li><strong>Finance:</strong> Time between transactions, default intervals</li>
            </ul>
            
            <h4><strong>Problem-Solving Steps</strong></h4>
            <ol>
                <li><strong>Identify the Process:</strong> Determine if exponential distribution is appropriate</li>
                <li><strong>Find the Mean:</strong> Calculate or identify μ from problem context</li>
                <li><strong>Apply Formula:</strong> Use P(X ≤ x) = 1 - e^(-x/μ)</li>
                <li><strong>Calculate Probability:</strong> Evaluate the exponential expression</li>
                <li><strong>Interpret Results:</strong> State answer in business context</li>
            </ol>
            
            <h4><strong>Why Exponential Distribution Matters</strong></h4>
            <ul>
                <li><strong>Memoryless Property:</strong> Future performance independent of past history</li>
                <li><strong>Simple Mathematics:</strong> Easy to calculate and apply</li>
                <li><strong>Wide Applicability:</strong> Models many natural waiting time phenomena</li>
                <li><strong>Poisson Connection:</strong> Links to arrival process modeling</li>
                <li><strong>Business Planning:</strong> Essential for service capacity and reliability analysis</li>
            </ul>
            
            <h4><strong>Interactive Exponential Distribution Calculator</strong></h4>
            <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h5 style="color: #007bff; margin-bottom: 15px;">🧮 Exponential Distribution Calculator & Graph</h5>
                <p style="margin-bottom: 15px; color: #666;">Calculate probabilities for exponential distributions and visualize waiting times, service times, and reliability analysis with an interactive graph.</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div>
                        <h6 style="margin-bottom: 10px; color: #333;">Distribution Parameter:</h6>
                        <div style="margin-bottom: 15px;">
                            <label for="exponential-mu" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Mean (μ) - Average Time:</label>
                            <input type="number" id="exponential-mu" value="15" placeholder="e.g., 15 minutes" 
                                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                            <small style="color: #666; font-size: 0.85em;">Note: σ = μ for exponential distribution</small>
                        </div>
                    </div>
                    <div>
                        <h6 style="margin-bottom: 10px; color: #333;">Time Range:</h6>
                        <div style="margin-bottom: 15px;">
                            <label for="exponential-x1" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Lower Bound (x₁):</label>
                            <input type="number" id="exponential-x1" value="0" placeholder="e.g., 0" min="0"
                                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label for="exponential-x2" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Upper Bound (x₂):</label>
                            <input type="number" id="exponential-x2" value="20" placeholder="e.g., 20" min="0"
                                   step="any" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-bottom: 20px;">
                    <button onclick="calculateExponential()" style="background-color: #007bff; color: white; padding: 12px 25px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold;">
                        📊 Calculate Exponential Probability
                    </button>
                </div>
                
                <div id="calculateExponential-results" style="margin-top: 20px;"></div>
            </div>
            
            <div style="margin-top: 15px; padding: 15px; background-color: #fff8e1; border-radius: 4px; border-left: 4px solid #ffc107;">
                <h6 style="color: #f57f17; margin-bottom: 8px;">💡 Example Use Cases:</h6>
                <ul style="margin: 5px 0; color: #333;">
                    <li><strong>Service Times:</strong> μ=8 minutes, find P(5 ≤ X ≤ 12) for customer service duration</li>
                    <li><strong>Equipment Reliability:</strong> μ=500 hours, find P(0 ≤ X ≤ 300) for failure-free operation</li>
                    <li><strong>Loading Dock:</strong> μ=15 minutes, find P(6 ≤ X ≤ 18) for truck loading times</li>
                    <li><strong>Call Center:</strong> μ=4 minutes, find P(2 ≤ X ≤ 8) for call handling times</li>
                </ul>
                <div style="margin-top: 10px; padding: 8px; background-color: #f3e5f5; border-radius: 3px;">
                    <strong style="color: #7b1fa2;">📍 Key Insight:</strong> <em>Exponential distribution is "memoryless" - the probability of an event occurring in the next time interval is independent of how much time has already elapsed.</em>
                </div>
            </div>`
        }
    ],
    
    samplingMethods: [
        {
            id: 405,
            title: "Sampling Methods and Population vs Sample",
            category: "sampling-methods",
            content: `<h3><strong>Sampling Methods and Population vs Sample</strong></h3>
            
            <h4><strong>The Electronics Associates Sampling Problem</strong></h4>
            
            <h5><strong>Business Context and Problem Setup</strong></h5>
            <p>The director of personnel for Electronics Associates, Inc. (EAI), has been assigned the task of developing a profile of the company's 2500 managers. The characteristics to be identified include the mean annual salary for the managers and the proportion of managers having completed the company's management training program.</p>
            
            <p><em>Often the cost of collecting information from a sample is substantially less than from a population, especially when personal interviews must be conducted to collect the information.</em></p>
            
            <h5><strong>Population Parameters</strong></h5>
            <p>Using the 2500 managers as the population for this study, we can find the annual salary and the training program status for each individual by referring to the firm's personnel records. Using the EAI data and the formulas presented in Chapter 3, we computed the population parameters.</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Population Parameter</div>
                    <div class="divTableHead">Symbol</div>
                    <div class="divTableHead">Value</div>
                    <div class="divTableHead">Description</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Population mean (annual salary)</div>
                        <div class="divTableCell">μ</div>
                        <div class="divTableCell">$51,800</div>
                        <div class="divTableCell">Average annual salary of all 2500 managers</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Population standard deviation</div>
                        <div class="divTableCell">σ</div>
                        <div class="divTableCell">$4,000</div>
                        <div class="divTableCell">Variability in annual salaries</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Population proportion (training completed)</div>
                        <div class="divTableCell">p</div>
                        <div class="divTableCell">0.60</div>
                        <div class="divTableCell">1500 of 2500 managers completed training program</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Insight:</strong> <em>Numerical characteristics of a population are called parameters.</em> The population mean annual salary (μ = $51,800), the population standard deviation of annual salary (σ = $4,000), and the population proportion that completed the training program (p = 0.60) are parameters of the population of EAI managers.</p>
            
            <h5><strong>The Sampling Motivation</strong></h5>
            <p>Now, suppose that the necessary information on all the EAI managers was not readily available in the company's database. The question we now consider is how the firm's director of personnel can obtain estimates of the population parameters by using a sample of managers rather than all 2500 managers in the population.</p>
            
            <p>Suppose that a sample of 30 managers will be used. Clearly, the time and the cost of developing a profile would be substantially less for 30 managers than for the entire population. If the personnel director could be assured that a sample of 30 managers would provide adequate information about the population of 2500 managers, working with a sample would be preferable to working with the entire population.</p>
            
            <h4><strong>Selecting a Sample</strong></h4>
            
            <h5><strong>Sampling from a Finite Population</strong></h5>
            <p>Statisticians recommend selecting a probability sample when sampling from a finite population because a probability sample allows them to make valid statistical inferences about the population. The simplest type of probability sample is one in which each sample of size n has the same probability of being selected. It is called a simple random sample.</p>
            
            <div class="formula">
                <strong>SIMPLE RANDOM SAMPLE (FINITE POPULATION)</strong><br/>
                A simple random sample of size n from a finite population of size N is a sample selected such that each possible sample of size n has the same probability of being selected.
            </div>
            
            <h5><strong>Simple Random Sampling Procedure for EAI</strong></h5>
            <p>To select a simple random sample from the finite population of EAI managers, we first construct a frame by assigning each manager a number. For example, we can assign the managers the numbers 1 to 2500 in the order that their names appear in the EAI personnel file.</p>
            
            <p>Next, we refer to a table of random numbers. Using the first row of the table, each digit is a random digit having an equal chance of occurring. Because the largest number in the population list of EAI managers, 2500, has four digits, we will select random numbers from the table in sets or groups of four digits.</p>
            
            <h5><strong>Random Number Selection Example</strong></h5>
            <p>The first 7 four-digit random numbers from the table are:</p>
            <div class="formula">
                6327 &nbsp; 1599 &nbsp; 8671 &nbsp; 7445 &nbsp; 1102 &nbsp; 1514 &nbsp; 1807
            </div>
            
            <p><strong>Selection Process:</strong></p>
            <ul>
                <li><strong>6327:</strong> Greater than 2500 → Discard</li>
                <li><strong>1599:</strong> Between 1 and 2500 → Select manager #1599</li>
                <li><strong>8671:</strong> Greater than 2500 → Discard</li>
                <li><strong>7445:</strong> Greater than 2500 → Discard</li>
                <li><strong>1102:</strong> Between 1 and 2500 → Select manager #1102</li>
                <li><strong>1514:</strong> Between 1 and 2500 → Select manager #1514</li>
                <li><strong>1807:</strong> Between 1 and 2500 → Select manager #1807</li>
            </ul>
            
            <p>This process continues until the simple random sample of 30 EAI managers has been obtained.</p>
            
            <h5><strong>Sampling Without Replacement</strong></h5>
            <p>In implementing this simple random sample selection process, it is possible that a random number used previously may appear again in the table before the complete sample of 30 EAI managers has been selected. Because we do not want to select a manager more than one time, any previously used random numbers are ignored because the corresponding manager is already included in the sample.</p>
            
            <p><strong>Sampling Methods:</strong></p>
            <ul>
                <li><strong>Sampling without replacement:</strong> Each element can be selected only once (most common in practice)</li>
                <li><strong>Sampling with replacement:</strong> Elements can be selected multiple times (valid but less common)</li>
            </ul>
            
            <h4><strong>Sampling from an Infinite Population</strong></h4>
            
            <p>Sometimes we want to select a sample from a population, but the population is infinitely large or the elements of the population are being generated by an ongoing process for which there is no limit on the number of elements that can be generated. This is considered the infinite population case.</p>
            
            <div class="formula">
                <strong>RANDOM SAMPLE (INFINITE POPULATION)</strong><br/>
                A random sample of size n from an infinite population is a sample selected such that the following conditions are satisfied:<br/>
                1. Each element selected comes from the same population.<br/>
                2. Each element is selected independently.
            </div>
            
            <h5><strong>Example 1: Quality Control in Manufacturing</strong></h5>
            <p>A common quality control application involves a production process where there is no limit on the number of elements that can be produced. The conceptual population we are sampling from is all the elements that could be produced (not just the ones that are produced) by the ongoing production process.</p>
            
            <p><strong>Breakfast Cereal Production Line:</strong></p>
            <p>Consider a production line designed to fill boxes of a breakfast cereal with a mean weight of 24 ounces of breakfast cereal per box. Samples of 12 boxes filled by this process are periodically selected by a quality control inspector to determine if the process is operating properly.</p>
            
            <p><strong>Key Considerations:</strong></p>
            <ul>
                <li><strong>Same Population Condition:</strong> Boxes must be selected at approximately the same point in time to ensure the process is operating consistently</li>
                <li><strong>Independence Condition:</strong> Each box of cereal is filled independently by design of the production process</li>
            </ul>
            
            <h5><strong>Example 2: Fast-Food Restaurant Customer Survey</strong></h5>
            <p>Consider the population of customers arriving at a fast-food restaurant. Suppose an employee is asked to select and interview a sample of customers in order to develop a profile of customers who visit the restaurant.</p>
            
            <p><strong>Sampling Challenges:</strong></p>
            <ul>
                <li><strong>Infinite Population:</strong> Customer arrival process is ongoing with no way to obtain a complete list</li>
                <li><strong>Same Population Condition:</strong> Sample must be selected from actual customers who make purchases (not people just using restroom)</li>
                <li><strong>Independence Condition:</strong> Selection of one customer should not influence selection of others</li>
            </ul>
            
            <h5><strong>McDonald's Sampling Solution</strong></h5>
            <p>McDonald's implemented a clever random sampling procedure for customer surveys. The sampling procedure was based on the fact that some customers presented discount coupons. Whenever a customer presented a discount coupon, the next customer served was asked to complete a customer profile questionnaire.</p>
            
            <p><strong>Why This Works:</strong></p>
            <ul>
                <li>Arriving customers presented discount coupons randomly and independently</li>
                <li>This sampling procedure ensured that customers were selected independently</li>
                <li>The sample satisfied the requirements of a random sample from an infinite population</li>
            </ul>
            
            <h4><strong>Avoiding Selection Bias</strong></h4>
            
            <p>The purpose of the second condition of the random sample selection procedure (each element is selected independently) is to prevent selection bias.</p>
            
            <p><strong>Examples of Selection Bias:</strong></p>
            <ul>
                <li><strong>Interviewer Comfort Zone:</strong> Interviewer feels more comfortable selecting customers in a particular age group and avoids others</li>
                <li><strong>Group Selection:</strong> Selecting a group of five customers who entered together (they likely exhibit similar characteristics)</li>
                <li><strong>Convenience Sampling:</strong> Selecting whoever is easiest to reach or most cooperative</li>
            </ul>
            
            <p><strong>How to Avoid Selection Bias:</strong></p>
            <ul>
                <li>Ensure the selection of a particular element does not influence the selection of any other element</li>
                <li>Use systematic procedures that remove human judgment from selection process</li>
                <li>Design sampling procedures that naturally ensure independence</li>
            </ul>
            
            <h4><strong>Infinite Population Examples in Business</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Business Context</div>
                    <div class="divTableHead">Population Description</div>
                    <div class="divTableHead">Sampling Considerations</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Parts manufacturing on production line</div>
                        <div class="divTableCell">All parts that could be produced by ongoing process</div>
                        <div class="divTableCell">Select at consistent time intervals, ensure process stability</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Repeated experimental trials in laboratory</div>
                        <div class="divTableCell">All possible experimental outcomes under controlled conditions</div>
                        <div class="divTableCell">Maintain consistent experimental conditions, random trial selection</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Transactions occurring at a bank</div>
                        <div class="divTableCell">All transactions processed by banking system</div>
                        <div class="divTableCell">Sample across different times/days, avoid system changes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Telephone calls at technical support center</div>
                        <div class="divTableCell">All calls that could be received</div>
                        <div class="divTableCell">Sample across operating hours, ensure representative coverage</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Customers entering retail store</div>
                        <div class="divTableCell">All potential customers visiting store</div>
                        <div class="divTableCell">Sample across business hours/days, avoid special events</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Population vs Sample: Key Distinctions</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Aspect</div>
                    <div class="divTableHead">Population</div>
                    <div class="divTableHead">Sample</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Definition</strong></div>
                        <div class="divTableCell">All items of interest</div>
                        <div class="divTableCell">Subset of population</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Size</strong></div>
                        <div class="divTableCell">N (usually large/infinite)</div>
                        <div class="divTableCell">n (smaller than N)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Parameters</strong></div>
                        <div class="divTableCell">μ (mean), σ (std dev), p (proportion)</div>
                        <div class="divTableCell">x̄ (sample mean), s (sample std dev), p̂ (sample proportion)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Cost</strong></div>
                        <div class="divTableCell">Usually expensive/impossible</div>
                        <div class="divTableCell">More economical</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Accuracy</strong></div>
                        <div class="divTableCell">100% accurate (no sampling error)</div>
                        <div class="divTableCell">Subject to sampling error</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Business Scenario Examples</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Business Context</div>
                    <div class="divTableHead">Population</div>
                    <div class="divTableHead">Sample</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Customer Satisfaction Survey</div>
                        <div class="divTableCell">All customers who purchased in last year</div>
                        <div class="divTableCell">1,000 randomly selected customers</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Quality Control</div>
                        <div class="divTableCell">All products manufactured this month</div>
                        <div class="divTableCell">Every 100th product inspected</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Employee Engagement</div>
                        <div class="divTableCell">All company employees</div>
                        <div class="divTableCell">Random sample from each department</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Market Research</div>
                        <div class="divTableCell">All potential customers in target market</div>
                        <div class="divTableCell">Focus groups and online surveys</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Point Estimates</strong></h4>
            <p>Single values used to estimate population parameters:</p>
            <div class="formula">
                <strong>Population Mean (μ):</strong> Estimated by sample mean x̄ = Σx/n<br/>
                <strong>Population Standard Deviation (σ):</strong> Estimated by sample std dev s = √[Σ(x-x̄)²/(n-1)]<br/>
                <strong>Population Proportion (p):</strong> Estimated by sample proportion p̂ = x/n
            </div>
            
            <h4><strong>Probability Sampling Methods</strong></h4>
            
            <h5><strong>1. Simple Random Sampling</strong></h5>
            <ul>
                <li><strong>Definition:</strong> Every element has equal chance of selection</li>
                <li><strong>Method:</strong> Random number generator, lottery system</li>
                <li><strong>Advantages:</strong> Unbiased, easy to understand</li>
                <li><strong>Disadvantages:</strong> May not represent subgroups well</li>
                <li><strong>Business Use:</strong> Customer satisfaction surveys, audit sampling</li>
            </ul>
            
            <h5><strong>2. Stratified Random Sampling</strong></h5>
            <ul>
                <li><strong>Definition:</strong> Divide population into homogeneous strata, then sample from each</li>
                <li><strong>Method:</strong> 
                    <ol>
                        <li>Identify relevant strata (age, income, department)</li>
                        <li>Determine sample size for each stratum</li>
                        <li>Randomly sample within each stratum</li>
                    </ol>
                </li>
                <li><strong>Advantages:</strong> Ensures representation of all subgroups, reduces sampling error</li>
                <li><strong>Disadvantages:</strong> Requires knowledge of population characteristics</li>
                <li><strong>Business Use:</strong> Market research by demographics, employee surveys by department</li>
            </ul>
            
            <h5><strong>3. Cluster Sampling</strong></h5>
            <ul>
                <li><strong>Definition:</strong> Divide population into clusters, randomly select clusters, survey all elements in selected clusters</li>
                <li><strong>Method:</strong>
                    <ol>
                        <li>Identify natural clusters (geographic regions, stores)</li>
                        <li>Randomly select clusters</li>
                        <li>Survey all elements in selected clusters</li>
                    </ol>
                </li>
                <li><strong>Advantages:</strong> Cost-effective, logistically convenient</li>
                <li><strong>Disadvantages:</strong> Higher sampling error, clusters must be representative</li>
                <li><strong>Business Use:</strong> Multi-location businesses, geographic market research</li>
            </ul>
            
            <h5><strong>4. Systematic Sampling</strong></h5>
            <ul>
                <li><strong>Definition:</strong> Select every k-th element from ordered list</li>
                <li><strong>Method:</strong>
                    <ol>
                        <li>Calculate sampling interval: k = N/n</li>
                        <li>Randomly select starting point between 1 and k</li>
                        <li>Select every k-th element</li>
                    </ol>
                </li>
                <li><strong>Advantages:</strong> Easy to implement, spreads sample evenly</li>
                <li><strong>Disadvantages:</strong> Can introduce bias if pattern exists in population</li>
                <li><strong>Business Use:</strong> Quality control, transaction auditing</li>
            </ul>
            
            <h4><strong>Non-Probability Sampling Methods</strong></h4>
            
            <h5><strong>1. Convenience Sampling</strong></h5>
            <ul>
                <li><strong>Definition:</strong> Select easily accessible elements</li>
                <li><strong>Examples:</strong> Mall intercepts, online volunteers, readily available customers</li>
                <li><strong>Advantages:</strong> Quick, inexpensive, easy to implement</li>
                <li><strong>Disadvantages:</strong> High bias potential, not representative</li>
                <li><strong>Business Use:</strong> Preliminary research, pilot studies, exploratory research</li>
            </ul>
            
            <h5><strong>2. Judgment (Purposive) Sampling</strong></h5>
            <ul>
                <li><strong>Definition:</strong> Researcher selects elements based on expertise/judgment</li>
                <li><strong>Examples:</strong> Expert panels, key informant interviews, typical case studies</li>
                <li><strong>Advantages:</strong> Leverages expert knowledge, cost-effective for specific purposes</li>
                <li><strong>Disadvantages:</strong> Subjective, potential for researcher bias</li>
                <li><strong>Business Use:</strong> B2B research, specialized industry studies, focus groups</li>
            </ul>
            
            <h4><strong>Sampling Method Selection Guide</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Situation</div>
                    <div class="divTableHead">Recommended Method</div>
                    <div class="divTableHead">Rationale</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Homogeneous population</div>
                        <div class="divTableCell">Simple Random</div>
                        <div class="divTableCell">All elements similar, random sample sufficient</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Heterogeneous population with known subgroups</div>
                        <div class="divTableCell">Stratified Random</div>
                        <div class="divTableCell">Ensures representation of all important subgroups</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Geographically dispersed population</div>
                        <div class="divTableCell">Cluster</div>
                        <div class="divTableCell">Reduces travel costs and logistics complexity</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Large ordered lists</div>
                        <div class="divTableCell">Systematic</div>
                        <div class="divTableCell">Efficient and provides good spread</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Preliminary exploration</div>
                        <div class="divTableCell">Convenience</div>
                        <div class="divTableCell">Quick insights before formal study</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Specialized expertise needed</div>
                        <div class="divTableCell">Judgment</div>
                        <div class="divTableCell">Expert knowledge guides selection</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Common Sampling Errors and Solutions</strong></h4>
            <ul>
                <li><strong>Selection Bias:</strong> Non-representative sample → Use probability sampling methods</li>
                <li><strong>Non-response Bias:</strong> Selected individuals don't participate → Follow-up procedures, incentives</li>
                <li><strong>Measurement Bias:</strong> Inaccurate data collection → Train data collectors, validate instruments</li>
                <li><strong>Coverage Bias:</strong> Sampling frame doesn't match population → Update and verify sampling frame</li>
                <li><strong>Timing Bias:</strong> Data collected at unrepresentative time → Consider seasonal/cyclical patterns</li>
            </ul>
            
            <h4><strong>Best Practices for Business Sampling</strong></h4>
            <ol>
                <li><strong>Define Target Population Clearly:</strong> Who exactly are you studying?</li>
                <li><strong>Choose Appropriate Sampling Frame:</strong> Complete, accurate, up-to-date list</li>
                <li><strong>Calculate Required Sample Size:</strong> Balance precision with cost</li>
                <li><strong>Document Methodology:</strong> Enable replication and validation</li>
                <li><strong>Monitor Response Rates:</strong> Address non-response bias</li>
                <li><strong>Validate Results:</strong> Compare with known population characteristics</li>
            </ol>`
        },
        {
            id: 406,
            title: "Point Estimation with EAI Example",
            category: "point-estimation",
            content: `<h3><strong>Point Estimation with EAI Example</strong></h3>
            
            <h4><strong>From Sample Selection to Point Estimation</strong></h4>
            <p>Now that we have described how to select a simple random sample, let us return to the EAI problem. A simple random sample of 30 managers and the corresponding data on annual salary and management training program participation are shown below.</p>
            
            <h5><strong>EAI Sample Data (30 Managers)</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Manager</div>
                    <div class="divTableHead">Annual Salary ($)</div>
                    <div class="divTableHead">Training Program</div>
                    <div class="divTableHead">Manager</div>
                    <div class="divTableHead">Annual Salary ($)</div>
                    <div class="divTableHead">Training Program</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">x₁</div>
                        <div class="divTableCell">49,094.30</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₁₆</div>
                        <div class="divTableCell">51,766.00</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₂</div>
                        <div class="divTableCell">53,263.90</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₁₇</div>
                        <div class="divTableCell">52,541.30</div>
                        <div class="divTableCell">No</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₃</div>
                        <div class="divTableCell">49,643.50</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₁₈</div>
                        <div class="divTableCell">44,980.00</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₄</div>
                        <div class="divTableCell">49,894.90</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₁₉</div>
                        <div class="divTableCell">51,932.60</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₅</div>
                        <div class="divTableCell">47,621.60</div>
                        <div class="divTableCell">No</div>
                        <div class="divTableCell">x₂₀</div>
                        <div class="divTableCell">52,973.00</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₆</div>
                        <div class="divTableCell">55,924.00</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₂₁</div>
                        <div class="divTableCell">45,120.90</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₇</div>
                        <div class="divTableCell">49,092.30</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₂₂</div>
                        <div class="divTableCell">51,753.00</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₈</div>
                        <div class="divTableCell">51,404.40</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₂₃</div>
                        <div class="divTableCell">54,391.80</div>
                        <div class="divTableCell">No</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₉</div>
                        <div class="divTableCell">50,957.70</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₂₄</div>
                        <div class="divTableCell">50,164.20</div>
                        <div class="divTableCell">No</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₁₀</div>
                        <div class="divTableCell">55,109.70</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₂₅</div>
                        <div class="divTableCell">52,973.60</div>
                        <div class="divTableCell">No</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₁₁</div>
                        <div class="divTableCell">45,922.60</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₂₆</div>
                        <div class="divTableCell">50,241.30</div>
                        <div class="divTableCell">No</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₁₂</div>
                        <div class="divTableCell">57,268.40</div>
                        <div class="divTableCell">No</div>
                        <div class="divTableCell">x₂₇</div>
                        <div class="divTableCell">52,793.90</div>
                        <div class="divTableCell">No</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₁₃</div>
                        <div class="divTableCell">55,688.80</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">x₂₈</div>
                        <div class="divTableCell">50,979.40</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₁₄</div>
                        <div class="divTableCell">51,564.70</div>
                        <div class="divTableCell">No</div>
                        <div class="divTableCell">x₂₉</div>
                        <div class="divTableCell">55,860.90</div>
                        <div class="divTableCell">Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">x₁₅</div>
                        <div class="divTableCell">56,188.20</div>
                        <div class="divTableCell">No</div>
                        <div class="divTableCell">x₃₀</div>
                        <div class="divTableCell">57,309.10</div>
                        <div class="divTableCell">No</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Computing Point Estimates</strong></h5>
            <p>To estimate the value of a population parameter, we compute a corresponding characteristic of the sample, referred to as a <strong>sample statistic</strong>. For example, to estimate the population mean μ and the population standard deviation σ for the annual salary of EAI managers, we use the sample data to calculate the corresponding sample statistics: the sample mean x̄ and the sample standard deviation s.</p>
            
            <h5><strong>Sample Mean Calculation</strong></h5>
            <p>Using the formulas for a sample mean presented in Chapter 3:</p>
            <div class="formula">
                x̄ = Σxᵢ/n = 1,554,420/30 = $51,814
            </div>
            
            <h5><strong>Sample Standard Deviation Calculation</strong></h5>
            <p>Using the formula for sample standard deviation:</p>
            <div class="formula">
                s = √[Σ(xᵢ - x̄)²/(n-1)] = √[325,009,260/29] = $3,348
            </div>
            
            <h5><strong>Sample Proportion Calculation</strong></h5>
            <p>To estimate p, the proportion of managers in the population who completed the management training program, we use the corresponding sample proportion p̂. Let x denote the number of managers in the sample who completed the management training program. The data show that x = 19. Thus, with a sample size of n = 30:</p>
            <div class="formula">
                p̂ = x/n = 19/30 = 0.63
            </div>
            
            <h5><strong>Point Estimation Procedure</strong></h5>
            <p>By making the preceding computations, we perform the statistical procedure called <strong>point estimation</strong>. We refer to:</p>
            <ul>
                <li><strong>Sample mean x̄</strong> as the point estimator of the population mean μ</li>
                <li><strong>Sample standard deviation s</strong> as the point estimator of the population standard deviation σ</li>
                <li><strong>Sample proportion p̂</strong> as the point estimator of the population proportion p</li>
            </ul>
            
            <p>The numerical value obtained for x̄, s, or p̂ is called the <strong>point estimate</strong>. Thus, for the simple random sample of 30 EAI managers:</p>
            <ul>
                <li><strong>$51,814</strong> is the point estimate of μ</li>
                <li><strong>$3,348</strong> is the point estimate of σ</li>
                <li><strong>0.63</strong> is the point estimate of p</li>
            </ul>
            
            <h5><strong>Summary of Point Estimates vs. Population Parameters</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Population Parameter</div>
                    <div class="divTableHead">Parameter Value</div>
                    <div class="divTableHead">Point Estimator</div>
                    <div class="divTableHead">Point Estimate</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">μ (Population mean annual salary)</div>
                        <div class="divTableCell">$51,800</div>
                        <div class="divTableCell">x̄ (Sample mean annual salary)</div>
                        <div class="divTableCell">$51,814</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">σ (Population standard deviation for annual salary)</div>
                        <div class="divTableCell">$4,000</div>
                        <div class="divTableCell">s (Sample standard deviation for annual salary)</div>
                        <div class="divTableCell">$3,348</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">p (Population proportion having completed training)</div>
                        <div class="divTableCell">0.60</div>
                        <div class="divTableCell">p̂ (Sample proportion having completed training)</div>
                        <div class="divTableCell">0.63</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Sampling Error Analysis</strong></h5>
            <p>As is evident from the summary table, the point estimates differ somewhat from the corresponding population parameters. This difference is to be expected because a sample, and not a census of the entire population, is being used to develop the point estimates.</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Parameter</div>
                    <div class="divTableHead">Population Value</div>
                    <div class="divTableHead">Sample Estimate</div>
                    <div class="divTableHead">Difference</div>
                    <div class="divTableHead">Error Analysis</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Mean Salary</div>
                        <div class="divTableCell">$51,800</div>
                        <div class="divTableCell">$51,814</div>
                        <div class="divTableCell">+$14</div>
                        <div class="divTableCell">Very close estimate (0.03% error)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Standard Deviation</div>
                        <div class="divTableCell">$4,000</div>
                        <div class="divTableCell">$3,348</div>
                        <div class="divTableCell">-$652</div>
                        <div class="divTableCell">Underestimates variability (16.3% error)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Training Proportion</div>
                        <div class="divTableCell">0.60</div>
                        <div class="divTableCell">0.63</div>
                        <div class="divTableCell">+0.03</div>
                        <div class="divTableCell">Slight overestimate (5% error)</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Insight:</strong> In the next chapter, we will show how to construct an interval estimate in order to provide information about how close the point estimate is to the population parameter.</p>
            
            <h4><strong>Practical Advice: Target vs. Sampled Population</strong></h4>
            
            <p>The subject matter of most of the rest of the book is concerned with statistical inference. Point estimation is a form of statistical inference. We use a sample statistic to make an inference about a population parameter. When making inferences about a population based on a sample, it is important to have a close correspondence between the sampled population and the target population.</p>
            
            <h5><strong>Key Definitions</strong></h5>
            <ul>
                <li><strong>Target Population:</strong> The population we want to make inferences about</li>
                <li><strong>Sampled Population:</strong> The population from which the sample is actually taken</li>
            </ul>
            
            <h5><strong>EAI Example: Ideal Situation</strong></h5>
            <p>In the EAI case, we described the process of drawing a simple random sample from the population of EAI managers and making point estimates of characteristics of that same population. So the sampled population and the target population are identical, which is the desired situation.</p>
            
            <h5><strong>Amusement Park Example: Problematic Situation</strong></h5>
            <p>Consider the case of an amusement park selecting a sample of its customers to learn about characteristics such as age and time spent at the park. Suppose all the sample elements were selected on a day when park attendance was restricted to employees of a single company.</p>
            
            <p><strong>Problem Analysis:</strong></p>
            <ul>
                <li><strong>Sampled Population:</strong> Employees of that company and members of their families</li>
                <li><strong>Target Population:</strong> Typical park customers over a typical summer</li>
                <li><strong>Issue:</strong> Significant difference between sampled and target populations</li>
                <li><strong>Result:</strong> Questionable validity of point estimates</li>
            </ul>
            
            <p><strong>Management Decision:</strong> Park management would be in the best position to know whether a sample taken on a particular day was likely to be representative of the target population.</p>
            
            <h5><strong>Best Practice Guidelines</strong></h5>
            <ol>
                <li><strong>Alignment Check:</strong> Ensure sampled population closely matches target population</li>
                <li><strong>Study Design:</strong> Design the study so that sampled and target populations are in close agreement</li>
                <li><strong>Professional Judgment:</strong> Good judgment is a necessary ingredient of sound statistical practice</li>
                <li><strong>Validity Assessment:</strong> Question point estimate validity when populations don't align</li>
            </ol>
            
            <h4><strong>Business Applications of Point Estimation</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Business Context</div>
                    <div class="divTableHead">Parameter of Interest</div>
                    <div class="divTableHead">Point Estimator</div>
                    <div class="divTableHead">Business Decision</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Customer Satisfaction</div>
                        <div class="divTableCell">Mean satisfaction score</div>
                        <div class="divTableCell">Sample mean score</div>
                        <div class="divTableCell">Service improvement priorities</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Product Quality</div>
                        <div class="divTableCell">Defect rate proportion</div>
                        <div class="divTableCell">Sample defect proportion</div>
                        <div class="divTableCell">Process adjustments</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Employee Compensation</div>
                        <div class="divTableCell">Mean salary by position</div>
                        <div class="divTableCell">Sample mean salary</div>
                        <div class="divTableCell">Compensation benchmarking</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Market Research</div>
                        <div class="divTableCell">Purchase intention rate</div>
                        <div class="divTableCell">Sample purchase rate</div>
                        <div class="divTableCell">Product launch decisions</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Financial Audit</div>
                        <div class="divTableCell">Error rate in transactions</div>
                        <div class="divTableCell">Sample error proportion</div>
                        <div class="divTableCell">Internal control assessment</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Key Takeaways from the EAI Point Estimation Example</strong></h4>
            
            <ol>
                <li><strong>Point Estimates as Starting Point:</strong> Point estimates provide single-value estimates of population parameters but don't indicate precision</li>
                
                <li><strong>Expected Sampling Error:</strong> Differences between sample statistics and population parameters are normal and expected</li>
                
                <li><strong>Foundation for Inference:</strong> Point estimation forms the basis for more advanced statistical inference techniques</li>
                
                <li><strong>Population Alignment:</strong> Validity of estimates depends on alignment between target and sampled populations</li>
                
                <li><strong>Business Decision Making:</strong> Point estimates provide managers with data-driven insights for decision making</li>
                
                <li><strong>Next Steps:</strong> Point estimates lead naturally to interval estimation and hypothesis testing</li>
            </ol>`
        }
    ],
    
    centralLimitTheorem: [
        {
            id: 407,
            title: "Sampling Distribution of x̄ (Sample Mean)",
            category: "sampling-distribution",
            content: `<h3><strong>Sampling Distribution of x̄ (Sample Mean)</strong></h3>
            
            <h4><strong>Introduction to Sampling Distribution of x̄</strong></h4>
            <p>In the previous section we said that the sample mean x̄ is a random variable and its probability distribution is called the <strong>sampling distribution of x̄</strong>.</p>
            
            <div class="formula">
                <strong>SAMPLING DISTRIBUTION OF x̄</strong><br/>
                The sampling distribution of the sample mean x̄ is the probability distribution of all possible values of x̄.
            </div>
            
            <p>This section describes the properties of the sampling distribution of x̄. Just as with other probability distributions we studied, the sampling distribution of x̄ has an expected value or mean, a standard deviation, and a characteristic shape or form.</p>
            
            <h4><strong>Expected Value of x̄</strong></h4>
            
            <p>In the EAI sampling problem we saw that different simple random samples result in a variety of values for the sample mean x̄. Because many different values of the random variable x̄ are possible, we are often interested in the mean of all possible values of x̄ that can be generated by the various simple random samples.</p>
            
            <div class="formula">
                <strong>EXPECTED VALUE OF x̄</strong><br/>
                The expected value of x̄ equals the mean of the population from which the sample is selected.<br/><br/>
                E(x̄) = μ &nbsp;&nbsp;&nbsp;&nbsp;(7.1)<br/><br/>
                where:<br/>
                E(x̄) = the expected value of x̄<br/>
                μ = the population mean
            </div>
            
            <p>This result shows that with simple random sampling, the expected value or mean of the sampling distribution of x̄ is equal to the mean of the population. In the EAI study, the mean annual salary for the population is μ = $51,800. Thus, the mean of all possible sample means is also $51,800.</p>
            
            <p><strong>Unbiased Estimator:</strong> When the expected value of a point estimator equals the population parameter, we say the point estimator is <strong>unbiased</strong>. Thus, equation (7.1) shows that x̄ is an unbiased estimator of the population mean μ.</p>
            
            <h4><strong>Standard Deviation of x̄</strong></h4>
            
            <p>The standard deviation of the sampling distribution of x̄ depends on whether the population is finite or infinite:</p>
            
            <div class="formula">
                <strong>STANDARD DEVIATION OF x̄</strong><br/><br/>
                <strong>Finite Population:</strong><br/>
                σx̄ = √[(N-n)/(N-1)] × (σ/√n)<br/><br/>
                <strong>Infinite Population:</strong><br/>
                σx̄ = σ/√n &nbsp;&nbsp;&nbsp;&nbsp;(7.2)
            </div>
            
            <p>The factor √[(N-n)/(N-1)] is the <strong>finite population correction factor</strong>. In practice, when n/N ≤ .05, we can use the simpler formula:</p>
            
            <div class="formula">
                σx̄ = σ/√n &nbsp;&nbsp;&nbsp;&nbsp;(7.3)
            </div>
            
            <h5><strong>EAI Example Calculation</strong></h5>
            <p>For the EAI problem with σ = 4000, N = 2500, and n = 30:</p>
            <p>Since n/N = 30/2500 = .012 < .05, we use the simple formula:</p>
            
            <div class="formula">
                σx̄ = σ/√n = 4000/√30 = 730.3
            </div>
            
            <p>This value is called the <strong>standard error of the mean</strong>.</p>
            
            <h4><strong>Form of the Sampling Distribution of x̄</strong></h4>
            
            <p>The final step in identifying the characteristics of the sampling distribution of x̄ is to determine the form or shape of the sampling distribution. We consider two cases:</p>
            
            <h5><strong>Case 1: Population has a normal distribution</strong></h5>
            <p>When the population has a normal distribution, the <strong>sampling distribution of x̄ is normally distributed for any sample size</strong>.</p>
            
            <h5><strong>Case 2: Population does not have a normal distribution</strong></h5>
            <p>When the population does not have a normal distribution, the Central Limit Theorem helps identify the shape of the sampling distribution.</p>
            
            <div class="formula">
                <strong>CENTRAL LIMIT THEOREM</strong><br/>
                In selecting random samples of size n from a population, the sampling distribution of the sample mean x̄ can be approximated by a normal distribution as the sample size becomes large.
            </div>
            
            <h4><strong>Central Limit Theorem Illustration</strong></h4>
            
            <p>The Central Limit Theorem works for different population shapes:</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Population Type</div>
                    <div class="divTableHead">Description</div>
                    <div class="divTableHead">Sample Size Effects</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Population I (Uniform)</strong></div>
                        <div class="divTableCell">Rectangular distribution with equal probabilities</div>
                        <div class="divTableCell">n=2: Different shape; n=5: Begins normal; n=30: Normal</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Population II (Rabbit-eared)</strong></div>
                        <div class="divTableCell">Symmetric but with higher probabilities in tails</div>
                        <div class="divTableCell">n=2: Different shape; n=5: Begins normal; n=30: Normal</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Population III (Exponential)</strong></div>
                        <div class="divTableCell">Right-skewed distribution</div>
                        <div class="divTableCell">n=2: Different shape; n=5: Some skewness; n=30: Normal</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Practical Guidelines for Sample Size</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Population Type</div>
                    <div class="divTableHead">Minimum Sample Size</div>
                    <div class="divTableHead">Reason</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Most applications</div>
                        <div class="divTableCell">n ≥ 30</div>
                        <div class="divTableCell">General statistical practice</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Highly skewed or outliers present</div>
                        <div class="divTableCell">n ≥ 50</div>
                        <div class="divTableCell">More data needed for normality</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Discrete population</div>
                        <div class="divTableCell">Depends on proportion</div>
                        <div class="divTableCell">Related to population characteristics</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>EAI Problem: Sampling Distribution Summary</strong></h4>
            
            <p>For the EAI problem, we have established:</p>
            <ul>
                <li><strong>Expected Value:</strong> E(x̄) = $51,800</li>
                <li><strong>Standard Error:</strong> σx̄ = $730.3</li>
                <li><strong>Shape:</strong> Normal distribution (either because population is normal OR by CLT with n=30)</li>
            </ul>
            
            <div class="formula">
                <strong>EAI Sampling Distribution:</strong><br/>
                x̄ ~ Normal(μ = $51,800, σx̄ = $730.3)
            </div>
            
            <h4><strong>Practical Value of the Sampling Distribution</strong></h4>
            
            <p>The sampling distribution of x̄ provides probability information about the difference between the sample mean and the population mean. We cannot expect the sample mean to exactly equal the population mean, but we can quantify the likelihood of how close it will be.</p>
            
            <h5><strong>EAI Probability Question</strong></h5>
            <p><strong>Question:</strong> What is the probability that a sample mean from 30 EAI managers will be within $500 of the population mean ($51,800)?</p>
            
            <p>We want: P(51,300 ≤ x̄ ≤ 52,300)</p>
            
            <h5><strong>Probability Calculation (n = 30)</strong></h5>
            
            <p><strong>Step 1: Calculate z-scores</strong></p>
            
            <p>At x̄ = $52,300:</p>
            <div class="formula">
                z = (52,300 - 51,800) / 730.30 = 500 / 730.30 = 0.68
            </div>
            
            <p>At x̄ = $51,300:</p>
            <div class="formula">
                z = (51,300 - 51,800) / 730.30 = -500 / 730.30 = -0.68
            </div>
            
            <p><strong>Step 2: Find probabilities from standard normal table</strong></p>
            <ul>
                <li>P(z ≤ 0.68) = 0.7517</li>
                <li>P(z ≤ -0.68) = 0.2483</li>
            </ul>
            
            <p><strong>Step 3: Calculate final probability</strong></p>
            <div class="formula">
                P(51,300 ≤ x̄ ≤ 52,300) = 0.7517 - 0.2483 = 0.5034
            </div>
            
            <p><strong>Result:</strong> There is approximately a 50% chance that a sample of 30 managers will provide a sample mean within $500 of the population mean.</p>
            
            <h4><strong>Sample Size Effect on Precision</strong></h4>
            
            <p>Let's see what happens if we increase the sample size to n = 100:</p>
            
            <h5><strong>New Standard Error (n = 100)</strong></h5>
            <div class="formula">
                σx̄ = σ/√n = 4000/√100 = 4000/10 = $400
            </div>
            
            <h5><strong>Probability Calculation (n = 100)</strong></h5>
            
            <p>At x̄ = $52,300:</p>
            <div class="formula">
                z = (52,300 - 51,800) / 400 = 500 / 400 = 1.25
            </div>
            
            <p>At x̄ = $51,300:</p>
            <div class="formula">
                z = (51,300 - 51,800) / 400 = -500 / 400 = -1.25
            </div>
            
            <p><strong>From standard normal table:</strong></p>
            <ul>
                <li>P(z ≤ 1.25) = 0.8944</li>
                <li>P(z ≤ -1.25) = 0.1056</li>
            </ul>
            
            <div class="formula">
                P(51,300 ≤ x̄ ≤ 52,300) = 0.8944 - 0.1056 = 0.7888
            </div>
            
            <h5><strong>Sample Size Comparison</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Sample Size</div>
                    <div class="divTableHead">Standard Error</div>
                    <div class="divTableHead">P(within $500)</div>
                    <div class="divTableHead">Improvement</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">n = 30</div>
                        <div class="divTableCell">$730.3</div>
                        <div class="divTableCell">0.5034 (50.34%)</div>
                        <div class="divTableCell">Baseline</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">n = 100</div>
                        <div class="divTableCell">$400.0</div>
                        <div class="divTableCell">0.7888 (78.88%)</div>
                        <div class="divTableCell">+28.54 percentage points</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Insight:</strong> Increasing sample size from 30 to 100 increases the probability of obtaining a sample mean within $500 of the population mean from 50.34% to 78.88%.</p>
            
            <h4><strong>Business Applications</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Business Context</div>
                    <div class="divTableHead">Application</div>
                    <div class="divTableHead">Sample Size Consideration</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Budget Planning</div>
                        <div class="divTableCell">Estimate average project costs</div>
                        <div class="divTableCell">Larger sample for critical budget estimates</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Quality Control</div>
                        <div class="divTableCell">Monitor average defect rates</div>
                        <div class="divTableCell">Sample size based on acceptable error tolerance</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Market Research</div>
                        <div class="divTableCell">Estimate average customer satisfaction</div>
                        <div class="divTableCell">Larger samples for key product decisions</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Performance Evaluation</div>
                        <div class="divTableCell">Assess average employee performance</div>
                        <div class="divTableCell">Balance evaluation costs with accuracy</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Key Principles</strong></h4>
            
            <ol>
                <li><strong>Unbiased Estimation:</strong> E(x̄) = μ always, regardless of sample size</li>
                <li><strong>Precision Improvement:</strong> Standard error decreases as √n increases</li>
                <li><strong>Normal Approximation:</strong> CLT enables normal distribution assumption for n ≥ 30</li>
                <li><strong>Probability Assessment:</strong> Can quantify likelihood of estimation accuracy</li>
                <li><strong>Cost-Benefit Trade-off:</strong> Larger samples cost more but provide better precision</li>
                <li><strong>Decision Support:</strong> Probability calculations inform decision confidence</li>
            </ol>
            
            <p><strong>The Important Point:</strong> As sample size increases, the standard error of the mean decreases, providing higher probability that the sample mean is within a specified distance of the population mean.</p>
            
            <h4><strong>Central Limit Theorem (CLT): The Foundation</strong></h4>
            <p>The Central Limit Theorem is one of the most important theorems in statistics, stating that the sampling distribution of the sample mean approaches a normal distribution as sample size increases, regardless of the shape of the population distribution.</p>
            
            <h4><strong>Formal Statement</strong></h4>
            <p>For a population with mean μ and standard deviation σ, as sample size n increases:</p>
            <div class="formula">
                <strong>Sample Mean Distribution:</strong> X̄ ~ N(μ, σ²/n)<br/>
                <strong>Standardized Form:</strong> Z = (X̄ - μ)/(σ/√n) ~ N(0,1)<br/>
                <strong>Standard Error:</strong> σ_X̄ = σ/√n
            </div>
            
            <h4><strong>Key Conditions and Guidelines</strong></h4>
            <ul>
                <li><strong>Sample Size:</strong> n ≥ 30 (general rule), smaller n acceptable if population is normal</li>
                <li><strong>Independence:</strong> Observations must be independent</li>
                <li><strong>Population Size:</strong> If sampling without replacement, n should be < 10% of population</li>
                <li><strong>Any Distribution:</strong> Works regardless of population shape (uniform, skewed, bimodal)</li>
            </ul>
            
            <h4><strong>Sampling Distribution Properties</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Property</div>
                    <div class="divTableHead">Population</div>
                    <div class="divTableHead">Sample Mean (X̄)</div>
                    <div class="divTableHead">Implication</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Mean</strong></div>
                        <div class="divTableCell">μ</div>
                        <div class="divTableCell">μ_X̄ = μ</div>
                        <div class="divTableCell">Sample mean is unbiased estimator</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Standard Deviation</strong></div>
                        <div class="divTableCell">σ</div>
                        <div class="divTableCell">σ_X̄ = σ/√n</div>
                        <div class="divTableCell">Variability decreases with larger samples</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Shape</strong></div>
                        <div class="divTableCell">Any shape</div>
                        <div class="divTableCell">Normal (for n ≥ 30)</div>
                        <div class="divTableCell">Enables probability calculations</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Example 1: Manufacturing Quality Control</strong></h4>
            <p><strong>Problem:</strong> Widget weights are uniformly distributed with μ = 100g, σ = 12g. For samples of n = 36 widgets:</p>
            <ul>
                <li>a) What is the probability that sample mean exceeds 103g?</li>
                <li>b) Find the range that contains 95% of sample means</li>
            </ul>
            
            <p><strong>Solution:</strong></p>
            <div class="formula">
                Sample mean distribution: X̄ ~ N(100, 12²/36) = N(100, 4)<br/>
                Standard error: σ_X̄ = 12/√36 = 2<br/><br/>
                
                a) P(X̄ > 103) = P(Z > (103-100)/2) = P(Z > 1.5) = 1 - 0.9332 = 0.0668<br/>
                &nbsp;&nbsp;&nbsp;<strong>Result:</strong> 6.68% chance<br/><br/>
                
                b) 95% range: μ ± 1.96σ_X̄ = 100 ± 1.96(2) = 100 ± 3.92<br/>
                &nbsp;&nbsp;&nbsp;<strong>Result:</strong> 96.08g to 103.92g
            </div>
            
            <h4><strong>Example 2: Customer Service Response Times</strong></h4>
            <p><strong>Problem:</strong> Call response times have unknown distribution with μ = 4.2 minutes, σ = 1.8 minutes. For samples of n = 50 calls, find probability that average response time is between 3.8 and 4.6 minutes.</p>
            
            <p><strong>Solution:</strong></p>
            <div class="formula">
                By CLT: X̄ ~ N(4.2, 1.8²/50) = N(4.2, 0.0648)<br/>
                Standard error: σ_X̄ = 1.8/√50 = 0.2546<br/><br/>
                
                P(3.8 ≤ X̄ ≤ 4.6) = P((3.8-4.2)/0.2546 ≤ Z ≤ (4.6-4.2)/0.2546)<br/>
                = P(-1.57 ≤ Z ≤ 1.57) = 0.9418 - 0.0582 = 0.8836<br/>
                <strong>Result:</strong> 88.36% probability
            </div>
            
            <h4><strong>Finite Population Correction Factor</strong></h4>
            <p>When sampling without replacement from finite population:</p>
            <div class="formula">
                <strong>Corrected Standard Error:</strong> σ_X̄ = (σ/√n) × √[(N-n)/(N-1)]<br/>
                where N = population size, n = sample size
            </div>
            
            <h4><strong>Example 3: Employee Salary Survey</strong></h4>
            <p><strong>Problem:</strong> Company has 200 employees with mean salary μ = $55,000, σ = $8,000. Sample 25 employees without replacement. Find probability that sample mean exceeds $57,000.</p>
            
            <p><strong>Solution:</strong></p>
            <div class="formula">
                Standard error with correction:<br/>
                σ_X̄ = (8000/√25) × √[(200-25)/(200-1)]<br/>
                = 1600 × √(175/199) = 1600 × 0.9367 = 1498.7<br/><br/>
                
                P(X̄ > 57000) = P(Z > (57000-55000)/1498.7) = P(Z > 1.33) = 0.0918<br/>
                <strong>Result:</strong> 9.18% probability
            </div>
            
            <h4><strong>Applications in Business Decision Making</strong></h4>
            
            <h5><strong>1. Quality Control</strong></h5>
            <ul>
                <li><strong>Control Charts:</strong> Monitor process means using control limits</li>
                <li><strong>Process Capability:</strong> Assess ability to meet specifications</li>
                <li><strong>Acceptance Sampling:</strong> Decide whether to accept or reject batches</li>
            </ul>
            
            <h5><strong>2. Market Research</strong></h5>
            <ul>
                <li><strong>Survey Reliability:</strong> Assess precision of survey estimates</li>
                <li><strong>Sample Size Planning:</strong> Determine required sample size for desired precision</li>
                <li><strong>Confidence Intervals:</strong> Provide range estimates for population parameters</li>
            </ul>
            
            <h5><strong>3. Financial Analysis</strong></h5>
            <ul>
                <li><strong>Portfolio Risk:</strong> Model distribution of average returns</li>
                <li><strong>Audit Sampling:</strong> Estimate population error rates</li>
                <li><strong>Credit Risk:</strong> Model average default rates</li>
            </ul>
            
            <h4><strong>Common Business Scenarios</strong></h4>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Business Context</div>
                    <div class="divTableHead">Population Parameter</div>
                    <div class="divTableHead">Sample Statistic</div>
                    <div class="divTableHead">Business Decision</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Customer Satisfaction</div>
                        <div class="divTableCell">True average satisfaction score</div>
                        <div class="divTableCell">Sample mean from survey</div>
                        <div class="divTableCell">Service improvement priorities</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Production Output</div>
                        <div class="divTableCell">Daily production mean</div>
                        <div class="divTableCell">Sample of daily outputs</div>
                        <div class="divTableCell">Capacity planning</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Website Response Time</div>
                        <div class="divTableCell">True mean response time</div>
                        <div class="divTableCell">Sample of response times</div>
                        <div class="divTableCell">Infrastructure upgrades</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sales Performance</div>
                        <div class="divTableCell">Average sales per rep</div>
                        <div class="divTableCell">Sample of sales figures</div>
                        <div class="divTableCell">Training program effectiveness</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Practical Guidelines</strong></h4>
            <ul>
                <li><strong>Sample Size:</strong> Larger samples provide more precise estimates</li>
                <li><strong>Random Sampling:</strong> Essential for CLT to apply</li>
                <li><strong>Independence:</strong> Ensure observations don't influence each other</li>
                <li><strong>Outliers:</strong> Can affect small samples more than large ones</li>
                <li><strong>Skewed Populations:</strong> May need larger samples (n > 50) for normality</li>
            </ul>
            
            <h4><strong>Key Business Insights</strong></h4>
            <ol>
                <li><strong>Precision Improvement:</strong> Quadrupling sample size doubles precision</li>
                <li><strong>Cost-Benefit Trade-off:</strong> Diminishing returns to increasing sample size</li>
                <li><strong>Risk Assessment:</strong> Calculate probability of exceeding thresholds</li>
                <li><strong>Performance Standards:</strong> Set realistic targets based on natural variation</li>
                <li><strong>Process Monitoring:</strong> Detect when processes shift from normal operation</li>
            </ol>`
        },
        {
            id: 408,
            title: "Sampling Distribution of p̂ (Sample Proportion)",
            category: "sampling-proportion",
            content: `<h3><strong>Sampling Distribution of p̂ (Sample Proportion)</strong></h3>
            
            <h4><strong>Introduction to Sample Proportion</strong></h4>
            
            <p>The sample proportion p̂ is the point estimator of the population proportion p. The formula for computing the sample proportion is:</p>
            
            <div class="formula">
                p̂ = x/n<br/><br/>
                where:<br/>
                x = the number of elements in the sample that possess the characteristic of interest<br/>
                n = sample size
            </div>
            
            <p>As noted in Section 7.4, the sample proportion p̂ is a random variable and its probability distribution is called the sampling distribution of p̂.</p>
            
            <div class="formula">
                <strong>SAMPLING DISTRIBUTION OF p̂</strong><br/>
                The sampling distribution of p̂ is the probability distribution of all possible values of the sample proportion p̂.
            </div>
            
            <h4><strong>Expected Value of p̂</strong></h4>
            
            <p>The expected value of p̂, the mean of all possible values of p̂, is equal to the population proportion p.</p>
            
            <div class="formula">
                <strong>EXPECTED VALUE OF p̂</strong><br/><br/>
                E(p̂) = p &nbsp;&nbsp;&nbsp;&nbsp;(7.4)<br/><br/>
                where:<br/>
                E(p̂) = the expected value of p̂<br/>
                p = the population proportion
            </div>
            
            <p>Because E(p̂) = p, p̂ is an <strong>unbiased estimator</strong> of p. For the EAI population, p = 0.60 (proportion of managers who participated in the management training program). Thus, the expected value of p̂ for the EAI sampling problem is 0.60.</p>
            
            <h4><strong>Standard Deviation of p̂</strong></h4>
            
            <p>Just as we found for the standard deviation of x̄, the standard deviation of p̂ depends on whether the population is finite or infinite:</p>
            
            <div class="formula">
                <strong>STANDARD DEVIATION OF p̂</strong><br/><br/>
                <strong>Finite Population:</strong><br/>
                σp̂ = √[(N-n)/(N-1)] × √[p(1-p)/n]<br/><br/>
                <strong>Infinite Population:</strong><br/>
                σp̂ = √[p(1-p)/n] &nbsp;&nbsp;&nbsp;&nbsp;(7.5)
            </div>
            
            <p>The term <strong>standard error of the proportion</strong> refers to the standard deviation of p̂. For the EAI study with p = 0.60, n = 30, and n/N = 30/2500 = 0.012 < 0.05:</p>
            
            <div class="formula">
                σp̂ = √[p(1-p)/n] = √[0.60(0.40)/30] = √[0.24/30] = 0.0894
            </div>
            
            <h4><strong>Form of the Sampling Distribution of p̂</strong></h4>
            
            <p>The sample proportion p̂ = x/n, where x is a binomial random variable. The sampling distribution of p̂ can be approximated by a normal distribution when the sample size is large enough to satisfy:</p>
            
            <div class="formula">
                <strong>CONDITIONS FOR NORMAL APPROXIMATION:</strong><br/>
                np ≥ 5 &nbsp;&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;&nbsp; n(1-p) ≥ 5
            </div>
            
            <p>For the EAI example with n = 30 and p = 0.60:</p>
            <ul>
                <li><strong>np = 30(0.60) = 18 ≥ 5</strong> ✓</li>
                <li><strong>n(1-p) = 30(0.40) = 12 ≥ 5</strong> ✓</li>
            </ul>
            
            <p>Therefore, the sampling distribution is approximately normal with mean 0.60 and standard error 0.0894.</p>
            
            <h4><strong>Practical Value of the Sampling Distribution of p̂</strong></h4>
            
            <p>The sampling distribution of p̂ provides probability information about the difference between the sample proportion and the population proportion.</p>
            
            <h5><strong>EAI Probability Question</strong></h5>
            <p><strong>Question:</strong> What is the probability of obtaining a sample proportion p̂ that is within 0.05 of the population proportion (0.60)?</p>
            
            <p>We want: P(0.55 ≤ p̂ ≤ 0.65)</p>
            
            <h5><strong>Probability Calculation (n = 30)</strong></h5>
            
            <p><strong>At p̂ = 0.65:</strong></p>
            <div class="formula">
                z = (0.65 - 0.60) / 0.0894 = 0.05 / 0.0894 = 0.56
            </div>
            <p>P(z ≤ 0.56) = 0.7123</p>
            
            <p><strong>At p̂ = 0.55:</strong></p>
            <div class="formula">
                z = (0.55 - 0.60) / 0.0894 = -0.05 / 0.0894 = -0.56
            </div>
            <p>P(z ≤ -0.56) = 0.2877</p>
            
            <p><strong>Final Result:</strong></p>
            <div class="formula">
                P(0.55 ≤ p̂ ≤ 0.65) = 0.7123 - 0.2877 = 0.4246 (42.46%)
            </div>
            
            <h5><strong>Sample Size Effect (n = 100)</strong></h5>
            <p>If we increase the sample size to n = 100:</p>
            
            <div class="formula">
                σp̂ = √[0.60(0.40)/100] = √[0.24/100] = 0.049
            </div>
            
            <p><strong>At p̂ = 0.65:</strong> z = 0.05/0.049 = 1.02, P(z ≤ 1.02) = 0.8461</p>
            <p><strong>At p̂ = 0.55:</strong> z = -0.05/0.049 = -1.02, P(z ≤ -1.02) = 0.1539</p>
            
            <div class="formula">
                P(0.55 ≤ p̂ ≤ 0.65) = 0.8461 - 0.1539 = 0.6922 (69.22%)
            </div>
            
            <h5><strong>Sample Size Comparison</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Sample Size</div>
                    <div class="divTableHead">Standard Error</div>
                    <div class="divTableHead">P(within 0.05)</div>
                    <div class="divTableHead">Improvement</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">n = 30</div>
                        <div class="divTableCell">0.0894</div>
                        <div class="divTableCell">42.46%</div>
                        <div class="divTableCell">Baseline</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">n = 100</div>
                        <div class="divTableCell">0.049</div>
                        <div class="divTableCell">69.22%</div>
                        <div class="divTableCell">+26.76 percentage points</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Comparison: Sample Mean vs. Sample Proportion</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Property</div>
                    <div class="divTableHead">Sample Mean (x̄)</div>
                    <div class="divTableHead">Sample Proportion (p̂)</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Estimates</strong></div>
                        <div class="divTableCell">Population mean μ</div>
                        <div class="divTableCell">Population proportion p</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Expected Value</strong></div>
                        <div class="divTableCell">E(x̄) = μ</div>
                        <div class="divTableCell">E(p̂) = p</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Standard Error</strong></div>
                        <div class="divTableCell">σx̄ = σ/√n</div>
                        <div class="divTableCell">σp̂ = √[p(1-p)/n]</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Normal Approximation</strong></div>
                        <div class="divTableCell">CLT: n ≥ 30 (usually)</div>
                        <div class="divTableCell">np ≥ 5 and n(1-p) ≥ 5</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Bias</strong></div>
                        <div class="divTableCell">Unbiased</div>
                        <div class="divTableCell">Unbiased</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Business Applications</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Industry</div>
                    <div class="divTableHead">Application</div>
                    <div class="divTableHead">Sample Proportion Use</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Manufacturing</div>
                        <div class="divTableCell">Quality control</div>
                        <div class="divTableCell">Estimate defect rate from sample inspection</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Marketing</div>
                        <div class="divTableCell">Customer surveys</div>
                        <div class="divTableCell">Estimate customer satisfaction rate</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Human Resources</div>
                        <div class="divTableCell">Training evaluation</div>
                        <div class="divTableCell">Estimate training completion rate</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Healthcare</div>
                        <div class="divTableCell">Treatment effectiveness</div>
                        <div class="divTableCell">Estimate success rate from clinical trials</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Finance</div>
                        <div class="divTableCell">Risk assessment</div>
                        <div class="divTableCell">Estimate default rate from sample audits</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Key Principles for Proportion Sampling</strong></h4>
            
            <ol>
                <li><strong>Unbiased Estimation:</strong> p̂ is an unbiased estimator of p</li>
                <li><strong>Standard Error Depends on p:</strong> σp̂ = √[p(1-p)/n] varies with population proportion</li>
                <li><strong>Maximum Variability:</strong> Standard error is maximized when p = 0.5</li>
                <li><strong>Normal Approximation Conditions:</strong> Both np ≥ 5 and n(1-p) ≥ 5 must hold</li>
                <li><strong>Sample Size Planning:</strong> Use p = 0.5 for conservative sample size calculations</li>
                <li><strong>Discrete Nature:</strong> p̂ can only take values 0/n, 1/n, 2/n, ..., n/n</li>
            </ol>
            
            <h4><strong>Special Considerations</strong></h4>
            
            <h5><strong>When p is Near 0 or 1</strong></h5>
            <ul>
                <li><strong>Small p:</strong> Need larger n to satisfy np ≥ 5</li>
                <li><strong>Large p:</strong> Need larger n to satisfy n(1-p) ≥ 5</li>
                <li><strong>Conservative approach:</strong> Use p = 0.5 for planning when p is unknown</li>
            </ul>
            
            <h5><strong>Maximum Standard Error</strong></h5>
            <p>The standard error σp̂ = √[p(1-p)/n] is maximized when p = 0.5:</p>
            <div class="formula">
                Maximum σp̂ = √[0.5(0.5)/n] = 0.5/√n
            </div>
            <p>This is useful for conservative sample size planning.</p>
            
            <h4><strong>Summary: EAI Proportion Analysis</strong></h4>
            
            <p><strong>Population Parameter:</strong> p = 0.60 (training completion rate)</p>
            <p><strong>Sample Size n = 30:</strong></p>
            <ul>
                <li>Expected Value: E(p̂) = 0.60</li>
                <li>Standard Error: σp̂ = 0.0894</li>
                <li>Normal approximation valid: np = 18 ≥ 5, n(1-p) = 12 ≥ 5</li>
                <li>Probability within ±0.05: 42.46%</li>
            </ul>
            
            <p><strong>Key Insight:</strong> Increasing sample size from 30 to 100 increases the probability of accurate estimation from 42.46% to 69.22%, demonstrating the value of larger samples for proportion estimation.</p>`
        },
        {
            id: 409,
            title: "Properties of Point Estimators",
            category: "point-estimator-properties",
            content: `<h3><strong>Properties of Point Estimators</strong></h3>
            
            <h4><strong>Introduction to Point Estimator Properties</strong></h4>
            
            <p>In this chapter we showed how sample statistics such as a sample mean x̄, a sample standard deviation s, and a sample proportion p̂ can be used as point estimators of their corresponding population parameters μ, σ, and p. It is intuitively appealing that each of these sample statistics is the point estimator of its corresponding population parameter.</p>
            
            <p>However, before using a sample statistic as a point estimator, statisticians check to see whether the sample statistic demonstrates certain properties associated with good point estimators. In this section we discuss three properties of good point estimators: <strong>unbiased</strong>, <strong>efficiency</strong>, and <strong>consistency</strong>.</p>
            
            <h5><strong>General Notation</strong></h5>
            <p>Because several different sample statistics can be used as point estimators of different population parameters, we use the following general notation:</p>
            
            <div class="formula">
                θ = the population parameter of interest<br/>
                θ̂ = the sample statistic or point estimator of θ
            </div>
            
            <p>The notation θ is the Greek letter theta, and the notation θ̂ is pronounced "theta-hat." In general, θ represents any population parameter such as a population mean, population standard deviation, population proportion, and so on; θ̂ represents the corresponding sample statistic such as the sample mean, sample standard deviation, and sample proportion.</p>
            
            <h4><strong>Property 1: Unbiased</strong></h4>
            
            <p>If the expected value of the sample statistic is equal to the population parameter being estimated, the sample statistic is said to be an <strong>unbiased estimator</strong> of the population parameter.</p>
            
            <div class="formula">
                <strong>UNBIASED ESTIMATOR</strong><br/>
                The sample statistic θ̂ is an unbiased estimator of the population parameter θ if<br/><br/>
                E(θ̂) = θ<br/><br/>
                where E(θ̂) = the expected value of the sample statistic θ̂
            </div>
            
            <p>Hence, the expected value, or mean, of all possible values of an unbiased sample statistic is equal to the population parameter being estimated.</p>
            
            <h5><strong>Visual Understanding: Unbiased vs. Biased Estimators</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Estimator Type</div>
                    <div class="divTableHead">Expected Value</div>
                    <div class="divTableHead">Characteristic</div>
                    <div class="divTableHead">Estimation Errors</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Unbiased Estimator</strong></div>
                        <div class="divTableCell">E(θ̂) = θ</div>
                        <div class="divTableCell">Mean of sampling distribution equals parameter</div>
                        <div class="divTableCell">Errors balance out (+ and - cancel)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Biased Estimator</strong></div>
                        <div class="divTableCell">E(θ̂) ≠ θ</div>
                        <div class="divTableCell">Mean of sampling distribution ≠ parameter</div>
                        <div class="divTableCell">Systematic over- or under-estimation</div>
                    </div>
                </div>
            </div>
            
            <p>In the case of an unbiased estimator, the estimation errors balance out because sometimes the value of the point estimator θ̂ may be less than θ and other times it may be greater than θ. In the case of a biased estimator, the mean of the sampling distribution is less than or greater than the value of the population parameter, showing systematic bias.</p>
            
            <h5><strong>Examples of Unbiased Estimators</strong></h5>
            
            <p>In discussing the sampling distributions of the sample mean and the sample proportion, we stated that E(x̄) = μ and E(p̂) = p. Thus, both x̄ and p̂ are <strong>unbiased estimators</strong> of their corresponding population parameters μ and p.</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Sample Statistic</div>
                    <div class="divTableHead">Population Parameter</div>
                    <div class="divTableHead">Expected Value</div>
                    <div class="divTableHead">Unbiased?</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Sample mean (x̄)</div>
                        <div class="divTableCell">Population mean (μ)</div>
                        <div class="divTableCell">E(x̄) = μ</div>
                        <div class="divTableCell">✓ Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample proportion (p̂)</div>
                        <div class="divTableCell">Population proportion (p)</div>
                        <div class="divTableCell">E(p̂) = p</div>
                        <div class="divTableCell">✓ Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample variance (s²)</div>
                        <div class="divTableCell">Population variance (σ²)</div>
                        <div class="divTableCell">E(s²) = σ²</div>
                        <div class="divTableCell">✓ Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample std deviation (s)</div>
                        <div class="divTableCell">Population std deviation (σ)</div>
                        <div class="divTableCell">E(s) ≠ σ</div>
                        <div class="divTableCell">✗ No (slightly biased)</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Why n-1 in Sample Variance Formula?</strong></h5>
            <p>In the case of the sample standard deviation s and the sample variance s², it can be shown that E(s²) = σ². Thus, we conclude that the sample variance s² is an unbiased estimator of the population variance σ².</p>
            
            <p><strong>Key Insight:</strong> When we first presented the formulas for the sample variance and the sample standard deviation in Chapter 3, n-1 rather than n was used in the denominator. The reason for using n-1 rather than n is to make the sample variance an unbiased estimator of the population variance.</p>
            
            <div class="formula">
                <strong>Unbiased Sample Variance:</strong><br/>
                s² = Σ(xᵢ - x̄)² / (n-1)<br/><br/>
                <strong>Biased Alternative (not used):</strong><br/>
                Σ(xᵢ - x̄)² / n
            </div>
            
            <h4><strong>Property 2: Efficiency</strong></h4>
            
            <p>Assume that a simple random sample of n elements can be used to provide two unbiased point estimators of the same population parameter. In this situation, we would prefer to use the point estimator with the smaller standard error, because it tends to provide estimates closer to the population parameter. The point estimator with the smaller standard error is said to have <strong>greater relative efficiency</strong> than the other.</p>
            
            <div class="formula">
                <strong>EFFICIENCY</strong><br/>
                Among unbiased estimators, the one with the smaller standard error is more efficient.
            </div>
            
            <h5><strong>Efficiency Comparison Example</strong></h5>
            
            <p>Consider two unbiased point estimators, θ̂₁ and θ̂₂, of the same population parameter θ. If the standard error of θ̂₁ is less than the standard error of θ̂₂, then:</p>
            
            <ul>
                <li>Values of θ̂₁ have a greater chance of being close to the parameter θ</li>
                <li>θ̂₁ is relatively more efficient than θ̂₂</li>
                <li>θ̂₁ is the preferred point estimator</li>
            </ul>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Estimator</div>
                    <div class="divTableHead">Standard Error</div>
                    <div class="divTableHead">Efficiency</div>
                    <div class="divTableHead">Preference</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">θ̂₁</div>
                        <div class="divTableCell">Smaller σ_{θ̂₁}</div>
                        <div class="divTableCell">More efficient</div>
                        <div class="divTableCell">✓ Preferred</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">θ̂₂</div>
                        <div class="divTableCell">Larger σ_{θ̂₂}</div>
                        <div class="divTableCell">Less efficient</div>
                        <div class="divTableCell">✗ Not preferred</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Practical Example: Sample Mean vs. Sample Median</strong></h5>
            
            <p>When sampling from a normal population, both the sample mean and sample median are unbiased estimators of the population mean. However:</p>
            
            <ul>
                <li><strong>Sample Mean:</strong> Standard error = σ/√n</li>
                <li><strong>Sample Median:</strong> Standard error ≈ 1.25σ/√n</li>
            </ul>
            
            <p><strong>Conclusion:</strong> The sample mean is more efficient than the sample median when sampling from normal populations, so we prefer the sample mean.</p>
            
            <h4><strong>Property 3: Consistency</strong></h4>
            
            <p>A third property associated with good point estimators is <strong>consistency</strong>. Loosely speaking, a point estimator is consistent if the values of the point estimator tend to become closer to the population parameter as the sample size becomes larger. In other words, a large sample size tends to provide a better point estimate than a small sample size.</p>
            
            <div class="formula">
                <strong>CONSISTENCY</strong><br/>
                A point estimator is consistent if it converges to the population parameter as sample size increases.
            </div>
            
            <h5><strong>Consistency of Sample Mean</strong></h5>
            
            <p>For the sample mean x̄, we showed that the standard error of x̄ is given by σₓ̄ = σ/√n. Because σₓ̄ is related to the sample size such that larger sample sizes provide smaller values for σₓ̄, we conclude that a larger sample size tends to provide point estimates closer to the population mean μ.</p>
            
            <div class="formula">
                <strong>Sample Mean Consistency:</strong><br/>
                As n increases → σₓ̄ = σ/√n decreases → x̄ gets closer to μ
            </div>
            
            <p>In this sense, we can say that the sample mean x̄ is a <strong>consistent estimator</strong> of the population mean μ.</p>
            
            <h5><strong>Consistency of Sample Proportion</strong></h5>
            
            <p>Using a similar rationale, we can also conclude that the sample proportion p̂ is a consistent estimator of the population proportion p, since σₚ̂ = √[p(1-p)/n] decreases as n increases.</p>
            
            <div class="formula">
                <strong>Sample Proportion Consistency:</strong><br/>
                As n increases → σₚ̂ = √[p(1-p)/n] decreases → p̂ gets closer to p
            </div>
            
            <h4><strong>Summary of Point Estimator Properties</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Estimator</div>
                    <div class="divTableHead">Parameter</div>
                    <div class="divTableHead">Unbiased?</div>
                    <div class="divTableHead">Efficient?</div>
                    <div class="divTableHead">Consistent?</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Sample mean (x̄)</div>
                        <div class="divTableCell">μ</div>
                        <div class="divTableCell">✓ Yes</div>
                        <div class="divTableCell">✓ Yes (for normal populations)</div>
                        <div class="divTableCell">✓ Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample proportion (p̂)</div>
                        <div class="divTableCell">p</div>
                        <div class="divTableCell">✓ Yes</div>
                        <div class="divTableCell">✓ Yes (best for proportions)</div>
                        <div class="divTableCell">✓ Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample variance (s²)</div>
                        <div class="divTableCell">σ²</div>
                        <div class="divTableCell">✓ Yes</div>
                        <div class="divTableCell">✓ Yes</div>
                        <div class="divTableCell">✓ Yes</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample median</div>
                        <div class="divTableCell">μ (for symmetric distributions)</div>
                        <div class="divTableCell">✓ Yes</div>
                        <div class="divTableCell">✗ No (less efficient than mean)</div>
                        <div class="divTableCell">✓ Yes</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Practical Implications for Business</strong></h4>
            
            <h5><strong>1. Choosing Between Estimators</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Situation</div>
                    <div class="divTableHead">Options</div>
                    <div class="divTableHead">Best Choice</div>
                    <div class="divTableHead">Reason</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Estimating population mean</div>
                        <div class="divTableCell">Sample mean vs. sample median</div>
                        <div class="divTableCell">Sample mean</div>
                        <div class="divTableCell">More efficient (smaller standard error)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Estimating population variance</div>
                        <div class="divTableCell">Use n vs. n-1 in denominator</div>
                        <div class="divTableCell">Use n-1</div>
                        <div class="divTableCell">Provides unbiased estimator</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample size planning</div>
                        <div class="divTableCell">Small vs. large sample</div>
                        <div class="divTableCell">Larger sample (when feasible)</div>
                        <div class="divTableCell">Consistency - better estimates with larger n</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>2. Business Decision Guidelines</strong></h5>
            
            <ol>
                <li><strong>Unbiasedness Check:</strong> Ensure your estimator doesn't systematically over- or under-estimate</li>
                <li><strong>Efficiency Consideration:</strong> Among unbiased options, choose the one with smaller standard error</li>
                <li><strong>Consistency Planning:</strong> Larger samples generally provide better estimates</li>
                <li><strong>Cost-Benefit Analysis:</strong> Balance the cost of larger samples against the benefit of better estimates</li>
            </ol>
            
            <h5><strong>3. Quality Control Applications</strong></h5>
            
            <ul>
                <li><strong>Process Monitoring:</strong> Use sample mean (unbiased, efficient) to track process averages</li>
                <li><strong>Defect Rate Estimation:</strong> Use sample proportion (unbiased, efficient) for quality percentages</li>
                <li><strong>Variability Assessment:</strong> Use sample variance with n-1 (unbiased) for process variability</li>
                <li><strong>Sample Size Strategy:</strong> Increase sample size when precision is critical (consistency)</li>
            </ul>
            
            <h4><strong>Common Misconceptions</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Misconception</div>
                    <div class="divTableHead">Reality</div>
                    <div class="divTableHead">Explanation</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">"Sample standard deviation s is unbiased"</div>
                        <div class="divTableCell">s is slightly biased</div>
                        <div class="divTableCell">Only s² is unbiased; s tends to underestimate σ slightly</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">"Larger samples always give exact answers"</div>
                        <div class="divTableCell">Larger samples give better estimates</div>
                        <div class="divTableCell">Consistency means approaching the parameter, not reaching it exactly</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">"Any sample statistic is a good estimator"</div>
                        <div class="divTableCell">Need to check properties</div>
                        <div class="divTableCell">Must verify unbiasedness, efficiency, and consistency</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">"Bias doesn't matter if sample is large"</div>
                        <div class="divTableCell">Bias persists regardless of sample size</div>
                        <div class="divTableCell">Biased estimators remain biased even with large samples</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Key Takeaways</strong></h4>
            
            <ol>
                <li><strong>Three Key Properties:</strong> Good estimators should be unbiased, efficient, and consistent</li>
                <li><strong>Unbiasedness:</strong> E(θ̂) = θ ensures no systematic error</li>
                <li><strong>Efficiency:</strong> Among unbiased estimators, choose the one with smallest standard error</li>
                <li><strong>Consistency:</strong> Larger samples provide estimates closer to true parameter values</li>
                <li><strong>Standard Estimators:</strong> x̄, p̂, and s² all possess these desirable properties</li>
                <li><strong>n-1 Formula:</strong> Used in sample variance to ensure unbiasedness</li>
                <li><strong>Business Application:</strong> These properties guide estimator selection in quality control, market research, and performance evaluation</li>
            </ol>`
        },
        {
            id: 410,
            title: "Other Sampling Methods",
            category: "other-sampling-methods",
            content: `<h3><strong>Other Sampling Methods</strong></h3>
            
            <h4><strong>Introduction to Alternative Sampling Methods</strong></h4>
            
            <p>We described simple random sampling as a procedure for sampling from a finite population and discussed the properties of the sampling distributions of x̄ and p̂ when simple random sampling is used. Other methods such as <strong>stratified random sampling</strong>, <strong>cluster sampling</strong>, and <strong>systematic sampling</strong> provide advantages over simple random sampling in some situations.</p>
            
            <p>In this section we briefly introduce these alternative sampling methods, covering both probability and nonprobability sampling techniques.</p>
            
            <h4><strong>Probability Sampling Methods</strong></h4>
            
            <p>Probability sampling techniques are methods where elements selected from the population have a known probability of being included in the sample. The advantage of probability sampling is that the sampling distribution of the appropriate sample statistic generally can be identified, and formulas can be used to determine the properties of the sampling distribution.</p>
            
            <h5><strong>1. Stratified Random Sampling</strong></h5>
            
            <h6><strong>Definition and Process</strong></h6>
            <p>In stratified random sampling, the elements in the population are first divided into groups called <strong>strata</strong>, such that each element in the population belongs to one and only one stratum. The basis for forming the strata, such as department, location, age, industry type, and so on, is at the discretion of the designer of the sample.</p>
            
            <p><strong>Process Steps:</strong></p>
            <ol>
                <li>Divide population into H strata (non-overlapping groups)</li>
                <li>Ensure each element belongs to exactly one stratum</li>
                <li>Take a simple random sample from each stratum</li>
                <li>Combine results using appropriate formulas</li>
            </ol>
            
            <div class="formula">
                <strong>STRATIFIED SAMPLING STRUCTURE</strong><br/>
                Population → Stratum 1, Stratum 2, ..., Stratum H<br/>
                Each stratum → Simple random sample<br/>
                Combined results → Population estimate
            </div>
            
            <h6><strong>Key Principles</strong></h6>
            <ul>
                <li><strong>Homogeneity Within Strata:</strong> Best results when elements within each stratum are as much alike as possible</li>
                <li><strong>Low Variance Within:</strong> If elements within strata are alike, strata will have low variances</li>
                <li><strong>Efficiency Gain:</strong> Relatively small sample sizes can obtain good estimates of strata characteristics</li>
                <li><strong>Precision Advantage:</strong> Can provide results as precise as simple random sampling with smaller total sample size</li>
            </ul>
            
            <h6><strong>Business Applications</strong></h6>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Industry</div>
                    <div class="divTableHead">Strata Example</div>
                    <div class="divTableHead">Purpose</div>
                    <div class="divTableHead">Advantage</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Manufacturing</div>
                        <div class="divTableCell">Different production lines</div>
                        <div class="divTableCell">Quality control across all lines</div>
                        <div class="divTableCell">Ensures representation from each line</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Retail</div>
                        <div class="divTableCell">Store locations (urban/suburban/rural)</div>
                        <div class="divTableCell">Customer satisfaction survey</div>
                        <div class="divTableCell">Captures regional differences</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Human Resources</div>
                        <div class="divTableCell">Employee departments</div>
                        <div class="divTableCell">Workplace culture assessment</div>
                        <div class="divTableCell">Department-specific insights</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Healthcare</div>
                        <div class="divTableCell">Patient age groups</div>
                        <div class="divTableCell">Treatment effectiveness study</div>
                        <div class="divTableCell">Age-specific treatment responses</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>2. Cluster Sampling</strong></h5>
            
            <h6><strong>Definition and Process</strong></h6>
            <p>In cluster sampling, the elements in the population are first divided into separate groups called <strong>clusters</strong>. Each element of the population belongs to one and only one cluster. A simple random sample of the clusters is then taken. All elements within each sampled cluster form the sample.</p>
            
            <p><strong>Process Steps:</strong></p>
            <ol>
                <li>Divide population into K clusters (non-overlapping groups)</li>
                <li>Randomly select a sample of clusters</li>
                <li>Include ALL elements from selected clusters in the sample</li>
                <li>Analyze data from all elements in sampled clusters</li>
            </ol>
            
            <div class="formula">
                <strong>CLUSTER SAMPLING STRUCTURE</strong><br/>
                Population → Cluster 1, Cluster 2, ..., Cluster K<br/>
                Random selection → Sample clusters<br/>
                Complete enumeration → All elements in selected clusters
            </div>
            
            <h6><strong>Key Principles</strong></h6>
            <ul>
                <li><strong>Heterogeneity Within Clusters:</strong> Best results when elements within clusters are not alike</li>
                <li><strong>Representative Clusters:</strong> Ideal when each cluster is a representative small-scale version of entire population</li>
                <li><strong>Cluster Similarity:</strong> Value depends on how representative each cluster is of the entire population</li>
                <li><strong>Cost Efficiency:</strong> Can result in cost savings despite larger sample sizes</li>
            </ul>
            
            <h6><strong>Area Sampling Application</strong></h6>
            <p>One of the primary applications of cluster sampling is <strong>area sampling</strong>, where clusters are city blocks or other well-defined geographical areas. This is particularly useful for:</p>
            <ul>
                <li>Door-to-door surveys</li>
                <li>Market research in specific regions</li>
                <li>Public health studies</li>
                <li>Political polling</li>
            </ul>
            
            <p><strong>Cost-Benefit Analysis:</strong> Cluster sampling generally requires a larger total sample size than either simple random sampling or stratified random sampling. However, it can result in cost savings because when an interviewer is sent to a sampled cluster (e.g., a city-block location), many sample observations can be obtained in a relatively short time.</p>
            
            <h6><strong>Business Applications</strong></h6>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Context</div>
                    <div class="divTableHead">Clusters</div>
                    <div class="divTableHead">Sampling Strategy</div>
                    <div class="divTableHead">Cost Advantage</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Market Research</div>
                        <div class="divTableCell">Shopping centers</div>
                        <div class="divTableCell">Select few centers, survey all shoppers</div>
                        <div class="divTableCell">Reduced travel costs</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Education Study</div>
                        <div class="divTableCell">Schools in district</div>
                        <div class="divTableCell">Select schools, survey all students</div>
                        <div class="divTableCell">Administrative efficiency</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Quality Control</div>
                        <div class="divTableCell">Production batches</div>
                        <div class="divTableCell">Select batches, test all items</div>
                        <div class="divTableCell">Batch-level insights</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Customer Service</div>
                        <div class="divTableCell">Service regions</div>
                        <div class="divTableCell">Select regions, survey all customers</div>
                        <div class="divTableCell">Regional representative visits</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>3. Systematic Sampling</strong></h5>
            
            <h6><strong>Definition and Process</strong></h6>
            <p>In some sampling situations, especially those with large populations, it is time-consuming to select a simple random sample by first finding a random number and then counting or searching through the list of the population until the corresponding element is found. An alternative to simple random sampling is <strong>systematic sampling</strong>.</p>
            
            <p><strong>Systematic Sampling Procedure:</strong></p>
            <ol>
                <li>Determine sampling interval: k = N/n (population size ÷ sample size)</li>
                <li>Randomly select starting point from first k elements</li>
                <li>Select every kth element thereafter</li>
                <li>Continue until desired sample size is reached</li>
            </ol>
            
            <h6><strong>Example Calculation</strong></h6>
            <p>If a sample size of 50 is desired from a population containing 5000 elements:</p>
            <ul>
                <li><strong>Sampling interval:</strong> k = 5000/50 = 100</li>
                <li><strong>Random start:</strong> Randomly select one of the first 100 elements</li>
                <li><strong>Systematic selection:</strong> Then select every 100th element</li>
                <li><strong>Final sample:</strong> 50 elements systematically distributed</li>
            </ul>
            
            <div class="formula">
                <strong>SYSTEMATIC SAMPLING FORMULA</strong><br/>
                Sampling interval: k = N/n<br/>
                Random start: Element r (where 1 ≤ r ≤ k)<br/>
                Sample elements: r, r+k, r+2k, r+3k, ..., r+(n-1)k
            </div>
            
            <h6><strong>Advantages and Assumptions</strong></h6>
            <ul>
                <li><strong>Efficiency:</strong> Sample usually easier to identify than with simple random sampling</li>
                <li><strong>Random Assumption:</strong> Because first element is randomly chosen, systematic sample usually assumed to have properties of simple random sample</li>
                <li><strong>Best Case:</strong> Assumption especially applicable when list of elements is in random order</li>
                <li><strong>Practical Benefit:</strong> Reduces time and effort in large population sampling</li>
            </ul>
            
            <h6><strong>Business Applications</strong></h6>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Application</div>
                    <div class="divTableHead">Population List</div>
                    <div class="divTableHead">Systematic Approach</div>
                    <div class="divTableHead">Benefit</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Customer satisfaction</div>
                        <div class="divTableCell">Customer database</div>
                        <div class="divTableCell">Every 100th customer</div>
                        <div class="divTableCell">Easy database sampling</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Quality control</div>
                        <div class="divTableCell">Production sequence</div>
                        <div class="divTableCell">Every 50th product</div>
                        <div class="divTableCell">Continuous monitoring</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Employee survey</div>
                        <div class="divTableCell">Employee roster</div>
                        <div class="divTableCell">Every 25th employee</div>
                        <div class="divTableCell">Systematic coverage</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Inventory audit</div>
                        <div class="divTableCell">Item catalog</div>
                        <div class="divTableCell">Every 200th item</div>
                        <div class="divTableCell">Efficient audit sampling</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Nonprobability Sampling Methods</strong></h4>
            
            <p>The sampling methods discussed above are probability sampling techniques where elements have known probabilities of selection. In contrast, nonprobability sampling techniques do not provide known probabilities of selection. While easier to implement, they have limitations for statistical inference.</p>
            
            <h5><strong>4. Convenience Sampling</strong></h5>
            
            <h6><strong>Definition and Characteristics</strong></h6>
            <p><strong>Convenience sampling</strong> is a nonprobability sampling technique. As the name implies, the sample is identified primarily by convenience. Elements are included in the sample without prespecified or known probabilities of being selected.</p>
            
            <h6><strong>Common Examples</strong></h6>
            <ul>
                <li><strong>Academic Research:</strong> Professor using student volunteers because they are readily available and participate for little or no cost</li>
                <li><strong>Quality Inspection:</strong> Inspector sampling oranges haphazardly from several crates (labeling each orange would be impractical)</li>
                <li><strong>Wildlife Studies:</strong> Samples from wildlife captures</li>
                <li><strong>Consumer Research:</strong> Volunteer panels for market research</li>
                <li><strong>Street Interviews:</strong> Interviewing people who happen to pass by</li>
            </ul>
            
            <h6><strong>Advantages and Disadvantages</strong></h6>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Advantages</div>
                    <div class="divTableHead">Disadvantages</div>
                    <div class="divTableHead">Risk</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Easy sample selection</div>
                        <div class="divTableCell">Unknown representativeness</div>
                        <div class="divTableCell">May not represent population</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Quick data collection</div>
                        <div class="divTableCell">No probability analysis possible</div>
                        <div class="divTableCell">Cannot assess sample quality</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Low cost</div>
                        <div class="divTableCell">Potential bias</div>
                        <div class="divTableCell">Misleading conclusions</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Immediate availability</div>
                        <div class="divTableCell">Limited generalizability</div>
                        <div class="divTableCell">Poor business decisions</div>
                    </div>
                </div>
            </div>
            
            <h6><strong>Statistical Limitations</strong></h6>
            <p><strong>Critical Warning:</strong> It is impossible to evaluate the "goodness" of a convenience sample in terms of its representativeness of the population. A convenience sample may provide good results or it may not; no statistically justified procedure allows a probability analysis and inference about the quality of the sample results.</p>
            
            <p><strong>Common Misuse:</strong> Sometimes researchers apply statistical methods designed for probability samples to a convenience sample, arguing that the convenience sample can be treated as though it were a probability sample. However, this argument cannot be supported, and we should be cautious in interpreting the results of convenience samples that are used to make inferences about populations.</p>
            
            <h5><strong>5. Judgment Sampling</strong></h5>
            
            <h6><strong>Definition and Process</strong></h6>
            <p>One additional nonprobability sampling technique is <strong>judgment sampling</strong>. In this approach, the person most knowledgeable on the subject of the study selects elements of the population that he or she feels are most representative of the population.</p>
            
            <h6><strong>Characteristics</strong></h6>
            <ul>
                <li><strong>Expert Selection:</strong> Relies on expertise of knowledgeable person</li>
                <li><strong>Subjective Process:</strong> Based on judgment rather than random selection</li>
                <li><strong>Easy Implementation:</strong> Often relatively easy way of selecting a sample</li>
                <li><strong>Quality Dependence:</strong> Results depend on judgment quality of selector</li>
            </ul>
            
            <h6><strong>Business Examples</strong></h6>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Context</div>
                    <div class="divTableHead">Expert</div>
                    <div class="divTableHead">Selection Basis</div>
                    <div class="divTableHead">Example</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Political reporting</div>
                        <div class="divTableCell">Reporter</div>
                        <div class="divTableCell">Representative senators</div>
                        <div class="divTableCell">Select 2-3 senators reflecting general opinion</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Market research</div>
                        <div class="divTableCell">Marketing manager</div>
                        <div class="divTableCell">Key customer segments</div>
                        <div class="divTableCell">Choose customers representing different demographics</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Product testing</div>
                        <div class="divTableCell">Product manager</div>
                        <div class="divTableCell">Typical use scenarios</div>
                        <div class="divTableCell">Select users representing main use cases</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Quality assessment</div>
                        <div class="divTableCell">Quality engineer</div>
                        <div class="divTableCell">Representative production periods</div>
                        <div class="divTableCell">Choose samples from different shifts/conditions</div>
                    </div>
                </div>
            </div>
            
            <h6><strong>Cautions and Limitations</strong></h6>
            <p><strong>Quality Warning:</strong> The quality of the sample results depends on the judgment of the person selecting the sample. Again, great caution is warranted in drawing conclusions based on judgment samples used to make inferences about populations.</p>
            
            <ul>
                <li><strong>Subjective Bias:</strong> Selector's personal biases may influence selection</li>
                <li><strong>Limited Validity:</strong> No statistical basis for generalization</li>
                <li><strong>Expertise Dependence:</strong> Results only as good as selector's knowledge</li>
                <li><strong>Reproducibility Issues:</strong> Different experts may select different samples</li>
            </ul>
            
            <h4><strong>Comparison of Sampling Methods</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Method</div>
                    <div class="divTableHead">Type</div>
                    <div class="divTableHead">Best When</div>
                    <div class="divTableHead">Main Advantage</div>
                    <div class="divTableHead">Main Disadvantage</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Simple Random</strong></div>
                        <div class="divTableCell">Probability</div>
                        <div class="divTableCell">Homogeneous population</div>
                        <div class="divTableCell">Unbiased, easy analysis</div>
                        <div class="divTableCell">May miss important subgroups</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Stratified</strong></div>
                        <div class="divTableCell">Probability</div>
                        <div class="divTableCell">Distinct subgroups exist</div>
                        <div class="divTableCell">Ensures subgroup representation</div>
                        <div class="divTableCell">Requires knowledge of strata</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Cluster</strong></div>
                        <div class="divTableCell">Probability</div>
                        <div class="divTableCell">Geographically dispersed population</div>
                        <div class="divTableCell">Cost efficient for large areas</div>
                        <div class="divTableCell">Larger sample size needed</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Systematic</strong></div>
                        <div class="divTableCell">Probability</div>
                        <div class="divTableCell">Large, ordered populations</div>
                        <div class="divTableCell">Easy to implement</div>
                        <div class="divTableCell">Risk if pattern in list</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Convenience</strong></div>
                        <div class="divTableCell">Nonprobability</div>
                        <div class="divTableCell">Limited resources/time</div>
                        <div class="divTableCell">Quick and cheap</div>
                        <div class="divTableCell">Unknown representativeness</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Judgment</strong></div>
                        <div class="divTableCell">Nonprobability</div>
                        <div class="divTableCell">Expert knowledge available</div>
                        <div class="divTableCell">Leverages expertise</div>
                        <div class="divTableCell">Subjective and potentially biased</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Business Decision Framework</strong></h4>
            
            <h5><strong>Choosing the Right Sampling Method</strong></h5>
            
            <ol>
                <li><strong>Define Objectives:</strong> What do you need to learn about the population?</li>
                <li><strong>Assess Resources:</strong> What are your time, budget, and access constraints?</li>
                <li><strong>Evaluate Population:</strong> Is it homogeneous, stratified, or geographically dispersed?</li>
                <li><strong>Consider Precision Needs:</strong> How accurate must your estimates be?</li>
                <li><strong>Choose Method:</strong> Select based on objectives, resources, and precision requirements</li>
            </ol>
            
            <h5><strong>Quality Control Guidelines</strong></h5>
            
            <ul>
                <li><strong>Prefer Probability Methods:</strong> When statistical inference is needed</li>
                <li><strong>Document Methodology:</strong> Clear description of sampling procedure</li>
                <li><strong>Assess Representativeness:</strong> Consider potential biases and limitations</li>
                <li><strong>Report Limitations:</strong> Be transparent about sampling method constraints</li>
                <li><strong>Validate When Possible:</strong> Compare results with known population characteristics</li>
            </ul>
            
            <h4><strong>Key Takeaways</strong></h4>
            
            <ol>
                <li><strong>Method Selection Matters:</strong> Different situations call for different sampling approaches</li>
                <li><strong>Probability vs. Nonprobability:</strong> Probability methods enable statistical inference</li>
                <li><strong>Cost-Precision Trade-offs:</strong> Balance accuracy needs with resource constraints</li>
                <li><strong>Population Structure:</strong> Let population characteristics guide method choice</li>
                <li><strong>Statistical Validity:</strong> Be cautious with convenience and judgment samples</li>
                <li><strong>Business Application:</strong> Choose methods that align with decision-making needs</li>
            </ol>`
        }
    ],
    
    intervalEstimation: [
        {
            id: 407,
            title: "Interval Estimation and Confidence Intervals",
            category: "interval-estimation",
            content: `<h3><strong>Interval Estimation and Confidence Intervals</strong></h3>
            
            <h4><strong>Introduction to Interval Estimation</strong></h4>
            
            <p>In Chapter 7, we stated that a <strong>point estimator</strong> is a sample statistic used to estimate a population parameter. For instance, the sample mean x̄ is a point estimator of the population mean μ and the sample proportion p̂ is a point estimator of the population proportion p.</p>
            
            <p>Because a point estimator cannot be expected to provide the exact value of the population parameter, an <strong>interval estimate</strong> is often computed by adding and subtracting a value, called the <strong>margin of error</strong>, to the point estimate.</p>
            
            <div class="formula">
                <strong>GENERAL FORM OF INTERVAL ESTIMATE</strong><br/>
                Point estimate ± Margin of error
            </div>
            
            <p>The purpose of an interval estimate is to provide information about how close the point estimate, provided by the sample, is to the value of the population parameter.</p>
            
            <h5><strong>Specific Forms for Population Parameters</strong></h5>
            
            <p>The general form of an interval estimate of a <strong>population mean</strong> is:</p>
            <div class="formula">
                x̄ ± Margin of error
            </div>
            
            <p>Similarly, the general form of an interval estimate of a <strong>population proportion</strong> is:</p>
            <div class="formula">
                p̂ ± Margin of error
            </div>
            
            <p><strong>Key Insight:</strong> The sampling distributions of x̄ and p̂ play key roles in computing these interval estimates.</p>
            
            <h4><strong>Population Mean: σ Known</strong></h4>
            
            <h5><strong>When to Use the σ Known Case</strong></h5>
            
            <p>In order to develop an interval estimate of a population mean, either the population standard deviation σ or the sample standard deviation s must be used to compute the margin of error. In most applications σ is not known, and s is used to compute the margin of error. However, the σ known case applies when:</p>
            
            <ul>
                <li><strong>Historical Data Available:</strong> Large amounts of relevant historical data are available and can be used to estimate the population standard deviation prior to sampling</li>
                <li><strong>Quality Control Applications:</strong> Where a process is assumed to be operating correctly, or "in control," it is appropriate to treat the population standard deviation as known</li>
                <li><strong>Established Processes:</strong> Long-running business processes with well-documented variability</li>
            </ul>
            
            <h5><strong>Lloyd's Department Store Example</strong></h5>
            
            <p><strong>Business Context:</strong> Each week Lloyd's Department Store selects a simple random sample of 100 customers in order to learn about the amount spent per shopping trip. With x representing the amount spent per shopping trip, the sample mean x̄ provides a point estimate of μ, the mean amount spent per shopping trip for the population of all Lloyd's customers.</p>
            
            <p><strong>Historical Information:</strong></p>
            <ul>
                <li>Lloyd's has been using the weekly survey for several years</li>
                <li>Based on historical data, Lloyd's assumes a known value of <strong>σ = $20</strong> for the population standard deviation</li>
                <li>The historical data indicate that the population follows a <strong>normal distribution</strong></li>
                <li>Most recent week: surveyed <strong>n = 100</strong> customers and obtained <strong>x̄ = $82</strong></li>
            </ul>
            
            <h4><strong>Margin of Error and the Interval Estimate</strong></h4>
            
            <h5><strong>Sampling Distribution Foundation</strong></h5>
            
            <p>In Chapter 7 we showed that the sampling distribution of x̄ can be used to compute the probability that x̄ will be within a given distance of μ. In the Lloyd's example:</p>
            
            <ul>
                <li>Population of amounts spent is <strong>normally distributed</strong> with <strong>σ = 20</strong></li>
                <li>Sampling distribution of x̄ follows a <strong>normal distribution</strong></li>
                <li>Standard error: <strong>σₓ̄ = σ/√n = 20/√100 = 2</strong></li>
            </ul>
            
            <div class="formula">
                <strong>STANDARD ERROR CALCULATION</strong><br/>
                σₓ̄ = σ/√n = 20/√100 = 2
            </div>
            
            <p><strong>Note:</strong> We use the fact that the population of amounts spent has a normal distribution to conclude that the sampling distribution of x̄ has a normal distribution. If the population did not have a normal distribution, we could rely on the central limit theorem and the sample size of n = 100 to conclude that the sampling distribution of x̄ is approximately normal.</p>
            
            <h5><strong>95% Confidence Level Calculation</strong></h5>
            
            <p>Using the standard normal probability table, we find that <strong>95% of the values</strong> of any normally distributed random variable are within <strong>1.96 standard deviations</strong> of the mean.</p>
            
            <p>Thus, when the sampling distribution of x̄ is normally distributed, 95% of the x̄ values must be within 1.96σₓ̄ of the mean μ.</p>
            
            <p>In the Lloyd's example:</p>
            <ul>
                <li>Standard error σₓ̄ = 2</li>
                <li>Margin of error = 1.96σₓ̄ = 1.96(2) = <strong>3.92</strong></li>
                <li>95% of all x̄ values will be within <strong>3.92</strong> of the population mean μ</li>
            </ul>
            
            <h5><strong>Interval Construction and Interpretation</strong></h5>
            
            <p>For the Lloyd's example, suppose we set the margin of error equal to 3.92 and compute the interval estimate of μ using x̄ ± 3.92.</p>
            
            <p><strong>Understanding the Confidence Interval:</strong></p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Sample Scenario</div>
                    <div class="divTableHead">Sample Mean Location</div>
                    <div class="divTableHead">Interval Contains μ?</div>
                    <div class="divTableHead">Explanation</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Sample 1</div>
                        <div class="divTableCell">x̄₁ (within 3.92 of μ)</div>
                        <div class="divTableCell">✓ Yes</div>
                        <div class="divTableCell">Interval x̄₁ ± 3.92 includes the population mean μ</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample 2</div>
                        <div class="divTableCell">x̄₂ (within 3.92 of μ)</div>
                        <div class="divTableCell">✓ Yes</div>
                        <div class="divTableCell">Interval x̄₂ ± 3.92 also includes the population mean μ</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample 3</div>
                        <div class="divTableCell">x̄₃ (more than 3.92 from μ)</div>
                        <div class="divTableCell">✗ No</div>
                        <div class="divTableCell">Interval x̄₃ ± 3.92 does not include μ (falls in tail of distribution)</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Principle:</strong> Any sample mean x̄ that is within the central 95% region of the sampling distribution will provide an interval that contains the population mean μ. Because 95% of all possible sample means are in this region, <strong>95% of all intervals</strong> formed by subtracting 3.92 from x̄ and adding 3.92 to x̄ will include the population mean μ.</p>
            
            <h5><strong>Lloyd's Specific Calculation</strong></h5>
            
            <p>During the most recent week, Lloyd's surveyed 100 customers and obtained a sample mean amount spent of <strong>x̄ = $82</strong>.</p>
            
            <p>Using x̄ ± 3.92 to construct the interval estimate:</p>
            <div class="formula">
                82 ± 3.92<br/>
                Lower limit: 82 - 3.92 = 78.08<br/>
                Upper limit: 82 + 3.92 = 85.92<br/><br/>
                <strong>95% Confidence Interval: $78.08 to $85.92</strong>
            </div>
            
            <p><strong>Interpretation:</strong> Because 95% of all the intervals constructed using ± 3.92 will contain the population mean, we say that we are <strong>95% confident</strong> that the interval $78.08 to $85.92 includes the population mean μ.</p>
            
            <h4><strong>General Formula for Confidence Intervals</strong></h4>
            
            <p>We say that this interval has been established at the <strong>95% confidence level</strong>. The value .95 is referred to as the <strong>confidence coefficient</strong>, and the interval 78.08 to 85.92 is called the <strong>95% confidence interval</strong>.</p>
            
            <div class="formula">
                <strong>INTERVAL ESTIMATE OF A POPULATION MEAN: σ KNOWN</strong><br/><br/>
                x̄ ± z_{α/2} × (σ/√n) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(8.1)<br/><br/>
                where (1 - α) is the confidence coefficient and z_{α/2} is the z value providing an area of α/2 in the upper tail of the standard normal probability distribution.
            </div>
            
            <h5><strong>Lloyd's Example Using Formula (8.1)</strong></h5>
            
            <p>For a <strong>95% confidence interval</strong>:</p>
            <ul>
                <li>Confidence coefficient: (1 - α) = .95, thus α = .05</li>
                <li>Area in upper tail: α/2 = .05/2 = .025</li>
                <li>Critical value: z_{.025} = 1.96</li>
                <li>Sample mean: x̄ = 82</li>
                <li>Population standard deviation: σ = 20</li>
                <li>Sample size: n = 100</li>
            </ul>
            
            <p>Calculation:</p>
            <div class="formula">
                82 ± 1.96 × (20/√100)<br/>
                82 ± 1.96 × 2<br/>
                82 ± 3.92<br/><br/>
                <strong>95% Confidence Interval: 78.08 to 85.92</strong>
            </div>
            
            <p>The margin of error is 3.92 and the 95% confidence interval is 82 ± 3.92 = 78.08 to 85.92.</p>
            
            <h4><strong>Common Confidence Levels</strong></h4>
            
            <p>Although a 95% confidence level is frequently used, other confidence levels such as 90% and 99% may be considered.</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Confidence Level</div>
                    <div class="divTableHead">α</div>
                    <div class="divTableHead">α/2</div>
                    <div class="divTableHead">z_{α/2}</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">90%</div>
                        <div class="divTableCell">.10</div>
                        <div class="divTableCell">.05</div>
                        <div class="divTableCell">1.645</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">.05</div>
                        <div class="divTableCell">.025</div>
                        <div class="divTableCell">1.960</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">99%</div>
                        <div class="divTableCell">.01</div>
                        <div class="divTableCell">.005</div>
                        <div class="divTableCell">2.576</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Lloyd's Example at Different Confidence Levels</strong></h5>
            
            <p><strong>90% Confidence Interval:</strong></p>
            <div class="formula">
                82 ± 1.645 × (20/√100)<br/>
                82 ± 1.645 × 2<br/>
                82 ± 3.29<br/><br/>
                <strong>90% CI: 78.71 to 85.29</strong> (Margin of error = 3.29)
            </div>
            
            <p><strong>99% Confidence Interval:</strong></p>
            <div class="formula">
                82 ± 2.576 × (20/√100)<br/>
                82 ± 2.576 × 2<br/>
                82 ± 5.15<br/><br/>
                <strong>99% CI: 76.85 to 87.15</strong> (Margin of error = 5.15)
            </div>
            
            <h5><strong>Confidence Level Comparison</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Confidence Level</div>
                    <div class="divTableHead">Critical Value (z_{α/2})</div>
                    <div class="divTableHead">Margin of Error</div>
                    <div class="divTableHead">Confidence Interval</div>
                    <div class="divTableHead">Interval Width</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">90%</div>
                        <div class="divTableCell">1.645</div>
                        <div class="divTableCell">3.29</div>
                        <div class="divTableCell">78.71 to 85.29</div>
                        <div class="divTableCell">6.58</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">1.960</div>
                        <div class="divTableCell">3.92</div>
                        <div class="divTableCell">78.08 to 85.92</div>
                        <div class="divTableCell">7.84</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">99%</div>
                        <div class="divTableCell">2.576</div>
                        <div class="divTableCell">5.15</div>
                        <div class="divTableCell">76.85 to 87.15</div>
                        <div class="divTableCell">10.30</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Insight:</strong> Comparing the results for the 90%, 95%, and 99% confidence levels, we see that in order to have a <strong>higher degree of confidence</strong>, the <strong>margin of error</strong> and thus the <strong>width of the confidence interval</strong> must be larger.</p>
            
            <h4><strong>Practical Advice</strong></h4>
            
            <h5><strong>When the Population is Normal</strong></h5>
            <p>If the population follows a normal distribution, the confidence interval provided by expression (8.1) is <strong>exact</strong>. In other words, if expression (8.1) were used repeatedly to generate 95% confidence intervals, exactly 95% of the intervals generated would contain the population mean.</p>
            
            <h5><strong>When the Population is Not Normal</strong></h5>
            <p>If the population does not follow a normal distribution, the confidence interval provided by expression (8.1) will be <strong>approximate</strong>. In this case, the quality of the approximation depends on both the distribution of the population and the sample size.</p>
            
            <h5><strong>Sample Size Guidelines</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Population Distribution</div>
                    <div class="divTableHead">Minimum Sample Size</div>
                    <div class="divTableHead">Recommendation</div>
                    <div class="divTableHead">Rationale</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Normal distribution</div>
                        <div class="divTableCell">Any size</div>
                        <div class="divTableCell">Use formula (8.1) directly</div>
                        <div class="divTableCell">Exact confidence intervals</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Non-normal, any shape</div>
                        <div class="divTableCell">n ≥ 30</div>
                        <div class="divTableCell">Safe to use formula (8.1)</div>
                        <div class="divTableCell">Central Limit Theorem ensures good approximation</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Non-normal, roughly symmetric</div>
                        <div class="divTableCell">n ≥ 15</div>
                        <div class="divTableCell">Can use formula (8.1)</div>
                        <div class="divTableCell">Symmetry helps with smaller samples</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Non-normal, highly skewed</div>
                        <div class="divTableCell">n < 30</div>
                        <div class="divTableCell">Use only if willing to assume normality</div>
                        <div class="divTableCell">High risk of poor approximation</div>
                    </div>
                </div>
            </div>
            
            <p><strong>General Rule:</strong> In most applications, a sample size of <strong>n ≥ 30</strong> is adequate when using expression (8.1) to develop an interval estimate of a population mean.</p>
            
            <p><strong>Special Cases:</strong></p>
            <ul>
                <li>If the population is not normally distributed but is <strong>roughly symmetric</strong>, sample sizes as small as <strong>15</strong> can be expected to provide good approximate confidence intervals</li>
                <li>With smaller sample sizes, expression (8.1) should only be used if the analyst believes, or is willing to assume, that the population distribution is <strong>at least approximately normal</strong></li>
            </ul>
            
            <h4><strong>Business Applications and Interpretation</strong></h4>
            
            <h5><strong>Decision-Making Framework</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Business Context</div>
                    <div class="divTableHead">Confidence Level Choice</div>
                    <div class="divTableHead">Trade-off Consideration</div>
                    <div class="divTableHead">Example Application</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Routine monitoring</div>
                        <div class="divTableCell">90%</div>
                        <div class="divTableCell">Narrower intervals, faster decisions</div>
                        <div class="divTableCell">Weekly customer spending tracking</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Standard business decisions</div>
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">Good balance of confidence and precision</div>
                        <div class="divTableCell">Market research, quality control</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Critical safety/regulatory</div>
                        <div class="divTableCell">99%</div>
                        <div class="divTableCell">High confidence, wider intervals</div>
                        <div class="divTableCell">Pharmaceutical dosage, safety limits</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Common Business Interpretations</strong></h5>
            
            <p><strong>Correct Interpretation:</strong> "We are 95% confident that the true population mean lies between 78.08 and 85.92."</p>
            
            <p><strong>What this means:</strong> If we repeated this sampling process many times and constructed 95% confidence intervals each time, approximately 95% of those intervals would contain the true population mean.</p>
            
            <p><strong>Common Misinterpretations to Avoid:</strong></p>
            <ul>
                <li>❌ "There is a 95% probability that μ is between 78.08 and 85.92" (μ is fixed, not random)</li>
                <li>❌ "95% of sample means will fall between 78.08 and 85.92" (this describes the sampling distribution)</li>
                <li>❌ "95% of individual customers spend between $78.08 and $85.92" (this describes individual values, not the mean)</li>
            </ul>
            
            <h4><strong>Key Takeaways</strong></h4>
            
            <ol>
                <li><strong>Point vs. Interval Estimates:</strong> Interval estimates provide information about precision and reliability</li>
                <li><strong>Confidence Level Trade-off:</strong> Higher confidence requires wider intervals</li>
                <li><strong>Sample Size Impact:</strong> Larger samples provide narrower intervals (better precision)</li>
                <li><strong>σ Known Case:</strong> Applies when historical data or process knowledge provides population standard deviation</li>
                <li><strong>Normal Distribution:</strong> Required for exact intervals; CLT helps with large samples for non-normal populations</li>
                <li><strong>Business Decision Making:</strong> Choose confidence level based on decision consequences and business context</li>
            </ol>`
        },
        {
            id: 411,
            title: "Population Mean: σ Unknown",
            category: "sigma-unknown",
            content: `<h3><strong>Population Mean: σ Unknown</strong></h3>
            
            <h4><strong>Introduction to the σ Unknown Case</strong></h4>
            
            <p>When developing an interval estimate of a population mean we usually do not have a good estimate of the population standard deviation either. In these cases, we must use the same sample to estimate both μ and σ. This situation represents the <strong>σ unknown case</strong>.</p>
            
            <p>When <strong>s is used to estimate σ</strong>, the margin of error and the interval estimate for the population mean are based on a probability distribution known as the <strong>t distribution</strong>.</p>
            
            <p><strong>Key Insight:</strong> Although the mathematical development of the t distribution is based on the assumption of a normal distribution for the population we are sampling from, research shows that the t distribution can be successfully applied in many situations where the population deviates significantly from normal.</p>
            
            <h4><strong>The t Distribution</strong></h4>
            
            <h5><strong>Family of Distributions</strong></h5>
            <p>The t distribution is a <strong>family of similar probability distributions</strong>, with a specific t distribution depending on a parameter known as the <strong>degrees of freedom</strong>.</p>
            
            <ul>
                <li>The t distribution with <strong>one degree of freedom</strong> is unique</li>
                <li>The t distribution with <strong>two degrees of freedom</strong> is unique</li>
                <li>The t distribution with <strong>three degrees of freedom</strong> is unique, and so on</li>
            </ul>
            
            <h5><strong>Relationship to Standard Normal Distribution</strong></h5>
            <p>As the number of degrees of freedom increases, the difference between the t distribution and the standard normal distribution becomes smaller and smaller.</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Degrees of Freedom</div>
                    <div class="divTableHead">Distribution Characteristics</div>
                    <div class="divTableHead">Relationship to Normal</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Low (e.g., 10)</div>
                        <div class="divTableCell">More variability, wider tails</div>
                        <div class="divTableCell">Noticeably different from normal</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Medium (e.g., 20)</div>
                        <div class="divTableCell">Less variability than low df</div>
                        <div class="divTableCell">Closer to normal distribution</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">High (>100)</div>
                        <div class="divTableCell">Very similar to normal</div>
                        <div class="divTableCell">Essentially equivalent to normal</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Properties:</strong></p>
            <ul>
                <li>A t distribution with <strong>more degrees of freedom</strong> exhibits less variability</li>
                <li>More closely resembles the standard normal distribution as df increases</li>
                <li>The <strong>mean of the t distribution is zero</strong></li>
            </ul>
            
            <h5><strong>t Distribution Notation</strong></h5>
            <p>We place a subscript on t to indicate the area in the upper tail of the t distribution:</p>
            
            <div class="formula">
                <strong>NOTATION</strong><br/>
                t_{α/2} = t value with area α/2 in upper tail<br/>
                Examples: t_{.025}, t_{.005}, t_{.05}<br/>
                Similar to z_{.025} = 1.96 for standard normal
            </div>
            
            <h5><strong>Critical t Values Table</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Degrees of Freedom</div>
                    <div class="divTableHead">t_{.05}</div>
                    <div class="divTableHead">t_{.025}</div>
                    <div class="divTableHead">t_{.01}</div>
                    <div class="divTableHead">t_{.005}</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">1</div>
                        <div class="divTableCell">6.314</div>
                        <div class="divTableCell">12.706</div>
                        <div class="divTableCell">31.821</div>
                        <div class="divTableCell">63.656</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">5</div>
                        <div class="divTableCell">2.015</div>
                        <div class="divTableCell">2.571</div>
                        <div class="divTableCell">3.365</div>
                        <div class="divTableCell">4.032</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">9</div>
                        <div class="divTableCell">1.833</div>
                        <div class="divTableCell">2.262</div>
                        <div class="divTableCell">2.821</div>
                        <div class="divTableCell">3.250</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">20</div>
                        <div class="divTableCell">1.725</div>
                        <div class="divTableCell">2.086</div>
                        <div class="divTableCell">2.528</div>
                        <div class="divTableCell">2.845</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">60</div>
                        <div class="divTableCell">1.671</div>
                        <div class="divTableCell">2.000</div>
                        <div class="divTableCell">2.390</div>
                        <div class="divTableCell">2.660</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">100</div>
                        <div class="divTableCell">1.660</div>
                        <div class="divTableCell">1.984</div>
                        <div class="divTableCell">2.364</div>
                        <div class="divTableCell">2.626</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">∞ (Normal)</div>
                        <div class="divTableCell">1.645</div>
                        <div class="divTableCell">1.960</div>
                        <div class="divTableCell">2.326</div>
                        <div class="divTableCell">2.576</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Observations:</strong></p>
            <ul>
                <li>For a t distribution with <strong>9 degrees of freedom</strong>, t_{.025} = 2.262</li>
                <li>For a t distribution with <strong>60 degrees of freedom</strong>, t_{.025} = 2.000</li>
                <li>As degrees of freedom increase, t_{.025} approaches z_{.025} = 1.96</li>
                <li>The standard normal distribution z values can be found in the <strong>infinite degrees of freedom row (∞)</strong></li>
                <li>If degrees of freedom exceed <strong>100</strong>, the infinite degrees of freedom row can be used to approximate the actual t value</li>
            </ul>
            
            <h4><strong>Margin of Error and Interval Estimate Formula</strong></h4>
            
            <p>In Section 8.1 we showed that an interval estimate of a population mean for the σ known case is:</p>
            <div class="formula">
                x̄ ± z_{α/2} × (σ/√n)
            </div>
            
            <p>To compute an interval estimate of μ for the <strong>σ unknown case</strong>, the sample standard deviation s is used to estimate σ, and z_{α/2} is replaced by the t distribution value t_{α/2}.</p>
            
            <div class="formula">
                <strong>INTERVAL ESTIMATE OF A POPULATION MEAN: σ UNKNOWN</strong><br/><br/>
                x̄ ± t_{α/2} × (s/√n) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(8.2)<br/><br/>
                where:<br/>
                • s = sample standard deviation<br/>
                • (1 - α) = confidence coefficient<br/>
                • t_{α/2} = t value with area α/2 in upper tail<br/>
                • degrees of freedom = n - 1
            </div>
            
            <h5><strong>Degrees of Freedom Explanation</strong></h5>
            
            <p>The reason the number of degrees of freedom associated with the t value in expression (8.2) is <strong>n - 1</strong> concerns the use of s as an estimate of the population standard deviation σ.</p>
            
            <p>The expression for the sample standard deviation is:</p>
            <div class="formula">
                s = √[Σ(x_i - x̄)² / (n-1)]
            </div>
            
            <p><strong>Degrees of Freedom Logic:</strong></p>
            <ul>
                <li>Degrees of freedom refer to the number of <strong>independent pieces of information</strong> that go into the computation of Σ(x_i - x̄)²</li>
                <li>The n pieces of information involved are: x₁ - x̄, x₂ - x̄, ..., x_n - x̄</li>
                <li>We know that <strong>Σ(x_i - x̄) = 0</strong> for any data set</li>
                <li>Thus, only <strong>n - 1</strong> of the (x_i - x̄) values are independent</li>
                <li>If we know n - 1 of the values, the remaining value can be determined exactly</li>
                <li>Therefore, <strong>n - 1</strong> is the number of degrees of freedom for the t distribution</li>
            </ul>
            
            <h4><strong>Example 1: Credit Card Debt Study</strong></h4>
            
            <h5><strong>Business Context</strong></h5>
            <p>A study designed to estimate the mean credit card debt for the population of U.S. households. A sample of n = 70 households provided credit card balances. No previous estimate of the population standard deviation σ is available, so the sample data must be used to estimate both the population mean and the population standard deviation.</p>
            
            <h5><strong>Sample Data Summary</strong></h5>
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Sample Statistic</div>
                    <div class="divTableHead">Value</div>
                    <div class="divTableHead">Calculation Detail</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Sample Size (n)</div>
                        <div class="divTableCell">70</div>
                        <div class="divTableCell">Number of households surveyed</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample Mean (x̄)</div>
                        <div class="divTableCell">$9,312</div>
                        <div class="divTableCell">Average credit card balance</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample Std Dev (s)</div>
                        <div class="divTableCell">$4,007</div>
                        <div class="divTableCell">Measure of variability in balances</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Degrees of Freedom</div>
                        <div class="divTableCell">69</div>
                        <div class="divTableCell">n - 1 = 70 - 1 = 69</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Confidence Level</div>
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">α = 0.05, α/2 = 0.025</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Step-by-Step Calculation</strong></h5>
            
            <p><strong>Step 1: Find Critical t Value</strong></p>
            <p>With 95% confidence and n - 1 = 69 degrees of freedom, we need t_{.025}. From the t table: <strong>t_{.025} = 1.995</strong></p>
            
            <p><strong>Step 2: Apply Formula (8.2)</strong></p>
            <div class="formula">
                9312 ± 1.995 × (4007/√70)<br/>
                9312 ± 1.995 × 479.1<br/>
                9312 ± 955<br/><br/>
                <strong>95% Confidence Interval: $8,357 to $10,267</strong>
            </div>
            
            <h5><strong>Interpretation</strong></h5>
            <ul>
                <li><strong>Point estimate</strong> of the population mean: $9,312</li>
                <li><strong>Margin of error:</strong> $955</li>
                <li><strong>95% confidence interval:</strong> $8,357 to $10,267</li>
                <li><strong>Business meaning:</strong> We are 95% confident that the mean credit card balance for the population of all households is between $8,357 and $10,267</li>
            </ul>
            
            <h4><strong>Practical Guidelines for Using t Distribution</strong></h4>
            
            <h5><strong>When Population is Normal</strong></h5>
            <p>If the population follows a normal distribution, the confidence interval provided by expression (8.2) is <strong>exact</strong> and can be used for <strong>any sample size</strong>.</p>
            
            <h5><strong>When Population is Not Normal</strong></h5>
            <p>If the population does not follow a normal distribution, the confidence interval provided by expression (8.2) will be <strong>approximate</strong>. The quality of the approximation depends on both the distribution of the population and the sample size.</p>
            
            <h5><strong>Sample Size Guidelines</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Population Distribution</div>
                    <div class="divTableHead">Minimum Sample Size</div>
                    <div class="divTableHead">Recommendation</div>
                    <div class="divTableHead">Rationale</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Normal distribution</div>
                        <div class="divTableCell">Any size</div>
                        <div class="divTableCell">Use expression (8.2) directly</div>
                        <div class="divTableCell">Exact confidence intervals</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Non-normal, general case</div>
                        <div class="divTableCell">n ≥ 30</div>
                        <div class="divTableCell">Adequate for most applications</div>
                        <div class="divTableCell">Central Limit Theorem effect</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Highly skewed or with outliers</div>
                        <div class="divTableCell">n ≥ 50</div>
                        <div class="divTableCell">Recommended by most statisticians</div>
                        <div class="divTableCell">Larger samples needed for skewed distributions</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Non-normal, roughly symmetric</div>
                        <div class="divTableCell">n ≥ 15</div>
                        <div class="divTableCell">Can provide good approximations</div>
                        <div class="divTableCell">Symmetry helps with smaller samples</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Unknown distribution, small sample</div>
                        <div class="divTableCell">n < 15</div>
                        <div class="divTableCell">Use only if willing to assume normality</div>
                        <div class="divTableCell">High risk without normality assumption</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Example 2: Small Sample Application - Scheer Industries</strong></h4>
            
            <h5><strong>Business Problem</strong></h5>
            <p>Scheer Industries is considering a new computer-assisted program to train maintenance employees to do machine repairs. The director of manufacturing requested an estimate of the population mean time required for maintenance employees to complete the computer-assisted training.</p>
            
            <h5><strong>Sample Information</strong></h5>
            <ul>
                <li><strong>Sample size:</strong> n = 20 employees</li>
                <li><strong>Training times (days):</strong> 52, 59, 54, 42, 44, 50, 42, 48, 55, 54, 60, 55, 44, 62, 62, 57, 45, 46, 43, 56</li>
                <li><strong>Distribution assessment:</strong> Histogram shows no clear evidence of skewness or outliers, roughly symmetric</li>
            </ul>
            
            <h5><strong>Sample Calculations</strong></h5>
            <div class="formula">
                Sample mean: x̄ = Σx_i / n = 1030 / 20 = 51.5 days<br/><br/>
                Sample standard deviation: s = √[Σ(x_i - x̄)² / (n-1)] = √[889 / 19] = 6.84 days
            </div>
            
            <h5><strong>Confidence Interval Calculation</strong></h5>
            <p>For a <strong>95% confidence interval</strong> with n - 1 = 19 degrees of freedom:</p>
            <div class="formula">
                t_{.025,19} = 2.093 (from t table)<br/><br/>
                51.5 ± 2.093 × (6.84/√20)<br/>
                51.5 ± 2.093 × 1.53<br/>
                51.5 ± 3.2<br/><br/>
                <strong>95% Confidence Interval: 48.3 to 54.7 days</strong>
            </div>
            
            <h5><strong>Business Interpretation</strong></h5>
            <ul>
                <li><strong>Point estimate:</strong> 51.5 days</li>
                <li><strong>Margin of error:</strong> 3.2 days</li>
                <li><strong>Confidence interval:</strong> 48.3 to 54.7 days</li>
                <li><strong>Management decision:</strong> Training program duration should be planned for approximately 48-55 days</li>
            </ul>
            
            <h5><strong>Distribution Assessment Note</strong></h5>
            <p>Using a histogram of the sample data to learn about the distribution of a population is not always conclusive, but in many cases it provides the only information available. The histogram, along with judgment on the part of the analyst, can often be used to decide whether expression (8.2) can be used to develop the interval estimate.</p>
            
            <h4><strong>Summary of Interval Estimation Procedures</strong></h4>
            
            <h5><strong>Decision Framework</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Question</div>
                    <div class="divTableHead">Answer</div>
                    <div class="divTableHead">Method</div>
                    <div class="divTableHead">Formula</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Can population standard deviation be assumed known?</div>
                        <div class="divTableCell">Yes</div>
                        <div class="divTableCell">σ Known Case</div>
                        <div class="divTableCell">x̄ ± z_{α/2} × (σ/√n)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Can population standard deviation be assumed known?</div>
                        <div class="divTableCell">No</div>
                        <div class="divTableCell">σ Unknown Case</div>
                        <div class="divTableCell">x̄ ± t_{α/2} × (s/√n)</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>General Guidelines</strong></h5>
            <ul>
                <li><strong>Most applications:</strong> Sample size of n ≥ 30 is adequate</li>
                <li><strong>Normal or approximately normal population:</strong> Smaller sample sizes may be used</li>
                <li><strong>Highly skewed population or outliers:</strong> Sample size of n ≥ 50 is recommended</li>
            </ul>
            
            <h4><strong>Key Differences: σ Known vs σ Unknown</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Aspect</div>
                    <div class="divTableHead">σ Known</div>
                    <div class="divTableHead">σ Unknown</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Standard Deviation</strong></div>
                        <div class="divTableCell">Use population σ</div>
                        <div class="divTableCell">Use sample s</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Distribution</strong></div>
                        <div class="divTableCell">Standard normal (z)</div>
                        <div class="divTableCell">t distribution</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Critical Value</strong></div>
                        <div class="divTableCell">z_{α/2}</div>
                        <div class="divTableCell">t_{α/2} with df = n-1</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Margin of Error</strong></div>
                        <div class="divTableCell">z_{α/2} × (σ/√n)</div>
                        <div class="divTableCell">t_{α/2} × (s/√n)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Variability</strong></div>
                        <div class="divTableCell">Fixed for given n</div>
                        <div class="divTableCell">Varies with sample s</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Interval Width</strong></div>
                        <div class="divTableCell">Consistent across samples</div>
                        <div class="divTableCell">Variable across samples</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Important Notes and Comments</strong></h4>
            
            <h5><strong>Margin of Error Variability</strong></h5>
            <ul>
                <li><strong>σ Known:</strong> Margin of error z_{α/2}(σ/√n) is <strong>fixed</strong> and the same for all samples of size n</li>
                <li><strong>σ Unknown:</strong> Margin of error t_{α/2}(s/√n) <strong>varies from sample to sample</strong></li>
                <li><strong>Reason:</strong> Sample standard deviation s varies depending upon the sample selected</li>
                <li><strong>Effect:</strong> Large value for s provides larger margin of error; small value for s provides smaller margin of error</li>
            </ul>
            
            <h5><strong>Impact of Population Skewness</strong></h5>
            <p><strong>What happens to confidence interval estimates when the population is skewed?</strong></p>
            
            <p>Consider a population that is <strong>skewed to the right</strong> with large data values stretching the distribution to the right:</p>
            
            <ul>
                <li><strong>Positive Correlation:</strong> Sample mean x̄ and sample standard deviation s are positively correlated</li>
                <li><strong>Large x̄ Effect:</strong> When x̄ is larger than population mean, s tends to be larger than σ</li>
                <li><strong>Margin of Error Impact:</strong> Larger margin of error t_{α/2}(s/√n) than it would be with σ known</li>
                <li><strong>Coverage Effect:</strong> Confidence interval tends to include population mean μ more often than it would if true σ were used</li>
                <li><strong>Small x̄ Effect:</strong> When x̄ is smaller than population mean, correlation causes margin of error to be small</li>
                <li><strong>Miss Rate:</strong> Confidence interval with smaller margin of error tends to miss population mean more than with known σ</li>
            </ul>
            
            <p><strong>Recommendation:</strong> Use larger sample sizes with highly skewed population distributions.</p>
            
            <h4><strong>Business Decision Applications</strong></h4>
            
            <h5><strong>When to Use σ Unknown Method</strong></h5>
            <ul>
                <li><strong>New Product Launch:</strong> No historical data available for standard deviation</li>
                <li><strong>Process Changes:</strong> When process modifications invalidate historical variability estimates</li>
                <li><strong>Market Research:</strong> Customer behavior studies without prior measurement history</li>
                <li><strong>Quality Improvement:</strong> Initial assessment of new quality metrics</li>
                <li><strong>Employee Performance:</strong> New performance measurement systems</li>
            </ul>
            
            <h5><strong>Business Interpretation Guidelines</strong></h5>
            <ol>
                <li><strong>Report Both Statistics:</strong> Always include both point estimate and confidence interval</li>
                <li><strong>Explain Uncertainty:</strong> Discuss what the interval width means for decision making</li>
                <li><strong>Consider Sample Size:</strong> Note relationship between sample size and precision</li>
                <li><strong>Address Assumptions:</strong> Discuss population distribution assumptions</li>
                <li><strong>Business Context:</strong> Relate statistical results to business decisions</li>
            </ol>
            
            <h4><strong>Key Takeaways</strong></h4>
            
            <ol>
                <li><strong>Most Common Case:</strong> σ unknown situation is typical in business applications</li>
                <li><strong>t Distribution Usage:</strong> Accounts for additional uncertainty when estimating σ with s</li>
                <li><strong>Degrees of Freedom:</strong> df = n - 1 reflects independent information in sample variance</li>
                <li><strong>Sample Size Matters:</strong> Larger samples needed for non-normal populations</li>
                <li><strong>Margin of Error Variability:</strong> Unlike σ known case, margin of error varies across samples</li>
                <li><strong>Distribution Assessment:</strong> Use sample data to assess population distribution characteristics</li>
                <li><strong>Business Applications:</strong> Essential for new processes, products, or measurement systems</li>
            </ol>`
        }
    ],
    
    populationProportion: [
        {
            id: 409,
            title: "Population Proportion",
            category: "population-proportion",
            content: `<h3><strong>Population Proportion</strong></h3>
            
            <h4><strong>Introduction to Proportion Estimation</strong></h4>
            
            <p>In the introduction to this chapter we said that the general form of an interval estimate of a population proportion p is:</p>
            
            <div class="formula">
                p̂ ± Margin of error
            </div>
            
            <p>The <strong>sampling distribution of p̂</strong> plays a key role in computing the margin of error for this interval estimate.</p>
            
            <h4><strong>Sampling Distribution of p̂</strong></h4>
            
            <p>In Chapter 7 we said that the sampling distribution of p̂ can be approximated by a normal distribution whenever <strong>np ≥ 5</strong> and <strong>n(1-p) ≥ 5</strong>.</p>
            
            <h5><strong>Normal Approximation Properties</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Property</div>
                    <div class="divTableHead">Formula</div>
                    <div class="divTableHead">Description</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Mean</strong></div>
                        <div class="divTableCell">E(p̂) = p</div>
                        <div class="divTableCell">Expected value equals population proportion</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Standard Error</strong></div>
                        <div class="divTableCell">σ_{p̂} = √[p(1-p)/n]</div>
                        <div class="divTableCell">Standard deviation of sampling distribution</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Distribution</strong></div>
                        <div class="divTableCell">p̂ ~ N(p, σ_{p̂})</div>
                        <div class="divTableCell">Approximately normal when conditions met</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Key Requirements for Normal Approximation</strong></h5>
            <ul>
                <li><strong>np ≥ 5:</strong> Expected number of successes must be at least 5</li>
                <li><strong>n(1-p) ≥ 5:</strong> Expected number of failures must be at least 5</li>
                <li><strong>Independence:</strong> Observations must be independent</li>
                <li><strong>Random Sampling:</strong> Sample must be randomly selected</li>
            </ul>
            
            <h4><strong>Standard Error of the Sample Proportion</strong></h4>
            
            <p>The mean of the sampling distribution of p̂ is the population proportion p, and the standard error of p̂ is:</p>
            
            <div class="formula">
                <strong>Standard Error of p̂:</strong><br/><br/>
                σ_{p̂} = √[p(1-p)/n] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(8.4)
            </div>
            
            <p>Because the sampling distribution of p̂ is normally distributed, if we choose <strong>z_{α/2} × σ_{p̂}</strong> as the margin of error in an interval estimate of a population proportion, we know that <strong>100(1-α)%</strong> of the intervals generated will contain the true population proportion.</p>
            
            <h4><strong>Margin of Error Challenge and Solution</strong></h4>
            
            <h5><strong>The Problem</strong></h5>
            <p>But σ_{p̂} cannot be used directly in the computation of the margin of error because <strong>p will not be known</strong>; p is what we are trying to estimate.</p>
            
            <h5><strong>The Solution</strong></h5>
            <p>So <strong>p̂ is substituted for p</strong> and the margin of error for an interval estimate of a population proportion is given by:</p>
            
            <div class="formula">
                <strong>Margin of Error for Population Proportion:</strong><br/><br/>
                Margin of error = z_{α/2} × √[p̂(1-p̂)/n] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(8.5)
            </div>
            
            <h4><strong>Interval Estimate Formula</strong></h4>
            
            <p>With this margin of error, the general expression for an interval estimate of a population proportion is as follows:</p>
            
            <div class="formula">
                <strong>INTERVAL ESTIMATE OF A POPULATION PROPORTION</strong><br/><br/>
                p̂ ± z_{α/2} × √[p̂(1-p̂)/n] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(8.6)<br/><br/>
                where:<br/>
                • (1-α) = confidence coefficient<br/>
                • z_{α/2} = z value with area α/2 in upper tail<br/>
                • p̂ = sample proportion<br/>
                • n = sample size
            </div>
            
            <p><strong>Key Insight:</strong> When developing confidence intervals for proportions, the quantity <strong>z_{α/2} × √[p̂(1-p̂)/n]</strong> provides the margin of error.</p>
            
            <h4><strong>Comprehensive Example: Women Golfers Survey</strong></h4>
            
            <h5><strong>Business Context</strong></h5>
            <p>A national survey of 900 women golfers was conducted to learn how women golfers view their treatment at golf courses in the United States. The survey found that 396 of the women golfers were satisfied with the availability of tee times.</p>
            
            <h5><strong>Sample Data Summary</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Parameter</div>
                    <div class="divTableHead">Value</div>
                    <div class="divTableHead">Calculation</div>
                    <div class="divTableHead">Interpretation</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Sample Size (n)</div>
                        <div class="divTableCell">900</div>
                        <div class="divTableCell">Given</div>
                        <div class="divTableCell">Number of women golfers surveyed</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Number Satisfied (x)</div>
                        <div class="divTableCell">396</div>
                        <div class="divTableCell">Given</div>
                        <div class="divTableCell">Satisfied with tee time availability</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample Proportion (p̂)</div>
                        <div class="divTableCell">0.44</div>
                        <div class="divTableCell">396/900 = 0.44</div>
                        <div class="divTableCell">Point estimate of population proportion</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Confidence Level</div>
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">α = 0.05, α/2 = 0.025</div>
                        <div class="divTableCell">z_{0.025} = 1.96</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Normal Approximation Verification</strong></h5>
            <p>Before proceeding, verify that the normal approximation is appropriate:</p>
            <ul>
                <li><strong>np̂ = 900 × 0.44 = 396 ≥ 5 ✓</strong></li>
                <li><strong>n(1-p̂) = 900 × 0.56 = 504 ≥ 5 ✓</strong></li>
            </ul>
            <p>Both conditions are satisfied, so normal approximation is valid.</p>
            
            <h5><strong>Confidence Interval Calculation</strong></h5>
            
            <p>Using expression (8.6) and a 95% confidence level:</p>
            
            <div class="formula">
                <strong>Step-by-Step Calculation:</strong><br/><br/>
                p̂ ± z_{α/2} × √[p̂(1-p̂)/n]<br/><br/>
                0.44 ± 1.96 × √[0.44(1-0.44)/900]<br/><br/>
                0.44 ± 1.96 × √[0.44 × 0.56/900]<br/><br/>
                0.44 ± 1.96 × √[0.2464/900]<br/><br/>
                0.44 ± 1.96 × √0.0002738<br/><br/>
                0.44 ± 1.96 × 0.01654<br/><br/>
                0.44 ± 0.0324
            </div>
            
            <h5><strong>Results and Interpretation</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Statistic</div>
                    <div class="divTableHead">Value</div>
                    <div class="divTableHead">Interpretation</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Point Estimate</strong></div>
                        <div class="divTableCell">p̂ = 0.44</div>
                        <div class="divTableCell">44% of sample satisfied</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Margin of Error</strong></div>
                        <div class="divTableCell">0.0324</div>
                        <div class="divTableCell">±3.24 percentage points</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Lower Limit</strong></div>
                        <div class="divTableCell">0.44 - 0.0324 = 0.4076</div>
                        <div class="divTableCell">40.76% lower bound</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Upper Limit</strong></div>
                        <div class="divTableCell">0.44 + 0.0324 = 0.4724</div>
                        <div class="divTableCell">47.24% upper bound</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>95% CI</strong></div>
                        <div class="divTableCell">(0.4076, 0.4724)</div>
                        <div class="divTableCell">40.76% to 47.24%</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Business Conclusion</strong></h5>
            <p>Using percentages, the survey results enable us to state with <strong>95% confidence</strong> that between <strong>40.76% and 47.24%</strong> of all women golfers are satisfied with the availability of tee times.</p>
            
            <h4><strong>Determining Sample Size for Population Proportion</strong></h4>
            
            <p>Let us consider the question of how large the sample size should be to obtain an estimate of a population proportion at a specified level of precision. The rationale for the sample size determination in developing interval estimates of p is similar to the rationale used in Section 8.3 to determine the sample size for estimating a population mean.</p>
            
            <h5><strong>Sample Size Formula Development</strong></h5>
            
            <p>Previously in this section we said that the margin of error associated with an interval estimate of a population proportion is <strong>z_{α/2} × √[p̂(1-p̂)/n]</strong>. The margin of error is based on the value of z_{α/2}, the sample proportion p̂, and the sample size n. Larger sample sizes provide a smaller margin of error and better precision.</p>
            
            <p><strong>Step 1:</strong> Set up the margin of error equation</p>
            <p>Let <strong>E</strong> denote the desired margin of error:</p>
            <div class="formula">
                E = z_{α/2} × √[p̂(1-p̂)/n]
            </div>
            
            <p><strong>Step 2:</strong> Solve for n</p>
            <div class="formula">
                E² = (z_{α/2})² × [p̂(1-p̂)/n]<br/><br/>
                n = (z_{α/2})² × p̂(1-p̂) / E²
            </div>
            
            <h5><strong>Planning Value Challenge</strong></h5>
            <p>Note, however, that we cannot use this formula to compute the sample size that will provide the desired margin of error because <strong>p̂ will not be known until after we select the sample</strong>. What we need, then, is a <strong>planning value for p̂</strong> that can be used to make the computation.</p>
            
            <p>Using <strong>p*</strong> to denote the planning value for p̂, the following formula can be used to compute the sample size that will provide a margin of error of size E:</p>
            
            <div class="formula">
                <strong>SAMPLE SIZE FOR AN INTERVAL ESTIMATE OF A POPULATION PROPORTION</strong><br/><br/>
                n = (z_{α/2})² × p*(1-p*) / E² &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(8.7)<br/><br/>
                where:<br/>
                • p* = planning value for population proportion<br/>
                • E = desired margin of error<br/>
                • z_{α/2} = critical value for desired confidence level
            </div>
            
            <h4><strong>Four Methods for Choosing Planning Value p*</strong></h4>
            
            <p>In practice, the planning value p* can be chosen by one of the following procedures:</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Method</div>
                    <div class="divTableHead">Description</div>
                    <div class="divTableHead">Advantages</div>
                    <div class="divTableHead">When to Use</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>1. Previous Sample</strong></div>
                        <div class="divTableCell">Use sample proportion from previous sample of same or similar units</div>
                        <div class="divTableCell">Based on actual historical data</div>
                        <div class="divTableCell">When reliable historical data exists</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>2. Pilot Study</strong></div>
                        <div class="divTableCell">Use pilot study to select preliminary sample; use that sample proportion as p*</div>
                        <div class="divTableCell">Current and relevant data</div>
                        <div class="divTableCell">When time and resources allow preliminary study</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>3. Judgment/"Best Guess"</strong></div>
                        <div class="divTableCell">Use expert judgment or best guess for value of p*</div>
                        <div class="divTableCell">Quick and inexpensive</div>
                        <div class="divTableCell">When some knowledge exists about likely proportion</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>4. Conservative Approach</strong></div>
                        <div class="divTableCell">Use planning value of p* = 0.50</div>
                        <div class="divTableCell">Provides largest necessary sample size</div>
                        <div class="divTableCell">When no other information is available</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Example: Sample Size Calculation for Women Golfers</strong></h4>
            
            <p>Let us return to the survey of women golfers and assume that the company is interested in conducting a new survey to estimate the current proportion of the population of women golfers who are satisfied with the availability of tee times.</p>
            
            <h5><strong>Requirements</strong></h5>
            <ul>
                <li><strong>Margin of error:</strong> E = 0.025 (2.5 percentage points)</li>
                <li><strong>Confidence level:</strong> 95% (z_{0.025} = 1.96)</li>
                <li><strong>Planning value:</strong> p* = 0.44 (from previous survey)</li>
            </ul>
            
            <h5><strong>Sample Size Calculation</strong></h5>
            
            <p>With E = 0.025 and z_{α/2} = 1.96, we need a planning value p* to answer the sample size question. Using the previous survey result of 0.44 as the planning value p*, equation (8.7) shows that:</p>
            
            <div class="formula">
                <strong>Method 1: Using Previous Survey Result (p* = 0.44)</strong><br/><br/>
                n = (z_{α/2})² × p*(1-p*) / E²<br/><br/>
                n = (1.96)² × (0.44)(1-0.44) / (0.025)²<br/><br/>
                n = (3.8416) × (0.44)(0.56) / (0.000625)<br/><br/>
                n = (3.8416) × (0.2464) / (0.000625)<br/><br/>
                n = 0.9463 / 0.000625<br/><br/>
                n = 1514.5
            </div>
            
            <h5><strong>Sample Size Decision</strong></h5>
            <p>Thus, the sample size must be at least <strong>1514.5 women golfers</strong> to satisfy the margin of error requirement. Rounding up to the next integer value indicates that a sample of <strong>1515 women golfers</strong> is recommended to satisfy the margin of error requirement.</p>
            
            <h4><strong>Understanding p* = 0.50: The Conservative Approach</strong></h4>
            
            <p>The fourth alternative suggested for selecting a planning value p* is to use <strong>p* = 0.50</strong>. This value of p* is frequently used when no other information is available.</p>
            
            <h5><strong>Why p* = 0.50 is Conservative</strong></h5>
            
            <p>To understand why, note that the numerator of equation (8.7) shows that the sample size is proportional to the quantity <strong>p*(1-p*)</strong>. A larger value for the quantity p*(1-p*) will result in a larger sample size.</p>
            
            <h5><strong>Values of p*(1-p*) for Different p*</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">p*</div>
                    <div class="divTableHead">p*(1-p*)</div>
                    <div class="divTableHead">Relative to Maximum</div>
                    <div class="divTableHead">Comments</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">0.10</div>
                        <div class="divTableCell">(0.10)(0.90) = 0.09</div>
                        <div class="divTableCell">36% of maximum</div>
                        <div class="divTableCell">Much smaller sample needed</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">0.30</div>
                        <div class="divTableCell">(0.30)(0.70) = 0.21</div>
                        <div class="divTableCell">84% of maximum</div>
                        <div class="divTableCell">Moderately smaller sample</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">0.40</div>
                        <div class="divTableCell">(0.40)(0.60) = 0.24</div>
                        <div class="divTableCell">96% of maximum</div>
                        <div class="divTableCell">Close to maximum</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">0.50</div>
                        <div class="divTableCell">(0.50)(0.50) = 0.25</div>
                        <div class="divTableCell">100% (Maximum)</div>
                        <div class="divTableCell"><strong>Largest value for p*(1-p*)</strong></div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">0.60</div>
                        <div class="divTableCell">(0.60)(0.40) = 0.24</div>
                        <div class="divTableCell">96% of maximum</div>
                        <div class="divTableCell">Close to maximum</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">0.70</div>
                        <div class="divTableCell">(0.70)(0.30) = 0.21</div>
                        <div class="divTableCell">84% of maximum</div>
                        <div class="divTableCell">Moderately smaller sample</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">0.90</div>
                        <div class="divTableCell">(0.90)(0.10) = 0.09</div>
                        <div class="divTableCell">36% of maximum</div>
                        <div class="divTableCell">Much smaller sample needed</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Insight:</strong> Note that the <strong>largest value of p*(1-p*) occurs when p* = 0.50</strong>.</p>
            
            <h5><strong>Conservative Strategy Benefits</strong></h5>
            <ul>
                <li><strong>Guaranteed Adequacy:</strong> p* = 0.50 will provide the largest sample size recommendation</li>
                <li><strong>Play It Safe:</strong> We recommend the largest necessary sample size</li>
                <li><strong>Better Than Expected:</strong> If sample proportion differs from 0.50, margin of error will be smaller than anticipated</li>
                <li><strong>Margin Assurance:</strong> Using p* = 0.50 guarantees sample size will be sufficient to obtain desired margin of error</li>
            </ul>
            
            <h5><strong>Conservative Approach Example</strong></h5>
            
            <p>In the survey of women golfers example, a planning value of p* = 0.50 would have provided the sample size:</p>
            
            <div class="formula">
                <strong>Method 4: Conservative Approach (p* = 0.50)</strong><br/><br/>
                n = (z_{α/2})² × p*(1-p*) / E²<br/><br/>
                n = (1.96)² × (0.50)(1-0.50) / (0.025)²<br/><br/>
                n = (3.8416) × (0.50)(0.50) / (0.000625)<br/><br/>
                n = (3.8416) × (0.25) / (0.000625)<br/><br/>
                n = 0.9604 / 0.000625<br/><br/>
                n = 1536.6
            </div>
            
            <p>Thus, a slightly larger sample size of <strong>1537 women golfers</strong> would be recommended using the conservative approach.</p>
            
            <h4><strong>Comparison of Planning Value Methods</strong></h4>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Planning Value Method</div>
                    <div class="divTableHead">p* Used</div>
                    <div class="divTableHead">Required Sample Size</div>
                    <div class="divTableHead">Difference from Conservative</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Previous Survey Result</div>
                        <div class="divTableCell">p* = 0.44</div>
                        <div class="divTableCell">n = 1515</div>
                        <div class="divTableCell">22 fewer (1.4% reduction)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Conservative Approach</div>
                        <div class="divTableCell">p* = 0.50</div>
                        <div class="divTableCell">n = 1537</div>
                        <div class="divTableCell">Baseline (maximum)</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Practical Considerations and Guidelines</strong></h4>
            
            <h5><strong>Margin of Error Standards</strong></h5>
            <p>The desired margin of error for estimating a population proportion is almost always <strong>0.10 or less</strong>. In national public opinion polls conducted by organizations such as Gallup and Harris, a <strong>0.03 or 0.04 margin of error</strong> is common.</p>
            
            <h5><strong>Normal Approximation Assurance</strong></h5>
            <p>With such margins of error, equation (8.7) will almost always provide a sample size that is large enough to satisfy the requirements of <strong>np ≥ 5</strong> and <strong>n(1-p) ≥ 5</strong> for using a normal distribution as an approximation for the sampling distribution of p̂.</p>
            
            <h4><strong>Step-by-Step Planning Process</strong></h4>
            
            <ol>
                <li><strong>Define Objective:</strong> Specify the population proportion to be estimated</li>
                <li><strong>Set Precision:</strong> Determine acceptable margin of error (E)</li>
                <li><strong>Choose Confidence Level:</strong> Select confidence level (typically 95%)</li>
                <li><strong>Determine Planning Value:</strong> Use previous data, pilot study, judgment, or p* = 0.50</li>
                <li><strong>Calculate Sample Size:</strong> Apply equation (8.7)</li>
                <li><strong>Round Up:</strong> Use next integer value</li>
                <li><strong>Verify Normal Conditions:</strong> Check np ≥ 5 and n(1-p) ≥ 5 after data collection</li>
            </ol>
            
            <h4><strong>Business Applications Examples</strong></h4>
            
            <h5><strong>Customer Satisfaction Study</strong></h5>
            <ul>
                <li><strong>Objective:</strong> Estimate proportion of satisfied customers</li>
                <li><strong>Margin of error:</strong> ±3%</li>
                <li><strong>Confidence:</strong> 95%</li>
                <li><strong>Planning value:</strong> p* = 0.50 (conservative)</li>
                <li><strong>Sample size:</strong> n = (1.96)² × 0.25 / (0.03)² = 1068</li>
            </ul>
            
            <h5><strong>Market Research Study</strong></h5>
            <ul>
                <li><strong>Objective:</strong> Estimate proportion preferring new product</li>
                <li><strong>Margin of error:</strong> ±5%</li>
                <li><strong>Confidence:</strong> 90%</li>
                <li><strong>Planning value:</strong> p* = 0.30 (from pilot study)</li>
                <li><strong>Sample size:</strong> n = (1.645)² × 0.21 / (0.05)² = 226</li>
            </ul>
            
            <h4><strong>Key Takeaways for Population Proportion Estimation</strong></h4>
            
            <ol>
                <li><strong>Normal Approximation:</strong> Verify np ≥ 5 and n(1-p) ≥ 5 conditions</li>
                <li><strong>Standard Error Estimation:</strong> Use sample proportion p̂ to estimate unknown population proportion p</li>
                <li><strong>Confidence Interval Formula:</strong> p̂ ± z_{α/2} × √[p̂(1-p̂)/n]</li>
                <li><strong>Sample Size Planning:</strong> Use equation (8.7) with appropriate planning value</li>
                <li><strong>Conservative Approach:</strong> p* = 0.50 guarantees adequate sample size when uncertain</li>
                <li><strong>Business Context:</strong> Consider margin of error standards for your industry</li>
                <li><strong>Verification:</strong> Always check normal approximation conditions after data collection</li>
            </ol>
            
            <h4><strong>Summary Decision Framework</strong></h4>
            
            <div class="formula">
                <strong>POPULATION PROPORTION ESTIMATION CHECKLIST</strong><br/><br/>
                ✓ Verify random sampling and independence<br/>
                ✓ Choose appropriate confidence level<br/>
                ✓ Calculate sample proportion p̂ = x/n<br/>
                ✓ Check normal approximation: np̂ ≥ 5 and n(1-p̂) ≥ 5<br/>
                ✓ Calculate margin of error: z_{α/2} × √[p̂(1-p̂)/n]<br/>
                ✓ Construct confidence interval: p̂ ± margin of error<br/>
                ✓ Interpret results in business context<br/>
                ✓ For future studies: use equation (8.7) for sample size planning
            </div>`
        }
    ],
    
    sampleSize: [
        {
            id: 408,
            title: "Determining the Sample Size",
            category: "sample-size-determination",
            content: `<h3><strong>Determining the Sample Size</strong></h3>
            
            <h4><strong>Introduction to Sample Size Planning</strong></h4>
            
            <p>In providing practical advice in the two preceding sections, we commented on the role of the sample size in providing good approximate confidence intervals when the population is not normally distributed. In this section, we focus on another aspect of the sample size issue.</p>
            
            <p><strong>Key Objective:</strong> We describe how to choose a sample size large enough to provide a <strong>desired margin of error</strong>.</p>
            
            <h4><strong>Foundation: Understanding Margin of Error Components</strong></h4>
            
            <p>To understand how this process works, we return to the <strong>σ known case</strong> presented in Section 8.1. Using expression (8.1), the interval estimate is:</p>
            
            <div class="formula">
                x̄ ± z_{α/2} × (σ/√n)
            </div>
            
            <p>The quantity <strong>z_{α/2}(σ/√n)</strong> is the <strong>margin of error</strong>. Thus, we see that z_{α/2}, the population standard deviation σ, and the sample size n combine to determine the margin of error.</p>
            
            <h5><strong>Margin of Error Components</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Component</div>
                    <div class="divTableHead">Symbol</div>
                    <div class="divTableHead">Controlled By</div>
                    <div class="divTableHead">Impact on Margin of Error</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Confidence Level</div>
                        <div class="divTableCell">z_{α/2}</div>
                        <div class="divTableCell">Researcher choice</div>
                        <div class="divTableCell">Higher confidence → larger margin</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Population Variability</div>
                        <div class="divTableCell">σ</div>
                        <div class="divTableCell">Population characteristic</div>
                        <div class="divTableCell">More variability → larger margin</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Sample Size</div>
                        <div class="divTableCell">n</div>
                        <div class="divTableCell">Researcher control</div>
                        <div class="divTableCell">Larger sample → smaller margin</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Sample Size Formula Development</strong></h4>
            
            <p>Once we select a confidence coefficient (1 - α), z_{α/2} can be determined. Then, if we have a value for σ, we can determine the sample size n needed to provide any desired margin of error.</p>
            
            <h5><strong>Mathematical Derivation</strong></h5>
            
            <p><strong>Step 1:</strong> Set up the margin of error equation</p>
            <p>Let <strong>E</strong> = the desired margin of error:</p>
            <div class="formula">
                E = z_{α/2} × (σ/√n)
            </div>
            
            <p><strong>Step 2:</strong> Solve for √n</p>
            <div class="formula">
                √n = (z_{α/2} × σ) / E
            </div>
            
            <p><strong>Step 3:</strong> Square both sides to obtain n</p>
            <div class="formula">
                n = [(z_{α/2} × σ) / E]²
            </div>
            
            <h5><strong>Final Sample Size Formula</strong></h5>
            
            <div class="formula">
                <strong>SAMPLE SIZE FOR AN INTERVAL ESTIMATE OF A POPULATION MEAN</strong><br/><br/>
                n = (z_{α/2})² × σ² / E² &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(8.3)<br/><br/>
                where:<br/>
                • E = desired margin of error<br/>
                • z_{α/2} = critical value for desired confidence level<br/>
                • σ = population standard deviation (or planning value)<br/>
                • n = required sample size
            </div>
            
            <p><strong>Key Insight:</strong> This sample size provides the desired margin of error at the chosen confidence level.</p>
            
            <h4><strong>Formula Components Explained</strong></h4>
            
            <h5><strong>Margin of Error (E)</strong></h5>
            <p>In equation (8.3), <strong>E</strong> is the margin of error that the user is willing to accept. This represents the maximum amount of error the researcher can tolerate in estimating the population mean.</p>
            
            <h5><strong>Confidence Level (z_{α/2})</strong></h5>
            <p>The value of z_{α/2} follows directly from the confidence level to be used in developing the interval estimate.</p>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Confidence Level</div>
                    <div class="divTableHead">α</div>
                    <div class="divTableHead">α/2</div>
                    <div class="divTableHead">z_{α/2}</div>
                    <div class="divTableHead">Usage</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">90%</div>
                        <div class="divTableCell">0.10</div>
                        <div class="divTableCell">0.05</div>
                        <div class="divTableCell">1.645</div>
                        <div class="divTableCell">Less conservative, smaller sample</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">0.05</div>
                        <div class="divTableCell">0.025</div>
                        <div class="divTableCell">1.96</div>
                        <div class="divTableCell">Most frequently chosen (standard)</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">99%</div>
                        <div class="divTableCell">0.01</div>
                        <div class="divTableCell">0.005</div>
                        <div class="divTableCell">2.576</div>
                        <div class="divTableCell">More conservative, larger sample</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Note:</strong> Although user preference must be considered, <strong>95% confidence is the most frequently chosen value</strong> (z_{.025} = 1.96).</p>
            
            <h4><strong>Obtaining a Planning Value for σ</strong></h4>
            
            <p>Finally, use of equation (8.3) requires a value for the population standard deviation σ. However, even if σ is unknown, we can use equation (8.3) provided we have a <strong>preliminary or planning value for σ</strong>.</p>
            
            <p><strong>Critical Requirement:</strong> A planning value for the population standard deviation σ must be specified before the sample size can be determined.</p>
            
            <h5><strong>Three Methods of Obtaining a Planning Value for σ</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Method</div>
                    <div class="divTableHead">Description</div>
                    <div class="divTableHead">Advantages</div>
                    <div class="divTableHead">Considerations</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>1. Previous Studies</strong></div>
                        <div class="divTableCell">Use the estimate of the population standard deviation computed from data of previous studies as the planning value for σ</div>
                        <div class="divTableCell">Based on actual historical data; most reliable if conditions haven't changed</div>
                        <div class="divTableCell">Must verify that previous study conditions are similar to current study</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>2. Pilot Study</strong></div>
                        <div class="divTableCell">Use a pilot study to select a preliminary sample. The sample standard deviation from the preliminary sample can be used as the planning value for σ</div>
                        <div class="divTableCell">Current and relevant data; can be designed for specific study conditions</div>
                        <div class="divTableCell">Requires time and resources for preliminary data collection</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>3. Judgment/"Best Guess"</strong></div>
                        <div class="divTableCell">Use judgment or a "best guess" for the value of σ. Estimate largest and smallest data values in population; range ÷ 4 ≈ standard deviation</div>
                        <div class="divTableCell">Quick and inexpensive; doesn't require additional data collection</div>
                        <div class="divTableCell">Less reliable; may over or underestimate actual σ</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Range Rule of Thumb for Method 3</strong></h5>
            
            <div class="formula">
                <strong>RANGE APPROXIMATION METHOD</strong><br/><br/>
                Step 1: Estimate largest value in population<br/>
                Step 2: Estimate smallest value in population<br/>
                Step 3: Calculate Range = Largest - Smallest<br/>
                Step 4: Approximate σ ≈ Range ÷ 4<br/><br/>
                <strong>Planning Value for σ ≈ (Max - Min) ÷ 4</strong>
            </div>
            
            <p><strong>Rationale:</strong> For normally distributed data, approximately 95% of values fall within 2 standard deviations of the mean, giving a range of about 4 standard deviations.</p>
            
            <h4><strong>Comprehensive Example: Automobile Rental Cost Study</strong></h4>
            
            <h5><strong>Business Context</strong></h5>
            <p>A previous study that investigated the cost of renting automobiles in the United States found a mean cost of approximately $55 per day for renting a midsize automobile. Suppose that the organization that conducted this study would like to conduct a new study in order to estimate the population mean daily rental cost for a midsize automobile in the United States.</p>
            
            <h5><strong>Study Design Requirements</strong></h5>
            <p>In designing the new study, the project director specifies that the population mean daily rental cost be estimated with:</p>
            <ul>
                <li><strong>Margin of error:</strong> $2</li>
                <li><strong>Confidence level:</strong> 95%</li>
            </ul>
            
            <h5><strong>Given Information</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Parameter</div>
                    <div class="divTableHead">Symbol</div>
                    <div class="divTableHead">Value</div>
                    <div class="divTableHead">Source</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Desired Margin of Error</div>
                        <div class="divTableCell">E</div>
                        <div class="divTableCell">$2</div>
                        <div class="divTableCell">Project director specification</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Confidence Level</div>
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">α = 0.05</div>
                        <div class="divTableCell">Project director specification</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Critical Value</div>
                        <div class="divTableCell">z_{.025}</div>
                        <div class="divTableCell">1.96</div>
                        <div class="divTableCell">Standard normal table</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">Planning Value for σ</div>
                        <div class="divTableCell">σ</div>
                        <div class="divTableCell">$9.65</div>
                        <div class="divTableCell">Previous study sample standard deviation</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Planning Value Determination</strong></h5>
            <p>The project director specified a desired margin of error of <strong>E = $2</strong>, and the 95% level of confidence indicates <strong>z_{.025} = 1.96</strong>. Thus, we only need a planning value for the population standard deviation σ in order to compute the required sample size.</p>
            
            <p>At this point, an analyst reviewed the sample data from the previous study and found that the <strong>sample standard deviation for the daily rental cost was $9.65</strong>. Using $9.65 as the planning value for σ, we obtain:</p>
            
            <h5><strong>Sample Size Calculation</strong></h5>
            
            <div class="formula">
                <strong>Step-by-Step Calculation:</strong><br/><br/>
                n = (z_{α/2})² × σ² / E²<br/><br/>
                n = (1.96)² × (9.65)² / (2)²<br/><br/>
                n = (3.8416) × (93.1225) / 4<br/><br/>
                n = 357.73 / 4<br/><br/>
                n = 89.43
            </div>
            
            <h5><strong>Sample Size Decision</strong></h5>
            
            <p><strong>Calculated Value:</strong> n = 89.43 midsize automobile rentals</p>
            
            <p><strong>Rounding Rule:</strong> Equation (8.3) provides the minimum sample size needed to satisfy the desired margin of error requirement. If the computed sample size is not an integer, rounding up to the next integer value will provide a margin of error slightly smaller than required.</p>
            
            <p><strong>Final Recommendation:</strong> The recommended sample size is <strong>90 midsize automobile rentals</strong>.</p>
            
            <h5><strong>Verification of Results</strong></h5>
            
            <p>With n = 90, the actual margin of error will be:</p>
            <div class="formula">
                E = z_{α/2} × (σ/√n) = 1.96 × (9.65/√90) = 1.96 × 1.020 = $2.00
            </div>
            
            <p>This confirms that 90 samples will provide exactly the desired $2 margin of error.</p>
            
            <h4><strong>Sample Size Planning Considerations</strong></h4>
            
            <h5><strong>Equation (8.3) Key Points</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Consideration</div>
                    <div class="divTableHead">Implication</div>
                    <div class="divTableHead">Business Impact</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Minimum Sample Size</strong></div>
                        <div class="divTableCell">Formula provides minimum n to satisfy margin requirement</div>
                        <div class="divTableCell">Budget planning: use as lower bound for cost estimation</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Round Up Rule</strong></div>
                        <div class="divTableCell">Always round up to next integer for non-integer results</div>
                        <div class="divTableCell">Ensures margin of error requirement is met or exceeded</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Analyst Judgment</strong></div>
                        <div class="divTableCell">Judgment should be used to determine if final sample size needs upward adjustment</div>
                        <div class="divTableCell">Consider practical constraints, cost-benefit trade-offs</div>
                    </div>
                </div>
            </div>
            
            <h4><strong>Sensitivity Analysis: Impact of Parameter Changes</strong></h4>
            
            <h5><strong>Effect of Confidence Level Changes</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Confidence Level</div>
                    <div class="divTableHead">z_{α/2}</div>
                    <div class="divTableHead">Required Sample Size</div>
                    <div class="divTableHead">Percent Increase from 95%</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">90%</div>
                        <div class="divTableCell">1.645</div>
                        <div class="divTableCell">n = (1.645)² × (9.65)² / 4 = 63</div>
                        <div class="divTableCell">-30%</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">95%</div>
                        <div class="divTableCell">1.96</div>
                        <div class="divTableCell">n = (1.96)² × (9.65)² / 4 = 90</div>
                        <div class="divTableCell">Baseline</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">99%</div>
                        <div class="divTableCell">2.576</div>
                        <div class="divTableCell">n = (2.576)² × (9.65)² / 4 = 154</div>
                        <div class="divTableCell">+71%</div>
                    </div>
                </div>
            </div>
            
            <h5><strong>Effect of Margin of Error Changes</strong></h5>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Margin of Error (E)</div>
                    <div class="divTableHead">Required Sample Size</div>
                    <div class="divTableHead">Percent Change from E = $2</div>
                    <div class="divTableHead">Precision Trade-off</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">$1</div>
                        <div class="divTableCell">n = (1.96)² × (9.65)² / 1 = 358</div>
                        <div class="divTableCell">+298%</div>
                        <div class="divTableCell">Higher precision, much larger sample</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">$2</div>
                        <div class="divTableCell">n = (1.96)² × (9.65)² / 4 = 90</div>
                        <div class="divTableCell">Baseline</div>
                        <div class="divTableCell">Standard precision requirement</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">$3</div>
                        <div class="divTableCell">n = (1.96)² × (9.65)² / 9 = 40</div>
                        <div class="divTableCell">-56%</div>
                        <div class="divTableCell">Lower precision, smaller sample</div>
                    </div>
                </div>
            </div>
            
            <p><strong>Key Observation:</strong> Sample size is inversely proportional to the square of the margin of error. Halving the margin of error requires four times the sample size.</p>
            
            <h4><strong>Practical Implementation Guidelines</strong></h4>
            
            <h5><strong>Step-by-Step Sample Size Planning Process</strong></h5>
            
            <ol>
                <li><strong>Define Research Objectives:</strong> Clearly specify what population parameter needs to be estimated</li>
                <li><strong>Set Precision Requirements:</strong> Determine acceptable margin of error (E)</li>
                <li><strong>Choose Confidence Level:</strong> Select appropriate confidence level (typically 95%)</li>
                <li><strong>Obtain Planning Value for σ:</strong> Use previous studies, pilot study, or judgment</li>
                <li><strong>Calculate Sample Size:</strong> Apply equation (8.3)</li>
                <li><strong>Round Up:</strong> Ensure integer sample size that meets requirements</li>
                <li><strong>Review and Adjust:</strong> Consider practical constraints and budget limitations</li>
            </ol>
            
            <h4><strong>Key Takeaways for Sample Size Determination</strong></h4>
            
            <ol>
                <li><strong>Mathematical Foundation:</strong> Sample size formula (8.3) provides scientific basis for planning</li>
                <li><strong>Trade-off Management:</strong> Balance between precision (smaller margin), confidence (higher level), and resources (sample size)</li>
                <li><strong>Planning Value Critical:</strong> Quality of σ estimate directly affects sample size accuracy</li>
                <li><strong>Conservative Approach:</strong> When uncertain, round up and consider practical adjustments</li>
                <li><strong>Business Context:</strong> Always consider cost, time, and feasibility constraints</li>
                <li><strong>Documentation:</strong> Record assumptions and planning values for future reference</li>
                <li><strong>Flexibility:</strong> Be prepared to adjust sample size based on pilot study results or changing requirements</li>
            </ol>
            
            <h4><strong>Summary Decision Framework</strong></h4>
            
            <div class="formula">
                <strong>SAMPLE SIZE PLANNING CHECKLIST</strong><br/><br/>
                ✓ Define margin of error requirement (E)<br/>
                ✓ Select confidence level (typically 95%)<br/>
                ✓ Obtain reliable planning value for σ<br/>
                ✓ Calculate n using equation (8.3)<br/>
                ✓ Round up to next integer<br/>
                ✓ Adjust for practical constraints<br/>
                ✓ Consider finite population correction if needed<br/>
                ✓ Account for expected non-response rate<br/>
                ✓ Validate against budget and time constraints<br/>
                ✓ Document all assumptions and decisions
            </div>`
        }
    ]
};
