// Module 10 - Independence, Mutual Exclusivity, and Four Types of Probabilities
const MODULE10_INDEPENDENCE_NOTES = {
    independence: [
        {
            id: 101,
            title: "Mutually Exclusive Events",
            category: "mutual-exclusivity",
            content: `<h3><strong>Mutually Exclusive Events</strong></h3>
<p>Two events A and B are <strong>mutually exclusive</strong> (or disjoint) if they cannot occur simultaneously. That is, A ∩ B = ∅.</p>

<h4><strong>Key Properties</strong></h4>
<ul>
<li><strong>P(A ∩ B) = 0</strong> - Mutually exclusive events cannot occur together</li>
<li><strong>P(A ∪ B) = P(A) + P(B)</strong> - Addition rule for mutually exclusive events</li>
</ul>

<h5><strong>Example 1: Product Categories</strong></h5>
<p>A customer can only buy one product category at a time:</p>
` + Utils.createBlueTable(
    ['Product Category', 'Probability'],
    [
        ['Electronics', '0.35'],
        ['Clothing', '0.40'],
        ['Books', '0.25']
    ]
) + `
<p><strong>Mutually Exclusive Events:</strong></p>
<ul>
<li>Buying Electronics AND Clothing: P(E ∩ C) = 0</li>
<li>Buying Electronics OR Clothing: P(E ∪ C) = 0.35 + 0.40 = 0.75</li>
</ul>

<h5><strong>Example 2: Employee Status</strong></h5>
<p>An employee can only be in one status category:</p>
` + Utils.createBlueTable(
    ['Status', 'Probability'],
    [
        ['Full-time', '0.60'],
        ['Part-time', '0.25'],
        ['Contract', '0.15']
    ]
) + `
<p>These are mutually exclusive because an employee cannot be both full-time AND part-time simultaneously.</p>`
        },
        {
            id: 102,
            title: "Independent Events",
            category: "independence",
            content: `<h3><strong>Independent Events</strong></h3>
<p>Two events A and B are <strong>independent</strong> if the occurrence of one does not affect the probability of the other.</p>

<h4><strong>Mathematical Definition</strong></h4>
<p class="formula">P(A ∩ B) = P(A) × P(B)</p>
<p class="formula">P(A|B) = P(A)</p>
<p class="formula">P(B|A) = P(B)</p>

<h5><strong>Example 1: Coin Tosses</strong></h5>
<p>Two fair coins are tossed independently:</p>
<ul>
<li>P(Head on first coin) = 0.5</li>
<li>P(Head on second coin) = 0.5</li>
<li>P(Head on both coins) = 0.5 × 0.5 = 0.25</li>
</ul>

<h5><strong>Example 2: Quality Control</strong></h5>
<p>Two machines produce parts independently:</p>
` + Utils.createBlueTable(
    ['Machine', 'Defect Rate'],
    [
        ['Machine A', '0.02'],
        ['Machine B', '0.03']
    ]
) + `
<p><strong>Independent Events:</strong></p>
<ul>
<li>P(Defect from A) = 0.02</li>
<li>P(Defect from B) = 0.03</li>
<li>P(Defect from both A AND B) = 0.02 × 0.03 = 0.0006</li>
</ul>

<h4><strong>Testing for Independence</strong></h4>
<p>To verify if events A and B are independent, check if:</p>
<p class="formula">P(A ∩ B) = P(A) × P(B)</p>

<h5><strong>Example: Customer Behavior</strong></h5>
<p>Survey of 1000 customers:</p>
` + Utils.createBlueTable(
    ['', 'High Income', 'Low Income', 'Total'],
    [
        ['Buy Premium Product', '150', '50', '200'],
        ['Buy Standard Product', '300', '500', '800'],
        ['<strong>Total</strong>', '<strong>450</strong>', '<strong>550</strong>', '<strong>1000</strong>']
    ]
) + `

<h6><strong>Test for Independence:</strong></h6>
<ul>
<li>P(High Income) = 450/1000 = 0.45</li>
<li>P(Buy Premium) = 200/1000 = 0.20</li>
<li>P(High Income ∩ Buy Premium) = 150/1000 = 0.15</li>
<li>P(High Income) × P(Buy Premium) = 0.45 × 0.20 = 0.09</li>
<li><strong>Since 0.15 ≠ 0.09, the events are NOT independent</strong></li>
</ul>`
        },
        {
            id: 103,
            title: "Four Types of Probabilities",
            category: "probability-types",
            content: `<h3><strong>Four Types of Probabilities</strong></h3>

<h4><strong>1. Marginal Probability</strong></h4>
<p>The probability of a single event occurring, regardless of other events.</p>
<p class="formula">P(A) = Sum of joint probabilities involving A</p>

<h4><strong>2. Joint Probability</strong></h4>
<p>The probability of two or more events occurring simultaneously.</p>
<p class="formula">P(A ∩ B) = P(A and B occurring together)</p>

<h4><strong>3. Union Probability</strong></h4>
<p>The probability of at least one of two events occurring.</p>
<p class="formula">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>

<h4><strong>4. Conditional Probability</strong></h4>
<p>The probability of an event occurring given that another event has occurred.</p>
<p class="formula">P(A|B) = P(A ∩ B) / P(B)</p>

<h5><strong>Comprehensive Example: Employee Performance</strong></h5>
<p>Company data for 1000 employees:</p>
` + Utils.createBlueTable(
    ['', 'High Performance', 'Average Performance', 'Low Performance', 'Total'],
    [
        ['Male', '120', '200', '80', '400'],
        ['Female', '180', '300', '120', '600'],
        ['<strong>Total</strong>', '<strong>300</strong>', '<strong>500</strong>', '<strong>200</strong>', '<strong>1000</strong>']
    ]
) + `

<h6><strong>1. Marginal Probabilities:</strong></h6>
<ul>
<li>P(Male) = 400/1000 = 0.40</li>
<li>P(Female) = 600/1000 = 0.60</li>
<li>P(High Performance) = 300/1000 = 0.30</li>
<li>P(Average Performance) = 500/1000 = 0.50</li>
<li>P(Low Performance) = 200/1000 = 0.20</li>
</ul>

<h6><strong>2. Joint Probabilities:</strong></h6>
<ul>
<li>P(Male ∩ High Performance) = 120/1000 = 0.12</li>
<li>P(Female ∩ High Performance) = 180/1000 = 0.18</li>
<li>P(Male ∩ Average Performance) = 200/1000 = 0.20</li>
</ul>

<h6><strong>3. Union Probabilities:</strong></h6>
<ul>
<li>P(Male ∪ High Performance) = P(Male) + P(High Performance) - P(Male ∩ High Performance)</li>
<li>P(Male ∪ High Performance) = 0.40 + 0.30 - 0.12 = 0.58</li>
</ul>

<h6><strong>4. Conditional Probabilities:</strong></h6>
<ul>
<li>P(High Performance|Male) = 120/400 = 0.30</li>
<li>P(High Performance|Female) = 180/600 = 0.30</li>
<li>P(Male|High Performance) = 120/300 = 0.40</li>
<li>P(Female|High Performance) = 180/300 = 0.60</li>
</ul>

<h6><strong>Key Insight:</strong></h6>
<p>Since P(High Performance|Male) = P(High Performance|Female) = 0.30, performance and gender are independent in this example.</p>`
        }
    ]
}; 