const MODULE6_POPULATION_VARIANCE_NOTES = {
    populationVariance: `
        <div class="module-container">
            <h2 class="module-header">Chapter 11: Inferences About Population Variances</h2>
            
            <div class="module-intro" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px;">
                <p style="font-size: 1.1em;">In the preceding four chapters we examined methods of statistical inference involving population means and population proportions. In this chapter we expand the discussion to situations involving inferences about population variances.</p>
                <p style="margin-top: 15px;"><strong>Example Application:</strong> Consider the production process of filling containers with a liquid detergent product. The filling mechanism is adjusted so the mean filling weight is 16 ounces per container. Although a mean of 16 ounces is desired, <em>the variance of the filling weights is also critical</em>.</p>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p>⚠️ <strong>In many manufacturing applications, controlling the process variance is extremely important in maintaining quality.</strong></p>
                </div>
            </div>

            <h3 style="color: #3498db; margin-top: 30px;">11.1 Inferences About a Population Variance</h3>
            
            <div class="concept-box" style="background: #f8f9fa; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
                <h4>📊 Point Estimator of Population Variance</h4>
                <p>The sample variance is the point estimator of the population variance σ²:</p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: center;">
                    <p class="formula" style="font-size: 1.3em;">s² = Σ(xᵢ - x̄)² / (n - 1)</p>
                    <p style="color: #666; font-style: italic;">(Formula 11.1)</p>
                </div>
            </div>

            <div class="concept-box" style="background: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; margin: 20px 0;">
                <h4>📈 Sampling Distribution of (n-1)s²/σ²</h4>
                <p><strong>Key Theorem:</strong> Whenever a simple random sample of size n is selected from a normal population, the sampling distribution of</p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: center;">
                    <p class="formula" style="font-size: 1.3em;">(n - 1)s² / σ²</p>
                    <p style="color: #666; font-style: italic;">(Formula 11.2)</p>
                </div>
                <p>has a <strong>chi-square distribution</strong> with n - 1 degrees of freedom.</p>
                <div style="background: #ffebcc; padding: 10px; margin-top: 10px; border-radius: 5px;">
                    <p>⚠️ <strong>Important:</strong> The chi-square distribution is based on sampling from a normal population.</p>
                </div>
            </div>

            <div class="chi-square-shapes" style="background: #f0f0f0; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h4>📊 Figure 11.1: Chi-Square Distribution Shapes</h4>
                <p>The chi-square distribution changes shape based on degrees of freedom:</p>
                <ul>
                    <li><strong>df = 2:</strong> Highly right-skewed, exponential-like curve</li>
                    <li><strong>df = 5:</strong> Still right-skewed but less extreme</li>
                    <li><strong>df = 10:</strong> More bell-shaped but still asymmetric</li>
                    <li>As df increases, the distribution becomes more symmetric and approaches normality</li>
                </ul>
            </div>

            <h3 style="color: #e74c3c; margin-top: 30px;">Interval Estimation</h3>
            
            <div class="derivation-box" style="background: #fff8e1; padding: 25px; border-left: 4px solid #ffc107; margin: 20px 0;">
                <h4>📐 Derivation of Confidence Interval</h4>
                <p>Starting with the chi-square distribution property, we know that for 95% confidence:</p>
                
                <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                    <p style="text-align: center; font-size: 1.1em;">χ²<sub>0.975</sub> ≤ (n-1)s²/σ² ≤ χ²<sub>0.025</sub></p>
                    <p style="text-align: center; color: #666; font-style: italic;">(Expression 11.3)</p>
                </div>
                
                <p><strong>Step 1:</strong> Working with the left inequality:</p>
                <p style="margin-left: 20px;">χ²<sub>0.975</sub> ≤ (n-1)s²/σ²</p>
                <p style="margin-left: 20px;">→ σ² ≤ (n-1)s²/χ²<sub>0.975</sub> ... (11.4)</p>
                
                <p><strong>Step 2:</strong> Working with the right inequality:</p>
                <p style="margin-left: 20px;">(n-1)s²/σ² ≤ χ²<sub>0.025</sub></p>
                <p style="margin-left: 20px;">→ σ² ≥ (n-1)s²/χ²<sub>0.025</sub> ... (11.5)</p>
                
                <p><strong>Step 3:</strong> Combining results:</p>
            </div>
            
            <div class="concept-box" style="background: #e8f5e9; padding: 20px; border-left: 4px solid #4caf50; margin: 20px 0;">
                <h4>🎯 Confidence Interval for Population Variance</h4>
                <div style="background: white; padding: 20px; border-radius: 5px; margin: 15px 0;">
                    <p class="formula" style="font-size: 1.3em; text-align: center;">
                        <span style="display: inline-block;">
                            (n - 1)s² / χ²<sub>α/2</sub> ≤ σ² ≤ (n - 1)s² / χ²<sub>(1-α/2)</sub>
                        </span>
                    </p>
                    <p style="color: #666; font-style: italic; text-align: center;">(Formula 11.7)</p>
                </div>
                <p>where the χ² values are based on a chi-square distribution with n - 1 degrees of freedom and (1 - α) is the confidence coefficient.</p>
                
                <div style="background: #e1f5fe; padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p>💡 <strong>Note:</strong> For confidence interval of population standard deviation σ, take the square root of both limits.</p>
                </div>
            </div>

            <div class="example-box" style="background: #f0f0f0; padding: 20px; border-radius: 10px; margin: 30px 0;">
                <h4>💡 Example: Container Filling Process</h4>
                <p><strong>Given:</strong> A sample of 20 containers with sample variance s² = 0.0025</p>
                <p><strong>Find:</strong> 95% confidence interval for the population variance</p>
                
                <div style="background: white; padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p><strong>Solution:</strong></p>
                    <ul style="list-style: none; padding-left: 0;">
                        <li>✓ Degrees of freedom: df = n - 1 = 19</li>
                        <li>✓ For 95% confidence: α = 0.05</li>
                        <li>✓ χ²<sub>0.975</sub> = 8.907 and χ²<sub>0.025</sub> = 32.852</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>Calculation:</strong></p>
                    <p style="text-align: center; font-size: 1.1em;">
                        (19)(0.0025) / 32.852 ≤ σ² ≤ (19)(0.0025) / 8.907
                    </p>
                    <p style="text-align: center; font-size: 1.2em; color: #2ecc71; font-weight: bold;">
                        0.0014 ≤ σ² ≤ 0.0053
                    </p>
                    <p style="margin-top: 15px;"><strong>For standard deviation:</strong></p>
                    <p style="text-align: center; font-size: 1.2em; color: #3498db; font-weight: bold;">
                        0.0380 ≤ σ ≤ 0.0730
                    </p>
                </div>
            </div>

            <h3 style="color: #9b59b6; margin-top: 30px;">Hypothesis Testing</h3>
            
            <div class="concept-box" style="background: #f3e5f5; padding: 20px; border-left: 4px solid #9b59b6; margin: 20px 0;">
                <h4>🔬 Three Forms of Hypothesis Tests</h4>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px;">
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6;">Lower Tail Test</h5>
                        <p>H₀: σ² ≥ σ₀²<br>Hₐ: σ² < σ₀²</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6;">Upper Tail Test</h5>
                        <p>H₀: σ² ≤ σ₀²<br>Hₐ: σ² > σ₀²</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6;">Two-Tailed Test</h5>
                        <p>H₀: σ² = σ₀²<br>Hₐ: σ² ≠ σ₀²</p>
                    </div>
                </div>
                
                <div style="background: white; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <h5>Test Statistic:</h5>
                    <p class="formula" style="font-size: 1.3em; text-align: center;">
                        χ² = (n - 1)s² / σ₀²
                    </p>
                    <p style="color: #666; font-style: italic; text-align: center;">(Formula 11.8)</p>
                    <p style="text-align: center;">where χ² has a chi-square distribution with n - 1 degrees of freedom</p>
                </div>
            </div>

            <div class="example-box" style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 30px 0;">
                <h4>🚌 Example: St. Louis Metro Bus Company</h4>
                <p><strong>Scenario:</strong> The company wants arrival times at bus stops to have low variability. The standard specifies an arrival time variance of 4 or less (measured in minutes).</p>
                
                <div style="background: white; padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p><strong>Hypothesis Test:</strong></p>
                    <p>H₀: σ² ≤ 4<br>Hₐ: σ² > 4</p>
                    <p>Level of significance: α = 0.05</p>
                    
                    <p style="margin-top: 15px;"><strong>Sample Data:</strong></p>
                    <ul>
                        <li>Sample size: n = 24</li>
                        <li>Sample variance: s² = 4.9</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Test Statistic:</strong></p>
                    <p style="text-align: center; font-size: 1.1em;">
                        χ² = (24 - 1)(4.9) / 4 = 28.18
                    </p>
                    
                    <p style="margin-top: 15px;"><strong>Critical Value:</strong> χ²<sub>0.05</sub> = 35.172 (with 23 df)</p>
                    
                    <p style="margin-top: 15px;"><strong>Decision:</strong> Since χ² = 28.18 < 35.172, we <span style="color: #e74c3c; font-weight: bold;">cannot reject H₀</span></p>
                    <p><strong>Conclusion:</strong> The sample does not support the conclusion that the population variance of arrival times is excessive.</p>
                </div>
            </div>

            <div class="chi-square-table" style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📊 Table 11.1: Chi-Square Distribution Critical Values</h4>
                <p style="margin-bottom: 15px;">Selected values from the chi-square distribution table</p>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; background: white; border-collapse: collapse; font-size: 0.9em;">
                        <thead>
                            <tr style="background: #3498db; color: white;">
                                <th rowspan="2" style="padding: 10px; border: 1px solid #ddd;">df</th>
                                <th colspan="8" style="padding: 10px; border: 1px solid #ddd;">Area in Upper Tail</th>
                            </tr>
                            <tr style="background: #3498db; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">.99</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.975</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.95</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.90</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.10</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.05</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.025</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.01</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">1</td><td style="padding: 5px; border: 1px solid #ddd;">.000</td><td style="padding: 5px; border: 1px solid #ddd;">.001</td><td style="padding: 5px; border: 1px solid #ddd;">.004</td><td style="padding: 5px; border: 1px solid #ddd;">.016</td><td style="padding: 5px; border: 1px solid #ddd;">2.706</td><td style="padding: 5px; border: 1px solid #ddd;">3.841</td><td style="padding: 5px; border: 1px solid #ddd;">5.024</td><td style="padding: 5px; border: 1px solid #ddd;">6.635</td></tr>
                            <tr style="background: #f0f0f0;"><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">5</td><td style="padding: 5px; border: 1px solid #ddd;">.554</td><td style="padding: 5px; border: 1px solid #ddd;">.831</td><td style="padding: 5px; border: 1px solid #ddd;">1.145</td><td style="padding: 5px; border: 1px solid #ddd;">1.610</td><td style="padding: 5px; border: 1px solid #ddd;">9.236</td><td style="padding: 5px; border: 1px solid #ddd;">11.070</td><td style="padding: 5px; border: 1px solid #ddd;">12.832</td><td style="padding: 5px; border: 1px solid #ddd;">15.086</td></tr>
                            <tr><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">10</td><td style="padding: 5px; border: 1px solid #ddd;">2.558</td><td style="padding: 5px; border: 1px solid #ddd;">3.247</td><td style="padding: 5px; border: 1px solid #ddd;">3.940</td><td style="padding: 5px; border: 1px solid #ddd;">4.865</td><td style="padding: 5px; border: 1px solid #ddd;">15.987</td><td style="padding: 5px; border: 1px solid #ddd;">18.307</td><td style="padding: 5px; border: 1px solid #ddd;">20.483</td><td style="padding: 5px; border: 1px solid #ddd;">23.209</td></tr>
                            <tr style="background: #f0f0f0;"><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">15</td><td style="padding: 5px; border: 1px solid #ddd;">5.229</td><td style="padding: 5px; border: 1px solid #ddd;">6.262</td><td style="padding: 5px; border: 1px solid #ddd;">7.261</td><td style="padding: 5px; border: 1px solid #ddd;">8.547</td><td style="padding: 5px; border: 1px solid #ddd;">22.307</td><td style="padding: 5px; border: 1px solid #ddd;">24.996</td><td style="padding: 5px; border: 1px solid #ddd;">27.488</td><td style="padding: 5px; border: 1px solid #ddd;">30.578</td></tr>
                            <tr style="background: #e3f2fd;"><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">19</td><td style="padding: 5px; border: 1px solid #ddd;">7.633</td><td style="padding: 5px; border: 1px solid #ddd; background: #ffeb3b;">8.907</td><td style="padding: 5px; border: 1px solid #ddd;">10.117</td><td style="padding: 5px; border: 1px solid #ddd;">11.651</td><td style="padding: 5px; border: 1px solid #ddd;">27.204</td><td style="padding: 5px; border: 1px solid #ddd;">30.144</td><td style="padding: 5px; border: 1px solid #ddd; background: #ffeb3b;">32.852</td><td style="padding: 5px; border: 1px solid #ddd;">36.191</td></tr>
                            <tr><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">20</td><td style="padding: 5px; border: 1px solid #ddd;">8.260</td><td style="padding: 5px; border: 1px solid #ddd;">9.591</td><td style="padding: 5px; border: 1px solid #ddd;">10.851</td><td style="padding: 5px; border: 1px solid #ddd;">12.443</td><td style="padding: 5px; border: 1px solid #ddd;">28.412</td><td style="padding: 5px; border: 1px solid #ddd;">31.410</td><td style="padding: 5px; border: 1px solid #ddd;">34.170</td><td style="padding: 5px; border: 1px solid #ddd;">37.566</td></tr>
                            <tr style="background: #e3f2fd;"><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">23</td><td style="padding: 5px; border: 1px solid #ddd;">10.196</td><td style="padding: 5px; border: 1px solid #ddd;">11.689</td><td style="padding: 5px; border: 1px solid #ddd;">13.091</td><td style="padding: 5px; border: 1px solid #ddd;">14.848</td><td style="padding: 5px; border: 1px solid #ddd;">32.007</td><td style="padding: 5px; border: 1px solid #ddd; background: #ffeb3b;">35.172</td><td style="padding: 5px; border: 1px solid #ddd;">38.076</td><td style="padding: 5px; border: 1px solid #ddd;">41.638</td></tr>
                            <tr><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">25</td><td style="padding: 5px; border: 1px solid #ddd;">11.524</td><td style="padding: 5px; border: 1px solid #ddd;">13.120</td><td style="padding: 5px; border: 1px solid #ddd;">14.611</td><td style="padding: 5px; border: 1px solid #ddd;">16.473</td><td style="padding: 5px; border: 1px solid #ddd;">34.382</td><td style="padding: 5px; border: 1px solid #ddd;">37.652</td><td style="padding: 5px; border: 1px solid #ddd;">40.646</td><td style="padding: 5px; border: 1px solid #ddd;">44.314</td></tr>
                            <tr style="background: #e3f2fd;"><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">29</td><td style="padding: 5px; border: 1px solid #ddd;">14.256</td><td style="padding: 5px; border: 1px solid #ddd;">16.047</td><td style="padding: 5px; border: 1px solid #ddd;">17.708</td><td style="padding: 5px; border: 1px solid #ddd;">19.768</td><td style="padding: 5px; border: 1px solid #ddd;">39.087</td><td style="padding: 5px; border: 1px solid #ddd;">42.557</td><td style="padding: 5px; border: 1px solid #ddd; background: #ffeb3b;">45.722</td><td style="padding: 5px; border: 1px solid #ddd;">49.588</td></tr>
                            <tr><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">30</td><td style="padding: 5px; border: 1px solid #ddd;">14.953</td><td style="padding: 5px; border: 1px solid #ddd;">16.791</td><td style="padding: 5px; border: 1px solid #ddd;">18.493</td><td style="padding: 5px; border: 1px solid #ddd;">20.599</td><td style="padding: 5px; border: 1px solid #ddd;">40.256</td><td style="padding: 5px; border: 1px solid #ddd;">43.773</td><td style="padding: 5px; border: 1px solid #ddd;">46.979</td><td style="padding: 5px; border: 1px solid #ddd;">50.892</td></tr>
                            <tr style="background: #f0f0f0;"><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">40</td><td style="padding: 5px; border: 1px solid #ddd;">22.164</td><td style="padding: 5px; border: 1px solid #ddd;">24.433</td><td style="padding: 5px; border: 1px solid #ddd;">26.509</td><td style="padding: 5px; border: 1px solid #ddd;">29.051</td><td style="padding: 5px; border: 1px solid #ddd;">51.805</td><td style="padding: 5px; border: 1px solid #ddd;">55.758</td><td style="padding: 5px; border: 1px solid #ddd;">59.342</td><td style="padding: 5px; border: 1px solid #ddd;">63.691</td></tr>
                            <tr><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">60</td><td style="padding: 5px; border: 1px solid #ddd;">37.485</td><td style="padding: 5px; border: 1px solid #ddd;">40.482</td><td style="padding: 5px; border: 1px solid #ddd;">43.188</td><td style="padding: 5px; border: 1px solid #ddd;">46.459</td><td style="padding: 5px; border: 1px solid #ddd;">74.397</td><td style="padding: 5px; border: 1px solid #ddd;">79.082</td><td style="padding: 5px; border: 1px solid #ddd;">83.298</td><td style="padding: 5px; border: 1px solid #ddd;">88.379</td></tr>
                            <tr style="background: #f0f0f0;"><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">80</td><td style="padding: 5px; border: 1px solid #ddd;">53.540</td><td style="padding: 5px; border: 1px solid #ddd;">57.153</td><td style="padding: 5px; border: 1px solid #ddd;">60.391</td><td style="padding: 5px; border: 1px solid #ddd;">64.278</td><td style="padding: 5px; border: 1px solid #ddd;">96.578</td><td style="padding: 5px; border: 1px solid #ddd;">101.879</td><td style="padding: 5px; border: 1px solid #ddd;">106.629</td><td style="padding: 5px; border: 1px solid #ddd;">112.329</td></tr>
                            <tr><td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">100</td><td style="padding: 5px; border: 1px solid #ddd;">70.065</td><td style="padding: 5px; border: 1px solid #ddd;">74.222</td><td style="padding: 5px; border: 1px solid #ddd;">77.929</td><td style="padding: 5px; border: 1px solid #ddd;">82.358</td><td style="padding: 5px; border: 1px solid #ddd;">118.498</td><td style="padding: 5px; border: 1px solid #ddd;">124.342</td><td style="padding: 5px; border: 1px solid #ddd;">129.561</td><td style="padding: 5px; border: 1px solid #ddd;">135.807</td></tr>
                        </tbody>
                    </table>
                </div>
                <p style="margin-top: 10px; font-size: 0.9em; color: #666;">* Yellow highlights show values used in examples. A more extensive table is provided as Table 3 of Appendix B.</p>
            </div>

            <div class="example-box" style="background: #fce4ec; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>🏫 Example: Bureau of Motor Vehicles (Two-Tailed Test)</h4>
                <p><strong>Scenario:</strong> Historically, driver's license test scores have variance σ² = 100. A new exam has been developed.</p>
                
                <div style="background: white; padding: 20px; margin-top: 15px; border-radius: 5px;">
                    <p><strong>Hypothesis Test:</strong></p>
                    <p>H₀: σ² = 100<br>Hₐ: σ² ≠ 100</p>
                    <p>Level of significance: α = 0.05</p>
                    
                    <p style="margin-top: 15px;"><strong>Sample Data:</strong></p>
                    <ul>
                        <li>Sample size: n = 30</li>
                        <li>Sample variance: s² = 162</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Test Statistic:</strong></p>
                    <p style="text-align: center; font-size: 1.2em;">χ² = (30 - 1)(162) / 100 = 46.98</p>
                    
                    <p style="margin-top: 15px;"><strong>Critical Values (df = 29):</strong></p>
                    <ul>
                        <li>Lower: χ²<sub>0.975</sub> = 16.047</li>
                        <li>Upper: χ²<sub>0.025</sub> = 45.722</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Decision:</strong> Since χ² = 46.98 > 45.722, <span style="color: #e74c3c; font-weight: bold;">reject H₀</span></p>
                    <p><strong>Conclusion:</strong> The new exam has a significantly different variance from the historical level.</p>
                    <p style="color: #666; font-style: italic;">p-value = 0.0374 < α = 0.05</p>
                </div>
            </div>

            <div class="hypothesis-summary" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📋 Table 11.2: Summary of Hypothesis Tests About Population Variance</h4>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px;">
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6; text-align: center;">Lower Tail Test</h5>
                        <p style="font-size: 0.9em;"><strong>Hypotheses:</strong><br>
                        H₀: σ² ≥ σ₀²<br>
                        Hₐ: σ² < σ₀²</p>
                        <p style="font-size: 0.9em;"><strong>Rejection Rule:</strong><br>
                        Reject if χ² < χ²<sub>(1-α)</sub></p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6; text-align: center;">Upper Tail Test</h5>
                        <p style="font-size: 0.9em;"><strong>Hypotheses:</strong><br>
                        H₀: σ² ≤ σ₀²<br>
                        Hₐ: σ² > σ₀²</p>
                        <p style="font-size: 0.9em;"><strong>Rejection Rule:</strong><br>
                        Reject if χ² > χ²<sub>α</sub></p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6; text-align: center;">Two-Tailed Test</h5>
                        <p style="font-size: 0.9em;"><strong>Hypotheses:</strong><br>
                        H₀: σ² = σ₀²<br>
                        Hₐ: σ² ≠ σ₀²</p>
                        <p style="font-size: 0.9em;"><strong>Rejection Rule:</strong><br>
                        Reject if χ² < χ²<sub>(1-α/2)</sub><br>
                        or χ² > χ²<sub>α/2</sub></p>
                    </div>
                </div>
                <div style="background: white; padding: 15px; margin-top: 15px; border-radius: 5px; text-align: center;">
                    <p><strong>Test Statistic for all tests:</strong></p>
                    <p style="font-size: 1.2em;">χ² = (n - 1)s² / σ₀²</p>
                </div>
            </div>

            <div class="summary-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin: 30px 0;">
                <h4>📚 Summary of Key Points</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li>✅ Sample variance s² is the point estimator of σ²</li>
                    <li>✅ (n-1)s²/σ² follows a chi-square distribution with n-1 df</li>
                    <li>✅ Confidence intervals use chi-square critical values</li>
                    <li>✅ Hypothesis tests use χ² = (n-1)s²/σ₀² as test statistic</li>
                    <li>✅ Upper tail tests are most common in quality control</li>
                    <li>✅ Chi-square distribution is right-skewed and always positive</li>
                </ul>
            </div>
        </div>
    `
};

const MODULE6_TWO_POPULATION_VARIANCES_NOTES = {
    twoPopulationVariances: `
        <div class="module-container">
            <h2 class="module-header">Inferences About Two Population Variances</h2>
            <div class="module-intro">
                <p>Here we compare the variances of two populations using the F distribution.</p>
            </div>

            <div class="concept-box">
                <h4>Sampling Distribution</h4>
                <p>When independent random samples are taken from two normal populations with equal variances, the sampling distribution of the ratio of the two sample variances (s₁²/s₂²) follows an F distribution.</p>
            </div>

            <div class="case-study" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; margin: 30px 0;">
                <h3 style="color: white; margin-bottom: 20px;">📚 Case Study: Air Force Training Program</h3>
                
                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h4>Background</h4>
                    <p>An Air Force introductory course in electronics uses a personalized system of instruction where each student:</p>
                    <ul>
                        <li>Views a videotaped lecture</li>
                        <li>Works independently with a programmed instruction text</li>
                        <li>Completes training and passes a test at their own pace</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>Problem:</strong> Students complete at varying paces - fast students must wait for slow students before the group can proceed together.</p>
                </div>

                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h4>Proposed Alternative: Computer-Assisted Instruction</h4>
                    <ul>
                        <li>All students view the same videotaped lecture</li>
                        <li>Each student is assigned to a computer terminal</li>
                        <li>Computer guides students independently through self-training</li>
                    </ul>
                </div>

                <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 10px;">
                    <h4>Study Design</h4>
                    <p><strong>Sample Size:</strong> 122 students randomly assigned</p>
                    <ul>
                        <li>61 students → Current programmed-text method</li>
                        <li>61 students → Proposed computer-assisted method</li>
                    </ul>
                    <p><strong>Measurement:</strong> Course completion time in hours</p>
                </div>
            </div>

            <div class="data-section" style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 20px 0;">
                <h4 style="color: #3498db;">📊 Course Completion Times (hours)</h4>
                
                <div style="margin-top: 20px;">
                    <h5 style="color: #e74c3c;">Current Training Method (Programmed Text)</h5>
                    <div style="background: white; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 0.9em; overflow-x: auto;">
                        76  76  77  74  76  74  74  77  72  78  73<br>
                        78  75  80  79  72  69  79  72  70  70  81<br>
                        76  78  72  82  72  73  71  70  77  78  73<br>
                        79  82  65  77  79  73  76  81  69  75  75<br>
                        77  79  76  78  76  76  73  77  84  74  74<br>
                        69  79  66  70  74  72
                    </div>
                </div>

                <div style="margin-top: 20px;">
                    <h5 style="color: #27ae60;">Proposed Computer-Assisted Method</h5>
                    <div style="background: white; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 0.9em; overflow-x: auto;">
                        74  75  77  78  74  80  73  73  78  76  76<br>
                        74  77  69  76  75  72  75  72  76  72  77<br>
                        73  77  69  77  75  76  74  77  75  78  72<br>
                        77  78  78  76  75  76  76  75  76  80  77<br>
                        76  75  73  77  77  77  79  75  75  72  82<br>
                        76  76  74  72  78  71
                    </div>
                </div>
            </div>

            <div class="analysis-section" style="background: #fff3cd; padding: 25px; border-left: 4px solid #ffc107; margin: 30px 0;">
                <h4>📈 Statistical Analysis Tasks</h4>
                
                <ol style="line-height: 2;">
                    <li><strong>Descriptive Statistics:</strong>
                        <ul>
                            <li>Calculate mean, median, standard deviation for each method</li>
                            <li>Compare similarities and differences</li>
                        </ul>
                    </li>
                    
                    <li><strong>Test for Difference in Means:</strong>
                        <ul>
                            <li>Use two-sample t-test (Chapter 10 methods)</li>
                            <li>H₀: μ₁ = μ₂ vs. Hₐ: μ₁ ≠ μ₂</li>
                        </ul>
                    </li>
                    
                    <li><strong>Test for Equality of Variances:</strong>
                        <ul>
                            <li>Calculate s₁² and s₂² for each method</li>
                            <li>Conduct F-test: H₀: σ₁² = σ₂² vs. Hₐ: σ₁² ≠ σ₂²</li>
                            <li>Test statistic: F = s₁²/s₂²</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div class="solution-guide" style="background: #e8f5e9; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>💡 Solution Approach</h4>
                
                <div style="background: white; padding: 20px; border-radius: 5px; margin-top: 15px;">
                    <h5>Step 1: Descriptive Statistics</h5>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px;">
                            <h6 style="color: #e74c3c;">Current Method</h6>
                            <ul style="list-style: none; padding: 0;">
                                <li>Mean: x̄₁ ≈ 75.06 hours</li>
                                <li>Std Dev: s₁ ≈ 4.16 hours</li>
                                <li>Variance: s₁² ≈ 17.31</li>
                            </ul>
                        </div>
                        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px;">
                            <h6 style="color: #27ae60;">Computer-Assisted</h6>
                            <ul style="list-style: none; padding: 0;">
                                <li>Mean: x̄₂ ≈ 75.42 hours</li>
                                <li>Std Dev: s₂ ≈ 2.52 hours</li>
                                <li>Variance: s₂² ≈ 6.35</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style="background: white; padding: 20px; border-radius: 5px; margin-top: 15px;">
                    <h5>Step 2: F-Test for Equality of Variances</h5>
                    <p><strong>Hypotheses:</strong></p>
                    <p>H₀: σ₁² = σ₂² (variances are equal)<br>
                    Hₐ: σ₁² ≠ σ₂² (variances are not equal)</p>
                    
                    <p style="margin-top: 15px;"><strong>Test Statistic:</strong></p>
                    <p style="text-align: center; font-size: 1.2em;">
                        F = s₁²/s₂² = 17.31/6.35 ≈ 2.73
                    </p>
                    
                    <p style="margin-top: 15px;"><strong>Critical Values:</strong></p>
                    <p>With df₁ = df₂ = 60 and α = 0.05:</p>
                    <p>F₀.₀₂₅ ≈ 0.61 and F₀.₉₇₅ ≈ 1.64</p>
                    
                    <p style="margin-top: 15px;"><strong>Decision:</strong></p>
                    <p style="color: #e74c3c; font-weight: bold;">Since F = 2.73 > 1.64, reject H₀</p>
                </div>

                <div style="background: white; padding: 20px; border-radius: 5px; margin-top: 15px;">
                    <h5>Step 3: Interpretation</h5>
                    <ul>
                        <li>✅ The computer-assisted method has significantly <strong>lower variance</strong></li>
                        <li>✅ More <strong>consistent completion times</strong> with computer-assisted training</li>
                        <li>✅ Reduces the problem of fast students waiting for slow students</li>
                    </ul>
                </div>
            </div>

            <div class="recommendations" style="background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%); color: white; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📋 Managerial Recommendations</h4>
                
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <h5>1. Primary Finding</h5>
                    <p>The computer-assisted method provides more uniform training times, addressing the core problem of varying completion paces.</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <h5>2. Recommendation</h5>
                    <p>Implement the computer-assisted training method to:</p>
                    <ul>
                        <li>Reduce waiting time for fast learners</li>
                        <li>Provide more predictable training schedules</li>
                        <li>Improve overall training efficiency</li>
                    </ul>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <h5>3. Additional Considerations</h5>
                    <ul>
                        <li>Conduct cost-benefit analysis of computer system implementation</li>
                        <li>Survey student satisfaction with both methods</li>
                        <li>Assess long-term retention of material</li>
                        <li>Consider pilot program before full implementation</li>
                    </ul>
                </div>
            </div>

            <div class="key-insights" style="background: #f3e5f5; padding: 20px; border-left: 4px solid #9b59b6; margin: 20px 0;">
                <h4>🔑 Key Statistical Insights</h4>
                <ul>
                    <li><strong>Variance Ratio:</strong> The current method has 2.73 times more variance than computer-assisted</li>
                    <li><strong>Practical Impact:</strong> Reducing variance by 63% means more predictable class completion</li>
                    <li><strong>Statistical Significance:</strong> The difference in variances is statistically significant (p < 0.05)</li>
                    <li><strong>Business Value:</strong> More consistent training times enable better resource planning</li>
                </ul>
            </div>

            <h3 style="color: #e74c3c; margin-top: 30px;">11.2 Theoretical Foundation</h3>
            
            <div class="concept-box" style="background: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; margin: 20px 0;">
                <h4>📊 Sampling Distribution for Variance Ratio</h4>
                <p>When independent simple random samples of sizes n₁ and n₂ are selected from two normal populations with equal variances (σ₁² = σ₂²), the sampling distribution of</p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: center;">
                    <p class="formula" style="font-size: 1.3em;">F = s₁² / s₂²</p>
                    <p style="color: #666; font-style: italic;">(Formula 11.9)</p>
                </div>
                <p>has an <strong>F distribution</strong> with:</p>
                <ul>
                    <li>Numerator degrees of freedom: n₁ - 1</li>
                    <li>Denominator degrees of freedom: n₂ - 1</li>
                </ul>
                <div style="background: #ffebcc; padding: 10px; margin-top: 10px; border-radius: 5px;">
                    <p>⚠️ <strong>Important:</strong> The F distribution is based on sampling from two normal populations.</p>
                </div>
            </div>

            <div class="concept-box" style="background: #e8f5e9; padding: 20px; border-left: 4px solid #4caf50; margin: 20px 0;">
                <h4>📈 Properties of the F Distribution</h4>
                <ul>
                    <li>✓ Not symmetric (right-skewed)</li>
                    <li>✓ F values are always positive (cannot be negative)</li>
                    <li>✓ Shape depends on both numerator and denominator degrees of freedom</li>
                    <li>✓ Different F distribution for each combination of degrees of freedom</li>
                </ul>
            </div>

            <div class="hypothesis-testing" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color: #9b59b6;">Hypothesis Testing for Two Population Variances</h3>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6;">Two-Tailed Test</h5>
                        <p>H₀: σ₁² = σ₂²<br>Hₐ: σ₁² ≠ σ₂²</p>
                        <p style="margin-top: 10px;"><strong>Test Statistic:</strong><br>F = s₁²/s₂²</p>
                        <p style="color: #666; font-size: 0.9em;">(Always put larger variance in numerator)</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 5px;">
                        <h5 style="color: #9b59b6;">Upper Tail Test</h5>
                        <p>H₀: σ₁² ≤ σ₂²<br>Hₐ: σ₁² > σ₂²</p>
                        <p style="margin-top: 10px;"><strong>Test Statistic:</strong><br>F = s₁²/s₂²</p>
                        <p style="color: #666; font-size: 0.9em;">(Population 1 must be the one hypothesized to have larger variance)</p>
                    </div>
                </div>
            </div>

            <div class="example-box" style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>🚌 Example: Dullus County School Bus Service</h4>
                <p><strong>Scenario:</strong> Choosing between Milbank Company and Gulf Park Company based on consistency of arrival times (lower variance = better service)</p>
                
                <div style="background: white; padding: 20px; margin-top: 15px; border-radius: 5px;">
                    <p><strong>Hypothesis Test:</strong></p>
                    <p>H₀: σ₁² = σ₂² (equal service quality)<br>
                    Hₐ: σ₁² ≠ σ₂² (different service quality)</p>
                    <p>Level of significance: α = 0.10</p>
                    
                    <p style="margin-top: 15px;"><strong>Sample Data:</strong></p>
                    <ul>
                        <li>Milbank: n₁ = 26, s₁² = 48</li>
                        <li>Gulf Park: n₂ = 16, s₂² = 20</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Test Statistic:</strong></p>
                    <p style="text-align: center; font-size: 1.2em;">F = 48/20 = 2.40</p>
                    
                    <p style="margin-top: 15px;"><strong>Degrees of Freedom:</strong></p>
                    <ul>
                        <li>Numerator df = 26 - 1 = 25</li>
                        <li>Denominator df = 16 - 1 = 15</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Critical Value:</strong> F₀.₀₅ = 2.28</p>
                    
                    <p style="margin-top: 15px;"><strong>Decision:</strong> Since F = 2.40 > 2.28, <span style="color: #e74c3c; font-weight: bold;">reject H₀</span></p>
                    <p><strong>Conclusion:</strong> The services differ significantly. Gulf Park has lower variance (better consistency).</p>
                </div>
            </div>

            <div class="example-box" style="background: #fce4ec; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📊 Example: Political Opinion Survey</h4>
                <p><strong>Research Question:</strong> Do women show greater variation in political attitudes than men?</p>
                
                <div style="background: white; padding: 20px; margin-top: 15px; border-radius: 5px;">
                    <p><strong>One-Tailed Test:</strong></p>
                    <p>H₀: σ²ᵥᵥₒₘₑₙ ≤ σ²ₘₑₙ<br>
                    Hₐ: σ²ᵥᵥₒₘₑₙ > σ²ₘₑₙ</p>
                    <p>Level of significance: α = 0.05</p>
                    
                    <p style="margin-top: 15px;"><strong>Sample Data:</strong></p>
                    <ul>
                        <li>Women: n₁ = 41, s₁² = 120</li>
                        <li>Men: n₂ = 31, s₂² = 80</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Test Statistic:</strong></p>
                    <p style="text-align: center; font-size: 1.2em;">F = 120/80 = 1.50</p>
                    
                    <p style="margin-top: 15px;"><strong>Degrees of Freedom:</strong> df₁ = 40, df₂ = 30</p>
                    <p><strong>Critical Value:</strong> F₀.₁₀ = 1.57</p>
                    
                    <p style="margin-top: 15px;"><strong>Decision:</strong> Since F = 1.50 < 1.57, <span style="color: #27ae60; font-weight: bold;">cannot reject H₀</span></p>
                    <p><strong>Conclusion:</strong> No evidence that women show greater variation in political attitudes than men.</p>
                </div>
            </div>

            <div class="f-table" style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📋 F Distribution Critical Values (α = 0.05)</h4>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; background: white; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #3498db; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">df₂ \ df₁</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">10</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">15</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">20</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">25</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">30</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">10</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.98</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.85</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.77</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.73</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.70</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">15</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.54</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.40</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.33</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.28</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.25</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">20</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.35</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.20</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.12</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.07</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.04</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">25</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.24</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.09</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.01</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">1.96</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">1.92</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">30</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.16</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.01</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">1.93</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">1.88</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">1.84</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="summary-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📚 Summary: Comparing Two Population Variances</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li>✅ Use F distribution with s₁²/s₂² as test statistic</li>
                    <li>✅ Always put larger sample variance in numerator for two-tailed tests</li>
                    <li>✅ F distribution is right-skewed and always positive</li>
                    <li>✅ Sensitive to normality assumption - both populations should be approximately normal</li>
                    <li>✅ Useful for comparing consistency, reliability, or precision between two processes</li>
                </ul>
            </div>

            <div class="warning-box" style="background: #ffebee; padding: 20px; border-left: 4px solid #f44336; margin: 20px 0;">
                <h4>⚠️ Important Note</h4>
                <p><strong>Research confirms that the F distribution is sensitive to the assumption of normal populations.</strong> The F distribution should not be used unless it is reasonable to assume that both populations are at least approximately normally distributed.</p>
            </div>
            </div>
        </div>
    `
};

const MODULE6_ANOVA_NOTES = {
    anova: `
        <div class="module-container">
            <h2 class="module-header">Chapter 13: Experimental Design and Analysis of Variance</h2>
            
            <div class="module-intro" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px;">
                <h3 style="font-size: 1.5em; margin-bottom: 20px;">Experimental vs Observational Studies</h3>
                <p style="font-size: 1.1em; margin-bottom: 15px;">Statistical studies can be classified as either <strong>experimental</strong> or <strong>observational</strong>.</p>
                
                <div style="background: rgba(255,255,255,0.1); padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h4>📊 Experimental Statistical Study</h4>
                    <p>An experiment is conducted to generate the data. An experiment begins with identifying a variable of interest. Then one or more other variables, thought to be related, are identified and controlled, and data are collected about how those variables influence the variable of interest.</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h4>👁️ Observational Study</h4>
                    <p>Data are usually obtained through sample surveys and not a controlled experiment. Good design principles are still employed, but the rigorous controls associated with an experimental statistical study are often not possible. For instance, in a study of the relationship between smoking and lung cancer, the researcher cannot assign a smoking habit to subjects.</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.2); padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p>⚡ <strong>Key Point:</strong> Cause-and-effect relationships can be difficult to establish in observational studies; such relationships are easier to establish in experimental studies.</p>
                </div>
            </div>

            <div class="historical-note" style="background: #e8f5e9; padding: 20px; border-left: 4px solid #4caf50; margin: 20px 0;">
                <h4>🎓 Historical Note: Sir Ronald Aylmer Fisher (1890–1962)</h4>
                <p>Sir Ronald Fisher invented the branch of statistics known as experimental design. In addition to being accomplished in statistics, he was a noted scientist in the field of genetics.</p>
                <p style="margin-top: 10px;"><em>Randomization is the process of assigning the treatments to the experimental units at random. Prior to the work of Sir R. A. Fisher, treatments were assigned on a systematic or subjective basis.</em></p>
            </div>

            <div class="section-box" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color: #9c27b0;">13.1 An Introduction to Experimental Design and Analysis of Variance</h3>
                
                <p style="margin: 15px 0;">In this chapter we introduce three types of experimental designs:</p>
                <ul style="margin-left: 30px;">
                    <li><strong>Completely randomized design</strong></li>
                    <li><strong>Randomized block design</strong></li>
                    <li><strong>Factorial experiment</strong></li>
                </ul>
                
                <p style="margin-top: 15px;">For each design we show how a statistical procedure called <strong>analysis of variance (ANOVA)</strong> can be used to analyze the data available. ANOVA can also be used to analyze the data obtained through an observational study.</p>
            </div>

            <div class="example-box" style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #2196f3;">📚 Example: Chemitech Filtration System Assembly</h4>
                
                <p><strong>Scenario:</strong> Chemitech, Inc. developed a new filtration system for municipal water supplies. The industrial engineering group needs to determine the best assembly method from three alternatives:</p>
                <ul style="margin: 15px 0;">
                    <li><strong>Method A</strong></li>
                    <li><strong>Method B</strong></li>
                    <li><strong>Method C</strong></li>
                </ul>
                
                <p><strong>Objective:</strong> Determine which assembly method can produce the greatest number of filtration systems per week.</p>
                
                <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h5>Experimental Design Terminology:</h5>
                    <ul>
                        <li><strong>Independent variable (factor):</strong> Assembly method</li>
                        <li><strong>Treatments:</strong> The three assembly methods (A, B, C)</li>
                        <li><strong>Response variable:</strong> Number of filtration systems assembled per week</li>
                        <li><strong>Experimental units:</strong> The workers randomly selected</li>
                        <li><strong>Design type:</strong> Completely randomized design</li>
                    </ul>
                </div>
                
                <div style="background: #fff3cd; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p>⚠️ <strong>Important Principle:</strong> Randomization - Each treatment must be assigned randomly to the experimental units. This is a fundamental principle of all experimental designs.</p>
                </div>
            </div>

            <div class="concept-box" style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>🔄 Figure 13.1: Completely Randomized Design for Chemitech</h4>
                
                <div style="text-align: center; background: white; padding: 20px; border-radius: 5px;">
                    <div style="background: #3498db; color: white; padding: 15px; border-radius: 5px; margin: 10px auto; max-width: 400px;">
                        <p><strong>Employees at the plant in Columbia, South Carolina</strong></p>
                    </div>
                    <div style="font-size: 2em; margin: 10px;">↓</div>
                    <div style="background: #e74c3c; color: white; padding: 15px; border-radius: 5px; margin: 10px auto; max-width: 400px;">
                        <p><strong>Random sample of 15 employees is selected for the experiment</strong></p>
                    </div>
                    <div style="font-size: 2em; margin: 10px;">↓</div>
                    <div style="background: #2ecc71; color: white; padding: 15px; border-radius: 5px; margin: 10px auto; max-width: 500px;">
                        <p><strong>Each of the three assembly methods is randomly assigned to 5 employees</strong></p>
                    </div>
                    <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                        <div style="background: #9c27b0; color: white; padding: 15px; border-radius: 5px; flex: 1; margin: 0 5px;">
                            <p><strong>Method A</strong><br>n₁ = 5</p>
                        </div>
                        <div style="background: #9c27b0; color: white; padding: 15px; border-radius: 5px; flex: 1; margin: 0 5px;">
                            <p><strong>Method B</strong><br>n₂ = 5</p>
                        </div>
                        <div style="background: #9c27b0; color: white; padding: 15px; border-radius: 5px; flex: 1; margin: 0 5px;">
                            <p><strong>Method C</strong><br>n₃ = 5</p>
                        </div>
                    </div>
                </div>
                
                <div style="background: #e8f5e9; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p><strong>Replication:</strong> Each method is assigned to 5 workers, so we have 5 replicates. Replication is another important principle of experimental design.</p>
                </div>
            </div>

            <div class="data-section" style="background: #fff8e1; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📊 Table 13.1: Number of Units Produced by 15 Workers</h4>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background: #ffc107; color: #333;">
                            <th style="padding: 12px; border: 1px solid #ddd;">Method A</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Method B</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Method C</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">58</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">58</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">48</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">64</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">69</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">57</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">55</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">71</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">59</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">66</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">64</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">47</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">67</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">68</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">49</td>
                        </tr>
                        <tr style="background: #ffebcc; font-weight: bold;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Sample mean</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">62</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">66</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">52</td>
                        </tr>
                        <tr style="background: #ffebcc;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Sample variance</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">27.5</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">26.5</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">31.0</td>
                        </tr>
                        <tr style="background: #ffebcc;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Sample std deviation</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5.244</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5.148</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5.568</td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h5>Hypotheses:</h5>
                    <p><strong>Notation:</strong></p>
                    <ul>
                        <li>μ₁ = mean number of units produced per week using method A</li>
                        <li>μ₂ = mean number of units produced per week using method B</li>
                        <li>μ₃ = mean number of units produced per week using method C</li>
                    </ul>
                    <p style="margin-top: 15px;"><strong>H₀:</strong> μ₁ = μ₂ = μ₃</p>
                    <p><strong>Hₐ:</strong> Not all population means are equal</p>
                    
                    <div style="background: #fff3cd; padding: 10px; margin-top: 15px; border-radius: 5px;">
                        <p>⚠️ <strong>Note:</strong> If H₀ is rejected, we cannot conclude that all population means are different. Rejecting H₀ means that at least two population means have different values.</p>
                    </div>
                </div>
            </div>

            <div class="assumptions-box" style="background: #ffebee; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #c62828;">📋 Assumptions for Analysis of Variance</h4>
                
                <ol style="margin-left: 20px;">
                    <li style="margin: 15px 0;">
                        <strong>Normality:</strong> For each population, the response variable is normally distributed.
                        <br><em>Implication:</em> In the Chemitech experiment, the number of units produced per week must be normally distributed for each assembly method.
                    </li>
                    <li style="margin: 15px 0;">
                        <strong>Equal Variance:</strong> The variance of the response variable, denoted σ², is the same for all populations.
                        <br><em>Implication:</em> In the Chemitech experiment, the variance of the number of units produced per week must be the same for each assembly method.
                    </li>
                    <li style="margin: 15px 0;">
                        <strong>Independence:</strong> The observations must be independent.
                        <br><em>Implication:</em> In the Chemitech experiment, the number of units produced per week for each employee must be independent of the number produced by any other employee.
                    </li>
                </ol>
                
                <div style="background: white; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p>💡 <strong>Note:</strong> If the sample sizes are equal, analysis of variance is not sensitive to departures from the assumption of normally distributed populations.</p>
                </div>
            </div>

            <div class="conceptual-overview" style="background: #e8eaf6; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #3f51b5;">🧠 Analysis of Variance: A Conceptual Overview</h4>
                
                <p style="margin: 15px 0;">The logic of ANOVA is based on comparing two different estimates of the population variance σ²:</p>
                
                <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h5>1. Between-Treatments Estimate</h5>
                    <p>Based on the variability among the sample means. If H₀ is true (all population means are equal), this provides a valid estimate of σ².</p>
                    
                    <p style="margin-top: 15px;"><strong>For Chemitech:</strong></p>
                    <ul>
                        <li>Overall sample mean = (62 + 66 + 52)/3 = 60</li>
                        <li>Variance of sample means: s²ₓ̄ = [(62-60)² + (66-60)² + (52-60)²]/(3-1) = 52</li>
                        <li>Between-treatments estimate of σ² = n × s²ₓ̄ = 5 × 52 = 260</li>
                    </ul>
                </div>
                
                <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h5>2. Within-Treatments Estimate</h5>
                    <p>Based on the variability within each sample. This estimate is valid whether H₀ is true or false.</p>
                    
                    <p style="margin-top: 15px;"><strong>For Chemitech:</strong></p>
                    <p>Within-treatments estimate of σ² = (27.5 + 26.5 + 31.0)/3 = 28.33</p>
                </div>
                
                <div style="background: #c8e6c9; padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h5>📊 The F-Ratio</h5>
                    <p>F = Between-treatments estimate / Within-treatments estimate = 260/28.33 = 9.18</p>
                    
                    <p style="margin-top: 15px;"><strong>Interpretation:</strong></p>
                    <ul>
                        <li>If H₀ is true: F-ratio should be close to 1</li>
                        <li>If H₀ is false: F-ratio will be large</li>
                        <li>Our F = 9.18 suggests the population means may not be equal</li>
                    </ul>
                </div>
            </div>

            <div class="visual-explanation" style="background: #f5f5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📈 Figure 13.2 & 13.3: Sampling Distributions</h4>
                
                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px;">
                    <h5>When H₀ is TRUE (Figure 13.2)</h5>
                    <p>All three sample means come from the same sampling distribution with mean μ and variance σ²/n.</p>
                    <p>→ Sample means are "close together"</p>
                    <p>→ Between-treatments estimate ≈ Within-treatments estimate</p>
                </div>
                
                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px;">
                    <h5>When H₀ is FALSE (Figure 13.3)</h5>
                    <p>Sample means come from different sampling distributions (different μ₁, μ₂, μ₃).</p>
                    <p>→ Sample means are "far apart"</p>
                    <p>→ Between-treatments estimate > Within-treatments estimate</p>
                </div>
            </div>

            <div class="notes-section" style="background: #e0f2f1; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #00695c;">📝 Notes and Comments</h4>
                
                <ol style="margin-left: 20px;">
                    <li style="margin: 10px 0;">Randomization in experimental design is the analog of probability sampling in an observational study.</li>
                    
                    <li style="margin: 10px 0;">In many medical experiments, potential bias is eliminated by using a <strong>double-blind experimental design</strong>. With this design, neither the physician applying the treatment nor the subject knows which treatment is being applied.</li>
                    
                    <li style="margin: 10px 0;">This section provided a conceptual overview of how ANOVA can be used to test for the equality of k population means for a completely randomized experimental design. The same procedure can also be used for observational studies.</li>
                    
                    <li style="margin: 10px 0;">In Sections 10.1 and 10.2 we presented statistical methods for testing the hypothesis that the means of two populations are equal. ANOVA can also be used for two populations, but in practice, it's usually not used except when dealing with three or more population means.</li>
                </ol>
            </div>

            <div class="summary-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="font-size: 1.3em;">🎯 Summary</h4>
                <p style="margin: 15px 0;">Analysis of Variance (ANOVA) is a powerful statistical technique for comparing means of three or more populations. It works by:</p>
                <ul style="margin-left: 20px;">
                    <li>Developing two independent estimates of the population variance σ²</li>
                    <li>Comparing these estimates using an F-ratio</li>
                    <li>Making decisions based on how large this ratio is</li>
                </ul>
                <p style="margin-top: 15px;">The beauty of ANOVA lies in its ability to test multiple population means simultaneously while controlling the overall Type I error rate.</p>
            </div>

            <div class="section-divider" style="border-top: 3px solid #e0e0e0; margin: 40px 0;"></div>

            <div class="section-header" style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white; padding: 30px; border-radius: 15px; margin: 30px 0;">
                <h2 style="font-size: 2em; margin-bottom: 15px;">13.2 Analysis of Variance and the Completely Randomized Design</h2>
                <p style="font-size: 1.2em;">In this section we show how analysis of variance can be used to test for the equality of k population means for a completely randomized design.</p>
            </div>

            <div class="hypothesis-framework" style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #1976d2;">📊 General Hypotheses for ANOVA</h4>
                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px;">
                    <p style="font-size: 1.2em;"><strong>H₀:</strong> μ₁ = μ₂ = ... = μₖ</p>
                    <p style="font-size: 1.2em;"><strong>Hₐ:</strong> Not all population means are equal</p>
                    <p style="margin-top: 15px;">where μⱼ = mean of the jth population</p>
                </div>
            </div>

            <div class="notation-box" style="background: #f5f5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📝 ANOVA Notation</h4>
                <p>We assume that a simple random sample of size nⱼ has been selected from each of the k populations or treatments. For the resulting sample data, let:</p>
                <ul style="margin: 15px 0; list-style: none;">
                    <li><strong>xᵢⱼ</strong> = value of observation i for treatment j</li>
                    <li><strong>nⱼ</strong> = number of observations for treatment j</li>
                    <li><strong>x̄ⱼ</strong> = sample mean for treatment j</li>
                    <li><strong>s²ⱼ</strong> = sample variance for treatment j</li>
                    <li><strong>sⱼ</strong> = sample standard deviation for treatment j</li>
                </ul>
            </div>

            <div class="formulas-section" style="background: #fff3cd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #f57c00;">📐 Key Formulas</h4>
                
                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px;">
                    <h5>Sample Mean for Treatment j:</h5>
                    <p style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        x̄ⱼ = Σᵢ₌₁ⁿʲ xᵢⱼ / nⱼ
                    </p>
                    <p style="text-align: right; color: #666;">(13.1)</p>
                </div>

                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px;">
                    <h5>Sample Variance for Treatment j:</h5>
                    <p style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        s²ⱼ = Σᵢ₌₁ⁿʲ (xᵢⱼ - x̄ⱼ)² / (nⱼ - 1)
                    </p>
                    <p style="text-align: right; color: #666;">(13.2)</p>
                </div>

                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px;">
                    <h5>Overall Sample Mean:</h5>
                    <p style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        x̄̄ = ΣΣ xᵢⱼ / nₜ
                    </p>
                    <p style="text-align: right; color: #666;">(13.3)</p>
                    <p>where nₜ = n₁ + n₂ + ... + nₖ</p>
                </div>

                <div style="background: #fff8e1; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p><strong>Special Case:</strong> When all sample sizes are equal (n), the overall sample mean simplifies to:</p>
                    <p style="font-size: 1.2em; text-align: center; margin: 15px 0;">
                        x̄̄ = Σⱼ₌₁ᵏ x̄ⱼ / k
                    </p>
                    <p style="text-align: right; color: #666;">(13.5)</p>
                </div>
            </div>

            <div class="calculation-example" style="background: #e8f5e9; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #2e7d32;">📊 Chemitech Example - Overall Sample Mean</h4>
                <p>For the Chemitech data with n = 5 observations per treatment:</p>
                <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                    <p>x̄̄ = (62 + 66 + 52) / 3 = 180 / 3 = <strong>60</strong></p>
                </div>
                <p>If H₀ is true (μ₁ = μ₂ = μ₃ = μ), then x̄̄ = 60 is the best estimate of the population mean μ.</p>
            </div>

            <div class="mstr-section" style="background: #e1f5fe; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #0277bd;">📈 Between-Treatments Estimate of Population Variance</h4>
                
                <p>The between-treatments estimate of σ² is called the <strong>Mean Square Due to Treatments (MSTR)</strong>:</p>
                
                <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h5>Formula for MSTR:</h5>
                    <p style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        MSTR = SSTR / (k - 1)
                    </p>
                    <p style="text-align: right; color: #666;">(13.7)</p>
                    
                    <p style="margin-top: 20px;">where SSTR (Sum of Squares Due to Treatments) is:</p>
                    <p style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        SSTR = Σⱼ₌₁ᵏ nⱼ(x̄ⱼ - x̄̄)²
                    </p>
                    <p style="text-align: right; color: #666;">(13.8)</p>
                </div>

                <div style="background: #b3e5fc; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p><strong>Important:</strong> If H₀ is true, MSTR provides an unbiased estimate of σ². If H₀ is false, MSTR overestimates σ².</p>
                </div>

                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h5>Chemitech Calculation:</h5>
                    <p>SSTR = 5(62-60)² + 5(66-60)² + 5(52-60)²</p>
                    <p>SSTR = 5(4) + 5(36) + 5(64) = 20 + 180 + 320 = <strong>520</strong></p>
                    <p>MSTR = 520 / (3-1) = 520 / 2 = <strong>260</strong></p>
                </div>
            </div>

            <div class="mse-section" style="background: #fce4ec; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #c2185b;">📉 Within-Treatments Estimate of Population Variance</h4>
                
                <p>The within-treatments estimate of σ² is called the <strong>Mean Square Due to Error (MSE)</strong>:</p>
                
                <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h5>Formula for MSE:</h5>
                    <p style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        MSE = SSE / (nₜ - k)
                    </p>
                    <p style="text-align: right; color: #666;">(13.10)</p>
                    
                    <p style="margin-top: 20px;">where SSE (Sum of Squares Due to Error) is:</p>
                    <p style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        SSE = Σⱼ₌₁ᵏ (nⱼ - 1)s²ⱼ
                    </p>
                    <p style="text-align: right; color: #666;">(13.11)</p>
                </div>

                <div style="background: #f8bbd0; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p><strong>Important:</strong> MSE always provides an unbiased estimate of σ², regardless of whether H₀ is true or false.</p>
                </div>

                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h5>Chemitech Calculation:</h5>
                    <p>SSE = (5-1)(27.5) + (5-1)(26.5) + (5-1)(31.0)</p>
                    <p>SSE = 4(27.5) + 4(26.5) + 4(31.0) = 110 + 106 + 124 = <strong>340</strong></p>
                    <p>MSE = 340 / (15-3) = 340 / 12 = <strong>28.33</strong></p>
                </div>
            </div>

            <div class="f-test-section" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #7b1fa2;">📊 The F Test</h4>
                
                <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                    <h5>Test Statistic for the Equality of k Population Means:</h5>
                    <p style="font-size: 1.5em; text-align: center; margin: 20px 0; color: #7b1fa2;">
                        <strong>F = MSTR / MSE</strong>
                    </p>
                    <p style="text-align: right; color: #666;">(13.12)</p>
                    
                    <p>The test statistic follows an F distribution with:</p>
                    <ul>
                        <li>Numerator degrees of freedom = k - 1</li>
                        <li>Denominator degrees of freedom = nₜ - k</li>
                    </ul>
                </div>

                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h5>Chemitech F Test Calculation:</h5>
                    <p>F = MSTR / MSE = 260 / 28.33 = <strong>9.18</strong></p>
                    <p>Degrees of freedom: numerator = 2, denominator = 12</p>
                    
                    <div style="background: #ce93d8; color: white; padding: 15px; margin-top: 15px; border-radius: 5px;">
                        <p>From the F table with df₁ = 2 and df₂ = 12:</p>
                        <ul style="list-style: none;">
                            <li>F₀.₀₅ = 3.89</li>
                            <li>F₀.₀₁ = 6.93</li>
                        </ul>
                        <p style="margin-top: 10px;">Since F = 9.18 > 6.93, p-value < 0.01</p>
                        <p><strong>Decision:</strong> Reject H₀ at α = 0.05</p>
                    </div>
                </div>
            </div>

            <div class="decision-rules" style="background: #fff8e1; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #f57c00;">🎯 Test for the Equality of k Population Means</h4>
                
                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px;">
                    <h5>Hypotheses:</h5>
                    <p><strong>H₀:</strong> μ₁ = μ₂ = ... = μₖ</p>
                    <p><strong>Hₐ:</strong> Not all population means are equal</p>
                    
                    <h5 style="margin-top: 20px;">Test Statistic:</h5>
                    <p style="font-size: 1.3em; text-align: center;">F = MSTR / MSE</p>
                    
                    <h5 style="margin-top: 20px;">Rejection Rules:</h5>
                    <div style="background: #ffecb3; padding: 15px; margin: 10px 0; border-radius: 5px;">
                        <p><strong>p-value approach:</strong> Reject H₀ if p-value ≤ α</p>
                    </div>
                    <div style="background: #ffecb3; padding: 15px; margin: 10px 0; border-radius: 5px;">
                        <p><strong>Critical value approach:</strong> Reject H₀ if F ≥ Fα</p>
                        <p style="font-size: 0.9em; margin-top: 5px;">where Fα is based on k-1 numerator df and nₜ-k denominator df</p>
                    </div>
                </div>
            </div>

            <div class="anova-table-section" style="background: #e8eaf6; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #3f51b5;">📋 ANOVA Table</h4>
                
                <p>The ANOVA table provides a systematic way to organize all calculations:</p>
                
                <h5 style="margin-top: 20px;">Table 13.2: General ANOVA Table for Completely Randomized Design</h5>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background: #3f51b5; color: white;">
                            <th style="padding: 12px; border: 1px solid #ddd;">Source of Variation</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Sum of Squares</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Degrees of Freedom</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Mean Square</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">F</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">p-value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">Treatments</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">SSTR</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">k - 1</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">MSTR = SSTR/(k-1)</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">MSTR/MSE</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Error</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">SSE</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">nₜ - k</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">MSE = SSE/(nₜ-k)</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">SST</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">nₜ - 1</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                        </tr>
                    </tbody>
                </table>

                <h5 style="margin-top: 30px;">Table 13.3: ANOVA Table for Chemitech Experiment</h5>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background: #3f51b5; color: white;">
                            <th style="padding: 12px; border: 1px solid #ddd;">Source of Variation</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Sum of Squares</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Degrees of Freedom</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Mean Square</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">F</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">p-value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">Treatments</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">520</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">2</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">260.00</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">9.18</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">.004</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Error</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">340</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">12</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">28.33</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total</strong></td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">860</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">14</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                        </tr>
                    </tbody>
                </table>

                <div style="background: #c5cae9; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p><strong>Key Relationship:</strong> SST = SSTR + SSE</p>
                    <p>For Chemitech: 860 = 520 + 340 ✓</p>
                    <p style="margin-top: 10px;">This partitioning of the total sum of squares is fundamental to ANOVA.</p>
                </div>
            </div>

            <div class="computer-output" style="background: #f5f5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>💻 Figure 13.5: Minitab Output for Chemitech Experiment</h4>
                
                <div style="background: white; padding: 20px; margin: 15px 0; border-radius: 5px; font-family: monospace;">
                    <pre style="background: #263238; color: #aed581; padding: 20px; border-radius: 5px; overflow-x: auto;">
Source  DF     SS     MS     F      P
Factor   2  520.0  260.0  9.18  0.004
Error   12  340.0   28.3
Total   14  860.0

S = 5.323   R-Sq = 60.47%   R-Sq(adj) = 53.88%

Individual 95% CIs For Mean Based on Pooled StDev
Level  N   Mean  StDev  -------+---------+---------+---------+------
A      5  62.000  5.244      (-------*-------)
B      5  66.000  5.148           (------*-------)
C      5  52.000  5.568  (------*-------)
                         -------+---------+---------+---------+------
Pooled StDev = 5.323          49.0      56.0      63.0      70.0</pre>
                </div>

                <div style="background: #e0f2f1; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p><strong>Note:</strong> The pooled standard deviation (5.323) is the square root of MSE (√28.33 ≈ 5.323)</p>
                </div>
            </div>

            <div class="observational-study" style="background: #fff3e4; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #ff6f00;">🏭 ANOVA for Observational Studies</h4>
                
                <h5>Example: National Computer Products (NCP)</h5>
                <p>NCP manufactures printers and fax machines at plants in Atlanta, Dallas, and Seattle. To test employee knowledge of quality management:</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background: #ff6f00; color: white;">
                            <th style="padding: 12px; border: 1px solid #ddd;">Plant 1 (Atlanta)</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Plant 2 (Dallas)</th>
                            <th style="padding: 12px; border: 1px solid #ddd;">Plant 3 (Seattle)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">85</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">71</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">59</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">75</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">75</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">64</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">82</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">73</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">62</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">76</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">74</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">69</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">71</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">69</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">75</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">85</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">82</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">67</td>
                        </tr>
                        <tr style="background: #ffcc80; font-weight: bold;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Sample mean</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">79</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">74</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">66</td>
                        </tr>
                        <tr style="background: #ffcc80;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Sample variance</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">34</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">20</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">32</td>
                        </tr>
                        <tr style="background: #ffcc80;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Sample std dev</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5.83</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">4.47</td>
                            <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5.66</td>
                        </tr>
                    </tbody>
                </table>

                <div style="background: #ffe0b2; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p><strong>Key Difference from Experimental Study:</strong></p>
                    <p>• <strong>Observational:</strong> Employees were already assigned to plants; we only selected random samples</p>
                    <p>• <strong>Experimental:</strong> Would require randomly assigning employees to plants</p>
                    <p style="margin-top: 10px;">Despite this difference, the same ANOVA methodology applies to both types of studies.</p>
                </div>
            </div>

            <div class="notes-comments" style="background: #e0f2f1; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4 style="color: #00695c;">📝 Notes and Comments</h4>
                
                <ol>
                    <li style="margin: 15px 0;">
                        <strong>Alternative Formula for Overall Mean:</strong>
                        <p>x̄̄ = (n₁x̄₁ + n₂x̄₂ + ... + nₖx̄ₖ) / nₜ</p>
                        <p>This weighted average formula is simpler when sample means are already calculated.</p>
                    </li>
                    
                    <li style="margin: 15px 0;">
                        <strong>Equal Sample Sizes - MSTR:</strong>
                        <p>When all samples have n observations:</p>
                        <p>MSTR = n × s²x̄</p>
                        <p>where s²x̄ is the variance of the sample means.</p>
                    </li>
                    
                    <li style="margin: 15px 0;">
                        <strong>Equal Sample Sizes - MSE:</strong>
                        <p>When all samples have n observations:</p>
                        <p>MSE = (s²₁ + s²₂ + ... + s²ₖ) / k</p>
                        <p>MSE is simply the average of the k sample variances.</p>
                    </li>
                </ol>
            </div>

            <div class="section-box" style="background: #fff3cd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color: #ff9800;">13.2 Analysis of Variance and the Completely Randomized Design</h3>
                
                <div class="formula-section" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h4 style="color: #ff6f00;">ANOVA Hypotheses</h4>
                    <p>In general, we have k populations or treatments with:</p>
                    <div style="background: #fff8e1; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <p><strong>H₀:</strong> μ₁ = μ₂ = μ₃ = ... = μₖ (All population means are equal)</p>
                        <p><strong>Hₐ:</strong> Not all population means are equal</p>
                    </div>
                </div>

                <div class="notation-box" style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h4 style="color: #424242;">ANOVA Notation</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        <li>📊 <strong>xᵢⱼ</strong> = value of observation i for treatment j</li>
                        <li>📊 <strong>nⱼ</strong> = number of observations for treatment j</li>
                        <li>📊 <strong>x̄ⱼ</strong> = sample mean for treatment j</li>
                        <li>📊 <strong>sⱼ²</strong> = sample variance for treatment j</li>
                        <li>📊 <strong>sⱼ</strong> = sample standard deviation for treatment j</li>
                        <li>📊 <strong>x̄</strong> = overall sample mean (grand mean)</li>
                        <li>📊 <strong>k</strong> = number of treatments (populations)</li>
                        <li>📊 <strong>nₜ</strong> = total number of observations (n₁ + n₂ + ... + nₖ)</li>
                    </ul>
                </div>

                <div class="formulas-box" style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #1976d2;">Key ANOVA Formulas</h4>
                    
                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.1: Sample Mean for Treatment j</h5>
                        <p style="text-align: center; font-size: 1.2em;">x̄ⱼ = Σxᵢⱼ / nⱼ</p>
                    </div>

                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.2: Sample Variance for Treatment j</h5>
                        <p style="text-align: center; font-size: 1.2em;">sⱼ² = Σ(xᵢⱼ - x̄ⱼ)² / (nⱼ - 1)</p>
                    </div>

                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.3: Overall Sample Mean (Grand Mean)</h5>
                        <p style="text-align: center; font-size: 1.2em;">x̄ = ΣΣxᵢⱼ / nₜ</p>
                    </div>

                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.5: Mean Square Due to Treatments (MSTR)</h5>
                        <p style="text-align: center; font-size: 1.2em;">MSTR = SSTR / (k - 1)</p>
                        <p style="text-align: center; color: #666;">where SSTR = Sum of Squares Due to Treatments</p>
                    </div>

                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.7: Mean Square Due to Error (MSE)</h5>
                        <p style="text-align: center; font-size: 1.2em;">MSE = SSE / (nₜ - k)</p>
                        <p style="text-align: center; color: #666;">where SSE = Sum of Squares Due to Error</p>
                    </div>

                    <div style="background: #ffebee; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.8: F Test Statistic</h5>
                        <p style="text-align: center; font-size: 1.3em; font-weight: bold;">F = MSTR / MSE</p>
                        <p style="text-align: center; color: #666;">F distribution with k-1 numerator df and nₜ-k denominator df</p>
                    </div>
                </div>

                <div class="sum-squares-box" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #9c27b0;">Computing Sum of Squares</h4>
                    
                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.9: Total Sum of Squares (SST)</h5>
                        <p style="text-align: center; font-size: 1.2em;">SST = ΣΣ(xᵢⱼ - x̄)²</p>
                    </div>

                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.10: Sum of Squares Due to Treatments (SSTR)</h5>
                        <p style="text-align: center; font-size: 1.2em;">SSTR = Σnⱼ(x̄ⱼ - x̄)²</p>
                    </div>

                    <div style="background: white; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.11: Sum of Squares Due to Error (SSE)</h5>
                        <p style="text-align: center; font-size: 1.2em;">SSE = Σ(nⱼ - 1)sⱼ²</p>
                    </div>

                    <div style="background: #e8f5e9; padding: 15px; margin: 15px 0; border-radius: 5px;">
                        <h5>Formula 13.12: Partitioning of Sum of Squares</h5>
                        <p style="text-align: center; font-size: 1.3em; font-weight: bold;">SST = SSTR + SSE</p>
                        <p style="text-align: center; color: #666;">Total variation = Between-treatments variation + Within-treatments variation</p>
                    </div>
                </div>

                <div class="anova-table-box" style="background: white; padding: 25px; border-radius: 10px; margin: 30px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h4 style="color: #2c3e50;">📊 General ANOVA Table</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <thead>
                            <tr style="background: #34495e; color: white;">
                                <th style="padding: 12px; border: 1px solid #ddd;">Source of Variation</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">Sum of Squares</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">Degrees of Freedom</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">Mean Square</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">F</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">p-value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Treatments</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">SSTR</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">k - 1</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">MSTR = SSTR/(k-1)</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">F = MSTR/MSE</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">p-value</td>
                            </tr>
                            <tr style="background: #f8f9fa;">
                                <td style="padding: 10px; border: 1px solid #ddd;">Error</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">SSE</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">nₜ - k</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">MSE = SSE/(nₜ-k)</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Total</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">SST</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">nₜ - 1</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="chemitech-table-box" style="background: #e8f4f8; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #00796b;">📈 Chemitech ANOVA Table (Table 13.3)</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <thead>
                            <tr style="background: #00897b; color: white;">
                                <th style="padding: 12px; border: 1px solid #ddd;">Source of Variation</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">Sum of Squares</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">Degrees of Freedom</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">Mean Square</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">F</th>
                                <th style="padding: 12px; border: 1px solid #ddd;">p-value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Treatments</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">520</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">2</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">260</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">9.26</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">0.003</td>
                            </tr>
                            <tr style="background: #f8f9fa;">
                                <td style="padding: 10px; border: 1px solid #ddd;">Error</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">420</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">15</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">28</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Total</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">940</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">17</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">-</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style="background: #b2dfdb; padding: 15px; margin-top: 20px; border-radius: 5px;">
                        <p><strong>Conclusion:</strong> With F = 9.26 and p-value = 0.003 < α = 0.05, we reject H₀. The mean completion times for the three assembly methods are not all equal.</p>
                    </div>
                </div>

                <div class="minitab-output" style="background: #f5f5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #546e7a;">💻 Minitab Output for Chemitech</h4>
                    <pre style="background: white; padding: 20px; border-radius: 5px; font-family: 'Courier New', monospace; overflow-x: auto;">
One-way ANOVA: Time versus Method

Source  DF    SS    MS     F      P
Method   2   520   260   9.26  0.003
Error   15   420    28
Total   17   940

S = 5.291   R-Sq = 55.32%   R-Sq(adj) = 49.36%

                     Individual 95% CIs For Mean Based on
                     Pooled StDev
Level  N   Mean  StDev  --------+---------+---------+---------+-
A      6  62.00  4.899             (------*------)
B      6  66.00  5.831                   (------*------)
C      6  52.00  5.477  (------*------)
                        --------+---------+---------+---------+-
                             52.5      60.0      67.5      75.0

Pooled StDev = 5.291</pre>
                    <div style="background: #eceff1; padding: 15px; margin-top: 15px; border-radius: 5px;">
                        <p><strong>Interpretation:</strong> The confidence intervals show that Method C appears to have a lower mean assembly time than Methods A and B.</p>
                    </div>
                </div>

                <div class="ncp-example" style="background: #fff8e1; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #f57c00;">📚 Example: NCP Observational Study</h4>
                    <p>National Computer Products (NCP) collected data on the number of hours spent in quality control training programs:</p>
                    
                    <h5 style="margin-top: 20px;">Table 13.4: Examination Scores for 18 NCP Employees</h5>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                        <thead>
                            <tr style="background: #ff9800; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Dallas Plant</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Seattle Plant</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Boston Plant</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="background: white;">
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">85</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">71</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">59</td>
                            </tr>
                            <tr style="background: #f5f5f5;">
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">75</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">75</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">64</td>
                            </tr>
                            <tr style="background: white;">
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">82</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">73</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">62</td>
                            </tr>
                            <tr style="background: #f5f5f5;">
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">76</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">74</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">69</td>
                            </tr>
                            <tr style="background: white;">
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">71</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">69</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">75</td>
                            </tr>
                            <tr style="background: #f5f5f5;">
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">85</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">82</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">67</td>
                            </tr>
                            <tr style="background: #fff3e0;">
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><strong>Mean: 79</strong></td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><strong>Mean: 74</strong></td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;"><strong>Mean: 66</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style="background: #ffecb3; padding: 15px; margin-top: 20px; border-radius: 5px;">
                        <p><strong>Note:</strong> Although employees were not randomly assigned to plants (observational study), ANOVA can still be used to test whether mean examination scores differ significantly among the three plants.</p>
                    </div>
                </div>
            </div>

            <div class="section-box" style="background: #e1f5fe; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color: #0277bd;">13.3 Multiple Comparison Procedures</h3>
                
                <div class="intro-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <p>When we use analysis of variance to test whether the means of k populations are equal, rejection of the null hypothesis allows us to conclude only that the population means are <strong>not all equal</strong>. In some cases we will want to go a step further and determine <em>where</em> the differences among means occur.</p>
                    <p style="margin-top: 15px;">The purpose of this section is to show how <strong>multiple comparison procedures</strong> can be used to conduct statistical comparisons between pairs of population means.</p>
                </div>

                <div class="fishers-lsd-box" style="background: #fff8e1; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #f57c00;">📊 Fisher's LSD (Least Significant Difference)</h4>
                    
                    <p>Suppose that analysis of variance provides statistical evidence to reject the null hypothesis of equal population means. In this case, <strong>Fisher's least significant difference (LSD) procedure</strong> can be used to determine where the differences occur.</p>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <h5 style="color: #e65100;">FISHER'S LSD PROCEDURE</h5>
                        <div style="background: #fff3e0; padding: 15px; margin: 15px 0; border-radius: 5px;">
                            <p><strong>Hypotheses:</strong></p>
                            <p>H₀: μᵢ = μⱼ</p>
                            <p>Hₐ: μᵢ ≠ μⱼ</p>
                        </div>
                        
                        <div style="background: #e3f2fd; padding: 15px; margin: 15px 0; border-radius: 5px;">
                            <h6>Formula 13.16: Test Statistic</h6>
                            <p style="text-align: center; font-size: 1.2em;">
                                t = (x̄ᵢ - x̄ⱼ) / √[MSE(1/nᵢ + 1/nⱼ)]
                            </p>
                        </div>
                        
                        <div style="background: #f3e5f5; padding: 15px; margin: 15px 0; border-radius: 5px;">
                            <p><strong>Rejection Rule:</strong></p>
                            <p>• p-value approach: Reject H₀ if p-value ≤ α</p>
                            <p>• Critical value approach: Reject H₀ if |t| ≥ tα/2 or t ≤ -tα/2</p>
                            <p style="margin-top: 10px; font-style: italic;">where tα/2 is based on a t distribution with nT - k degrees of freedom</p>
                        </div>
                    </div>

                    <div class="example-calculation" style="background: #e8f5e9; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5 style="color: #2e7d32;">Example: Chemitech Methods A and B Comparison</h5>
                        <p><strong>Given:</strong></p>
                        <ul>
                            <li>Method A mean: x̄₁ = 62</li>
                            <li>Method B mean: x̄₂ = 66</li>
                            <li>MSE = 28 (from ANOVA table)</li>
                            <li>n₁ = n₂ = 6</li>
                            <li>df = 15 (nT - k = 18 - 3)</li>
                            <li>α = 0.05</li>
                        </ul>
                        
                        <p style="margin-top: 15px;"><strong>Calculation:</strong></p>
                        <p style="text-align: center; font-size: 1.1em; background: white; padding: 10px; border-radius: 5px;">
                            t = (62 - 66) / √[28(1/6 + 1/6)] = -4 / √(28 × 0.333) = -4 / 3.055 = -1.31
                        </p>
                        
                        <p style="margin-top: 15px;"><strong>Conclusion:</strong> With |t| = 1.31 < t₀.₀₂₅ = 2.131, we cannot reject H₀. The p-value = 0.210 > 0.05. Therefore, we cannot conclude that the mean for Method A differs from Method B.</p>
                    </div>
                </div>

                <div class="lsd-simplified-box" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #9c27b0;">📐 Fisher's LSD Simplified Approach</h4>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5>Formula 13.17: LSD Calculation</h5>
                        <p style="text-align: center; font-size: 1.3em; background: #f5f5f5; padding: 15px; border-radius: 5px;">
                            LSD = tα/2 × √[MSE(1/nᵢ + 1/nⱼ)]
                        </p>
                        
                        <div style="background: #e1f5fe; padding: 15px; margin: 15px 0; border-radius: 5px;">
                            <p><strong>Rejection Rule:</strong> Reject H₀ if |x̄ᵢ - x̄ⱼ| > LSD</p>
                        </div>
                    </div>

                    <div class="chemitech-comparisons" style="background: #fff3e0; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5 style="color: #e65100;">Chemitech All Pairwise Comparisons</h5>
                        <p><strong>LSD Calculation:</strong></p>
                        <p style="text-align: center; background: white; padding: 10px; border-radius: 5px;">
                            LSD = 2.131 × √[28(1/6 + 1/6)] = 2.131 × 3.055 = 6.51
                        </p>
                        
                        <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #ff9800; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Comparison</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Difference</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">|Difference|</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Significant?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">A vs B</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">62 - 66 = -4</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">No (4 < 6.51)</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">A vs C</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">62 - 52 = 10</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">10</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Yes</strong> (10 > 6.51)</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">B vs C</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">66 - 52 = 14</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">14</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>Yes</strong> (14 > 6.51)</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div style="background: #c8e6c9; padding: 15px; margin-top: 20px; border-radius: 5px;">
                            <p><strong>Conclusion:</strong> Methods A and B both differ significantly from Method C, but Methods A and B do not differ significantly from each other.</p>
                        </div>
                    </div>
                </div>

                <div class="confidence-interval-box" style="background: #e8eaf6; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #5e35b1;">📈 Confidence Interval Using Fisher's LSD</h4>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5>Formulas 13.18-13.19: Confidence Interval for μᵢ - μⱼ</h5>
                        <p style="text-align: center; font-size: 1.2em; background: #f5f5f5; padding: 15px; border-radius: 5px;">
                            (x̄ᵢ - x̄ⱼ) ± LSD
                        </p>
                        <p style="text-align: center; margin-top: 10px;">
                            where LSD = tα/2 × √[MSE(1/nᵢ + 1/nⱼ)]
                        </p>
                    </div>

                    <div style="background: #ede7f6; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5>Example: 95% CI for Methods A and B</h5>
                        <p>(62 - 66) ± 6.51 = -4 ± 6.51</p>
                        <p style="font-size: 1.1em; font-weight: bold;">95% CI: [-10.51, 2.51]</p>
                        <p style="margin-top: 15px;"><em>Because this interval includes zero, we cannot reject the hypothesis that μ₁ = μ₂</em></p>
                    </div>
                </div>

                <div class="error-rates-box" style="background: #ffebee; padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <h4 style="color: #c62828;">⚠️ Type I Error Rates</h4>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5>Comparisonwise vs Experimentwise Error Rates</h5>
                        
                        <div style="background: #fff5f5; padding: 15px; margin: 15px 0; border-radius: 5px;">
                            <p><strong>Comparisonwise Type I Error Rate:</strong> The probability of Type I error for a single pairwise comparison (α = 0.05)</p>
                        </div>
                        
                        <div style="background: #ffe0e0; padding: 15px; margin: 15px 0; border-radius: 5px;">
                            <p><strong>Experimentwise Type I Error Rate (αEW):</strong> The probability of making at least one Type I error across all comparisons</p>
                        </div>
                    </div>

                    <div style="background: #ffcdd2; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5>Example: Three Pairwise Comparisons</h5>
                        <p>For the Chemitech experiment with 3 comparisons at α = 0.05:</p>
                        <ul>
                            <li>Probability of no Type I error on any test = (0.95)³ = 0.8574</li>
                            <li>Probability of at least one Type I error = 1 - 0.8574 = <strong>0.1426</strong></li>
                        </ul>
                        <p style="margin-top: 15px; padding: 10px; background: white; border-radius: 5px;">
                            ⚠️ The actual experimentwise error rate (14.26%) is much higher than the individual test rate (5%)!
                        </p>
                    </div>

                    <div style="background: #fff8e1; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5>Bonferroni Adjustment</h5>
                        <p>To control the experimentwise error rate at αEW:</p>
                        <p style="text-align: center; font-size: 1.2em; background: white; padding: 10px; margin: 15px 0; border-radius: 5px;">
                            Use α = αEW / C for each comparison
                        </p>
                        <p>where C = number of comparisons</p>
                        
                        <p style="margin-top: 15px;"><strong>Example:</strong> For 3 comparisons with αEW = 0.05:</p>
                        <p style="margin-left: 20px;">α = 0.05/3 = 0.017 for each test</p>
                    </div>

                    <div style="background: #e1f5fe; padding: 20px; margin: 20px 0; border-radius: 5px;">
                        <h5>Other Multiple Comparison Procedures</h5>
                        <ul>
                            <li><strong>Tukey's procedure</strong> - Controls experimentwise error rate</li>
                            <li><strong>Duncan's multiple range test</strong> - Stepwise approach</li>
                            <li><strong>Scheffé's method</strong> - Most conservative</li>
                        </ul>
                        <p style="margin-top: 15px; font-style: italic;">💡 No single procedure is "best" for all types of problems. The choice depends on the specific research context and objectives.</p>
                    </div>
                </div>
            </div>

            <div class="exercises-section" style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin: 40px 0;">
                <h3 style="color: #333; margin-bottom: 25px;">Exercises</h3>
                
                <div class="methods-exercises" style="background: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                    <h4 style="color: #3498db;">Methods</h4>
                    
                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #3498db;">
                        <h5>1. Completely Randomized Design</h5>
                        <p>The following data are from a completely randomized design:</p>
                        <table style="width: 60%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #3498db; color: white;">
                                    <th style="padding: 8px; border: 1px solid #ddd;">Treatment A</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">Treatment B</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">Treatment C</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">162</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">142</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">126</td></tr>
                                <tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">142</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">156</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">122</td></tr>
                                <tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">165</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">124</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">138</td></tr>
                                <tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">145</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">142</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">140</td></tr>
                                <tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">148</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">136</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">150</td></tr>
                                <tr><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">174</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">152</td><td style="padding: 8px; border: 1px solid #ddd; text-align: center;">128</td></tr>
                            </tbody>
                        </table>
                        <p style="margin-top: 10px;">Sample means: x̄ₐ = 156, x̄ᵦ = 142, x̄ᵩ = 134</p>
                        <p>Sample variances: s²ₐ = 164.4, s²ᵦ = 131.2, s²ᵩ = 110.4</p>
                        <p style="margin-top: 10px;">
                            a. Compute the sum of squares between treatments.<br>
                            b. Compute the mean square between treatments.<br>
                            c. Compute the sum of squares due to error.<br>
                            d. Compute the mean square due to error.<br>
                            e. Set up the ANOVA table for this problem.<br>
                            f. At α = .05, test whether the means for the three treatments are equal.
                        </p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #3498db;">
                        <h5>2. Complete the ANOVA Table</h5>
                        <p>In a completely randomized design, seven experimental units were used for each of the five levels of the factor. Complete the following ANOVA table:</p>
                        <table style="width: 80%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #3498db; color: white;">
                                    <th style="padding: 8px; border: 1px solid #ddd;">Source of Variation</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">Sum of Squares</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">Degrees of Freedom</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">Mean Square</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">F</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">p-value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Treatments</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">300</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Error</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Total</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">460</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">?</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="applications-exercises" style="background: white; padding: 20px; border-radius: 5px;">
                    <h4 style="color: #e74c3c;">Applications</h4>
                    
                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #e74c3c;">
                        <h5>7. Assembly Methods Comparison</h5>
                        <p>Three different methods for assembling a product were proposed by an industrial engineer. To investigate the number of units assembled correctly with each method, 30 employees were randomly selected and randomly assigned to the three proposed methods in such a way that each method was used by 10 workers. The analysis of variance procedure was applied to the resulting data set:</p>
                        <ul>
                            <li>SST = 10,800</li>
                            <li>SSTR = 4,560</li>
                        </ul>
                        <p style="margin-top: 10px;">
                            a. Set up the ANOVA table for this problem.<br>
                            b. Use α = .05 to test for any significant difference in the means for the three assembly methods.
                        </p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #e74c3c;">
                        <h5>8. NCP Quality Awareness Study</h5>
                        <p>Refer to the NCP data in Table 13.4. Set up the ANOVA table and test for any significant difference in the mean examination score for the three plants. Use α = .05.</p>
                    </div>
                </div>

                <div class="multiple-comparison-exercises" style="background: #e8f5e9; padding: 20px; border-radius: 5px; margin-top: 30px;">
                    <h4 style="color: #2e7d32;">13.3 Multiple Comparison Procedures</h4>
                    
                    <div style="margin: 20px 0; padding: 15px; background: white; border-left: 3px solid #4caf50;">
                        <h5>13. Completely Randomized Design</h5>
                        <p>The following data are from a completely randomized design:</p>
                        <table style="width: 80%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #4caf50; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Treatment A</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Treatment B</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Treatment C</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">32</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">44</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">33</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">43</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">36</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">44</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">35</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">26</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">46</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">36</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">32</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">48</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">40</td>
                                </tr>
                                <tr style="background: #e8f5e9;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>x̄ = 30</strong></td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>x̄ = 45</strong></td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>x̄ = 36</strong></td>
                                </tr>
                                <tr style="background: #c8e6c9;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">s² = 6.00</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">s² = 4.00</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">s² = 6.50</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style="margin-top: 15px;">
                            a. At the α = .05 level of significance, can we reject the null hypothesis that the means of the three treatments are equal?<br>
                            b. Use Fisher's LSD procedure to test whether there is a significant difference between the means for treatments A and B, treatments A and C, and treatments B and C. Use α = .05.<br>
                            c. Use Fisher's LSD procedure to develop a 95% confidence interval estimate of the difference between the means of treatments A and B.
                        </p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: white; border-left: 3px solid #4caf50;">
                        <h5>14. Three Treatments Analysis</h5>
                        <p>The following data are from a completely randomized design. In the following calculations, use α = .05.</p>
                        <table style="width: 80%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #4caf50; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Treatment 1</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Treatment 2</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Treatment 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">63</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">82</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">69</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">47</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">72</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">54</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">54</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">88</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">61</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">40</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">66</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">48</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">51</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">77</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">58</td>
                                </tr>
                                <tr style="background: #e8f5e9;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>x̄ₗ = 51</strong></td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>x̄₂ = 77</strong></td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>x̄₃ = 58</strong></td>
                                </tr>
                                <tr style="background: #c8e6c9;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">s₁² = 96.67</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">s₂² = 97.34</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">s₃² = 81.99</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style="margin-top: 15px;">
                            a. Use analysis of variance to test for a significant difference among the means of the three treatments.<br>
                            b. Use Fisher's LSD procedure to determine which means are different.
                        </p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: white; border-left: 3px solid #ff9800;">
                        <h5>15. Jacobs Chemical Company - Machine Comparison</h5>
                        <p>To test whether the mean time needed to mix a batch of material is the same for machines produced by three manufacturers, the Jacobs Chemical Company obtained the following data on the time (in minutes) needed to mix the material:</p>
                        <table style="width: 60%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #ff9800; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Manufacturer 1</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Manufacturer 2</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Manufacturer 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">20</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">28</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">20</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">26</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">26</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">19</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">24</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">31</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">23</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">22</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">27</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">22</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style="margin-top: 15px;">
                            a. Use these data to test whether the population mean times for mixing a batch of material differ for the three manufacturers. Use α = .05.<br>
                            b. At the α = .05 level of significance, use Fisher's LSD procedure to test for the equality of the means for manufacturers 1 and 3. What conclusion can you draw after carrying out this test?
                        </p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: white; border-left: 3px solid #ff9800;">
                        <h5>16. Confidence Interval for Manufacturers</h5>
                        <p>Refer to exercise 15. Use Fisher's LSD procedure to develop a 95% confidence interval estimate of the difference between the means for manufacturer 1 and manufacturer 2.</p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: white; border-left: 3px solid #ff9800;">
                        <h5>17. Corporate Ethical Values Study</h5>
                        <p>The following data are from an experiment designed to investigate the perception of corporate ethical values among individuals specializing in marketing (higher scores indicate higher ethical values):</p>
                        <table style="width: 80%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #ff9800; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Marketing Managers</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Marketing Research</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Advertising</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">7</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6</td>
                                </tr>
                                <tr style="background: #f5f5f5;">
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">6</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style="margin-top: 15px;">
                            a. Use α = .05 to test for significant differences in perception among the three groups.<br>
                            b. At the α = .05 level of significance, we can conclude that there are differences in the perceptions for marketing managers, marketing research specialists, and advertising specialists. Use the procedures in this section to determine where the differences occur. Use α = .05.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
};

const MODULE6_GOODNESS_OF_FIT_NOTES = {
    goodnessOfFit: `
        <div class="module-container">
            <h2 class="module-header">Chapter 12: Tests of Goodness of Fit, Independence, and Multiple Proportions</h2>
            
            <div class="module-intro" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px;">
                <p style="font-size: 1.1em;">In Chapters 9, 10, and 11 we introduced hypothesis testing for population parameters such as the mean and the variance. In this chapter we introduce hypothesis tests that use the chi-square (χ²) distribution. These tests can be used for qualitative variables, allowing us to perform statistical analyses for problems where the data are in nonnumeric form.</p>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p>💡 <strong>Key Applications:</strong></p>
                    <ul style="list-style: none; padding-left: 0;">
                        <li>✓ Testing if sample data fit a hypothesized distribution</li>
                        <li>✓ Testing if two categorical variables are independent</li>
                        <li>✓ Comparing proportions across multiple populations</li>
                    </ul>
                </div>
            </div>

            <h3 style="color: #3498db; margin-top: 30px;">12.3 Testing the Equality of Population Proportions for Three or More Populations</h3>
            
            <div class="concept-box" style="background: #f8f9fa; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
                <h4>📊 Research Question</h4>
                <p>In Chapter 10, we showed how to test whether the proportions of two populations are equal. We now extend this to <strong>k ≥ 3 populations</strong>.</p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p><strong>Hypotheses:</strong></p>
                    <p>H₀: p₁ = p₂ = p₃ = ... = pₖ (all proportions are equal)<br>
                    Hₐ: Not all population proportions are equal</p>
                </div>
            </div>

            <div class="example-box" style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>🚗 Example: J. D. Power Automobile Quality Study</h4>
                <p><strong>Context:</strong> J. D. Power and Associates regularly surveys car owners regarding the quality of their vehicles. The following study investigates whether the proportions of owners who would repurchase their car are equal for three popular midsize models.</p>
                
                <div style="background: white; padding: 20px; margin-top: 15px; border-radius: 5px;">
                    <h5>Research Question</h5>
                    <p>Are automobile owners equally loyal to Chevrolet Impala, Ford Fusion, and Honda Accord?</p>
                    
                    <p style="margin-top: 15px;"><strong>Sample Data (200 owners per model):</strong></p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <thead>
                            <tr style="background: #3498db; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Response</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Impala</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Fusion</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Accord</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Yes, would repurchase</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">69</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">120</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">123</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">312</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd;">No, would not repurchase</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">131</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">80</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">77</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">288</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total</strong></td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>200</strong></td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>200</strong></td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>200</strong></td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>600</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <p style="margin-top: 15px;"><strong>Sample Proportions:</strong></p>
                    <ul>
                        <li>Impala: p̂₁ = 69/200 = 0.345</li>
                        <li>Fusion: p̂₂ = 120/200 = 0.600</li>
                        <li>Accord: p̂₃ = 123/200 = 0.615</li>
                    </ul>
                </div>
            </div>

            <div class="concept-box" style="background: #fff3cd; padding: 25px; border-left: 4px solid #ffc107; margin: 20px 0;">
                <h4>📐 Computing Expected Frequencies</h4>
                <p>If H₀ is true (all proportions are equal), we can estimate the common proportion:</p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: center;">
                    <p style="font-size: 1.2em;">p̄ = Total "Yes" / Total Sample Size = 312/600 = 0.52</p>
                </div>
                
                <p style="margin-top: 20px;"><strong>Expected Frequency Formula:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p class="formula" style="font-size: 1.3em; text-align: center;">
                        eᵢⱼ = (Row i Total × Column j Total) / Sample Size
                    </p>
                    <p style="color: #666; font-style: italic; text-align: center;">(Formula 12.1)</p>
                </div>
                
                <p style="margin-top: 20px;"><strong>Calculating Expected Frequencies:</strong></p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <thead>
                        <tr style="background: #ffc107; color: #333;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Cell</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Calculation</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Expected Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Impala-Yes</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">(312 × 200) / 600</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">104</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Fusion-Yes</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">(312 × 200) / 600</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">104</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Accord-Yes</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">(312 × 200) / 600</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">104</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Impala-No</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">(288 × 200) / 600</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">96</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Fusion-No</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">(288 × 200) / 600</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">96</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Accord-No</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">(288 × 200) / 600</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">96</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="concept-box" style="background: #e8f5e9; padding: 25px; border-left: 4px solid #4caf50; margin: 20px 0;">
                <h4>🔬 Chi-Square Test Statistic</h4>
                <p>The test statistic measures how much the observed frequencies differ from the expected frequencies:</p>
                <div style="background: white; padding: 20px; border-radius: 5px; margin: 15px 0;">
                    <p class="formula" style="font-size: 1.3em; text-align: center;">
                        χ² = Σ [(fᵢⱼ - eᵢⱼ)² / eᵢⱼ]
                    </p>
                    <p style="color: #666; font-style: italic; text-align: center;">(Formula 12.2)</p>
                    <p style="margin-top: 15px;">where:</p>
                    <ul>
                        <li>fᵢⱼ = observed frequency for row i, column j</li>
                        <li>eᵢⱼ = expected frequency for row i, column j</li>
                    </ul>
                </div>
                
                <div style="background: #e1f5fe; padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p>📊 <strong>Degrees of Freedom:</strong> df = (rows - 1) × (columns - 1) = (2 - 1) × (3 - 1) = 2</p>
                </div>
            </div>

            <div class="calculation-box" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📝 Test Statistic Calculation</h4>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <thead>
                        <tr style="background: #9b59b6; color: white;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Category</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Observed (fᵢⱼ)</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Expected (eᵢⱼ)</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">(fᵢⱼ - eᵢⱼ)²/eᵢⱼ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Impala-Yes</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">69</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">104</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">11.78</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Fusion-Yes</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">120</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">104</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2.46</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Accord-Yes</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">123</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">104</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">3.47</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Impala-No</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">131</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">96</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">12.76</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Fusion-No</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">80</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">96</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2.67</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Accord-No</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">77</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">96</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">3.76</td>
                        </tr>
                        <tr style="background: #e1bee7;">
                            <td style="padding: 8px; border: 1px solid #ddd;" colspan="3"><strong>Total (χ²)</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>36.90</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="hypothesis-test" style="background: #ffebee; padding: 25px; border-left: 4px solid #f44336; margin: 30px 0;">
                <h4>🎯 Hypothesis Test Decision</h4>
                <div style="background: white; padding: 20px; border-radius: 5px;">
                    <p><strong>Test Setup:</strong></p>
                    <ul>
                        <li>H₀: p₁ = p₂ = p₃ (all proportions are equal)</li>
                        <li>Hₐ: Not all proportions are equal</li>
                        <li>Significance level: α = 0.05</li>
                        <li>Degrees of freedom: df = 2</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Critical Value:</strong> χ²₀.₀₅ = 5.991 (from chi-square table)</p>
                    
                    <p style="margin-top: 15px;"><strong>Test Statistic:</strong> χ² = 36.90</p>
                    
                    <p style="margin-top: 15px;"><strong>Decision:</strong> Since χ² = 36.90 > 5.991, <span style="color: #f44336; font-weight: bold;">REJECT H₀</span></p>
                    
                    <p style="margin-top: 15px;"><strong>Conclusion:</strong> The population proportions are not all equal. There are significant differences in customer loyalty among the three automobile models.</p>
                    
                    <div style="background: #ffebee; padding: 15px; margin-top: 15px; border-radius: 5px;">
                        <p>📊 <strong>Interpretation:</strong></p>
                        <ul>
                            <li>Impala owners show the lowest repurchase loyalty (34.5%)</li>
                            <li>Fusion (60.0%) and Accord (61.5%) owners show much higher loyalty</li>
                            <li>These differences are statistically significant</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="concept-box" style="background: #e3f2fd; padding: 25px; border-left: 4px solid #2196f3; margin: 20px 0;">
                <h4>📋 A Multiple Comparison Procedure</h4>
                <p>We have used a chi-square test to conclude that the population proportions for the three populations of automobile owners are not all equal. Thus, some differences among the population proportions exist and the study indicates that customer loyalties are not all the same for the Chevrolet Impala, Ford Fusion, and Honda Accord owners.</p>
                
                <p style="margin-top: 15px;">To identify where the differences between population proportions exist, we can begin by computing the three sample proportions as follows:</p>
                
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <h5 style="color: #2196f3;">Brand Loyalty Sample Proportions</h5>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <thead>
                            <tr style="background: #e3f2fd;">
                                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Brand</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Calculation</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Sample Proportion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Chevrolet Impala</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">69/125</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">p̄₁ = 0.5520</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd;">Ford Fusion</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">120/200</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">p̄₂ = 0.6000</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Honda Accord</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">123/175</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">p̄₃ = 0.7029</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div style="background: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                    <h5 style="color: #2196f3;">The Marascuilo Procedure</h5>
                    <p>Since the chi-square test indicated that not all population proportions are equal, it is reasonable for us to proceed by attempting to determine where differences among the population proportions exist. For this we will rely on a multiple comparison procedure that can be used to conduct statistical tests between all pairs of population proportions.</p>
                    
                    <p style="margin-top: 15px;">The <strong>Marascuilo procedure</strong> is a relatively straightforward procedure for making pairwise comparisons of all pairs of population proportions. We will demonstrate the computations required by this multiple comparison test procedure for the automobile customer loyalty study.</p>
                    
                    <h6 style="color: #1976d2; margin-top: 20px;">Step 1: Compute Absolute Pairwise Differences</h6>
                    <p>We begin by computing the absolute value of the pairwise difference between sample proportions for each pair of populations:</p>
                    
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                        <p><strong>Chevrolet Impala and Ford Fusion:</strong><br>
                        |p̄₁ - p̄₂| = |0.5520 - 0.6000| = 0.0480</p>
                        
                        <p style="margin-top: 10px;"><strong>Chevrolet Impala and Honda Accord:</strong><br>
                        |p̄₁ - p̄₃| = |0.5520 - 0.7029| = 0.1509</p>
                        
                        <p style="margin-top: 10px;"><strong>Ford Fusion and Honda Accord:</strong><br>
                        |p̄₂ - p̄₃| = |0.6000 - 0.7029| = 0.1029</p>
                    </div>
                    
                    <h6 style="color: #1976d2; margin-top: 20px;">Step 2: Compute Critical Values</h6>
                    <p>In a second step, we select a level of significance and compute the corresponding critical value for each pairwise comparison using the following expression:</p>
                    
                    <div style="background: #fff3cd; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <h5 style="color: #f57c00;">CRITICAL VALUES FOR THE MARASCUILO PAIRWISE COMPARISON PROCEDURE</h5>
                        <p style="font-size: 1.2em; text-align: center; margin: 15px 0;">
                            CV<sub>ij</sub> = √(χ²<sub>α</sub>) × √[p̄ᵢ(1 - p̄ᵢ)/nᵢ + p̄ⱼ(1 - p̄ⱼ)/nⱼ]
                        </p>
                        <p style="color: #666; font-style: italic; text-align: center;">(Formula 12.3)</p>
                        <p>where:</p>
                        <ul>
                            <li>χ²<sub>α</sub> = chi-square with a level of significance α and k - 1 degrees of freedom</li>
                            <li>p̄ᵢ and p̄ⱼ = sample proportions for populations i and j</li>
                            <li>nᵢ and nⱼ = sample sizes for populations i and j</li>
                        </ul>
                    </div>
                    
                    <p>Using the chi-square distribution, k - 1 = 3 - 1 = 2 degrees of freedom, and a 0.05 level of significance, we have χ²<sub>0.05</sub> = 5.991. Now using the sample proportions p̄₁ = 0.5520, p̄₂ = 0.6000, and p̄₃ = 0.7029, the critical values for the three pairwise comparison tests are:</p>
                    
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                        <p><strong>Chevrolet Impala and Ford Fusion:</strong><br>
                        CV₁₂ = √5.991 × √[0.5520(1 - 0.5520)/125 + 0.6000(1 - 0.6000)/200]<br>
                        CV₁₂ = 0.1380</p>
                        
                        <p style="margin-top: 10px;"><strong>Chevrolet Impala and Honda Accord:</strong><br>
                        CV₁₃ = √5.991 × √[0.5520(1 - 0.5520)/125 + 0.7029(1 - 0.7029)/175]<br>
                        CV₁₃ = 0.1379</p>
                        
                        <p style="margin-top: 10px;"><strong>Ford Fusion and Honda Accord:</strong><br>
                        CV₂₃ = √5.991 × √[0.6000(1 - 0.6000)/200 + 0.7029(1 - 0.7029)/175]<br>
                        CV₂₃ = 0.1198</p>
                    </div>
                    
                    <h6 style="color: #1976d2; margin-top: 20px;">Step 3: Compare and Draw Conclusions</h6>
                    <p>If the absolute value of any pairwise sample proportion difference exceeds its corresponding critical value, CV<sub>ij</sub>, the pairwise difference is significant at the 0.05 level of significance and we can conclude that the two corresponding population proportions are different.</p>
                </div>
                
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 20px;">
                    <h5 style="color: #2196f3;">TABLE 12.5: PAIRWISE COMPARISON TESTS FOR THE AUTOMOBILE BRAND LOYALTY STUDY</h5>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                        <thead>
                            <tr style="background: #2196f3; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Pairwise Comparison</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">|p̄ᵢ - p̄ⱼ|</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">CV<sub>ij</sub></th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Significant if |p̄ᵢ - p̄ⱼ| > CV<sub>ij</sub></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Chevrolet Impala vs. Ford Fusion</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.0480</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.1380</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #757575;">Not significant</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd;">Ford Fusion vs. Honda Accord</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.1029</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.1198</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #757575;">Not significant</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Chevrolet Impala vs. Honda Accord</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.1509</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.1379</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #f44336; font-weight: bold;">Significant</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div style="background: #e8f5e9; padding: 20px; border-radius: 5px; margin-top: 20px;">
                    <h5 style="color: #2e7d32;">📊 Conclusions from the Pairwise Comparison Procedure</h5>
                    <p>The conclusion from the pairwise comparison procedure is that the only significant difference in customer loyalty occurs between the Chevrolet Impala and the Honda Accord.</p>
                    
                    <ul style="margin-top: 15px;">
                        <li>Our sample results indicate that the Honda Accord had a greater population proportion of owners who say they are likely to repurchase the Honda Accord.</li>
                        <li>Thus, we can conclude that the <strong>Honda Accord (p̄₃ = 0.7029) has greater customer loyalty than the Chevrolet Impala (p̄₁ = 0.5520)</strong>.</li>
                        <li>The results of the study are inconclusive as to the comparative loyalty of the Ford Fusion.</li>
                        <li>While the Ford Fusion did not show significantly different results when compared to the Chevrolet Impala or Honda Accord, a larger sample may have revealed a significant difference between Ford Fusion and the other two automobiles in terms of customer loyalty.</li>
                    </ul>
                    
                    <p style="margin-top: 15px; font-style: italic;">It is not uncommon for a multiple comparison procedure to show significance for some pairwise comparisons and yet not show significance for other pairwise comparisons in the study.</p>
                </div>
            </div>
            
            <div class="notes-comments" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📝 NOTES AND COMMENTS</h4>
                
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <p><strong>1.</strong> In Chapter 10, we used the standard normal distribution and the z test statistic to conduct hypothesis tests about the proportions of two populations. However, the chi-square test introduced in this section can also be used to conduct the hypothesis test that the proportions of two populations are equal. The results will be the same under both test procedures and the value of the test statistic χ² will be equal to the square of the value of the test statistic z.</p>
                    
                    <p style="margin-top: 10px;">An advantage of the methodology in Chapter 10 is that it can be used for either a one-tailed or a two-tailed hypothesis about the proportions of two populations whereas the chi-square test in this section can be used only for two-tailed tests.</p>
                </div>
                
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <p><strong>2.</strong> Each of the k populations in this section had two response outcomes, Yes or No. In effect, each population had a binomial distribution with parameter p = the population proportion of Yes responses.</p>
                    
                    <p style="margin-top: 10px;">An extension of the chi-square procedure in this section applies when each of the k populations has three or more possible responses. In this case, each population is said to have a <strong>multinomial distribution</strong>. The chi-square calculations for the expected frequencies, e<sub>ij</sub>, and the test statistic, χ², are the same as shown in expressions (12.1) and (12.2).</p>
                    
                    <p style="margin-top: 10px;">The only difference is that the null hypothesis assumes that the multinomial distribution for the response variable is the same for all populations. With r responses for each of the k populations, the chi-square test statistic has <strong>(r - 1)(k - 1) degrees of freedom</strong>.</p>
                </div>
            </div>

            <div class="summary-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📚 Summary: Testing Multiple Population Proportions</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li>✅ Use chi-square test to compare k ≥ 3 population proportions</li>
                    <li>✅ Calculate expected frequencies using row and column totals</li>
                    <li>✅ Test statistic: χ² = Σ[(observed - expected)²/expected]</li>
                    <li>✅ Degrees of freedom: (rows - 1) × (columns - 1)</li>
                    <li>✅ If H₀ is rejected, use multiple comparison procedures to identify which proportions differ</li>
                    <li>✅ Always verify that expected frequencies are ≥ 5 for test validity</li>
                </ul>
            </div>

            <div class="practical-note" style="background: #fff3cd; padding: 20px; border-left: 4px solid #ffc107; margin: 20px 0;">
                <h4>⚠️ Important Assumptions</h4>
                <ul>
                    <li><strong>Independence:</strong> Observations must be independent</li>
                    <li><strong>Sample Size:</strong> All expected frequencies should be at least 5</li>
                    <li><strong>Random Sampling:</strong> Data should come from random samples</li>
                    <li><strong>Fixed Totals:</strong> Row or column totals should be fixed by design</li>
                </ul>
            </div>

            <div class="exercises-section" style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color: #1976d2;">12.1 Exercises: Testing the Equality of Population Proportions</h3>
                
                <div class="methods-section" style="margin-top: 25px;">
                    <h4 style="color: #e74c3c; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">Methods</h4>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3498db;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #3498db; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">1</span>
                            <span style="background: #e8f5e9; color: #2e7d32; padding: 3px 8px; border-radius: 3px; font-size: 0.9em; font-weight: bold;">SELF TEST</span>
                        </div>
                        <p><strong>Problem:</strong> Use the sample data below to test the hypotheses</p>
                        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                            <p>H₀: p₁ = p₂ = p₃<br>
                            Hₐ: Not all population proportions are equal</p>
                        </div>
                        <p>where pᵢ is the population proportion of Yes responses for population i. Using a .05 level of significance, what is the p-value and what is your conclusion?</p>
                        
                        <table style="width: 80%; margin: 20px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #3498db; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Response</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Population 1</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Population 2</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Population 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Yes</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">150</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">150</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">96</td>
                                </tr>
                                <tr style="background: #f0f0f0;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">No</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">100</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">150</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">104</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3498db;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #3498db; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">2</span>
                            <span style="background: #e8f5e9; color: #2e7d32; padding: 3px 8px; border-radius: 3px; font-size: 0.9em; font-weight: bold;">SELF TEST</span>
                        </div>
                        <p><strong>Problem:</strong> Reconsider the observed frequencies in exercise 1</p>
                        <ol style="list-style-type: lower-alpha; margin-left: 20px;">
                            <li>Compute the sample proportion for each population.</li>
                            <li>Use the multiple comparison procedure to determine which population proportions differ significantly. Use a .05 level of significance.</li>
                        </ol>
                    </div>
                </div>
                
                <div class="applications-section" style="margin-top: 35px;">
                    <h4 style="color: #27ae60; border-bottom: 2px solid #27ae60; padding-bottom: 10px;">Applications</h4>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #27ae60;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #27ae60; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">3</span>
                        </div>
                        <p><strong>Problem:</strong> The sample data below represent the number of late and on time flights for Delta, United, and US Airways (Bureau of Transportation Statistics, March 2012).</p>
                        
                        <table style="width: 80%; margin: 20px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #27ae60; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Flight</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Delta</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">United</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">US Airways</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Late</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">39</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">51</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">56</td>
                                </tr>
                                <tr style="background: #f0f0f0;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">On Time</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">261</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">249</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">344</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <ol style="list-style-type: lower-alpha; margin-left: 20px; margin-top: 15px;">
                            <li>Formulate the hypotheses for a test that will determine if the population proportion of late flights is the same for all three airlines.</li>
                            <li>Conduct the hypothesis test with a .05 level of significance. What is the p-value and what is your conclusion?</li>
                            <li>Compute the sample proportion of late flights for each airline. What is the overall proportion of late flights for the three airlines?</li>
                        </ol>
                    </div>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #27ae60;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #27ae60; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">4</span>
                            <span style="background: #e8f5e9; color: #2e7d32; padding: 3px 8px; border-radius: 3px; font-size: 0.9em; font-weight: bold;">SELF TEST</span>
                        </div>
                        <p style="color: #666; font-style: italic;">[Exercise 4 content to be added]</p>
                    </div>
                </div>
                
                <div class="solution-hints" style="background: #e8f5e9; padding: 20px; border-radius: 5px; margin-top: 30px;">
                    <h5 style="color: #2e7d32;">💡 Solution Hints</h5>
                    <ul style="margin-top: 15px;">
                        <li><strong>Exercise 1:</strong> Calculate expected frequencies using formula (12.1), then compute χ² using formula (12.2). Compare with critical value from chi-square table with df = 2.</li>
                        <li><strong>Exercise 2:</strong> Sample proportions = Yes/(Yes+No) for each population. Use Marascuilo procedure with critical values from formula (12.3).</li>
                        <li><strong>Exercise 3:</strong> This is a real-world application of testing equality of proportions. Calculate the proportion of late flights for each airline and test if they're significantly different.</li>
                    </ul>
                </div>
            </div>

            <div class="section-box" style="background: linear-gradient(135deg, #9c27b0 0%, #673ab7 100%); color: white; padding: 30px; border-radius: 15px; margin: 40px 0;">
                <h3 style="font-size: 2em; margin-bottom: 20px;">12.3 Goodness of Fit Test</h3>
                <p style="font-size: 1.2em; margin-bottom: 15px;">In this section we consider the case in which each element of a population is assigned to one and only one of several classes or categories. Such a population is a <strong>multinomial population</strong>.</p>
                <div style="background: rgba(255,255,255,0.1); padding: 20px; margin-top: 20px; border-radius: 10px;">
                    <p><strong>Definition:</strong> In a multinomial population, each element belongs to exactly one of k categories, and we want to test whether the population proportions match hypothesized values.</p>
                </div>
            </div>

            <div class="concept-box" style="background: #f3e5f5; padding: 25px; border-left: 4px solid #9c27b0; margin: 20px 0;">
                <h4>🎯 Multinomial Probability Distribution</h4>
                <p>A <strong>multinomial probability distribution</strong> extends the binomial distribution to situations with more than two possible outcomes:</p>
                <ul style="margin-top: 15px;">
                    <li>The experiment consists of n identical trials</li>
                    <li>k possible outcomes for each trial (instead of just 2 in binomial)</li>
                    <li>Probabilities p₁, p₂, ..., pₖ remain constant across trials</li>
                    <li>Trials are independent</li>
                    <li>We observe the count in each category: O₁, O₂, ..., Oₖ</li>
                </ul>
            </div>

            <div class="hypothesis-framework" style="background: #e8f5e9; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📊 Goodness of Fit Test Framework</h4>
                
                <div style="background: white; padding: 20px; border-radius: 5px; margin: 15px 0;">
                    <h5>Hypotheses:</h5>
                    <p><strong>H₀:</strong> The population follows the hypothesized distribution</p>
                    <p style="margin-left: 30px;">p₁ = p₁₀, p₂ = p₂₀, ..., pₖ = pₖ₀</p>
                    <p><strong>Hₐ:</strong> The population does not follow the hypothesized distribution</p>
                    <p style="margin-left: 30px;">At least one proportion differs from its hypothesized value</p>
                </div>

                <div style="background: white; padding: 20px; border-radius: 5px; margin: 15px 0;">
                    <h5>Test Statistic:</h5>
                    <p class="formula" style="font-size: 1.3em; text-align: center; margin: 15px 0;">
                        χ² = Σ[(Oᵢ - eᵢ)²/eᵢ]
                    </p>
                    <p>Where:</p>
                    <ul>
                        <li>Oᵢ = observed frequency for category i</li>
                        <li>eᵢ = expected frequency for category i = n × pᵢ₀</li>
                        <li>Degrees of freedom = k - 1</li>
                    </ul>
                </div>

                <div style="background: #fff3cd; padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p>⚠️ <strong>Note:</strong> The test is always upper-tailed because we reject H₀ only for large values of χ²</p>
                </div>
            </div>

            <div class="example-box" style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📚 Example: Scott Marketing Research</h4>
                <p>A regional manager believes market shares for a product are:</p>
                <ul>
                    <li>Company A: 30%</li>
                    <li>Company B: 50%</li>
                    <li>Company C: 20%</li>
                </ul>
                
                <p style="margin-top: 15px;"><strong>Sample of 200 customers showed:</strong></p>
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <thead>
                        <tr style="background: #2196f3; color: white;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Company</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Observed (Oᵢ)</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Expected (eᵢ)</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">(Oᵢ - eᵢ)²/eᵢ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">A</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">48</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">60</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2.40</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">B</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">98</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">100</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.04</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">C</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">54</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">40</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4.90</td>
                        </tr>
                        <tr style="background: #e3f2fd; font-weight: bold;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Total</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">200</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">200</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">χ² = 7.34</td>
                        </tr>
                    </tbody>
                </table>

                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h5>Hypothesis Test at α = 0.05:</h5>
                    <p>• Degrees of freedom = k - 1 = 3 - 1 = 2</p>
                    <p>• Critical value: χ²₀.₀₅ = 5.991</p>
                    <p>• Test statistic: χ² = 7.34</p>
                    <p>• <strong>Decision:</strong> Since 7.34 > 5.991, reject H₀</p>
                    <p>• <strong>Conclusion:</strong> The actual market shares differ from the manager's belief</p>
                </div>
            </div>

            <div class="concept-box" style="background: #fff8e1; padding: 25px; border-left: 4px solid #ffc107; margin: 30px 0;">
                <h4>📈 Normal Distribution Goodness of Fit Test</h4>
                <p>We can also use the chi-square goodness of fit test to determine whether a sample comes from a normal distribution:</p>
                
                <ol style="margin-top: 15px;">
                    <li><strong>Estimate parameters:</strong> If μ and σ are unknown, estimate them from the sample using x̄ and s</li>
                    <li><strong>Create intervals:</strong> Divide the range into k intervals (usually 5-10)</li>
                    <li><strong>Calculate expected frequencies:</strong> Use the normal distribution to find the probability for each interval, then multiply by n</li>
                    <li><strong>Apply chi-square test:</strong> Compare observed vs expected frequencies</li>
                    <li><strong>Degrees of freedom:</strong> df = k - 1 - m, where m is the number of parameters estimated (usually 2 for μ and σ)</li>
                </ol>

                <div style="background: #ffebcc; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <p>⚠️ <strong>Important:</strong> Each expected frequency should be at least 5. Combine adjacent categories if necessary.</p>
                </div>
            </div>

            <div class="example-box" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📊 Example: Chemline Job Applicant Test Scores</h4>
                <p>Chemline wants to determine if scores on a standardized job applicant test are normally distributed. Sample of 50 applicants:</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <thead>
                        <tr style="background: #9c27b0; color: white;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Test Score Range</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Observed Frequency</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Normal Probability</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Expected Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Less than 20</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.0968</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4.84</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">20 to 29</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">11</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.2420</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">12.10</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">30 to 39</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">18</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.3224</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">16.12</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">40 to 49</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">11</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.2420</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">12.10</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">50 or more</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0.0968</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4.84</td>
                        </tr>
                    </tbody>
                </table>

                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h5>Sample Statistics:</h5>
                    <p>• Sample mean: x̄ = 33.8</p>
                    <p>• Sample standard deviation: s = 10.8</p>
                    <p>• Sample size: n = 50</p>
                    
                    <h5 style="margin-top: 15px;">Chi-Square Test Calculation:</h5>
                    <p>χ² = (5-4.84)²/4.84 + (11-12.10)²/12.10 + (18-16.12)²/16.12 + (11-12.10)²/12.10 + (5-4.84)²/4.84</p>
                    <p>χ² = 0.005 + 0.100 + 0.219 + 0.100 + 0.005 = <strong>0.429</strong></p>
                    
                    <h5 style="margin-top: 15px;">Hypothesis Test at α = 0.10:</h5>
                    <p>• Degrees of freedom = k - 1 - m = 5 - 1 - 2 = 2 (we estimated μ and σ)</p>
                    <p>• Critical value: χ²₀.₁₀ = 4.605</p>
                    <p>• Test statistic: χ² = 0.429</p>
                    <p>• <strong>Decision:</strong> Since 0.429 < 4.605, do not reject H₀</p>
                    <p>• <strong>Conclusion:</strong> The test scores appear to follow a normal distribution</p>
                </div>
            </div>

            <div class="exercises-section" style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin: 40px 0;">
                <h3 style="color: #673ab7; margin-bottom: 25px;">12.3 Exercises</h3>
                
                <div class="methods-section" style="background: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                    <h4 style="color: #9c27b0;">Methods</h4>
                    
                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #9c27b0;">
                        <h5>17. Consumer Product Preferences</h5>
                        <p>During the first 13 weeks of the television season, the Saturday evening 8:00 P.M. to 9:00 P.M. audience proportions were recorded as ABC 29%, CBS 28%, NBC 25%, and independents 18%. A sample of 300 homes two weeks after a Saturday night schedule revision yielded the following viewing audience data: ABC 95 homes, CBS 70 homes, NBC 89 homes, and independents 46 homes. Test with α = .05 to determine whether the viewing audience proportions changed.</p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #9c27b0;">
                        <h5>18. Multinomial Distribution Test</h5>
                        <p>A random sample of 250 individuals is asked about their preferred method of obtaining news. The hypothesized distribution is: Television 40%, Internet 35%, Newspaper 15%, Radio 10%. The observed frequencies are: Television 105, Internet 95, Newspaper 30, Radio 20. At the 0.01 level of significance, test whether the sample data support the hypothesized distribution.</p>
                    </div>
                </div>

                <div class="applications-section" style="background: white; padding: 20px; border-radius: 5px;">
                    <h4 style="color: #673ab7;">Applications</h4>
                    
                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #673ab7;">
                        <h5>19. M&M Color Distribution</h5>
                        <p>Mars, Inc. manufactures M&M's, one of the most popular candy treats in the world. The milk chocolate candies come in a variety of colors including blue, brown, green, orange, red, and yellow. The overall percentages for the colors are 24% blue, 13% brown, 20% green, 16% orange, 13% red, and 14% yellow. In a sampling study, several bags of M&M milk chocolates were opened and the following color counts were obtained: blue 105, brown 72, green 89, orange 84, red 70, yellow 80. Use a .05 level of significance and the sample data to test whether the percentages reported by Mars are accurate.</p>
                    </div>

                    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 3px solid #673ab7;">
                        <h5>20. Normal Distribution Test for Manufacturing</h5>
                        <p>A manufacturing process produces items with weights that management believes follow a normal distribution with mean 100 grams and standard deviation 15 grams. A sample of 200 items yielded the following frequency distribution:</p>
                        <table style="width: 60%; margin: 10px auto; border-collapse: collapse;">
                            <tr style="background: #673ab7; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Weight Range</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Less than 70</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">8</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd;">70-85</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">28</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">85-100</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">68</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd;">100-115</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">64</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">115-130</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">24</td>
                            </tr>
                            <tr style="background: #f0f0f0;">
                                <td style="padding: 8px; border: 1px solid #ddd;">More than 130</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">8</td>
                            </tr>
                        </table>
                        <p style="margin-top: 10px;">Use α = 0.05 to test whether the weights follow a normal distribution with the specified parameters.</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

const MODULE6_INDEPENDENCE_NOTES = {
    independence: `
        <div class="module-container">
            <h2 class="module-header">12.2 Test of Independence</h2>
            
            <div class="module-intro" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px;">
                <p style="font-size: 1.1em;">An important application of a chi-square test involves using sample data to test for the independence of two categorical variables. For this test we take one sample from a population and record the observations for two categorical variables. We will summarize the data by counting the number of responses for each combination of a category for variable 1 and a category for variable 2.</p>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; margin-top: 15px; border-radius: 5px;">
                    <p><strong>The null hypothesis for this test is that the two categorical variables are independent.</strong> Thus, the test is referred to as a test of independence.</p>
                </div>
            </div>

            <div class="example-box" style="background: #e3f2fd; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color: #1976d2;">🍺 Example: Beer Preference Study</h3>
                <p>A beer industry association conducts a survey to determine the preferences of beer drinkers for light, regular, and dark beers. A sample of 200 beer drinkers is taken with each person in the sample asked to indicate a preference for one of the three types of beers: light, regular, or dark. At the end of the survey questionnaire, the respondent is asked to provide information on a variety of demographics including gender: male or female.</p>
                
                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h4>Research Question</h4>
                    <p style="font-size: 1.05em; color: #1976d2;"><strong>Is preference for the three types of beer independent of the gender of the beer drinker?</strong></p>
                    
                    <p style="margin-top: 15px;">If the two categorical variables, beer preference and gender, are independent:</p>
                    <ul>
                        <li>Beer preference does not depend on gender</li>
                        <li>The preference for light, regular, and dark beer can be expected to be the same for male and female beer drinkers</li>
                    </ul>
                    
                    <p style="margin-top: 15px;">However, if the test conclusion is that the two categorical variables are not independent:</p>
                    <ul>
                        <li>We have evidence that beer preference is associated or dependent upon the gender of the beer drinker</li>
                        <li>We can expect beer preferences to differ for male and female beer drinkers</li>
                        <li>A beer manufacturer could use this information to customize its promotions and advertising for different target markets</li>
                    </ul>
                </div>
            </div>

            <div class="concept-box" style="background: #f8f9fa; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
                <h4>📊 Hypotheses for Test of Independence</h4>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p style="font-size: 1.2em;">H₀: Beer preference is independent of gender<br>
                    Hₐ: Beer preference is not independent of gender</p>
                </div>
                <p style="margin-top: 15px;">The sample data will be summarized in a two-way table with:</p>
                <ul>
                    <li><strong>Row variable:</strong> Beer preference (light, regular, dark) - the response variable</li>
                    <li><strong>Column variable:</strong> Gender (male, female) - the explanatory variable</li>
                </ul>
            </div>

            <div class="data-section" style="background: #fff3cd; padding: 25px; border-left: 4px solid #ffc107; margin: 30px 0;">
                <h4>TABLE 12.6: SAMPLE RESULTS FOR BEER PREFERENCES OF MALE AND FEMALE BEER DRINKERS (OBSERVED FREQUENCIES)</h4>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <thead>
                        <tr style="background: #ffc107;">
                            <th style="padding: 10px; border: 1px solid #ddd;" rowspan="2">Beer Preference</th>
                            <th style="padding: 10px; border: 1px solid #ddd;" colspan="2">Gender</th>
                            <th style="padding: 10px; border: 1px solid #ddd;" rowspan="2">Total</th>
                        </tr>
                        <tr style="background: #ffc107;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Male</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Female</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Light</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">51</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">39</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>90</strong></td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Regular</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">56</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">21</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>77</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Dark</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">25</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">8</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>33</strong></td>
                        </tr>
                        <tr style="background: #ffebcc;">
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>132</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>68</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>200</strong></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="background: white; padding: 15px; margin-top: 20px; border-radius: 5px;">
                    <h5>Initial Data Insights</h5>
                    <p><strong>Gender Distribution:</strong></p>
                    <ul>
                        <li>Male: 132/200 = 0.66 or 66% of beer drinkers</li>
                        <li>Female: 68/200 = 0.34 or 34% of beer drinkers</li>
                        <li>Male beer drinkers outnumber female beer drinkers approximately 2 to 1</li>
                    </ul>
                    
                    <p style="margin-top: 15px;"><strong>Overall Beer Preferences:</strong></p>
                    <ul>
                        <li>Prefer Light Beer: 90/200 = 0.450 or 45.0%</li>
                        <li>Prefer Regular Beer: 77/200 = 0.385 or 38.5%</li>
                        <li>Prefer Dark Beer: 33/200 = 0.165 or 16.5%</li>
                    </ul>
                </div>
            </div>

            <div class="concept-box" style="background: #e8f5e9; padding: 25px; border-left: 4px solid #4caf50; margin: 20px 0;">
                <h4>📐 Computing Expected Frequencies</h4>
                <p>The computation of expected frequencies follows the same logic and formula used in Section 12.1. The expected frequency for row i and column j is:</p>
                
                <div style="background: white; padding: 20px; border-radius: 5px; margin: 15px 0;">
                    <p class="formula" style="font-size: 1.3em; text-align: center;">
                        e<sub>ij</sub> = (Row i Total)(Column j Total) / Sample Size
                    </p>
                    <p style="color: #666; font-style: italic; text-align: center;">(Formula 12.4)</p>
                </div>
                
                <p style="margin-top: 20px;">For example: e₁₁ = (90)(132)/200 = 59.40 is the expected frequency for male beer drinkers who would prefer light beer if beer preference is independent of gender.</p>
                
                <h5 style="margin-top: 25px;">TABLE 12.7: EXPECTED FREQUENCIES IF BEER PREFERENCE IS INDEPENDENT OF GENDER</h5>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <thead>
                        <tr style="background: #4caf50; color: white;">
                            <th style="padding: 10px; border: 1px solid #ddd;" rowspan="2">Beer Preference</th>
                            <th style="padding: 10px; border: 1px solid #ddd;" colspan="2">Gender</th>
                            <th style="padding: 10px; border: 1px solid #ddd;" rowspan="2">Total</th>
                        </tr>
                        <tr style="background: #4caf50; color: white;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Male</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Female</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Light</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">59.40</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30.60</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">90</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Regular</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">50.82</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">26.18</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">77</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Dark</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">21.78</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">11.22</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">33</td>
                        </tr>
                        <tr style="background: #e8f5e9;">
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>132</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>68</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;"><strong>200</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="calculation-box" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📝 Chi-Square Test Statistic Calculation</h4>
                <p>Following the chi-square test procedure, we compute the test statistic using:</p>
                
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p class="formula" style="font-size: 1.3em; text-align: center;">
                        χ² = Σ Σ [(f<sub>ij</sub> - e<sub>ij</sub>)² / e<sub>ij</sub>]
                    </p>
                    <p style="color: #666; font-style: italic; text-align: center;">(Formula 12.5)</p>
                </div>
                
                <p>With r rows and c columns in the table, the chi-square distribution will have <strong>(r - 1)(c - 1)</strong> degrees of freedom provided the expected frequency is at least 5 for each cell.</p>
                <p>In this application: df = (3 - 1)(2 - 1) = 2</p>
                
                <h5 style="margin-top: 25px;">TABLE 12.8: COMPUTATION OF THE CHI-SQUARE TEST STATISTIC</h5>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.95em;">
                    <thead>
                        <tr style="background: #9b59b6; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">Beer Preference</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Gender</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Observed (f<sub>ij</sub>)</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Expected (e<sub>ij</sub>)</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Difference</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Squared Diff.</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">(f-e)²/e</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 6px; border: 1px solid #ddd;">Light</td>
                            <td style="padding: 6px; border: 1px solid #ddd;">Male</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">51</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">59.40</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">-8.40</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">70.56</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">1.19</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 6px; border: 1px solid #ddd;">Light</td>
                            <td style="padding: 6px; border: 1px solid #ddd;">Female</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">39</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">30.60</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">8.40</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">70.56</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">2.31</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px; border: 1px solid #ddd;">Regular</td>
                            <td style="padding: 6px; border: 1px solid #ddd;">Male</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">56</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">50.82</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">5.18</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">26.83</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">0.53</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 6px; border: 1px solid #ddd;">Regular</td>
                            <td style="padding: 6px; border: 1px solid #ddd;">Female</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">21</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">26.18</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">-5.18</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">26.83</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">1.02</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px; border: 1px solid #ddd;">Dark</td>
                            <td style="padding: 6px; border: 1px solid #ddd;">Male</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">51</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">21.78</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">3.22</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">10.37</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">0.48</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 6px; border: 1px solid #ddd;">Dark</td>
                            <td style="padding: 6px; border: 1px solid #ddd;">Female</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">8</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">11.22</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">-3.22</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">10.37</td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;">0.92</td>
                        </tr>
                        <tr style="background: #e1bee7;">
                            <td style="padding: 6px; border: 1px solid #ddd;" colspan="6"><strong>Total</strong></td>
                            <td style="padding: 6px; border: 1px solid #ddd; text-align: center;"><strong>χ² = 6.45</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="hypothesis-test" style="background: #ffebee; padding: 25px; border-left: 4px solid #f44336; margin: 30px 0;">
                <h4>🎯 Hypothesis Test Decision</h4>
                <div style="background: white; padding: 20px; border-radius: 5px;">
                    <p>Using the chi-square distribution table with 2 degrees of freedom:</p>
                    
                    <table style="width: 80%; margin: 15px auto; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f44336; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Area in Upper Tail</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.10</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.05</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.025</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.01</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">.005</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;"><strong>χ² Value (2 df)</strong></td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4.605</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">5.991</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">7.378</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">9.210</td>
                                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">10.597</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <p style="margin-top: 20px;"><strong>Test Statistic:</strong> χ² = 6.45</p>
                    <p>The upper tail area at χ² = 6.45 is between .05 and .025</p>
                    <p><strong>p-value:</strong> Between .025 and .05 (exact value = 0.0398)</p>
                    
                    <div style="background: #ffebee; padding: 15px; margin-top: 15px; border-radius: 5px;">
                        <p><strong>Decision:</strong> With p-value = 0.0398 < α = 0.05, <span style="color: #f44336; font-weight: bold;">REJECT H₀</span></p>
                        <p><strong>Conclusion:</strong> Beer preference is NOT independent of gender. Beer preference can be expected to differ for male and female beer drinkers.</p>
                    </div>
                    
                    <p style="margin-top: 20px;"><strong>Alternative: Critical Value Approach</strong></p>
                    <p>With α = 0.05 and 2 degrees of freedom, χ²<sub>0.05</sub> = 5.991</p>
                    <p>Rejection rule: Reject H₀ if χ² > 5.991</p>
                    <p>Since 6.45 > 5.991, we reject H₀</p>
                </div>
            </div>

            <div class="analysis-section" style="background: #e8f5e9; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📊 Nature of the Association</h4>
                <p>To gain additional insight into the nature of the association between beer preference and gender, we compute the conditional probabilities:</p>
                
                <table style="width: 80%; margin: 20px auto; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #4caf50; color: white;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Beer Preference</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Male</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Female</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Light</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">51/132 = 38.64%</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">39/68 = 57.35%</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Regular</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">56/132 = 42.42%</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">21/68 = 30.88%</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Dark</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">25/132 = 18.94%</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">8/68 = 11.76%</td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 5px;">
                    <h5>Key Observations:</h5>
                    <ul>
                        <li><strong>Female beer drinkers:</strong> Highest preference is for light beer at 57.35%</li>
                        <li><strong>Male beer drinkers:</strong> Regular beer is most frequently preferred at 42.42%</li>
                        <li>Female beer drinkers have a higher preference for light beer than males</li>
                        <li>Male beer drinkers have a higher preference for both regular beer and dark beer</li>
                    </ul>
                    
                    <p style="margin-top: 15px; font-style: italic;">Data visualization through bar charts is helpful in gaining insight as to how two categorical variables are associated.</p>
                </div>
            </div>

            <div class="procedure-summary" style="background: #f3e5f5; padding: 25px; border-radius: 10px; margin: 30px 0;">
                <h4>📋 CHI-SQUARE TEST FOR INDEPENDENCE OF TWO CATEGORICAL VARIABLES</h4>
                
                <ol style="line-height: 1.8;">
                    <li><strong>State the null and alternative hypotheses:</strong>
                        <div style="background: white; padding: 10px; margin: 10px 0; border-radius: 5px;">
                            H₀: The two categorical variables are independent<br>
                            Hₐ: The two categorical variables are not independent
                        </div>
                    </li>
                    
                    <li><strong>Select a random sample</strong> from the population and collect data for both variables for every element in the sample. Record the observed frequencies, f<sub>ij</sub>, in a table with r rows and c columns.</li>
                    
                    <li><strong>Assume the null hypothesis is true</strong> and compute the expected frequencies, e<sub>ij</sub>
                        <div style="background: #fff3cd; padding: 10px; margin: 10px 0; border-radius: 5px;">
                            ⚠️ The expected frequencies must all be 5 or more for the chi-square test to be valid.
                        </div>
                    </li>
                    
                    <li><strong>If the expected frequency</strong>, e<sub>ij</sub>, is 5 or more for each cell, compute the test statistic:
                        <div style="background: white; padding: 10px; margin: 10px 0; border-radius: 5px; text-align: center;">
                            χ² = Σ Σ [(f<sub>ij</sub> - e<sub>ij</sub>)² / e<sub>ij</sub>]
                        </div>
                        <p style="font-style: italic;">This chi-square test is a one-tailed test with rejection of H₀ occurring in the upper tail of a chi-square distribution with (r - 1)(c - 1) degrees of freedom.</p>
                    </li>
                    
                    <li><strong>Rejection rule:</strong>
                        <div style="background: white; padding: 15px; margin: 10px 0; border-radius: 5px;">
                            <p><strong>p-value approach:</strong> Reject H₀ if p-value ≤ α</p>
                            <p><strong>Critical value approach:</strong> Reject H₀ if χ² ≥ χ²<sub>α</sub></p>
                            <p style="font-size: 0.9em; color: #666;">where the chi-square distribution has (r - 1)(c - 1) degrees of freedom and α is the level of significance for the test.</p>
                        </div>
                    </li>
                </ol>
                
                <p style="margin-top: 20px; font-style: italic;">Finally, if the null hypothesis of independence is rejected, summarizing the probabilities will help the analyst determine where the association or dependence exists for the two categorical variables.</p>
            </div>

            <div class="exercises-section" style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin: 30px 0;">
                <h3 style="color: #1976d2;">12.2 Exercises: Test of Independence</h3>
                
                <div class="methods-section" style="margin-top: 25px;">
                    <h4 style="color: #e74c3c; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">Methods</h4>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3498db;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #3498db; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">9</span>
                            <span style="background: #e8f5e9; color: #2e7d32; padding: 3px 8px; border-radius: 3px; font-size: 0.9em; font-weight: bold;">SELF TEST</span>
                        </div>
                        <p>The following table contains observed frequencies for a sample of 200. Test for independence of the row and column variables using α = .05.</p>
                        
                        <table style="width: 60%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #3498db; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Row Variable</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">A</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">B</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">C</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">P</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">20</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">44</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">50</td>
                                </tr>
                                <tr style="background: #f0f0f0;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">Q</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">26</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3498db;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #3498db; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">10</span>
                            <span style="background: #e8f5e9; color: #2e7d32; padding: 3px 8px; border-radius: 3px; font-size: 0.9em; font-weight: bold;">SELF TEST</span>
                        </div>
                        <p>The following table contains observed frequencies for a sample of 240. Test for independence of the row and column variables using α = .05.</p>
                        
                        <table style="width: 60%; margin: 15px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #3498db; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Row Variable</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">A</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">B</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">C</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">P</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">20</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">20</td>
                                </tr>
                                <tr style="background: #f0f0f0;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">Q</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">60</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">25</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">R</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">10</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">15</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="applications-section" style="margin-top: 35px;">
                    <h4 style="color: #27ae60; border-bottom: 2px solid #27ae60; padding-bottom: 10px;">Applications</h4>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #27ae60;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #27ae60; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">11</span>
                        </div>
                        <p>A Bloomberg Businessweek subscriber study asked, "In the past 12 months, when traveling for business, what type of airline ticket did you purchase most often?" A second question asked if the type of airline ticket purchased most often was for domestic or international travel. Sample data obtained are shown in the following table.</p>
                        
                        <table style="width: 70%; margin: 20px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #27ae60; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Type of Ticket</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Domestic</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">International</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">First class</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">29</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">22</td>
                                </tr>
                                <tr style="background: #f0f0f0;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">Business class</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">95</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">121</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Economy class</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">518</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">135</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <ol style="list-style-type: lower-alpha; margin-left: 20px; margin-top: 15px;">
                            <li>Using a .05 level of significance, is the type of ticket purchased independent of the type of flight? What is your conclusion?</li>
                            <li>Discuss any dependence that exists between the type of ticket and type of flight.</li>
                        </ol>
                    </div>
                    
                    <div class="exercise-box" style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #27ae60;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #27ae60; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-right: 10px;">12</span>
                            <span style="background: #fff3cd; color: #f57c00; padding: 3px 8px; border-radius: 3px; font-size: 0.9em;">WEB file: WorkforcePlan</span>
                        </div>
                        <p>A Deloitte employment survey asked a sample of human resource executives how their company planned to change its workforce over the next 12 months (INC. Magazine, February 2012). A categorical response variable showed three options: The company plans to hire and add to the number of employees, the company plans no change in the number of employees, or the company plans to lay off and reduce the number of employees. Another categorical variable indicated if the company was private or public. Sample data for 180 companies are summarized as follows:</p>
                        
                        <table style="width: 70%; margin: 20px auto; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #27ae60; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Employment Plan</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Private</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Public</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Add Employees</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">37</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">32</td>
                                </tr>
                                <tr style="background: #f0f0f0;">
                                    <td style="padding: 8px; border: 1px solid #ddd;">No Change</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">19</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">34</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">Lay Off Employees</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">16</td>
                                    <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">42</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <p style="margin-top: 15px;"><strong>13.</strong></p>
                        <ol style="list-style-type: lower-alpha; margin-left: 20px;">
                            <li>Conduct a test of independence to determine if the employment plan for the next 12 months is independent of the type of company. At a .05 level of significance, what is your conclusion?</li>
                            <li>Discuss any differences in the employment plans for private and public companies over the next 12 months.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    `
};

const MODULE6_KEY_FORMULAS_NOTES = {
    keyFormulasModule6: `
        <div class="module-container">
            <h2 class="module-header">Module 6: Key Formulas</h2>
            
            <div class="formula-box">
                <h3>📐 Interval Estimate of a Population Variance</h3>
                <p class="formula-main">
                    <span class="fraction">
                        <span class="numerator">(n - 1)s²</span>
                        <span class="denominator">χ²<sub>α/2</sub></span>
                    </span>
                    ≤ σ² ≤ 
                    <span class="fraction">
                        <span class="numerator">(n - 1)s²</span>
                        <span class="denominator">χ²<sub>(1 - α/2)</sub></span>
                    </span>
                </p>
                <p class="formula-number">(11.7)</p>
            </div>

            <div class="formula-box">
                <h3>📊 Test Statistic for Hypothesis Tests About a Population Variance</h3>
                <p class="formula-main">
                    χ² = <span class="fraction">
                        <span class="numerator">(n - 1)s²</span>
                        <span class="denominator">σ₀²</span>
                    </span>
                </p>
                <p class="formula-number">(11.8)</p>
            </div>

            <div class="formula-box">
                <h3>📈 Test Statistic for Hypothesis Tests About Population Variances</h3>
                <p>With σ₁² = σ₂²:</p>
                <p class="formula-main">
                    F = <span class="fraction">
                        <span class="numerator">s₁²</span>
                        <span class="denominator">s₂²</span>
                    </span>
                </p>
                <p class="formula-number">(11.10)</p>
            </div>

            <div class="formula-box">
                <h3>🎯 Expected Frequencies Under the Assumption H₀ Is True</h3>
                <p class="formula-main">
                    e<sub>ij</sub> = <span class="fraction">
                        <span class="numerator">(Row i Total)(Column j Total)</span>
                        <span class="denominator">Sample Size</span>
                    </span>
                </p>
                <p class="formula-number">(12.1)</p>
            </div>

            <div class="formula-box">
                <h3>📊 Chi-Square Test Statistic</h3>
                <p class="formula-main">
                    χ² = Σ<span class="fraction">
                        <span class="numerator">(f<sub>ij</sub> - e<sub>ij</sub>)²</span>
                        <span class="denominator">e<sub>ij</sub></span>
                    </span>
                </p>
                <p class="formula-number">(12.2)</p>
            </div>

            <div class="formula-box">
                <h3>🔄 Critical Values for the Marascuilo Pairwise Comparison Procedure</h3>
                <p class="formula-main">
                    CV<sub>ij</sub> = χ²<sub>α</sub> × √[<span class="fraction">
                        <span class="numerator">p̄<sub>i</sub>(1 - p̄<sub>i</sub>)</span>
                        <span class="denominator">n<sub>i</sub></span>
                    </span> + <span class="fraction">
                        <span class="numerator">p̄<sub>j</sub>(1 - p̄<sub>j</sub>)</span>
                        <span class="denominator">n<sub>j</sub></span>
                    </span>]
                </p>
                <p class="formula-number">(12.3)</p>
            </div>

            <div class="formula-box">
                <h3>✓ Chi-Square Test Statistic for the Goodness of Fit Test</h3>
                <p class="formula-main">
                    χ² = Σ<span class="fraction">
                        <span class="numerator">(f<sub>i</sub> - e<sub>i</sub>)²</span>
                        <span class="denominator">e<sub>i</sub></span>
                    </span>
                </p>
                <p class="formula-number">(12.6)</p>
            </div>

            <div class="example-box">
                <h3>📝 Example: Gibson-Marimont Hotel Room Occupancy</h3>
                <p><strong>Problem:</strong> Managers of the Gibson-Marimont Hotel are interested in the variability in the number of rooms occupied per day during a particular season. A sample of 20 days shows:</p>
                <ul>
                    <li>Sample mean: 290 rooms occupied per day</li>
                    <li>Sample standard deviation: 30 rooms</li>
                </ul>
                
                <div class="solution">
                    <h4>a. Point estimate of the population variance:</h4>
                    <p>s² = 30² = 900 rooms²</p>
                    
                    <h4>b. 90% confidence interval for the population variance:</h4>
                    <p>With n = 20, df = 19, α = 0.10:</p>
                    <p>χ²<sub>0.05</sub> = 30.144 and χ²<sub>0.95</sub> = 10.117</p>
                    <p class="formula-main">
                        <span class="fraction">
                            <span class="numerator">(19)(900)</span>
                            <span class="denominator">30.144</span>
                        </span>
                        ≤ σ² ≤ 
                        <span class="fraction">
                            <span class="numerator">(19)(900)</span>
                            <span class="denominator">10.117</span>
                        </span>
                    </p>
                    <p><strong>567.14 ≤ σ² ≤ 1,689.56</strong></p>
                    
                    <h4>c. 90% confidence interval for the population standard deviation:</h4>
                    <p>Taking square roots of the variance interval:</p>
                    <p><strong>23.82 ≤ σ ≤ 41.10 rooms</strong></p>
                </div>
            </div>

            <div class="example-box">
                <h3>📊 Supplementary Exercise: Dabco Corporation Quality Control</h3>
                <p><strong>Problem:</strong> In a quality control test of parts manufactured at Dabco Corporation, an engineer sampled parts produced on the first, second, and third shifts. The research study was designed to determine if the population proportion of good parts was the same for all three shifts.</p>
                
                <table style="width: 80%; margin: 20px auto; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #3498db; color: white;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Quality</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">First Shift</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Second Shift</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Third Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Good</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">285</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">368</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">176</td>
                        </tr>
                        <tr style="background: #f0f0f0;">
                            <td style="padding: 8px; border: 1px solid #ddd;">Defective</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">15</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">32</td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">24</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="solution">
                    <h4>a. Hypothesis Test at α = 0.05</h4>
                    <p>Using a .05 level of significance, conduct a hypothesis test to determine if the population proportion of good parts is the same for all three shifts.</p>
                    <p><strong>H₀:</strong> p₁ = p₂ = p₃ (The proportion of good parts is the same for all shifts)</p>
                    <p><strong>Hₐ:</strong> Not all population proportions are equal</p>
                    
                    <h4>b. Multiple Comparison Procedure</h4>
                    <p>If the conclusion is that the population proportions are not all equal, use a multiple comparison procedure (Marascuilo) to determine how the shifts differ in terms of quality. This will identify which shift or shifts need to improve the quality of parts produced.</p>
                </div>
            </div>

            <style>
                .formula-box {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                
                .formula-main {
                    font-size: 1.3em;
                    text-align: center;
                    margin: 15px 0;
                    display: block;
                }
                
                .formula-number {
                    text-align: right;
                    font-style: italic;
                    opacity: 0.8;
                }
                
                .fraction {
                    display: inline-block;
                    text-align: center;
                    vertical-align: middle;
                    margin: 0 5px;
                }
                
                .fraction .numerator {
                    display: block;
                    border-bottom: 2px solid currentColor;
                    padding-bottom: 3px;
                }
                
                .fraction .denominator {
                    display: block;
                    padding-top: 3px;
                }
                
                .example-box {
                    background: #f8f9fa;
                    border-left: 4px solid #007bff;
                    padding: 20px;
                    margin: 30px 0;
                    color: #333;
                }
                
                .solution {
                    background: white;
                    padding: 15px;
                    border-radius: 5px;
                    margin-top: 15px;
                }
                
                .solution h4 {
                    color: #007bff;
                    margin-top: 15px;
                }
                
                .solution p {
                    margin: 10px 0;
                }
            </style>
        </div>
    `
};

const MODULE6_GLOSSARY_NOTES = {
    glossaryModule6: `
        <div class="module-container">
            <h2 class="module-header">Module 6: Glossary</h2>
            
            <div class="glossary-section" style="background: #f8f9fa; padding: 30px; border-radius: 10px;">
                
                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #3498db; border-radius: 5px;">
                    <h3 style="color: #3498db; margin-bottom: 10px;">📊 Chi-Square Distribution</h3>
                    <p>A family of probability distributions associated with the sum of squared standard normal random variables. Used extensively in hypothesis testing for categorical data and variance testing. The shape depends on degrees of freedom (df), becoming more symmetric as df increases.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #9c27b0; border-radius: 5px;">
                    <h3 style="color: #9c27b0; margin-bottom: 10px;">🔄 Marascuilo Procedure</h3>
                    <p>A multiple comparison procedure that can be used to test for a significant difference between pairs of population proportions. This test can be helpful in identifying differences between pairs of population proportions whenever the hypothesis of equal population proportions has been rejected. The procedure controls the overall Type I error rate when making multiple pairwise comparisons.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #e74c3c; border-radius: 5px;">
                    <h3 style="color: #e74c3c; margin-bottom: 10px;">🔗 Test of Independence</h3>
                    <p>A chi-square test that can be used to test for the independence between two categorical variables. If the hypothesis of independence is rejected, it can be concluded that the categorical variables are associated or dependent. The test uses one sample from a population with observations on two categorical variables. The null hypothesis is that the two variables are independent.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #2ecc71; border-radius: 5px;">
                    <h3 style="color: #2ecc71; margin-bottom: 10px;">✓ Goodness of Fit Test</h3>
                    <p>A chi-square test that can be used to test that a population probability distribution has a specific historical or theoretical probability distribution. This test has been demonstrated for both a multinomial probability distribution and a normal probability distribution. The test compares observed frequencies with expected frequencies based on the hypothesized distribution.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #f39c12; border-radius: 5px;">
                    <h3 style="color: #f39c12; margin-bottom: 10px;">🎯 Multinomial Probability Distribution</h3>
                    <p>A probability distribution where each outcome belongs to one of three or more categories. The multinomial probability distribution extends the binomial probability from two to three or more outcomes per trial. Each trial results in exactly one of k possible outcomes, with fixed probabilities that sum to 1.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #8e44ad; border-radius: 5px;">
                    <h3 style="color: #8e44ad; margin-bottom: 10px;">📈 F Distribution</h3>
                    <p>A continuous probability distribution that arises frequently in statistical tests, particularly in the analysis of variance (ANOVA) and tests comparing two population variances. The F distribution is the ratio of two chi-square distributions divided by their respective degrees of freedom.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #16a085; border-radius: 5px;">
                    <h3 style="color: #16a085; margin-bottom: 10px;">🎲 Expected Frequency</h3>
                    <p>The theoretical frequency of observations in a category if the null hypothesis were true. In contingency tables, calculated as (Row Total × Column Total) / Sample Size. For goodness of fit tests, calculated as Sample Size × Hypothesized Probability.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #d35400; border-radius: 5px;">
                    <h3 style="color: #d35400; margin-bottom: 10px;">📊 Contingency Table</h3>
                    <p>A table showing the frequency distribution of two categorical variables. Also called a cross-tabulation or crosstab. Used in tests of independence to display the relationship between two categorical variables, with rows representing categories of one variable and columns representing categories of the other.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #c0392b; border-radius: 5px;">
                    <h3 style="color: #c0392b; margin-bottom: 10px;">🔢 Degrees of Freedom</h3>
                    <p>The number of independent values that can vary in an analysis without breaking any constraints. For chi-square tests: (r-1)(c-1) for contingency tables, k-1 for goodness of fit tests with no estimated parameters, and k-1-m when m parameters are estimated from the data.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #27ae60; border-radius: 5px;">
                    <h3 style="color: #27ae60; margin-bottom: 10px;">📐 ANOVA (Analysis of Variance)</h3>
                    <p>A statistical method used to test differences between two or more means. ANOVA tests the hypothesis that the means of several populations are equal. It generalizes the t-test to more than two groups and helps identify whether any of the differences between the means are statistically significant.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #2980b9; border-radius: 5px;">
                    <h3 style="color: #2980b9; margin-bottom: 10px;">🎯 Population Variance (σ²)</h3>
                    <p>A measure of variability that describes the average of the squared deviations from the population mean. In quality control and manufacturing, controlling variance is crucial for maintaining consistent product quality. The sample variance s² is used as a point estimator for the population variance.</p>
                </div>

                <div class="glossary-term" style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #e67e22; border-radius: 5px;">
                    <h3 style="color: #e67e22; margin-bottom: 10px;">📊 Test Statistic</h3>
                    <p>A standardized value calculated from sample data during a hypothesis test. For chi-square tests, it measures the discrepancy between observed and expected frequencies. The test statistic follows a known probability distribution (chi-square, F, etc.) under the null hypothesis, allowing calculation of p-values or comparison with critical values.</p>
                </div>
            </div>
        </div>
    `
};

// Export to window
window.MODULE6_POPULATION_VARIANCE_NOTES = MODULE6_POPULATION_VARIANCE_NOTES;
window.MODULE6_TWO_POPULATION_VARIANCES_NOTES = MODULE6_TWO_POPULATION_VARIANCES_NOTES;
window.MODULE6_ANOVA_NOTES = MODULE6_ANOVA_NOTES;
window.MODULE6_GOODNESS_OF_FIT_NOTES = MODULE6_GOODNESS_OF_FIT_NOTES;
window.MODULE6_INDEPENDENCE_NOTES = MODULE6_INDEPENDENCE_NOTES;
window.MODULE6_KEY_FORMULAS_NOTES = MODULE6_KEY_FORMULAS_NOTES;
window.MODULE6_GLOSSARY_NOTES = MODULE6_GLOSSARY_NOTES;
