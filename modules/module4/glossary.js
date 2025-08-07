// Module 4: Glossary of Key Terms

const MODULE4_GLOSSARY_NOTES = {
    glossaryModule4: [
        {
            id: 471,
            title: "Module 4: Glossary of Key Terms",
            category: "glossary-module4",
            content: `<h3><strong>Module 4: Glossary of Key Terms (Chapters 6-8)</strong></h3>
            
            <div class="divTable blueTable">
                <div class="divTableHeading"><div class="divTableRow">
                    <div class="divTableHead">Term</div>
                    <div class="divTableHead">Definition</div>
                </div></div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Interval estimate</strong></div>
                        <div class="divTableCell">An estimate of a population parameter that provides an interval believed to contain the value of the parameter. For the interval estimates in this chapter, it has the form: point estimate ± margin of error.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Margin of error</strong></div>
                        <div class="divTableCell">The value added to and subtracted from a point estimate in order to develop an interval estimate of a population parameter.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>σ known</strong></div>
                        <div class="divTableCell">The case when historical data or other information provides a good value for the population standard deviation prior to taking a sample. The interval estimation procedure uses this known value of σ in computing the margin of error.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Confidence level</strong></div>
                        <div class="divTableCell">The confidence associated with an interval estimate. For example, if an interval estimation procedure provides intervals such that 95% of the intervals formed using the procedure will include the population parameter, the interval estimate is said to be constructed at the 95% confidence level.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Confidence coefficient</strong></div>
                        <div class="divTableCell">The confidence level expressed as a decimal value. For example, .95 is the confidence coefficient for a 95% confidence level.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Confidence interval</strong></div>
                        <div class="divTableCell">Another name for an interval estimate.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>σ unknown</strong></div>
                        <div class="divTableCell">The more common case when no good basis exists for estimating the population standard deviation prior to taking the sample. The interval estimation procedure uses the sample standard deviation s in computing the margin of error.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>t distribution</strong></div>
                        <div class="divTableCell">A family of probability distributions that can be used to develop an interval estimate of a population mean whenever the population standard deviation σ is unknown and is estimated by the sample standard deviation s.</div>
                    </div>
                                           <div class="divTableRow">
                           <div class="divTableCell"><strong>Degrees of freedom</strong></div>
                           <div class="divTableCell">A parameter of the t distribution. When the t distribution is used in the computation of an interval estimate of a population mean, the appropriate t distribution has n - 1 degrees of freedom, where n is the size of the sample.</div>
                       </div>
                       <div class="divTableRow">
                           <div class="divTableCell"><strong>Probability density function</strong></div>
                           <div class="divTableCell">A function used to compute probabilities for a continuous random variable. The area under the graph of a probability density function over an interval represents probability.</div>
                       </div>
                       <div class="divTableRow">
                           <div class="divTableCell"><strong>Uniform probability distribution</strong></div>
                           <div class="divTableCell">A continuous probability distribution for which the probability that the random variable will assume a value in any interval is the same for each interval of equal length.</div>
                       </div>
                       <div class="divTableRow">
                           <div class="divTableCell"><strong>Normal probability distribution</strong></div>
                           <div class="divTableCell">A continuous probability distribution. Its probability density function is bell-shaped and determined by its mean μ and standard deviation σ.</div>
                       </div>
                       <div class="divTableRow">
                           <div class="divTableCell"><strong>Standard normal probability distribution</strong></div>
                           <div class="divTableCell">A normal distribution with a mean of zero and a standard deviation of one.</div>
                       </div>
                       <div class="divTableRow">
                           <div class="divTableCell"><strong>Continuity correction factor</strong></div>
                           <div class="divTableCell">A value of .5 that is added to or subtracted from a value of x when the continuous normal distribution is used to approximate the discrete binomial distribution.</div>
                       </div>
                       <div class="divTableRow">
                           <div class="divTableCell"><strong>Exponential probability distribution</strong></div>
                           <div class="divTableCell">A continuous probability distribution that is useful in computing probabilities for the time it takes to complete a task.</div>
                       </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Central limit theorem</strong></div>
                        <div class="divTableCell">A theorem that enables one to use the normal probability distribution to approximate the sampling distribution of x̄ whenever the sample size is large.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Cluster sampling</strong></div>
                        <div class="divTableCell">A probability sampling method in which the population is first divided into clusters and then a simple random sample of the clusters is taken.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Consistency</strong></div>
                        <div class="divTableCell">A property of a point estimator that is present whenever larger sample sizes tend to provide point estimates closer to the population parameter.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Convenience sampling</strong></div>
                        <div class="divTableCell">A nonprobability method of sampling whereby elements are selected for the sample on the basis of convenience.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Finite population correction factor</strong></div>
                        <div class="divTableCell">The term √[(N-n)/(N-1)] that is used in the formulas for σx̄ and σp̂ whenever a finite population, rather than an infinite population, is being sampled. The generally accepted rule of thumb is to ignore the finite population correction factor whenever n/N ≤ .05.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Frame</strong></div>
                        <div class="divTableCell">A listing of the elements the sample will be selected from.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Judgment sampling</strong></div>
                        <div class="divTableCell">A nonprobability method of sampling whereby elements are selected for the sample based on the judgment of the person doing the study.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Parameter</strong></div>
                        <div class="divTableCell">A numerical characteristic of a population, such as a population mean μ, a population standard deviation σ, a population proportion p, and so on.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Point estimate</strong></div>
                        <div class="divTableCell">The value of a point estimator used in a particular instance as an estimate of a population parameter.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Point estimator</strong></div>
                        <div class="divTableCell">The sample statistic, such as x̄, s, or p̂, that provides the point estimate of the population parameter.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Random sample</strong></div>
                        <div class="divTableCell">A random sample from an infinite population is a sample selected such that the following conditions are satisfied: (1) Each element selected comes from the same population; (2) each element is selected independently.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Relative efficiency</strong></div>
                        <div class="divTableCell">Given two unbiased point estimators of the same population parameter, the point estimator with the smaller standard error is more efficient.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Sample statistic</strong></div>
                        <div class="divTableCell">A sample characteristic, such as a sample mean x̄, a sample standard deviation s, a sample proportion p̂, and so on. The value of the sample statistic is used to estimate the value of the corresponding population parameter.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Sampled population</strong></div>
                        <div class="divTableCell">The population from which the sample is taken.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Sampling distribution</strong></div>
                        <div class="divTableCell">A probability distribution consisting of all possible values of a sample statistic.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Sampling with replacement</strong></div>
                        <div class="divTableCell">Once an element has been included in the sample, it is returned to the population. A previously selected element can be selected again and therefore may appear in the sample more than once.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Sampling without replacement</strong></div>
                        <div class="divTableCell">Once an element has been included in the sample, it is removed from the population and cannot be selected a second time.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Simple random sample</strong></div>
                        <div class="divTableCell">A simple random sample of size n from a finite population of size N is a sample selected such that each possible sample of size n has the same probability of being selected.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Standard error</strong></div>
                        <div class="divTableCell">The standard deviation of a point estimator.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Stratified random sampling</strong></div>
                        <div class="divTableCell">A probability sampling method in which the population is first divided into strata and a simple random sample is then taken from each stratum.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Systematic sampling</strong></div>
                        <div class="divTableCell">A probability sampling method in which we randomly select one of the first k elements and then select every kth element thereafter.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Target population</strong></div>
                        <div class="divTableCell">The population for which statistical inferences such as point estimates are made. It is important for the target population to correspond as closely as possible to the sampled population.</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell"><strong>Unbiased</strong></div>
                        <div class="divTableCell">A property of a point estimator that is present when the expected value of the point estimator is equal to the population parameter it estimates.</div>
                    </div>
                </div>
            </div>`
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULE4_GLOSSARY_NOTES;
}