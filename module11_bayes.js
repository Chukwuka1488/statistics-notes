// Module 11 - Bayes' Theorem and Business Applications
const MODULE11_BAYES_NOTES = {
    bayesTheorem: [
        {
            id: 111,
            title: "Bayes' Theorem and Probability Revision",
            category: "bayes-theorem",
            content: `<h3><strong>Bayes' Theorem</strong></h3>
<p>In the discussion of conditional probability, we indicated that revising probabilities when new information is obtained is an important phase of probability analysis. Often, we begin the analysis with initial or prior probability estimates for specific events of interest. Then, from sources such as a sample, a special report, or a product test, we obtain additional information about the events. Given this new information, we update the prior probability values by calculating revised probabilities, referred to as posterior probabilities. Bayes' theorem provides a means for making these probability calculations.</p>

<h4><strong>Probability Revision Process</strong></h4>
<p>The steps in the probability revision process are:</p>
<ol>
<li><strong>Prior Probabilities:</strong> Initial probability estimates</li>
<li><strong>New Information:</strong> Additional data or evidence</li>
<li><strong>Application of Bayes' Theorem:</strong> Mathematical calculation</li>
<li><strong>Posterior Probabilities:</strong> Updated probability estimates</li>
</ol>

<h4><strong>Bayes' Theorem Formula</strong></h4>
<p class="formula">P(A|B) = [P(B|A) × P(A)] / P(B)</p>

<h4><strong>Where:</strong></h4>
<ul>
<li><strong>P(A|B):</strong> Posterior probability (updated probability of A given B)</li>
<li><strong>P(B|A):</strong> Likelihood (probability of B given A)</li>
<li><strong>P(A):</strong> Prior probability (initial probability of A)</li>
<li><strong>P(B):</strong> Total probability of B</li>
</ul>

<h4><strong>Law of Total Probability</strong></h4>
<p>To find P(B), we use the law of total probability:</p>
<p class="formula">P(B) = P(B|A₁)P(A₁) + P(B|A₂)P(A₂) + ... + P(B|Aₙ)P(Aₙ)</p>

<h4><strong>Comprehensive Example: Two-Supplier Quality Control</strong></h4>
<p>A manufacturing firm receives shipments from two suppliers:</p>
<ul>
<li><strong>Supplier 1 (A₁):</strong> 65% of parts, 98% good quality, 2% bad quality</li>
<li><strong>Supplier 2 (A₂):</strong> 35% of parts, 95% good quality, 5% bad quality</li>
</ul>

<h5><strong>Prior Probabilities:</strong></h5>
<ul>
<li>P(A₁) = 0.65 (65% from supplier 1)</li>
<li>P(A₂) = 0.35 (35% from supplier 2)</li>
</ul>

<h5><strong>Conditional Probabilities:</strong></h5>
<ul>
<li>P(G|A₁) = 0.98, P(B|A₁) = 0.02 (Supplier 1 quality)</li>
<li>P(G|A₂) = 0.95, P(B|A₂) = 0.05 (Supplier 2 quality)</li>
</ul>

<h5><strong>Joint Probabilities (Using Multiplication Rule):</strong></h5>
<ul>
<li>P(A₁ ∩ G) = P(A₁) × P(G|A₁) = 0.65 × 0.98 = 0.6370</li>
<li>P(A₁ ∩ B) = P(A₁) × P(B|A₁) = 0.65 × 0.02 = 0.0130</li>
<li>P(A₂ ∩ G) = P(A₂) × P(G|A₂) = 0.35 × 0.95 = 0.3325</li>
<li>P(A₂ ∩ B) = P(A₂) × P(B|A₂) = 0.35 × 0.05 = 0.0175</li>
</ul>

<h5><strong>Question:</strong> If a part is bad, what's the probability it came from supplier 1?</h5>

<h6><strong>Solution using Bayes' Theorem:</strong></h6>
<p class="formula">P(A₁|B) = P(A₁)P(B|A₁) / [P(A₁)P(B|A₁) + P(A₂)P(B|A₂)]</p>
<p class="formula">P(A₁|B) = (0.65 × 0.02) / [(0.65 × 0.02) + (0.35 × 0.05)]</p>
<p class="formula">P(A₁|B) = 0.0130 / (0.0130 + 0.0175) = 0.0130 / 0.0305 = 0.4262</p>

<p><strong>Answer:</strong> Given that a part is bad, there's a 42.62% probability it came from supplier 1.</p>

<h5><strong>Tabular Approach to Bayes' Theorem</strong></h5>
` + Utils.createBlueTable(
    ['Events', 'Prior P(Ai)', 'Conditional P(B|Ai)', 'Joint P(Ai ∩ B)', 'Posterior P(Ai|B)'],
    [
        ['A₁ (Supplier 1)', '0.65', '0.02', '0.0130', '0.0130/0.0305 = 0.4262'],
        ['A₂ (Supplier 2)', '0.35', '0.05', '0.0175', '0.0175/0.0305 = 0.5738'],
        ['<strong>Total</strong>', '<strong>1.00</strong>', '', '<strong>0.0305</strong>', '<strong>1.0000</strong>']
    ]
) + `

<h4><strong>General Bayes' Theorem Formula</strong></h4>
<p>For n mutually exclusive events A₁, A₂, ..., Aₙ whose union is the entire sample space:</p>
<p class="formula">P(Ai|B) = P(Ai)P(B|Ai) / [P(A₁)P(B|A₁) + P(A₂)P(B|A₂) + ... + P(Aₙ)P(B|Aₙ)]</p>

<h4><strong>Merits of Bayes' Theorem</strong></h4>
<ul>
<li><strong>Dynamic Updates:</strong> Allows probability revision as new information becomes available</li>
<li><strong>Quantitative Decision Making:</strong> Provides numerical basis for decisions under uncertainty</li>
<li><strong>Handles Uncertainty:</strong> Incorporates both prior knowledge and new evidence</li>
<li><strong>Scientific Rigor:</strong> Mathematically sound approach to probability updating</li>
<li><strong>Flexible Framework:</strong> Applicable across diverse fields and applications</li>
<li><strong>Transparent Logic:</strong> Clear relationship between prior beliefs and new evidence</li>
</ul>

<h4><strong>Demerits of Bayes' Theorem</strong></h4>
<ul>
<li><strong>Prior Dependence:</strong> Results heavily depend on initial prior probabilities</li>
<li><strong>Subjective Priors:</strong> Prior probabilities may be difficult to estimate objectively</li>
<li><strong>Computational Complexity:</strong> Can become complex with many events and conditions</li>
<li><strong>Data Requirements:</strong> Requires accurate conditional probability estimates</li>
<li><strong>Assumption Sensitivity:</strong> Results sensitive to independence and completeness assumptions</li>
<li><strong>Interpretation Challenges:</strong> May be counterintuitive to non-statisticians</li>
</ul>

<h4><strong>Applications in Information Systems</strong></h4>
<ul>
<li><strong>Database Query Optimization:</strong> Updating query performance estimates based on usage patterns</li>
<li><strong>Network Security:</strong> Intrusion detection systems updating threat probabilities</li>
<li><strong>System Reliability:</strong> Updating failure probability estimates based on monitoring data</li>
<li><strong>User Behavior Modeling:</strong> Predicting user actions based on interaction history</li>
<li><strong>Resource Allocation:</strong> Dynamic resource distribution based on system performance</li>
<li><strong>Data Quality Assessment:</strong> Evaluating data reliability based on source characteristics</li>
</ul>

<h4><strong>Applications in Artificial Intelligence (AI)</strong></h4>
<ul>
<li><strong>Expert Systems:</strong> Medical diagnosis systems updating disease probabilities</li>
<li><strong>Decision Support Systems:</strong> Risk assessment and recommendation engines</li>
<li><strong>Uncertainty Management:</strong> Handling incomplete and uncertain information</li>
<li><strong>Belief Networks:</strong> Bayesian networks for complex probabilistic reasoning</li>
<li><strong>Learning Systems:</strong> Adaptive systems that update knowledge with new data</li>
<li><strong>Robotics:</strong> Sensor fusion and environment understanding in autonomous systems</li>
</ul>

<h4><strong>Applications in Machine Learning (ML)</strong></h4>
<ul>
<li><strong>Naive Bayes Classifiers:</strong> Text classification, spam detection, sentiment analysis</li>
<li><strong>Bayesian Neural Networks:</strong> Neural networks with probabilistic weights</li>
<li><strong>Bayesian Optimization:</strong> Hyperparameter tuning and model selection</li>
<li><strong>Probabilistic Graphical Models:</strong> Bayesian networks and Markov models</li>
<li><strong>Online Learning:</strong> Incremental learning with streaming data</li>
<li><strong>Active Learning:</strong> Intelligent data sampling for model training</li>
<li><strong>Uncertainty Quantification:</strong> Providing confidence intervals for predictions</li>
</ul>

<h4><strong>Applications in Natural Language Processing (NLP)</strong></h4>
<ul>
<li><strong>Language Modeling:</strong> Predicting next words in text sequences</li>
<li><strong>Part-of-Speech Tagging:</strong> Determining grammatical roles of words</li>
<li><strong>Named Entity Recognition:</strong> Identifying people, places, and organizations</li>
<li><strong>Machine Translation:</strong> Statistical translation models</li>
<li><strong>Sentiment Analysis:</strong> Classifying text sentiment as positive, negative, or neutral</li>
<li><strong>Topic Modeling:</strong> Discovering hidden topics in document collections</li>
<li><strong>Spam Detection:</strong> Filtering unwanted emails based on content analysis</li>
<li><strong>Question Answering:</strong> Probabilistic approaches to finding answers in text</li>
</ul>

<h4><strong>Key Insights</strong></h4>
<ul>
<li><strong>Prior Knowledge Integration:</strong> Bayes' theorem elegantly combines existing knowledge with new evidence</li>
<li><strong>Continuous Learning:</strong> Enables systems to improve performance over time</li>
<li><strong>Uncertainty Management:</strong> Provides framework for decision-making under uncertainty</li>
<li><strong>Cross-Domain Applicability:</strong> Same mathematical framework applies across diverse fields</li>
<li><strong>Computational Efficiency:</strong> Modern implementations handle large-scale applications</li>
</ul>`
        },
        {
            id: 112,
            title: "Business Applications of Bayes' Theorem",
            category: "business-bayes",
            content: `<h3><strong>Business Applications of Bayes' Theorem</strong></h3>

<h4><strong>Example 1: Credit Risk Assessment</strong></h4>
<p>A bank uses customer data to assess credit risk:</p>
` + Utils.createBlueTable(
    ['Customer Type', 'Prior Probability', 'P(Default|Type)', 'P(Default ∩ Type)'],
    [
        ['High Income', '0.30', '0.02', '0.006'],
        ['Medium Income', '0.50', '0.05', '0.025'],
        ['Low Income', '0.20', '0.15', '0.030'],
        ['<strong>Total</strong>', '<strong>1.00</strong>', '', '<strong>0.061</strong>']
    ]
) + `

<p><strong>Question:</strong> If a customer defaults, what's the probability they were a low-income customer?</p>

<h6><strong>Solution:</strong></h6>
<p class="formula">P(Low Income|Default) = P(Default|Low Income) × P(Low Income) / P(Default)</p>
<p class="formula">P(Low Income|Default) = 0.15 × 0.20 / 0.061 = 0.030 / 0.061 = 0.492</p>

<p><strong>Answer:</strong> About 49.2% of defaulting customers are low-income customers.</p>

<h4><strong>Example 2: Marketing Campaign Effectiveness</strong></h4>
<p>A company analyzes the effectiveness of different marketing channels:</p>
` + Utils.createBlueTable(
    ['Marketing Channel', 'Prior Probability', 'P(Purchase|Channel)', 'P(Purchase ∩ Channel)'],
    [
        ['Email', '0.40', '0.08', '0.032'],
        ['Social Media', '0.30', '0.12', '0.036'],
        ['Direct Mail', '0.20', '0.05', '0.010'],
        ['TV Ads', '0.10', '0.15', '0.015'],
        ['<strong>Total</strong>', '<strong>1.00</strong>', '', '<strong>0.093</strong>']
    ]
) + `

<p><strong>Question:</strong> If a customer makes a purchase, what's the probability they came from social media?</p>

<h6><strong>Solution:</strong></h6>
<p class="formula">P(Social Media|Purchase) = 0.12 × 0.30 / 0.093 = 0.036 / 0.093 = 0.387</p>

<p><strong>Answer:</strong> About 38.7% of purchases come from social media marketing.</p>

<h4><strong>Example 3: Quality Control</strong></h4>
<p>A manufacturer has three suppliers with different defect rates:</p>
` + Utils.createBlueTable(
    ['Supplier', 'Prior Probability', 'P(Defect|Supplier)', 'P(Defect ∩ Supplier)'],
    [
        ['Supplier A', '0.50', '0.02', '0.010'],
        ['Supplier B', '0.30', '0.05', '0.015'],
        ['Supplier C', '0.20', '0.10', '0.020'],
        ['<strong>Total</strong>', '<strong>1.00</strong>', '', '<strong>0.045</strong>']
    ]
) + `

<p><strong>Question:</strong> If a defective part is found, what's the probability it came from Supplier C?</p>

<h6><strong>Solution:</strong></h6>
<p class="formula">P(Supplier C|Defect) = 0.10 × 0.20 / 0.045 = 0.020 / 0.045 = 0.444</p>

<p><strong>Answer:</strong> About 44.4% of defective parts come from Supplier C, despite them providing only 20% of parts.</p>

<h4><strong>Key Business Insights</strong></h4>
<ul>
<li><strong>Risk Management:</strong> Update risk assessments with new information</li>
<li><strong>Marketing Optimization:</strong> Identify most effective marketing channels</li>
<li><strong>Quality Control:</strong> Focus improvement efforts on problematic suppliers</li>
<li><strong>Customer Segmentation:</strong> Understand customer behavior patterns</li>
</ul>`
        },
        {
            id: 113,
            title: "Bayes' Theorem in Decision Making",
            category: "decision-making",
            content: `<h3><strong>Bayes' Theorem in Business Decision Making</strong></h3>

<h4><strong>Example: Product Launch Decision</strong></h4>
<p>A company is considering launching a new product. Historical data shows:</p>
` + Utils.createBlueTable(
    ['Market Condition', 'Prior Probability', 'P(Success|Condition)', 'P(Success ∩ Condition)'],
    [
        ['Strong Market', '0.30', '0.80', '0.240'],
        ['Moderate Market', '0.50', '0.50', '0.250'],
        ['Weak Market', '0.20', '0.20', '0.040'],
        ['<strong>Total</strong>', '<strong>1.00</strong>', '', '<strong>0.530</strong>']
    ]
) + `

<p><strong>Initial Assessment:</strong> P(Success) = 0.530 or 53%</p>

<h5><strong>Scenario: Market Research Results</strong></h5>
<p>After conducting market research, the company receives positive feedback. Historical data shows:</p>
<ul>
<li>P(Positive Research|Strong Market) = 0.90</li>
<li>P(Positive Research|Moderate Market) = 0.60</li>
<li>P(Positive Research|Weak Market) = 0.20</li>
</ul>

<p><strong>Question:</strong> Given positive research results, what's the updated probability of success?</p>

<h6><strong>Step 1: Calculate P(Positive Research)</strong></h6>
<p class="formula">P(Positive Research) = 0.90×0.30 + 0.60×0.50 + 0.20×0.20 = 0.27 + 0.30 + 0.04 = 0.61</p>

<h6><strong>Step 2: Update Probabilities Using Bayes' Theorem</strong></h6>
<ul>
<li>P(Strong Market|Positive Research) = 0.90×0.30/0.61 = 0.443</li>
<li>P(Moderate Market|Positive Research) = 0.60×0.50/0.61 = 0.492</li>
<li>P(Weak Market|Positive Research) = 0.20×0.20/0.61 = 0.066</li>
</ul>

<h6><strong>Step 3: Calculate Updated Success Probability</strong></h6>
<p class="formula">P(Success|Positive Research) = 0.80×0.443 + 0.50×0.492 + 0.20×0.066 = 0.354 + 0.246 + 0.013 = 0.613</p>

<p><strong>Result:</strong> The probability of success increased from 53% to 61.3% after positive market research!</p>

<h4><strong>Decision Tree Analysis</strong></h4>
<p>This updated probability can be used in decision trees for:</p>
<ul>
<li><strong>Go/No-Go Decisions:</strong> Compare expected value with and without the project</li>
<li><strong>Resource Allocation:</strong> Determine optimal investment levels</li>
<li><strong>Risk Assessment:</strong> Update contingency plans based on new information</li>
<li><strong>Timeline Planning:</strong> Adjust project schedules based on success probability</li>
</ul>

<h4><strong>Continuous Learning</strong></h4>
<p>Bayes' Theorem enables businesses to:</p>
<ul>
<li><strong>Learn from Experience:</strong> Update probabilities as new data becomes available</li>
<li><strong>Adapt Strategies:</strong> Modify approaches based on updated assessments</li>
<li><strong>Improve Forecasting:</strong> Refine predictions with additional information</li>
<li><strong>Optimize Operations:</strong> Make better decisions with more accurate probabilities</li>
</ul>`
        }
    ]
}; 