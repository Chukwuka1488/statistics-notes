window.SEM_SLIDES.push(
{num:'Slide 38',title:'Goals of an SEM Model &mdash; Three Requirements',subtitle:'Your hypothesized model must satisfy three things',toc:'SEM Model Goals',
html:`<div class="cb bo"><h3 class="orange">1. Parameters &lt; Unique Data Points (Identification)</h3><ul>
<li>With p measured variables, data gives <strong>p&times;(p+1)/2</strong> unique pieces of information</li>
<li>Example: 10 variables &rarr; 10&times;11/2 = <strong>55 unique data points</strong></li>
<li>Model must estimate FEWER parameters than this</li></ul>
<div class="bh" style="margin-top:12px;padding:14px 18px;border-radius:10px"><ul>
<li><span class="to">Over-identified:</span> parameters &lt; data points &rarr; testable, has degrees of freedom &#10003;</li>
<li><span class="tb">Just-identified:</span> parameters = data points &rarr; perfect fit but untestable</li>
<li><strong>Under-identified:</strong> parameters &gt; data points &rarr; cannot be estimated &#10007;</li></ul></div></div>
<div class="cb bb"><h3 class="blue">2. Implied Covariance &asymp; Sample Covariance (Model Fit)</h3><ul>
<li><strong>S</strong> = sample covariance matrix (what data shows)</li>
<li><strong>&Sigma;(&theta;)</strong> = model-implied covariance matrix (what theory predicts)</li>
<li>SEM estimates parameters to make &Sigma;(&theta;) as close to S as possible</li>
<li>Fit indices (&chi;&sup2;, CFI, RMSEA) quantify the closeness</li></ul></div>
<div class="cb bw"><h3>3. Maximum Likelihood Estimation</h3><ul>
<li>ML asks: &ldquo;what parameter values make observing THIS data most probable?&rdquo;</li>
<li>Finds values that maximize the likelihood function</li>
<li><em>Analogy: 80 heads out of 100 flips &rarr; ML estimates P(heads) = 0.80</em></li>
<li>Default estimation method in virtually all SEM software</li></ul></div>`},

{num:'Slide 39',title:'Four SEM Processes &mdash; Specification, Identification, Estimation',subtitle:'The steps you follow when doing SEM (3 of 4)',toc:'SEM Processes (1-3)',
html:`<div class="cb bo"><h3 class="orange">1. Model Specification &mdash; &ldquo;Draw your theory&rdquo;</h3><ul>
<li>Convert theoretical model into a set of equations</li>
<li>Every arrow in the path diagram = one equation</li>
<li>Paths you leave OUT = claiming no relationship (just as important)</li>
<li><em>Example: specify Trust &rarr; Satisfaction &rarr; Loyalty but omit Trust &rarr; Loyalty = full mediation claim</em></li></ul></div>
<div class="cb bb"><h3 class="blue">2. Model Identification &mdash; &ldquo;Can it be estimated?&rdquo;</h3><ul>
<li>Rules determining whether software can find a unique solution</li>
<li>Minimum requirements per construct:</li></ul>
<ul style="padding-left:40px"><li>At least <strong>3 indicators</strong> with non-zero loadings</li>
<li>No correlated errors (unless theoretically justified)</li>
<li>Fix construct variance to 1 OR fix one loading to 1</li></ul>
<ul><li>Violated? &rarr; &ldquo;model is not identified&rdquo; error</li></ul></div>
<div class="cb bw"><h3>3. Model Estimation &mdash; &ldquo;Calculate the numbers&rdquo;</h3><ul>
<li><strong>OLS:</strong> minimizes squared residuals &mdash; rarely used in full SEM</li>
<li><strong>ML:</strong> finds values making data most probable &mdash; <span class="to">the standard</span></li>
<li><strong>Others:</strong> GLS, WLS (non-normal data), Bayesian</li>
<li>ML assumes multivariate normality &mdash; if violated, use robust ML or WLS</li></ul></div>
<div class="cb bp">Fourth process (Model Evaluation) covered next.</div>`},

{num:'Slide 40',title:'Model Evaluation &mdash; The Fourth SEM Process',subtitle:'Two levels of evaluation &mdash; both required',toc:'Model Evaluation',
html:`<div class="cb two-col"><div class="cc oc"><h4>1. Overall Model Fit</h4>
<p style="font-size:.88rem">&ldquo;Does my entire theory hold up?&rdquo;</p><ul>
<li>Compares <strong>S</strong> (sample) vs <strong>&Sigma;(&theta;)</strong> (implied)</li>
<li>Calculates squared differences between corresponding cells</li>
<li>OLS weights equally; ML weights by likelihood under normality</li>
<li>Result &rarr; fit indices (&chi;&sup2;, CFI, RMSEA, SRMR)</li>
<li>Small differences = good fit</li></ul></div>
<div class="cc bc"><h4>2. Individual Parameters</h4>
<p style="font-size:.88rem">&ldquo;Are specific paths significant?&rdquo;</p><ul>
<li>Each estimate &divide; standard error &rarr; t-score</li>
<li>t &gt; 1.96 &rarr; significant at p &lt; .05</li>
<li>Good fit overall &#8800; all paths significant</li>
<li><em>Example: model fits well, but Trust &rarr; Loyalty has t = 1.20 &rarr; not supported</em></li></ul></div></div>
<div class="cb bh"><h3>You Need BOTH</h3><ul>
<li>Good overall fit <strong>AND</strong> significant individual paths</li>
<li>Overall fit = &ldquo;the recipe works as a whole&rdquo;</li>
<li>Individual parameters = &ldquo;each ingredient contributes something&rdquo;</li>
<li>A recipe can work overall but one ingredient might be unnecessary (non-significant path)</li></ul></div>`},

{num:'Slide 41',title:'Basics of SEM Estimation &mdash; S vs &Sigma;',subtitle:'SEM = analysis of covariance structures',toc:'S vs Σ Estimation',
html:`<div class="cb bg"><p><strong>Goal:</strong> explain the observed covariances among measured variables by building an estimated covariance matrix from your theoretical model.</p></div>
<div class="cb two-col"><div class="cc oc"><h4>S &mdash; Observed Covariance Matrix</h4><ul>
<li>Calculated directly from your data</li>
<li>No theory involved &mdash; pure numbers</li>
<li>Each cell = covariance between two variables</li>
<li>Diagonal = variances</li>
<li>This is your <strong>&ldquo;reality&rdquo;</strong></li></ul></div>
<div class="cc bc"><h4>&Sigma;(&theta;) &mdash; Implied Covariance Matrix</h4><ul>
<li>Constructed from YOUR specified relationships</li>
<li>Each cell = predicted covariance</li>
<li>Based on paths and loadings you drew</li>
<li>This is your <strong>&ldquo;theory&rdquo;</strong></li></ul></div></div>
<div class="cb bh"><h3>The Fit Logic</h3><ul>
<li>SEM estimates parameters to make &Sigma; as close to S as possible</li>
<li>S = &Sigma; exactly &rarr; perfect fit (but just-identified = untestable)</li>
<li>S &ne; &Sigma; &rarr; differences are residuals; fit indices quantify the mismatch</li></ul></div>
<div class="cb bp">S = what actually happened. &Sigma; = what your theory predicts. If predictions match reality, your theory works.</div>`},

{num:'Slide 42',title:'Illustrating the SEM Process &mdash; Three Matrices',subtitle:'Observed, Implied, and Residual',toc:'Three Matrices',
html:`<div class="cb bg"><p>Walk through the three matrices left to right &mdash; from data to theory to diagnosis.</p></div>
<div class="cb three-col"><div class="cc oc"><h4>1. Observed (S)</h4><ul>
<li>Straight from data</li>
<li>No model involved</li>
<li>Each cell = actual covariance</li>
<li>This is <strong>reality</strong></li></ul></div>
<div class="cc bc"><h4>2. Implied (&Sigma;)</h4><ul>
<li>Generated by your model</li>
<li>Each cell = predicted covariance</li>
<li>Based on paths &amp; loadings</li>
<li>This is <strong>theory</strong></li></ul></div>
<div class="cc oc"><h4>3. Residual (S &minus; &Sigma;)</h4><ul>
<li>Difference: observed &minus; estimated</li>
<li>Small residuals &rarr; good fit</li>
<li>Large residuals &rarr; model fails there</li>
<li>Shows <strong>where</strong> theory breaks</li></ul></div></div>
<div class="cb bh"><h3>Key Takeaway</h3><ul>
<li>&ldquo;Relatively small residuals signal good fit&rdquo;</li>
<li>Most cells near zero &rarr; theory reproduces data</li>
<li>Large cells tell you exactly WHERE to look if model doesn&rsquo;t fit</li></ul></div>
<div class="cb fd"><div class="fx fo">S (Observed)</div><span class="fa">&minus;</span>
<div class="fx fb2">&Sigma; (Implied)</div><span class="fa">=</span>
<div class="fx fw">Residual</div></div>`}
);
