window.SEM_SLIDES.push(
{num:'Slide 74',title:'Stage 5 &mdash; Specifying the Structural Model',subtitle:'The transition from CFA to full SEM',toc:'Stage 5: Structural Model',
html:`<div class="cb bg"><p><strong>Take the validated measurement model from Stage 4</strong> &rarr; remove some &harr; &rarr; replace others with &rarr; &rarr; result = the structural model.</p></div>
<div class="cb bo"><h3 class="orange">&ldquo;Further Constrain the Measurement Model&rdquo;</h3><ul>
<li>CFA: all constructs freely correlate (&harr;) &mdash; maximum freedom</li>
<li>Structural model: some &harr; become &rarr; (directional), others removed entirely</li>
<li>Each change = additional constraint &mdash; more specific about HOW constructs relate</li></ul></div>
<div class="cb fd"><div class="fx fo">Trust</div><span class="fa">&rarr;</span>
<div class="fx" style="background:linear-gradient(135deg,var(--o),var(--b));color:#fff">Satisfaction</div>
<span class="fa">&rarr;</span><div class="fx fb2">Loyalty</div></div>
<div class="cb bb"><h3 class="blue">Example</h3><ul>
<li>CFA had: Trust &harr; Satisfaction &harr; Loyalty (all freely correlate)</li>
<li>Structural: Trust &rarr; Satisfaction &rarr; Loyalty, Trust &harr; Loyalty removed (full mediation)</li>
<li>Went from &ldquo;all related somehow&rdquo; to &ldquo;trust drives satisfaction which drives loyalty&rdquo;</li></ul></div>
<div class="cb bh"><h3>Why Fit Typically Drops Slightly</h3><ul>
<li>More constraints = less freedom = harder to fit</li>
<li>Small drop from CFA to structural = <span class="to">normal and expected</span></li>
<li>Large drop = structural theory doesn't match the data</li></ul></div>`},

{num:'Slide 75',title:'Stage 6 &mdash; Assessing Structural Model Validity',subtitle:'Compare measurement model fit vs structural model fit',toc:'Stage 6: Structural Validity',
html:`<div class="cb bg"><p><strong>The final check:</strong> how much did fit drop when you added your theoretical constraints?</p></div>
<div class="cb two-col"><div class="cc oc"><h4>Small Drop in Fit</h4><ul>
<li>Structural theory is consistent with the data</li>
<li>Directional paths adequately explain the correlations</li>
<li>Both measurement and theory are supported</li></ul></div>
<div class="cc bc"><h4>Large Drop in Fit</h4><ul>
<li>Structural theory imposes restrictions data doesn't support</li>
<li>Some hypothesized paths may be wrong</li>
<li>Some omitted paths may be needed</li></ul></div></div>
<div class="cb bh"><h3>What to Report</h3><ul>
<li>Fit indices for <strong>both models side by side</strong> (CFA vs structural)</li>
<li><strong>&Delta;&chi;&sup2;</strong> (chi-square difference test) &mdash; formally tests whether drop is significant</li>
<li>Individual path coefficients with significance (t-values or p-values) for each hypothesis</li></ul></div>
<div class="cb bp">If CFA fits great but SEM fits poorly &rarr; measurement is fine but your theory about how constructs relate is wrong.</div>`},

{num:'Slide 76',title:'SEM as an Essential Tool &mdash; Closing Perspective',subtitle:'SEM&rsquo;s role in research today',toc:'SEM: Essential Tool',
html:`<div class="cb bo"><h3 class="orange">Why SEM Became Central</h3><ul>
<li>Essential tool for both academic and commercial research</li>
<li>Not just a technique &mdash; it's the &ldquo;language&rdquo; of model development</li>
<li>Convergence of strong theory (structural paths) + strong measurement (CFA)</li>
<li>No other single framework handles both simultaneously</li>
<li>Theory &rarr; testable model &rarr; empirical results in one coherent workflow</li></ul></div>
<div class="cb bb"><h3 class="blue">The Causality Caveat &mdash; One Last Time</h3><ul>
<li>SEM does <strong>NOT</strong> automatically prove causality</li>
<li>But provides the most rigorous test outside of actual experimentation</li>
<li>Tests whether proposed causal structure is CONSISTENT with data</li>
<li>Consistency &ne; proof &mdash; multiple structures could produce the same covariance matrix</li></ul></div>
<div class="cb bp">&ldquo;SEM is the most powerful tool for testing theory with observational data. But power comes with responsibility &mdash; you still need good theory, good measurement, and appropriate data.&rdquo;</div>`},

{num:'Slide 77',title:'What You Will Need To Know',subtitle:'Looking ahead &mdash; from concepts to application',toc:'Looking Ahead',
html:`<div class="cb bo"><h3 class="orange">1. Role of Theory in SEM</h3>
<p style="font-size:.88rem">We've established that theory drives everything. <strong>Going deeper:</strong> translating a literature review into a testable SEM model.</p></div>
<div class="cb bb"><h3 class="blue">2. Measurement vs Structural Models</h3>
<p style="font-size:.88rem">CFA = measurement, structural = hypotheses, two-step approach. <strong>Going deeper:</strong> running CFA in AMOS, interpreting output.</p></div>
<div class="cb bo"><h3 class="orange">3. Benefits &amp; Problems of Latent Constructs</h3>
<p style="font-size:.88rem">Error correction, unbiased estimates. <strong>Going deeper:</strong> formative vs reflective debates, second-order constructs.</p></div>
<div class="cb bb"><h3 class="blue">4. Measures to Theoretical Relationships</h3>
<p style="font-size:.88rem">Indicators &rarr; constructs &rarr; paths. <strong>Going deeper:</strong> how poor items contaminate results, item parceling, scale development.</p></div>
<div class="cb bw"><h3>5. Unspecified Relationships</h3>
<p style="font-size:.88rem">Omitted paths = zero constraints = df. <strong>Going deeper:</strong> modification indices, equivalent models.</p></div>
<div class="cb bp">&ldquo;Today was the conceptual foundation. Next we get hands-on with actual data and software.&rdquo;</div>`},

{num:'Slide 78',title:'What You Should Do Right Now',subtitle:'Three concrete action items',toc:'Action Items',
html:`<div class="cb bo"><h3 class="orange">1. Develop a Theoretical Perspective</h3><ul>
<li>Start with your research question &mdash; what are you trying to explain?</li>
<li>Identify constructs from the literature (don't invent without reason)</li>
<li>Draw a rough path diagram based on theory</li>
<li>Ask yourself: <em>&ldquo;can I cite a paper for every arrow I draw?&rdquo;</em></li></ul></div>
<div class="cb bb"><h3 class="blue">2. Understand Your Measures</h3><ul>
<li>Find validated scales in the literature for each construct</li>
<li>Check reliability (Cronbach's &alpha; &gt; .70) and validity from prior studies</li>
<li>Don't create your own items unless no validated scale exists</li>
<li>Know: how many items per construct? Reflective or formative?</li></ul></div>
<div class="cb bw"><h3>3. Start Acquainting Yourself with AMOS</h3><ul>
<li>AMOS = the SEM software for this course</li>
<li>Graphical &mdash; you literally draw the path diagram and it estimates the model</li>
<li>Open it, draw a simple model, get comfortable with the interface</li>
<li>Hands-on exercises in upcoming weeks</li></ul></div>`},

{num:'Slide 79',title:'Learning Checkpoints',subtitle:'Can you answer these two questions?',toc:'Learning Checkpoints',
html:`<div class="cb bo"><h3 class="orange">1. &ldquo;Provide a basic overview of what is SEM&rdquo;</h3>
<div class="bh" style="margin-top:12px;padding:14px 18px;border-radius:10px">
<p style="font-size:.88rem">SEM is a family of statistical techniques that combines factor analysis (measurement model) and regression (structural model) into one simultaneous estimation. It tests whether a theoretically specified model is consistent with observed data by comparing an implied covariance matrix to the sample covariance matrix. It explicitly models measurement error, tests entire systems of relationships at once, and provides overall model fit indices.</p></div></div>
<div class="cb bb"><h3 class="blue">2. &ldquo;How does SEM combine factor analysis and linear regression?&rdquo;</h3>
<div class="bh" style="margin-top:12px;padding:14px 18px;border-radius:10px">
<p style="font-size:.88rem">Factor analysis handles the measurement side &mdash; extracting latent constructs from observed indicators and separating signal from noise. Linear regression handles the structural side &mdash; estimating directional relationships between constructs. SEM does both simultaneously: CFA builds error-free constructs from items, then structural paths test hypotheses between those constructs.</p></div></div>
<div class="cb bp">&ldquo;If you can answer these two questions confidently, you've got the foundation. Everything from here builds on these concepts.&rdquo;</div>`}
);
