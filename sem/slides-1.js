window.SEM_SLIDES = [
{num:'Slide 5',title:'Two Basic Problems for Scientific Inference',subtitle:'The entire reason SEM exists',toc:'Two Problems for Scientific Inference',
html:`<div class="cb bg"><p style="font-size:1.05rem">Traditional methods (regression, ANOVA) cannot solve these two problems at the same time. SEM was built to handle both simultaneously.</p></div>
<div class="cb two-col"><div class="cc oc"><h4>Problem 1 &mdash; Measurement</h4><ul>
<li>A single survey item (e.g., "rate your job satisfaction 1-7") is <strong>NOT</strong> a perfect measure</li>
<li>Part = true score, part = interpretation, part = mood, part = random noise</li>
<li>Regression treats that noisy item as if it's perfect &mdash; it's not</li>
<li><strong>Factor analysis solves this:</strong> uses multiple items, extracts what they share, strips out noise</li>
</ul></div><div class="cc bc"><h4>Problem 2 &mdash; Explanation</h4><ul>
<li>How do we infer cause from survey data when we can't run experiments?</li>
<li>Worse: noisy measurements <em>weaken</em> estimated relationships (<strong>attenuation bias</strong>)</li>
<li>A real 0.50 relationship shows up as 0.30 when measures have error</li>
</ul></div></div>
<div class="cb bp"><strong>SEM solves both at once:</strong><br>CFA (measurement model) &#8594; handles Problem 1 (signal from noise)<br>Structural model &#8594; handles Problem 2 (error-free relationships)<br><em>No other single technique does both simultaneously.</em></div>`},

{num:'Slide 6',title:'What is Structural Equation Modeling?',subtitle:'A family of statistical models, not one technique',toc:'What is SEM?',
html:`<div class="cb bo"><h3 class="orange">"Family of statistical models"</h3>
<p>SEM is an <strong>umbrella</strong>, not one technique. Under it: CFA, path analysis, full structural models, multigroup models, growth curves, latent class.</p>
<p style="margin-top:6px">Like saying "regression" covers simple, multiple, logistic, hierarchical &mdash; SEM covers a similar range.</p></div>
<div class="cb bb"><h3 class="blue">"Structure of interrelationships in a series of equations"</h3><ul>
<li>Each arrow in your path diagram = one equation</li>
<li>7 arrows = 7 equations estimated <strong>simultaneously</strong></li>
<li>Unlike regression where you run each equation separately</li></ul></div>
<div class="cb two-col"><div class="cc oc"><h4>Dependence + Interdependence</h4><ul>
<li><strong>Dependence:</strong> regression (X predicts Y)</li>
<li><strong>Interdependence:</strong> factor analysis (which items cluster?)</li>
<li>SEM does both in one model</li></ul></div>
<div class="cc bc"><h4>Two Procedures Combined</h4><ul>
<li><strong>Factor Analysis</strong> = measurement model (do my 4 items measure "trust"?)</li>
<li><strong>Regression</strong> = structural model (does "trust" predict "purchase intention"?)</li></ul></div></div>
<div class="cb bw"><h3>Theory drives everything</h3><ul>
<li>Theory tells you what IS connected (arrows you draw)</li>
<li>Just as important: what is NOT connected (arrows you leave out)</li>
<li>Every missing arrow = you're saying "this relationship is zero" &mdash; that's testable</li></ul></div>
<div class="cb bh"><h3>Alternative Names (same thing, different labels)</h3>
<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">
<span class="tag tag-o">Covariance Structure Analysis</span><span class="tag tag-b">Latent Variable Analysis</span>
<span class="tag tag-o">Causal Modeling</span><span class="tag tag-b">LISREL</span>
<span class="tag tag-o">AMOS</span><span class="tag tag-b">EQS</span></div></div>`},

{num:'Slide 8',title:'SEM as a "Philosophy"',subtitle:'Not just a technique \u2014 it\'s a mindset',toc:'SEM as a "Philosophy"',
html:`<div class="cb bg"><p><strong>Regression, ANOVA</strong> = tools you apply to data<br><strong>SEM</strong> = a way of thinking: start with theory FIRST, then test it against data.<br>Opposite of exploratory approaches (stepwise regression, data mining) where you let data find patterns.</p></div>
<div class="cb bo"><h3 class="orange">"Philosophy" means three commitments:</h3><ul>
<li>You commit to having a <strong>theory BEFORE</strong> you collect data</li>
<li>You commit to measuring your concepts <strong>rigorously</strong> (multiple items, validated scales)</li>
<li>You commit to testing whether the data supports or rejects your theory &mdash; <strong>not tweaking until it fits</strong></li></ul></div>
<div class="cb bb"><h3 class="blue">"Quantification of concepts through rigorous empirical measurement"</h3><ul>
<li>You can't just say "trust matters" &mdash; you must define exactly how you measure trust</li>
<li>3&ndash;5 survey items, each tapping a facet of trust, validated in prior research</li>
<li>SEM forces precision: vague theories produce unestimable models</li></ul></div>
<div class="cb qb"><p>"Do not confuse the finger pointing to the moon with the moon."</p><div class="attr">Buddhist proverb, applied to measurement theory</div></div>
<div class="cb bh"><h3>What does the quote mean?</h3><ul>
<li><span class="to">The finger</span> = your measured variables (survey items, observed scores)</li>
<li><span class="tb">The moon</span> = the actual construct (satisfaction, loyalty, trust)</li>
<li>Your 4 survey items are NOT "customer satisfaction" &mdash; they are imperfect pointers toward it</li>
<li>SEM acknowledges this distinction explicitly; regression pretends the finger IS the moon</li></ul></div>`},

{num:'Slide 9',title:'Combined "Family" \u2014 Two Halves of SEM',subtitle:'Two submodels that work together',toc:'Two Halves of SEM',
html:`<div class="cb bg"><p>You <strong>MUST</strong> get the measurement right first &mdash; if your items don't measure the construct, the structural paths are meaningless.</p></div>
<div class="cb two-col"><div class="cc oc"><h4>Measurement Model (CFA side)</h4><ul>
<li>Links observed items &#8594; latent constructs</li>
<li>Example: 4 survey questions about ease of use &#8594; latent construct "Perceived Ease of Use"</li>
<li>Tests: do all 4 items load strongly? Do they converge on one factor?</li></ul></div>
<div class="cc bc"><h4>Structural Model (regression side)</h4><ul>
<li>Links constructs &#8594; constructs with directional paths</li>
<li>Example: Perceived Ease of Use &#8594; Perceived Usefulness &#8594; Intention to Use (TAM model)</li>
<li>Multiple equations estimated simultaneously</li></ul></div></div>
<div class="cb fd"><div class="fx fo">Measurement<br><small>CFA</small></div><span class="fa">&#10140;</span><div class="fx fw">Validate Items</div><span class="fa">&#10140;</span><div class="fx fb2">Structural<br><small>Path Model</small></div><span class="fa">&#10140;</span><div class="fx fo">Test Theory</div></div>
<div class="cb bh"><h3>"Empirical Representation of Theory"</h3><ul>
<li>Every theoretical claim becomes a testable parameter with a number</li>
<li>"X influences Y" &#8594; an arrow with a coefficient (e.g., 0.45, p &lt; .01)</li>
<li>"X does NOT influence Z" &#8594; no arrow, implicitly fixed to zero</li>
<li>Your theory is no longer just words &mdash; it's a testable, falsifiable model</li></ul></div>
<div class="cb bw"><h3>"Language of Empirical Research"</h3>
<p>The notation is universal: <span class="to">ovals = constructs</span>, <span class="tb">rectangles = measured items</span>, arrows = relationships. Any researcher can read your path diagram &mdash; like sheet music for musicians, a shared visual language.</p></div>`},

{num:'Slide 10',title:'Structure Represents Theory',subtitle:'Confirmatory, NOT exploratory',toc:'Structure Represents Theory',
html:`<div class="cb bo"><h3 class="orange">SEM is Confirmatory</h3><ul>
<li>You bring a theory &#8594; translate it into a model &#8594; test if data supports it</li>
<li>You do NOT throw variables in and let the software find patterns</li>
<li>If you want to explore, use EFA or stepwise regression first &mdash; then confirm with SEM later</li>
<li><em>Regression lets you go fishing; SEM makes you declare what fish you expect to catch before you cast</em></li></ul></div>
<div class="cb bb"><h3 class="blue">More Accurate Estimates (Error Attenuation)</h3><ul>
<li>In regression, measurement error <em>shrinks</em> estimated relationships &mdash; called <strong>attenuation bias</strong></li>
<li>Example: true effect of Trust &#8594; Purchase Intention might be <code>0.60</code>, but with noisy single-item measures, regression shows <code>0.40</code></li>
<li>SEM corrects this by separating measurement error from the construct</li>
<li>This is why SEM coefficients are often <strong>larger</strong> than regression coefficients</li></ul></div>
<div class="cb bh"><h3>What You Leave OUT Matters</h3><ul>
<li>Every arrow you draw = "I theorize this relationship exists"</li>
<li>Every arrow you DON'T draw = "I theorize this relationship is zero"</li>
<li>The missing arrows are testable claims</li>
<li><strong>Example:</strong> Employee Satisfaction &#8594; Performance &#8594; Retention. If you omit Satisfaction &#8594; Retention, you're claiming full mediation.</li></ul></div>
<div class="cb two-col"><div class="cc oc"><h4>Reduced Form (Regression)</h4><div class="fb">Y = b&#8321;X&#8321; + b&#8322;X&#8322;</div>
<p style="font-size:.88rem">Both IVs predict Y directly. One equation, all predictors thrown in.</p></div>
<div class="cc bc"><h4>Structural Form (SEM)</h4><div class="fb">X&#8321; &#8594; X&#8322; &#8594; Y</div>
<p style="font-size:.88rem">X&#8321; only affects Y <em>indirectly</em> through X&#8322;. More restrictive = more testable.</p></div></div>`},

{num:'Slide 11',title:'What SEM Does Well',subtitle:'Complex, interrelated relationships handled simultaneously',toc:'What SEM Does Well',
html:`<div class="cb bo"><h3 class="orange">Complex, Interrelated Relationships</h3><ul>
<li>Regression handles X &#8594; Y one equation at a time</li>
<li>SEM handles X &#8594; M &#8594; Y, with mediators, moderators, multiple DVs, and feedback loops all at once</li></ul>
<div class="fd" style="margin-top:12px"><div class="fx fo">Advertising</div><span class="fa">&#8594;</span><div class="fx fw">Brand Awareness</div><span class="fa">&#8594;</span><div class="fx fb2">Purchase Intent</div><span class="fa">&#8594;</span><div class="fx fo">Actual Purchase</div></div></div>
<div class="cb two-col"><div class="cc oc"><h4>Mediator = the Mechanism</h4>
<p style="font-size:.9rem">Explains <strong>WHY</strong> X affects Y (X &#8594; M &#8594; Y)</p>
<p style="font-size:.88rem;margin-top:6px"><em>Training &#8594; Skill Level &#8594; Job Performance</em><br>Training works <em>by building skills</em></p></div>
<div class="cc bc"><h4>Moderator = Boundary Condition</h4>
<p style="font-size:.9rem">Explains <strong>WHEN</strong> or <strong>FOR WHOM</strong> X affects Y</p>
<p style="font-size:.88rem;margin-top:6px"><em>Training &#8594; Job Performance, stronger for new employees than veterans</em></p></div></div>
<div class="cb bb"><h3 class="blue">Latent Constructs Instead of Observed Measures</h3>
<p>Regression treats a single noisy item as a perfect measure &mdash; SEM extracts shared variance across multiple items and removes error. Result: <strong>cleaner, more accurate estimates</strong>.</p></div>
<div class="cb bh"><h3>Comprehensive Model Fit Evaluation</h3><ul>
<li><strong>Regression:</strong> R&sup2; for ONE equation</li>
<li><strong>SEM:</strong> fit indices (chi-square, CFI, RMSEA) for the ENTIRE model &mdash; all equations at once</li>
<li>Answers: "does my <em>whole theory</em> hold together?" not just "does this one predictor matter?"</li></ul></div>`},

{num:'Slide 12',title:'What SEM Does NOT Do',subtitle:'Important limitations to understand',toc:'What SEM Does NOT Do',
html:`<div class="cb three-col"><div class="cc oc"><h4>Does NOT Prove Causality</h4><ul>
<li>SEM tests whether your proposed causal structure is <em>consistent</em> with the data</li>
<li>Consistent &ne; proven</li>
<li>Multiple different causal models can produce the same covariance matrix</li>
<li>Only experiments with random assignment truly establish causation</li></ul></div>
<div class="cc bc"><h4>Does NOT Do Exploratory Analysis</h4><ul>
<li>You cannot throw 20 variables into SEM and say "find me a model"</li>
<li>Every relationship must be specified in advance based on theory</li>
<li>If you don't know what to expect, use EFA first, then confirm with SEM</li></ul></div>
<div style="padding:20px;border-radius:12px;background:linear-gradient(135deg,#FFF7ED,#EFF6FF);border:2px solid var(--g200)">
<h4 style="color:var(--g800);font-size:.95rem;font-weight:700;margin-bottom:8px">Does NOT Guarantee Validity</h4><ul>
<li>Good model fit &ne; valid constructs</li>
<li>You can get perfect fit with meaningless items if they happen to correlate</li>
<li>Validity comes from theory, literature, content experts &mdash; not from fit indices</li></ul></div></div>
<div class="cb bp">Running SEM without theory is like using a GPS without entering a destination.</div>`},

{num:'Slide 13',title:'First vs Second Generation Methods',subtitle:'Where SEM sits relative to the tools you already know',toc:'First vs Second Generation',
html:`<div class="cb two-col"><div class="cc oc"><h4>First Generation</h4>
<p style="font-size:.85rem;color:var(--od);font-weight:600;margin-bottom:8px">One relationship at a time, no error correction</p><ul>
<li>Classical factor analysis (EFA)</li><li>Multiple regression</li><li>ANOVA</li>
<li>Discriminant analysis</li><li>Canonical correlation</li></ul>
<p style="margin-top:8px;font-size:.88rem">Each handles ONE piece of the puzzle separately.</p></div>
<div class="cc bc"><h4>Second Generation</h4>
<p style="font-size:.85rem;color:var(--bd);font-weight:600;margin-bottom:8px">Simultaneous, with error correction</p><ul>
<li>CFA &mdash; tests whether proposed factor structure fits</li>
<li>SEM &mdash; tests entire systems of relationships at once</li></ul>
<p style="margin-top:8px;font-size:.88rem">Handles measurement AND structural relationships together.</p></div></div>
<div class="cb bh"><h3>Why "Generations"?</h3><ul>
<li>Term comes from <strong>Fornell (1987)</strong></li>
<li>Not about age &mdash; about statistical sophistication</li>
<li><span class="to">First gen</span> assumes measures are perfect &#8594; biased estimates</li>
<li><span class="tb">Second gen</span> explicitly models measurement error &#8594; unbiased estimates</li></ul></div>
<div class="cb bp">First gen = using a calculator. Second gen = using the calculator AND checking if the inputs are accurate before computing.</div>`},
];
