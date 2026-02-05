window.SEM_SLIDES.push(
{num:'Slide 67',title:'Stage 1 Recap &mdash; Exogenous vs Endogenous Constructs',subtitle:'Revisiting construct types in the 6-stages context',toc:'Stage 1 Recap (Exo/Endo)',
html:`<div class="cb bg"><p>&ldquo;We covered this earlier, but here's the reminder in the context of <strong>Stage 1 &mdash; Defining Constructs</strong>.&rdquo;</p></div>
<div class="cb two-col"><div class="cc oc"><h4>Exogenous Constructs</h4><ul>
<li>Latent equivalent of IVs</li>
<li>Only sends arrows, never predicted</li>
<li>Measured by multiple manifest variables (x's)</li></ul></div>
<div class="cc bc"><h4>Endogenous Constructs</h4><ul>
<li>Can serve as <strong>both IV and DV simultaneously</strong> (recall slide 20)</li>
<li>Receives at least one arrow, can also predict others</li>
<li>Measured by multiple manifest variables (y's)</li></ul></div></div>
<div class="cb bh"><h3>Why Repeated Here</h3><ul>
<li>Stage 1 = defining your constructs &mdash; decide which are exogenous and endogenous</li>
<li>This decision comes from <strong>theory</strong>, not from data</li>
<li>Getting this wrong changes the entire model structure</li></ul></div>`},

{num:'Slide 68',title:'Stage 1&ndash;2 Recap &mdash; Defining a Model',subtitle:'What a &ldquo;model&rdquo; means in Stages 1&ndash;2',toc:'Stage 1-2 Recap (Model)',
html:`<div class="cb bg"><p>A <strong>model</strong> = a representation of a theory. A <strong>theory</strong> = a systematic set of relationships providing a consistent explanation of phenomena.</p></div>
<div class="cb two-col"><div class="cc oc"><h4>Measurement Theory</h4><ul>
<li>Correspondence rules between measured variables and latent constructs</li>
<li>Which items &rarr; which construct</li>
<li>Stage 1 = define constructs and their items</li></ul></div>
<div class="cc bc"><h4>Structural Theory</h4><ul>
<li>Correspondence rules linking constructs to each other</li>
<li>Which construct &rarr; which construct</li>
<li>Stage 2 = specify full measurement model</li></ul></div></div>
<div class="cb bp">Both theories must be specified BEFORE collecting data. SEM doesn't discover models &mdash; it tests them.</div>`},

{num:'Slide 69',title:'Stage 2 Recap &mdash; Measurement Model Visual',subtitle:'The CFA diagram in the 6-stages context',toc:'Stage 2 Recap (CFA)',
html:`<div class="cb bg"><p>&ldquo;We saw this earlier. Here it is again as <strong>Stage 2</strong> &mdash; the model you build BEFORE testing any hypotheses.&rdquo;</p></div>
<div class="cb fd"><div class="fx fo">Construct A<br><small>X1, X2, X3</small></div>
<span class="fa" style="font-size:2rem">&#8596;</span>
<div class="fx fb2">Construct B<br><small>X4, X5, X6</small></div>
<span class="fa" style="font-size:2rem">&#8596;</span>
<div class="fx fo">Construct C<br><small>X7, X8, X9</small></div></div>
<div class="cb bh"><h3>Key Features</h3><ul>
<li>Multiple constructs with their indicators</li>
<li>ALL constructs freely correlated (&harr;) &mdash; no directional paths yet</li>
<li>Stage 4 will assess whether this model fits the data</li>
<li>Only after CFA passes do you move to Stage 5 (replace some &harr; with &rarr;)</li></ul></div>`},

{num:'Slide 70',title:'Stage 3 &mdash; Missing Data Options',subtitle:'Check your data quality before estimating',toc:'Missing Data Options',
html:`<div class="cb bg"><p><strong>Decision rule:</strong> Small and random (&lt; 10%, no pattern) &rarr; any treatment is fine. More than 10% and/or nonrandom &rarr; must be remedied.</p></div>
<div class="cb two-col"><div class="cc oc"><h4>1. Listwise Deletion</h4><ul>
<li>Drop any respondent with ANY missing value</li>
<li>Simple but wasteful &mdash; lose entire cases</li>
<li>Can bias if missingness is not MCAR</li></ul></div>
<div class="cc bc"><h4>2. Pairwise Deletion</h4><ul>
<li>Use all available data for each pair</li>
<li>More data retained</li>
<li>But covariance matrix may not be positive definite</li></ul></div></div>
<div class="cb two-col"><div class="cc oc"><h4>3. EM (Expectation-Maximization)</h4><ul>
<li>Imputes missing values, then estimates model</li>
<li>Two-step iterative: E-step &rarr; M-step</li>
<li>Better than deletion but creates artificial data</li></ul></div>
<div class="cc bc"><h4>4. FIML &mdash; <span class="tb">Preferred</span></h4><ul>
<li>Does NOT impute &mdash; uses all available data directly</li>
<li>Handles incomplete cases without fake data</li>
<li>Less biased than EM</li>
<li>Both EM and FIML assume MAR</li></ul></div></div>`},

{num:'Slide 71',title:'Stage 3 &mdash; Sample Size',subtitle:'&ldquo;SEM needs huge samples&rdquo; &mdash; myth vs reality',toc:'Sample Size',
html:`<div class="cb bg"><p>If your sample is large enough to <strong>generalize</strong>, it's probably large enough for SEM.</p></div>
<div class="cb bo"><h3 class="orange">Five Factors That Determine Sample Size</h3>
<ol style="padding-left:20px">
<li><strong>Multivariate normality</strong> &mdash; non-normal data needs larger samples</li>
<li><strong>Estimation technique</strong> &mdash; ML requires less than WLS/ADF</li>
<li><strong>Model complexity</strong> &mdash; more parameters = need more data</li>
<li><strong>Missing data</strong> &mdash; more missingness = need larger original sample</li>
<li><strong>Average error variance</strong> &mdash; weak indicators need more data</li></ol></div>
<div class="cb bh"><h3>Rules of Thumb</h3><ul>
<li>Strong measurement (loadings &gt; .70, 3+ indicators): <strong>~100&ndash;150</strong> can work</li>
<li>Weaker measurement or complex models: <strong>200&ndash;400+</strong></li>
<li>Common guideline: 10&ndash;20 observations per estimated parameter</li></ul></div>
<div class="cb bp">&ldquo;200 is a safe starting point. Strong loadings + simple model = go lower. Complex model + messy data = go higher.&rdquo;</div>`},

{num:'Slide 72',title:'Stage 4 &mdash; Measurement Model Validity (Fit Indices)',subtitle:'Three categories of fit indices',toc:'Fit Indices',
html:`<div class="cb bo"><h3 class="orange">1. Absolute Fit &mdash; &ldquo;How far is my model from the data?&rdquo;</h3><ul>
<li><strong>&chi;&sup2; with df</strong> &mdash; always report. Tests whether S = &Sigma; exactly. Almost always significant with large n</li>
<li><strong>GFI</strong> &mdash; proportion of variance explained. Like R&sup2; for the whole model. Considered outdated</li>
<li><strong>RMSEA</strong> &mdash; &ldquo;badness of fit.&rdquo; Error per df. Want <strong>&lt; 0.06</strong> (good), &lt; 0.08 (acceptable)</li></ul></div>
<div class="cb bb"><h3 class="blue">2. Incremental Fit &mdash; &ldquo;How much better than a null model?&rdquo;</h3><ul>
<li><strong>CFI</strong> &mdash; compares your model to a null model (no relationships)</li>
<li>Shows improvement in fit. Want <strong>&gt; 0.95</strong> (good), &gt; 0.90 (acceptable)</li></ul></div>
<div class="cb bw"><h3>3. Parsimony Fit &mdash; &ldquo;Is the fit worth the complexity?&rdquo;</h3><ul>
<li>Prefer the simpler model that explains equally well (Occam's Razor)</li>
<li><strong>PNFI</strong> &mdash; penalizes complex models. For comparison only, not standalone</li></ul></div>
<div class="cb bh"><h3>SRMR (Standardized Root Mean Square Residual)</h3><ul>
<li>Average discrepancy between observed and predicted correlations</li>
<li>Directly summarizes the residual matrix (slide 42) into one number</li>
<li>Want <strong>&lt; 0.08</strong>. Complements RMSEA: RMSEA penalizes complexity, SRMR measures raw residual size</li></ul></div>
<div class="cb two-col"><div class="cc oc"><h4>Convergent Validity</h4><ul>
<li>Items within the same construct correlate highly</li>
<li><strong>AVE &gt; 0.50</strong>, loadings &gt; 0.70</li>
<li>If fails: items don't measure the construct well enough</li></ul></div>
<div class="cc bc"><h4>Discriminant Validity</h4><ul>
<li>Each construct is distinct from the others</li>
<li><strong>AVE &gt; squared inter-construct correlation</strong> (Fornell-Larcker criterion)</li>
<li>If fails: two constructs too similar &mdash; consider merging</li></ul></div></div>
<div class="cb bp">Always report: &chi;&sup2; with df and p-value, CFI, RMSEA, and SRMR.</div>`},

{num:'Slide 73',title:'Fit Guidelines Table',subtitle:'Key thresholds to know',toc:'Fit Guidelines',
html:`<div class="cb bw"><table style="width:100%;border-collapse:collapse;font-size:.92rem">
<thead><tr style="border-bottom:3px solid var(--o);text-align:left">
<th style="padding:10px">Index</th><th style="padding:10px">Good Fit</th><th style="padding:10px">Acceptable</th><th style="padding:10px">Direction</th></tr></thead>
<tbody>
<tr style="background:var(--op);border-bottom:1px solid var(--g200)"><td style="padding:10px"><strong>&chi;&sup2;/df</strong></td><td style="padding:10px">&lt; 2</td><td style="padding:10px">&lt; 3</td><td style="padding:10px">Lower = better</td></tr>
<tr style="background:var(--bp);border-bottom:1px solid var(--g200)"><td style="padding:10px"><strong>CFI</strong></td><td style="padding:10px">&gt; 0.95</td><td style="padding:10px">&gt; 0.90</td><td style="padding:10px">Higher = better</td></tr>
<tr style="background:var(--op);border-bottom:1px solid var(--g200)"><td style="padding:10px"><strong>RMSEA</strong></td><td style="padding:10px">&lt; 0.06</td><td style="padding:10px">&lt; 0.08</td><td style="padding:10px">Lower = better</td></tr>
<tr style="background:var(--bp)"><td style="padding:10px"><strong>SRMR</strong></td><td style="padding:10px">&lt; 0.08</td><td style="padding:10px">&lt; 0.10</td><td style="padding:10px">Lower = better</td></tr>
</tbody></table></div>
<div class="cb bh"><h3>What to Emphasize</h3><ul>
<li>No single index is definitive &mdash; always report <strong>multiple</strong></li>
<li>&chi;&sup2; is almost always significant with n &gt; 200 &mdash; don't panic</li>
<li>Cutoffs from Hu &amp; Bentler (1999) &mdash; guidelines, not bright lines</li></ul></div>
<div class="cb bo"><h3 class="orange">Common Mistakes</h3><ul>
<li>Don't cherry-pick the one good index and ignore the rest</li>
<li>Don't treat cutoffs as pass/fail</li>
<li>GFI is outdated &mdash; many reviewers no longer accept it</li></ul></div>
<div class="cb bp">&ldquo;Think of these as a dashboard, not a single gauge. If most indicators are green, you're in good shape.&rdquo;</div>`}
);
