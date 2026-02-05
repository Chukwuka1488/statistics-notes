window.SEM_SLIDES.push(
{num:'Slide 57',title:'Constraints &mdash; How You Specify Every Relationship',subtitle:'There are no &ldquo;default&rdquo; assumptions in SEM',toc:'Constraints',
html:`<div class="cb bo"><h3 class="orange">1. Free Parameter</h3><ul>
<li>Estimated by the software from data</li>
<li>You're saying &ldquo;this relationship exists, tell me how strong it is&rdquo;</li>
<li><em>Example: Trust &rarr; Satisfaction (free) &mdash; SEM estimates the coefficient</em></li></ul></div>
<div class="cb bb"><h3 class="blue">2. Zero / Omitted Path</h3><ul>
<li>Deliberately set to 0 &mdash; NO relationship exists</li>
<li>The paths you LEAVE OUT are as important as the ones you include</li>
<li>If you're wrong, residuals and modification indices will flag it</li></ul></div>
<div class="cb two-col"><div class="cc oc"><h4>3. Equality Constraint</h4><ul>
<li>Force two+ parameters in the SAME model to be equal</li>
<li><em>Example: force loading of item 1 = loading of item 2 (tau-equivalent)</em></li></ul></div>
<div class="cc bc"><h4>4. Cross-Group Equality</h4><ul>
<li>Force parameters across DIFFERENT groups to be equal</li>
<li><em>Example: does Trust &rarr; Satisfaction equal for men and women?</em></li>
<li>If fit worsens &rarr; the effect differs across groups</li></ul></div></div>
<div class="cb bw"><h3>5. Informative Constraint</h3><ul>
<li>Force a parameter to be proportional, greater/less than another, or nonlinear</li>
<li>Advanced &mdash; rarely used in basic SEM</li></ul></div>`},

{num:'Slide 58',title:'Data Structures &mdash; Covariance vs Means',subtitle:'Two types of data structures SEM can work with',toc:'Covariance vs Means',
html:`<div class="cb two-col"><div class="cc oc"><h4>Covariance-Based (Default)</h4><ul>
<li>Analyzes relationships AMONG measured variables</li>
<li>Input = covariance matrix (or correlation matrix)</li>
<li>Standard SEM &mdash; everything discussed so far</li>
<li>Answers: &ldquo;how are variables related?&rdquo;</li></ul></div>
<div class="cc bc"><h4>Mean Structures</h4><ul>
<li>Adds construct MEANS and variable INTERCEPTS</li>
<li>Goes beyond relationships &mdash; compares group LEVELS</li>
<li>Used in: multigroup, growth curves, MIMIC models</li>
<li>Answers: &ldquo;do groups differ in construct levels?&rdquo;</li></ul></div></div>
<div class="cb bh"><h3>When to Use Which</h3><ul>
<li><span class="to">Most basic SEM studies</span> = covariance only (testing relationships)</li>
<li><span class="tb">Group comparisons on levels</span> = add mean structures</li>
<li><span class="tb">Growth curves</span> = mean structures required (tracking change needs means)</li></ul></div>
<div class="cb bp">Covariance structure = &ldquo;how variables move together&rdquo; (relationships). Mean structure = &ldquo;where variables sit on average&rdquo; (levels).</div>`},

{num:'Slide 59',title:'Example Structural Model &mdash; 5 Constructs',subtitle:'What you include AND what you leave out',toc:'5-Construct Example',
html:`<div class="cb bw"><h3>What's in the Model</h3><ul>
<li>5 latent constructs (ovals only &mdash; structural model focus)</li>
<li>7 relationships specified (arrows drawn)</li>
<li>Each arrow = a hypothesis you're testing</li></ul></div>
<div class="cb bo"><h3 class="orange">What's NOT in the Model &mdash; Equally Important</h3><ul>
<li>3 possible relationships are NOT specified (no arrow drawn)</li>
<li>With 5 constructs: 10 possible pairwise connections &mdash; you drew 7, left out 3</li>
<li>The 3 missing arrows = your theory says those relationships do NOT exist</li></ul></div>
<div class="cb bb"><h3 class="blue">Why Missing Arrows Matter (Over-identification)</h3><ul>
<li>Every omitted path = a constraint = a degree of freedom</li>
<li>More omitted paths &rarr; more df &rarr; model is more testable</li>
<li>ALL possible paths drawn = just-identified = untestable (perfect fit by default)</li></ul></div>
<div class="cb bp">Your theory is defined as much by what you EXCLUDE as what you INCLUDE. If the model fits well WITH those paths missing, your theory is supported.</div>`},

{num:'Slide 60',title:'Emergence of the DAG &mdash; Directed Acyclic Graph',subtitle:'Path diagrams with stricter causal inference rules',toc:'DAGs',
html:`<div class="cb bw"><h3>DAG = A Path Diagram with Stricter Rules</h3><ul>
<li><strong>Directed</strong> &mdash; all arrows are one-way (&rarr;), no undirected correlations</li>
<li><strong>Acyclic</strong> &mdash; no cycles (can't follow arrows in a loop back to start)</li>
<li>Essentially a recursive structural model in formal causal inference notation</li></ul></div>
<div class="cb bo"><h3 class="orange">Why DAGs Are Gaining Popularity</h3><ul>
<li>Growing influence from Pearl and Rubin's causal inference frameworks</li>
<li>Represents relationships including constructs both IN and OUTSIDE the model</li>
<li>Isolates which effects can be interpreted as &ldquo;causal&rdquo;</li></ul></div>
<div class="cb bb"><h3 class="blue">The Big Contribution &mdash; What to Control For</h3><ul>
<li>DAGs tell you which constructs you SHOULD control for (<strong>confounders</strong>)</li>
<li>AND which you should NOT:</li></ul>
<ul style="padding-left:40px">
<li><strong>Don't control for mediators</strong> &mdash; removes real indirect effects</li>
<li><strong>Don't control for colliders</strong> &mdash; creates spurious associations</li></ul>
<ul><li>Traditional &ldquo;control for everything&rdquo; can actually INTRODUCE bias</li></ul></div>
<div class="cb bp">&ldquo;DAGs formalize what we've been doing with path diagrams, but add rigor about what to include and exclude as controls &mdash; this is the frontier of causal modeling.&rdquo;</div>`},

{num:'Slide 61',title:'Exercise &mdash; Draw Interrelated Structural Relationships',subtitle:'Four scenarios that form one interconnected model',toc:'Exercise: Draw Paths',
html:`<div class="cb bg"><p><strong>Draw path diagrams for each scenario, then see how they connect into a single model.</strong></p></div>
<div class="cb two-col"><div class="cc oc"><h4>Scenario 1</h4>
<p style="font-size:.88rem">IVs: X1, X2 &rarr; DV: Y1</p>
<p style="font-size:.85rem;margin-top:4px">Simple: two exogenous constructs predicting one endogenous. Plus X1 &harr; X2 (exogenous correlate freely).</p></div>
<div class="cc bc"><h4>Scenario 2</h4>
<p style="font-size:.88rem">IVs: X2, Y1 &rarr; DV: Y2</p>
<p style="font-size:.85rem;margin-top:4px">Y1 is now a predictor! It was a DV in scenario 1 but an IV here. <em>Key SEM feature.</em></p></div></div>
<div class="cb two-col"><div class="cc oc"><h4>Scenario 3</h4>
<p style="font-size:.88rem">IVs: X2, X3, Y1, Y3 &rarr; DV: Y2</p>
<p style="font-size:.85rem;margin-top:4px">More complex &mdash; multiple exogenous AND endogenous predictors. Y2 hit from many directions.</p></div>
<div class="cc bc"><h4>Scenario 4</h4>
<p style="font-size:.88rem">IVs: Y1, Y2 &rarr; DV: Y3</p>
<p style="font-size:.85rem;margin-top:4px">All predictors are endogenous &mdash; no exogenous constructs here. Y3 at end of chain.</p></div></div>
<div class="cb bh"><h3>The Point</h3><ul>
<li>Combined, all four scenarios form <strong>ONE interconnected structural model</strong></li>
<li>Variables play different roles in different equations simultaneously</li>
<li>This is what SEM handles that regression can't</li></ul></div>`}
);
