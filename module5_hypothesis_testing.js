// Module 5: Hypothesis Tests and Comparisons Involving Means
// Clean version with CSS classes instead of inline styles

const MODULE5_HYPOTHESIS_BASICS_NOTES = {
  hypothesisBasics: `
    <div class="module5-container">
      <h2 class="module5-header" style="border-bottom-color: #3498db;">
        📊 Chapter 9: Hypothesis Testing Fundamentals
      </h2>
      
      <div class="module5-intro-gradient-purple">
        <h3>🎯 Learning Objectives</h3>
        <ul style="list-style: none; padding-left: 0;">
          <li>✅ <strong>5.1:</strong> Determine null and alternative hypotheses for business scenarios</li>
          <li>✅ <strong>5.2:</strong> Determine test statistics for given scenarios</li>
          <li>✅ <strong>5.3:</strong> Determine rejection and non-rejection regions</li>
          <li>✅ <strong>5.4:</strong> Determine critical values of hypothesis testing</li>
          <li>✅ <strong>5.5:</strong> Determine conclusions of population mean hypothesis testing</li>
          <li>✅ <strong>5.6:</strong> Determine p-value of hypothesis testing</li>
          <li>✅ <strong>5.7:</strong> Define Type I and Type II errors</li>
        </ul>
      </div>

      <div class="module5-concept-box" style="border-left: 5px solid #28a745;">
        <h3>🔍 Introduction to Hypothesis Testing</h3>
        <p>In Chapters 7 and 8 we showed how a sample could be used to develop point and interval estimates of population parameters. In this chapter we continue the discussion of statistical inference by showing how <strong>hypothesis testing</strong> can be used to determine whether a statement about the value of a population parameter should or should not be rejected.</p>
        
        <p>In hypothesis testing we begin by making a tentative assumption about a population parameter. This tentative assumption is called the <strong>null hypothesis</strong> and is denoted by <strong>H₀</strong>. We then define another hypothesis, called the <strong>alternative hypothesis</strong>, which is the opposite of what is stated in the null hypothesis. The alternative hypothesis is denoted by <strong>Hₐ</strong>.</p>
        
        <p>The hypothesis testing procedure uses data from a sample to test the two competing statements indicated by H₀ and Hₐ.</p>
      </div>

      <h3 style="color: #e74c3c;">🎯 9.1 Developing Null and Alternative Hypotheses</h3>
      
      <div class="module5-white-box" style="background-color: #fff3cd; border: 1px solid #ffeaa7;">
        <p><strong>⚠️ Important Note:</strong> Learning to correctly formulate hypotheses will take some practice. Expect some initial confusion over the proper choice of the null and alternative hypotheses. The examples in this section are intended to provide guidelines.</p>
      </div>

      <p>It is not always obvious how the null and alternative hypotheses should be formulated. Care must be taken to structure the hypotheses appropriately so that the hypothesis testing conclusion provides the information the researcher or decision maker wants. The context of the situation is very important in determining how the hypotheses should be stated.</p>

      <div class="module5-notation-box" style="border: 1px solid #4caf50;">
        <h4>🤔 Key Questions for Formulating Hypotheses:</h4>
        <ul>
          <li>What is the purpose of collecting the sample?</li>
          <li>What conclusions are we hoping to make?</li>
        </ul>
      </div>

      <h4 style="color: #3498db;">📋 The Alternative Hypothesis as a Research Hypothesis</h4>
      
      <div class="module5-white-box">
        <p>Many applications of hypothesis testing involve an attempt to gather evidence in support of a research hypothesis. In such cases, it is often best to begin with the alternative hypothesis and make it the conclusion that the researcher or decision maker wants to support.</p>
        
        <p><strong>Research Question:</strong> Should we implement a new manufacturing process?</p>
        <p><strong>Research Hypothesis:</strong> The new process will improve quality.</p>
        <p><strong>Statistical Alternative Hypothesis:</strong> Hₐ: μ_new > μ_current</p>
      </div>

      <h4 style="color: #e74c3c;">📊 The Null Hypothesis as a Skeptical Position</h4>
      
      <div class="module5-white-box">
        <p>The null hypothesis H₀ most often corresponds to a skeptical point of view about the research hypothesis. For instance, the skeptical point of view is that the new manufacturing process is no better than the current process. We can state this as H₀: μ_new ≤ μ_current.</p>
        
        <p><strong>Key Principle:</strong> The researcher or decision maker wants to use the sample data to provide evidence that will lead to the rejection of H₀ and the acceptance of Hₐ.</p>
      </div>

      <h4 style="color: #9b59b6;">⚖️ Summary of Forms for Null and Alternative Hypotheses</h4>
      
      <div class="module5-table-container">
        <table class="module5-table">
          <thead>
            <tr>
              <th>Null Hypothesis</th>
              <th>Alternative Hypothesis</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="module5-table-header">H₀: μ ≥ μ₀</td>
              <td class="module5-table-header">Hₐ: μ < μ₀</td>
              <td>Lower tail test</td>
            </tr>
            <tr>
              <td class="module5-table-header">H₀: μ ≤ μ₀</td>
              <td class="module5-table-header">Hₐ: μ > μ₀</td>
              <td>Upper tail test</td>
            </tr>
            <tr>
              <td class="module5-table-header">H₀: μ = μ₀</td>
              <td class="module5-table-header">Hₐ: μ ≠ μ₀</td>
              <td>Two-tailed test</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="module5-notation-box">
        <h5>📝 Important Notes:</h5>
        <ul>
          <li>The null hypothesis H₀ always contains the equality condition</li>
          <li>The alternative hypothesis Hₐ never contains an equality</li>
          <li>μ₀ is the hypothesized value of the population mean</li>
          <li>We establish which hypothesis to believe based on sample evidence</li>
        </ul>
      </div>
    </div>
  `
};

  const MODULE5_ONE_POPULATION_MEAN_NOTES = {
    onePopulationMean: `
     <div class="module5-container">
       <h2 class="module5-header">
         🔬 Population Mean: σ Known (Z-TEST)
       </h2>
       
       <div class="module5-intro-gradient-red">
         <h3>📊 Chapter 9.3: Testing a Population Mean (σ Known) - Z-TEST</h3>
         <div class="module5-white-box" style="border: 3px solid #fff; margin: 10px 0;">
           <p style="text-align: center; font-size: 20px; font-weight: bold; color: #fff;">
             🎯 RULE: σ GIVEN → USE Z-TEST
           </p>
         </div>
         <p>In Chapter 8 we said that the σ known case corresponds to applications in which <strong>historical data and/or other information are available</strong> that enable us to obtain a good estimate of the population standard deviation prior to sampling.</p>
         <p>In such cases the population standard deviation can, for all practical purposes, be <strong>considered known</strong>.</p>
       </div>

      <div class="module5-concept-box">
        <h4>🎯 When These Methods Apply</h4>
        <p><strong>The methods presented in this section are:</strong></p>
        <ul>
          <li><strong>Exact</strong> if the sample is selected from a population that is normally distributed</li>
          <li><strong>Still applicable</strong> in cases where it is not reasonable to assume the population is normally distributed, provided the sample size is large enough</li>
        </ul>
        <p><em>We provide practical advice concerning the population distribution and sample size at the end of this section.</em></p>
      </div>

      <h3 style="color: #e74c3c;">📋 One-Tailed Tests</h3>

      <div class="module5-table-container">
        <p><strong>One-tailed tests about a population mean take one of the following two forms:</strong></p>
        
        <div class="module5-method-grid">
          <div class="module5-lower-tail">
            <h5 style="color: #3498db; text-align: center;">Lower Tail Test</h5>
            <div class="module5-hypothesis-text">
              <strong>H₀: μ ≥ μ₀</strong><br>
              <strong>Hₐ: μ < μ₀</strong>
            </div>
          </div>
          <div class="module5-upper-tail">
            <h5 style="color: #e74c3c; text-align: center;">Upper Tail Test</h5>
            <div class="module5-hypothesis-text">
              <strong>H₀: μ ≤ μ₀</strong><br>
              <strong>Hₐ: μ > μ₀</strong>
            </div>
          </div>
        </div>
      </div>

      <h3 style="color: #6f42c1;">☕ Federal Trade Commission Example: Hilltop Coffee</h3>

      <div class="module5-ftc-box">
        <h4>🏢 Background</h4>
        <p>The Federal Trade Commission (FTC) periodically conducts statistical studies designed to test the claims that manufacturers make about their products.</p>
        
        <div class="module5-white-box">
          <p><strong>Case Study:</strong> The label on a large can of Hilltop Coffee states that the can contains 3 pounds of coffee.</p>
          
          <h5>🤔 FTC's Reasoning:</h5>
          <ul>
            <li>The FTC knows that Hilltop's production process cannot place exactly 3 pounds of coffee in each can</li>
            <li>However, as long as the population mean filling weight is <strong>at least 3 pounds per can</strong>, the rights of consumers will be protected</li>
            <li>Thus, the FTC interprets the label information as a claim by Hilltop that the population mean filling weight is <strong>at least 3 pounds per can</strong></li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h5>📊 Step 1: Develop Hypotheses</h5>
          <p><strong>Logic:</strong> If the population mean filling weight is at least 3 pounds per can, Hilltop's claim is correct. This establishes the null hypothesis. However, if the population mean weight is less than 3 pounds per can, Hilltop's claim is incorrect.</p>
          
          <div class="module5-hypothesis-center">
            <strong>H₀: μ ≥ 3</strong> (Hilltop's claim is correct)<br>
            <strong>Hₐ: μ < 3</strong> (Hilltop's claim is incorrect)
          </div>
          
          <p><strong>Note:</strong> The hypothesized value of the population mean is μ₀ = 3.</p>
        </div>

        <div class="module5-implications-box">
          <h5>⚖️ Decision Implications</h5>
          <ul>
            <li><strong>If sample data indicate H₀ cannot be rejected:</strong> Statistical evidence does not support the conclusion that a label violation has occurred. Hence, no action should be taken against Hilltop.</li>
            <li><strong>If sample data indicate H₀ can be rejected:</strong> We conclude that Hₐ: μ < 3 is true. A conclusion of underfilling and a charge of label violation against Hilltop would be justified.</li>
          </ul>
        </div>
      </div>

      <h4 style="color: #dc3545;">📊 Step 2: Determine Significance Level</h4>

      <div class="module5-significance-level">
        <p>Suppose a sample of 36 cans of coffee is selected and the sample mean x̄ is computed as an estimate of the population mean μ. If the value of the sample mean x̄ is less than 3 pounds, the sample results will cast doubt on the null hypothesis.</p>
        
        <div class="module5-key-question">
          <h5>🤔 Key Question:</h5>
          <p><strong>How much less than 3 pounds must x̄ be before we would be willing to declare the difference significant and risk making a Type I error by falsely accusing Hilltop of a label violation?</strong></p>
        </div>

        <div class="module5-director-box">
          <h5>🎯 FTC Director's Statement:</h5>
          <p><em>"If the company is meeting its weight specifications at μ ≥ 3, I do not want to take action against them. But, I am willing to risk a 1% chance of making such an error."</em></p>
          
          <div class="module5-alpha-highlight">
            <strong>α = 0.01</strong>
          </div>
          
          <p>Thus, we must design the hypothesis test so that the probability of making a Type I error when μ ≥ 3 is 0.01.</p>
        </div>
      </div>

      <h4 style="color: #f39c12;">📈 Step 3: Calculate Test Statistic</h4>

      <div class="module5-test-stat-box">
        <div class="module5-white-box">
          <h5>📊 Given Information from Previous FTC Tests:</h5>
          <ul>
            <li><strong>Population standard deviation:</strong> σ = 0.18 (assumed known)</li>
            <li><strong>Population distribution:</strong> Normal distribution of filling weights</li>
            <li><strong>Sample size:</strong> n = 36</li>
          </ul>
        </div>

        <div class="module5-sampling-box">
          <h5>📐 Sampling Distribution Properties</h5>
          <p><strong>From Chapter 7:</strong> If the population from which we are sampling is normally distributed, the sampling distribution of x̄ will also be normally distributed.</p>
          
          <p><strong>Standard error of x̄:</strong></p>
          <div class="module5-formula-center">
            <strong>σ_x̄ = σ/√n = 0.18/√36 = 0.18/6 = 0.03</strong>
          </div>
        </div>

        <div class="module5-notation-box">
          <h5>🧮 Z-Test Statistic Formula (σ Known)</h5>
          <div class="module5-formula-bordered">
            <strong>z = (x̄ - μ₀)/(σ/√n) = (x̄ - 3)/0.03</strong>
          </div>
          
          <p><strong>Because σ is known and the sampling distribution of x̄ is normally distributed, we use the z-distribution (standard normal distribution).</strong></p>
          
          <div class="module5-interpretation-box">
            <p><strong>Z-Test Interpretation:</strong></p>
            <ul>
              <li>A value of z = -1 means x̄ is one standard error below μ₀</li>
              <li>A value of z = -2 means x̄ is two standard errors below μ₀</li>
              <li>A value of z = -3 means x̄ is three standard errors below μ₀ (probability = 0.0013)</li>
              <li><strong>Why z-test:</strong> σ = 0.18 is given/known from previous tests</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="module5-approaches-header">🎯 Two Approaches for Decision Making</h3>

      <h4 style="color: #17a2b8;">📊 Approach 1: p-Value Method</h4>

      <div class="module5-pvalue-box">
        <div class="module5-pvalue-def">
          <h5 style="text-align: center; color: #17a2b8;">p-VALUE DEFINITION</h5>
          <p style="text-align: center; font-size: 16px; font-weight: bold;">
            A p-value is a probability that provides a measure of the evidence against the null hypothesis provided by the sample. Smaller p-values indicate more evidence against H₀.
          </p>
        </div>

        <div class="module5-calculation-box">
          <h5>☕ Hilltop Coffee Calculation</h5>
          <p><strong>Given:</strong> Sample of 36 coffee cans provides x̄ = 2.92 pounds</p>
          
          <p><strong>Step 1: Calculate test statistic</strong></p>
          <div class="module5-calc-step">
            z = (x̄ - μ₀)/(σ/√n) = (2.92 - 3)/(0.18/√36) = -0.08/0.03 = <strong>-2.67</strong>
          </div>
          
          <p><strong>Step 2: Find p-value</strong></p>
          <p>For a lower tail test, the p-value is the probability that z ≤ -2.67</p>
          <div class="module5-calc-step">
            <strong>p-value = P(z ≤ -2.67) = 0.0038</strong>
          </div>
        </div>

        <div class="module5-decision-box">
          <h5>📋 Decision Rule Using p-Value</h5>
          <div class="module5-decision-rule">
            <strong>Reject H₀ if p-value ≤ α</strong>
          </div>
          
          <p><strong>Decision:</strong> Since p-value = 0.0038 ≤ α = 0.01, we <strong>reject H₀</strong></p>
          <p><strong>Conclusion:</strong> We find sufficient statistical evidence to reject the null hypothesis at the 0.01 level of significance. Hilltop Coffee is underfilling cans.</p>
        </div>

        <div class="module5-observed-box">
          <h5>💡 Observed Level of Significance</h5>
          <p>The p-value of 0.0038 means we would reject H₀ for any value of α ≥ 0.0038. For this reason, the p-value is also called the <strong>observed level of significance</strong>.</p>
          
          <p><strong>Advantage:</strong> Different decision makers can compare the reported p-value to their own chosen level of significance and possibly make different decisions.</p>
        </div>
      </div>

      <h4 style="color: #6f42c1;">📊 Approach 2: Critical Value Method</h4>

      <div class="module5-critical-box">
        <div class="module5-critical-concept">
          <h5>🎯 Critical Value Concept</h5>
          <p><strong>Critical Value:</strong> The value of the test statistic that corresponds to an area of α (the level of significance) in the lower tail of the sampling distribution.</p>
          
          <p><strong>In other words:</strong> The critical value is the largest value of the test statistic that will result in rejection of the null hypothesis.</p>
        </div>

        <div class="module5-calculation-box">
          <h5>☕ Hilltop Coffee Critical Value</h5>
          <p>For α = 0.01 in a standard normal distribution, the critical value is the z-value that provides an area of 0.01 in the lower tail.</p>
          
          <div class="module5-critical-value">
            <strong>Critical Value: z = -2.33</strong>
          </div>
        </div>

        <div class="module5-decision-box">
          <h5>📋 Decision Rule Using Critical Value</h5>
          <div class="module5-decision-rule">
            <strong>Reject H₀ if z ≤ -z_α</strong><br>
            <strong>Reject H₀ if z ≤ -2.33</strong>
          </div>
          
          <p><strong>Decision:</strong> Since z = -2.67 ≤ -2.33, we <strong>reject H₀</strong></p>
          <p><strong>Conclusion:</strong> We reject the null hypothesis. Hilltop Coffee is underfilling cans.</p>
        </div>
      </div>

      <h4 style="color: #e74c3c;">🔄 Upper Tail Tests</h4>

      <div class="module5-upper-tail-box">
        <p>We can use the same general approach to conduct an upper tail test. The test statistic z is still computed using the same formula, but:</p>
        
        <div class="module5-approach-grid">
          <div class="module5-pvalue-approach">
            <h6>📊 p-Value Approach</h6>
            <p><strong>For upper tail test:</strong> p-value is the probability of obtaining a test statistic as large as or larger than the sample value</p>
            <p><strong>p-value = P(z ≥ test statistic)</strong></p>
          </div>
          
          <div class="module5-critical-approach">
            <h6>🎯 Critical Value Approach</h6>
            <p><strong>Rejection rule:</strong> Reject H₀ if z ≥ z_α</p>
            <p><strong>Critical value:</strong> z_α (positive value)</p>
          </div>
        </div>
      </div>

      <h3 style="color: #f39c12;">⚽ Two-Tailed Test: MaxFlight Golf Ball Example</h3>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h4>🏌️ Background: Golf Ball Quality Control</h4>
        <p>MaxFlight, Inc. uses a high-technology manufacturing process to produce golf balls with a mean driving distance of 295 yards. The U.S. Golf Association (USGA) establishes rules that manufacturers must meet for their products to be acceptable for use in USGA events.</p>
        
        <div class="module5-white-box">
          <h5>🎯 Quality Control Challenges:</h5>
          <ul>
            <li><strong>Mean distance below 295 yards:</strong> Company worries about losing sales (golf balls don't provide advertised distance)</li>
            <li><strong>Mean distance above 295 yards:</strong> Golf balls may be rejected by USGA for exceeding distance standards</li>
            <li><strong>Quality control program:</strong> Periodic samples of 50 golf balls to monitor the manufacturing process</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h5>📊 Step 1: Formulate Hypotheses</h5>
          <p><strong>Process assumption:</strong> We begin by assuming the process is functioning correctly (golf balls have mean distance of 295 yards)</p>
          
          <div class="module5-hypothesis-center">
            <strong>H₀: μ = 295</strong> (Process is in adjustment)<br>
            <strong>Hₐ: μ ≠ 295</strong> (Process is out of adjustment)
          </div>
          
          <p><strong>Note:</strong> This is a <strong>two-tailed test</strong> because we want to detect deviations in either direction from the target value μ₀ = 295.</p>
        </div>

        <div class="module5-implications-box">
          <h5>⚖️ Decision Consequences</h5>
          <ul>
            <li><strong>If x̄ significantly less than 295 or significantly greater than 295:</strong> Reject H₀ → Take corrective action to adjust manufacturing process</li>
            <li><strong>If x̄ does not deviate significantly from 295:</strong> Do not reject H₀ → No action taken to adjust process</li>
          </ul>
        </div>
      </div>

      <h4 style="color: #dc3545;">📊 Step 2: Test Parameters</h4>

      <div class="module5-test-stat-box">
        <div class="module5-white-box">
          <h5>📊 Given Information:</h5>
          <ul>
            <li><strong>Significance level:</strong> α = 0.05 (selected by quality control team)</li>
            <li><strong>Population standard deviation:</strong> σ = 12 (known from previous tests)</li>
            <li><strong>Sample size:</strong> n = 50</li>
            <li><strong>Hypothesized mean:</strong> μ₀ = 295 yards</li>
          </ul>
        </div>

        <div class="module5-sampling-box">
          <h5>📐 Sampling Distribution Properties</h5>
          <p><strong>Standard error of x̄:</strong></p>
          <div class="module5-formula-center">
            <strong>σ_x̄ = σ/√n = 12/√50 = 1.7</strong>
          </div>
          
          <p><strong>Distribution:</strong> Because the sample size is large (n = 50), the Central Limit Theorem allows us to conclude that the sampling distribution of x̄ can be approximated by a normal distribution.</p>
        </div>
      </div>

      <h4 style="color: #f39c12;">📈 Step 3: Sample Results and Test Statistic</h4>

      <div class="module5-calculation-box">
        <p><strong>Sample Result:</strong> A sample of 50 golf balls provides x̄ = 297.6 yards</p>
        
        <p><strong>Initial Observation:</strong> This sample mean (297.6) provides support for the conclusion that the population mean is larger than 295 yards. But is this value large enough to reject H₀ at the 0.05 level of significance?</p>

        <div class="module5-notation-box">
          <h5>🧮 Calculate Z-Test Statistic (σ = 12 is Given)</h5>
          <div class="module5-formula-bordered">
            <strong>z = (x̄ - μ₀)/(σ/√n) = (297.6 - 295)/(12/√50) = 2.6/1.7 = 1.53</strong>
          </div>
          <p><strong>Note:</strong> We use z-test because σ = 12 is given from previous quality control tests</p>
        </div>
      </div>

      <h3 class="module5-approaches-header">🎯 Two-Tailed Test Decision Methods</h3>

      <h4 style="color: #17a2b8;">📊 Approach 1: p-Value Method for Two-Tailed Test</h4>

      <div class="module5-pvalue-box">
        <div class="module5-white-box" style="border: 2px solid #17a2b8;">
          <h5>🔍 Two-Tailed p-Value Concept</h5>
          <p><strong>For a two-tailed test:</strong> Values of the test statistic in <strong>either tail</strong> provide evidence against the null hypothesis.</p>
          <p><strong>p-value:</strong> The probability of obtaining a value for the test statistic as unlikely as or more unlikely than that provided by the sample.</p>
        </div>

        <div class="module5-calculation-box">
          <h5>⚽ MaxFlight p-Value Calculation</h5>
          <p><strong>Test statistic:</strong> z = 1.53</p>
          
          <div class="module5-calc-step">
            <h6>Step 1: Identify "at least as unlikely" values</h6>
            <p>• Values z ≥ 1.53 are at least as unlikely</p>
            <p>• For two-tailed test: Values z ≤ -1.53 are also at least as unlikely</p>
          </div>
          
          <div class="module5-calc-step">
            <h6>Step 2: Calculate tail areas</h6>
            <p><strong>Upper tail area:</strong> P(z ≥ 1.53) = 1 - P(z ≤ 1.53) = 1 - 0.9370 = 0.0630</p>
            <p><strong>Lower tail area:</strong> P(z ≤ -1.53) = 0.0630 (by symmetry)</p>
          </div>
          
          <div class="module5-calc-step">
            <h6>Step 3: Calculate p-value</h6>
            <p><strong>p-value = P(z ≤ -1.53) + P(z ≥ 1.53) = 0.0630 + 0.0630 = 0.1260</strong></p>
            <p><em>OR equivalently: p-value = 2 × 0.0630 = 0.1260</em></p>
          </div>
        </div>

        <div class="module5-decision-box">
          <h5>📋 Decision Using p-Value</h5>
          <div class="module5-decision-rule">
            <strong>Decision Rule: Reject H₀ if p-value ≤ α</strong>
          </div>
          
          <p><strong>Comparison:</strong> p-value = 0.1260 > α = 0.05</p>
          <p><strong>Decision:</strong> Fail to reject H₀</p>
          <p><strong>Conclusion:</strong> We fail to reject the null hypothesis. The sample evidence is not strong enough to conclude that the manufacturing process is out of adjustment. No corrective action will be taken.</p>
        </div>
      </div>

      <h4 style="color: #6f42c1;">📊 Approach 2: Critical Value Method for Two-Tailed Test</h4>

      <div class="module5-critical-box">
        <div class="module5-critical-concept">
          <h5>🎯 Two-Tailed Critical Values</h5>
          <p><strong>Key difference:</strong> Critical values occur in <strong>both</strong> the lower and upper tails of the standard normal distribution.</p>
          
          <p><strong>Area in each tail:</strong> α/2 = 0.05/2 = 0.025</p>
        </div>

        <div class="module5-calculation-box">
          <h5>⚽ MaxFlight Critical Values</h5>
          <p>Using the standard normal probability table for α/2 = 0.025:</p>
          
          <div class="module5-critical-value">
            <strong>Critical Values: z₀.₀₂₅ = ±1.96</strong>
          </div>
          
          <p><strong>Lower critical value:</strong> -1.96</p>
          <p><strong>Upper critical value:</strong> +1.96</p>
        </div>

        <div class="module5-decision-box">
          <h5>📋 Two-Tailed Rejection Rule</h5>
          <div class="module5-decision-rule">
            <strong>Reject H₀ if z ≤ -1.96 or if z ≥ 1.96</strong>
          </div>
          
          <p><strong>Test statistic:</strong> z = 1.53</p>
          <p><strong>Evaluation:</strong> -1.96 < 1.53 < 1.96 (test statistic falls in non-rejection region)</p>
          <p><strong>Decision:</strong> Fail to reject H₀</p>
          <p><strong>Conclusion:</strong> We fail to reject the null hypothesis. Same as p-value approach - insufficient evidence to conclude the process is out of adjustment.</p>
        </div>
      </div>

      <h3 style="color: #28a745;">📋 3-Step p-Value Approach for Two-Tailed Tests</h3>

      <div class="module5-summary-box">
        <h5>📊 Systematic p-Value Method for Two-Tailed Hypothesis Tests</h5>
        
        <div class="module5-white-box" style="border: 3px solid #28a745;">
          <h6 style="text-align: center; color: #28a745; font-size: 18px;">📊 3-STEP p-VALUE APPROACH FOR TWO-TAILED TESTS</h6>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 1: Compute the Test Statistic</h5>
          <div class="module5-formula-bordered">
            <strong>z = (x̄ - μ₀)/(σ/√n)</strong>
          </div>
          <div class="module5-white-box">
            <p><strong>Where:</strong></p>
            <ul>
              <li><strong>x̄</strong> = sample mean</li>
              <li><strong>μ₀</strong> = hypothesized population mean</li>
              <li><strong>σ</strong> = known population standard deviation</li>
              <li><strong>n</strong> = sample size</li>
            </ul>
            <p><strong>Note:</strong> This is the same formula as one-tailed tests, but the interpretation differs.</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Calculate the Tail Area</h5>
          <div class="module5-error-grid">
            <div class="module5-benefits-box">
              <h6>🔼 If Test Statistic is in Upper Tail (z > 0):</h6>
              <div class="module5-formula-center">
                <strong>p-value = 2 × P(z ≥ test statistic)</strong>
              </div>
              <p><em>Example: If z = 1.53, calculate P(z ≥ 1.53) and multiply by 2</em></p>
            </div>
            <div class="module5-type1-box">
              <h6>🔽 If Test Statistic is in Lower Tail (z < 0):</h6>
              <div class="module5-formula-center">
                <strong>p-value = 2 × P(z ≤ test statistic)</strong>
              </div>
              <p><em>Example: If z = -1.53, calculate P(z ≤ -1.53) and multiply by 2</em></p>
            </div>
          </div>
          
          <div class="module5-notation-box">
            <h5>🔍 Key Insight:</h5>
            <p><strong>For two-tailed tests, we always double the tail area</strong> because we need to account for extreme values in both directions from the hypothesized mean.</p>
            <p><strong>Why double?</strong> A test statistic of +1.53 is just as "unlikely" as -1.53 when testing H₀: μ = μ₀ vs Hₐ: μ ≠ μ₀.</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Make Decision and Interpret</h5>
          <div class="module5-white-box">
            <h6>🎯 Decision Rule:</h6>
            <div class="module5-decision-rule">
              <strong>Reject H₀ if p-value ≤ α</strong><br>
              <strong>Fail to reject H₀ if p-value > α</strong>
            </div>
            
            <h6>📊 Interpretation Guidelines:</h6>
            <ul>
              <li><strong>p-value ≤ 0.01:</strong> Very strong evidence against H₀</li>
              <li><strong>0.01 < p-value ≤ 0.05:</strong> Strong evidence against H₀</li>
              <li><strong>0.05 < p-value ≤ 0.10:</strong> Weak evidence against H₀</li>
              <li><strong>p-value > 0.10:</strong> Insufficient evidence against H₀</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #f39c12;">📋 Complete Example: MaxFlight Golf Balls (3-Step Application)</h3>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h4>⚽ Applying the 3-Step p-Value Approach</h4>
        
        <div class="module5-step-box">
          <h5>📋 Step 1: Compute the Test Statistic</h5>
          <div class="module5-formula-bordered">
            <strong>z = (x̄ - μ₀)/(σ/√n) = (297.6 - 295)/(12/√50) = 2.6/1.7 = 1.53</strong>
          </div>
          <p><strong>Interpretation:</strong> Sample mean is 1.53 standard errors above the hypothesized value</p>
          <p><strong>Location:</strong> Test statistic is in the upper tail (z = 1.53 > 0)</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Calculate the Tail Area</h5>
          <div class="module5-white-box">
            <p><strong>Since z = 1.53 is in the upper tail:</strong></p>
            <div class="module5-calc-step">
              <h6>Step 2a: Find upper tail area</h6>
              <p>P(z ≥ 1.53) = 1 - P(z ≤ 1.53) = 1 - 0.9370 = 0.0630</p>
            </div>
            
            <div class="module5-calc-step">
              <h6>Step 2b: Double the tail area</h6>
              <p><strong>p-value = 2 × 0.0630 = 0.1260</strong></p>
            </div>
            
            <p><strong>Explanation:</strong> We double because a z-value of -1.53 would be equally extreme in the opposite direction.</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Make Decision and Interpret</h5>
          <div class="module5-decision-box">
            <h6>🎯 Decision:</h6>
            <p><strong>Comparison:</strong> p-value = 0.1260 > α = 0.05</p>
            <p><strong>Decision:</strong> Fail to reject H₀</p>
            
            <h6>📊 Interpretation:</h6>
            <p><strong>Statistical conclusion:</strong> We fail to reject the null hypothesis.</p>
            <p><strong>Practical interpretation:</strong> There is insufficient evidence to conclude that the manufacturing process is out of adjustment (μ ≠ 295).</p>
            <p><strong>Business action:</strong> No corrective action needed. Continue production as normal.</p>
            
            <h6>🔍 Evidence Level:</h6>
            <p><strong>p-value = 0.1260 > 0.10:</strong> Insufficient evidence against H₀</p>
          </div>
        </div>
      </div>

      <h3 style="color: #6f42c1;">📋 Why the 3-Step Approach Works</h3>

      <div class="module5-summary-box">
        <h5>🔍 Mathematical Logic Behind Two-Tailed p-Values</h5>
        
        <div class="module5-white-box">
          <h6>📊 Two-Tailed Test Logic:</h6>
          <p>When testing H₀: μ = μ₀ vs Hₐ: μ ≠ μ₀, we're asking: "Is the population mean different from μ₀ in either direction?"</p>
          
          <div class="module5-error-grid">
            <div class="module5-benefits-box">
              <h6>🔼 Upper Tail Evidence:</h6>
              <p>If x̄ > μ₀ (z > 0), this suggests μ > μ₀</p>
              <p><strong>Evidence against H₀:</strong> Sample mean is higher than expected</p>
            </div>
            <div class="module5-type1-box">
              <h6>🔽 Lower Tail Evidence:</h6>
              <p>If x̄ < μ₀ (z < 0), this suggests μ < μ₀</p>
              <p><strong>Evidence against H₀:</strong> Sample mean is lower than expected</p>
            </div>
          </div>
        </div>

        <div class="module5-notation-box">
          <h5>💡 Key Insight:</h5>
          <p><strong>The p-value represents the probability of getting a test statistic as extreme or more extreme than the observed value, assuming H₀ is true.</strong></p>
          <p><strong>For two-tailed tests:</strong> "As extreme" means in either direction from μ₀, so we account for both tails.</p>
        </div>

        <div class="module5-advantage-box">
          <h5>🎯 Advantages of the 3-Step Approach:</h5>
          <ul>
            <li><strong>Systematic:</strong> Clear, repeatable procedure</li>
            <li><strong>Logical:</strong> Each step builds on the previous one</li>
            <li><strong>Comprehensive:</strong> Covers all aspects of two-tailed p-value calculation</li>
            <li><strong>Practical:</strong> Easy to apply to any two-tailed test scenario</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #17a2b8;">📋 Comparison: One-Tailed vs Two-Tailed p-Values</h3>

      <div class="module5-summary-box">
        <h5>📊 Key Differences in p-Value Calculation</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Aspect</strong></th>
                <th><strong>One-Tailed Test</strong></th>
                <th><strong>Two-Tailed Test</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Hypotheses</td>
                <td>H₀: μ ≥ μ₀ vs Hₐ: μ < μ₀<br>OR<br>H₀: μ ≤ μ₀ vs Hₐ: μ > μ₀</td>
                <td>H₀: μ = μ₀ vs Hₐ: μ ≠ μ₀</td>
              </tr>
              <tr>
                <td class="module5-table-header">p-Value Formula</td>
                <td>p-value = P(z ≤ test statistic)<br>OR<br>p-value = P(z ≥ test statistic)</td>
                <td>p-value = 2 × tail area</td>
              </tr>
              <tr>
                <td class="module5-table-header">Critical Values</td>
                <td>z_α (one critical value)</td>
                <td>±z_{α/2} (two critical values)</td>
              </tr>
              <tr>
                <td class="module5-table-header">Evidence Direction</td>
                <td>Specific direction (left or right)</td>
                <td>Either direction (both tails)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 class="module5-approaches-header">📋 Table 9.2: Complete Summary of Z-Tests (σ Known)</h3>

      <div class="module5-summary-box">
        <h5>📊 Summary of Z-Tests About a Population Mean: σ Known Case</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Test Type</strong></th>
                <th><strong>Lower Tail Test</strong></th>
                <th><strong>Upper Tail Test</strong></th>
                <th><strong>Two-Tailed Test</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Hypotheses</td>
                <td>
                  <strong>H₀: μ ≥ μ₀</strong><br>
                  <strong>Hₐ: μ < μ₀</strong>
                </td>
                <td>
                  <strong>H₀: μ ≤ μ₀</strong><br>
                  <strong>Hₐ: μ > μ₀</strong>
                </td>
                <td>
                  <strong>H₀: μ = μ₀</strong><br>
                  <strong>Hₐ: μ ≠ μ₀</strong>
                </td>
              </tr>
              <tr>
                <td class="module5-table-header">Z-Test Statistic</td>
                <td colspan="3" style="text-align: center;">
                  <strong>z = (x̄ - μ₀)/(σ/√n)</strong><br>
                  <em>(Use when σ is given/known)</em>
                </td>
              </tr>
              <tr>
                <td class="module5-table-header">p-Value Approach</td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
              </tr>
              <tr>
                <td class="module5-table-header">Critical Value Approach</td>
                <td>Reject H₀ if<br><strong>z ≤ -z_α</strong></td>
                <td>Reject H₀ if<br><strong>z ≥ z_α</strong></td>
                <td>Reject H₀ if<br><strong>z ≤ -z_{α/2}</strong><br>or<br><strong>z ≥ z_{α/2}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="module5-notation-box">
          <h5>📝 Important Notes:</h5>
          <p><strong>μ₀</strong> is the hypothesized value of the population mean. The hypothesis testing steps followed in the examples are common to every hypothesis test.</p>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 5 Steps for One-Tailed Tests About Known Population Mean</h3>

      <div class="module5-summary-box">
        <h5>🎯 Systematic Procedure for σ Known (Z-Test)</h5>
        
        <div class="module5-white-box" style="border: 3px solid #27ae60;">
          <h6 style="text-align: center; color: #27ae60; font-size: 18px;">📊 5-STEP PROCEDURE FOR ONE-TAILED Z-TESTS</h6>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 1: State the Hypotheses</h5>
          <div class="module5-error-grid">
            <div class="module5-benefits-box">
              <h6>🔽 Lower-Tail Test:</h6>
              <div class="module5-hypothesis-center">
                <strong>H₀: μ ≥ μ₀</strong><br>
                <strong>Hₐ: μ < μ₀</strong>
              </div>
              <p><em>Testing if population mean is less than hypothesized value</em></p>
            </div>
            <div class="module5-type1-box">
              <h6>🔼 Upper-Tail Test:</h6>
              <div class="module5-hypothesis-center">
                <strong>H₀: μ ≤ μ₀</strong><br>
                <strong>Hₐ: μ > μ₀</strong>
              </div>
              <p><em>Testing if population mean is greater than hypothesized value</em></p>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Specify the Level of Significance (α)</h5>
          <div class="module5-white-box">
            <p><strong>Common choices:</strong></p>
            <ul>
              <li><strong>α = 0.01</strong> (1% level) - Very strict, low probability of Type I error</li>
              <li><strong>α = 0.05</strong> (5% level) - Standard choice for most applications</li>
              <li><strong>α = 0.10</strong> (10% level) - Less strict, higher probability of Type I error</li>
            </ul>
            <p><strong>Note:</strong> Choose α based on the cost of making a Type I error in your specific context.</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Calculate the Test Statistic</h5>
          <div class="module5-formula-bordered">
            <strong>z = (x̄ - μ₀)/(σ/√n)</strong>
          </div>
          <div class="module5-white-box">
            <p><strong>Where:</strong></p>
            <ul>
              <li><strong>x̄</strong> = sample mean</li>
              <li><strong>μ₀</strong> = hypothesized population mean</li>
              <li><strong>σ</strong> = known population standard deviation</li>
              <li><strong>n</strong> = sample size</li>
            </ul>
            <p><strong>Why z-test:</strong> Because σ is known/given</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 4: Make Decision Using Either Approach</h5>
          
          <div class="module5-approach-grid">
            <div class="module5-pvalue-approach">
              <h6>📊 p-Value Approach:</h6>
              <ol>
                <li><strong>Calculate p-value:</strong>
                  <ul>
                    <li><strong>Lower-tail:</strong> p-value = P(z ≤ test statistic)</li>
                    <li><strong>Upper-tail:</strong> p-value = P(z ≥ test statistic)</li>
                  </ul>
                </li>
                <li><strong>Decision rule:</strong> Reject H₀ if p-value ≤ α</li>
              </ol>
            </div>
            
            <div class="module5-critical-approach">
              <h6>🎯 Critical Value Approach:</h6>
              <ol>
                <li><strong>Find critical value:</strong>
                  <ul>
                    <li><strong>Lower-tail:</strong> -z_α (negative value)</li>
                    <li><strong>Upper-tail:</strong> z_α (positive value)</li>
                  </ul>
                </li>
                <li><strong>Decision rule:</strong>
                  <ul>
                    <li><strong>Lower-tail:</strong> Reject H₀ if z ≤ -z_α</li>
                    <li><strong>Upper-tail:</strong> Reject H₀ if z ≥ z_α</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 5: State Conclusion</h5>
          <div class="module5-white-box">
            <p><strong>If you reject H₀:</strong></p>
            <ul>
              <li>State: "We reject the null hypothesis"</li>
              <li>Interpret: "There is sufficient evidence to conclude [alternative hypothesis in context]"</li>
              <li>Action: Recommend appropriate business/research action</li>
            </ul>
            
            <p><strong>If you fail to reject H₀:</strong></p>
            <ul>
              <li>State: "We fail to reject the null hypothesis"</li>
              <li>Interpret: "There is insufficient evidence to conclude [alternative hypothesis in context]"</li>
              <li>Action: Recommend maintaining current status or further investigation</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📋 Complete Example: Hilltop Coffee (Lower-Tail Test)</h3>

      <div class="module5-example-box" style="border: 2px solid #e74c3c;">
        <h4>☕ Applying the 5-Step Procedure</h4>
        
        <div class="module5-step-box">
          <h5>📋 Step 1: State the Hypotheses</h5>
          <div class="module5-hypothesis-center">
            <strong>H₀: μ ≥ 3</strong> (Hilltop's claim is correct)<br>
            <strong>Hₐ: μ < 3</strong> (Hilltop's claim is incorrect)
          </div>
          <p><strong>Type:</strong> Lower-tail test (testing if mean is less than 3 pounds)</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Specify the Level of Significance</h5>
          <div class="module5-alpha-highlight">
            <strong>α = 0.01</strong> (1% level of significance)
          </div>
          <p><strong>Reasoning:</strong> FTC wants to be very confident before taking action against Hilltop</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Calculate the Test Statistic</h5>
          <div class="module5-formula-bordered">
            <strong>z = (x̄ - μ₀)/(σ/√n) = (2.92 - 3)/(0.18/√36) = -0.08/0.03 = -2.67</strong>
          </div>
          <p><strong>Interpretation:</strong> Sample mean is 2.67 standard errors below the hypothesized value</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 4: Make Decision</h5>
          
          <div class="module5-approach-grid">
            <div class="module5-white-box">
              <h6>📊 p-Value Approach:</h6>
              <p><strong>p-value = P(z ≤ -2.67) = 0.0038</strong></p>
              <p><strong>Decision:</strong> Since 0.0038 < 0.01, we reject H₀</p>
            </div>
            
            <div class="module5-white-box">
              <h6>🎯 Critical Value Approach:</h6>
              <p><strong>Critical value:</strong> -z_{0.01} = -2.33</p>
              <p><strong>Decision:</strong> Since -2.67 < -2.33, we reject H₀</p>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 5: State Conclusion</h5>
          <div class="module5-decision-box">
            <p><strong>Statistical conclusion:</strong> We reject the null hypothesis.</p>
            <p><strong>Practical interpretation:</strong> There is sufficient evidence to conclude that Hilltop Coffee is underfilling cans (μ < 3 pounds).</p>
            <p><strong>Business action:</strong> The FTC should take action against Hilltop for false advertising.</p>
          </div>
        </div>
      </div>

      <h3 style="color: #17a2b8;">📋 Universal Hypothesis Testing Procedure</h3>

      <div class="module5-summary-box">
        <h5>🔄 General Steps for All Hypothesis Tests</h5>
        
        <div class="module5-white-box">
          <h6>📊 Common Steps (1-3):</h6>
          <ol>
            <li><strong>Step 1:</strong> Develop the null and alternative hypotheses</li>
            <li><strong>Step 2:</strong> Specify the level of significance</li>
            <li><strong>Step 3:</strong> Collect the sample data and compute the value of the test statistic</li>
          </ol>
        </div>

        <div class="module5-approach-grid">
          <div class="module5-pvalue-approach">
            <h6>📊 p-Value Approach (Steps 4-6):</h6>
            <ol start="4">
              <li><strong>Step 4:</strong> Use the value of the test statistic to compute the p-value</li>
              <li><strong>Step 5:</strong> Reject H₀ if the p-value ≤ α</li>
              <li><strong>Step 6:</strong> Interpret the statistical conclusion in the context of the application</li>
            </ol>
          </div>
          
          <div class="module5-critical-approach">
            <h6>🎯 Critical Value Approach (Steps 4-6):</h6>
            <ol start="4">
              <li><strong>Step 4:</strong> Use the level of significance to determine the critical value and the rejection rule</li>
              <li><strong>Step 5:</strong> Use the value of the test statistic and the rejection rule to determine whether to reject H₀</li>
              <li><strong>Step 6:</strong> Interpret the statistical conclusion in the context of the application</li>
            </ol>
          </div>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📊 Practical Advice About Sample Size</h3>

      <div class="module5-assumptions-box">
        <h5>📏 Sample Size Guidelines:</h5>
        
        <div class="module5-white-box">
          <h6>🎯 General Recommendation:</h6>
          <p><strong>In most applications, a sample size of n ≥ 30 is adequate</strong> when using the hypothesis testing procedure described in this section.</p>
        </div>

        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📊 Small Sample Size (n < 30):</h6>
            <p><strong>Population distribution becomes important:</strong></p>
            <ul>
              <li><strong>If population is normally distributed:</strong> The hypothesis testing procedure is exact and can be used for any sample size</li>
              <li><strong>If population is roughly symmetric:</strong> Sample sizes as small as 15 can provide acceptable results</li>
            </ul>
          </div>
          
          <div class="module5-type1-box">
            <h6>⚠️ Small Sample Considerations:</h6>
            <p><strong>When n < 30:</strong></p>
            <ul>
              <li>Check population distribution assumptions carefully</li>
              <li>Consider using t-distribution if σ is unknown</li>
              <li>Be cautious with highly skewed populations</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="module5-advantage-box">
        <h5>🎯 Key Advantages Comparison</h5>
        <p><strong>Both approaches always lead to the same rejection decision.</strong></p>
        <div class="module5-error-grid">
          <div class="module5-white-box">
            <h6>📊 p-Value Approach Advantages:</h6>
            <ul>
              <li>Provides exact measure of evidence against H₀</li>
              <li>Shows "how significant" the results are</li>
              <li>Allows comparison with any significance level</li>
              <li>Widely used in statistical software</li>
            </ul>
          </div>
          <div class="module5-white-box">
            <h6>🎯 Critical Value Approach Advantages:</h6>
            <ul>
              <li>Clear visual representation of rejection regions</li>
              <li>Direct comparison with test statistic</li>
              <li>Traditional approach in textbooks</li>
              <li>Intuitive decision rule</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #3498db;">🔗 Relationship Between Interval Estimation and Hypothesis Testing</h3>

      <div class="module5-concept-box" style="border: 2px solid #3498db;">
        <h4>🌉 Connection Between Chapter 8 and Chapter 9</h4>
        <p>There is a direct relationship between the confidence interval estimation methods from Chapter 8 and the hypothesis testing procedures we've learned in this chapter.</p>
        
        <div class="module5-white-box">
          <h5>📊 Recall from Chapter 8:</h5>
          <p><strong>For the σ known case, the (1 - α)% confidence interval estimate of a population mean is:</strong></p>
          <div class="module5-formula-center">
            <strong>x̄ ± z_{α/2} × (σ/√n)</strong>
          </div>
        </div>

        <div class="module5-white-box">
          <h5>📊 From This Chapter:</h5>
          <p><strong>A two-tailed hypothesis test about a population mean takes the form:</strong></p>
          <div class="module5-hypothesis-center">
            <strong>H₀: μ = μ₀</strong><br>
            <strong>Hₐ: μ ≠ μ₀</strong>
          </div>
          <p>where μ₀ is the hypothesized value for the population mean.</p>
        </div>
      </div>

      <h4 style="color: #17a2b8;">🎯 Confidence Interval Approach to Hypothesis Testing</h4>

      <div class="module5-pvalue-box" style="border: 2px solid #17a2b8;">
        <div class="module5-white-box" style="border: 2px solid #17a2b8;">
          <h5 style="text-align: center; color: #17a2b8;">CONFIDENCE INTERVAL APPROACH TO TESTING</h5>
          <p style="text-align: center; font-size: 16px; font-weight: bold;">
            A hypothesis of the form H₀: μ = μ₀ vs Hₐ: μ ≠ μ₀
          </p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Procedure:</h5>
          <ol>
            <li><strong>Select a simple random sample</strong> from the population and use the value of the sample mean x̄ to develop the confidence interval for the population mean μ</li>
            <li><strong>Calculate the confidence interval:</strong> x̄ ± z_{α/2} × (σ/√n)</li>
            <li><strong>Decision Rule:</strong>
              <ul>
                            <li><strong>If the confidence interval contains μ₀:</strong> Fail to reject H₀</li>
            <li><strong>If the confidence interval does not contain μ₀:</strong> Reject H₀</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="module5-notation-box">
          <h5>🔍 Statistical Logic:</h5>
          <p><strong>Key insight:</strong> If we construct a 100(1 - α)% confidence interval:</p>
          <ul>
            <li><strong>100(1 - α)%</strong> of confidence intervals will contain the true population mean</li>
            <li><strong>100α%</strong> of confidence intervals will NOT contain the true population mean</li>
            <li><strong>Therefore:</strong> Rejecting H₀ when the interval doesn't contain μ₀ gives us a probability α of rejecting a true null hypothesis</li>
          </ul>
          <p><strong>This is equivalent to conducting a two-tailed hypothesis test with α as the level of significance!</strong></p>
        </div>
      </div>

      <h4 style="color: #f39c12;">⚽ MaxFlight Example Using Confidence Interval Approach</h4>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <div class="module5-white-box">
          <h5>🏌️ Given Information:</h5>
          <ul>
            <li><strong>Hypotheses:</strong> H₀: μ = 295 vs Hₐ: μ ≠ 295</li>
            <li><strong>Significance level:</strong> α = 0.05</li>
            <li><strong>Sample size:</strong> n = 50 golf balls</li>
            <li><strong>Sample mean:</strong> x̄ = 297.6 yards</li>
            <li><strong>Population standard deviation:</strong> σ = 12 (known)</li>
          </ul>
        </div>

        <div class="module5-calculation-box">
          <h5>📊 Step 1: Calculate 95% Confidence Interval</h5>
          <p><strong>For α = 0.05, we need z_{0.025} = 1.96</strong></p>
          
          <div class="module5-calc-step">
            <h6>Confidence Interval Formula:</h6>
            <p>x̄ ± z_{α/2} × (σ/√n)</p>
            <p>= 297.6 ± 1.96 × (12/√50)</p>
            <p>= 297.6 ± 1.96 × 1.7</p>
            <p>= 297.6 ± 3.3</p>
          </div>
          
          <div class="module5-formula-bordered">
            <strong>95% Confidence Interval: 294.3 to 300.9 yards</strong>
          </div>
        </div>

        <div class="module5-decision-box">
          <h5>📋 Step 2: Make Decision</h5>
          <p><strong>Question:</strong> Does the confidence interval contain the hypothesized value μ₀ = 295?</p>
          
          <div class="module5-calc-step">
            <p><strong>Confidence interval:</strong> [294.3, 300.9]</p>
            <p><strong>Hypothesized value:</strong> μ₀ = 295</p>
            <p><strong>Check:</strong> 294.3 ≤ 295 ≤ 300.9 ✓</p>
          </div>
          
          <p><strong>Decision:</strong> Since μ₀ = 295 IS contained in the confidence interval, we <strong>fail to reject H₀</strong></p>
          <p><strong>Conclusion:</strong> We fail to reject the null hypothesis. The sample evidence is not strong enough to conclude that the manufacturing process is out of adjustment.</p>
        </div>

        <div class="module5-interpretation-box">
          <h5>💡 Managerial Interpretation:</h5>
          <p>The quality control manager can conclude with <strong>95% confidence</strong> that the mean distance for the population of golf balls is between <strong>294.3 and 300.9 yards</strong>.</p>
          <p>Since the target value of 295 yards falls within this range, there is insufficient evidence to conclude that the process needs adjustment.</p>
        </div>
      </div>

      <h4 style="color: #6f42c1;">📊 Consistency Check: Three Approaches Give Same Result</h4>

      <div class="module5-summary-box" style="border: 2px solid #6f42c1;">
        <h5>✅ MaxFlight Results Comparison:</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Approach</strong></th>
                <th><strong>Decision Rule</strong></th>
                <th><strong>Calculation</strong></th>
                <th><strong>Decision</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">p-Value</td>
                <td>Reject if p-value ≤ α</td>
                <td>p-value = 0.1260 > 0.05</td>
                <td>Fail to reject H₀</td>
              </tr>
              <tr>
                <td class="module5-table-header">Critical Value</td>
                <td>Reject if |z| ≥ 1.96</td>
                <td>|z| = 1.53 < 1.96</td>
                <td>Fail to reject H₀</td>
              </tr>
              <tr>
                <td class="module5-table-header">Confidence Interval</td>
                <td>Reject if μ₀ ∉ CI</td>
                <td>295 ∈ [294.3, 300.9]</td>
                <td>Fail to reject H₀</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="module5-advantage-box">
          <h5>🎯 Key Insight:</h5>
          <p><strong>All three approaches lead to the same conclusion!</strong> This demonstrates the fundamental consistency of statistical inference methods.</p>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📈 Notes and Comments: Interpreting p-Values</h3>

      <div class="module5-interpretation-box" style="border: 2px solid #e74c3c;">
        <h4>🔍 Guidelines for Interpreting p-Values</h4>
        <p>We have shown how to use p-values. The <strong>smaller the p-value</strong>, the greater the evidence against H₀ and the more evidence in favor of Hₐ.</p>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>p-Value Range</strong></th>
                <th><strong>Evidence Level</strong></th>
                <th><strong>Interpretation</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr class="module5-table-type1">
                <td><strong>Less than 0.01</strong></td>
                <td><strong>Overwhelming Evidence</strong></td>
                <td>Very strong evidence to conclude Hₐ is true</td>
              </tr>
              <tr class="module5-table-type2">
                <td><strong>Between 0.01 and 0.05</strong></td>
                <td><strong>Strong Evidence</strong></td>
                <td>Strong evidence to conclude Hₐ is true</td>
              </tr>
              <tr>
                <td><strong>Between 0.05 and 0.10</strong></td>
                <td><strong>Weak Evidence</strong></td>
                <td>Weak evidence to conclude Hₐ is true</td>
              </tr>
              <tr class="module5-table-correct">
                <td><strong>Greater than 0.10</strong></td>
                <td><strong>Insufficient Evidence</strong></td>
                <td>Insufficient evidence to conclude Hₐ is true</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="module5-white-box">
          <h5>📊 MaxFlight p-Value Interpretation:</h5>
          <p><strong>Our p-value = 0.1260</strong> falls in the <strong>"Greater than 0.10"</strong> category</p>
          <p><strong>Conclusion:</strong> There is <strong>insufficient evidence</strong> to conclude that the golf ball manufacturing process is out of adjustment (μ ≠ 295).</p>
          <p><strong>Business decision:</strong> Continue production without process adjustment.</p>
        </div>
      </div>

      <h4 style="color: #27ae60;">🔗 Extension to Other Tests</h4>

      <div class="module5-assumptions-box">
        <div class="module5-white-box">
          <h5>📋 Important Notes:</h5>
          <ul>
            <li><strong>This discussion applies to two-tailed hypothesis tests</strong> about a population mean</li>
            <li><strong>The same confidence interval and hypothesis testing relationship exists for other population parameters</strong> (proportions, variances, etc.)</li>
            <li><strong>Extension to one-tailed tests</strong> is possible but requires one-sided confidence intervals, which are rarely used in practice</li>
            <li><strong>Footnote:</strong> To be consistent with rejecting H₀ when p-value ≤ α, we also reject H₀ if μ₀ equals exactly one of the confidence interval endpoints</li>
          </ul>
        </div>
      </div>

      <div class="module5-assumptions-box">
        <h5>📝 Critical Decision Rule: σ Known vs Unknown</h5>
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ σ Known → Use Z-Test</h6>
            <ul>
              <li><strong>When to use:</strong> Population standard deviation is given or well-established</li>
              <li><strong>Test statistic:</strong> z = (x̄ - μ₀)/(σ/√n)</li>
              <li><strong>Distribution:</strong> Standard normal (z-distribution)</li>
              <li><strong>Critical values:</strong> z_α, z_{α/2} from z-table</li>
              <li><strong>This entire section covers z-tests!</strong></li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>🔄 σ Unknown → Use t-Test</h6>
            <ul>
              <li><strong>When to use:</strong> Population standard deviation is unknown</li>
              <li><strong>Test statistic:</strong> t = (x̄ - μ₀)/(s/√n)</li>
              <li><strong>Distribution:</strong> t-distribution with (n-1) degrees of freedom</li>
              <li><strong>Critical values:</strong> t_α, t_{α/2} from t-table</li>
              <li><strong>Covered in next section</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="module5-required-box">
        <h5>⚠️ Key Requirement for Z-Tests:</h5>
        <div class="module5-white-box" style="border: 3px solid #e74c3c;">
          <p style="text-align: center; font-size: 18px; font-weight: bold; color: #e74c3c;">
            🎯 WHENEVER σ (SIGMA) IS GIVEN → USE Z-TEST
          </p>
          <ul>
            <li><strong>σ must be known:</strong> Population standard deviation provided in problem</li>
            <li><strong>Historical data available:</strong> Previous studies establish reliable σ estimate</li>
            <li><strong>Random sampling:</strong> Sample must be randomly selected from population</li>
            <li><strong>Independence:</strong> Sample observations must be independent</li>
            <li><strong>Normality:</strong> Population normally distributed (exact) OR large sample (approximate)</li>
          </ul>
        </div>
      </div>
    </div>
  `
};

const MODULE5_P_VALUE_NOTES = {
  pValueApproach: `
    <div class="module5-container">
      <h2 class="module5-header" style="border-bottom-color: #9b59b6;">
        📈 p-Value Approach to Hypothesis Testing
      </h2>
      
      <div class="module5-intro-gradient-purple">
        <h3>🎯 What is a p-Value?</h3>
        <p><strong>Definition:</strong> The p-value is the probability of observing a test statistic as extreme or more extreme than the one calculated, assuming the null hypothesis is true.</p>
        <p><strong>Objective 5.6:</strong> Determine p-value of hypothesis testing for given business scenarios with at least 80% accuracy.</p>
      </div>

      <div class="module5-concept-box">
        <h4>🔍 p-Value Interpretation</h4>
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h5>Small p-value (< α)</h5>
            <ul>
              <li>Strong evidence against H₀</li>
              <li>Reject the null hypothesis</li>
              <li>Results are statistically significant</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h5>Large p-value (≥ α)</h5>
            <ul>
              <li>Weak evidence against H₀</li>
              <li>Fail to reject null hypothesis</li>
              <li>Results are not statistically significant</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #9b59b6;">📊 Calculating p-Values</h3>

      <div class="module5-method-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
        <div class="module5-lower-tail">
          <h5 style="color: #3498db; text-align: center;">Left-Tailed Test</h5>
          <div class="module5-hypothesis-text">
            <strong>Hₐ: μ < μ₀</strong>
          </div>
          <p><strong>p-value = P(Z ≤ z) or P(T ≤ t)</strong></p>
          <p>Area to the left of test statistic</p>
        </div>

        <div class="module5-upper-tail">
          <h5 style="color: #e74c3c; text-align: center;">Right-Tailed Test</h5>
          <div class="module5-hypothesis-text">
            <strong>Hₐ: μ > μ₀</strong>
          </div>
          <p><strong>p-value = P(Z ≥ z) or P(T ≥ t)</strong></p>
          <p>Area to the right of test statistic</p>
        </div>

        <div class="module5-white-box" style="border: 2px solid #f39c12;">
          <h5 style="color: #f39c12; text-align: center;">Two-Tailed Test</h5>
          <div class="module5-hypothesis-text">
            <strong>Hₐ: μ ≠ μ₀</strong>
          </div>
          <p><strong>p-value = 2 × P(Z ≥ |z|) or 2 × P(T ≥ |t|)</strong></p>
          <p>Two times the tail area</p>
        </div>
      </div>

      <h4 style="color: #e74c3c;">📋 p-Value Decision Rule</h4>
      <div class="module5-table-container">
        <div class="module5-decision-rule" style="font-size: 18px; margin: 15px 0;">
          <strong>If p-value ≤ α: Reject H₀</strong><br>
          <strong>If p-value > α: Fail to reject H₀</strong>
        </div>
      </div>

      <h4 style="color: #27ae60;">📈 Complete p-Value Example</h4>

      <div class="module5-example-box" style="border: 2px solid #28a745;">
        <h5>🏭 Example: Quality Control (p-Value Approach)</h5>
        <p>Using the same manufacturing example from the previous section:</p>
        
        <div class="module5-white-box">
          <ul>
            <li>H₀: μ = 10.0, Hₐ: μ ≠ 10.0 (two-tailed test)</li>
            <li>Test statistic: z = -1.50</li>
            <li>Significance level: α = 0.05</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h6>Calculate p-Value:</h6>
          <p>For two-tailed test: <strong>p-value = 2 × P(Z ≥ |z|)</strong></p>
          <p><strong>p-value = 2 × P(Z ≥ 1.50)</strong></p>
          <p><strong>p-value = 2 × (1 - 0.9332)</strong></p>
          <p><strong>p-value = 2 × 0.0668 = 0.1336</strong></p>
        </div>

        <div class="module5-decision-box">
          <h6>Decision:</h6>
          <p><strong>p-value = 0.1336 > α = 0.05</strong></p>
          <p><strong>Decision: Fail to reject H₀</strong></p>
          <p><strong>Conclusion:</strong> Same as critical value approach - insufficient evidence to conclude the process needs adjustment.</p>
        </div>
      </div>

      <div class="module5-observed-box" style="border: 1px solid #ffc107;">
        <h5>💡 Advantages of p-Value Approach:</h5>
        <ul>
          <li><strong>Provides exact measure of evidence against H₀</strong></li>
          <li><strong>Allows comparison with any significance level</strong></li>
          <li><strong>Widely used in statistical software</strong></li>
          <li><strong>Gives more information than just reject/fail to reject</strong></li>
        </ul>
      </div>

      <h3 style="color: #2c3e50;">💻 Using Excel for Exact p-Values and t-Values</h3>

      <div class="module5-concept-box">
        <h4>📊 Excel Functions for Hypothesis Testing</h4>
        <p>Excel provides powerful built-in functions to calculate exact p-values and critical t-values, eliminating the need for statistical tables and providing more precise results.</p>
      </div>

      <h4 style="color: #3498db;">🧮 Excel Functions for p-Values</h4>

      <div class="module5-summary-box">
        <h5>📊 p-Value Calculation Functions</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📈 Z-Test p-Values (σ known):</h6>
            <div class="module5-formula-bordered">
              <strong>=NORM.S.DIST(z, TRUE)</strong>
            </div>
            <p><strong>Returns:</strong> P(Z ≤ z) - cumulative probability</p>
            <p><strong>For upper tail:</strong> =1-NORM.S.DIST(z, TRUE)</p>
            <p><strong>For two-tailed:</strong> =2*(1-NORM.S.DIST(ABS(z), TRUE))</p>
          </div>
          <div class="module5-type1-box">
            <h6>📈 T-Test p-Values (σ unknown):</h6>
            <div class="module5-formula-bordered">
              <strong>=T.DIST(t, df, TRUE)</strong>
            </div>
            <p><strong>Returns:</strong> P(T ≤ t) - cumulative probability</p>
            <p><strong>For upper tail:</strong> =T.DIST.RT(t, df)</p>
            <p><strong>For two-tailed:</strong> =T.DIST.2T(ABS(t), df)</p>
          </div>
        </div>
      </div>

      <h4 style="color: #e74c3c;">🎯 Excel Functions for Critical Values</h4>

      <div class="module5-summary-box">
        <h5>📊 Critical Value Functions</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📈 Z Critical Values:</h6>
            <div class="module5-formula-bordered">
              <strong>=NORM.S.INV(1-α)</strong>
            </div>
            <p><strong>Upper tail:</strong> =NORM.S.INV(1-α)</p>
            <p><strong>Lower tail:</strong> =NORM.S.INV(α)</p>
            <p><strong>Two-tailed:</strong> =NORM.S.INV(1-α/2)</p>
          </div>
          <div class="module5-type1-box">
            <h6>📈 T Critical Values:</h6>
            <div class="module5-formula-bordered">
              <strong>=T.INV(1-α, df)</strong>
            </div>
            <p><strong>Upper tail:</strong> =T.INV(1-α, df)</p>
            <p><strong>Lower tail:</strong> =T.INV(α, df)</p>
            <p><strong>Two-tailed:</strong> =T.INV(1-α/2, df)</p>
          </div>
        </div>
      </div>

      <h3 style="color: #f39c12;">📊 Step-by-Step Excel Examples</h3>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h4>🔋 Example 1: Battery Life Z-Test (σ known)</h4>
        <p>Using the battery quality control example with z = 2.50 for an upper-tail test.</p>
        
        <div class="module5-step-box">
          <h5>📋 Step 1: Calculate p-value</h5>
          <div class="module5-white-box">
            <p><strong>Excel formula:</strong> =1-NORM.S.DIST(2.50, TRUE)</p>
            <p><strong>Result:</strong> 0.0062</p>
            <p><strong>Interpretation:</strong> p-value = 0.0062 < α = 0.05, so reject H₀</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Find critical value</h5>
          <div class="module5-white-box">
            <p><strong>Excel formula:</strong> =NORM.S.INV(1-0.05)</p>
            <p><strong>Result:</strong> 1.645</p>
            <p><strong>Decision rule:</strong> Reject H₀ if z ≥ 1.645</p>
          </div>
        </div>
      </div>

      <div class="module5-example-box" style="border: 2px solid #9b59b6;">
        <h4>🎁 Example 2: Holiday Toys T-Test (σ unknown)</h4>
        <p>Using the Holiday Toys example with t = -1.10, df = 24 for a two-tailed test.</p>
        
        <div class="module5-step-box">
          <h5>📋 Step 1: Calculate p-value</h5>
          <div class="module5-white-box">
            <p><strong>Excel formula:</strong> =T.DIST.2T(ABS(-1.10), 24)</p>
            <p><strong>Result:</strong> 0.2822</p>
            <p><strong>Interpretation:</strong> p-value = 0.2822 > α = 0.05, so fail to reject H₀</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Find critical values</h5>
          <div class="module5-white-box">
            <p><strong>Excel formula:</strong> =T.INV(1-0.05/2, 24)</p>
            <p><strong>Result:</strong> ±2.064</p>
            <p><strong>Decision rule:</strong> Reject H₀ if |t| ≥ 2.064</p>
          </div>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 Excel Function Reference Table</h3>

      <div class="module5-summary-box">
        <h5>🎯 Complete Excel Function Guide</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Purpose</strong></th>
                <th><strong>Function</strong></th>
                <th><strong>Syntax</strong></th>
                <th><strong>Example</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Z p-value (lower tail)</td>
                <td>NORM.S.DIST</td>
                <td>=NORM.S.DIST(z, TRUE)</td>
                <td>=NORM.S.DIST(-1.5, TRUE)</td>
              </tr>
              <tr>
                <td class="module5-table-header">Z p-value (upper tail)</td>
                <td>NORM.S.DIST</td>
                <td>=1-NORM.S.DIST(z, TRUE)</td>
                <td>=1-NORM.S.DIST(1.5, TRUE)</td>
              </tr>
              <tr>
                <td class="module5-table-header">Z p-value (two-tailed)</td>
                <td>NORM.S.DIST</td>
                <td>=2*(1-NORM.S.DIST(ABS(z), TRUE))</td>
                <td>=2*(1-NORM.S.DIST(ABS(1.5), TRUE))</td>
              </tr>
              <tr>
                <td class="module5-table-header">T p-value (lower tail)</td>
                <td>T.DIST</td>
                <td>=T.DIST(t, df, TRUE)</td>
                <td>=T.DIST(-1.5, 20, TRUE)</td>
              </tr>
              <tr>
                <td class="module5-table-header">T p-value (upper tail)</td>
                <td>T.DIST.RT</td>
                <td>=T.DIST.RT(t, df)</td>
                <td>=T.DIST.RT(1.5, 20)</td>
              </tr>
              <tr>
                <td class="module5-table-header">T p-value (two-tailed)</td>
                <td>T.DIST.2T</td>
                <td>=T.DIST.2T(ABS(t), df)</td>
                <td>=T.DIST.2T(ABS(1.5), 20)</td>
              </tr>
              <tr>
                <td class="module5-table-header">Z critical value (upper)</td>
                <td>NORM.S.INV</td>
                <td>=NORM.S.INV(1-α)</td>
                <td>=NORM.S.INV(1-0.05)</td>
              </tr>
              <tr>
                <td class="module5-table-header">T critical value (upper)</td>
                <td>T.INV</td>
                <td>=T.INV(1-α, df)</td>
                <td>=T.INV(1-0.05, 20)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #e74c3c;">💡 Excel Tips and Best Practices</h3>

      <div class="module5-summary-box">
        <h5>🎯 Using Excel Effectively for Hypothesis Testing</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ Advantages of Excel:</h6>
            <ul>
              <li><strong>Exact values:</strong> No interpolation needed</li>
              <li><strong>High precision:</strong> More accurate than tables</li>
              <li><strong>Efficiency:</strong> Quick calculations</li>
              <li><strong>Documentation:</strong> Formulas visible in cells</li>
              <li><strong>Reproducibility:</strong> Easy to verify calculations</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>⚠️ Common Mistakes:</h6>
            <ul>
              <li><strong>Wrong function:</strong> Using NORM.DIST instead of NORM.S.DIST</li>
              <li><strong>Incorrect tail:</strong> Using lower tail for upper tail test</li>
              <li><strong>Missing ABS():</strong> For two-tailed tests</li>
              <li><strong>Wrong degrees of freedom:</strong> Using n instead of n-1</li>
              <li><strong>Sign errors:</strong> Confusing positive/negative critical values</li>
            </ul>
          </div>
        </div>
      </div>

      <h4 style="color: #9b59b6;">📊 Excel vs Statistical Tables</h4>

      <div class="module5-summary-box">
        <h5>🎯 Comparison of Methods</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Aspect</strong></th>
                <th><strong>Excel Functions</strong></th>
                <th><strong>Statistical Tables</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Precision</td>
                <td>Exact values (high precision)</td>
                <td>Approximate (limited precision)</td>
              </tr>
              <tr>
                <td class="module5-table-header">Speed</td>
                <td>Instant calculation</td>
                <td>Manual lookup required</td>
              </tr>
              <tr>
                <td class="module5-table-header">Interpolation</td>
                <td>Not needed</td>
                <td>Often required</td>
              </tr>
              <tr>
                <td class="module5-table-header">Availability</td>
                <td>Requires Excel/software</td>
                <td>Always available</td>
              </tr>
              <tr>
                <td class="module5-table-header">Documentation</td>
                <td>Formulas visible</td>
                <td>Manual notes needed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Excel Function Memory Aids:</h5>
        <ul>
          <li><strong>NORM.S.DIST:</strong> Standard Normal Distribution (S for Standard)</li>
          <li><strong>T.DIST.RT:</strong> T Distribution Right Tail (RT for Right Tail)</li>
          <li><strong>T.DIST.2T:</strong> T Distribution Two Tails (2T for Two Tails)</li>
          <li><strong>NORM.S.INV:</strong> Standard Normal Inverse (INV for Inverse)</li>
          <li><strong>T.INV:</strong> T Distribution Inverse (INV for Inverse)</li>
        </ul>
      </div>
    </div>
  `
};

const MODULE5_TYPE_I_TYPE_II_NOTES = {
  typeITypeII: `
    <div class="module5-container">
      <h2 class="module5-header">
        ⚠️ Type I & Type II Errors & Decision Making
      </h2>
      
      <div class="module5-intro-gradient-red">
        <h3>📊 Chapter 9.3 & 9.7: Understanding Hypothesis Testing Errors & Decision Making</h3>
        <p>In hypothesis testing, we make decisions based on sample data, but these decisions are not always correct. Understanding the types of errors we can make and how to control them is crucial for proper interpretation and decision making.</p>
      </div>

      <div class="module5-concept-box">
        <h4>🎯 The Two Types of Errors in Hypothesis Testing</h4>
        <div class="module5-error-grid">
          <div class="module5-type1-box">
            <h6>❌ Type I Error (α):</h6>
            <ul>
              <li><strong>Definition:</strong> Rejecting H₀ when H₀ is true</li>
              <li><strong>Probability:</strong> α (level of significance)</li>
              <li><strong>Control:</strong> We control this probability</li>
              <li><strong>Example:</strong> Concluding a drug is effective when it's not</li>
            </ul>
          </div>
          <div class="module5-type2-box">
            <h6>❌ Type II Error (β):</h6>
            <ul>
              <li><strong>Definition:</strong> Failing to reject H₀ when H₀ is false</li>
              <li><strong>Probability:</strong> β (not directly controlled)</li>
              <li><strong>Control:</strong> Difficult to control directly</li>
              <li><strong>Example:</strong> Concluding a drug is not effective when it is</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📊 Decision Matrix</h3>

      <div class="module5-summary-box">
        <h5>🎯 Hypothesis Testing Decision Matrix</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Decision</strong></th>
                <th><strong>H₀ is True</strong></th>
                <th><strong>H₀ is False</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Reject H₀</td>
                <td class="module5-type1-cell">
                  <strong>Type I Error</strong><br>
                  <em>Probability = α</em>
                </td>
                <td class="module5-correct-cell">
                  <strong>Correct Decision</strong><br>
                  <em>Probability = 1 - β (Power)</em>
                </td>
              </tr>
              <tr>
                <td class="module5-table-header">Fail to Reject H₀</td>
                <td class="module5-correct-cell">
                  <strong>Correct Decision</strong><br>
                  <em>Probability = 1 - α</em>
                </td>
                <td class="module5-type2-cell">
                  <strong>Type II Error</strong><br>
                  <em>Probability = β</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #f39c12;">💡 Practical Implications</h3>

      <div class="module5-summary-box">
        <h5>🎯 Why Understanding Errors Matters</h5>
        
        <div class="module5-white-box">
          <h6>📊 Type I Error (α) - False Positive:</h6>
          <ul>
            <li><strong>Medical testing:</strong> False positive diagnosis</li>
            <li><strong>Quality control:</strong> Rejecting good products</li>
            <li><strong>Legal system:</strong> Convicting innocent person</li>
            <li><strong>Business:</strong> Investing in ineffective strategy</li>
          </ul>
        </div>

        <div class="module5-white-box">
          <h6>📊 Type II Error (β) - False Negative:</h6>
          <ul>
            <li><strong>Medical testing:</strong> Missing actual disease</li>
            <li><strong>Quality control:</strong> Accepting defective products</li>
            <li><strong>Legal system:</strong> Acquitting guilty person</li>
            <li><strong>Business:</strong> Missing profitable opportunity</li>
          </ul>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>🔍 Key Relationships:</h5>
        <ul>
          <li><strong>Power:</strong> 1 - β (probability of correctly rejecting H₀ when it's false)</li>
          <li><strong>Confidence level:</strong> 1 - α (probability of correctly failing to reject H₀ when it's true)</li>
          <li><strong>Trade-off:</strong> Decreasing α typically increases β (and vice versa)</li>
          <li><strong>Sample size:</strong> Increasing n can reduce both α and β</li>
        </ul>
      </div>

      <h3 style="color: #3498db;">🎯 Hypothesis Testing and Decision Making</h3>

      <div class="module5-concept-box">
        <h4>📊 Significance Tests vs Decision-Making Tests</h4>
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📈 Significance Tests:</h6>
            <ul>
              <li><strong>Purpose:</strong> Determine statistical significance</li>
              <li><strong>Control:</strong> Only Type I error (α)</li>
              <li><strong>Conclusion:</strong> "Reject H₀" or "Fail to reject H₀"</li>
              <li><strong>Action:</strong> Inconclusive evidence - postpone decision</li>
              <li><strong>Risk:</strong> Type II error not controlled</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>🎯 Decision-Making Tests:</h6>
            <ul>
              <li><strong>Purpose:</strong> Make actionable decisions</li>
              <li><strong>Control:</strong> Both Type I and Type II errors</li>
              <li><strong>Conclusion:</strong> "Accept H₀" or "Reject H₀"</li>
              <li><strong>Action:</strong> Take action based on conclusion</li>
              <li><strong>Risk:</strong> Both error types controlled</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #9b59b6;">🔋 Lot-Acceptance Sampling Example</h3>

      <div class="module5-example-box" style="border: 2px solid #9b59b6;">
        <h4>🏭 Quality Control Decision Making</h4>
        <p>A quality control manager must decide to accept a shipment of batteries from a supplier or to return the shipment because of poor quality. Design specifications require batteries to have a mean useful life of at least 120 hours.</p>
        
        <div class="module5-white-box">
          <h5>📊 Study Parameters:</h5>
          <ul>
            <li><strong>Sample size:</strong> n = 36 batteries</li>
            <li><strong>Population standard deviation:</strong> σ = 12 hours</li>
            <li><strong>Level of significance:</strong> α = 0.05</li>
            <li><strong>Hypothesized mean:</strong> μ₀ = 120 hours</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 1: State the Hypotheses</h5>
          <div class="module5-hypothesis-center">
            <strong>H₀: μ ≥ 120</strong> (Batteries meet specifications)<br>
            <strong>Hₐ: μ < 120</strong> (Batteries are defective)
          </div>
          <p><strong>Type:</strong> Lower-tail test (testing if mean life is less than 120 hours)</p>
          <p><strong>Decision rule:</strong> Accept shipment if H₀ not rejected, return if H₀ rejected</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Determine Critical Value and Rejection Rule</h5>
          <div class="module5-white-box">
            <p><strong>Test statistic:</strong> z = (x̄ - μ₀)/(σ/√n)</p>
            <p><strong>Critical value:</strong> z_{0.05} = -1.645 (lower-tail test)</p>
            <p><strong>Rejection rule:</strong> Reject H₀ if z ≤ -1.645</p>
            <div class="module5-formula-bordered">
              <strong>Reject H₀ if (x̄ - 120)/(12/√36) ≤ -1.645</strong><br>
              <strong>Reject H₀ if x̄ ≤ 120 - 1.645 × (12/6)</strong><br>
              <strong>Reject H₀ if x̄ ≤ 120 - 3.29</strong><br>
              <strong>Reject H₀ if x̄ ≤ 116.71</strong>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Define Acceptance Region</h5>
          <div class="module5-decision-box">
            <p><strong>Acceptance region:</strong> x̄ > 116.71</p>
            <p><strong>Rejection region:</strong> x̄ ≤ 116.71</p>
            <p><strong>Decision:</strong> Accept shipment if sample mean > 116.71, return if ≤ 116.71</p>
          </div>
        </div>
      </div>

      <h3 style="color: #e74c3c;">🧮 Calculating Type II Error Probability</h3>

      <div class="module5-concept-box">
        <h4>📊 Step-by-Step Procedure for Type II Error Calculation</h4>
        <div class="module5-white-box">
          <ol>
            <li><strong>Formulate</strong> the null and alternative hypotheses</li>
            <li><strong>Use α and critical value approach</strong> to determine rejection rule</li>
            <li><strong>Solve for sample mean</strong> corresponding to critical value</li>
            <li><strong>Define acceptance region</strong> for H₀</li>
            <li><strong>Calculate probability</strong> of sample mean in acceptance region for specific μ</li>
          </ol>
        </div>
      </div>

      <h3 style="color: #f39c12;">📊 Type II Error Calculation Example</h3>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h4>🔋 Calculating β for μ = 112 hours</h4>
        <p>Suppose the shipment is considered poor quality if batteries have a mean life of μ = 112 hours. What is the probability of accepting H₀: μ ≥ 120 when μ = 112 is true?</p>
        
        <div class="module5-step-box">
          <h5>📋 Step 1: Understand the Scenario</h5>
          <div class="module5-white-box">
            <p><strong>True population mean:</strong> μ = 112 hours (poor quality)</p>
            <p><strong>Null hypothesis:</strong> H₀: μ ≥ 120 hours</p>
            <p><strong>Acceptance region:</strong> x̄ > 116.71</p>
            <p><strong>Type II error:</strong> Accept H₀ when μ = 112 (false acceptance)</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Calculate z-score for Acceptance Boundary</h5>
          <div class="module5-formula-bordered">
            <strong>z = (x̄ - μ)/(σ/√n)</strong><br>
            <strong>z = (116.71 - 112)/(12/√36)</strong><br>
            <strong>z = 4.71/2 = 2.36</strong>
          </div>
          <p><strong>Interpretation:</strong> 116.71 is 2.36 standard errors above μ = 112</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Calculate Type II Error Probability</h5>
          <div class="module5-white-box">
            <p><strong>Type II error:</strong> P(Accept H₀ | μ = 112) = P(x̄ > 116.71 | μ = 112)</p>
            <p><strong>Using z-table:</strong> P(z > 2.36) = 1 - P(z ≤ 2.36) = 1 - 0.9909 = 0.0091</p>
            <div class="module5-decision-box">
              <p><strong>β = 0.0091</strong> when μ = 112</p>
              <p><strong>Power = 1 - β = 0.9909</strong> (99.09% chance of correctly rejecting H₀)</p>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 4: Calculate for μ = 115 hours</h5>
          <div class="module5-white-box">
            <p><strong>z = (116.71 - 115)/(12/√36) = 1.71/2 = 0.86</strong></p>
            <p><strong>β = P(z > 0.86) = 1 - 0.8051 = 0.1949</strong></p>
            <div class="module5-decision-box">
              <p><strong>β = 0.1949</strong> when μ = 115</p>
              <p><strong>Power = 1 - β = 0.8051</strong> (80.51% chance of correctly rejecting H₀)</p>
            </div>
          </div>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 Table 9.5: Type II Error Probabilities</h3>

      <div class="module5-summary-box">
        <h5>📊 Complete Type II Error Analysis for Lot-Acceptance Test</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Value of μ</strong></th>
                <th><strong>z = (116.71 - μ)/(12/√36)</strong></th>
                <th><strong>Type II Error (β)</strong></th>
                <th><strong>Power (1 - β)</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>112</td>
                <td>2.36</td>
                <td>0.0091</td>
                <td>0.9909</td>
              </tr>
              <tr>
                <td>114</td>
                <td>1.36</td>
                <td>0.0869</td>
                <td>0.9131</td>
              </tr>
              <tr>
                <td>115</td>
                <td>0.86</td>
                <td>0.1949</td>
                <td>0.8051</td>
              </tr>
              <tr>
                <td>116.71</td>
                <td>0.00</td>
                <td>0.5000</td>
                <td>0.5000</td>
              </tr>
              <tr>
                <td>117</td>
                <td>-0.15</td>
                <td>0.5596</td>
                <td>0.4404</td>
              </tr>
              <tr>
                <td>118</td>
                <td>-0.65</td>
                <td>0.7422</td>
                <td>0.2578</td>
              </tr>
              <tr>
                <td>119.999</td>
                <td>-1.645</td>
                <td>0.9500</td>
                <td>0.0500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #9b59b6;">📈 Power Curve Analysis</h3>

      <div class="module5-summary-box">
        <h5>🎯 Understanding the Power Curve</h5>
        
        <div class="module5-white-box">
          <h6>📊 Key Observations:</h6>
          <ul>
            <li><strong>Power increases</strong> as μ decreases below 120 (farther from H₀)</li>
            <li><strong>Power decreases</strong> as μ approaches 120 (closer to H₀)</li>
            <li><strong>Maximum power</strong> when μ is far below 120 (β ≈ 0)</li>
            <li><strong>Minimum power</strong> when μ ≈ 120 (β ≈ 0.95)</li>
            <li><strong>Power = 0.5</strong> when μ = 116.71 (acceptance boundary)</li>
          </ul>
        </div>

        <div class="module5-notation-box">
          <h5>💡 Practical Implications:</h5>
          <ul>
            <li><strong>Poor quality detection:</strong> High power for very poor quality (μ = 112)</li>
            <li><strong>Borderline quality:</strong> Lower power for borderline quality (μ = 115-118)</li>
            <li><strong>Sample size effect:</strong> Larger samples increase power for all μ values</li>
            <li><strong>Significance level:</strong> Lower α increases β (decreases power)</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #e74c3c;">🎯 Decision-Making Framework</h3>

      <div class="module5-summary-box">
        <h5>📊 When to Use Decision-Making vs Significance Tests</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ Use Significance Tests When:</h6>
            <ul>
              <li>Exploring relationships or effects</li>
              <li>Preliminary research or pilot studies</li>
              <li>Academic or theoretical investigations</li>
              <li>No immediate action required</li>
              <li>Want to control only Type I error</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>🎯 Use Decision-Making Tests When:</h6>
            <ul>
              <li>Action must be taken regardless of result</li>
              <li>Quality control or acceptance sampling</li>
              <li>Medical diagnosis or treatment decisions</li>
              <li>Business strategy implementation</li>
              <li>Need to control both error types</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>🔍 Best Practices for Decision-Making Tests:</h5>
        <ul>
          <li><strong>Specify both α and β:</strong> Control both error probabilities</li>
          <li><strong>Calculate power:</strong> Understand ability to detect effects</li>
          <li><strong>Consider sample size:</strong> Larger samples increase power</li>
          <li><strong>Define effect size:</strong> Specify meaningful difference to detect</li>
          <li><strong>Monitor performance:</strong> Track actual vs expected error rates</li>
        </ul>
      </div>

      <h3 style="color: #2c3e50;">📊 Sample Size Determination for Hypothesis Tests</h3>

      <div class="module5-concept-box">
        <h4>🎯 Chapter 9.8: Determining Sample Size for Population Mean Tests</h4>
        <p>When conducting hypothesis tests, we can control both Type I and Type II error probabilities by carefully selecting the sample size. This section shows how to determine the required sample size to achieve specified levels of α and β.</p>
      </div>

      <h3 style="color: #e74c3c;">🧮 Mathematical Framework for Sample Size Determination</h3>

      <div class="module5-concept-box">
        <h4>📊 Lower Tail Test Framework</h4>
        <p>Consider a lower tail test about a population mean:</p>
        <div class="module5-hypothesis-center">
          <strong>H₀: μ ≥ μ₀</strong><br>
          <strong>Hₐ: μ < μ₀</strong>
        </div>
      </div>

      <h4 style="color: #3498db;">📈 Two Sampling Distributions</h4>

      <div class="module5-error-grid">
        <div class="module5-benefits-box">
          <h6>📊 Upper Panel: H₀ True (μ = μ₀)</h6>
          <ul>
            <li><strong>Sampling distribution:</strong> x̄ ~ N(μ₀, σ²/n)</li>
            <li><strong>Critical value:</strong> z_α (area α in upper tail)</li>
            <li><strong>Rejection boundary:</strong> c = μ₀ - z_α × (σ/√n)</li>
            <li><strong>Type I error:</strong> P(reject H₀ | H₀ true) = α</li>
          </ul>
        </div>
        <div class="module5-type1-box">
          <h6>📊 Lower Panel: Hₐ True (μ = μₐ < μ₀)</h6>
          <ul>
            <li><strong>Sampling distribution:</strong> x̄ ~ N(μₐ, σ²/n)</li>
            <li><strong>Critical value:</strong> z_β (area β in upper tail)</li>
            <li><strong>Acceptance boundary:</strong> c = μₐ + z_β × (σ/√n)</li>
            <li><strong>Type II error:</strong> P(accept H₀ | Hₐ true) = β</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #f39c12;">🧮 Deriving the Sample Size Formula</h3>

      <div class="module5-step-box">
        <h5>📋 Step 1: Set Up the Two Equations</h5>
        <div class="module5-white-box">
          <p><strong>For Type I error control:</strong></p>
          <div class="module5-formula-bordered">
            <strong>c = μ₀ - z_α × (σ/√n)</strong>
          </div>
          <p><strong>For Type II error control:</strong></p>
          <div class="module5-formula-bordered">
            <strong>c = μₐ + z_β × (σ/√n)</strong>
          </div>
        </div>
      </div>

      <div class="module5-step-box">
        <h5>📋 Step 2: Equate the Two Expressions</h5>
        <div class="module5-white-box">
          <div class="module5-formula-bordered">
            <strong>μ₀ - z_α × (σ/√n) = μₐ + z_β × (σ/√n)</strong>
          </div>
          <p><strong>Rearranging:</strong></p>
          <div class="module5-formula-bordered">
            <strong>μ₀ - μₐ = z_α × (σ/√n) + z_β × (σ/√n)</strong><br>
            <strong>μ₀ - μₐ = (z_α + z_β) × (σ/√n)</strong>
          </div>
        </div>
      </div>

      <div class="module5-step-box">
        <h5>📋 Step 3: Solve for Sample Size</h5>
        <div class="module5-white-box">
          <div class="module5-formula-bordered">
            <strong>√n = (z_α + z_β) × σ / (μ₀ - μₐ)</strong><br>
            <strong>n = [(z_α + z_β) × σ / (μ₀ - μₐ)]²</strong>
          </div>
          <p><strong>Final formula:</strong></p>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
            <strong>n = (z_α + z_β)² × σ² / (μ₀ - μₐ)²</strong>
          </div>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 Sample Size Formula Summary</h3>

      <div class="module5-summary-box">
        <h5>🎯 Complete Sample Size Formula for Hypothesis Tests</h5>
        
        <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
          <strong>n = (z_α + z_β)² × σ² / (μ₀ - μₐ)²</strong>
        </div>

        <div class="module5-white-box">
          <h6>📊 Where:</h6>
          <ul>
            <li><strong>z_α</strong> = z-value providing area α in upper tail of standard normal distribution</li>
            <li><strong>z_β</strong> = z-value providing area β in upper tail of standard normal distribution</li>
            <li><strong>σ</strong> = population standard deviation</li>
            <li><strong>μ₀</strong> = value of population mean in null hypothesis</li>
            <li><strong>μₐ</strong> = value of population mean used for Type II error calculation</li>
          </ul>
        </div>

        <div class="module5-notation-box">
          <h5>🔍 Important Notes:</h5>
          <ul>
            <li><strong>One-tailed tests:</strong> Use z_α and z_β as shown</li>
            <li><strong>Two-tailed tests:</strong> Replace z_α with z_{α/2}</li>
            <li><strong>Rounding:</strong> Always round up to the next integer</li>
            <li><strong>Effect size:</strong> |μ₀ - μₐ| represents the minimum detectable difference</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #9b59b6;">🔋 Lot-Acceptance Example: Sample Size Calculation</h3>

      <div class="module5-example-box" style="border: 2px solid #9b59b6;">
        <h4>🏭 Battery Quality Control Sample Size Determination</h4>
        <p>Returning to the lot-acceptance example, the quality control manager specifies the following error probabilities:</p>
        
        <div class="module5-white-box">
          <h5>📊 Error Probability Specifications:</h5>
          <ul>
            <li><strong>Type I error (α):</strong> 0.05 (5% risk of rejecting good shipment)</li>
            <li><strong>Type II error (β):</strong> 0.10 (10% risk of accepting poor shipment)</li>
            <li><strong>Null hypothesis:</strong> H₀: μ ≥ 120 hours</li>
            <li><strong>Alternative scenario:</strong> μₐ = 115 hours (5 hours under specification)</li>
            <li><strong>Population standard deviation:</strong> σ = 12 hours</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 1: Identify Parameters</h5>
          <div class="module5-white-box">
            <ul>
              <li><strong>α = 0.05</strong> → z_α = z_{0.05} = 1.645</li>
              <li><strong>β = 0.10</strong> → z_β = z_{0.10} = 1.28</li>
              <li><strong>μ₀ = 120</strong> hours</li>
              <li><strong>μₐ = 115</strong> hours</li>
              <li><strong>σ = 12</strong> hours</li>
            </ul>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Apply the Sample Size Formula</h5>
          <div class="module5-formula-bordered">
            <strong>n = (z_α + z_β)² × σ² / (μ₀ - μₐ)²</strong><br>
            <strong>n = (1.645 + 1.28)² × 12² / (120 - 115)²</strong><br>
            <strong>n = (2.925)² × 144 / 25</strong><br>
            <strong>n = 8.556 × 144 / 25</strong><br>
            <strong>n = 1,232.064 / 25</strong><br>
            <strong>n = 49.28</strong>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Final Recommendation</h5>
          <div class="module5-decision-box">
            <p><strong>Calculated sample size:</strong> n = 49.28</p>
            <p><strong>Rounded up:</strong> n = 50 batteries</p>
            <p><strong>Recommendation:</strong> Use a sample size of 50 batteries</p>
          </div>
        </div>

        <div class="module5-notation-box">
          <h5>💡 Interpretation:</h5>
          <ul>
            <li><strong>With n = 50:</strong> Both Type I and Type II error probabilities are controlled</li>
            <li><strong>Type I error:</strong> α = 0.05 (5% risk of rejecting good shipments)</li>
            <li><strong>Type II error:</strong> β = 0.10 (10% risk of accepting shipments with μ = 115)</li>
            <li><strong>Decision making:</strong> Manager can now use "accept H₀" and "reject H₀" statements</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📊 Key Relationships: α, β, and Sample Size</h3>

      <div class="module5-summary-box">
        <h5>🎯 Understanding the Trade-offs</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📈 Relationship 1: Three Variables</h6>
            <ul>
              <li><strong>Given any two:</strong> α, β, or n</li>
              <li><strong>Can calculate the third:</strong> Using the sample size formula</li>
              <li><strong>Practical application:</strong> Specify desired α and β, calculate required n</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>📈 Relationship 2: Sample Size Effect</h6>
            <ul>
              <li><strong>For fixed α:</strong> Increasing n decreases β</li>
              <li><strong>Larger samples:</strong> Better power to detect differences</li>
              <li><strong>Cost consideration:</strong> Balance statistical power with sampling cost</li>
            </ul>
          </div>
          <div class="module5-advantage-box">
            <h6>📈 Relationship 3: α and β Trade-off</h6>
            <ul>
              <li><strong>For fixed n:</strong> Decreasing α increases β</li>
              <li><strong>For fixed n:</strong> Increasing α decreases β</li>
              <li><strong>Practical advice:</strong> Don't choose unnecessarily small α values</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #f39c12;">⚠️ Common Mistakes and Best Practices</h3>

      <div class="module5-summary-box">
        <h5>🎯 Avoiding Pitfalls in Sample Size Determination</h5>
        
        <div class="module5-white-box">
          <h6>❌ Common Mistakes:</h6>
          <ul>
            <li><strong>Choosing α too small:</strong> Increases β for given sample size</li>
            <li><strong>Ignoring effect size:</strong> Not considering practical significance</li>
            <li><strong>Underestimating σ:</strong> Leads to insufficient sample size</li>
            <li><strong>Not rounding up:</strong> Sample size must be integer</li>
          </ul>
        </div>

        <div class="module5-white-box">
          <h6>✅ Best Practices:</h6>
          <ul>
            <li><strong>Specify both α and β:</strong> Before calculating sample size</li>
            <li><strong>Consider practical significance:</strong> Choose meaningful μₐ values</li>
            <li><strong>Use conservative σ estimates:</strong> When population σ is unknown</li>
            <li><strong>Balance cost and power:</strong> Consider sampling costs vs. error risks</li>
            <li><strong>Document assumptions:</strong> Clearly state all parameter choices</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 Two-Tailed Test Modification</h3>

      <div class="module5-summary-box">
        <h5>🎯 Adapting the Formula for Two-Tailed Tests</h5>
        
        <div class="module5-white-box">
          <h6>📊 Two-Tailed Test Formula:</h6>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
            <strong>n = (z_{α/2} + z_β)² × σ² / (μ₀ - μₐ)²</strong>
          </div>
          <p><strong>Key difference:</strong> Use z_{α/2} instead of z_α</p>
        </div>

        <div class="module5-notation-box">
          <h5>🔍 Example: Two-Tailed Test</h5>
          <ul>
            <li><strong>Hypotheses:</strong> H₀: μ = 100 vs Hₐ: μ ≠ 100</li>
            <li><strong>α = 0.05:</strong> z_{α/2} = z_{0.025} = 1.96</li>
            <li><strong>β = 0.10:</strong> z_β = z_{0.10} = 1.28</li>
            <li><strong>Effect size:</strong> |μ₀ - μₐ| = |100 - μₐ|</li>
          </ul>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Practical Applications:</h5>
        <ul>
          <li><strong>Quality control:</strong> Determine sample size for acceptance sampling</li>
          <li><strong>Clinical trials:</strong> Calculate sample size for drug efficacy studies</li>
          <li><strong>Market research:</strong> Determine survey sample size for customer satisfaction</li>
          <li><strong>Manufacturing:</strong> Plan sample size for process control monitoring</li>
          <li><strong>Research studies:</strong> Design experiments with adequate statistical power</li>
        </ul>
      </div>
    </div>
  `
};

const MODULE5_POPULATION_MEAN_SIGMA_UNKNOWN_NOTES = {
  populationMeanSigmaUnknown: `
    <div class="module5-container">
      <h2 class="module5-header">
        🔬 Population Mean: σ Unknown (T-TEST)
      </h2>
      
      <div class="module5-intro-gradient-red">
        <h3>📊 Chapter 9.4: Testing a Population Mean (σ Unknown) - T-TEST</h3>
        <div class="module5-white-box" style="border: 3px solid #fff; margin: 10px 0;">
          <p style="text-align: center; font-size: 20px; font-weight: bold; color: #fff;">
            🎯 RULE: σ UNKNOWN → USE T-TEST
          </p>
        </div>
        <p>In this section we describe how to conduct hypothesis tests about a population mean for the σ unknown case. Because the σ unknown case corresponds to situations in which an estimate of the population standard deviation cannot be developed prior to sampling, the sample must be used to develop an estimate of both μ and σ.</p>
        <p>Thus, to conduct a hypothesis test about a population mean for the σ unknown case, the sample mean x̄ is used as an estimate of μ and the sample standard deviation s is used as an estimate of σ.</p>
      </div>

      <div class="module5-concept-box">
        <h4>🎯 Key Differences from σ Known Case</h4>
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ σ Known (Z-Test):</h6>
            <ul>
              <li><strong>Test statistic:</strong> z = (x̄ - μ₀)/(σ/√n)</li>
              <li><strong>Distribution:</strong> Standard normal (z-distribution)</li>
              <li><strong>Critical values:</strong> z_α, z_{α/2}</li>
              <li><strong>Population σ:</strong> Known from historical data</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>🔄 σ Unknown (T-Test):</h6>
            <ul>
              <li><strong>Test statistic:</strong> t = (x̄ - μ₀)/(s/√n)</li>
              <li><strong>Distribution:</strong> t-distribution with (n-1) df</li>
              <li><strong>Critical values:</strong> t_α, t_{α/2}</li>
              <li><strong>Sample s:</strong> Used to estimate σ</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #e74c3c;">🧮 Test Statistic for σ Unknown Case</h3>

      <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
        <strong>t = (x̄ - μ₀)/(s/√n)</strong>
      </div>

      <div class="module5-white-box">
        <h5>📊 Where:</h5>
        <ul>
          <li><strong>x̄</strong> = sample mean</li>
          <li><strong>μ₀</strong> = hypothesized population mean</li>
          <li><strong>s</strong> = sample standard deviation (estimate of σ)</li>
          <li><strong>n</strong> = sample size</li>
          <li><strong>Degrees of freedom:</strong> df = n - 1</li>
        </ul>
      </div>

      <div class="module5-notation-box">
        <h5>🔍 Important Notes:</h5>
        <ul>
          <li><strong>t-distribution assumption:</strong> Population from which we are sampling has a normal distribution</li>
          <li><strong>Relaxed assumption:</strong> Research shows this can be relaxed considerably when sample size is large enough</li>
          <li><strong>More variability:</strong> t-distribution has slightly more variability than z-distribution because we estimate σ from the sample</li>
        </ul>
      </div>

      <h3 style="color: #f39c12;">✈️ One-Tailed Test Example: Heathrow Airport</h3>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h4>🏢 Business Travel Magazine Case Study</h4>
        <p>A business travel magazine wants to classify transatlantic gateway airports according to the mean rating for the population of business travelers. A rating scale with a low score of 0 and a high score of 10 will be used, and airports with a population mean rating greater than 7 will be designated as superior service airports.</p>
        
        <div class="module5-white-box">
          <h5>📊 Sample Data:</h5>
          <ul>
            <li><strong>Sample size:</strong> n = 60 business travelers</li>
            <li><strong>Sample mean:</strong> x̄ = 7.25</li>
            <li><strong>Sample standard deviation:</strong> s = 1.052</li>
            <li><strong>Level of significance:</strong> α = 0.05</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 1: State the Hypotheses</h5>
          <div class="module5-hypothesis-center">
            <strong>H₀: μ ≤ 7</strong> (Heathrow is not superior)<br>
            <strong>Hₐ: μ > 7</strong> (Heathrow is superior service airport)
          </div>
          <p><strong>Type:</strong> Upper-tail test (testing if mean rating is greater than 7)</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Calculate the Test Statistic</h5>
          <div class="module5-formula-bordered">
            <strong>t = (x̄ - μ₀)/(s/√n) = (7.25 - 7)/(1.052/√60) = 0.25/0.136 = 1.84</strong>
          </div>
          <p><strong>Degrees of freedom:</strong> df = n - 1 = 60 - 1 = 59</p>
          <p><strong>Interpretation:</strong> Sample mean is 1.84 standard errors above the hypothesized value</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Determine p-Value</h5>
          <div class="module5-white-box">
            <p><strong>For upper-tail test:</strong> p-value = P(t ≥ 1.84) with 59 degrees of freedom</p>
            
            <div class="module5-calc-step">
              <h6>Using t-distribution table (59 df):</h6>
              <p><strong>Area in Upper Tail:</strong> 0.20 | 0.10 | 0.05 | 0.025 | 0.01 | 0.005</p>
              <p><strong>t Value:</strong> 0.848 | 1.296 | 1.671 | 2.001 | 2.391 | 2.662</p>
              <p><strong>Our t = 1.84:</strong> Between 1.671 and 2.001</p>
              <p><strong>Therefore:</strong> p-value is between 0.025 and 0.05</p>
            </div>
            
            <div class="module5-calc-step">
              <h6>Using Excel/Minitab (exact value):</h6>
              <p><strong>p-value = 0.0354</strong></p>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 4: Make Decision</h5>
          <div class="module5-decision-box">
            <h6>📊 p-Value Approach:</h6>
            <p><strong>Comparison:</strong> p-value = 0.0354 < α = 0.05</p>
            <p><strong>Decision:</strong> Reject H₀</p>
            
            <h6>🎯 Critical Value Approach:</h6>
            <p><strong>Critical value:</strong> t_{0.05} = 1.671 (for 59 df)</p>
            <p><strong>Decision rule:</strong> Reject H₀ if t ≥ 1.671</p>
            <p><strong>Comparison:</strong> t = 1.84 > 1.671</p>
            <p><strong>Decision:</strong> Reject H₀</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 5: State Conclusion</h5>
          <div class="module5-decision-box">
            <p><strong>Statistical conclusion:</strong> We reject the null hypothesis.</p>
            <p><strong>Practical interpretation:</strong> There is sufficient evidence to conclude that Heathrow Airport should be classified as a superior service airport (μ > 7).</p>
            <p><strong>Business action:</strong> Heathrow should be designated as a superior service airport in the magazine's classification.</p>
          </div>
        </div>
      </div>

      <h3 style="color: #9b59b6;">🎁 Two-Tailed Test Example: Holiday Toys</h3>

      <div class="module5-example-box" style="border: 2px solid #9b59b6;">
        <h4>🏪 Holiday Toys Production Planning</h4>
        <p>Holiday Toys manufactures and distributes its products through more than 1000 retail outlets. For this year's most important new toy, Holiday's marketing director is expecting demand to average 40 units per retail outlet. Prior to making the final production decision, Holiday surveyed a sample of 25 retailers to develop more information about the demand for the new product.</p>
        
        <div class="module5-white-box">
          <h5>📊 Sample Data:</h5>
          <ul>
            <li><strong>Sample size:</strong> n = 25 retailers</li>
            <li><strong>Sample mean:</strong> x̄ = 37.4 units</li>
            <li><strong>Sample standard deviation:</strong> s = 11.79 units</li>
            <li><strong>Level of significance:</strong> α = 0.05</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 1: State the Hypotheses</h5>
          <div class="module5-hypothesis-center">
            <strong>H₀: μ = 40</strong> (Marketing director's estimate is correct)<br>
            <strong>Hₐ: μ ≠ 40</strong> (Marketing director's estimate is incorrect)
          </div>
          <p><strong>Type:</strong> Two-tailed test (testing if mean differs from 40 in either direction)</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Calculate the Test Statistic</h5>
          <div class="module5-formula-bordered">
            <strong>t = (x̄ - μ₀)/(s/√n) = (37.4 - 40)/(11.79/√25) = -2.6/2.358 = -1.10</strong>
          </div>
          <p><strong>Degrees of freedom:</strong> df = n - 1 = 25 - 1 = 24</p>
          <p><strong>Interpretation:</strong> Sample mean is 1.10 standard errors below the hypothesized value</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Determine p-Value</h5>
          <div class="module5-white-box">
            <p><strong>For two-tailed test:</strong> p-value = 2 × P(t ≥ |test statistic|)</p>
            <p><strong>Since t = -1.10:</strong> p-value = 2 × P(t ≥ 1.10) with 24 degrees of freedom</p>
            
            <div class="module5-calc-step">
              <h6>Using t-distribution table (24 df):</h6>
              <p><strong>Area in Upper Tail:</strong> 0.20 | 0.10 | 0.05 | 0.025 | 0.01 | 0.005</p>
              <p><strong>t Value:</strong> 0.857 | 1.318 | 1.711 | 2.064 | 2.492 | 2.797</p>
              <p><strong>Our t = 1.10:</strong> Between 0.857 and 1.318</p>
              <p><strong>Upper tail area:</strong> Between 0.20 and 0.10</p>
              <p><strong>Therefore:</strong> p-value is between 0.40 and 0.20</p>
            </div>
            
            <div class="module5-calc-step">
              <h6>Using Excel/Minitab (exact value):</h6>
              <p><strong>p-value = 0.2822</strong></p>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 4: Make Decision</h5>
          <div class="module5-decision-box">
            <h6>📊 p-Value Approach:</h6>
            <p><strong>Comparison:</strong> p-value = 0.2822 > α = 0.05</p>
            <p><strong>Decision:</strong> Fail to reject H₀</p>
            
            <h6>🎯 Critical Value Approach:</h6>
            <p><strong>Critical values:</strong> ±t_{0.025} = ±2.064 (for 24 df)</p>
            <p><strong>Decision rule:</strong> Reject H₀ if t ≤ -2.064 or t ≥ 2.064</p>
            <p><strong>Comparison:</strong> -2.064 < t = -1.10 < 2.064</p>
            <p><strong>Decision:</strong> Fail to reject H₀</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 5: State Conclusion</h5>
          <div class="module5-decision-box">
            <p><strong>Statistical conclusion:</strong> We fail to reject the null hypothesis.</p>
            <p><strong>Practical interpretation:</strong> There is insufficient evidence to conclude that the population mean order quantity differs from 40 units per retail outlet.</p>
            <p><strong>Business action:</strong> Holiday should continue its production planning for the coming season based on the expectation that μ = 40.</p>
          </div>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 Table 9.3: Summary of Hypothesis Tests (σ Unknown)</h3>

      <div class="module5-summary-box">
        <h5>📊 Complete Summary of T-Tests About a Population Mean: σ Unknown Case</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Test Type</strong></th>
                <th><strong>Lower Tail Test</strong></th>
                <th><strong>Upper Tail Test</strong></th>
                <th><strong>Two-Tailed Test</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Hypotheses</td>
                <td>
                  <strong>H₀: μ ≥ μ₀</strong><br>
                  <strong>Hₐ: μ < μ₀</strong>
                </td>
                <td>
                  <strong>H₀: μ ≤ μ₀</strong><br>
                  <strong>Hₐ: μ > μ₀</strong>
                </td>
                <td>
                  <strong>H₀: μ = μ₀</strong><br>
                  <strong>Hₐ: μ ≠ μ₀</strong>
                </td>
              </tr>
              <tr>
                <td class="module5-table-header">T-Test Statistic</td>
                <td colspan="3" style="text-align: center;">
                  <strong>t = (x̄ - μ₀)/(s/√n)</strong><br>
                  <em>(Use when σ is unknown)</em>
                </td>
              </tr>
              <tr>
                <td class="module5-table-header">p-Value Approach</td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
              </tr>
              <tr>
                <td class="module5-table-header">Critical Value Approach</td>
                <td>Reject H₀ if<br><strong>t ≤ -t_α</strong></td>
                <td>Reject H₀ if<br><strong>t ≥ t_α</strong></td>
                <td>Reject H₀ if<br><strong>t ≤ -t_{α/2}</strong><br>or<br><strong>t ≥ t_{α/2}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📊 Practical Advice and Assumptions</h3>

      <div class="module5-summary-box">
        <h5>🎯 Applicability and Sample Size Guidelines</h5>
        
        <div class="module5-white-box">
          <h6>📊 Population Distribution Assumptions:</h6>
          <ul>
            <li><strong>Normal population:</strong> Hypothesis tests provide exact results for any sample size</li>
            <li><strong>Non-normal population:</strong> Procedures are approximations</li>
            <li><strong>Large samples (n ≥ 30):</strong> Good results in most cases</li>
            <li><strong>Approximately normal population:</strong> Small samples (n ≥ 15) can provide acceptable results</li>
            <li><strong>Highly skewed or outliers:</strong> Sample sizes approaching 50 are recommended</li>
          </ul>
        </div>

        <div class="module5-notation-box">
          <h5>🔍 Key Differences from σ Known Case:</h5>
          <ul>
            <li><strong>Test statistic:</strong> Uses s instead of σ</li>
            <li><strong>Distribution:</strong> t-distribution instead of z-distribution</li>
            <li><strong>Degrees of freedom:</strong> n - 1</li>
            <li><strong>More variability:</strong> t-distribution has slightly more variability</li>
            <li><strong>Critical values:</strong> Depend on degrees of freedom</li>
          </ul>
        </div>

        <div class="module5-advantage-box">
          <h5>💡 When to Use T-Test vs Z-Test:</h5>
          <div class="module5-error-grid">
            <div class="module5-benefits-box">
              <h6>✅ Use Z-Test When:</h6>
              <ul>
                <li>Population standard deviation σ is known</li>
                <li>Historical data provides reliable σ estimate</li>
                <li>Large sample size with known σ</li>
              </ul>
            </div>
            <div class="module5-type1-box">
              <h6>🔄 Use T-Test When:</h6>
              <ul>
                <li>Population standard deviation σ is unknown</li>
                <li>Must estimate σ from sample data</li>
                <li>Small to moderate sample sizes</li>
                <li>New products or situations without historical data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

const MODULE5_POPULATION_PROPORTION_NOTES = {
  populationProportion: `
    <div class="module5-container">
      <h2 class="module5-header">
        📊 Population Proportion Hypothesis Tests
      </h2>
      
      <div class="module5-intro-gradient-blue">
        <h3>📊 Chapter 9.5: Testing a Population Proportion</h3>
        <div class="module5-white-box" style="border: 3px solid #fff; margin: 10px 0;">
          <p style="text-align: center; font-size: 20px; font-weight: bold; color: #fff;">
            🎯 RULE: PROPORTION TESTS → USE Z-TEST
          </p>
        </div>
        <p>In this section we show how to conduct a hypothesis test about a population proportion p. Using p₀ to denote the hypothesized value for the population proportion, we can test whether the true population proportion differs from a specified value.</p>
        <p>Hypothesis tests about a population proportion are based on the difference between the sample proportion p̄ and the hypothesized population proportion p₀. The methods used are similar to those for population mean tests, but we use the sample proportion and its standard error to compute the test statistic.</p>
      </div>

      <h3 style="color: #3498db;">🎯 Three Forms of Population Proportion Tests</h3>

      <div class="module5-concept-box">
        <h4>📋 Hypothesis Test Forms for Population Proportion</h4>
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📉 Lower Tail Test:</h6>
            <div class="module5-hypothesis-center">
              <strong>H₀: p ≥ p₀</strong><br>
              <strong>Hₐ: p < p₀</strong>
            </div>
            <p><em>Testing if proportion is less than hypothesized value</em></p>
          </div>
          <div class="module5-type1-box">
            <h6>📈 Upper Tail Test:</h6>
            <div class="module5-hypothesis-center">
              <strong>H₀: p ≤ p₀</strong><br>
              <strong>Hₐ: p > p₀</strong>
            </div>
            <p><em>Testing if proportion is greater than hypothesized value</em></p>
          </div>
          <div class="module5-advantage-box">
            <h6>📊 Two-Tailed Test:</h6>
            <div class="module5-hypothesis-center">
              <strong>H₀: p = p₀</strong><br>
              <strong>Hₐ: p ≠ p₀</strong>
            </div>
            <p><em>Testing if proportion differs from hypothesized value</em></p>
          </div>
        </div>
      </div>

      <h3 style="color: #e74c3c;">🧮 Test Statistic for Population Proportion</h3>

      <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
        <strong>z = (p̄ - p₀)/√[p₀(1-p₀)/n]</strong>
      </div>

      <div class="module5-white-box">
        <h5>📊 Where:</h5>
        <ul>
          <li><strong>p̄</strong> = sample proportion</li>
          <li><strong>p₀</strong> = hypothesized population proportion</li>
          <li><strong>n</strong> = sample size</li>
          <li><strong>Standard error:</strong> σ_{p̄} = √[p₀(1-p₀)/n]</li>
        </ul>
      </div>

      <div class="module5-notation-box">
        <h5>🔍 Important Assumptions:</h5>
        <ul>
          <li><strong>Normal approximation:</strong> Requires np₀ ≥ 5 and n(1-p₀) ≥ 5</li>
          <li><strong>Sampling distribution:</strong> p̄ follows approximately normal distribution</li>
          <li><strong>Test statistic:</strong> z follows standard normal distribution</li>
          <li><strong>Large sample sizes:</strong> Usually satisfied in practice</li>
        </ul>
      </div>

      <h3 style="color: #f39c12;">⛳ Upper Tail Test Example: Pine Creek Golf Course</h3>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h4>🏌️ Pine Creek Golf Course Promotion Study</h4>
        <p>Over the past year, 20% of the players at Pine Creek were women. In an effort to increase the proportion of women players, Pine Creek implemented a special promotion designed to attract women golfers. One month after the promotion was implemented, the course manager requested a statistical study to determine whether the proportion of women players at Pine Creek had increased.</p>
        
        <div class="module5-white-box">
          <h5>📊 Study Parameters:</h5>
          <ul>
            <li><strong>Historical proportion:</strong> p₀ = 0.20 (20% women players)</li>
            <li><strong>Sample size:</strong> n = 400 players</li>
            <li><strong>Women in sample:</strong> 100 players</li>
            <li><strong>Sample proportion:</strong> p̄ = 100/400 = 0.25 (25%)</li>
            <li><strong>Level of significance:</strong> α = 0.05</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 1: State the Hypotheses</h5>
          <div class="module5-hypothesis-center">
            <strong>H₀: p ≤ 0.20</strong> (Proportion of women players has not increased)<br>
            <strong>Hₐ: p > 0.20</strong> (Proportion of women players has increased)
          </div>
          <p><strong>Type:</strong> Upper-tail test (testing if proportion is greater than 0.20)</p>
          <p><strong>Business objective:</strong> Determine if the promotion was beneficial</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 2: Check Assumptions</h5>
          <div class="module5-white-box">
            <p><strong>Normal approximation check:</strong></p>
            <ul>
              <li><strong>np₀ = 400 × 0.20 = 80 ≥ 5</strong> ✅</li>
              <li><strong>n(1-p₀) = 400 × 0.80 = 320 ≥ 5</strong> ✅</li>
            </ul>
            <p><strong>Conclusion:</strong> Normal approximation is appropriate</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 3: Calculate the Test Statistic</h5>
          <div class="module5-formula-bordered">
            <strong>z = (p̄ - p₀)/√[p₀(1-p₀)/n]</strong><br>
            <strong>z = (0.25 - 0.20)/√[0.20(1-0.20)/400]</strong><br>
            <strong>z = 0.05/√[0.20 × 0.80/400]</strong><br>
            <strong>z = 0.05/√[0.16/400]</strong><br>
            <strong>z = 0.05/√0.0004</strong><br>
            <strong>z = 0.05/0.02 = 2.50</strong>
          </div>
          <p><strong>Interpretation:</strong> Sample proportion is 2.50 standard errors above the hypothesized value</p>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 4: Determine p-Value</h5>
          <div class="module5-white-box">
            <p><strong>For upper-tail test:</strong> p-value = P(z ≥ 2.50)</p>
            
            <div class="module5-calc-step">
              <h6>Using standard normal table:</h6>
              <p><strong>P(z ≤ 2.50) = 0.9938</strong> (area to the left)</p>
              <p><strong>p-value = P(z ≥ 2.50) = 1 - 0.9938 = 0.0062</strong></p>
            </div>
            
            <div class="module5-calc-step">
              <h6>Visual representation:</h6>
              <p><strong>Area to the left of z = 2.50:</strong> 0.9938</p>
              <p><strong>Upper tail area (p-value):</strong> 0.0062</p>
            </div>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 5: Make Decision</h5>
          <div class="module5-decision-box">
            <h6>📊 p-Value Approach:</h6>
            <p><strong>Comparison:</strong> p-value = 0.0062 < α = 0.05</p>
            <p><strong>Decision:</strong> Reject H₀</p>
            
            <h6>🎯 Critical Value Approach:</h6>
            <p><strong>Critical value:</strong> z_{0.05} = 1.645</p>
            <p><strong>Decision rule:</strong> Reject H₀ if z ≥ 1.645</p>
            <p><strong>Comparison:</strong> z = 2.50 > 1.645</p>
            <p><strong>Decision:</strong> Reject H₀</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h5>📋 Step 6: State Conclusion</h5>
          <div class="module5-decision-box">
            <p><strong>Statistical conclusion:</strong> We reject the null hypothesis.</p>
            <p><strong>Practical interpretation:</strong> There is sufficient statistical evidence to conclude that the proportion of women players at Pine Creek has increased (p > 0.20).</p>
            <p><strong>Business action:</strong> The special promotion was beneficial and should be continued or expanded.</p>
          </div>
        </div>

        <div class="module5-notation-box">
          <h5>💡 Additional Insights:</h5>
          <ul>
            <li><strong>p-value interpretation:</strong> With p-value = 0.0062, H₀ would be rejected for any α ≥ 0.0062</li>
            <li><strong>Effect size:</strong> Sample proportion increased from 20% to 25% (5 percentage point increase)</li>
            <li><strong>Practical significance:</strong> 25% increase in women players represents meaningful business improvement</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 Table 9.4: Summary of Population Proportion Tests</h3>

      <div class="module5-summary-box">
        <h5>📊 Complete Summary of Hypothesis Tests About a Population Proportion</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Test Type</strong></th>
                <th><strong>Lower Tail Test</strong></th>
                <th><strong>Upper Tail Test</strong></th>
                <th><strong>Two-Tailed Test</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Hypotheses</td>
                <td>
                  <strong>H₀: p ≥ p₀</strong><br>
                  <strong>Hₐ: p < p₀</strong>
                </td>
                <td>
                  <strong>H₀: p ≤ p₀</strong><br>
                  <strong>Hₐ: p > p₀</strong>
                </td>
                <td>
                  <strong>H₀: p = p₀</strong><br>
                  <strong>Hₐ: p ≠ p₀</strong>
                </td>
              </tr>
              <tr>
                <td class="module5-table-header">Z-Test Statistic</td>
                <td colspan="3" style="text-align: center;">
                  <strong>z = (p̄ - p₀)/√[p₀(1-p₀)/n]</strong><br>
                  <em>(Use when np₀ ≥ 5 and n(1-p₀) ≥ 5)</em>
                </td>
              </tr>
              <tr>
                <td class="module5-table-header">p-Value Approach</td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
                <td>Reject H₀ if<br><strong>p-value ≤ α</strong></td>
              </tr>
              <tr>
                <td class="module5-table-header">Critical Value Approach</td>
                <td>Reject H₀ if<br><strong>z ≤ -z_α</strong></td>
                <td>Reject H₀ if<br><strong>z ≥ z_α</strong></td>
                <td>Reject H₀ if<br><strong>z ≤ -z_{α/2}</strong><br>or<br><strong>z ≥ z_{α/2}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #9b59b6;">🔍 Key Differences from Population Mean Tests</h3>

      <div class="module5-summary-box">
        <h5>🎯 Comparison: Proportion Tests vs Mean Tests</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📊 Population Proportion Tests:</h6>
            <ul>
              <li><strong>Parameter:</strong> p (proportion)</li>
              <li><strong>Estimator:</strong> p̄ (sample proportion)</li>
              <li><strong>Test statistic:</strong> z = (p̄ - p₀)/√[p₀(1-p₀)/n]</li>
              <li><strong>Distribution:</strong> Standard normal (z-distribution)</li>
              <li><strong>Assumptions:</strong> np₀ ≥ 5 and n(1-p₀) ≥ 5</li>
              <li><strong>Standard error:</strong> √[p₀(1-p₀)/n]</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>📈 Population Mean Tests:</h6>
            <ul>
              <li><strong>Parameter:</strong> μ (mean)</li>
              <li><strong>Estimator:</strong> x̄ (sample mean)</li>
              <li><strong>Test statistic:</strong> z = (x̄ - μ₀)/(σ/√n) or t = (x̄ - μ₀)/(s/√n)</li>
              <li><strong>Distribution:</strong> z-distribution or t-distribution</li>
              <li><strong>Assumptions:</strong> Normal population or large sample</li>
              <li><strong>Standard error:</strong> σ/√n or s/√n</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📊 Practical Applications and Examples</h3>

      <div class="module5-summary-box">
        <h5>🎯 Common Business Applications of Proportion Tests</h5>
        
        <div class="module5-white-box">
          <h6>📊 Marketing and Customer Behavior:</h6>
          <ul>
            <li><strong>Customer satisfaction:</strong> Test if satisfaction rate exceeds target</li>
            <li><strong>Brand awareness:</strong> Test if brand recognition increased after campaign</li>
            <li><strong>Market share:</strong> Test if market share changed from historical level</li>
            <li><strong>Response rates:</strong> Test if email/phone response rates improved</li>
          </ul>
        </div>

        <div class="module5-white-box">
          <h6>📊 Quality Control and Operations:</h6>
          <ul>
            <li><strong>Defect rates:</strong> Test if defect proportion is within acceptable limits</li>
            <li><strong>On-time delivery:</strong> Test if on-time delivery rate meets standards</li>
            <li><strong>Employee retention:</strong> Test if retention rate improved after policy change</li>
            <li><strong>Safety incidents:</strong> Test if safety incident rate decreased</li>
          </ul>
        </div>

        <div class="module5-white-box">
          <h6>📊 Financial and Risk Management:</h6>
          <ul>
            <li><strong>Loan default rates:</strong> Test if default rate changed</li>
            <li><strong>Fraud detection:</strong> Test if fraud detection rate improved</li>
            <li><strong>Investment success:</strong> Test if investment success rate exceeds benchmark</li>
            <li><strong>Insurance claims:</strong> Test if claim rate changed</li>
          </ul>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Best Practices for Proportion Tests:</h5>
        <ul>
          <li><strong>Always check assumptions:</strong> Verify np₀ ≥ 5 and n(1-p₀) ≥ 5</li>
          <li><strong>Use appropriate test:</strong> Choose one-tailed vs two-tailed based on research question</li>
          <li><strong>Consider practical significance:</strong> Statistical significance ≠ practical importance</li>
          <li><strong>Report effect size:</strong> Include the magnitude of the proportion change</li>
          <li><strong>Validate results:</strong> Consider alternative explanations and confounding factors</li>
        </ul>
      </div>
    </div>
  `
};

const MODULE5_TWO_POPULATION_MEANS_NOTES = {
  twoPopulationMeans: `
    <div class="module5-container">
      <h2 class="module5-header" style="border-bottom-color: #e67e22;">
        📊 Inferences About the Difference Between Two Population Means: σ₁ and σ₂ Known
      </h2>
      
      <div class="module5-intro-gradient-orange">
        <h3>📊 Chapter 10: Statistical Inference for Two Populations</h3>
        <p>In Chapters 8 and 9, we developed interval estimates and conducted hypothesis tests for single population means and proportions. Now we extend our discussion to situations involving two populations when the difference between the two population means or proportions is of prime importance.</p>
      </div>

      <div class="module5-concept-box">
        <h4>🎯 Key Applications</h4>
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h5>📈 Business Examples:</h5>
            <ul>
              <li>Difference between mean starting salaries for men vs women</li>
              <li>Customer age differences between store locations</li>
              <li>Training center quality comparisons</li>
              <li>Supplier quality assessments</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h5>📊 Research Examples:</h5>
            <ul>
              <li>Treatment vs control group comparisons</li>
              <li>Before vs after intervention studies</li>
              <li>Regional demographic differences</li>
              <li>Product performance comparisons</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #e67e22;">🔍 Independent Simple Random Samples</h3>

      <div class="module5-summary-box">
        <h5>📊 Sampling Process Overview</h5>
        
        <div class="module5-white-box">
          <h6>🎯 Definition:</h6>
          <p><strong>Independent Simple Random Samples:</strong> Two samples taken separately and independently from two different populations.</p>
          
          <h6>📋 Process:</h6>
          <ol>
            <li>Select simple random sample of n₁ units from population 1</li>
            <li>Select simple random sample of n₂ units from population 2</li>
            <li>Compute sample means: x̄₁ and x̄₂</li>
            <li>Use difference (x̄₁ - x̄₂) as point estimator of (μ₁ - μ₂)</li>
          </ol>
        </div>
      </div>

      <h3 style="color: #3498db;">📊 Point Estimation</h3>

      <div class="module5-summary-box">
        <h5>🎯 Point Estimator of the Difference Between Two Population Means</h5>
        
        <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
          <strong>x̄₁ - x̄₂</strong>
        </div>
        <p><strong>Formula (10.1)</strong></p>
        
        <div class="module5-white-box">
          <h6>📋 Standard Error:</h6>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
            <strong>σ_{x̄₁-x̄₂} = √(σ₁²/n₁ + σ₂²/n₂)</strong>
          </div>
          <p><strong>Formula (10.2)</strong></p>
          <p><strong>Where:</strong></p>
          <ul>
            <li>σ₁ = population standard deviation of population 1</li>
            <li>σ₂ = population standard deviation of population 2</li>
            <li>n₁ = sample size from population 1</li>
            <li>n₂ = sample size from population 2</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #27ae60;">📈 Interval Estimation</h3>

      <div class="module5-summary-box">
        <h5>🎯 Confidence Interval for μ₁ - μ₂</h5>
        
        <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
          <strong>(x̄₁ - x̄₂) ± z_{α/2} × √(σ₁²/n₁ + σ₂²/n₂)</strong>
        </div>
        <p><strong>Formula (10.4)</strong></p>
        
        <div class="module5-white-box">
          <h6>📋 Margin of Error:</h6>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
            <strong>Margin of Error = z_{α/2} × √(σ₁²/n₁ + σ₂²/n₂)</strong>
          </div>
          <p><strong>Formula (10.3)</strong></p>
        </div>
      </div>

      <h4 style="color: #e74c3c;">📊 Greystone Department Stores Example</h4>

      <div class="module5-example-box" style="border: 2px solid #e74c3c;">
        <h5>🏪 Store Location Customer Age Comparison</h5>
        <p><strong>Scenario:</strong> Greystone operates two stores in Buffalo - inner-city and suburban. The manager wants to investigate the difference in mean customer ages between the two locations.</p>
        
        <div class="module5-white-box">
          <h6>📋 Population Definitions:</h6>
          <ul>
            <li><strong>Population 1:</strong> All customers who shop at the inner-city store (μ₁ = mean age)</li>
            <li><strong>Population 2:</strong> All customers who shop at the suburban store (μ₂ = mean age)</li>
            <li><strong>Parameter of Interest:</strong> μ₁ - μ₂ (difference in mean ages)</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h6>📊 Sample Data:</h6>
          <div class="module5-table-container">
            <table class="module5-table">
              <thead>
                <tr>
                  <th><strong>Store Location</strong></th>
                  <th><strong>Sample Size</strong></th>
                  <th><strong>Sample Mean</strong></th>
                  <th><strong>Population σ</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inner City</td>
                  <td>n₁ = 36</td>
                  <td>x̄₁ = 40 years</td>
                  <td>σ₁ = 9 years</td>
                </tr>
                <tr>
                  <td>Suburban</td>
                  <td>n₂ = 49</td>
                  <td>x̄₂ = 35 years</td>
                  <td>σ₂ = 10 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="module5-step-box">
          <h6>🧮 Calculations:</h6>
          <div class="module5-white-box">
            <p><strong>Point Estimate:</strong> x̄₁ - x̄₂ = 40 - 35 = 5 years</p>
            <p><strong>Standard Error:</strong> √(9²/36 + 10²/49) = √(2.25 + 2.04) = √4.29 = 2.07</p>
            <p><strong>95% Confidence Level:</strong> z_{0.025} = 1.96</p>
            <p><strong>Margin of Error:</strong> 1.96 × 2.07 = 4.06 years</p>
            <p><strong>Confidence Interval:</strong> 5 ± 4.06 = (0.94, 9.06) years</p>
          </div>
        </div>

        <div class="module5-decision-box">
          <h6>📋 Interpretation:</h6>
          <p><strong>95% Confidence Interval:</strong> (0.94, 9.06) years</p>
          <p><strong>Conclusion:</strong> We are 95% confident that the mean age of inner-city customers is between 0.94 and 9.06 years greater than suburban customers.</p>
        </div>
      </div>

      <h3 style="color: #9b59b6;">🎯 Hypothesis Testing</h3>

      <div class="module5-summary-box">
        <h5>📊 Test Statistic for μ₁ - μ₂</h5>
        
        <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
          <strong>z = [(x̄₁ - x̄₂) - D₀] / √(σ₁²/n₁ + σ₂²/n₂)</strong>
        </div>
        <p><strong>Formula (10.5)</strong></p>
        
        <div class="module5-white-box">
          <h6>📋 Where D₀ is the hypothesized difference:</h6>
          <ul>
            <li><strong>Two-tailed test:</strong> H₀: μ₁ - μ₂ = D₀ vs Hₐ: μ₁ - μ₂ ≠ D₀</li>
            <li><strong>Lower-tailed test:</strong> H₀: μ₁ - μ₂ ≥ D₀ vs Hₐ: μ₁ - μ₂ < D₀</li>
            <li><strong>Upper-tailed test:</strong> H₀: μ₁ - μ₂ ≤ D₀ vs Hₐ: μ₁ - μ₂ > D₀</li>
          </ul>
          <p><strong>Note:</strong> Often D₀ = 0 (testing for equality of means)</p>
        </div>
      </div>

      <h4 style="color: #f39c12;">📊 Training Center Quality Example</h4>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h5>🎓 Training Center Examination Scores</h5>
        <p><strong>Scenario:</strong> Standardized examination given to individuals trained at two centers to assess quality differences.</p>
        
        <div class="module5-white-box">
          <h6>📋 Population Definitions:</h6>
          <ul>
            <li><strong>μ₁:</strong> Mean examination score for center A trainees</li>
            <li><strong>μ₂:</strong> Mean examination score for center B trainees</li>
            <li><strong>Parameter of Interest:</strong> μ₁ - μ₂ (difference in mean scores)</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h6>📊 Hypotheses:</h6>
          <div class="module5-white-box">
            <p><strong>H₀:</strong> μ₁ - μ₂ = 0 (no difference in training quality)</p>
            <p><strong>Hₐ:</strong> μ₁ - μ₂ ≠ 0 (training centers differ in quality)</p>
            <p><strong>Significance Level:</strong> α = 0.05</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h6>📊 Sample Data:</h6>
          <div class="module5-table-container">
            <table class="module5-table">
              <thead>
                <tr>
                  <th><strong>Training Center</strong></th>
                  <th><strong>Sample Size</strong></th>
                  <th><strong>Sample Mean</strong></th>
                  <th><strong>Population σ</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Center A</td>
                  <td>n₁ = 30</td>
                  <td>x̄₁ = 82</td>
                  <td>σ₁ = 10</td>
                </tr>
                <tr>
                  <td>Center B</td>
                  <td>n₂ = 40</td>
                  <td>x̄₂ = 78</td>
                  <td>σ₂ = 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="module5-step-box">
          <h6>🧮 Test Statistic Calculation:</h6>
          <div class="module5-white-box">
            <p><strong>z = [(x̄₁ - x̄₂) - D₀] / √(σ₁²/n₁ + σ₂²/n₂)</strong></p>
            <p><strong>z = [(82 - 78) - 0] / √(10²/30 + 10²/40)</strong></p>
            <p><strong>z = 4 / √(3.33 + 2.5)</strong></p>
            <p><strong>z = 4 / √5.83</strong></p>
            <p><strong>z = 4 / 2.41 = 1.66</strong></p>
          </div>
        </div>

        <div class="module5-step-box">
          <h6>📊 p-Value Calculation:</h6>
          <div class="module5-white-box">
            <p><strong>Two-tailed test:</strong> p-value = 2 × P(Z ≥ |z|)</p>
            <p><strong>P(Z ≤ 1.66) = 0.9515</strong></p>
            <p><strong>P(Z ≥ 1.66) = 1 - 0.9515 = 0.0485</strong></p>
            <p><strong>p-value = 2 × 0.0485 = 0.0970</strong></p>
          </div>
        </div>

        <div class="module5-decision-box">
          <h6>📋 Decision and Conclusion:</h6>
          <p><strong>p-value = 0.0970 > α = 0.05</strong></p>
          <p><strong>Decision:</strong> Fail to reject H₀</p>
          <p><strong>Conclusion:</strong> Insufficient evidence to conclude that training centers differ in quality.</p>
        </div>
      </div>

      <h3 style="color: #2c3e50;">💡 Practical Advice</h3>

      <div class="module5-summary-box">
        <h5>🎯 Sample Size Guidelines</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ Adequate Sample Sizes:</h6>
            <ul>
              <li><strong>n₁ ≥ 30 and n₂ ≥ 30:</strong> Generally adequate for most applications</li>
              <li><strong>Normal approximation:</strong> Central limit theorem applies</li>
              <li><strong>Robust results:</strong> Less sensitive to population distribution</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>⚠️ Small Sample Sizes:</h6>
            <ul>
              <li><strong>n₁ < 30 or n₂ < 30:</strong> Requires more careful consideration</li>
              <li><strong>Population distribution:</strong> Should be approximately normal</li>
              <li><strong>Robustness:</strong> Results may be sensitive to distributional assumptions</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #e67e22;">📊 Key Assumptions</h3>

      <div class="module5-summary-box">
        <h5>🎯 Requirements for Valid Inference</h5>
        
        <div class="module5-white-box">
          <h6>📋 Core Assumptions:</h6>
          <ul>
            <li><strong>Independent samples:</strong> Samples from two populations are independent</li>
            <li><strong>Known standard deviations:</strong> σ₁ and σ₂ are known (rare in practice)</li>
            <li><strong>Random sampling:</strong> Simple random samples from each population</li>
            <li><strong>Large samples or normal populations:</strong> For normal approximation</li>
          </ul>
        </div>

        <div class="module5-white-box">
          <h6>📋 When Assumptions Are Met:</h6>
          <ul>
            <li><strong>Point estimator:</strong> x̄₁ - x̄₂ is unbiased for μ₁ - μ₂</li>
            <li><strong>Standard error:</strong> √(σ₁²/n₁ + σ₂²/n₂) is exact</li>
            <li><strong>Confidence intervals:</strong> Exact coverage probability</li>
            <li><strong>Hypothesis tests:</strong> Exact significance level</li>
          </ul>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Excel Functions for Two Population Means (σ Known):</h5>
        <ul>
          <li><strong>Standard Error:</strong> =SQRT(σ₁²/n₁ + σ₂²/n₂)</li>
          <li><strong>Test Statistic:</strong> =(x̄₁ - x̄₂ - D₀)/SQRT(σ₁²/n₁ + σ₂²/n₂)</li>
          <li><strong>p-value (two-tailed):</strong> =2*(1-NORM.S.DIST(ABS(z), TRUE))</li>
          <li><strong>Critical Value:</strong> =NORM.S.INV(1-α/2)</li>
        </ul>
      </div>

      <h3 style="color: #8e44ad;">📊 Inferences About the Difference Between Two Population Means: σ₁ and σ₂ Unknown</h3>

      <div class="module5-concept-box">
        <h4>🔄 Extension to Unknown Standard Deviations</h4>
        <p>When population standard deviations σ₁ and σ₂ are unknown, we use sample standard deviations s₁ and s₂ to estimate them. This requires using the t-distribution instead of the standard normal distribution for interval estimation and hypothesis testing.</p>
      </div>

      <h4 style="color: #3498db;">📈 Interval Estimation When σ₁ and σ₂ Unknown</h4>

      <div class="module5-summary-box">
        <h5>🎯 Confidence Interval Formula</h5>
        
        <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
          <strong>(x̄₁ - x̄₂) ± t_{α/2} × √(s₁²/n₁ + s₂²/n₂)</strong>
        </div>
        <p><strong>Formula (10.6)</strong></p>
        
        <div class="module5-white-box">
          <h6>📋 Key Changes from σ Known Case:</h6>
          <ul>
            <li><strong>Use t_{α/2} instead of z_{α/2}</strong> (t-distribution critical value)</li>
            <li><strong>Use s₁ and s₂ instead of σ₁ and σ₂</strong> (sample standard deviations)</li>
            <li><strong>Degrees of freedom calculation</strong> required for t-distribution</li>
            <li><strong>Approximation method</strong> but provides excellent results</li>
          </ul>
        </div>
      </div>

      <h4 style="color: #e74c3c;">🧮 Degrees of Freedom Calculation</h4>

      <div class="module5-summary-box">
        <h5>📊 Degrees of Freedom for t-Distribution</h5>
        
        <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
          <strong>df = [(s₁²/n₁ + s₂²/n₂)²] / [(s₁²/n₁)²/(n₁-1) + (s₂²/n₂)²/(n₂-1)]</strong>
        </div>
        <p><strong>Formula (10.7)</strong></p>
        
        <div class="module5-white-box">
          <h6>📋 Important Notes:</h6>
          <ul>
            <li><strong>Round down:</strong> Always round non-integer df down for conservative estimate</li>
            <li><strong>Software calculation:</strong> Statistical packages compute this automatically</li>
            <li><strong>Efficiency tip:</strong> Calculate s₁²/n₁ and s₂²/n₂ once for both formulas</li>
            <li><strong>Conservative approach:</strong> Larger t-value provides wider confidence interval</li>
          </ul>
        </div>
      </div>

      <h4 style="color: #f39c12;">🏦 Clearwater National Bank Example</h4>

      <div class="module5-example-box" style="border: 2px solid #f39c12;">
        <h5>💰 Checking Account Balance Comparison</h5>
        <p><strong>Scenario:</strong> Clearwater National Bank wants to estimate the difference between mean checking account balances at Cherry Grove and Beechmont branches.</p>
        
        <div class="module5-white-box">
          <h6>📋 Population Definitions:</h6>
          <ul>
            <li><strong>Population 1:</strong> All checking accounts at Cherry Grove Branch (μ₁ = mean balance)</li>
            <li><strong>Population 2:</strong> All checking accounts at Beechmont Branch (μ₂ = mean balance)</li>
            <li><strong>Parameter of Interest:</strong> μ₁ - μ₂ (difference in mean account balances)</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h6>📊 Sample Data:</h6>
          <div class="module5-table-container">
            <table class="module5-table">
              <thead>
                <tr>
                  <th><strong>Branch</strong></th>
                  <th><strong>Sample Size</strong></th>
                  <strong>Sample Mean</strong></th>
                  <th><strong>Sample Standard Deviation</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cherry Grove</td>
                  <td>n₁ = 28</td>
                  <td>x̄₁ = $1,025</td>
                  <td>s₁ = $150</td>
                </tr>
                <tr>
                  <td>Beechmont</td>
                  <td>n₂ = 22</td>
                  <td>x̄₂ = $910</td>
                  <td>s₂ = $125</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="module5-step-box">
          <h6>🧮 Step 1: Calculate Degrees of Freedom</h6>
          <div class="module5-white-box">
            <p><strong>df = [(s₁²/n₁ + s₂²/n₂)²] / [(s₁²/n₁)²/(n₁-1) + (s₂²/n₂)²/(n₂-1)]</strong></p>
            <p><strong>s₁²/n₁ = 150²/28 = 22,500/28 = 803.57</strong></p>
            <p><strong>s₂²/n₂ = 125²/22 = 15,625/22 = 710.23</strong></p>
            <p><strong>df = [(803.57 + 710.23)²] / [(803.57²/27) + (710.23²/21)]</strong></p>
            <p><strong>df = [2,290,000] / [23,900 + 24,000] = 2,290,000 / 47,900 = 47.8</strong></p>
            <p><strong>df = 47 (rounded down for conservative estimate)</strong></p>
          </div>
        </div>

        <div class="module5-step-box">
          <h6>🧮 Step 2: Find Critical Value</h6>
          <div class="module5-white-box">
            <p><strong>95% Confidence Level:</strong> α = 0.05, α/2 = 0.025</p>
            <p><strong>Degrees of Freedom:</strong> df = 47</p>
            <p><strong>Critical Value:</strong> t_{0.025, 47} = 2.012</p>
          </div>
        </div>

        <div class="module5-step-box">
          <h6>🧮 Step 3: Calculate Confidence Interval</h6>
          <div class="module5-white-box">
            <p><strong>Point Estimate:</strong> x̄₁ - x̄₂ = $1,025 - $910 = $115</p>
            <p><strong>Standard Error:</strong> √(s₁²/n₁ + s₂²/n₂) = √(803.57 + 710.23) = √1,513.80 = $38.91</p>
            <p><strong>Margin of Error:</strong> t_{α/2} × SE = 2.012 × $38.91 = $78.29 ≈ $78</p>
            <p><strong>95% Confidence Interval:</strong> $115 ± $78 = ($37, $193)</p>
          </div>
        </div>

        <div class="module5-decision-box">
          <h6>📋 Interpretation:</h6>
          <p><strong>95% Confidence Interval:</strong> ($37, $193)</p>
          <p><strong>Conclusion:</strong> We are 95% confident that the mean checking account balance at Cherry Grove Branch is between $37 and $193 higher than at Beechmont Branch.</p>
        </div>
      </div>

      <h4 style="color: #27ae60;">🎯 Hypothesis Testing When σ₁ and σ₂ Unknown</h4>

      <div class="module5-summary-box">
        <h5>📊 Test Statistic Formula</h5>
        
        <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
          <strong>t = [(x̄₁ - x̄₂) - D₀] / √(s₁²/n₁ + s₂²/n₂)</strong>
        </div>
        <p><strong>Formula (10.8)</strong></p>
        
        <div class="module5-white-box">
          <h6>📋 Key Differences from σ Known Case:</h6>
          <ul>
            <li><strong>Use t-distribution instead of z-distribution</strong></li>
            <li><strong>Use sample standard deviations s₁ and s₂</strong></li>
            <li><strong>Degrees of freedom calculation required</strong></li>
            <li><strong>Same hypothesis forms:</strong> Two-tailed, lower-tailed, upper-tailed</li>
          </ul>
        </div>
      </div>

      <h4 style="color: #9b59b6;">📊 Comparison: σ Known vs σ Unknown</h4>

      <div class="module5-summary-box">
        <h5>🎯 Key Differences Summary</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Aspect</strong></th>
                <th><strong>σ₁ and σ₂ Known</strong></th>
                <th><strong>σ₁ and σ₂ Unknown</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Distribution</td>
                <td>Standard Normal (z)</td>
                <td>t-Distribution</td>
              </tr>
              <tr>
                <td class="module5-table-header">Standard Deviations</td>
                <td>Population values (σ₁, σ₂)</td>
                <td>Sample estimates (s₁, s₂)</td>
              </tr>
              <tr>
                <td class="module5-table-header">Critical Values</td>
                <td>z_{α/2}</td>
                <td>t_{α/2, df}</td>
              </tr>
              <tr>
                <td class="module5-table-header">Degrees of Freedom</td>
                <td>Not applicable</td>
                <td>Complex calculation (Formula 10.7)</td>
              </tr>
              <tr>
                <td class="module5-table-header">Precision</td>
                <td>Exact</td>
                <td>Approximation (excellent results)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #2c3e50;">💡 Practical Considerations</h3>

      <div class="module5-summary-box">
        <h5>🎯 When to Use Each Method</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ Use σ Known Method When:</h6>
            <ul>
              <li><strong>Historical data available:</strong> Reliable population σ estimates</li>
              <li><strong>Quality control:</strong> Established process standards</li>
              <li><strong>Large historical samples:</strong> Well-established σ values</li>
              <li><strong>Exact precision needed:</strong> When σ values are truly known</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>🔄 Use σ Unknown Method When:</h6>
            <ul>
              <li><strong>New situations:</strong> No historical σ data available</li>
              <li><strong>Sample data only:</strong> Must estimate σ from samples</li>
              <li><strong>Research studies:</strong> New populations or conditions</li>
              <li><strong>Conservative approach:</strong> When σ values are uncertain</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Excel Functions for σ Unknown Case:</h5>
        <ul>
          <li><strong>Standard Error:</strong> =SQRT(s₁²/n₁ + s₂²/n₂)</li>
          <li><strong>Test Statistic:</strong> =(x̄₁ - x̄₂ - D₀)/SQRT(s₁²/n₁ + s₂²/n₂)</li>
          <li><strong>p-value (two-tailed):</strong> =T.DIST.2T(ABS(t), df)</li>
          <li><strong>Critical Value:</strong> =T.INV(1-α/2, df)</li>
          <li><strong>Degrees of Freedom:</strong> Complex calculation - use software</li>
        </ul>
      </div>
    </div>
  `
};

const MODULE5_MATCHED_SAMPLES_NOTES = {
  matchedSamples: `
    <div class="module5-container">
      <h2 class="module5-header">
        🔬 Matched Samples
      </h2>
      
      <div class="module5-intro-gradient">
        <h3>📊 Coming Soon: Matched Sample Hypothesis Tests</h3>
        <p>This section will cover hypothesis testing for paired/matched samples.</p>
      </div>

      <div class="module5-white-box">
        <h4>🎯 Topics to be covered:</h4>
        <ul>
          <li>Paired t-test procedures</li>
          <li>Before-and-after studies</li>
          <li>Matched pairs experimental design</li>
          <li>Difference of means analysis</li>
        </ul>
      </div>
    </div>
  `
};

const MODULE5_PRACTICAL_APPLICATIONS_NOTES = {
  practicalApplications: `
    <div class="module5-container">
      <h2 class="module5-header">
        🔬 Practical Applications
      </h2>
      
      <div class="module5-intro-gradient">
        <h3>📊 Coming Soon: Real-World Applications</h3>
        <p>This section will provide comprehensive examples of hypothesis testing in business and research contexts.</p>
      </div>

      <div class="module5-white-box">
        <h4>🎯 Applications to be covered:</h4>
        <ul>
          <li>Quality control in manufacturing</li>
          <li>A/B testing in marketing</li>
          <li>Clinical trial analysis</li>
          <li>Business decision making</li>
        </ul>
      </div>
    </div>
  `
};

const MODULE5_GLOSSARY_NOTES = {
  glossaryModule5: `
    <div class="module5-container">
      <h2 class="module5-header">
        📚 Module 5 Glossary
      </h2>
      
      <div class="module5-intro-gradient-blue">
        <h3>📊 Chapter 9: Hypothesis Testing Key Terms</h3>
        <p>This glossary contains definitions of essential terms used in hypothesis testing procedures and decision making.</p>
      </div>

      <div class="module5-glossary-container">
        <div class="module5-glossary-item">
          <h4>🔍 Null Hypothesis</h4>
          <p><strong>Definition:</strong> The hypothesis tentatively assumed true in the hypothesis testing procedure.</p>
          <p><strong>Notation:</strong> H₀</p>
          <p><strong>Example:</strong> H₀: μ ≥ 120 (population mean is at least 120)</p>
        </div>

        <div class="module5-glossary-item">
          <h4>🎯 Alternative Hypothesis</h4>
          <p><strong>Definition:</strong> The hypothesis concluded to be true if the null hypothesis is rejected.</p>
          <p><strong>Notation:</strong> Hₐ</p>
          <p><strong>Example:</strong> Hₐ: μ < 120 (population mean is less than 120)</p>
        </div>

        <div class="module5-glossary-item">
          <h4>❌ Type I Error</h4>
          <p><strong>Definition:</strong> The error of rejecting H₀ when it is true.</p>
          <p><strong>Probability:</strong> α (alpha)</p>
          <p><strong>Control:</strong> Level of significance</p>
          <p><strong>Example:</strong> Concluding a drug is effective when it's not</p>
        </div>

        <div class="module5-glossary-item">
          <h4>❌ Type II Error</h4>
          <p><strong>Definition:</strong> The error of accepting H₀ when it is false.</p>
          <p><strong>Probability:</strong> β (beta)</p>
          <p><strong>Control:</strong> Sample size and effect size</p>
          <p><strong>Example:</strong> Concluding a drug is not effective when it is</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📊 Level of Significance</h4>
          <p><strong>Definition:</strong> The probability of making a Type I error when the null hypothesis is true as an equality.</p>
          <p><strong>Notation:</strong> α</p>
          <p><strong>Common values:</strong> 0.05, 0.01, 0.10</p>
          <p><strong>Control:</strong> Set by the researcher before testing</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📈 One-Tailed Test</h4>
          <p><strong>Definition:</strong> A hypothesis test in which rejection of the null hypothesis occurs for values of the test statistic in one tail of its sampling distribution.</p>
          <p><strong>Types:</strong> Lower-tail test (Hₐ: μ < μ₀) or Upper-tail test (Hₐ: μ > μ₀)</p>
          <p><strong>Critical region:</strong> One tail of the distribution</p>
        </div>

        <div class="module5-glossary-item">
          <h4>🧮 Test Statistic</h4>
          <p><strong>Definition:</strong> A statistic whose value helps determine whether a null hypothesis should be rejected.</p>
          <p><strong>Examples:</strong> z-statistic, t-statistic</p>
          <p><strong>Calculation:</strong> Based on sample data and hypothesized parameter</p>
          <p><strong>Comparison:</strong> Compared to critical value or used to find p-value</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📊 p-Value</h4>
          <p><strong>Definition:</strong> A probability that provides a measure of the evidence against the null hypothesis given by the sample. Smaller p-values indicate more evidence against H₀.</p>
          <p><strong>Interpretation:</strong></p>
          <ul>
            <li><strong>Lower tail test:</strong> Probability of obtaining a value for the test statistic as small as or smaller than that provided by the sample</li>
            <li><strong>Upper tail test:</strong> Probability of obtaining a value for the test statistic as large as or larger than that provided by the sample</li>
            <li><strong>Two-tailed test:</strong> Probability of obtaining a value for the test statistic at least as unlikely as or more unlikely than that provided by the sample</li>
          </ul>
        </div>

        <div class="module5-glossary-item">
          <h4>🎯 Critical Value</h4>
          <p><strong>Definition:</strong> A value that is compared with the test statistic to determine whether H₀ should be rejected.</p>
          <p><strong>Notation:</strong> z_α, z_{α/2}, t_α, t_{α/2}</p>
          <p><strong>Determination:</strong> Based on level of significance and test type</p>
          <p><strong>Decision rule:</strong> Reject H₀ if test statistic exceeds critical value</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📊 Two-Tailed Test</h4>
          <p><strong>Definition:</strong> A hypothesis test in which rejection of the null hypothesis occurs for values of the test statistic in either tail of its sampling distribution.</p>
          <p><strong>Hypothesis form:</strong> Hₐ: μ ≠ μ₀</p>
          <p><strong>Critical region:</strong> Both tails of the distribution</p>
          <p><strong>Critical values:</strong> ±z_{α/2} or ±t_{α/2}</p>
        </div>

        <div class="module5-glossary-item">
          <h4>⚡ Power</h4>
          <p><strong>Definition:</strong> The probability of correctly rejecting H₀ when it is false.</p>
          <p><strong>Notation:</strong> 1 - β</p>
          <p><strong>Calculation:</strong> Power = 1 - P(Type II error)</p>
          <p><strong>Factors affecting:</strong> Sample size, effect size, level of significance</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📈 Power Curve</h4>
          <p><strong>Definition:</strong> A graph of the probability of rejecting H₀ for all possible values of the population parameter not satisfying the null hypothesis. The power curve provides the probability of correctly rejecting the null hypothesis.</p>
          <p><strong>X-axis:</strong> Values of the population parameter</p>
          <p><strong>Y-axis:</strong> Power (probability of rejecting H₀)</p>
          <p><strong>Use:</strong> Visual representation of test performance across different parameter values</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📊 Acceptance Region</h4>
          <p><strong>Definition:</strong> The range of values for the test statistic that leads to failing to reject the null hypothesis.</p>
          <p><strong>Decision rule:</strong> Fail to reject H₀ if test statistic falls in acceptance region</p>
          <p><strong>Relationship:</strong> Complement of rejection region</p>
        </div>

        <div class="module5-glossary-item">
          <h4>❌ Rejection Region</h4>
          <p><strong>Definition:</strong> The range of values for the test statistic that leads to rejecting the null hypothesis.</p>
          <p><strong>Decision rule:</strong> Reject H₀ if test statistic falls in rejection region</p>
          <p><strong>Determination:</strong> Based on level of significance and test type</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📊 Effect Size</h4>
          <p><strong>Definition:</strong> The magnitude of the difference between the hypothesized value and the true population parameter.</p>
          <p><strong>Notation:</strong> |μ₀ - μₐ| for mean tests</p>
          <p><strong>Importance:</strong> Larger effect sizes are easier to detect with given sample size</p>
          <p><strong>Practical significance:</strong> Distinguishes statistical from practical importance</p>
        </div>

        <div class="module5-glossary-item">
          <h4>🎯 Decision-Making Test</h4>
          <p><strong>Definition:</strong> A hypothesis test where both Type I and Type II error probabilities are controlled, allowing for actionable decisions.</p>
          <p><strong>Conclusion:</strong> "Accept H₀" or "Reject H₀"</p>
          <p><strong>Application:</strong> Quality control, medical diagnosis, business decisions</p>
          <p><strong>Requirement:</strong> Sample size determination to control both error types</p>
        </div>

        <div class="module5-glossary-item">
          <h4>📈 Significance Test</h4>
          <p><strong>Definition:</strong> A hypothesis test that only controls for Type I error probability.</p>
          <p><strong>Conclusion:</strong> "Reject H₀" or "Fail to reject H₀"</p>
          <p><strong>Application:</strong> Research studies, exploratory analysis</p>
          <p><strong>Limitation:</strong> Type II error not controlled</p>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Glossary Usage Tips:</h5>
        <ul>
          <li><strong>Cross-reference:</strong> Use with Key Formulas section for complete understanding</li>
          <li><strong>Practice application:</strong> Apply terms to real hypothesis testing scenarios</li>
          <li><strong>Memory aid:</strong> Focus on relationships between terms (e.g., Power = 1 - β)</li>
          <li><strong>Professional language:</strong> Use precise terminology in statistical reports</li>
        </ul>
      </div>
    </div>
  `
};

const MODULE5_KEY_FORMULAS_NOTES = {
  keyFormulasModule5: `
    <div class="module5-container">
      <h2 class="module5-header">
        📐 Module 5 Key Formulas
      </h2>
      
      <div class="module5-intro-gradient-green">
        <h3>📊 Chapter 9: Hypothesis Testing Essential Formulas</h3>
        <p>This section contains the key formulas needed for hypothesis testing procedures and statistical inference.</p>
      </div>

      <div class="module5-formulas-container">
        <div class="module5-formula-item">
          <h4>🧮 Test Statistic for Hypothesis Tests About a Population Mean: σ Known</h4>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
            <strong>z = (x̄ - μ₀)/(σ/√n)</strong>
          </div>
          <p><strong>Formula (9.1)</strong></p>
          <p><strong>Use when:</strong> Population standard deviation σ is known</p>
          <p><strong>Distribution:</strong> Standard normal (z-distribution)</p>
          <p><strong>Example:</strong> Quality control with historical σ data</p>
        </div>

        <div class="module5-formula-item">
          <h4>🧮 Test Statistic for Hypothesis Tests About a Population Mean: σ Unknown</h4>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
            <strong>t = (x̄ - μ₀)/(s/√n)</strong>
          </div>
          <p><strong>Formula (9.2)</strong></p>
          <p><strong>Use when:</strong> Population standard deviation σ is unknown</p>
          <p><strong>Distribution:</strong> t-distribution with (n-1) degrees of freedom</p>
          <p><strong>Example:</strong> New product testing without historical data</p>
        </div>

        <div class="module5-formula-item">
          <h4>🧮 Test Statistic for Hypothesis Tests About a Population Proportion</h4>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
            <strong>z = (p̄ - p₀)/√[p₀(1-p₀)/n]</strong>
          </div>
          <p><strong>Formula (9.4)</strong></p>
          <p><strong>Use when:</strong> Testing population proportion p</p>
          <p><strong>Assumptions:</strong> np₀ ≥ 5 and n(1-p₀) ≥ 5</p>
          <p><strong>Distribution:</strong> Standard normal (z-distribution)</p>
          <p><strong>Example:</strong> Customer satisfaction rate testing</p>
        </div>

        <div class="module5-formula-item">
          <h4>📊 Sample Size for a One-Tailed Hypothesis Test About a Population Mean</h4>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 20px; margin: 20px 0;">
            <strong>n = (z_α + z_β)² × σ² / (μ₀ - μₐ)²</strong>
          </div>
          <p><strong>Formula (9.7)</strong></p>
          <p><strong>Use when:</strong> Determining sample size to control both Type I and Type II errors</p>
          <p><strong>For two-tailed tests:</strong> Replace z_α with z_{α/2}</p>
          <p><strong>Example:</strong> Quality control sample size planning</p>
        </div>
      </div>

      <h3 style="color: #e74c3c;">📋 Decision Rules and Critical Values</h3>

      <div class="module5-summary-box">
        <h5>🎯 Critical Value Decision Rules</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Test Type</strong></th>
                <th><strong>Critical Value</strong></th>
                <th><strong>Decision Rule</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">Lower Tail Test</td>
                <td>-z_α or -t_α</td>
                <td>Reject H₀ if test statistic ≤ critical value</td>
              </tr>
              <tr>
                <td class="module5-table-header">Upper Tail Test</td>
                <td>z_α or t_α</td>
                <td>Reject H₀ if test statistic ≥ critical value</td>
              </tr>
              <tr>
                <td class="module5-table-header">Two-Tailed Test</td>
                <td>±z_{α/2} or ±t_{α/2}</td>
                <td>Reject H₀ if |test statistic| ≥ critical value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #f39c12;">📊 p-Value Decision Rules</h3>

      <div class="module5-summary-box">
        <h5>🎯 p-Value Approach</h5>
        
        <div class="module5-white-box">
          <h6>📊 Universal Decision Rule:</h6>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
            <strong>Reject H₀ if p-value ≤ α</strong>
          </div>
          <p><strong>Fail to reject H₀ if p-value > α</strong></p>
        </div>

        <div class="module5-white-box">
          <h6>📊 p-Value Interpretation:</h6>
          <ul>
            <li><strong>p-value < 0.01:</strong> Very strong evidence against H₀</li>
            <li><strong>0.01 ≤ p-value < 0.05:</strong> Strong evidence against H₀</li>
            <li><strong>0.05 ≤ p-value < 0.10:</strong> Moderate evidence against H₀</li>
            <li><strong>p-value ≥ 0.10:</strong> Weak or no evidence against H₀</li>
          </ul>
        </div>
      </div>

      <h3 style="color: #27ae60;">⚡ Power and Error Relationships</h3>

      <div class="module5-summary-box">
        <h5>🎯 Key Relationships</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📊 Power Formula:</h6>
            <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
              <strong>Power = 1 - β</strong>
            </div>
            <p><strong>Interpretation:</strong> Probability of correctly rejecting H₀ when it's false</p>
          </div>
          <div class="module5-type1-box">
            <h6>📊 Confidence Level:</h6>
            <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
              <strong>Confidence Level = 1 - α</strong>
            </div>
            <p><strong>Interpretation:</strong> Probability of correctly failing to reject H₀ when it's true</p>
          </div>
        </div>
      </div>

      <h3 style="color: #9b59b6;">📈 Common Critical Values</h3>

      <div class="module5-summary-box">
        <h5>🎯 Frequently Used z-Values</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Level of Significance (α)</strong></th>
                <th><strong>z_α (One-Tailed)</strong></th>
                <th><strong>z_{α/2} (Two-Tailed)</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.10</td>
                <td>1.282</td>
                <td>1.645</td>
              </tr>
              <tr>
                <td>0.05</td>
                <td>1.645</td>
                <td>1.960</td>
              </tr>
              <tr>
                <td>0.01</td>
                <td>2.326</td>
                <td>2.576</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #e74c3c;">🎯 When to Use Each Formula</h3>

      <div class="module5-summary-box">
        <h5>📊 Formula Selection Guide</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ Use z-test (σ known) when:</h6>
            <ul>
              <li>Population standard deviation σ is known</li>
              <li>Historical data provides reliable σ estimate</li>
              <li>Large sample size with known σ</li>
              <li>Quality control with established standards</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>🔄 Use t-test (σ unknown) when:</h6>
            <ul>
              <li>Population standard deviation σ is unknown</li>
              <li>Must estimate σ from sample data</li>
              <li>Small to moderate sample sizes</li>
              <li>New products or situations without historical data</li>
            </ul>
          </div>
          <div class="module5-advantage-box">
            <h6>📊 Use proportion test when:</h6>
            <ul>
              <li>Testing population proportion p</li>
              <li>Binary or categorical outcomes</li>
              <li>np₀ ≥ 5 and n(1-p₀) ≥ 5</li>
              <li>Customer satisfaction, defect rates, etc.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Formula Application Tips:</h5>
        <ul>
          <li><strong>Check assumptions:</strong> Verify conditions before applying formulas</li>
          <li><strong>Use appropriate test:</strong> Choose based on parameter type and σ availability</li>
          <li><strong>Interpret results:</strong> Consider both statistical and practical significance</li>
          <li><strong>Document decisions:</strong> Clearly state which formula and why it was chosen</li>
        </ul>
      </div>

      <h3 style="color: #e74c3c;">🎯 When to Use Z-Test vs T-Test: The Sigma Decision Guide</h3>

      <div class="module5-concept-box">
        <h4>📊 The Fundamental Question: Is σ Known?</h4>
        <p>The choice between z-test and t-test fundamentally depends on whether we know the population standard deviation (σ). This decision affects the distribution we use, the critical values, and the precision of our results.</p>
      </div>

      <h4 style="color: #3498db;">✅ Use Z-Test When σ is Known</h4>

      <div class="module5-summary-box">
        <h5>📊 Z-Test Conditions and Applications</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>🎯 When to Use Z-Test:</h6>
            <ul>
              <li><strong>Population σ is known:</strong> Historical data provides reliable σ estimate</li>
              <li><strong>Large sample size:</strong> n ≥ 30 (Central Limit Theorem applies)</li>
              <li><strong>Quality control:</strong> Established process standards</li>
              <li><strong>Standardized tests:</strong> Known population parameters</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>📈 Z-Test Characteristics:</h6>
            <ul>
              <li><strong>Distribution:</strong> Standard Normal (z-distribution)</li>
              <li><strong>Critical values:</strong> z_{α/2} (from standard normal table)</li>
              <li><strong>Precision:</strong> Exact (no approximation)</li>
              <li><strong>Standard error:</strong> σ/√n (exact)</li>
            </ul>
          </div>
        </div>
      </div>

      <h4 style="color: #e67e22;">🔄 Use T-Test When σ is Unknown</h4>

      <div class="module5-summary-box">
        <h5>📊 T-Test Conditions and Applications</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>🎯 When to Use T-Test:</h6>
            <ul>
              <li><strong>Population σ is unknown:</strong> Must estimate from sample data</li>
              <li><strong>Small sample size:</strong> n < 30 (or any size when σ unknown)</li>
              <li><strong>New situations:</strong> No historical σ data available</li>
              <li><strong>Research studies:</strong> New populations or conditions</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>📈 T-Test Characteristics:</h6>
            <ul>
              <li><strong>Distribution:</strong> t-distribution with (n-1) degrees of freedom</li>
              <li><strong>Critical values:</strong> t_{α/2, df} (from t-distribution table)</li>
              <li><strong>Precision:</strong> Approximation (excellent results)</li>
              <li><strong>Standard error:</strong> s/√n (estimated)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #27ae60;">📋 Decision Flowchart</h3>

      <div class="module5-summary-box">
        <h5>🎯 Step-by-Step Decision Process</h5>
        
        <div class="module5-white-box">
          <h6>📊 Decision Questions:</h6>
          <ol>
            <li><strong>Do you know the population standard deviation (σ)?</strong>
              <ul>
                <li><strong>YES:</strong> Use Z-Test</li>
                <li><strong>NO:</strong> Continue to question 2</li>
              </ul>
            </li>
            <li><strong>Is your sample size large (n ≥ 30)?</strong>
              <ul>
                <li><strong>YES:</strong> You can use Z-Test as approximation (Central Limit Theorem)</li>
                <li><strong>NO:</strong> Use T-Test</li>
              </ul>
            </li>
            <li><strong>Are you testing a population mean?</strong>
              <ul>
                <li><strong>YES:</strong> Use T-Test (σ unknown) or Z-Test (σ known)</li>
                <li><strong>NO:</strong> Consider other tests (proportion, variance, etc.)</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <h3 style="color: #9b59b6;">📊 Practical Examples</h3>

      <div class="module5-example-box" style="border: 2px solid #3498db;">
        <h4>✅ Z-Test Example: Quality Control</h4>
        <p><strong>Scenario:</strong> A manufacturing company has been producing light bulbs for years with a known population standard deviation of σ = 50 hours. They want to test if a new production method changes the mean lifetime.</p>
        
        <div class="module5-white-box">
          <h6>📋 Why Z-Test is Appropriate:</h6>
          <ul>
            <li><strong>σ is known:</strong> Historical data provides σ = 50 hours</li>
            <li><strong>Established process:</strong> Long-term production data available</li>
            <li><strong>Reliable estimate:</strong> σ based on thousands of previous measurements</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h6>🧮 Z-Test Formula:</h6>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
            <strong>z = (x̄ - μ₀) / (σ/√n)</strong>
          </div>
          <p><strong>Critical value:</strong> z_{α/2} from standard normal distribution</p>
        </div>
      </div>

      <div class="module5-example-box" style="border: 2px solid #e67e22;">
        <h4>🔄 T-Test Example: New Product Testing</h4>
        <p><strong>Scenario:</strong> A company is testing a new energy drink formula. They have no historical data on energy drink consumption patterns and must estimate variability from their sample.</p>
        
        <div class="module5-white-box">
          <h6>📋 Why T-Test is Appropriate:</h6>
          <ul>
            <li><strong>σ is unknown:</strong> No historical data for new product</li>
            <li><strong>New situation:</strong> First time testing this formula</li>
            <li><strong>Sample estimate:</strong> Must use s (sample standard deviation)</li>
          </ul>
        </div>

        <div class="module5-step-box">
          <h6>🧮 T-Test Formula:</h6>
          <div class="module5-formula-bordered" style="text-align: center; font-size: 18px; margin: 15px 0;">
            <strong>t = (x̄ - μ₀) / (s/√n)</strong>
          </div>
          <p><strong>Critical value:</strong> t_{α/2, n-1} from t-distribution with (n-1) df</p>
        </div>
      </div>

      <h3 style="color: #2c3e50;">📈 Sample Size Considerations</h3>

      <div class="module5-summary-box">
        <h5>🎯 How Sample Size Affects the Decision</h5>
        
        <div class="module5-table-container">
          <table class="module5-table">
            <thead>
              <tr>
                <th><strong>Sample Size</strong></th>
                <th><strong>σ Known</strong></th>
                <th><strong>σ Unknown</strong></th>
                <th><strong>Recommendation</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="module5-table-header">n < 30</td>
                <td>Z-Test (exact)</td>
                <td>T-Test (required)</td>
                <td>Use T-Test for σ unknown</td>
              </tr>
              <tr>
                <td class="module5-table-header">n ≥ 30</td>
                <td>Z-Test (exact)</td>
                <td>Either Z-Test or T-Test</td>
                <td>Z-Test approximation acceptable</td>
              </tr>
              <tr>
                <td class="module5-table-header">n ≥ 100</td>
                <td>Z-Test (exact)</td>
                <td>Z-Test (good approximation)</td>
                <td>Z-Test preferred for simplicity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="color: #e74c3c;">💡 Key Differences Summary</h3>

      <div class="module5-summary-box">
        <h5>📊 Z-Test vs T-Test Comparison</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>✅ Z-Test Advantages:</h6>
            <ul>
              <li><strong>Exact results:</strong> No approximation needed</li>
              <li><strong>Simpler critical values:</strong> Standard normal distribution</li>
              <li><strong>Wider applicability:</strong> Works for any sample size when σ known</li>
              <li><strong>Historical data:</strong> Leverages existing knowledge</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>🔄 T-Test Advantages:</h6>
            <ul>
              <li><strong>More realistic:</strong> σ rarely known in practice</li>
              <li><strong>Conservative:</strong> Accounts for estimation uncertainty</li>
              <li><strong>Flexible:</strong> Works with any sample size</li>
              <li><strong>Modern approach:</strong> Standard in most research</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 style="color: #f39c12;">🎯 Excel Function Selection</h3>

      <div class="module5-summary-box">
        <h5>💻 Choosing the Right Excel Functions</h5>
        
        <div class="module5-error-grid">
          <div class="module5-benefits-box">
            <h6>📊 Z-Test Functions (σ known):</h6>
            <ul>
              <li><strong>Test Statistic:</strong> =(x̄ - μ₀)/(σ/SQRT(n))</li>
              <li><strong>p-value (two-tailed):</strong> =2*(1-NORM.S.DIST(ABS(z), TRUE))</li>
              <li><strong>Critical Value:</strong> =NORM.S.INV(1-α/2)</li>
              <li><strong>Confidence Interval:</strong> =x̄ ± NORM.S.INV(1-α/2)*σ/SQRT(n)</li>
            </ul>
          </div>
          <div class="module5-type1-box">
            <h6>📊 T-Test Functions (σ unknown):</h6>
            <ul>
              <li><strong>Test Statistic:</strong> =(x̄ - μ₀)/(s/SQRT(n))</li>
              <li><strong>p-value (two-tailed):</strong> =T.DIST.2T(ABS(t), n-1)</li>
              <li><strong>Critical Value:</strong> =T.INV(1-α/2, n-1)</li>
              <li><strong>Confidence Interval:</strong> =x̄ ± T.INV(1-α/2, n-1)*s/SQRT(n)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="module5-notation-box">
        <h5>💡 Memory Aids for Test Selection:</h5>
        <ul>
          <li><strong>Z-Test:</strong> "Z" for "Known" (σ is known) - Z = Known</li>
          <li><strong>T-Test:</strong> "T" for "Unknown" (σ is unknown) - T = Unknown</li>
          <li><strong>Large samples:</strong> Z-Test approximation acceptable even when σ unknown</li>
          <li><strong>Conservative approach:</strong> When in doubt, use T-Test</li>
        </ul>
      </div>
    </div>
  `
};

// Make constants available globally for browser environment
window.MODULE5_HYPOTHESIS_BASICS_NOTES = MODULE5_HYPOTHESIS_BASICS_NOTES;
window.MODULE5_ONE_POPULATION_MEAN_NOTES = MODULE5_ONE_POPULATION_MEAN_NOTES;
window.MODULE5_P_VALUE_NOTES = MODULE5_P_VALUE_NOTES;
window.MODULE5_TYPE_I_TYPE_II_NOTES = MODULE5_TYPE_I_TYPE_II_NOTES;
window.MODULE5_POPULATION_MEAN_SIGMA_UNKNOWN_NOTES = MODULE5_POPULATION_MEAN_SIGMA_UNKNOWN_NOTES;
window.MODULE5_POPULATION_PROPORTION_NOTES = MODULE5_POPULATION_PROPORTION_NOTES;
window.MODULE5_TWO_POPULATION_MEANS_NOTES = MODULE5_TWO_POPULATION_MEANS_NOTES;
window.MODULE5_MATCHED_SAMPLES_NOTES = MODULE5_MATCHED_SAMPLES_NOTES;
window.MODULE5_PRACTICAL_APPLICATIONS_NOTES = MODULE5_PRACTICAL_APPLICATIONS_NOTES;
window.MODULE5_GLOSSARY_NOTES = MODULE5_GLOSSARY_NOTES;
window.MODULE5_KEY_FORMULAS_NOTES = MODULE5_KEY_FORMULAS_NOTES;

// Export the module for Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    ...MODULE5_HYPOTHESIS_BASICS_NOTES,
    ...MODULE5_ONE_POPULATION_MEAN_NOTES,
    ...MODULE5_P_VALUE_NOTES,
    ...MODULE5_TYPE_I_TYPE_II_NOTES,
    ...MODULE5_POPULATION_MEAN_SIGMA_UNKNOWN_NOTES,
    ...MODULE5_POPULATION_PROPORTION_NOTES,
    ...MODULE5_TWO_POPULATION_MEANS_NOTES,
    ...MODULE5_MATCHED_SAMPLES_NOTES,
    ...MODULE5_PRACTICAL_APPLICATIONS_NOTES,
    ...MODULE5_GLOSSARY_NOTES,
    ...MODULE5_KEY_FORMULAS_NOTES
  };
}