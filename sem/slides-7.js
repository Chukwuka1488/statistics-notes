window.SEM_SLIDES.push(
{num:'Slide 50',title:'Exercise &mdash; Constructs and Indicators From Your Discipline',subtitle:'Interactive discussion',toc:'Exercise: Your Discipline',
html:`<div class="cb bg"><p><strong>What are some constructs and indicators from YOUR discipline?</strong></p></div>
<div class="cb three-col">
<div class="cc oc"><h4>IS / IT</h4><p style="font-size:.85rem"><strong>Technology Acceptance</strong><br>Perceived usefulness, perceived ease of use, behavioral intention (3&ndash;4 items each from TAM)</p></div>
<div class="cc bc"><h4>Marketing</h4><p style="font-size:.85rem"><strong>Brand Loyalty</strong><br>Repurchase intention, willingness to recommend, resistance to switching</p></div>
<div class="cc oc"><h4>Management</h4><p style="font-size:.85rem"><strong>Job Satisfaction</strong><br>Satisfaction with pay, coworkers, supervisor, work itself</p></div></div>
<div class="cb three-col">
<div class="cc bc"><h4>Finance</h4><p style="font-size:.85rem"><strong>Investor Confidence</strong><br>Risk tolerance, investment frequency, market outlook</p></div>
<div class="cc oc"><h4>Accounting</h4><p style="font-size:.85rem"><strong>Audit Quality</strong><br>Auditor independence, expertise, effort, professional skepticism</p></div>
<div class="cc bc"><h4>Your Field?</h4><p style="font-size:.85rem"><em>Think about: Is it reflective or formative? How many indicators? Would all move together?</em></p></div></div>
<div class="cb bh"><h3>Discussion Guide</h3><ul>
<li>Is the construct <span class="to">reflective</span> or <span class="tb">formative</span>?</li>
<li>How many indicators? (need at least 3 for identification)</li>
<li>Would all indicators move together if the construct changes? (reflective test)</li></ul></div>`},

{num:'Slide 51',title:'Correlating Error Terms &mdash; When and Why',subtitle:'Default: uncorrelated. Correlating is the exception',toc:'Correlated Error Terms',
html:`<div class="cb bo"><h3 class="orange">Within Construct (e.g., e1 &harr; e2 on same construct)</h3><ul>
<li>These two items share something <strong>BEYOND</strong> the construct &mdash; an omitted cause</li>
<li>Common reasons: similarly worded items, reverse-coded pairs, shared method effect</li>
<li><em>Example: two trust items both mention &ldquo;honesty&rdquo; &mdash; wording overlap beyond Trust itself</em></li>
<li>Generally NOT recommended unless longitudinal (same item at two time points)</li></ul></div>
<div class="cb bb"><h3 class="blue">Between Constructs (e.g., e1 on Trust &harr; e4 on Satisfaction)</h3><ul>
<li>An omitted construct affects indicators in two DIFFERENT constructs</li>
<li><em>Example: social desirability bias inflates both a trust item and a satisfaction item</em></li>
<li>Even rarer &mdash; hard to justify theoretically</li></ul></div>
<div class="cb bw"><h3>Disturbance Level (D1 &harr; D2)</h3><ul>
<li>An omitted construct affects BOTH latent constructs</li>
<li><em>Example: organizational culture affects both Trust and Satisfaction but isn't in model</em></li>
<li>Requires strong theoretical rationale</li></ul></div>
<div class="cb bh"><h3>The Danger</h3><ul>
<li>Correlating errors to improve fit without theory = inflating R&sup2; with junk predictors</li>
<li>Reviewers will ask &ldquo;why did you correlate these?&rdquo; &mdash; you need a real answer</li>
<li><strong>Rule of thumb:</strong> if you can't name the omitted cause, don't correlate the errors</li></ul></div>`},

{num:'Slide 52',title:'Visual Representation of a Measurement Model',subtitle:'Stage 2 &mdash; the CFA diagram',toc:'CFA Diagram',
html:`<div class="cb bg"><p>Multiple constructs (ovals), each with its own cluster of indicators (rectangles), error terms on every indicator, and <strong>curved double-headed arrows between ALL constructs</strong>.</p></div>
<div class="cb fd"><div class="fx fo">Construct A<br><small>X1, X2, X3</small></div>
<span class="fa" style="font-size:2rem">&#8596;</span>
<div class="fx fb2">Construct B<br><small>X4, X5, X6</small></div>
<span class="fa" style="font-size:2rem">&#8596;</span>
<div class="fx fo">Construct C<br><small>X7, X8, X9</small></div></div>
<div class="cb bo"><h3 class="orange">Key Feature of CFA</h3><ul>
<li>ALL constructs freely correlate with each other (&harr;)</li>
<li>No directional paths yet &mdash; you're NOT claiming any construct causes another</li>
<li>Only asking: &ldquo;do the items measure the constructs well?&rdquo;</li>
<li>This is Stage 2 of the 6-stage SEM process (Hair et al.)</li></ul></div>
<div class="cb bb"><h3 class="blue">Why This Comes Before the Structural Model</h3><ul>
<li>If constructs don't correlate as expected here, adding directional paths won't fix it</li>
<li>Establish construct validity first (convergent + discriminant)</li>
<li>Only after CFA passes do you replace some &harr; with &rarr; to test hypotheses</li></ul></div>`},

{num:'Slide 53',title:'The Structural Model',subtitle:'Section header &mdash; testing hypotheses between constructs',toc:'Structural Model (Section)',
html:`<div class="cb bg"><p>&ldquo;We've validated that our measures work (measurement model). Now we move to the second submodel: the <strong>structural model</strong> &mdash; this is where your hypotheses live.&rdquo;</p></div>
<div class="cb bh"><h3>Three Topics Coming Up</h3>
<div class="three-col" style="margin-top:12px;text-align:center">
<div class="cc oc"><h4>Interrelated Relationships</h4><p style="font-size:.88rem">Among constructs</p></div>
<div class="cc bc"><h4>Path Analysis</h4><p style="font-size:.88rem">Applying directional paths</p></div>
<div class="cc oc"><h4>Path Coefficients</h4><p style="font-size:.88rem">Estimating effect sizes</p></div></div></div>
<div class="cb fd"><div class="fx fo">CFA (&harr;)</div><span class="fa">&#10140;</span>
<div class="fx" style="background:linear-gradient(135deg,var(--o),var(--b));color:#fff">Replace some with &rarr;</div><span class="fa">&#10140;</span>
<div class="fx fb2">Structural Model</div></div>`},

{num:'Slide 54',title:'Submodel 2 &mdash; The Structural Model',subtitle:'Specifying relationships between constructs',toc:'Structural Model Details',
html:`<div class="cb two-col"><div class="cc oc"><h4>Dependence (&rarr;) &mdash; Straight Arrow</h4><ul>
<li>Directional: one construct predicts/causes another</li>
<li>Implies causality (though doesn't prove it)</li>
<li><em>Example: Trust &rarr; Purchase Intention</em></li>
<li>Each arrow = one hypothesis to test</li></ul></div>
<div class="cc bc"><h4>Correlational (&harr;) &mdash; Curved Arrow</h4><ul>
<li>Non-directional: two constructs covary</li>
<li>Used between exogenous constructs</li>
<li><em>Example: Trust &harr; Perceived Risk</em></li>
<li>No causal claim made</li></ul></div></div>
<div class="cb bo"><h3 class="orange">Why the Distinction Matters</h3><ul>
<li><strong>Directionality:</strong> dependence paths have a direction (A &rarr; B &ne; B &rarr; A); correlations don't</li>
<li><strong>Inferred causality:</strong> a dependence path is a causal claim; a correlation is not</li>
<li>Choosing &rarr; vs &harr; IS your theory &mdash; the most consequential decision in SEM</li></ul></div>
<div class="cb bh"><h3>Connection to Measurement Model</h3><ul>
<li>In CFA, ALL construct relationships were &harr; (free correlations)</li>
<li>In the structural model, you <strong>REPLACE</strong> some &harr; with &rarr; based on theory</li>
<li>Ones left as &harr; = &ldquo;I know these relate but I'm not claiming direction&rdquo;</li></ul></div>`},

{num:'Slide 55',title:'Recursive vs Nonrecursive Models',subtitle:'Do any arrows loop back?',toc:'Recursive vs Nonrecursive',
html:`<div class="cb two-col"><div class="cc oc"><h4>Recursive &mdash; &ldquo;One-way streets only&rdquo;</h4><ul>
<li>Direction of influence goes one way only</li>
<li>No reciprocal causation (no A &rarr; B AND B &rarr; A)</li>
<li>No feedback loops (no A &rarr; B &rarr; C &rarr; A)</li>
<li>Disturbances are NOT correlated</li>
<li><strong>Most SEM models in practice</strong></li></ul>
<p style="font-size:.85rem;margin-top:8px"><em>Example: Trust &rarr; Satisfaction &rarr; Loyalty</em></p></div>
<div class="cc bc"><h4>Nonrecursive &mdash; &ldquo;Two-way streets&rdquo;</h4><ul>
<li>Has at least ONE of: reciprocal causation, feedback loops, or correlated disturbances</li>
<li>Requires additional identification constraints</li>
<li>Harder to estimate &mdash; software may struggle to converge</li></ul>
<p style="font-size:.85rem;margin-top:8px"><em>Example: Satisfaction &rarr; Performance AND Performance &rarr; Satisfaction</em></p></div></div>
<div class="cb bh"><h3>Why It Matters</h3><ul>
<li>If you theorize reciprocal effects, you MUST use nonrecursive &mdash; but expect extra complexity</li>
<li>If all arrows flow one direction, you're recursive &mdash; simpler and preferred</li>
<li><strong>When in doubt:</strong> start recursive, only add reciprocal paths if theory demands it</li></ul></div>`},

{num:'Slide 56',title:'Direct vs Indirect Effects',subtitle:'Mediation &mdash; answering the WHY question',toc:'Direct vs Indirect Effects',
html:`<div class="cb two-col"><div class="cc oc"><h4>Direct Effect</h4>
<div class="fd" style="margin:10px 0"><div class="fx fo">X1</div><span class="fa">&rarr;</span><div class="fx fw">Y</div></div>
<ul><li>Single arrow, no intermediary</li>
<li>One path coefficient tells the whole story</li>
<li><em>Trust &rarr; Purchase Intention</em></li></ul></div>
<div class="cc bc"><h4>Indirect Effect (Mediation)</h4>
<div class="fd" style="margin:10px 0"><div class="fx fb2">X1</div><span class="fa">&rarr;</span><div class="fx fw">X2</div><span class="fa">&rarr;</span><div class="fx fb2">Y</div></div>
<ul><li>X1 affects Y THROUGH X2 (mediator)</li>
<li>Indirect effect = a &times; b</li>
<li><em>Trust &rarr; Satisfaction &rarr; Loyalty</em></li></ul></div></div>
<div class="cb bh"><h3>Total Effect = Direct + Indirect</h3>
<div class="fb">Total = Direct + (a &times; b)</div>
<p style="margin-top:10px"><em>Trust &rarr; Loyalty = 0.15 (direct) + Trust &rarr; Satisfaction &rarr; Loyalty = 0.30 &times; 0.50 = 0.15 (indirect). <strong>Total = 0.30</strong></em></p></div>
<div class="cb bp">Mediation answers the WHY question: not just &ldquo;does X affect Y?&rdquo; but &ldquo;HOW does X affect Y?&rdquo; This is one of SEM's biggest advantages over regression.</div>`}
);
