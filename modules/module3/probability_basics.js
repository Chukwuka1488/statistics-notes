// Module 8 - Event Probabilities and Basic Probability Concepts
const MODULE8_PROBABILITY_BASICS_NOTES = {
    probabilityBasics: [
        {
            id: 81,
            title: "Introduction to Probability",
            category: "probability-fundamentals",
            content: `<h3><strong>Introduction to Probability</strong></h3>
<p><strong>Probability</strong> is a numerical measure of the likelihood that an event will occur. Probability values are always assigned on a scale from 0 to 1.</p>

<h4><strong>Key Concepts</strong></h4>
<ul>
<li><strong>Experiment:</strong> A process that generates well-defined outcomes</li>
<li><strong>Sample Space (S):</strong> The set of all possible outcomes of an experiment</li>
<li><strong>Event:</strong> A subset of the sample space</li>
<li><strong>Outcome:</strong> A particular result of an experiment</li>
</ul>

<h4><strong>Probability Scale</strong></h4>
<p class="formula">0 ≤ P(E) ≤ 1</p>
<ul>
<li><strong>P(E) = 0:</strong> Event E is impossible</li>
<li><strong>P(E) = 1:</strong> Event E is certain to occur</li>
<li><strong>P(E) = 0.5:</strong> Event E has a 50% chance of occurring</li>
</ul>

<h5><strong>Example 1: Coin Toss</strong></h5>
<ul>
<li><strong>Experiment:</strong> Tossing a fair coin</li>
<li><strong>Sample Space:</strong> S = {Head, Tail}</li>
<li><strong>Event A:</strong> Getting a head, A = {Head}</li>
<li><strong>P(A) = 1/2 = 0.5</strong></li>
</ul>

<h5><strong>Example 2: Rolling a Die</strong></h5>
<ul>
<li><strong>Experiment:</strong> Rolling a six-sided die</li>
<li><strong>Sample Space:</strong> S = {1, 2, 3, 4, 5, 6}</li>
<li><strong>Event B:</strong> Getting an even number, B = {2, 4, 6}</li>
<li><strong>P(B) = 3/6 = 0.5</strong></li>
</ul>

<h4><strong>Events and Their Probabilities</strong></h4>
<p>Sample points and events provide the foundation for the study of probability. We must now introduce the formal definition of an event as it relates to sample points.</p>

<h5><strong>Definition of an Event</strong></h5>
<p><strong>An event is a collection of sample points.</strong></p>

<h5><strong>Example: KP&L Project Management</strong></h5>
<p>Consider a project where the manager is interested in the event that the entire project can be completed in 10 months or less. Let C denote this event:</p>

<p><strong>Event C:</strong> Project completed in 10 months or less</p>
<p class="formula">C = {(2, 6), (2, 7), (2, 8), (3, 6), (3, 7), (4, 6)}</p>

<p>Event C is said to occur if any one of these six sample points appears as the experimental outcome.</p>

<h6><strong>Other Events of Interest:</strong></h6>
<ul>
<li><strong>Event L:</strong> Project completed in less than 10 months</li>
<li><strong>Event M:</strong> Project completed in more than 10 months</li>
</ul>

<p><strong>Event L:</strong> L = {(2, 6), (2, 7), (3, 6)}</p>
<p><strong>Event M:</strong> M = {(3, 8), (4, 7), (4, 8)}</p>

<h5><strong>Probability of an Event</strong></h5>
<p><strong>The probability of any event is equal to the sum of the probabilities of the sample points in the event.</strong></p>

<h6><strong>Calculating Event Probabilities:</strong></h6>
<p><strong>P(C) = P(2, 6) + P(2, 7) + P(2, 8) + P(3, 6) + P(3, 7) + P(4, 6)</strong></p>
<p><strong>P(C) = 0.15 + 0.15 + 0.05 + 0.10 + 0.20 + 0.05 = 0.70</strong></p>

<p><strong>P(L) = P(2, 6) + P(2, 7) + P(3, 6)</strong></p>
<p><strong>P(L) = 0.15 + 0.15 + 0.10 = 0.40</strong></p>

<p><strong>P(M) = P(3, 8) + P(4, 7) + P(4, 8)</strong></p>
<p><strong>P(M) = 0.05 + 0.10 + 0.15 = 0.30</strong></p>

<h6><strong>Business Interpretation:</strong></h6>
<p>Using these probability results, we can tell management that:</p>
<ul>
<li>There is a <strong>0.70 probability</strong> that the project will be completed in 10 months or less</li>
<li>There is a <strong>0.40 probability</strong> that the project will be completed in less than 10 months</li>
<li>There is a <strong>0.30 probability</strong> that the project will be completed in more than 10 months</li>
</ul>

<h5><strong>Key Insight</strong></h5>
<p>Any time that we can identify all the sample points of an experiment and assign probabilities to each, we can compute the probability of an event using this definition. However, in many experiments the large number of sample points makes the identification of the sample points, as well as the determination of their associated probabilities, extremely cumbersome, if not impossible. In such cases, we use basic probability relationships to compute event probabilities without knowledge of all the sample point probabilities.</p>
`
        },
        {
            id: 83,
            title: "Key Probability Concepts and Definitions",
            category: "probability-definitions",
            content: `<h3><strong>Key Probability Concepts and Definitions</strong></h3>

<h4><strong>Fundamental Concepts</strong></h4>
<ul>
<li><strong>Probability:</strong> A numerical measure of the likelihood that an event will occur.</li>
<li><strong>Experiment:</strong> A process that generates well-defined outcomes.</li>
<li><strong>Sample Space:</strong> The set of all experimental outcomes.</li>
<li><strong>Sample Point:</strong> An element of the sample space. A sample point represents an experimental outcome.</li>
</ul>

<h4><strong>Multiple-Step Experiments</strong></h4>
<p><strong>Multiple-step experiment:</strong> An experiment that can be described as a sequence of steps. If a multiple-step experiment has k steps with n₁ possible outcomes on the first step, n₂ possible outcomes on the second step, and so on, the total number of experimental outcomes is given by (n₁)(n₂) . . . (nₖ).</p>

<h5><strong>Example: Product Assembly</strong></h5>
<p>A product has 3 assembly steps:</p>
<ul>
<li>Step 1: 2 possible configurations</li>
<li>Step 2: 3 possible colors</li>
<li>Step 3: 4 possible sizes</li>
</ul>
<p><strong>Total outcomes:</strong> 2 × 3 × 4 = 24 different product combinations</p>

<h4><strong>Tree Diagram</strong></h4>
<p><strong>Tree diagram:</strong> A graphical representation that helps in visualizing a multiple-step experiment.</p>

<h4><strong>Counting Rules</strong></h4>

<h5><strong>Combination</strong></h5>
<p>In an experiment we may be interested in determining the number of ways n objects may be selected from among N objects without regard to the order in which the n objects are selected. Each selection of n objects is called a combination and the total number of combinations of N objects taken n at a time is:</p>
<p class="formula">C(N,n) = N! / [n!(N-n)!]</p>

<h6><strong>Example: Committee Selection</strong></h6>
<p>How many ways can 3 people be selected from 10 people for a committee?</p>
<p class="formula">C(10,3) = 10! / [3!(10-3)!] = 10! / [3! × 7!] = 120</p>

<h5><strong>Permutation</strong></h5>
<p>In an experiment we may be interested in determining the number of ways n objects may be selected from among N objects when the order in which the n objects are selected is important. Each ordering of n objects is called a permutation and the total number of permutations of N objects taken n at a time is:</p>
<p class="formula">P(N,n) = N! / (N-n)!</p>

<h6><strong>Example: Race Positions</strong></h6>
<p>How many ways can 3 runners finish in 1st, 2nd, and 3rd place from 8 runners?</p>
<p class="formula">P(8,3) = 8! / (8-3)! = 8! / 5! = 336</p>

<h4><strong>Basic Requirements for Assigning Probabilities</strong></h4>
<p>Two requirements that restrict the manner in which probability assignments can be made:</p>
<ol>
<li>For each experimental outcome Eᵢ we must have 0 ≤ P(Eᵢ) ≤ 1</li>
<li>Considering all experimental outcomes, we must have P(E₁) + P(E₂) + ... + P(Eₙ) = 1.0</li>
</ol>

<h4><strong>Methods of Assigning Probabilities</strong></h4>

<h5><strong>Classical Method</strong></h5>
<p>A method of assigning probabilities that is appropriate when all the experimental outcomes are equally likely.</p>
<p><strong>Example:</strong> Rolling a fair die - each outcome has probability 1/6</p>

<h5><strong>Relative Frequency Method</strong></h5>
<p>A method of assigning probabilities that is appropriate when data are available to estimate the proportion of the time the experimental outcome will occur if the experiment is repeated a large number of times.</p>
<p><strong>Example:</strong> Historical data shows 30% of customers return products</p>

<h5><strong>Subjective Method</strong></h5>
<p>A method of assigning probabilities on the basis of judgment.</p>
<p><strong>Example:</strong> Expert opinion on the probability of a new product's success</p>

<h4><strong>Event Operations</strong></h4>

<h5><strong>Event</strong></h5>
<p>A collection of sample points.</p>

<h5><strong>Complement of A</strong></h5>
<p>The event consisting of all sample points that are not in A. Denoted as Aᶜ or A'.</p>
<p class="formula">P(A) + P(Aᶜ) = 1</p>

<h5><strong>Venn Diagram</strong></h5>
<p>A graphical representation for showing symbolically the sample space and operations involving events in which the sample space is represented by a rectangle and events are represented as circles within the sample space.</p>

<h5><strong>Union of A and B</strong></h5>
<p>The event containing all sample points belonging to A or B or both. The union is denoted A ∪ B.</p>

<h5><strong>Intersection of A and B</strong></h5>
<p>The event containing the sample points belonging to both A and B. The intersection is denoted A ∩ B.</p>

<h4><strong>Probability Laws</strong></h4>

<h5><strong>Addition Law</strong></h5>
<p>A probability law used to compute the probability of the union of two events.</p>
<p class="formula">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>
<p>For mutually exclusive events, P(A ∩ B) = 0; in this case the addition law reduces to:</p>
<p class="formula">P(A ∪ B) = P(A) + P(B)</p>

<h5><strong>Mutually Exclusive Events</strong></h5>
<p>Events that have no sample points in common; that is, A ∩ B is empty and P(A ∩ B) = 0.</p>

<h5><strong>Multiplication Law</strong></h5>
<p>A probability law used to compute the probability of the intersection of two events.</p>
<p class="formula">P(A ∩ B) = P(B)P(A|B) or P(A ∩ B) = P(A)P(B|A)</p>
<p>For independent events it reduces to:</p>
<p class="formula">P(A ∩ B) = P(A)P(B)</p>

<h4><strong>Conditional and Joint Probabilities</strong></h4>

<h5><strong>Conditional Probability</strong></h5>
<p>The probability of an event given that another event already occurred. The conditional probability of A given B is:</p>
<p class="formula">P(A|B) = P(A ∩ B) / P(B)</p>

<h5><strong>Joint Probability</strong></h5>
<p>The probability of two events both occurring; that is, the probability of the intersection of two events.</p>

<h5><strong>Marginal Probability</strong></h5>
<p>The values in the margins of a joint probability table that provide the probabilities of each event separately.</p>

<h5><strong>Independent Events</strong></h5>
<p>Two events A and B where P(A|B) = P(A) or P(B|A) = P(B); that is, the events have no influence on each other.</p>

<h4><strong>Bayes' Theorem Concepts</strong></h4>

<h5><strong>Prior Probabilities</strong></h5>
<p>Initial estimates of the probabilities of events.</p>

<h5><strong>Posterior Probabilities</strong></h5>
<p>Revised probabilities of events based on additional information.</p>

<h5><strong>Bayes' Theorem</strong></h5>
<p>A method used to compute posterior probabilities.</p>
<p class="formula">P(A|B) = [P(B|A) × P(A)] / P(B)</p>

<h4><strong>Summary Table of Key Formulas</strong></h4>
` + Utils.createBlueTable(
    ['Concept', 'Formula', 'When to Use'],
    [
        ['Combination', 'C(N,n) = N! / [n!(N-n)!]', 'Order doesn\'t matter'],
        ['Permutation', 'P(N,n) = N! / (N-n)!', 'Order matters'],
        ['Complement', 'P(A) + P(Aᶜ) = 1', 'Finding opposite probability'],
        ['Addition Law', 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)', 'OR probability'],
        ['Multiplication Law', 'P(A ∩ B) = P(A)P(B|A)', 'AND probability'],
        ['Conditional Probability', 'P(A|B) = P(A ∩ B) / P(B)', 'Given information'],
        ['Independent Events', 'P(A ∩ B) = P(A)P(B)', 'No influence between events'],
        ['Bayes\' Theorem', 'P(A|B) = [P(B|A)P(A)] / P(B)', 'Updating probabilities']
    ]
) + `

<h4><strong>Quick Reference Guide</strong></h4>
<ul>
<li><strong>Counting:</strong> Use combinations when order doesn't matter, permutations when it does</li>
<li><strong>Probability Assignment:</strong> Classical for equal likelihood, relative frequency for data, subjective for judgment</li>
<li><strong>Event Operations:</strong> Union for OR, intersection for AND, complement for NOT</li>
<li><strong>Dependence:</strong> Check if P(A|B) = P(A) for independence</li>
<li><strong>Probability Updates:</strong> Use Bayes' theorem when new information is available</li>
</ul>`
        },
        {
            id: 82,
            title: "Methods of Assigning Probabilities",
            category: "probability-assignment",
            content: `<h3><strong>Three Methods of Assigning Probabilities</strong></h3>

<h4><strong>1. Classical Method (Theoretical Probability)</strong></h4>
<p>Used when all outcomes are equally likely.</p>
<p class="formula">P(E) = Number of favorable outcomes / Total number of possible outcomes</p>

<h5><strong>Experiments and Sample Spaces</strong></h5>
<p>An <strong>experiment</strong> is a process that generates well-defined outcomes. On any single repetition of an experiment, one and only one of the possible experimental outcomes will occur.</p>

<h6><strong>Examples of Experiments and Outcomes:</strong></h6>
` + Utils.createBlueTable(
    ['Experiment', 'Experimental Outcomes'],
    [
        ['Toss a coin', 'Head, tail'],
        ['Select a part for inspection', 'Defective, nondefective'],
        ['Conduct a sales call', 'Purchase, no purchase'],
        ['Roll a die', '1, 2, 3, 4, 5, 6'],
        ['Play a football game', 'Win, lose, tie']
    ]
) + `

<h6><strong>Sample Space Definition:</strong></h6>
<p>The <strong>sample space</strong> for an experiment is the set of all experimental outcomes. Experimental outcomes are also called <strong>sample points</strong>.</p>

<h6><strong>Sample Space Examples:</strong></h6>
<ul>
<li><strong>Coin Toss:</strong> S = {Head, Tail}</li>
<li><strong>Part Inspection:</strong> S = {Defective, Nondefective}</li>
<li><strong>Die Roll:</strong> S = {1, 2, 3, 4, 5, 6}</li>
</ul>

<h5><strong>Classical Probability Examples:</strong></h5>

<h6><strong>Example 1: Drawing Cards</strong></h6>
<p>What's the probability of drawing a heart from a standard 52-card deck?</p>
<ul>
<li>Number of hearts = 13</li>
<li>Total cards = 52</li>
<li>P(Heart) = 13/52 = 1/4 = 0.25</li>
</ul>

<h6><strong>Example 2: Rolling a Die</strong></h6>
<p>What's the probability of rolling an even number?</p>
<ul>
<li>Favorable outcomes = {2, 4, 6} = 3 outcomes</li>
<li>Total outcomes = {1, 2, 3, 4, 5, 6} = 6 outcomes</li>
<li>P(Even) = 3/6 = 0.5</li>
</ul>

<h6><strong>Example 3: Coin Toss</strong></h6>
<p>What's the probability of getting heads?</p>
<ul>
<li>Favorable outcomes = {Head} = 1 outcome</li>
<li>Total outcomes = {Head, Tail} = 2 outcomes</li>
<li>P(Head) = 1/2 = 0.5</li>
</ul>

<h4><strong>2. Relative Frequency Method (Empirical Probability)</strong></h4>
<p>The relative frequency method of assigning probabilities is appropriate when data are available to estimate the proportion of the time the experimental outcome will occur if the experiment is repeated a large number of times.</p>
<p class="formula">P(E) = Frequency of occurrence of E / Total number of observations</p>

<h5><strong>Example: Hospital Waiting Times</strong></h5>
<p>A clerk recorded the number of patients waiting for service at 9:00 A.M. on 20 successive days:</p>
` + Utils.createBlueTable(
    ['Number Waiting', 'Number of Days Outcome Occurred', 'Probability'],
    [
        ['0', '2', '2/20 = 0.10'],
        ['1', '5', '5/20 = 0.25'],
        ['2', '6', '6/20 = 0.30'],
        ['3', '4', '4/20 = 0.20'],
        ['4', '3', '3/20 = 0.15'],
        ['<strong>Total</strong>', '<strong>20</strong>', '<strong>1.00</strong>']
    ]
) + `

<p><strong>Interpretation:</strong> Using the relative frequency method, we assign probabilities based on observed frequencies. For example, zero patients were waiting on 2 of 20 days, so P(0) = 2/20 = 0.10.</p>

<h5><strong>Example: Manufacturing Defects</strong></h5>
<p>Out of 1000 products manufactured, 25 were defective.</p>
<ul>
<li>P(Defective) = 25/1000 = 0.025 = 2.5%</li>
</ul>

<h4><strong>3. Subjective Method</strong></h4>
<p>The subjective method of assigning probabilities is most appropriate when one cannot realistically assume that the experimental outcomes are equally likely and when little relevant data are available. When the subjective method is used to assign probabilities to the experimental outcomes, we may use any information available, such as our experience or intuition.</p>

<h5><strong>Example: House Purchase Offer</strong></h5>
<p>Consider the case in which Tom and Judy Elsbernd make an offer to purchase a house. Two outcomes are possible:</p>
<ul>
<li><strong>E₁:</strong> their offer is accepted</li>
<li><strong>E₂:</strong> their offer is rejected</li>
</ul>

<p><strong>Judy's Assessment:</strong></p>
<ul>
<li>P(E₁) = 0.8 (optimistic)</li>
<li>P(E₂) = 0.2</li>
</ul>

<p><strong>Tom's Assessment:</strong></p>
<ul>
<li>P(E₁) = 0.6 (more pessimistic)</li>
<li>P(E₂) = 0.4</li>
</ul>

<p><strong>Key Insight:</strong> Both Judy and Tom assigned probabilities that satisfy the two basic requirements. The fact that their probability estimates are different emphasizes the personal nature of the subjective method.</p>

<h5><strong>Other Business Scenarios:</strong></h5>
<ul>
<li>Probability that a new product will succeed in the market</li>
<li>Probability that stock prices will increase next week</li>
<li>Probability of winning a contract bid</li>
</ul>

<h4><strong>Basic Requirements for Assigning Probabilities</strong></h4>
<p>Regardless of the method used, two basic requirements for assigning probabilities must be met:</p>

<ol>
<li><strong>The probability assigned to each experimental outcome must be between 0 and 1, inclusively.</strong> If we let E<sub>i</sub> denote the ith experimental outcome and P(E<sub>i</sub>) its probability, then this requirement can be written as:</li>
<p class="formula">0 ≤ P(E<sub>i</sub>) ≤ 1 for all i</p>

<li><strong>The sum of the probabilities for all the experimental outcomes must equal 1.0.</strong> For n experimental outcomes, this requirement can be written as:</li>
<p class="formula">P(E<sub>1</sub>) + P(E<sub>2</sub>) + ... + P(E<sub>n</sub>) = 1</p>
</ol>

<h4><strong>Properties of Probability</strong></h4>
<ol>
<li><strong>Non-negativity:</strong> P(E) ≥ 0 for any event E</li>
<li><strong>Normalization:</strong> P(S) = 1, where S is the sample space</li>
<li><strong>Additivity:</strong> For mutually exclusive events E₁ and E₂: P(E₁ ∪ E₂) = P(E₁) + P(E₂)</li>
</ol>`
        },
        {
            id: 83,
            title: "Business Applications of Probability",
            category: "business-probability",
            content: `<h3><strong>Probability in Business Decision Making</strong></h3>

<h4><strong>Quality Control Example</strong></h4>
<p>A manufacturing company produces electronic components. Historical data shows:</p>
` + Utils.createBlueTable(
    ['Quality Status', 'Number of Units', 'Probability'],
    [
        ['Excellent', '850', '0.85'],
        ['Good', '120', '0.12'],
        ['Defective', '30', '0.03'],
        ['<strong>Total</strong>', '<strong>1000</strong>', '<strong>1.00</strong>']
    ]
) + `

<h5><strong>Business Questions:</strong></h5>
<ul>
<li><strong>Q1:</strong> What's the probability a randomly selected unit is acceptable (excellent or good)?</li>
<li><strong>A1:</strong> P(Acceptable) = P(Excellent) + P(Good) = 0.85 + 0.12 = 0.97</li>
</ul>

<h4><strong>Market Research Example</strong></h4>
<p>A company surveys 500 customers about their satisfaction:</p>
` + Utils.createBlueTable(
    ['Satisfaction Level', 'Number of Customers', 'Probability'],
    [
        ['Very Satisfied', '200', '0.40'],
        ['Satisfied', '180', '0.36'],
        ['Neutral', '80', '0.16'],
        ['Dissatisfied', '40', '0.08'],
        ['<strong>Total</strong>', '<strong>500</strong>', '<strong>1.00</strong>']
    ]
) + `

<h5><strong>Business Insights:</strong></h5>
<ul>
<li>P(Satisfied or Very Satisfied) = 0.40 + 0.36 = 0.76 (76% satisfaction rate)</li>
<li>P(Dissatisfied) = 0.08 (8% need attention)</li>
</ul>

<h4><strong>Sales Forecasting Example</strong></h4>
<p>Based on historical data, daily sales performance:</p>
` + Utils.createBlueTable(
    ['Daily Sales', 'Days Observed', 'Relative Frequency'],
    [
        ['High (>$10,000)', '45', '0.30'],
        ['Medium ($5,000-$10,000)', '75', '0.50'],
        ['Low (<$5,000)', '30', '0.20'],
        ['<strong>Total</strong>', '<strong>150</strong>', '<strong>1.00</strong>']
    ]
) + `

<h5><strong>Planning Applications:</strong></h5>
<ul>
<li>Expected high sales days per month: 30 × 0.30 = 9 days</li>
<li>Probability of at least medium sales: 0.30 + 0.50 = 0.80</li>
</ul>`
        }
    ]
};