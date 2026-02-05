window.SEM_SLIDES.push(
{num:'Slide 23',title:'Depicting Theoretical Relationships in SEM',subtitle:'The SEM visual notation system',toc:'SEM Visual Notation',
html:`<div class="cb bg"><p>We've defined the parts (constructs, indicators, errors). Now let's see how they're drawn. Every element maps to a parameter in the equations.</p></div>
<div class="cb bo"><h3 class="orange">SEM Visual Notation</h3><ul>
<li><strong>Ovals/circles</strong> = latent constructs (unobserved)</li>
<li><strong>Rectangles/squares</strong> = measured variables (observed, the actual data)</li>
<li><strong>Straight single-headed arrow (&#8594;)</strong> = directional relationship (cause/prediction)</li>
<li><strong>Curved double-headed arrow (&#8596;)</strong> = correlation (no direction assumed, just "these two covary")</li>
<li><strong>Small circles with arrows</strong> = error/disturbance terms</li></ul></div>
<div class="cb two-col"><div class="cc oc"><h4>Arrow Meanings</h4><ul>
<li>Construct &#8594; indicator = factor loading ("construct causes response")</li>
<li>Construct &#8594; construct = structural path ("this predicts that")</li></ul></div>
<div class="cc bc"><h4>Why Notation Matters</h4><ul>
<li>It's not just a picture &mdash; every element maps to a parameter</li>
<li>Oval with 4 rectangles = 4 factor loading equations</li>
<li>Arrow between two ovals = 1 structural equation</li></ul></div></div>
<div class="cb bp">The diagram IS the model &mdash; what you draw is what gets estimated.</div>`},

{num:'Slide 24',title:'What Do the Theoretical Models Look Like?',subtitle:'A complete model assembled from the notation',toc:'Full Model Diagram',
html:`<div class="cb bg"><p>Slide 23 showed individual symbols; this slide shows them assembled into a complete model.</p></div>
<div class="cb bo"><h3 class="orange">Walk Through the Diagram</h3><ul>
<li><strong>Left side:</strong> exogenous constructs (ovals) with their indicators (rectangles) &mdash; where the model starts</li>
<li><strong>Middle:</strong> arrows between constructs &mdash; your hypothesized relationships</li>
<li><strong>Right side:</strong> endogenous constructs with their indicators &mdash; the outcomes</li>
<li><strong>Small circles:</strong> error terms on each indicator, disturbance on endogenous constructs</li></ul></div>
<div class="cb two-col"><div class="cc oc"><h4>Measurement Model (outer part)</h4>
<p style="font-size:.9rem">Connections between ovals and their rectangles. This is the CFA portion &mdash; "do my items measure what I claim?"</p></div>
<div class="cc bc"><h4>Structural Model (inner part)</h4>
<p style="font-size:.9rem">Connections between ovals only. This is the hypothesis-testing portion &mdash; "do constructs predict each other?"</p></div></div>
<div class="cb bh"><h3>Key Point</h3><ul>
<li>Every element you see has a corresponding parameter estimated from data</li>
<li>If something isn't drawn, it's assumed to be <strong>zero</strong> &mdash; that's your theory at work</li></ul></div>`},

{num:'Slide 25',title:'Portraying a SEM Model',subtitle:'Section header &mdash; three topics ahead',toc:'Portraying a SEM Model',
html:`<div class="cb bg"><p>"We've seen the big picture of what a model looks like. Now let's break it down piece by piece."</p></div>
<div class="cb three-col"><div class="cc oc" style="text-align:center"><h4>Graphical Portrayal</h4>
<p style="font-size:.88rem">The visual notation in detail</p></div>
<div class="cc bc" style="text-align:center"><h4>Portraying Constructs</h4>
<p style="font-size:.88rem">How latent variables are drawn with their indicators</p></div>
<div style="padding:20px;border-radius:12px;background:linear-gradient(135deg,#FFF7ED,#EFF6FF);border:2px solid var(--g200);text-align:center">
<h4 style="color:var(--g800);font-size:.95rem;font-weight:700;margin-bottom:8px">Representing Relationships</h4>
<p style="font-size:.88rem">How dependence vs correlation are shown</p></div></div>`},

{num:'Slide 26',title:'Graphical Portrayal &mdash; Measures and Constructs (Lambda)',subtitle:'Factor loadings: the connection between constructs and items',toc:'Lambda (Factor Loadings)',
html:`<div class="cb bo"><h3 class="orange">One Construct with Three Indicators</h3><ul>
<li><strong>Oval (C1)</strong> = the latent construct</li>
<li><strong>Rectangles (X1, X2, X3)</strong> = the measured items</li>
<li>Arrows go <strong>FROM C1 TO each X</strong> &mdash; the construct <em>causes</em> the responses (reflective model)</li>
<li>Each arrow = a factor loading, called <strong>lambda (&lambda;)</strong></li></ul></div>
<div class="cb fd"><div class="fx" style="background:var(--o);color:#fff;border-radius:50%;width:90px;height:90px;min-width:auto;display:flex;align-items:center;justify-content:center">C1</div>
<span class="fa">&#8594;</span><div class="fx fw">X1 (&lambda;&#8321;)</div>
<span class="fa">&#8594;</span><div class="fx fw">X2 (&lambda;&#8322;)</div>
<span class="fa">&#8594;</span><div class="fx fw">X3 (&lambda;&#8323;)</div></div>
<div class="cb bb"><h3 class="blue">What is Lambda?</h3><ul>
<li>Lambda = strength of connection between construct and each item</li>
<li><strong>High lambda (0.80+)</strong> = strong indicator of the construct</li>
<li><strong>Low lambda (below 0.40)</strong> = weak indicator &mdash; might need to drop it</li>
<li>Standardized lambda ranges 0 to 1 &mdash; like a correlation between item and construct</li></ul></div>
<div class="cb bh"><h3>Why Arrows Go FROM Construct TO Items</h3><ul>
<li>This is the <strong>reflective model</strong> &mdash; the construct causes the item responses</li>
<li>If your "trust" goes up, ALL items about trust should go up together</li>
<li>The construct is the common cause; the items are the effects</li>
<li>This is the default assumption in CFA/SEM</li></ul></div>`},

{num:'Slide 27',title:'Portraying Structural Relationships &mdash; Two Types of Arrows',subtitle:'Dependence vs Correlation between constructs',toc:'Two Types of Arrows',
html:`<div class="cb two-col"><div class="cc oc"><h4>Dependence &mdash; Straight Arrow (&#8594;)</h4><ul>
<li>"I theorize that A predicts/causes B"</li>
<li>Directional &mdash; A influences B, not the other way</li>
<li>Estimated parameter = <strong>path coefficient</strong> (like regression beta)</li>
<li>Example: Trust &#8594; Purchase Intention</li></ul>
<p style="margin-top:8px;font-size:.85rem;color:var(--od);font-weight:600">Causal claim &mdash; testable, risky</p></div>
<div class="cc bc"><h4>Correlational &mdash; Curved Arrow (&#8596;)</h4><ul>
<li>"These two are related, but I'm NOT claiming a direction"</li>
<li>No cause implied &mdash; just covariance</li>
<li>Used between exogenous constructs</li>
<li>Example: Trust &#8596; Satisfaction</li></ul>
<p style="margin-top:8px;font-size:.85rem;color:var(--bd);font-weight:600">Just acknowledging relationship &mdash; safe</p></div></div>
<div class="cb bh"><h3>The Full SEM Model Combines Both</h3><ul>
<li><strong>Measurement part:</strong> construct &#8594; indicators (lambda, from slide 26)</li>
<li><strong>Structural part:</strong> construct &#8594; construct (dependence) + construct &#8596; construct (correlation)</li>
<li>The model = dependence + correlational relationships layered together</li></ul></div>
<div class="cb bp">Straight arrow = causal claim. Curved arrow = acknowledging a relationship. Choosing between them IS your theory.</div>`},

{num:'Slide 28',title:'Four Common Types of Theoretical Relationships',subtitle:'A 2&times;2 framework for all SEM connections',toc:'Four Relationship Types',
html:`<div class="cb two-col"><div class="cc oc"><h4>1. Construct &#8594; Single Item</h4>
<p style="font-size:.88rem">Simplest case &mdash; but rarely used because one item = no error separation.</p>
<span class="tag tag-o">Measurement</span></div>
<div class="cc bc"><h4>2. Construct &#8594; Multiple Items</h4>
<p style="font-size:.88rem">Standard measurement model setup. "Trust" measured by 3 items &mdash; this is what CFA tests.</p>
<span class="tag tag-b">Measurement</span></div></div>
<div class="cb two-col"><div class="cc oc"><h4>3. Construct &#8596; Construct</h4>
<p style="font-size:.88rem">Correlational, no direction. Used in CFA: all constructs freely correlate.</p>
<span class="tag tag-o">Structural</span></div>
<div class="cc bc"><h4>4. Construct &#8594; Construct</h4>
<p style="font-size:.88rem">Directional. This is where hypotheses are tested. Trust &#8594; Purchase Intention.</p>
<span class="tag tag-b">Structural</span></div></div>
<div class="cb bh"><h3>Tie It Together</h3><ul>
<li>Types 1&ndash;2 = <span class="to">measurement model</span> (how constructs connect to items)</li>
<li>Types 3&ndash;4 = <span class="tb">structural model</span> (how constructs connect to each other)</li>
<li>The difference between 3 and 4 is the difference between CFA and full SEM: CFA uses &#8596;, SEM replaces some with &#8594;</li></ul></div>`}
);
