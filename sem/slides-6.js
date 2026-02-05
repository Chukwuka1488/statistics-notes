window.SEM_SLIDES.push(
{num:'Slide 43',title:'Calculating the Implied Covariance Matrix &mdash; Tracing Paths',subtitle:'The core mechanic of how &Sigma; is actually built',toc:'Tracing Paths',
html:`<div class="cb bg"><p><strong>To calculate the implied covariance between any two measured variables:</strong> trace ALL paths connecting them through the model and multiply the parameters along each path.</p></div>
<div class="cb bo"><h3 class="orange">Walk Through the Example</h3><ul>
<li>X1 is an indicator of C1 (loading = L1)</li>
<li>X2 is an indicator of C2 (loading = L2)</li>
<li>C1 and C2 are correlated (COV<sub>C1,C2</sub>)</li>
<li>Path from X1 to X2: X1 &larr; C1 &harr; C2 &rarr; X2</li></ul></div>
<div class="cb"><div class="fb">Estimated COV(X1,X2) = L1 &times; VAR(C1) &times; COV(C1,C2) &times; VAR(C2) &times; L2</div></div>
<div class="cb bb"><h3 class="blue">The Residual</h3><ul>
<li>Residual(X1,X2) = Actual COV(X1,X2) &minus; Estimated COV(X1,X2)</li>
<li>Small residual &rarr; model explains why X1 and X2 are related</li>
<li>Large residual &rarr; something about that relationship isn't captured</li></ul></div>
<div class="cb bp">SEM builds the ENTIRE implied covariance matrix cell by cell using tracing. Fit indices are just summaries of how well all cell-level predictions match reality.</div>`},

{num:'Slide 44',title:'Worked Example &mdash; Implied Covariance Within a Construct',subtitle:'Actual numbers &mdash; walk through slowly',toc:'Worked Example (Covariance)',
html:`<div class="cb bw"><h3>Setup</h3><ul>
<li>One latent variable (LV) with variance fixed to <strong>1.00</strong></li>
<li>Three indicators: X1 (&lambda; = .9457), X2 (&lambda; = 1.1445), X3 (&lambda; = 1.1716)</li>
<li>Error variances: e1 = .9838, e2 = 1.0314, e3 = 1.2296</li></ul></div>
<div class="cb bo"><h3 class="orange">Formula 1 &mdash; Variance of a Measured Variable</h3>
<div class="fb">Variance(X) = &lambda;&sup2; &times; VAR(LV) + error variance</div>
<p style="margin-top:10px">Variance(X1) = .9457&sup2; &times; 1 + .9838 = .8944 + .9838 = <strong>1.8782</strong></p>
<p style="font-size:.88rem;margin-top:6px"><em>X1's total variance = construct explains (.8944) + measurement noise (.9838)</em></p></div>
<div class="cb bb"><h3 class="blue">Formula 2 &mdash; Covariance Between Two Indicators (Same Construct)</h3>
<div class="fb">COV(X<sub>A</sub>, X<sub>B</sub>) = &lambda;<sub>A</sub> &times; VAR(LV) &times; &lambda;<sub>B</sub></div>
<p style="margin-top:10px">COV(X1, X2) = .9457 &times; 1 &times; 1.1445 = <strong>1.0824</strong></p>
<p style="font-size:.88rem;margin-top:6px"><em>No error term &mdash; errors are uncorrelated. Covariance comes ENTIRELY from the shared construct.</em></p></div>
<div class="cb bh"><h3>Key Insight</h3><ul>
<li><span class="to">Variance</span> = construct influence + error (two sources)</li>
<li><span class="tb">Covariance</span> = construct influence only (one source)</li>
<li>Covariances are the currency of SEM &mdash; they isolate the construct's contribution</li></ul></div>`},

{num:'Slide 45',title:'What is a Residual in SEM?',subtitle:'Not what you expect from regression',toc:'Residuals in SEM',
html:`<div class="cb two-col"><div class="cc oc"><h4>In Regression</h4><ul>
<li>Residual = one per <strong>person</strong></li>
<li>Predicted Y &minus; actual Y for each individual</li>
<li>200 people &rarr; 200 residuals</li></ul></div>
<div class="cc bc"><h4>In SEM</h4><ul>
<li>Residual = one per <strong>pair of variables</strong></li>
<li>Actual COV &minus; Estimated COV</li>
<li>10 variables &rarr; 55 unique residuals</li>
<li>Nothing to do with individual respondents</li></ul></div></div>
<div class="cb bo"><h3 class="orange">What Residuals Tell You</h3><ul>
<li>Large residual for a specific pair &rarr; model does NOT explain why those two variables are related</li>
<li>Pinpoints exactly <strong>where</strong> your theory breaks down</li>
<li><em>Example: large residual for (X2, X5) &rarr; missing a cross-loading or omitted construct</em></li></ul></div>
<div class="cb bh"><h3>Full Residual Matrix</h3><ul>
<li>Not just a single number &mdash; you get a residual for EVERY covariance</li>
<li>Modification indices use these to suggest where adding a path would improve fit</li>
<li>But only add paths if <strong>theoretically justified</strong> &mdash; don't chase small residuals</li></ul></div>`},

{num:'Slide 46',title:'The Measurement Model',subtitle:'Section header &mdash; zooming into the CFA side',toc:'Measurement Model (Section)',
html:`<div class="cb bg"><p>&ldquo;We've covered the fundamentals &mdash; goals, processes, estimation, residuals. Now we zoom into the first of the two submodels: the <strong>measurement model</strong>.&rdquo;</p></div>
<div class="cb bh"><h3>Three Topics Coming Up</h3>
<div class="three-col" style="margin-top:12px;text-align:center">
<div class="cc oc"><h4>The Measurement Model</h4><p style="font-size:.88rem">Relating indicators to constructs</p></div>
<div class="cc bc"><h4>Reflective Structure</h4><p style="font-size:.88rem">Conceptualizing latent constructs</p></div>
<div class="cc oc"><h4>Using Indicators</h4><p style="font-size:.88rem">Measuring constructs properly</p></div></div></div>
<div class="cb bp">This is the CFA side &mdash; does our measurement actually work before we test structural paths?</div>`},

{num:'Slide 47',title:'Submodel 1 &mdash; The Measurement Model',subtitle:'Relating indicators to latent constructs',toc:'Measurement Model Details',
html:`<div class="cb bg"><p><strong>Starting point:</strong> before testing any structural paths, establish that your measures work.</p></div>
<div class="cb bw"><h3>What is an Indicator?</h3>
<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px"><span class="tag tag-o">measured variable</span><span class="tag tag-o">manifest</span><span class="tag tag-o">observed</span></div>
<p>The actual data you collect &mdash; the number on the spreadsheet, the survey response.</p>
<p style="margin-top:6px"><em>Example: &ldquo;This company is trustworthy&rdquo; rated 1&ndash;7 = one indicator</em></p></div>
<div class="cb two-col"><div class="cc oc"><h4>Assumption 1: Contains Error</h4><ul>
<li>No item perfectly captures the construct</li>
<li>Part of response = true score</li>
<li>Part = noise (mood, interpretation, random)</li></ul></div>
<div class="cc bc"><h4>Assumption 2: Is Representative</h4><ul>
<li>Item must actually reflect the concept</li>
<li>A question about price doesn't belong on a trust scale</li>
<li>Poor items load poorly &rarr; weaken the construct</li></ul></div></div>
<div class="cb bp">Measurement model's job: separate signal (construct) from noise (error). Garbage in, garbage out.</div>`},

{num:'Slide 48',title:'Conceptualizing Latent Variables &mdash; Reflective Structure',subtitle:'Arrows go FROM construct TO indicators',toc:'Reflective Structure',
html:`<div class="cb bo"><h3 class="orange">Most Common Structure: Reflective</h3><ul>
<li>Arrows go <strong>FROM</strong> the latent variable <strong>TO</strong> the indicators (X1, X2, X3, X4)</li>
<li>Direction = the construct <strong>CAUSES</strong> the responses</li>
<li>If depression increases, ALL four items should change in the same direction</li>
<li>Each indicator is an effect/reflection of the construct &mdash; hence &ldquo;reflective&rdquo;</li></ul></div>
<div class="cb fd"><div class="fx fo">Construct</div><span class="fa">&#8594;</span><div class="fx fw">X1</div>
<span class="fa">&#8594;</span><div class="fx fw">X2</div><span class="fa">&#8594;</span><div class="fx fw">X3</div></div>
<div class="cb bb"><h3 class="blue">What Is the Latent Variable?</h3><ul>
<li>It IS what the indicators share in common</li>
<li>Strip away each item's unique noise (e1, e2, e3) &rarr; what's left = the construct</li>
<li>Each arrow = a factor loading (&lambda;) &mdash; how strongly the construct influences that item</li></ul></div>
<div class="cb bh"><h3>The Alternative: Formative Model</h3><ul>
<li>Arrows go FROM indicators TO construct (opposite direction)</li>
<li><em>Example: SES is FORMED BY income + education + occupation</em></li>
<li>Indicators don't need to correlate &mdash; they create the construct rather than reflect it</li>
<li>CFA assumes reflective. If your construct is formative, CFA is the wrong method</li></ul></div>`},

{num:'Slide 49',title:'Latent Variables = Shared Variance',subtitle:'What the latent variable actually captures',toc:'Shared Variance',
html:`<div class="cb bg"><p><strong>Each indicator's variance has three components:</strong></p></div>
<div class="cb three-col">
<div class="cc oc" style="text-align:center"><h4>Common Variance</h4>
<p style="font-size:.88rem">Shared with other indicators of the same construct (the overlap)</p></div>
<div class="cc bc" style="text-align:center"><h4>Specific Variance</h4>
<p style="font-size:.88rem">Unique to that item but reliable (e.g., item wording effects)</p></div>
<div class="cc oc" style="text-align:center"><h4>Random Error</h4>
<p style="font-size:.88rem">Pure noise (mood, misreading, guessing)</p></div></div>
<div class="cb bo"><h3 class="orange">Latent Variable = Common Variance Only</h3><ul>
<li>Captures what ALL indicators share &mdash; strips out specific and error variance</li>
<li>This is exactly what factor analysis does: extracts the common factor</li>
<li><em>4 trust items each have noise, but they all tap into the same underlying &ldquo;trust&rdquo;</em></li></ul></div>
<div class="cb bb"><h3 class="blue">Error Term = Everything Else</h3><ul>
<li>Unique variance (specific + random) &rarr; absorbed into error term (e)</li>
<li>High error &rarr; weak indicator (lots of noise)</li>
<li>Low error &rarr; strong indicator (mostly signal)</li></ul></div>
<div class="cb bp">Regression uses raw items (common + specific + error). SEM uses only common variance (error removed). That's why SEM estimates are unbiased.</div>`}
);
