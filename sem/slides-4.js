window.SEM_SLIDES.push(
{num:'Slide 29',title:'A Basic SEM Model &mdash; Putting It All Together',subtitle:'The two halves working as one',toc:'Basic SEM Model',
html:`<div class="cb two-col"><div class="cc oc"><h4>Measurement Model (outer part)</h4><ul>
<li>Connections between constructs (ovals) and their indicators (rectangles)</li>
<li>This is the CFA portion &mdash; "do my items measure what I claim?"</li>
<li>All factor loading relationships live here</li></ul></div>
<div class="cc bc"><h4>Structural Model (inner part)</h4><ul>
<li>Connections between constructs only &mdash; arrows between ovals</li>
<li>This is the hypothesis-testing portion</li>
<li>This is what your research questions are actually about</li></ul></div></div>
<div class="cb bh"><h3>Critical Points</h3><ul>
<li>These are <strong>NOT</strong> two separate models &mdash; they're estimated simultaneously in one analysis</li>
<li>The measurement model feeds into the structural model: clean constructs &#8594; test relationships</li>
<li>If you skip measurement (just run regression on raw items), you lose the error correction</li></ul></div>
<div class="cb bp">Measurement model = foundation. Structural model = building on top. Bad foundation = building collapses.</div>`},

{num:'Slide 30',title:'Revisiting the Basic SEM Model &mdash; Labels Added',subtitle:'Same diagram, now with specific labels',toc:'SEM Model Labels',
html:`<div class="cb bg"><p>"This is the same model, but now I want you to see the two layers clearly. When we run SEM, the software estimates ALL of these arrows at the same time."</p></div>
<div class="cb two-col"><div class="cc oc"><h4>Structural Relationships</h4><ul>
<li>The arrows between constructs</li>
<li>These are your hypotheses: H1, H2, H3, etc.</li>
<li>Each produces a <strong>path coefficient with a p-value</strong></li></ul></div>
<div class="cc bc"><h4>Measurement Relationships</h4><ul>
<li>The arrows from constructs to indicators</li>
<li>These are your <strong>factor loadings (lambdas)</strong></li>
<li>Each tells you how well that item represents the construct</li></ul></div></div>
<div class="cb bh"><h3>Reporting Order</h3>
<p>In your papers, report <span class="to">measurement results first</span> (CFA), then <span class="tb">structural results</span> (path coefficients) &mdash; but they come from one simultaneous estimation.</p></div>`},

{num:'Slide 31',title:'SEM and Causality &mdash; 4 Types of Evidence',subtitle:'SEM implies causality &mdash; it does NOT prove it',toc:'SEM and Causality',
html:`<div class="cb bg"><p><strong>4 conditions needed to claim a causal relationship:</strong></p></div>
<div class="cb two-col"><div class="cc oc"><h4>1. Covariation</h4><ul>
<li>X and Y must move together</li>
<li>SEM tests this via covariance matrix comparison</li>
<li>Easiest condition to meet &mdash; correlation satisfies it</li></ul></div>
<div class="cc bc"><h4>2. Sequence</h4><ul>
<li>X must happen BEFORE Y</li>
<li>SEM <strong>CANNOT</strong> establish this from cross-sectional data</li>
<li>Need longitudinal data or experiments</li>
<li><em>Major limitation of most SEM studies</em></li></ul></div></div>
<div class="cb two-col"><div class="cc oc"><h4>3. Nonspurious Covariance</h4><ul>
<li>X-Y relationship not explained by a third variable</li>
<li>SEM helps by controlling for other constructs</li>
<li>BUT cannot control for variables NOT in the model</li>
<li><em>Ice cream sales &amp; drowning &mdash; both caused by summer heat</em></li></ul></div>
<div class="cc bc"><h4>4. Theoretical Support</h4><ul>
<li>Logical, theory-based reason WHY X causes Y</li>
<li>This is on YOU the researcher</li>
<li>SEM tests consistency with theory, not whether theory is right</li></ul></div></div>
<div class="cb bp">Most SEM studies satisfy 1 (covariation), 3 (partial), and 4 (theory) &mdash; but struggle with 2 (sequence). SEM = strongest causal test outside experiments.</div>`},

{num:'Slide 32',title:'Spuriousness Example &mdash; Supervisor &amp; Job Satisfaction',subtitle:'When a third variable explains away your relationship',toc:'Spuriousness Example',
html:`<div class="cb bo"><h3 class="orange">The Example</h3><ul>
<li>Supervisor quality and job satisfaction appear correlated</li>
<li>But what if <strong>organizational climate</strong> causes BOTH?</li>
<li>Good climate &#8594; good supervisors AND happy employees</li>
<li>The supervisor-satisfaction link isn't causal &mdash; it's <strong>spurious</strong></li></ul></div>
<div class="cb fd"><div class="fx fo">Org Climate</div>
<span class="fa">&#8600;</span><div class="fx fw">Supervisor Quality</div>
<span class="fa" style="visibility:hidden">&#8594;</span><div class="fx" style="visibility:hidden">.</div>
<span class="fa">&#8600;</span><div class="fx fw">Job Satisfaction</div></div>
<div class="cb bb"><h3 class="blue">The Test</h3><ul>
<li>Add the third variable (climate) to the model</li>
<li>If supervisor &#8594; satisfaction path <strong>shrinks or disappears</strong>, the original relationship was spurious</li>
<li>If the path <strong>stays strong</strong> after controlling for climate, it's more likely real</li></ul></div>
<div class="cb bh"><h3>Why This Matters for SEM</h3><ul>
<li>SEM lets you include the third variable and test whether the relationship holds</li>
<li>But you can only control for variables you <strong>PUT</strong> in the model</li>
<li>If the true confounder isn't in your model, you'll never know</li>
<li>This is why <strong>theory matters</strong> &mdash; theory tells you which confounders to include</li></ul></div>`},

{num:'Slide 33',title:'Starting Point &mdash; Associations Between Variables',subtitle:'Two counterintuitive facts about correlations',toc:'Associations Between Variables',
html:`<div class="cb two-col"><div class="cc oc"><h4>Strong Correlation &#8800; Causation</h4><ul>
<li>Could be entirely spurious</li>
<li>Two variables can correlate perfectly and have zero causal connection</li>
<li><em>Firefighters at a fire correlate with fire damage &mdash; firefighters don't cause damage; bigger fires attract both</em></li></ul></div>
<div class="cc bc"><h4>Zero Correlation &#8800; No Causal Effect</h4><ul>
<li>This is called <strong>suppression</strong> &mdash; two opposing effects cancel out</li>
<li><em>Coffee &#8594; alertness (+) but coffee &#8594; anxiety &#8594; poor performance (-). Net correlation &#8776; zero, but causal effects exist</em></li>
<li>SEM can decompose these opposing paths</li></ul></div></div>
<div class="cb bh"><h3>What SEM Does with Covariances</h3><ul>
<li>You observe that X and Y covary &mdash; but why?</li>
<li>Part may be <span class="to">causal</span> (X actually causes Y)</li>
<li>Part may be <span class="tb">noncausal</span> (both caused by a third variable)</li>
<li>SEM's goal = separate the causal from noncausal portions of observed covariances</li>
<li>Your model specifies which parts are causal (straight arrows) and which are not (curved arrows or omitted paths)</li></ul></div>`},

{num:'Slide 34',title:'Basic SEM Research Questions',subtitle:'Three categories of questions SEM answers',toc:'Basic SEM Research Questions',
html:`<div class="cb bo"><h3 class="orange">1. Overall Model &mdash; "Does my theory hold up?"</h3><ul>
<li>Does the estimated covariance matrix fit the sample data? &#8594; fit indices (&chi;&sup2;, CFI, RMSEA)</li>
<li>Which model fits best? &#8594; compare competing theories</li>
<li>How much variance do the factors explain?</li>
<li><strong>Unique advantage:</strong> you test the ENTIRE theory at once</li></ul></div>
<div class="cb bb"><h3 class="blue">2. Constructs &amp; Measures &mdash; "Are my measures good?"</h3><ul>
<li><strong>Reliability:</strong> do items consistently measure the same thing? (Cronbach's &alpha;, composite reliability)</li>
<li><strong>Construct validity:</strong> do items actually measure what you claim? (convergent + discriminant validity)</li>
<li>This is the CFA portion &mdash; answered before you look at structural paths</li></ul></div>
<div class="cb bw"><h3>3. Relationships &mdash; "What are the effects?"</h3><ul>
<li>Parameter estimates &#8594; how strong is each path? (standardized coefficients)</li>
<li>Indirect/mediating effects &#8594; does X affect Y through M?</li>
<li><em>Example: Trust &#8594; Satisfaction = 0.65 (direct), Trust &#8594; Loyalty through Satisfaction = 0.42 (indirect)</em></li></ul></div>
<div class="cb bp">Answered in ORDER: model fit first &#8594; measurement quality &#8594; individual paths. If fit is poor, paths aren't trustworthy.</div>`},

{num:'Slide 35',title:'Advanced SEM Research Questions',subtitle:'Extensions beyond basic SEM',toc:'Advanced SEM Questions',
html:`<div class="cb bg"><p>"These are where SEM goes beyond basic regression. We'll focus on fundamentals first, but the framework extends to all of these."</p></div>
<div class="cb two-col"><div class="cc oc"><h4>Multigroup Models</h4>
<p style="font-size:.88rem">"Does the model differ across groups?"</p>
<p style="font-size:.85rem;margin-top:4px"><em>Does Trust &#8594; Purchase Intention work the same for men and women?</em> Constrain paths equal &#8594; if fit worsens, the effect differs.</p></div>
<div class="cc bc"><h4>Growth Curve Analysis</h4>
<p style="font-size:.88rem">"How do things change over time?"</p>
<p style="font-size:.85rem;margin-top:4px"><em>Does employee engagement increase or decrease over 2 years?</em> Requires longitudinal data.</p></div></div>
<div class="cb two-col"><div class="cc oc"><h4>Multilevel Models</h4>
<p style="font-size:.88rem">"Can I handle nested data?"</p>
<p style="font-size:.85rem;margin-top:4px"><em>Students nested in classrooms.</em> Individual-level + group-level in one model.</p></div>
<div class="cc bc"><h4>Latent Class Analysis</h4>
<p style="font-size:.88rem">"Are there hidden subgroups?"</p>
<p style="font-size:.85rem;margin-top:4px"><em>Data reveals 3 customer segments you didn't measure directly.</em> Groups emerge from response patterns.</p></div></div>`},

{num:'Slide 37',title:'Fundamentals of an SEM Model &mdash; Two Submodels',subtitle:'Every SEM model has exactly two halves &mdash; no exceptions',toc:'Two Submodels (Fundamentals)',
html:`<div class="cb two-col"><div class="cc oc"><h4>1. Measurement Model (CFA)</h4><ul>
<li>Links observed variables (survey items) to latent constructs</li>
<li>Answers: "Do my items actually measure what I claim?"</li>
<li>This is the factor analysis side of SEM</li>
<li><em>4 trust items &#8594; Trust construct. Are those items good reflections?</em></li></ul></div>
<div class="cc bc"><h4>2. Structural Model (Path Analysis)</h4><ul>
<li>Links latent constructs to each other</li>
<li>Answers: "Do constructs predict each other as my theory says?"</li>
<li>This is the regression side of SEM</li>
<li><em>Trust &#8594; Satisfaction &#8594; Loyalty. Do paths exist? How strong?</em></li></ul></div></div>
<div class="cb bh"><h3>Both Need Theoretical Support</h3><ul>
<li>You can't throw items at a construct without justification (measurement theory)</li>
<li>You can't draw arrows between constructs without reasoning (structural theory)</li>
<li>Both halves are <strong>theory-driven</strong>, not data-driven</li></ul></div>
<div class="cb bo"><h3 class="orange">Critical Rule &mdash; Measurement BEFORE Structural</h3><ul>
<li>Validate measurement model first (CFA), then test structural model</li>
<li>If items don't properly measure the construct, structural paths are meaningless</li>
<li><em>You wouldn't test if a kitchen scale weighs correctly if the scale itself is broken</em></li>
<li>This is <strong>Anderson &amp; Gerbing's (1988) two-step approach</strong> &mdash; standard practice</li></ul></div>`}
);
