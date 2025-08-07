// Module 9 - Probability Rules: Complement, Union, Intersection, and Conditional Probability
const MODULE9_PROBABILITY_RULES_NOTES = {
    probabilityRules: [
        {
            id: 91,
            title: "Some Basic Relationships of Probability",
            category: "basic-probability-relationships",
            content: `<h3><strong>Some Basic Relationships of Probability</strong></h3>

<h4><strong>1. Complement of an Event</strong></h4>
<p>Given an event A, the <strong>complement</strong> of A is defined to be the event consisting of all sample points that are not in A. The complement of A is denoted by Aᶜ.</p>

<h5><strong>Complement Rule</strong></h5>
<p>In any probability application, either event A or its complement Aᶜ must occur. Therefore:</p>
<p class="formula">P(A) + P(Aᶜ) = 1</p>
<p class="formula">P(A) = 1 - P(Aᶜ)</p>

<h6><strong>Example 1: Sales Management</strong></h6>
<p>A sales manager states that 80% of new customer contacts result in no sale. Let A denote the event of a sale and Aᶜ denote the event of no sale.</p>
<ul>
<li>P(Aᶜ) = 0.80 (no sale)</li>
<li>P(A) = 1 - P(Aᶜ) = 1 - 0.80 = 0.20</li>
<li><strong>Conclusion:</strong> A new customer contact has a 0.20 probability of resulting in a sale</li>
</ul>

<h6><strong>Example 2: Quality Control</strong></h6>
<p>A purchasing agent states a 0.90 probability that a supplier will send a shipment free of defective parts.</p>
<ul>
<li>P(No Defects) = 0.90</li>
<li>P(Defects) = 1 - 0.90 = 0.10</li>
<li><strong>Conclusion:</strong> There is a 0.10 probability that the shipment will contain defective parts</li>
</ul>

<h4><strong>2. Addition Law</strong></h4>
<p>The addition law helps us find the probability that at least one of two events occurs. That is, we want to know the probability that event A or event B or both occur.</p>

<h5><strong>Union of Two Events</strong></h5>
<p>The <strong>union</strong> of A and B is the event containing all sample points belonging to A or B or both. The union is denoted by A ∪ B.</p>

<h5><strong>Intersection of Two Events</strong></h5>
<p>The <strong>intersection</strong> of A and B is the event containing the sample points belonging to both A and B. The intersection is denoted by A ∩ B.</p>

<h5><strong>Addition Law Formula</strong></h5>
<p class="formula">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>

<h6><strong>Understanding the Formula</strong></h6>
<p>The first two terms, P(A) + P(B), account for all sample points in A ∪ B. However, because sample points in the intersection A ∩ B are in both A and B, we count them twice. We correct this by subtracting P(A ∩ B).</p>

<h6><strong>Example 1: Employee Performance Evaluation</strong></h6>
<p>In a small assembly plant with 50 employees:</p>
<ul>
<li>5 workers completed work late</li>
<li>6 workers assembled defective products</li>
<li>2 workers both completed work late AND assembled defective products</li>
</ul>

<p><strong>Let:</strong></p>
<ul>
<li>L = event that work is completed late</li>
<li>D = event that assembled product is defective</li>
</ul>

<p><strong>Probabilities:</strong></p>
<ul>
<li>P(L) = 5/50 = 0.10</li>
<li>P(D) = 6/50 = 0.12</li>
<li>P(L ∩ D) = 2/50 = 0.04</li>
</ul>

<p><strong>Question:</strong> What is the probability that an employee received a poor performance rating (work late OR defective)?</p>
<p class="formula">P(L ∪ D) = P(L) + P(D) - P(L ∩ D) = 0.10 + 0.12 - 0.04 = 0.18</p>
<p><strong>Answer:</strong> There is a 0.18 probability that a randomly selected employee received a poor performance rating.</p>

<h6><strong>Example 2: Employee Turnover Analysis</strong></h6>
<p>A personnel manager found that among employees who left within two years:</p>
<ul>
<li>30% left due to salary dissatisfaction</li>
<li>20% left due to work assignment dissatisfaction</li>
<li>12% left due to both salary AND work assignment dissatisfaction</li>
</ul>

<p><strong>Let:</strong></p>
<ul>
<li>S = event that employee leaves due to salary</li>
<li>W = event that employee leaves due to work assignment</li>
</ul>

<p><strong>Probabilities:</strong></p>
<ul>
<li>P(S) = 0.30</li>
<li>P(W) = 0.20</li>
<li>P(S ∩ W) = 0.12</li>
</ul>

<p><strong>Question:</strong> What is the probability that an employee leaves for salary OR work assignment reasons?</p>
<p class="formula">P(S ∪ W) = P(S) + P(W) - P(S ∩ W) = 0.30 + 0.20 - 0.12 = 0.38</p>
<p><strong>Answer:</strong> There is a 0.38 probability that an employee leaves for salary or work assignment reasons.</p>

<h4><strong>3. Mutually Exclusive Events</strong></h4>
<p>Two events are said to be <strong>mutually exclusive</strong> if the events have no sample points in common. When one event occurs, the other cannot occur.</p>

<h5><strong>Addition Law for Mutually Exclusive Events</strong></h5>
<p>If events A and B are mutually exclusive, then P(A ∩ B) = 0, and the addition law becomes:</p>
<p class="formula">P(A ∪ B) = P(A) + P(B)</p>

<h6><strong>Example: Product Categories</strong></h6>
<p>A store sells three mutually exclusive product categories:</p>
` + Utils.createBlueTable(
    ['Product Category', 'Probability of Sale'],
    [
        ['Electronics', '0.35'],
        ['Clothing', '0.40'],
        ['Books', '0.25']
    ]
) + `
<p>P(Electronics OR Clothing) = 0.35 + 0.40 = 0.75</p>`
        },
        {
            id: 92,
            title: "Conditional Probability and Joint Probability Tables",
            category: "conditional-probability",
            content: `<h3><strong>Conditional Probability</strong></h3>
<p>Often, the probability of an event is influenced by whether a related event already occurred. The <strong>conditional probability</strong> of event A given that event B has occurred is denoted P(A|B).</p>

<h4><strong>Conditional Probability Formula</strong></h4>
<p class="formula">P(A|B) = P(A ∩ B) / P(B), provided P(B) > 0</p>

<h5><strong>Understanding the Formula</strong></h5>
<p>The notation P(A|B) reads "the probability of A given B." This tells us we are considering the probability of event A given the condition that event B has occurred.</p>

<h4><strong>Case Study: Police Promotion Discrimination Analysis</strong></h4>
<p>A major metropolitan police force consists of 1200 officers (960 men, 240 women). Over two years, 324 officers received promotions. The breakdown is shown below:</p>

<h5><strong>Raw Data Table</strong></h5>
` + Utils.createBlueTable(
    ['', 'Men', 'Women', 'Total'],
    [
        ['Promoted', '288', '36', '324'],
        ['Not Promoted', '672', '204', '876'],
        ['<strong>Total</strong>', '<strong>960</strong>', '<strong>240</strong>', '<strong>1200</strong>']
    ]
) + `

<h5><strong>Joint Probability Table</strong></h5>
<p>Dividing by 1200 to get probabilities:</p>
` + Utils.createBlueTable(
    ['', 'Men (M)', 'Women (W)', 'Total'],
    [
        ['Promoted (A)', '0.24', '0.03', '0.27'],
        ['Not Promoted (Aᶜ)', '0.56', '0.17', '0.73'],
        ['<strong>Total</strong>', '<strong>0.80</strong>', '<strong>0.20</strong>', '<strong>1.00</strong>']
    ]
) + `

<h6><strong>Joint Probabilities (Body of Table):</strong></h6>
<ul>
<li>P(M ∩ A) = 0.24 (probability officer is man AND promoted)</li>
<li>P(M ∩ Aᶜ) = 0.56 (probability officer is man AND not promoted)</li>
<li>P(W ∩ A) = 0.03 (probability officer is woman AND promoted)</li>
<li>P(W ∩ Aᶜ) = 0.17 (probability officer is woman AND not promoted)</li>
</ul>

<h6><strong>Marginal Probabilities (Margins of Table):</strong></h6>
<ul>
<li>P(M) = 0.80 (80% of force is male)</li>
<li>P(W) = 0.20 (20% of force is female)</li>
<li>P(A) = 0.27 (27% of all officers promoted)</li>
<li>P(Aᶜ) = 0.73 (73% of all officers not promoted)</li>
</ul>

<h5><strong>Conditional Probability Analysis</strong></h5>
<p><strong>Question:</strong> What is the probability of promotion given the officer is male?</p>
<p class="formula">P(A|M) = P(A ∩ M) / P(M) = 0.24 / 0.80 = 0.30</p>
<p><strong>Interpretation:</strong> Given that an officer is male, there is a 30% chance of promotion.</p>

<p><strong>Question:</strong> What is the probability of promotion given the officer is female?</p>
<p class="formula">P(A|W) = P(A ∩ W) / P(W) = 0.03 / 0.20 = 0.15</p>
<p><strong>Interpretation:</strong> Given that an officer is female, there is a 15% chance of promotion.</p>

<h5><strong>Discrimination Analysis</strong></h5>
<p><strong>Key Findings:</strong></p>
<ul>
<li><strong>P(A|M) = 0.30</strong> (30% promotion rate for males)</li>
<li><strong>P(A|W) = 0.15</strong> (15% promotion rate for females)</li>
<li><strong>P(A) = 0.27</strong> (27% overall promotion rate)</li>
</ul>

<p><strong>Conclusion:</strong> The probability of promotion given male status (30%) is twice the probability of promotion given female status (15%). This supports the discrimination argument.</p>

<h4><strong>Dependent vs. Independent Events</strong></h4>
<p>In this case:</p>
<ul>
<li>P(A) = 0.27 (overall promotion probability)</li>
<li>P(A|M) = 0.30 ≠ P(A) → Events A and M are <strong>dependent</strong></li>
<li>P(A|W) = 0.15 ≠ P(A) → Events A and W are <strong>dependent</strong></li>
</ul>

<h5><strong>Definition of Independence</strong></h5>
<p>Two events A and B are <strong>independent</strong> if:</p>
<p class="formula">P(A|B) = P(A) or P(B|A) = P(B)</p>
<p>Otherwise, the events are <strong>dependent</strong>.</p>

<h4><strong>Multiplication Law</strong></h4>
<p>The multiplication law is used to compute the probability of the intersection of two events:</p>
<p class="formula">P(A ∩ B) = P(B) × P(A|B) = P(A) × P(B|A)</p>

<h5><strong>Example: Newspaper Subscriptions</strong></h5>
<p>In a neighborhood:</p>
<ul>
<li>P(Daily subscription) = 0.84</li>
<li>P(Sunday subscription | Daily subscription) = 0.75</li>
</ul>
<p><strong>Question:</strong> What is the probability of subscribing to both editions?</p>
<p class="formula">P(S ∩ D) = P(D) × P(S|D) = 0.84 × 0.75 = 0.63</p>
<p><strong>Answer:</strong> 63% of households subscribe to both editions.</p>

<h5><strong>Multiplication Law for Independent Events</strong></h5>
<p>If events A and B are independent, then:</p>
<p class="formula">P(A ∩ B) = P(A) × P(B)</p>

<h6><strong>Example: Gas Station Credit Card Usage</strong></h6>
<p>At a service station, 80% of customers use credit cards for gasoline purchases.</p>
<p><strong>Question:</strong> What is the probability that the next two customers both use credit cards?</p>
<p class="formula">P(A ∩ B) = P(A) × P(B) = 0.80 × 0.80 = 0.64</p>
<p><strong>Answer:</strong> There is a 64% probability that both customers will use credit cards.</p>

<h4><strong>Business Applications</strong></h4>
<ul>
<li><strong>HR Analytics:</strong> Promotion and hiring discrimination analysis</li>
<li><strong>Marketing:</strong> Customer behavior and purchase patterns</li>
<li><strong>Risk Assessment:</strong> Credit scoring and insurance underwriting</li>
<li><strong>Quality Control:</strong> Defect detection and process improvement</li>
</ul>

<h4><strong>When to Use Each Probability Concept</strong></h4>

<h5><strong>1. Intersection (A ∩ B) - "AND" Probability</strong></h5>
<p><strong>Use when:</strong> You want the probability that BOTH events occur simultaneously.</p>
<p><strong>Formula:</strong> P(A ∩ B) = P(A) × P(B|A) = P(B) × P(A|B)</p>
<p><strong>Examples:</strong></p>
<ul>
<li><strong>Quality Control:</strong> "What's the probability a product is defective AND fails inspection?"</li>
<li><strong>Marketing:</strong> "What's the probability a customer is high-income AND buys premium products?"</li>
<li><strong>HR:</strong> "What's the probability an employee is female AND gets promoted?"</li>
</ul>

<h5><strong>2. Union (A ∪ B) - "OR" Probability</strong></h5>
<p><strong>Use when:</strong> You want the probability that AT LEAST ONE of the events occurs.</p>
<p><strong>Formula:</strong> P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>
<p><strong>Examples:</strong></p>
<ul>
<li><strong>Risk Management:</strong> "What's the probability of fire OR theft damage?"</li>
<li><strong>Customer Service:</strong> "What's the probability a customer calls OR emails for support?"</li>
<li><strong>Project Management:</strong> "What's the probability a project is late OR over budget?"</li>
</ul>

<h5><strong>3. Joint Probability - "BOTH" with Known Data</strong></h5>
<p><strong>Use when:</strong> You have frequency data and want to find the probability of two events occurring together.</p>
<p><strong>Formula:</strong> P(A ∩ B) = Number of (A and B) / Total number</p>
<p><strong>Examples:</strong></p>
<ul>
<li><strong>Survey Analysis:</strong> "What's the probability a respondent is young AND satisfied?"</li>
<li><strong>Sales Data:</strong> "What's the probability a sale is large AND from a new customer?"</li>
<li><strong>Inventory:</strong> "What's the probability an item is in stock AND not damaged?"</li>
</ul>

<h5><strong>4. Addition Law - "OR" with Overlap</strong></h5>
<p><strong>Use when:</strong> Events can occur together (not mutually exclusive) and you want "OR" probability.</p>
<p><strong>Formula:</strong> P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>
<p><strong>Key Insight:</strong> Subtract the overlap to avoid double-counting.</p>
<p><strong>Examples:</strong></p>
<ul>
<li><strong>Employee Skills:</strong> "What's the probability an employee knows Excel OR Python?"</li>
<li><strong>Product Features:</strong> "What's the probability a customer wants fast shipping OR free returns?"</li>
<li><strong>Service Issues:</strong> "What's the probability a customer complains about price OR quality?"</li>
</ul>

<h5><strong>5. Multiplication Law - "AND" with Dependence</strong></h5>
<p><strong>Use when:</strong> Events are dependent (one affects the other) and you want "AND" probability.</p>
<p><strong>Formula:</strong> P(A ∩ B) = P(A) × P(B|A) = P(B) × P(A|B)</p>
<p><strong>Examples:</strong></p>
<ul>
<li><strong>Sequential Processes:</strong> "What's the probability of passing both interview AND background check?"</li>
<li><strong>Quality Control:</strong> "What's the probability a product passes initial AND final inspection?"</li>
<li><strong>Customer Journey:</strong> "What's the probability a customer visits website AND makes purchase?"</li>
</ul>

<h5><strong>6. Mutually Exclusive Events - "OR" with No Overlap</strong></h5>
<p><strong>Use when:</strong> Events cannot occur simultaneously (no overlap).</p>
<p><strong>Formula:</strong> P(A ∪ B) = P(A) + P(B)</p>
<p><strong>Key Insight:</strong> No need to subtract overlap since P(A ∩ B) = 0.</p>
<p><strong>Examples:</strong></p>
<ul>
<li><strong>Product Categories:</strong> "What's the probability of selling electronics OR clothing?"</li>
<li><strong>Customer Segments:</strong> "What's the probability a customer is new OR returning?"</li>
<li><strong>Project Outcomes:</strong> "What's the probability a project succeeds OR fails?"</li>
</ul>

<h4><strong>Decision Tree: Which Formula to Use?</strong></h4>

<h5><strong>Step 1: Identify the Question Type</strong></h5>
<ul>
<li><strong>"AND" questions:</strong> Use Intersection or Multiplication Law</li>
<li><strong>"OR" questions:</strong> Use Union or Addition Law</li>
<li><strong>"Given" questions:</strong> Use Conditional Probability</li>
</ul>

<h5><strong>Step 2: Check for Dependence</strong></h5>
<ul>
<li><strong>Independent events:</strong> P(A ∩ B) = P(A) × P(B)</li>
<li><strong>Dependent events:</strong> P(A ∩ B) = P(A) × P(B|A)</li>
<li><strong>Mutually exclusive:</strong> P(A ∪ B) = P(A) + P(B)</li>
</ul>

<h5><strong>Step 3: Choose the Right Formula</strong></h5>
` + Utils.createBlueTable(
    ['Question Type', 'Events Relationship', 'Formula to Use'],
    [
        ['What is P(A AND B)?', 'Independent', 'P(A ∩ B) = P(A) × P(B)'],
        ['What is P(A AND B)?', 'Dependent', 'P(A ∩ B) = P(A) × P(B|A)'],
        ['What is P(A OR B)?', 'Mutually Exclusive', 'P(A ∪ B) = P(A) + P(B)'],
        ['What is P(A OR B)?', 'Can Overlap', 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)'],
        ['What is P(A given B)?', 'Any', 'P(A|B) = P(A ∩ B) / P(B)']
    ]
) + `

<h4><strong>Practical Examples</strong></h4>

<h5><strong>Example 1: Customer Purchase Analysis</strong></h5>
<p><strong>Scenario:</strong> 40% of customers are new, 60% are returning. Among new customers, 20% make purchases. Among returning customers, 50% make purchases.</p>
<ul>
<li><strong>Question:</strong> "What's the probability a customer is new AND makes a purchase?"</li>
<li><strong>Formula:</strong> P(New ∩ Purchase) = P(New) × P(Purchase|New) = 0.40 × 0.20 = 0.08</li>
</ul>

<h5><strong>Example 2: Employee Performance</strong></h5>
<p><strong>Scenario:</strong> 30% of employees are high performers, 40% are good team players, 15% are both.</p>
<ul>
<li><strong>Question:</strong> "What's the probability an employee is high performer OR good team player?"</li>
<li><strong>Formula:</strong> P(High ∪ Team) = P(High) + P(Team) - P(High ∩ Team) = 0.30 + 0.40 - 0.15 = 0.55</li>
</ul>

<h5><strong>Example 3: Quality Control</strong></h5>
<p><strong>Scenario:</strong> 95% of products pass initial inspection. Among those that pass initial, 98% pass final inspection.</p>
<ul>
<li><strong>Question:</strong> "What's the probability a product passes both inspections?"</li>
<li><strong>Formula:</strong> P(Pass Both) = P(Pass Initial) × P(Pass Final|Pass Initial) = 0.95 × 0.98 = 0.931</li>
</ul>`
        },
        {
            id: 93,
            title: "Multiplication Rule and Independence",
            category: "multiplication-independence",
            content: `<h3><strong>Multiplication Rule and Independence</strong></h3>

<h4><strong>Multiplication Rule</strong></h4>
<p>The multiplication rule allows us to find the probability of the intersection of two events.</p>
<p class="formula">P(A ∩ B) = P(A) × P(B|A) = P(B) × P(A|B)</p>

<h5><strong>Example: Sequential Events</strong></h5>
<p>In a quality control process:</p>
<ul>
<li>Step 1: 95% of products pass initial inspection</li>
<li>Step 2: Among products that pass initial inspection, 98% pass final inspection</li>
</ul>

<p><strong>Question:</strong> What is the probability that a product passes both inspections?</p>
<p class="formula">P(Pass Both) = P(Pass Initial) × P(Pass Final|Pass Initial) = 0.95 × 0.98 = 0.931</p>

<h4><strong>Independent Events</strong></h4>
<p>Two events A and B are <strong>independent</strong> if the occurrence of one does not affect the probability of the other.</p>
<p class="formula">P(A|B) = P(A) and P(B|A) = P(B)</p>

<h5><strong>Multiplication Rule for Independent Events</strong></h5>
<p>If events A and B are independent, then:</p>
<p class="formula">P(A ∩ B) = P(A) × P(B)</p>

<h6><strong>Example 1: Coin Tosses</strong></h6>
<p>What is the probability of getting heads on two consecutive coin tosses?</p>
<ul>
<li>P(Heads on first toss) = 0.5</li>
<li>P(Heads on second toss) = 0.5</li>
<li>P(Heads on both tosses) = 0.5 × 0.5 = 0.25</li>
</ul>

<h6><strong>Example 2: Quality Control</strong></h6>
<p>Two independent quality checks are performed on each product:</p>
<ul>
<li>Check A has a 0.90 probability of passing</li>
<li>Check B has a 0.85 probability of passing</li>
<li>P(Pass both checks) = 0.90 × 0.85 = 0.765</li>
</ul>

<h4><strong>Testing for Independence</strong></h4>
<p>To determine if two events are independent, check if:</p>
<p class="formula">P(A ∩ B) = P(A) × P(B)</p>

<h6><strong>Example: Customer Behavior</strong></h6>
<p>In a study of 1000 customers:</p>
` + Utils.createBlueTable(
    ['', 'High Income', 'Low Income', 'Total'],
    [
        ['Premium Product', '150', '50', '200'],
        ['Standard Product', '350', '450', '800'],
        ['<strong>Total</strong>', '<strong>500</strong>', '<strong>500</strong>', '<strong>1000</strong>']
    ]
) + `

<p><strong>Test for Independence:</strong></p>
<ul>
<li>P(High Income) = 500/1000 = 0.5</li>
<li>P(Premium Product) = 200/1000 = 0.2</li>
<li>P(High Income ∩ Premium) = 150/1000 = 0.15</li>
<li>P(High Income) × P(Premium) = 0.5 × 0.2 = 0.1</li>
<li><strong>Since 0.15 ≠ 0.1, the events are NOT independent</strong></li>
</ul>

<h4><strong>Business Applications</strong></h4>
<ul>
<li><strong>Risk Assessment:</strong> Independent failure modes in systems</li>
<li><strong>Marketing:</strong> Independent customer behaviors</li>
<li><strong>Finance:</strong> Independent market movements</li>
</ul>`
        }
    ]
};