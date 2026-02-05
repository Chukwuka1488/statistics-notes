window.SEM_SLIDES.push(
{num:'Slide 62',title:'Path Analysis &mdash; Three Rules for Compound Paths',subtitle:'Decompose correlations into the sum of all compound paths',toc:'Compound Path Rules',
html:`<div class="cb bg"><p><strong>Goal:</strong> decompose a bivariate correlation into the sum of all compound paths connecting two variables.</p></div>
<div class="cb bo"><h3 class="orange">Rule 1 &mdash; No Going Backward After Going Forward</h3><ul>
<li>You can go backward (against arrows) as many times as needed BEFORE going forward</li>
<li>Once you go forward (with an arrow), you cannot go backward again</li>
<li><em>Think: backward moves first, then switch to forward and stay forward</em></li></ul></div>
<div class="cb bb"><h3 class="blue">Rule 2 &mdash; No Revisiting Variables</h3><ul>
<li>The path cannot pass through the same variable more than once</li>
<li>Prevents infinite loops</li></ul></div>
<div class="cb bw"><h3>Rule 3 &mdash; Only One Curved Arrow Per Path</h3><ul>
<li>At most one correlation (&harr;) in any single compound path</li>
<li>Limits how you can connect through exogenous constructs</li></ul></div>
<div class="cb bh"><h3>Example</h3>
<p>Model: X1 &harr; X2 &rarr; Y1</p>
<p style="margin-top:6px">Compound path from X1 to Y1: X1 &harr; X2 &rarr; Y1</p>
<div class="fb">r(X1, Y1) = correlation(X1, X2) &times; path(X2 &rarr; Y1)</div></div>`},

{num:'Slide 63',title:'Direct vs Indirect Relationships &mdash; Estimating Parameters',subtitle:'Each arrow = a parameter to estimate',toc:'Estimating Parameters',
html:`<div class="cb two-col"><div class="cc oc"><h4>Direct Relationship</h4><ul>
<li>Only one arrow links two constructs</li>
<li>Effect = that single parameter estimate</li>
<li><em>Trust &rarr; Loyalty = 0.45</em></li>
<li>One arrow, one number &mdash; straightforward</li></ul></div>
<div class="cc bc"><h4>Indirect Relationship</h4><ul>
<li>Multiple arrows through intermediaries</li>
<li>Indirect effect = <strong>PRODUCT</strong> of estimates along the path</li>
<li><em>X &rarr; Y &rarr; Z: 0.60 &times; 0.50 = 0.30</em></li>
<li>X doesn't directly touch Z &mdash; works through Y</li></ul></div></div>
<div class="cb bo"><h3 class="orange">Why Multiply (Not Add)?</h3><ul>
<li>Each step passes along only a fraction of the effect</li>
<li>X explains 60% of Y, then Y explains 50% of Z &rarr; X explains 60% of 50% = 30% of Z</li>
<li><em>Like a chain of gears &mdash; each one loses some force</em></li></ul></div>
<div class="cb bh"><h3>Total Effect (When Both Exist)</h3>
<div class="fb">Total = Direct + Indirect = 0.20 + 0.30 = 0.50</div>
<p style="margin-top:8px">Direct and indirect effects ADD together for the total.</p></div>`},

{num:'Slide 64',title:'Worked Example &mdash; Estimating Path Coefficients',subtitle:'Decomposing correlations into path coefficients step by step',toc:'Worked Example (Paths)',
html:`<div class="cb bw"><h3>Given &mdash; Bivariate Correlations</h3>
<p>Model: X1 &harr; X2, X1 &rarr; Y1, X2 &rarr; Y1 (coefficients A, B, C)</p>
<div class="fb">r(X1, X2) = .50 &nbsp;&nbsp;&bull;&nbsp;&nbsp; r(X1, Y1) = .60 &nbsp;&nbsp;&bull;&nbsp;&nbsp; r(X2, Y1) = .70</div></div>
<div class="cb bo"><h3 class="orange">Step 1 &mdash; Express as Compound Paths</h3>
<ul><li>r(X1, X2) = A &nbsp;&rarr;&nbsp; <strong>A = .50</strong></li>
<li>r(X1, Y1) = B + AC &nbsp;&rarr;&nbsp; .60 = B + .50C</li>
<li>r(X2, Y1) = C + AB &nbsp;&rarr;&nbsp; .70 = C + .50B</li></ul></div>
<div class="cb bb"><h3 class="blue">Step 2 &mdash; Solve the System</h3>
<ul><li>From eq 2: B = .60 &minus; .50C</li>
<li>Substitute into eq 3: .70 = C + .50(.60 &minus; .50C)</li>
<li>.70 = C + .30 &minus; .25C &rarr; .40 = .75C &rarr; <strong>C = .53</strong></li>
<li>Back-substitute: B = .60 &minus; .50(.53) &rarr; <strong>B = .33</strong></li></ul></div>
<div class="cb bh"><h3>Interpretation</h3><ul>
<li>X2 has stronger direct effect on Y1 (<strong>.53</strong>) than X1 (<strong>.33</strong>)</li>
<li>X1 also affects Y1 indirectly through X2: .50 &times; .53 = <strong>.27</strong></li>
<li>X1's total effect = .33 + .27 = <strong>.60</strong> (matches observed correlation &mdash; math checks out)</li></ul></div>
<div class="cb bp">This is exactly what SEM software does &mdash; but with dozens of variables simultaneously.</div>`},

{num:'Slide 65',title:'CFA vs SEM &mdash; Side-by-Side',subtitle:'The visual summary of the entire lecture',toc:'CFA vs SEM',
html:`<div class="cb two-col"><div class="cc oc"><h4>Left: CFA (Measurement Model)</h4><ul>
<li>Same constructs (C1, C2, C3), same indicators</li>
<li>ALL constructs connected with &harr; (curved arrows)</li>
<li>No directional claims &mdash; just &ldquo;these correlate&rdquo;</li>
<li>Purpose: does the measurement work?</li>
<li>Stage 2/4 in Hair's 6 stages</li></ul></div>
<div class="cc bc"><h4>Right: Full SEM (Structural Model)</h4><ul>
<li>Same constructs, same indicators</li>
<li>Some &harr; replaced with &rarr; (directional paths)</li>
<li>Now making causal claims: C1 &rarr; C3, C2 &rarr; C3</li>
<li>Purpose: do constructs predict each other?</li>
<li>Stage 5/6 in Hair's 6 stages</li></ul></div></div>
<div class="cb bh"><h3>What Changed Between the Two</h3><ul>
<li>Indicators and loadings are <strong>IDENTICAL</strong> &mdash; measurement didn't change</li>
<li>Only relationships BETWEEN constructs changed: &harr; became &rarr;</li>
<li>Replacing free correlations with directional paths = further constraint</li></ul></div>
<div class="cb fd"><div class="fx fo">Step 1: CFA<br><small>Confirm measurement</small></div><span class="fa">&#10140;</span>
<div class="fx fb2">Step 2: SEM<br><small>Test hypotheses</small></div></div>
<div class="cb bp">If CFA fails, don't proceed to SEM &mdash; fix measurement first.</div>`},

{num:'Slide 66',title:'The 6 Stages of Conducting SEM',subtitle:'Hair et al.&rsquo;s complete roadmap',toc:'6 Stages of SEM',
html:`<div class="cb"><div class="tl">
<div class="ti"><div class="ty">Stage 1 &mdash; Define Individual Constructs</div>
<div class="tt">Define each construct and assign measured variables (items). What are you measuring and with what items?</div></div>
<div class="ti"><div class="ty">Stage 2 &mdash; Develop Measurement Model</div>
<div class="tt">Specify which items connect to which constructs (and which do NOT). This is the CFA model.</div></div>
<div class="ti"><div class="ty">Stage 3 &mdash; Design Study</div>
<div class="tt">Ensure study characteristics are adequate: sample size, missing data handling, normality.</div></div>
<div class="ti"><div class="ty">Stage 4 &mdash; Assess Measurement Validity</div>
<div class="tt">Test CFA fit (&chi;&sup2;, CFI, RMSEA, SRMR). Assess convergent and discriminant validity.</div></div>
<div class="ti"><div class="ty">Stage 5 &mdash; Specify Structural Model</div>
<div class="tt">Replace some &harr; with &rarr; based on theory. This imposes your hypotheses.</div></div>
<div class="ti"><div class="ty">Stage 6 &mdash; Assess Structural Validity</div>
<div class="tt">Does the structural model fit? Compare measurement vs structural model fit.</div></div>
</div></div>
<div class="cb bh"><h3>Key Point &mdash; Sequential, Don't Skip</h3><ul>
<li>Stages 1&ndash;2 = define what you're measuring</li>
<li>Stage 3 = make sure data is adequate</li>
<li>Stage 4 = validate measurement BEFORE testing structure</li>
<li>Stages 5&ndash;6 = test your hypotheses</li></ul></div>`}
);
