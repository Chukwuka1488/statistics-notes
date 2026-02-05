window.SEM_SLIDES.push(
{num:'Slide 14',title:'SEM vs Other Multivariate Techniques',subtitle:'SEM borrows from BOTH families of techniques you already know',toc:'SEM vs Other Techniques',
html:`<div class="cb two-col"><div class="cc oc"><h4>Dependence Techniques (IV &#8594; DV)</h4><ul>
<li><strong>Multiple regression</strong> &mdash; SEM does this with latent constructs + multiple equations</li>
<li><strong>Simultaneous equations</strong> &mdash; SEM adds the measurement layer</li>
<li><strong>ANOVA/MANOVA</strong> &mdash; SEM can test group mean differences via structured means modeling</li></ul>
<p style="margin-top:8px;font-size:.88rem;font-weight:600;color:var(--od)">Clear predictor &#8594; outcome direction. SEM keeps that.</p></div>
<div class="cc bc"><h4>Interdependence Techniques (no IV/DV)</h4><ul>
<li><strong>Factor analysis</strong> &mdash; SEM's measurement model IS factor analysis (CFA)</li>
<li><strong>Latent class models</strong> &mdash; SEM can identify unobserved subgroups</li></ul>
<p style="margin-top:8px;font-size:.88rem;font-weight:600;color:var(--bd)">Find structure without assigning roles. SEM keeps that too.</p></div></div>
<div class="cb bp">The combination is the key: Dependence techniques can't handle measurement error. Interdependence techniques can't test directional paths. SEM does both.</div>
<div class="cb bw"><h3>Example</h3><p><strong>ANOVA</strong> tells you Group A &ne; Group B on a survey score.<br><strong>SEM</strong> tells you Group A &ne; Group B on the <em>latent construct</em> underlying that score &mdash; after removing measurement noise.</p></div>`},

{num:'Slide 15',title:'History of SEM',subtitle:'A merger of two separate traditions, 50+ years in the making',toc:'History of SEM',
html:`<div class="cb"><div class="tl">
<div class="ti"><div class="ty">1904 &mdash; Spearman</div><div class="tt">Studied intelligence. Asked "what common factor explains why these test scores correlate?" &mdash; origin of factor analysis.</div></div>
<div class="ti"><div class="ty">1921 &mdash; Sewall Wright</div><div class="tt">Geneticist. Invented <strong>path analysis</strong> to model birth weight in guinea pigs. First to draw arrows between variables and estimate path coefficients.</div></div>
<div class="ti"><div class="ty">1930s &mdash; Thurstone</div><div class="tt">Psychologist. Developed <strong>factor analysis</strong> to study intelligence. First to extract latent factors from observed test scores.</div></div>
<div class="ti"><div class="ty">~1970 &mdash; J&ouml;reskog &amp; S&ouml;rbom</div><div class="tt">Combined path analysis + factor analysis into one framework. Created <strong>LISREL</strong> (Linear Structural Relations) &mdash; first SEM software.</div></div>
<div class="ti"><div class="ty">1980s &mdash; EQS (Bentler)</div><div class="tt">Competed with LISREL, friendlier syntax.</div></div>
<div class="ti"><div class="ty">Late 1990s &mdash; AMOS</div><div class="tt">Game changer: <strong>drag-and-drop GUI</strong>, bundled with SPSS. Made SEM accessible to applied researchers who weren't statisticians.</div></div>
<div class="ti"><div class="ty">2000s+ &mdash; Modern Era</div><div class="tt">Mplus (very flexible), lavaan (free, R-based), STATA. Software accessibility drove SEM's explosion in published research.</div></div>
</div></div>`},

{num:'Slide 16',title:'Convergence of Two Traditions',subtitle:'Visual diagram &mdash; two streams flowing into one',toc:'Convergence of Two Traditions',
html:`<div class="cb"><div class="two-col" style="margin-bottom:20px">
<div class="cc oc" style="text-align:center"><h4>Stream 1: Factor Analysis</h4>
<p style="font-size:.9rem"><strong>Spearman (1904)</strong></p>
<p style="font-size:.85rem">"What common factor explains why these test scores correlate?"</p>
<p style="font-size:.82rem;margin-top:6px;color:var(--od)">Psychologists did FA</p></div>
<div class="cc bc" style="text-align:center"><h4>Stream 2: Path Analysis</h4>
<p style="font-size:.9rem"><strong>Wright (1921, 1924)</strong></p>
<p style="font-size:.85rem">"What's the causal chain from parent traits to offspring birth weight?"</p>
<p style="font-size:.82rem;margin-top:6px;color:var(--bd)">Biologists &amp; economists did path analysis</p></div></div></div>
<div class="cb fd"><div class="fx fo">Factor<br>Analysis</div><span class="fa" style="font-size:2rem">&#8600;</span>
<div class="fx" style="background:linear-gradient(135deg,var(--o),var(--b));color:#fff;min-width:180px"><strong>Modern SEM</strong><br><small>J&ouml;reskog, Keesling, Wiley + Bentler</small><br><small>1960s&ndash;70s</small></div>
<span class="fa" style="font-size:2rem">&#8598;</span><div class="fx fb2">Path<br>Analysis</div></div>
<div class="cb bh"><h3>The Integration</h3><p>FA handles the measurement side, path analysis handles the structural side &mdash; combine them and you get a complete framework. The JKW model = the mathematical foundation of modern SEM.</p></div>
<div class="cb bp">"SEM is what you get when Spearman's measurement question meets Wright's causal question &mdash; and someone finally built software to solve both at once."</div>`},

{num:'Slide 17',title:'Popular SEM Software Packages',subtitle:'Tools of the trade',toc:'Popular SEM Software',
html:`<div class="cb three-col">
<div class="cc oc" style="text-align:center"><h4>LISREL</h4><p style="font-size:.88rem">The original. SSI software.<br>PRELIS for data prep, SIMPLIS for simplified syntax.</p><span class="tag tag-o" style="margin-top:8px">Pioneer</span></div>
<div class="cc bc" style="text-align:center"><h4>AMOS</h4><p style="font-size:.88rem">Module in SPSS. Drag-and-drop GUI. <strong>What we use in this course.</strong></p><span class="tag tag-b" style="margin-top:8px">Course Tool</span></div>
<div class="cc oc" style="text-align:center"><h4>EQS</h4><p style="font-size:.88rem">Peter Bentler. Friendlier syntax than LISREL.</p><span class="tag tag-o" style="margin-top:8px">Classic</span></div></div>
<div class="cb three-col">
<div class="cc bc" style="text-align:center"><h4>Mplus</h4><p style="font-size:.88rem">Very flexible. Growth curves, multilevel, mixture models.</p><span class="tag tag-b" style="margin-top:8px">Advanced</span></div>
<div class="cc oc" style="text-align:center"><h4>lavaan (R)</h4><p style="font-size:.88rem">Free, open source. R-based. Growing community.</p><span class="tag tag-o" style="margin-top:8px">Free</span></div>
<div class="cc bc" style="text-align:center"><h4>STATA / SAS (CALIS)</h4><p style="font-size:.88rem">For those already in those ecosystems.</p><span class="tag tag-b" style="margin-top:8px">Ecosystem</span></div></div>
<div class="cb bp">"AMOS for learning, Mplus for advanced research"</div>`},

{num:'Slide 18',title:'Defining a Model',subtitle:'Your theory made testable',toc:'Defining a Model',
html:`<div class="cb bg"><p><strong>Model = your theory made testable.</strong> A theory in words: "service quality drives satisfaction which drives loyalty." A model in SEM: that same theory translated into constructs, arrows, and equations. <em>If you can't draw it as a path diagram, your theory isn't precise enough.</em></p></div>
<div class="cb bo"><h3 class="orange">1. Measurement Theory (Measurement Model)</h3><ul>
<li>"Correspondence rules" = which items map to which construct</li>
<li><strong>Example:</strong> items Q1, Q2, Q3, Q4 all measure "Trust"</li>
<li>Tested via CFA: do these items actually load on one factor?</li>
<li>If your measurement theory is wrong, <strong>everything downstream is garbage</strong></li></ul></div>
<div class="cb bb"><h3 class="blue">2. Structural Theory (Structural Model)</h3><ul>
<li>"Correspondence rules" = which constructs predict which other constructs</li>
<li><strong>Example:</strong> Trust &#8594; Purchase Intention &#8594; Repeat Buying</li>
<li>Tested via path coefficients and model fit</li>
<li>This is where your hypotheses live (H1: Trust positively affects Purchase Intention)</li></ul></div>
<div class="cb bh"><h3>Key Sequence</h3>
<div class="fd"><div class="fx fo">1. Measurement<br><small>Validate CFA first</small></div><span class="fa">&#10140;</span><div class="fx fb2">2. Structural<br><small>Then test paths</small></div></div>
<p style="text-align:center;margin-top:10px">You cannot test whether Trust predicts Purchase Intention if your Trust measure is broken.</p></div>`},

{num:'Slide 19',title:'Measured Variables vs Latent Constructs',subtitle:'The fundamental building blocks of SEM',toc:'Measured Variables vs Latent Constructs',
html:`<div class="cb two-col"><div class="cc oc"><h4>Measured Variable</h4>
<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px"><span class="tag tag-o">observed</span><span class="tag tag-o">indicator</span><span class="tag tag-o">manifest</span></div><ul>
<li>What you actually collect &mdash; the raw data, the survey response</li>
<li>"Building blocks" of a construct</li>
<li>On its own, it's noisy &mdash; true score + interpretation error + mood + random noise</li></ul>
<div class="fb" style="margin-top:12px">&#9645; Rectangle in path diagrams</div></div>
<div class="cc bc"><h4>Latent Construct</h4>
<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px"><span class="tag tag-b">unobservable</span><span class="tag tag-b">factor</span><span class="tag tag-b">hidden</span></div><ul>
<li>"Latent" = hidden &mdash; can't directly observe or measure it</li>
<li>"Construct" = something researchers define to represent an abstract concept</li>
<li>Similar to a factor in factor analysis &mdash; it IS the factor</li></ul>
<div class="fb" style="margin-top:12px">&#9711; Oval in path diagrams</div></div></div>
<div class="cb bh"><h3>The Relationship</h3><ul>
<li>Multiple measured variables &#8594; one latent construct</li>
<li>The construct = what the items share in common (common variance)</li>
<li>What's left over in each item = measurement error (unique to that item)</li>
<li>This is why you need <strong>multiple items</strong>: one item can't separate signal from noise; 3&ndash;5 items can</li></ul></div>
<div class="cb bw"><h3>Why This Distinction Matters</h3><ul>
<li><span class="to">Regression</span> uses measured variables directly (noisy)</li>
<li><span class="tb">SEM</span> uses latent constructs derived from measured variables (error removed)</li>
<li>Hypotheses are tested between <strong>constructs</strong>, not between individual items</li></ul></div>`},

{num:'Slide 20',title:'Construct Types + Error Terms',subtitle:'Exogenous vs Endogenous, Error vs Disturbance',toc:'Construct Types + Error Terms',
html:`<div class="cb two-col"><div class="cc oc"><h4>Exogenous Construct</h4>
<p style="font-size:.9rem">Only predicts, <strong>never predicted</strong> (pure IV).<br>"Exo" = outside the model's influence.</p>
<p style="font-size:.85rem;margin-top:8px"><strong>Memory aid:</strong> exogenous = exits outward (sends only)</p></div>
<div class="cc bc"><h4>Endogenous Construct</h4>
<p style="font-size:.9rem">Predicted by at least one construct, but <strong>can also predict others</strong>.<br>"Endo" = inside.</p>
<p style="font-size:.85rem;margin-top:8px"><strong>Memory aid:</strong> endogenous = entered into (receives)</p></div></div>
<div class="cb fd"><div class="fx fo">Service Quality<br><small>(Exogenous)</small></div><span class="fa">&#8594;</span>
<div class="fx" style="background:linear-gradient(135deg,var(--o),var(--b));color:#fff">Satisfaction<br><small>(Endogenous)</small></div><span class="fa">&#8594;</span>
<div class="fx fb2">Loyalty<br><small>(Endogenous)</small></div></div>
<div class="cb two-col"><div class="cc oc"><h4>Error (E) &mdash; for Measured Variables</h4><ul>
<li>Variance in a survey item NOT explained by the construct</li>
<li>= interpretation + mood + random noise + item-specific content</li>
<li>Every measured variable gets its own error term</li></ul></div>
<div class="cc bc"><h4>Disturbance (D) &mdash; for Endogenous Constructs</h4><ul>
<li>Variance NOT explained by other constructs in the model</li>
<li>= the effect of everything your model doesn't include</li>
<li>Construct-level equivalent of the regression residual</li></ul></div></div>
<div class="cb bh"><h3>Why do exogenous constructs NOT have an error term?</h3><ul>
<li>They are NOT predicted by anything in the model &mdash; they're starting points</li>
<li>No predictor = no "unexplained variance from predictors" = no disturbance</li>
<li>Their total variance is simply estimated as a free parameter</li></ul></div>`},

{num:'Slide 21',title:'Incorporating Latent Constructs &mdash; Benefits',subtitle:'Why use latent constructs over observed variables?',toc:'Latent Construct Benefits',
html:`<div class="cb bg"><h3 style="color:#fff">Three Benefits of Using Latent Constructs</h3></div>
<div class="cb three-col">
<div class="cc oc" style="text-align:center"><div style="font-size:1.8rem;margin-bottom:6px">&#9881;</div><h4>Specify Measurement Error</h4>
<p style="font-size:.88rem;margin-top:4px">Explicitly models how much noise is in each item, rather than pretending items are perfect.</p></div>
<div class="cc bc" style="text-align:center"><div style="font-size:1.8rem;margin-bottom:6px">&#9733;</div><h4>Represent Theoretical Concepts</h4>
<p style="font-size:.88rem;margin-top:4px">Your hypothesis is about "Trust," not about "item Q3." Latent constructs match the level of your theory.</p></div>
<div class="cc oc" style="text-align:center"><div style="font-size:1.8rem;margin-bottom:6px">&#9889;</div><h4>Improve Statistical Estimation</h4>
<p style="font-size:.88rem;margin-top:4px">By removing measurement error, path coefficients are unbiased (no attenuation).</p></div></div>
<div class="cb bh"><h3>Why Multiple Items?</h3><ul>
<li>A single item can't separate signal from noise</li>
<li>3&ndash;5 items let SEM extract common variance and isolate error</li>
<li>Result: cleaner, more accurate path estimates</li></ul></div>`},

{num:'Slide 22',title:'Moving From Indicators to Constructs',subtitle:'Bridging the operational and theoretical levels',toc:'Indicators to Constructs',
html:`<div class="cb two-col"><div class="cc oc"><h4>Indicators (Measured Variables)</h4><ul>
<li>Provide <strong>operational</strong> measures of constructs &mdash; the data you actually collect</li>
<li>Provide only an empirical estimate of associations (observed correlations/covariances)</li>
<li>They are the means to an end, not the end itself</li></ul>
<p style="margin-top:8px;font-size:.85rem;font-weight:600;color:var(--od)">Level: Operational (data)</p></div>
<div class="cc bc"><h4>Constructs (Latent Variables)</h4><ul>
<li>Theoretical relationships are between constructs, NOT indicators</li>
<li>Represent the concepts of interest &mdash; what your theory is actually about</li>
<li>Your hypothesis: "Trust affects Purchase Intention" &mdash; not "Q3 affects Q7"</li></ul>
<p style="margin-top:8px;font-size:.85rem;font-weight:600;color:var(--bd)">Level: Theoretical (concept)</p></div></div>
<div class="cb bh"><h3>Key Distinction</h3><ul>
<li><span class="to">Indicators</span> = operational (data level)</li>
<li><span class="tb">Constructs</span> = theoretical (concept level)</li></ul></div>
<div class="cb bp">SEM bridges the two: uses indicators to build constructs, then tests theory at the construct level.</div>`}
);
