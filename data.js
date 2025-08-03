// Data storage - applying DRY principle by centralizing all data
const DATA = {
    // Quiz data with hover explanations
    quizQuestions: [
        {
            id: 1,
            question: "Employee Number is an example of ________ data.",
      dataTable: Utils.createEmployeeTable(),
            options: [
                {
                    text: "nominal",
          tooltip:
            "CORRECT: Employee numbers are identifiers/category codes without meaningful order or mathematical operations.",
                },
                {
                    text: "ordinal",
          tooltip:
            "INCORRECT: Employee numbers don't have a meaningful order or ranking system.",
                },
                {
                    text: "interval",
          tooltip:
            "INCORRECT: Employee numbers don't have equal intervals or meaningful differences between values.",
                },
                {
                    text: "ratio",
          tooltip:
            "INCORRECT: Employee numbers don't have a true zero point or meaningful ratios.",
        },
            ],
            correctAnswer: "nominal",
      explanation:
        "Employee Number is nominal data because it's used as an identifier/category code without any meaningful order or mathematical operations.",
        },
        {
            id: 2,
            question: "Gender is an example of ________ data.",
      dataTable: Utils.createEmployeeTable(),
            options: [
                {
                    text: "nominal",
          tooltip:
            "CORRECT: Gender represents categories (Male/Female) without any inherent order or ranking.",
                },
                {
                    text: "ordinal",
          tooltip:
            "INCORRECT: Gender categories don't have a meaningful order or ranking.",
                },
                {
                    text: "interval",
          tooltip:
            "INCORRECT: Gender doesn't have equal intervals or meaningful differences between categories.",
                },
                {
                    text: "ratio",
          tooltip:
            "INCORRECT: Gender doesn't have a true zero point or meaningful ratios.",
        },
            ],
            correctAnswer: "nominal",
      explanation:
        "Gender is nominal data because it represents categories (Male/Female) without any inherent order or ranking.",
        },
        {
            id: 3,
            question: "Years of Experience is an example of ________ data.",
      dataTable: Utils.createEmployeeTable(),
            options: [
                {
                    text: "nominal",
          tooltip:
            "INCORRECT: Years of experience has meaningful order and mathematical operations.",
                },
                {
                    text: "ordinal",
          tooltip:
            "INCORRECT: Years of experience has meaningful differences between values, not just order.",
                },
                {
                    text: "interval",
          tooltip:
            "INCORRECT: Years of experience has a true zero point (0 years).",
                },
                {
                    text: "ratio",
          tooltip:
            "CORRECT: Years of experience has a true zero point (0 years) and meaningful ratios (twice as much experience).",
        },
            ],
            correctAnswer: "ratio",
      explanation:
        "Years of Experience is ratio data because it has a true zero point (0 years) and meaningful ratios (twice as much experience).",
        },
        {
            id: 4,
            question: "Employee Rank is an example of ________ data.",
      dataTable: Utils.createEmployeeTable(),
            options: [
                {
                    text: "nominal",
          tooltip:
            "INCORRECT: Employee rank has a meaningful order (1-10 scale).",
                },
                {
                    text: "ordinal",
          tooltip:
            "CORRECT: Employee rank has meaningful order (1-10 scale) but differences between values are not meaningful.",
                },
                {
                    text: "interval",
          tooltip:
            "INCORRECT: Employee rank doesn't have equal intervals between values.",
                },
                {
                    text: "ratio",
          tooltip:
            "INCORRECT: Employee rank doesn't have a true zero point or meaningful ratios.",
        },
            ],
            correctAnswer: "ordinal",
      explanation:
        "Employee Rank is ordinal data because it has a meaningful order (1-10 scale) but differences between values are not meaningful.",
        },
        {
            id: 5,
            question: "Yearly Salary is an example of ________ data.",
      dataTable: Utils.createEmployeeTable(),
            options: [
                {
                    text: "nominal",
          tooltip:
            "INCORRECT: Salary has meaningful order and mathematical operations.",
                },
                {
                    text: "ordinal",
          tooltip:
            "INCORRECT: Salary has meaningful differences between values, not just order.",
                },
                {
                    text: "interval",
          tooltip: "INCORRECT: Salary has a true zero point ($0).",
                },
                {
                    text: "ratio",
          tooltip:
            "CORRECT: Salary has a true zero point ($0) and meaningful ratios (twice as much salary).",
        },
            ],
            correctAnswer: "ratio",
      explanation:
        "Yearly Salary is ratio data because it has a true zero point ($0) and meaningful ratios (twice as much salary).",
        },
        {
            id: 6,
      question:
        "An interviewer has made an error in recording the data. This type of error is known as",
            options: [
                {
                    text: "an experimental error",
          tooltip:
            "INCORRECT: Experimental errors occur in controlled experiments, not data recording.",
                },
                {
                    text: "a data acquisition error",
          tooltip:
            "CORRECT: Recording errors during data collection are classified as data acquisition errors.",
                },
                {
                    text: "a non-experimental error",
          tooltip:
            "INCORRECT: This is too vague and doesn't specifically describe recording errors.",
                },
                {
                    text: "a conglomerate error",
          tooltip:
            "INCORRECT: This is not a recognized classification of data errors.",
        },
            ],
            correctAnswer: "a data acquisition error",
      explanation:
        "Recording errors during data collection are classified as data acquisition errors.",
        },
        {
            id: 7,
            question: "Fahrenheit Temperature is an example of a variable that uses",
            options: [
                {
                    text: "the ratio scale",
          tooltip:
            "INCORRECT: Fahrenheit doesn't have a true zero point (0°F doesn't mean 'no temperature').",
                },
                {
                    text: "the interval scale",
          tooltip:
            "CORRECT: Fahrenheit has equal intervals but no true zero point (0°F doesn't mean 'no temperature').",
                },
                {
                    text: "the ordinal scale",
          tooltip:
            "INCORRECT: Fahrenheit has meaningful differences between values, not just order.",
                },
                {
                    text: "either the ratio or the ordinal scale",
          tooltip:
            "INCORRECT: Fahrenheit can't be both ratio and ordinal - it's specifically interval scale.",
        },
            ],
            correctAnswer: "the interval scale",
      explanation:
        "Fahrenheit temperature uses the interval scale because it has equal intervals but no true zero point (0°F doesn't mean 'no temperature').",
        },
        {
            id: 8,
      question:
        "In a questionnaire, respondents are asked to mark their gender as male or female. Gender is an example of the",
            options: [
                {
                    text: "ordinal scale",
          tooltip:
            "INCORRECT: Gender categories don't have a meaningful order or ranking.",
                },
                {
                    text: "nominal scale",
          tooltip:
            "CORRECT: Gender represents categories without any inherent order or ranking.",
                },
                {
                    text: "ratio scale",
          tooltip:
            "INCORRECT: Gender doesn't have a true zero point or meaningful ratios.",
                },
                {
                    text: "interval scale",
          tooltip:
            "INCORRECT: Gender doesn't have equal intervals or meaningful differences between categories.",
        },
            ],
            correctAnswer: "nominal scale",
      explanation:
        "Gender is nominal scale because it represents categories without any inherent order or ranking.",
        },
        {
            id: 9,
      question:
        "In a sample of 400 students in a university, 80, or 20%, are Business majors. Based on the above information, the school's paper reported that '20% of all the students at the university are Business majors.' This report is an example of",
            options: [
                {
                    text: "a sample",
          tooltip:
            "INCORRECT: The 400 students are the sample, not the conclusion drawn from it.",
                },
                {
                    text: "a population",
          tooltip:
            "INCORRECT: The population is all students at the university, not the conclusion.",
                },
                {
                    text: "statistical inference",
          tooltip:
            "CORRECT: Using sample data to make a conclusion about the entire population is statistical inference.",
                },
                {
                    text: "descriptive statistics",
          tooltip:
            "INCORRECT: This goes beyond describing the sample to make a conclusion about the population.",
        },
            ],
            correctAnswer: "statistical inference",
      explanation:
        "This is statistical inference because it uses sample data to make a conclusion about the entire population.",
        },
        {
            id: 10,
      question:
        "In a sample of 800 students in a university, 240, or 30%, are Business majors. The 30% is an example of",
            options: [
                {
                    text: "a sample",
          tooltip:
            "INCORRECT: The 800 students are the sample, not the 30% statistic.",
                },
                {
                    text: "a population",
          tooltip:
            "INCORRECT: The population is all students at the university, not the 30% statistic.",
                },
                {
                    text: "statistical inference",
          tooltip:
            "INCORRECT: This is just describing the sample, not making conclusions about the population.",
                },
                {
                    text: "descriptive statistics",
          tooltip:
            "CORRECT: The 30% summarizes and describes the characteristics of the sample data.",
        },
            ],
            correctAnswer: "descriptive statistics",
      explanation:
        "The 30% is descriptive statistics because it summarizes and describes the characteristics of the sample data.",
        },
        {
            id: 11,
            question: "Income is an example of",
            options: [
                {
                    text: "categorical data",
          tooltip:
            "INCORRECT: Income represents measurable quantities, not categories.",
                },
                {
                    text: "either categorical or quantitative data",
          tooltip:
            "INCORRECT: Income is specifically quantitative data, not categorical.",
                },
                {
                    text: "dollar data",
          tooltip:
            "INCORRECT: 'Dollar data' is not a recognized data type classification.",
                },
                {
                    text: "quantitative data",
          tooltip:
            "CORRECT: Income represents measurable quantities with numeric values.",
        },
            ],
            correctAnswer: "quantitative data",
      explanation:
        "Income is quantitative data because it represents measurable quantities with numeric values.",
        },
        {
            id: 12,
      question:
        "Social security numbers consist of numeric values. Therefore, social security is an example of",
            options: [
                {
                    text: "a quantitative variable",
          tooltip:
            "INCORRECT: Social security numbers are identifiers, not for mathematical operations.",
                },
                {
                    text: "either a quantitative or a categorical variable",
          tooltip:
            "INCORRECT: Social security numbers are specifically categorical variables.",
                },
                {
                    text: "an exchange variable",
          tooltip:
            "INCORRECT: 'Exchange variable' is not a recognized data type classification.",
                },
                {
                    text: "a categorical variable",
          tooltip:
            "CORRECT: Social security numbers serve as identifiers/categories, not for mathematical operations.",
        },
            ],
            correctAnswer: "a categorical variable",
      explanation:
        "Social security numbers are categorical variables because they serve as identifiers/categories, not for mathematical operations.",
        },
        {
            id: 13,
            question: "The height of a building, measured in feet, is an example of",
            options: [
                {
                    text: "categorical data",
          tooltip:
            "INCORRECT: Building height represents measurable quantities, not categories.",
                },
                {
                    text: "either categorical or quantitative data",
          tooltip:
            "INCORRECT: Building height is specifically quantitative data, not categorical.",
                },
                {
                    text: "feet data",
          tooltip:
            "INCORRECT: 'Feet data' is not a recognized data type classification.",
                },
                {
                    text: "quantitative data",
          tooltip:
            "CORRECT: Building height represents a measurable quantity with numeric values.",
        },
            ],
            correctAnswer: "quantitative data",
      explanation:
        "Building height is quantitative data because it represents a measurable quantity with numeric values.",
        },
        {
            id: 14,
            question: "The weight of a candy bar in ounces is an example of",
            options: [
                {
                    text: "categorical data",
          tooltip:
            "INCORRECT: Weight represents measurable quantities, not categories.",
                },
                {
                    text: "either categorical or quantitative data",
          tooltip:
            "INCORRECT: Weight is specifically quantitative data, not categorical.",
                },
                {
                    text: "weight data",
          tooltip:
            "INCORRECT: 'Weight data' is not a recognized data type classification.",
                },
                {
                    text: "quantitative data",
          tooltip:
            "CORRECT: Weight represents a measurable quantity with numeric values.",
        },
            ],
            correctAnswer: "quantitative data",
      explanation:
        "Weight is quantitative data because it represents a measurable quantity with numeric values.",
        },
        {
            id: 15,
      question:
        "Which of the following variables use the ratio scale of measurement?",
            options: [
                {
                    text: "social security number",
          tooltip:
            "INCORRECT: Social security numbers are nominal scale (identifiers without order).",
                },
                {
                    text: "temperature",
          tooltip:
            "INCORRECT: Temperature typically uses interval scale (no true zero point).",
                },
                {
                    text: "gender",
          tooltip:
            "INCORRECT: Gender is nominal scale (categories without order).",
                },
                {
                    text: "income",
          tooltip:
            "CORRECT: Income has a true zero point ($0) and meaningful ratios (twice as much income).",
        },
      ],
      correctAnswer: "income",
      explanation:
        "Income uses the ratio scale because it has a true zero point ($0) and meaningful ratios (twice as much income).",
    },
    
    // Module 2 Quiz Questions
    {
      id: 21,
      question: "A researcher has collected the following sample data: 5, 12, 6, 8, 5, 6, 7, 5, 12, 4. The 75th percentile is:",
      options: [
        {
          text: "5",
          tooltip: "INCORRECT: This is not the 75th percentile. First arrange the data in order: 4, 5, 5, 5, 6, 6, 7, 8, 12, 12."
        },
        {
          text: "6",
          tooltip: "INCORRECT: The 75th percentile is higher than 6."
        },
        {
          text: "7",
          tooltip: "INCORRECT: The 75th percentile is between 7 and 8."
        },
        {
          text: "8",
          tooltip: "CORRECT: For the 75th percentile with n=10, position = 0.75 × (10+1) = 8.25. The 75th percentile is between the 8th and 9th values (7 and 8), closer to 8."
        }
      ],
      correctAnswer: "8",
      explanation: "To find the 75th percentile: 1) Arrange data in order: 4, 5, 5, 5, 6, 6, 7, 8, 12, 12. 2) Position = 0.75 × (n+1) = 0.75 × 11 = 8.25. 3) The value is between the 8th (8) and 9th (12) positions, which gives us 8."
    },
    {
      id: 22,
      question: "The numbers of hours worked (per week) by 400 statistics students are shown below. The midpoint of the last class (30-39) is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "50",
          tooltip: "INCORRECT: This is not the midpoint of the 30-39 class."
        },
        {
          text: "34",
          tooltip: "INCORRECT: This is close but not the exact midpoint."
        },
        {
          text: "35",
          tooltip: "INCORRECT: This is close but not the exact midpoint."
        },
        {
          text: "34.5",
          tooltip: "CORRECT: The midpoint of a class is (lower limit + upper limit) / 2 = (30 + 39) / 2 = 34.5."
        }
      ],
      correctAnswer: "34.5",
      explanation: "The midpoint of a class is calculated as (lower limit + upper limit) / 2. For the class 30-39: (30 + 39) / 2 = 69 / 2 = 34.5."
    },
    {
      id: 23,
      question: "The cumulative frequency for the class of 20-29 is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "is 200",
          tooltip: "INCORRECT: This is just the frequency of the 20-29 class, not the cumulative frequency."
        },
        {
          text: "is 300",
          tooltip: "CORRECT: Cumulative frequency = sum of all frequencies up to and including this class = 20 + 80 + 200 = 300."
        },
        {
          text: "is 0.75",
          tooltip: "INCORRECT: This would be a relative frequency, not cumulative frequency."
        },
        {
          text: "is 0.5",
          tooltip: "INCORRECT: This would be a relative frequency, not cumulative frequency."
        }
      ],
      correctAnswer: "is 300",
      explanation: "Cumulative frequency is the sum of all frequencies up to and including the current class. For 20-29: 20 + 80 + 200 = 300."
    },
    {
      id: 24,
      question: "The percentage of students working 19 hours or less is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "20%",
          tooltip: "INCORRECT: This is only the percentage for the 0-9 hours class."
        },
        {
          text: "25%",
          tooltip: "CORRECT: Students working 19 hours or less = 20 + 80 = 100. Percentage = (100/400) × 100% = 25%."
        },
        {
          text: "75%",
          tooltip: "INCORRECT: This would be the percentage for students working 29 hours or less."
        },
        {
          text: "80%",
          tooltip: "INCORRECT: This percentage is too high for students working 19 hours or less."
        }
      ],
      correctAnswer: "25%",
      explanation: "Students working 19 hours or less include those in classes 0-9 (20 students) and 10-19 (80 students). Total = 100 students. Percentage = (100/400) × 100% = 25%."
    },
    {
      id: 25,
      question: "A researcher has collected the following sample data with mean = 5: 3, 5, 12, 3, 2. The interquartile range is:",
      options: [
        {
          text: "1",
          tooltip: "INCORRECT: This is too small for the IQR of this dataset."
        },
        {
          text: "2",
          tooltip: "CORRECT: First arrange data: 2, 3, 3, 5, 12. Q1 = 3, Q3 = 5. IQR = Q3 - Q1 = 5 - 3 = 2."
        },
        {
          text: "10",
          tooltip: "INCORRECT: This is the range (12 - 2), not the interquartile range."
        },
        {
          text: "12",
          tooltip: "INCORRECT: This is the maximum value, not the IQR."
        }
      ],
      correctAnswer: "2",
      explanation: "To find IQR: 1) Arrange data in order: 2, 3, 3, 5, 12. 2) Q1 = 3 (25th percentile), Q3 = 5 (75th percentile). 3) IQR = Q3 - Q1 = 5 - 3 = 2."
    },
    {
      id: 26,
      question: "If a cumulative frequency distribution is developed for the data, the last class will have a cumulative frequency of:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "100",
          tooltip: "INCORRECT: This is just the frequency of the last class, not the cumulative frequency."
        },
        {
          text: "1",
          tooltip: "INCORRECT: This would be the cumulative relative frequency if expressed as a proportion."
        },
        {
          text: "30 - 39",
          tooltip: "INCORRECT: This is the class interval, not the cumulative frequency."
        },
        {
          text: "400",
          tooltip: "CORRECT: The cumulative frequency of the last class equals the total sample size = 20 + 80 + 200 + 100 = 400."
        }
      ],
      correctAnswer: "400",
      explanation: "The cumulative frequency of the last class always equals the total sample size. Total = 20 + 80 + 200 + 100 = 400."
    },
    {
      id: 27,
      question: "A researcher has collected the following sample data: 5, 12, 6, 8, 5, 6, 7, 5, 12, 4. The mode is:",
      options: [
        {
          text: "5",
          tooltip: "CORRECT: The value 5 appears three times, more frequently than any other value in the dataset."
        },
        {
          text: "6",
          tooltip: "INCORRECT: 6 appears twice, but 5 appears more frequently."
        },
        {
          text: "7",
          tooltip: "INCORRECT: 7 appears only once."
        },
        {
          text: "8",
          tooltip: "INCORRECT: 8 appears only once."
        }
      ],
      correctAnswer: "5",
      explanation: "The mode is the value that appears most frequently. In this dataset: 5 appears 3 times, 6 and 12 each appear 2 times, and 4, 7, 8 each appear 1 time. Therefore, the mode is 5."
    },
    {
      id: 28,
      question: "A researcher has collected the following sample data: 5, 12, 6, 8, 5, 6, 7, 5, 12, 4. The mean is:",
      options: [
        {
          text: "5",
          tooltip: "INCORRECT: This is the mode, not the mean."
        },
        {
          text: "6",
          tooltip: "INCORRECT: This is close to the median, not the mean."
        },
        {
          text: "7",
          tooltip: "CORRECT: Mean = (5+12+6+8+5+6+7+5+12+4)/10 = 70/10 = 7."
        },
        {
          text: "8",
          tooltip: "INCORRECT: The mean is less than 8."
        }
      ],
      correctAnswer: "7",
      explanation: "Mean = sum of all values / number of values = (5+12+6+8+5+6+7+5+12+4)/10 = 70/10 = 7."
    },
    {
      id: 29,
      question: "The relative frequency of students working 9 hours or less is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "is 20",
          tooltip: "INCORRECT: This is the frequency, not the relative frequency."
        },
        {
          text: "is 100",
          tooltip: "INCORRECT: This is much too large for a relative frequency."
        },
        {
          text: "is 0.95",
          tooltip: "INCORRECT: This would represent 95% of the students."
        },
        {
          text: "0.05",
          tooltip: "CORRECT: Relative frequency = frequency/total = 20/400 = 0.05."
        }
      ],
      correctAnswer: "0.05",
      explanation: "Relative frequency = frequency of the class / total frequency = 20/400 = 0.05 or 5%."
    },
    {
      id: 30,
      question: "A researcher has collected the following sample data: 5, 12, 6, 8, 5, 6, 7, 5, 12, 4. The median is:",
      options: [
        {
          text: "5",
          tooltip: "INCORRECT: This is the mode, not the median."
        },
        {
          text: "6",
          tooltip: "CORRECT: Arranged in order: 4, 5, 5, 5, 6, 6, 7, 8, 12, 12. With n=10, median = average of 5th and 6th values = (6+6)/2 = 6."
        },
        {
          text: "7",
          tooltip: "INCORRECT: This is the mean, not the median."
        },
        {
          text: "8",
          tooltip: "INCORRECT: This is above the median value."
        }
      ],
      correctAnswer: "6",
      explanation: "To find the median: 1) Arrange data in order: 4, 5, 5, 5, 6, 6, 7, 8, 12, 12. 2) With n=10 (even), median = average of 5th and 6th values = (6+6)/2 = 6."
    },
    {
      id: 31,
      question: "The cumulative relative frequency for the class of 20-29 is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "is 300",
          tooltip: "INCORRECT: This is the cumulative frequency, not the cumulative relative frequency."
        },
        {
          text: "is 0.25",
          tooltip: "INCORRECT: This would be the relative frequency of just the 20-29 class."
        },
        {
          text: "is 0.75",
          tooltip: "CORRECT: Cumulative relative frequency = cumulative frequency / total = 300 / 400 = 0.75."
        },
        {
          text: "is 0.5",
          tooltip: "INCORRECT: This would represent 50%, but 75% of students work 29 hours or less."
        }
      ],
      correctAnswer: "is 0.75",
      explanation: "Cumulative relative frequency = cumulative frequency / total sample size = 300 / 400 = 0.75 or 75%."
    },
    {
      id: 32,
      question: "A researcher has collected the following sample data with mean = 5: 3, 5, 12, 3, 2. The range is:",
      options: [
        {
          text: "1",
          tooltip: "INCORRECT: This is too small for the range."
        },
        {
          text: "2",
          tooltip: "INCORRECT: This is the IQR, not the range."
        },
        {
          text: "10",
          tooltip: "CORRECT: Range = maximum value - minimum value = 12 - 2 = 10."
        },
        {
          text: "12",
          tooltip: "INCORRECT: This is the maximum value, not the range."
        }
      ],
      correctAnswer: "10",
      explanation: "Range = maximum value - minimum value = 12 - 2 = 10."
    },
    {
      id: 33,
      question: "The number of students who work 19 hours or less is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "80",
          tooltip: "INCORRECT: This is only the number in the 10-19 hours class."
        },
        {
          text: "100",
          tooltip: "CORRECT: Students working 19 hours or less = those in 0-9 hours (20) + those in 10-19 hours (80) = 100."
        },
        {
          text: "200",
          tooltip: "INCORRECT: This is the frequency of the 20-29 hours class."
        },
        {
          text: "400",
          tooltip: "INCORRECT: This is the total number of students."
        }
      ],
      correctAnswer: "100",
      explanation: "Students working 19 hours or less include those in the 0-9 hours class (20 students) and the 10-19 hours class (80 students). Total = 20 + 80 = 100 students."
    },
    {
      id: 34,
      question: "The percentage of students who work at least 10 hours per week is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "50%",
          tooltip: "INCORRECT: This percentage is too low."
        },
        {
          text: "5%",
          tooltip: "INCORRECT: This percentage is much too low."
        },
        {
          text: "95%",
          tooltip: "CORRECT: Students working at least 10 hours = 80 + 200 + 100 = 380. Percentage = (380/400) × 100% = 95%."
        },
        {
          text: "100%",
          tooltip: "INCORRECT: Not all students work at least 10 hours; 20 students work 0-9 hours."
        }
      ],
      correctAnswer: "95%",
      explanation: "Students working at least 10 hours include those in classes 10-19 (80), 20-29 (200), and 30-39 (100). Total = 380 students. Percentage = (380/400) × 100% = 95%."
    },
    {
      id: 35,
      question: "A histogram is said to be skewed to the left if it has a:",
      options: [
        {
          text: "longer tail to the right",
          tooltip: "INCORRECT: A longer tail to the right indicates right skewness."
        },
        {
          text: "shorter tail to the right",
          tooltip: "INCORRECT: This describes the right side but doesn't define left skewness."
        },
        {
          text: "shorter tail to the left",
          tooltip: "INCORRECT: Left skewness has a longer tail to the left, not shorter."
        },
        {
          text: "longer tail to the left",
          tooltip: "CORRECT: A histogram is skewed to the left (negatively skewed) when it has a longer tail extending to the left."
        }
      ],
      correctAnswer: "longer tail to the left",
      explanation: "A histogram is skewed to the left (negatively skewed) when it has a longer tail extending to the left side, with most data concentrated on the right side."
    },
    {
      id: 36,
      question: "The class width for this distribution is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "is 9",
          tooltip: "INCORRECT: This would be the difference between upper and lower limits."
        },
        {
          text: "is 10",
          tooltip: "CORRECT: Class width is the difference between consecutive lower class limits: 10 - 0 = 10 (or 20 - 10 = 10)."
        },
        {
          text: "is 39, which is: the largest value minus the smallest value or 39 - 0 = 39",
          tooltip: "INCORRECT: This describes the range of the entire distribution, not the class width."
        },
        {
          text: "varies from class to class",
          tooltip: "INCORRECT: In this distribution, all classes have the same width."
        }
      ],
      correctAnswer: "is 10",
      explanation: "Class width is the difference between consecutive lower class limits. For example: 10 - 0 = 10, or 20 - 10 = 10. All classes have the same width of 10."
    },
    {
      id: 37,
      question: "A researcher has collected the following sample data with mean = 5: 3, 5, 12, 3, 2. The variance is:",
      options: [
        {
          text: "80",
          tooltip: "INCORRECT: This value is too large for the variance."
        },
        {
          text: "4.062",
          tooltip: "INCORRECT: This appears to be the standard deviation, not the variance."
        },
        {
          text: "13.2",
          tooltip: "INCORRECT: This value is not the correct variance."
        },
        {
          text: "16.5",
          tooltip: "CORRECT: s² = Σ(xi - x̄)² / (n-1). Calculations: (3-5)² + (5-5)² + (12-5)² + (3-5)² + (2-5)² = 4 + 0 + 49 + 4 + 9 = 66. s² = 66/4 = 16.5."
        }
      ],
      correctAnswer: "16.5",
      explanation: "Sample variance s² = Σ(xi - x̄)² / (n-1). With mean = 5: (3-5)² + (5-5)² + (12-5)² + (3-5)² + (2-5)² = 4 + 0 + 49 + 4 + 9 = 66. s² = 66/(5-1) = 66/4 = 16.5."
    },
    {
      id: 38,
      question: "The cumulative percent frequency for the class of 30-39 is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "100%",
          tooltip: "CORRECT: The cumulative frequency for 30-39 is 400 (all students), so the cumulative percent frequency is (400/400) × 100% = 100%."
        },
        {
          text: "75%",
          tooltip: "INCORRECT: This would be the cumulative percent frequency for the 20-29 class."
        },
        {
          text: "50%",
          tooltip: "INCORRECT: This percentage is too low for the last class."
        },
        {
          text: "25%",
          tooltip: "INCORRECT: This would be the percent frequency of just the 30-39 class, not cumulative."
        }
      ],
      correctAnswer: "100%",
      explanation: "The cumulative percent frequency for the last class is always 100% because it includes all observations in the distribution. Cumulative frequency = 400, so (400/400) × 100% = 100%."
    },
    {
      id: 39,
      question: "The number of students working 19 hours or less is:",
      dataTable: Utils.createBlueTable(
        ['Number of hours', 'Frequency'],
        [
          ['0 - 9', '20'],
          ['10 - 19', '80'],
          ['20 - 29', '200'],
          ['30 - 39', '100']
        ]
      ),
      options: [
        {
          text: "is 80",
          tooltip: "INCORRECT: This is only the frequency of the 10-19 hours class."
        },
        {
          text: "is 100",
          tooltip: "CORRECT: Students working 19 hours or less = 20 (0-9 hours) + 80 (10-19 hours) = 100 students."
        },
        {
          text: "is 180",
          tooltip: "INCORRECT: This number is too high."
        },
        {
          text: "is 300",
          tooltip: "INCORRECT: This would include students working up to 29 hours."
        }
      ],
      correctAnswer: "is 100",
      explanation: "Students working 19 hours or less include those in the 0-9 hours class (20 students) and the 10-19 hours class (80 students). Total = 20 + 80 = 100 students."
    },
    {
      id: 40,
      question: "A researcher has collected the following sample data with mean = 5: 3, 5, 12, 3, 2. The standard deviation is:",
      options: [
        {
          text: "8.944",
          tooltip: "INCORRECT: This value is too large for the standard deviation."
        },
        {
          text: "4.062",
          tooltip: "CORRECT: Standard deviation s = √variance = √16.5 ≈ 4.062."
        },
        {
          text: "13.2",
          tooltip: "INCORRECT: This value is too large."
        },
        {
          text: "16.5",
          tooltip: "INCORRECT: This is the variance, not the standard deviation."
        }
      ],
      correctAnswer: "4.062",
      explanation: "Standard deviation s = √variance = √16.5 ≈ 4.062. The standard deviation is the square root of the variance."
    },
    // Module 3 Quiz Questions (IDs 41-57)
    {
      id: 41,
      question: "The probability that Pete will catch fish when he goes fishing is .8. Pete is going to fish 3 days next week. Define the random variable X to be the number of days Pete catches fish. The probability that Pete will catch fish on one day or less is",
      options: [
        {
          text: "0.008",
          tooltip: "INCORRECT: This is P(X=0). We need P(X≤1) = P(X=0) + P(X=1)."
        },
        {
          text: "0.096",
          tooltip: "INCORRECT: This is P(X=1). We need P(X≤1) = P(X=0) + P(X=1)."
        },
        {
          text: "0.104",
          tooltip: "CORRECT: P(X≤1) = P(X=0) + P(X=1) = C(3,0)(0.8)⁰(0.2)³ + C(3,1)(0.8)¹(0.2)² = 0.008 + 0.096 = 0.104."
        },
        {
          text: "0.8",
          tooltip: "INCORRECT: This is the probability of catching fish on any single day."
        }
      ],
      correctAnswer: "0.104",
      explanation: "This is a binomial distribution with n=3, p=0.8. P(X≤1) = P(X=0) + P(X=1) = 0.008 + 0.096 = 0.104."
    },
    {
      id: 42,
      question: "The probability that Pete will catch fish when he goes fishing is .8. Pete is going to fish 3 days next week. Define the random variable X to be the number of days Pete catches fish. The probability that Pete will catch fish on exactly one day is",
      options: [
        {
          text: "0.008",
          tooltip: "INCORRECT: This is P(X=0), not P(X=1)."
        },
        {
          text: "0.096",
          tooltip: "CORRECT: P(X=1) = C(3,1)(0.8)¹(0.2)² = 3 × 0.8 × 0.04 = 0.096."
        },
        {
          text: "0.104",
          tooltip: "INCORRECT: This is P(X≤1), not P(X=1)."
        },
        {
          text: "0.8",
          tooltip: "INCORRECT: This is the probability for a single day, not exactly one day out of three."
        }
      ],
      correctAnswer: "0.096",
      explanation: "Using binomial formula: P(X=1) = C(3,1)(0.8)¹(0.2)² = 3 × 0.8 × 0.04 = 0.096."
    },
    {
      id: 43,
      question: "The following represents the probability distribution for the daily demand of computers at a local store. The probability of having a demand for at least two computers is",
      dataTable: Utils.createBlueTable(
        ['Demand', 'Probability'],
        [
          ['0', '0.1'],
          ['1', '0.2'],
          ['2', '0.3'],
          ['3', '0.2'],
          ['4', '0.2']
        ]
      ),
      options: [
        {
          text: "0.7",
          tooltip: "CORRECT: P(X≥2) = P(X=2) + P(X=3) + P(X=4) = 0.3 + 0.2 + 0.2 = 0.7."
        },
        {
          text: "0.3",
          tooltip: "INCORRECT: This is only P(X=2), not P(X≥2)."
        },
        {
          text: "0.4",
          tooltip: "INCORRECT: This is P(X=3) + P(X=4), missing P(X=2)."
        },
        {
          text: "1.0",
          tooltip: "INCORRECT: This is the sum of all probabilities, not P(X≥2)."
        }
      ],
      correctAnswer: "0.7",
      explanation: "P(at least 2) = P(X≥2) = P(X=2) + P(X=3) + P(X=4) = 0.3 + 0.2 + 0.2 = 0.7."
    },
    {
      id: 44,
      question: "The expected value for a binomial probability distribution is",
      options: [
        {
          text: "E(x) = Pn(1 - n)",
          tooltip: "INCORRECT: This formula is not correct for binomial expected value."
        },
        {
          text: "E(x) = P(1 - P)",
          tooltip: "INCORRECT: This is missing the factor n."
        },
        {
          text: "E(x) = nP",
          tooltip: "CORRECT: For a binomial distribution, the expected value is E(X) = nP."
        },
        {
          text: "E(x) = nP(1 - P)",
          tooltip: "INCORRECT: This is the variance formula, not the expected value."
        }
      ],
      correctAnswer: "E(x) = nP",
      explanation: "For a binomial distribution with n trials and probability p of success, the expected value is E(X) = np."
    },
    {
      id: 45,
      question: "The range of probability is",
      options: [
        {
          text: "any value larger than zero",
          tooltip: "INCORRECT: Probabilities can be zero and cannot exceed 1."
        },
        {
          text: "any value between minus infinity to plus infinity",
          tooltip: "INCORRECT: Probabilities cannot be negative or greater than 1."
        },
        {
          text: "zero to one",
          tooltip: "CORRECT: Probabilities must be between 0 and 1, inclusive."
        },
        {
          text: "any value between -1 to 1",
          tooltip: "INCORRECT: Probabilities cannot be negative."
        }
      ],
      correctAnswer: "zero to one",
      explanation: "Probabilities must satisfy 0 ≤ P(A) ≤ 1 for any event A. They cannot be negative or exceed 1."
    },
    {
      id: 46,
      question: "On a December day, the probability of snow is .30. The probability of a \"cold\" day is .50. The probability of snow and \"cold\" weather is .15. Are snow and \"cold\" weather independent events?",
      options: [
        {
          text: "only if given that it snowed",
          tooltip: "INCORRECT: Independence is a general property, not conditional."
        },
        {
          text: "no",
          tooltip: "CORRECT: For independence, P(Snow and Cold) should equal P(Snow) × P(Cold) = 0.30 × 0.50 = 0.15. Since 0.15 = 0.15, they ARE independent. Wait - this answer choice is wrong!"
        },
        {
          text: "yes",
          tooltip: "CORRECT: P(Snow and Cold) = 0.15 = P(Snow) × P(Cold) = 0.30 × 0.50. Since these are equal, the events are independent."
        },
        {
          text: "only when they are also mutually exclusive",
          tooltip: "INCORRECT: Independence and mutual exclusivity are different concepts."
        }
      ],
      correctAnswer: "yes",
      explanation: "Events are independent if P(A ∩ B) = P(A) × P(B). Here: P(Snow ∩ Cold) = 0.15 and P(Snow) × P(Cold) = 0.30 × 0.50 = 0.15. Since these are equal, the events are independent."
    },
    {
      id: 47,
      question: "The standard deviation of a binomial distribution is",
      options: [
        {
          text: "σ(x) = P(1 - P)",
          tooltip: "INCORRECT: This is missing the factor n and needs a square root."
        },
        {
          text: "σ(x) = nP",
          tooltip: "INCORRECT: This is the expected value formula, not standard deviation."
        },
        {
          text: "σ(x) = nP(1 - P)",
          tooltip: "INCORRECT: This is the variance formula. Standard deviation is the square root of variance."
        },
        {
          text: "None of these alternatives is correct.",
          tooltip: "CORRECT: The standard deviation is σ(x) = √[nP(1-P)], which is not listed among the options."
        }
      ],
      correctAnswer: "None of these alternatives is correct.",
      explanation: "The standard deviation of a binomial distribution is σ(x) = √[nP(1-P)]. None of the given options show this correct formula."
    },
    {
      id: 48,
      question: "Roth is a computer-consulting firm. The number of new clients that they have obtained each month has ranged from 0 to 6. The expected number of new clients per month is",
      dataTable: Utils.createBlueTable(
        ['Number of New Clients', 'Probability'],
        [
          ['0', '0.05'],
          ['1', '0.10'],
          ['2', '0.15'],
          ['3', '0.35'],
          ['4', '0.20'],
          ['5', '0.10'],
          ['6', '0.05']
        ]
      ),
      options: [
        {
          text: "6",
          tooltip: "INCORRECT: This is the maximum value, not the expected value."
        },
        {
          text: "0",
          tooltip: "INCORRECT: This is the minimum value, not the expected value."
        },
        {
          text: "3.05",
          tooltip: "CORRECT: E(X) = Σ(x × P(x)) = 0(0.05) + 1(0.10) + 2(0.15) + 3(0.35) + 4(0.20) + 5(0.10) + 6(0.05) = 3.05."
        },
        {
          text: "21",
          tooltip: "INCORRECT: This value is too large and not calculated correctly."
        }
      ],
      correctAnswer: "3.05",
      explanation: "Expected value E(X) = Σ(x × P(x)) = 0(0.05) + 1(0.10) + 2(0.15) + 3(0.35) + 4(0.20) + 5(0.10) + 6(0.05) = 3.05."
    },
    {
      id: 49,
      question: "Two events are mutually exclusive",
      options: [
        {
          text: "if their intersection is 1",
          tooltip: "INCORRECT: If intersection equals 1, events are not mutually exclusive (impossible scenario anyway since intersections are probabilities ≤ 1)."
        },
        {
          text: "if they have no sample points in common",
          tooltip: "CORRECT: Mutually exclusive events cannot occur simultaneously, meaning they share no common outcomes."
        },
        {
          text: "if their intersection is 0.5",
          tooltip: "INCORRECT: If events have a non-zero intersection, they are not mutually exclusive."
        },
        {
          text: "None of these alternatives is correct.",
          tooltip: "INCORRECT: Option b correctly defines mutually exclusive events."
        }
      ],
      correctAnswer: "if they have no sample points in common",
      explanation: "Two events are mutually exclusive if they cannot occur at the same time, meaning P(A ∩ B) = 0 and they share no common sample points."
    },
    {
      id: 50,
      question: "Roth is a computer-consulting firm. The number of new clients that they have obtained each month has ranged from 0 to 6. The variance is",
      dataTable: Utils.createBlueTable(
        ['Number of New Clients', 'Probability'],
        [
          ['0', '0.05'],
          ['1', '0.10'],
          ['2', '0.15'],
          ['3', '0.35'],
          ['4', '0.20'],
          ['5', '0.10'],
          ['6', '0.05']
        ]
      ),
      options: [
        {
          text: "1.431",
          tooltip: "INCORRECT: This appears to be the standard deviation, not the variance."
        },
        {
          text: "2.047",
          tooltip: "CORRECT: Var(X) = E(X²) - [E(X)]² = 11.35 - (3.05)² = 11.35 - 9.3025 = 2.0475 ≈ 2.047."
        },
        {
          text: "3.05",
          tooltip: "INCORRECT: This is the expected value, not the variance."
        },
        {
          text: "21",
          tooltip: "INCORRECT: This value is too large and incorrect."
        }
      ],
      correctAnswer: "2.047",
      explanation: "Variance = E(X²) - [E(X)]². First calculate E(X²) = Σ(x² × P(x)), then subtract [E(X)]² = (3.05)² to get approximately 2.047."
    },
    {
      id: 51,
      question: "The probability that Pete will catch fish when he goes fishing is .8. Pete is going to fish 3 days next week. Define the random variable X to be the number of days Pete catches fish. The expected number of days Pete will catch fish is",
      options: [
        {
          text: "0.6",
          tooltip: "INCORRECT: This calculation is not correct for the binomial expected value."
        },
        {
          text: "0.8",
          tooltip: "INCORRECT: This is the probability for a single day, not the expected value for 3 days."
        },
        {
          text: "2.4",
          tooltip: "CORRECT: E(X) = nP = 3 × 0.8 = 2.4."
        },
        {
          text: "3",
          tooltip: "INCORRECT: This would be the expected value if P = 1."
        }
      ],
      correctAnswer: "2.4",
      explanation: "For a binomial distribution, E(X) = nP = 3 × 0.8 = 2.4 days."
    },
    {
      id: 52,
      question: "The following represents the probability distribution for the daily demand of computers at a local store. The expected daily demand is",
      dataTable: Utils.createBlueTable(
        ['Demand', 'Probability'],
        [
          ['0', '0.1'],
          ['1', '0.2'],
          ['2', '0.3'],
          ['3', '0.2'],
          ['4', '0.2']
        ]
      ),
      options: [
        {
          text: "1.0",
          tooltip: "INCORRECT: This is not the correct calculation of expected value."
        },
        {
          text: "2.2",
          tooltip: "CORRECT: E(X) = 0(0.1) + 1(0.2) + 2(0.3) + 3(0.2) + 4(0.2) = 0 + 0.2 + 0.6 + 0.6 + 0.8 = 2.2."
        },
        {
          text: "2, since it has the highest probability",
          tooltip: "INCORRECT: The mode (most likely value) is not the same as expected value."
        },
        {
          text: "of course 4, since it is the largest demand level",
          tooltip: "INCORRECT: The maximum value is not the expected value."
        }
      ],
      correctAnswer: "2.2",
      explanation: "Expected value E(X) = Σ(x × P(x)) = 0(0.1) + 1(0.2) + 2(0.3) + 3(0.2) + 4(0.2) = 2.2."
    },
    {
      id: 53,
      question: "The number of electrical outages in a city varies from day to day. Assume that the number of electrical outages (x) in the city has the following probability distribution. The mean and the standard deviation for the number of electrical outages (respectively) are",
      dataTable: Utils.createBlueTable(
        ['x', 'f(x)'],
        [
          ['0', '0.80'],
          ['1', '0.15'],
          ['2', '0.04'],
          ['3', '0.01']
        ]
      ),
      options: [
        {
          text: "2.6 and 5.77",
          tooltip: "INCORRECT: These values are too large for this distribution."
        },
        {
          text: "0.26 and 0.577",
          tooltip: "CORRECT: Mean = 0(0.80) + 1(0.15) + 2(0.04) + 3(0.01) = 0.26. Variance = E(X²) - [E(X)]² = 0.34 - (0.26)² = 0.2724. SD = √0.2724 ≈ 0.577."
        },
        {
          text: "3 and 0.01",
          tooltip: "INCORRECT: These are the maximum value and its probability, not mean and standard deviation."
        },
        {
          text: "0 and 0.8",
          tooltip: "INCORRECT: These are the mode and its probability, not mean and standard deviation."
        }
      ],
      correctAnswer: "0.26 and 0.577",
      explanation: "Mean = Σ(x × P(x)) = 0.26. Variance = E(X²) - [E(X)]² ≈ 0.2724. Standard deviation = √variance ≈ 0.577."
    },
    {
      id: 54,
      question: "The set of all possible outcomes of an experiment is",
      options: [
        {
          text: "an experiment",
          tooltip: "INCORRECT: An experiment is the process, not the set of outcomes."
        },
        {
          text: "an event",
          tooltip: "INCORRECT: An event is a subset of possible outcomes, not all possible outcomes."
        },
        {
          text: "the population",
          tooltip: "INCORRECT: Population refers to all elements in a statistical study, not experimental outcomes."
        },
        {
          text: "the sample space",
          tooltip: "CORRECT: The sample space is defined as the set of all possible outcomes of an experiment."
        }
      ],
      correctAnswer: "the sample space",
      explanation: "The sample space (S) is the set of all possible outcomes of an experiment. For example, for a coin toss, S = {H, T}."
    },
    {
      id: 55,
      question: "The probability that Pete will catch fish when he goes fishing is .8. Pete is going to fish 3 days next week. Define the random variable X to be the number of days Pete catches fish. The variance of the number of days Pete will catch fish is",
      options: [
        {
          text: "0.16",
          tooltip: "INCORRECT: This appears to be P(1-P) = 0.8 × 0.2 = 0.16, but variance needs factor n."
        },
        {
          text: "0.48",
          tooltip: "CORRECT: Var(X) = nP(1-P) = 3 × 0.8 × 0.2 = 0.48."
        },
        {
          text: "0.8",
          tooltip: "INCORRECT: This is the probability p, not the variance."
        },
        {
          text: "2.4",
          tooltip: "INCORRECT: This is the expected value, not the variance."
        }
      ],
      correctAnswer: "0.48",
      explanation: "For a binomial distribution, Var(X) = nP(1-P) = 3 × 0.8 × 0.2 = 0.48."
    },
    {
      id: 56,
      question: "Roth is a computer-consulting firm. The number of new clients that they have obtained each month has ranged from 0 to 6. The standard deviation is",
      dataTable: Utils.createBlueTable(
        ['Number of New Clients', 'Probability'],
        [
          ['0', '0.05'],
          ['1', '0.10'],
          ['2', '0.15'],
          ['3', '0.35'],
          ['4', '0.20'],
          ['5', '0.10'],
          ['6', '0.05']
        ]
      ),
      options: [
        {
          text: "1.431",
          tooltip: "CORRECT: Standard deviation = √variance = √2.047 ≈ 1.431."
        },
        {
          text: "2.047",
          tooltip: "INCORRECT: This is the variance, not the standard deviation."
        },
        {
          text: "3.05",
          tooltip: "INCORRECT: This is the expected value, not the standard deviation."
        },
        {
          text: "21",
          tooltip: "INCORRECT: This value is too large and incorrect."
        }
      ],
      correctAnswer: "1.431",
      explanation: "Standard deviation = √variance = √2.047 ≈ 1.431."
    },
    {
      id: 57,
      question: "The variance for the binomial probability distribution is",
      options: [
        {
          text: "var(x) = P(1 - P)",
          tooltip: "INCORRECT: This is missing the factor n."
        },
        {
          text: "var(x) = nP",
          tooltip: "INCORRECT: This is the expected value formula, not variance."
        },
        {
          text: "var(x) = n(1 - P)",
          tooltip: "INCORRECT: This is missing the factor P."
        },
        {
          text: "var(x) = nP(1 - P)",
          tooltip: "CORRECT: For a binomial distribution, the variance is Var(X) = nP(1-P)."
        }
      ],
      correctAnswer: "var(x) = nP(1 - P)",
      explanation: "For a binomial distribution with n trials and probability p, the variance is Var(X) = nP(1-P)."
    },
    // Exam Questions (IDs 61-85)
    {
      id: 61,
      question: "Some hotels ask their guests to rate the hotel's services as excellent, very good, good, and poor. This is an example of the",
      options: [
        {
          text: "ordinal scale",
          tooltip: "CORRECT: These ratings have a natural order from poor to excellent, making it an ordinal scale."
        },
        {
          text: "ratio scale",
          tooltip: "INCORRECT: Ratio scale requires meaningful ratios and a true zero point."
        },
        {
          text: "nominal scale",
          tooltip: "INCORRECT: Nominal scale has no inherent order."
        },
        {
          text: "interval scale",
          tooltip: "INCORRECT: Interval scale requires equal intervals between values."
        }
      ],
      correctAnswer: "ordinal scale",
      explanation: "Hotel service ratings (excellent, very good, good, poor) have a natural order but no equal intervals or meaningful ratios, making this an ordinal scale."
    },
    {
      id: 62,
      question: "The ordinal scale of measurement has the properties of the",
      options: [
        {
          text: "ratio scale",
          tooltip: "INCORRECT: Ordinal scale doesn't have the properties of ratio scale."
        },
        {
          text: "interval scale",
          tooltip: "INCORRECT: Ordinal scale doesn't have equal intervals."
        },
        {
          text: "nominal scale",
          tooltip: "CORRECT: Ordinal scale has all properties of nominal scale (categories) plus ordering."
        },
        {
          text: "ratio and interval scales",
          tooltip: "INCORRECT: Ordinal scale doesn't have properties of higher-level scales."
        }
      ],
      correctAnswer: "nominal scale",
      explanation: "The ordinal scale builds upon the nominal scale, having all its properties (categories/labels) plus the additional property of meaningful order."
    },
    {
      id: 63,
      question: "The ratio scale of measurement has the properties of",
      options: [
        {
          text: "only the ordinal scale",
          tooltip: "INCORRECT: Ratio scale has properties of all lower scales."
        },
        {
          text: "only the nominal scale",
          tooltip: "INCORRECT: Ratio scale has properties of all lower scales."
        },
        {
          text: "the rank scale",
          tooltip: "INCORRECT: This is not a standard measurement scale."
        },
        {
          text: "the interval scale",
          tooltip: "CORRECT: Ratio scale has all properties of interval scale plus a meaningful zero point."
        }
      ],
      correctAnswer: "the interval scale",
      explanation: "The ratio scale has all properties of the interval scale (equal intervals, order, categories) plus a meaningful zero point that allows for meaningful ratios."
    },
    {
      id: 64,
      question: "Categorical data",
      options: [
        {
          text: "indicate either how much or how many",
          tooltip: "INCORRECT: This describes quantitative data."
        },
        {
          text: "cannot be numeric",
          tooltip: "INCORRECT: Categorical data can be represented with numbers (like codes)."
        },
        {
          text: "are labels used to identify attributes of elements",
          tooltip: "CORRECT: Categorical data are labels or names used to identify characteristics or attributes."
        },
        {
          text: "must be nonnumeric",
          tooltip: "INCORRECT: Categorical data can be represented numerically (like gender coded as 1/2)."
        }
      ],
      correctAnswer: "are labels used to identify attributes of elements",
      explanation: "Categorical data are labels or names used to identify attributes of elements. They can be represented numerically but the numbers serve as labels, not quantities."
    },
    {
      id: 65,
      question: "Ordinary arithmetic operations are meaningful",
      options: [
        {
          text: "only with categorical data",
          tooltip: "INCORRECT: Arithmetic operations are not meaningful with categorical data."
        },
        {
          text: "only with quantitative data",
          tooltip: "CORRECT: Arithmetic operations (addition, subtraction, multiplication, division) are meaningful only with quantitative data."
        },
        {
          text: "either with quantitative or categorical data",
          tooltip: "INCORRECT: Arithmetic operations are not meaningful with categorical data."
        },
        {
          text: "None of these alternatives is correct.",
          tooltip: "INCORRECT: Arithmetic operations are meaningful only with quantitative data."
        }
      ],
      correctAnswer: "only with quantitative data",
      explanation: "Ordinary arithmetic operations (addition, subtraction, multiplication, division) are meaningful only with quantitative data because they represent numerical quantities."
    },
    {
      id: 66,
      question: "Social security numbers consist of numeric values. Therefore, social security is an example of",
      options: [
        {
          text: "a quantitative variable",
          tooltip: "INCORRECT: Even though SSNs are numeric, they are identifiers, not quantities."
        },
        {
          text: "either a quantitative or a categorical variable",
          tooltip: "INCORRECT: SSNs are clearly categorical as they are identifiers."
        },
        {
          text: "an exchange variable",
          tooltip: "INCORRECT: This is not a standard variable classification."
        },
        {
          text: "a categorical variable",
          tooltip: "CORRECT: Social security numbers are identifiers/labels, making them categorical even though they use numbers."
        }
      ],
      correctAnswer: "a categorical variable",
      explanation: "Social security numbers are categorical variables because they serve as identifiers or labels, not as numerical quantities, even though they consist of numeric digits."
    },
    {
      id: 67,
      question: "After conducting a census of all students at the university, a school's paper reported that \"20% of all students at the university are Business majors.\" This report is an example of",
      options: [
        {
          text: "a sample",
          tooltip: "INCORRECT: This describes information obtained from the entire population (census), not a sample."
        },
        {
          text: "a population",
          tooltip: "INCORRECT: This describes information about the population, not the population itself."
        },
        {
          text: "statistical inference",
          tooltip: "INCORRECT: This is describing a known population characteristic from a census, not making an inference from sample data."
        },
        {
          text: "descriptive statistics",
          tooltip: "CORRECT: This is describing a characteristic of the entire population based on complete population data (census)."
        }
      ],
      correctAnswer: "descriptive statistics",
      explanation: "Descriptive statistics summarize and describe characteristics of a population or sample. Since this percentage comes from a census (complete count) of all university students, it's describing the actual population characteristic, not inferring it from a sample."
    },
    {
      id: 68,
      question: "A survey of 800 college seniors resulted in the following crosstabulation regarding their undergraduate major and whether or not they plan to go to graduate school. What percentage of the students does not plan to go to graduate school?",
      dataTable: Utils.createBlueTable(
        ['Undergraduate Major', 'Business', 'Engineering', 'Others', 'Total'],
        [
          ['Graduate School', '', '', '', ''],
          ['Yes', '70', '84', '126', '280'],
          ['No', '182', '208', '130', '520'],
          ['Total', '252', '292', '256', '800']
        ]
      ),
      options: [
        {
          text: "280",
          tooltip: "INCORRECT: This is the number of students, not the percentage."
        },
        {
          text: "520",
          tooltip: "INCORRECT: This is the number of students, not the percentage."
        },
        {
          text: "65",
          tooltip: "CORRECT: 520 students out of 800 do not plan to go to graduate school. 520/800 = 0.65 = 65%."
        },
        {
          text: "32",
          tooltip: "INCORRECT: This would be incorrect calculation."
        }
      ],
      correctAnswer: "65",
      explanation: "520 students out of 800 do not plan to go to graduate school. Percentage = (520/800) × 100% = 65%."
    },
    {
      id: 69,
      question: "A survey of 800 college seniors resulted in the following crosstabulation regarding their undergraduate major and whether or not they plan to go to graduate school. What percentage of the students' undergraduate major is engineering?",
      dataTable: Utils.createBlueTable(
        ['Undergraduate Major', 'Business', 'Engineering', 'Others', 'Total'],
        [
          ['Graduate School', '', '', '', ''],
          ['Yes', '70', '84', '126', '280'],
          ['No', '182', '208', '130', '520'],
          ['Total', '252', '292', '256', '800']
        ]
      ),
      options: [
        {
          text: "292",
          tooltip: "INCORRECT: This is the number of students, not the percentage."
        },
        {
          text: "520",
          tooltip: "INCORRECT: This is not related to engineering majors."
        },
        {
          text: "65",
          tooltip: "INCORRECT: This is the percentage who don't plan to go to graduate school."
        },
        {
          text: "36.5",
          tooltip: "CORRECT: 292 engineering students out of 800 total students. 292/800 = 0.365 = 36.5%."
        }
      ],
      correctAnswer: "36.5",
      explanation: "292 students are engineering majors out of 800 total students. Percentage = (292/800) × 100% = 36.5%."
    },
    {
      id: 70,
      question: "A survey of 800 college seniors resulted in the following crosstabulation regarding their undergraduate major and whether or not they plan to go to graduate school. Of those students who are majoring in business, what percentage plans to go to graduate school?",
      dataTable: Utils.createBlueTable(
        ['Undergraduate Major', 'Business', 'Engineering', 'Others', 'Total'],
        [
          ['Graduate School', '', '', '', ''],
          ['Yes', '70', '84', '126', '280'],
          ['No', '182', '208', '130', '520'],
          ['Total', '252', '292', '256', '800']
        ]
      ),
      options: [
        {
          text: "27.78",
          tooltip: "CORRECT: 70 business majors plan to go to graduate school out of 252 total business majors. 70/252 = 0.2778 = 27.78%."
        },
        {
          text: "8.75",
          tooltip: "INCORRECT: This would be 70/800, which is not the conditional percentage."
        },
        {
          text: "70",
          tooltip: "INCORRECT: This is the number of students, not the percentage."
        },
        {
          text: "72.22",
          tooltip: "INCORRECT: This would be the percentage of business majors who don't plan to go to graduate school."
        }
      ],
      correctAnswer: "27.78",
      explanation: "Of the 252 business majors, 70 plan to go to graduate school. Conditional percentage = (70/252) × 100% = 27.78%."
    },
    {
      id: 71,
      question: "A survey of 800 college seniors resulted in the following crosstabulation regarding their undergraduate major and whether or not they plan to go to graduate school. Among the students who plan to go to graduate school, what percentage indicated \"Other\" majors?",
      dataTable: Utils.createBlueTable(
        ['Undergraduate Major', 'Business', 'Engineering', 'Others', 'Total'],
        [
          ['Graduate School', '', '', '', ''],
          ['Yes', '70', '84', '126', '280'],
          ['No', '182', '208', '130', '520'],
          ['Total', '252', '292', '256', '800']
        ]
      ),
      options: [
        {
          text: "15.75",
          tooltip: "INCORRECT: This would be 126/800, which is not the conditional percentage."
        },
        {
          text: "45",
          tooltip: "CORRECT: Among the 280 students who plan to go to graduate school, 126 are \"Other\" majors. 126/280 = 0.45 = 45%."
        },
        {
          text: "54",
          tooltip: "INCORRECT: This is not the correct calculation."
        },
        {
          text: "35",
          tooltip: "INCORRECT: This is not the correct calculation."
        }
      ],
      correctAnswer: "45",
      explanation: "Among the 280 students who plan to go to graduate school, 126 indicated \"Other\" majors. Conditional percentage = (126/280) × 100% = 45%."
    },
    {
      id: 72,
      question: "Categorical data can be graphically represented by using a(n)",
      options: [
        {
          text: "histogram",
          tooltip: "INCORRECT: Histograms are used for quantitative data."
        },
        {
          text: "frequency polygon",
          tooltip: "INCORRECT: Frequency polygons are used for quantitative data."
        },
        {
          text: "ogive",
          tooltip: "INCORRECT: Ogives (cumulative frequency curves) are used for quantitative data."
        },
        {
          text: "bar chart",
          tooltip: "CORRECT: Bar charts are the appropriate graphical representation for categorical data."
        }
      ],
      correctAnswer: "bar chart",
      explanation: "Bar charts are used to graphically represent categorical data, with bars separated by spaces to emphasize the discrete nature of categories."
    },
    {
      id: 73,
      question: "The following data show the number of hours worked by 200 statistics students. The class width for this distribution",
      dataTable: Utils.createBlueTable(
        ['Number of Hours', 'Frequency'],
        [
          ['0 - 9', '40'],
          ['10 - 19', '50'],
          ['20 - 29', '70'],
          ['30 - 39', '40']
        ]
      ),
      options: [
        {
          text: "is 9",
          tooltip: "INCORRECT: The class width is the difference between upper and lower boundaries."
        },
        {
          text: "is 10",
          tooltip: "CORRECT: Each class spans 10 hours (0-9 is 10 values: 0,1,2,3,4,5,6,7,8,9)."
        },
        {
          text: "is 11",
          tooltip: "INCORRECT: This would be if we counted both endpoints inclusively in a different way."
        },
        {
          text: "varies from class to class",
          tooltip: "INCORRECT: All classes have the same width in this distribution."
        }
      ],
      correctAnswer: "is 10",
      explanation: "The class width is 10. Each class contains 10 possible values (e.g., 0-9 contains 0,1,2,3,4,5,6,7,8,9)."
    },
    {
      id: 74,
      question: "The following data show the number of hours worked by 200 statistics students. The number of students working 19 hours or less",
      dataTable: Utils.createBlueTable(
        ['Number of Hours', 'Frequency'],
        [
          ['0 - 9', '40'],
          ['10 - 19', '50'],
          ['20 - 29', '70'],
          ['30 - 39', '40']
        ]
      ),
      options: [
        {
          text: "is 40",
          tooltip: "INCORRECT: This is only the frequency for the 0-9 hours class."
        },
        {
          text: "is 50",
          tooltip: "INCORRECT: This is only the frequency for the 10-19 hours class."
        },
        {
          text: "is 90",
          tooltip: "CORRECT: Students working 19 hours or less include those in 0-9 hours (40) and 10-19 hours (50). Total = 40 + 50 = 90."
        },
        {
          text: "cannot be determined without the original data",
          tooltip: "INCORRECT: We can determine this from the frequency distribution."
        }
      ],
      correctAnswer: "is 90",
      explanation: "Students working 19 hours or less include those in the 0-9 hours class (40 students) and the 10-19 hours class (50 students). Total = 40 + 50 = 90 students."
    },
    {
      id: 75,
      question: "The following data show the number of hours worked by 200 statistics students. The relative frequency of students working 9 hours or less",
      dataTable: Utils.createBlueTable(
        ['Number of Hours', 'Frequency'],
        [
          ['0 - 9', '40'],
          ['10 - 19', '50'],
          ['20 - 29', '70'],
          ['30 - 39', '40']
        ]
      ),
      options: [
        {
          text: "is .2",
          tooltip: "CORRECT: 40 students work 9 hours or less out of 200 total. Relative frequency = 40/200 = 0.2."
        },
        {
          text: "is .45",
          tooltip: "INCORRECT: This would be 90/200, which includes students working up to 19 hours."
        },
        {
          text: "is 40",
          tooltip: "INCORRECT: This is the frequency, not the relative frequency."
        },
        {
          text: "cannot be determined from the information given",
          tooltip: "INCORRECT: We can calculate this from the given data."
        }
      ],
      correctAnswer: "is .2",
      explanation: "40 students work 9 hours or less (in the 0-9 class) out of 200 total students. Relative frequency = 40/200 = 0.2."
    },
    {
      id: 76,
      question: "The following data show the number of hours worked by 200 statistics students. The cumulative relative frequency for the class of 10 - 19",
      dataTable: Utils.createBlueTable(
        ['Number of Hours', 'Frequency'],
        [
          ['0 - 9', '40'],
          ['10 - 19', '50'],
          ['20 - 29', '70'],
          ['30 - 39', '40']
        ]
      ),
      options: [
        {
          text: "is 90",
          tooltip: "INCORRECT: This is the cumulative frequency, not the cumulative relative frequency."
        },
        {
          text: "is .25",
          tooltip: "INCORRECT: This is the relative frequency of the 10-19 class only."
        },
        {
          text: "is .45",
          tooltip: "CORRECT: Cumulative relative frequency up to 19 hours = (40 + 50)/200 = 90/200 = 0.45."
        },
        {
          text: "cannot be determined from the information given",
          tooltip: "INCORRECT: We can calculate this from the given data."
        }
      ],
      correctAnswer: "is .45",
      explanation: "Cumulative relative frequency for 10-19 class includes all students working 19 hours or less: (40 + 50)/200 = 90/200 = 0.45."
    },
    {
      id: 77,
      question: "A researcher has collected the following sample data. The mean of the sample is 5. The variance is",
      dataTable: "3, 5, 12, 3, 2",
      options: [
        {
          text: "80",
          tooltip: "INCORRECT: This value is too large."
        },
        {
          text: "4.062",
          tooltip: "INCORRECT: This is the standard deviation, not the variance."
        },
        {
          text: "13.2",
          tooltip: "INCORRECT: This value is incorrect."
        },
        {
          text: "16.5",
          tooltip: "CORRECT: Variance = Σ(x-μ)²/(n-1). With mean=5 and the given data, variance = 16.5."
        }
      ],
      correctAnswer: "16.5",
      explanation: "With the sample data (3,5,12,3,2) and mean=5, the sample variance s² = Σ(x-x̄)²/(n-1) = 66/4 = 16.5."
    },
    {
      id: 78,
      question: "A researcher has collected the following sample data. The mean of the sample is 5. The standard deviation is",
      dataTable: "3, 5, 12, 3, 2",
      options: [
        {
          text: "8.944",
          tooltip: "INCORRECT: This value is too large."
        },
        {
          text: "4.062",
          tooltip: "CORRECT: Standard deviation s = √variance = √16.5 ≈ 4.062."
        },
        {
          text: "13.2",
          tooltip: "INCORRECT: This value is incorrect."
        },
        {
          text: "16.5",
          tooltip: "INCORRECT: This is the variance, not the standard deviation."
        }
      ],
      correctAnswer: "4.062",
      explanation: "The standard deviation is the square root of the variance. s = √16.5 ≈ 4.062."
    },
    {
      id: 79,
      question: "A researcher has collected the following sample data. The mean of the sample is 5. The coefficient of variation is",
      dataTable: "3, 5, 12, 3, 2",
      options: [
        {
          text: "72.66%",
          tooltip: "INCORRECT: This is not the correct calculation."
        },
        {
          text: "81.24%",
          tooltip: "CORRECT: CV = (standard deviation / mean) × 100% = (4.062 / 5) × 100% ≈ 81.24%."
        },
        {
          text: "264%",
          tooltip: "INCORRECT: This value is too large."
        },
        {
          text: "330%",
          tooltip: "INCORRECT: This value is too large."
        }
      ],
      correctAnswer: "81.24%",
      explanation: "Coefficient of variation = (standard deviation / mean) × 100% = (4.062 / 5) × 100% ≈ 81.24%."
    },
    {
      id: 80,
      question: "A researcher has collected the following sample data. The mean of the sample is 5. The range is",
      dataTable: "3, 5, 12, 3, 2",
      options: [
        {
          text: "1",
          tooltip: "INCORRECT: This is too small."
        },
        {
          text: "2",
          tooltip: "INCORRECT: This is the minimum value, not the range."
        },
        {
          text: "10",
          tooltip: "CORRECT: Range = Maximum - Minimum = 12 - 2 = 10."
        },
        {
          text: "12",
          tooltip: "INCORRECT: This is the maximum value, not the range."
        }
      ],
      correctAnswer: "10",
      explanation: "Range = Maximum value - Minimum value = 12 - 2 = 10."
    },
    {
      id: 81,
      question: "A researcher has collected the following sample data. The mean of the sample is 5. The interquartile range is",
      dataTable: "3, 5, 12, 3, 2",
      options: [
        {
          text: "1",
          tooltip: "INCORRECT: This is too small for the IQR."
        },
        {
          text: "2",
          tooltip: "CORRECT: After ordering the data (2,3,3,5,12), Q1=3 and Q3=5, so IQR = Q3-Q1 = 5-3 = 2."
        },
        {
          text: "10",
          tooltip: "INCORRECT: This is the range, not the IQR."
        },
        {
          text: "12",
          tooltip: "INCORRECT: This is the maximum value."
        }
      ],
      correctAnswer: "2",
      explanation: "After ordering the data (2,3,3,5,12): Q1=3, Q3=5. IQR = Q3 - Q1 = 5 - 3 = 2."
    },
    {
      id: 82,
      question: "Of the last 100 customers entering a computer shop, 25 have purchased a computer. If the classical method for computing probability is used, the probability that the next customer will purchase a computer is",
      options: [
        {
          text: "0.25",
          tooltip: "CORRECT: Using the classical method, probability = 25/100 = 0.25."
        },
        {
          text: "0.50",
          tooltip: "INCORRECT: This would be if 50 customers purchased a computer."
        },
        {
          text: "1.00",
          tooltip: "INCORRECT: This would mean certainty, which is not the case."
        },
        {
          text: "0.75",
          tooltip: "INCORRECT: This would be the probability of NOT purchasing a computer."
        }
      ],
      correctAnswer: "0.25",
      explanation: "Using the classical method, probability = number of favorable outcomes / total number of outcomes = 25/100 = 0.25."
    },
    {
      id: 83,
      question: "In an experiment, events A and B are mutually exclusive. If P(A) = 0.6, then the probability of B",
      options: [
        {
          text: "cannot be larger than 0.4",
          tooltip: "CORRECT: Since A and B are mutually exclusive, P(A) + P(B) ≤ 1, so P(B) ≤ 1 - 0.6 = 0.4."
        },
        {
          text: "can be any value greater than 0.6",
          tooltip: "INCORRECT: This would violate the probability rule that P(A) + P(B) ≤ 1 for mutually exclusive events."
        },
        {
          text: "can be any value between 0 to 1",
          tooltip: "INCORRECT: The constraint that P(A) + P(B) ≤ 1 limits P(B)."
        },
        {
          text: "cannot be determined with the information given",
          tooltip: "INCORRECT: We can determine the upper bound for P(B)."
        }
      ],
      correctAnswer: "cannot be larger than 0.4",
      explanation: "For mutually exclusive events, P(A ∪ B) = P(A) + P(B) ≤ 1. Since P(A) = 0.6, we have P(B) ≤ 1 - 0.6 = 0.4."
    },
    {
      id: 84,
      question: "The sample size",
      options: [
        {
          text: "can be larger than the population size",
          tooltip: "INCORRECT: A sample cannot be larger than the population it's drawn from."
        },
        {
          text: "is always smaller than the population size",
          tooltip: "CORRECT: A sample is a subset of the population, so it must be smaller than or equal to the population size."
        },
        {
          text: "can be larger or smaller than the population size",
          tooltip: "INCORRECT: A sample cannot be larger than the population."
        },
        {
          text: "is always equal to the size of the population",
          tooltip: "INCORRECT: When the sample equals the population, it's called a census, not sampling."
        }
      ],
      correctAnswer: "is always smaller than the population size",
      explanation: "A sample is a subset of the population, so the sample size must be smaller than or equal to the population size. When it equals the population size, it's called a census."
    },
    {
      id: 85,
      question: "If a coin is tossed three times, the likelihood of obtaining three heads in a row is",
      options: [
        {
          text: "zero",
          tooltip: "INCORRECT: It's possible, though unlikely, to get three heads."
        },
        {
          text: "0.500",
          tooltip: "INCORRECT: This would be the probability of getting heads on a single toss."
        },
        {
          text: "0.875",
          tooltip: "INCORRECT: This is not the correct calculation."
        },
        {
          text: "0.125",
          tooltip: "CORRECT: P(HHH) = P(H) × P(H) × P(H) = 0.5 × 0.5 × 0.5 = 0.125."
        }
      ],
      correctAnswer: "0.125",
      explanation: "For three independent coin tosses, P(three heads) = P(H) × P(H) × P(H) = 0.5 × 0.5 × 0.5 = 0.125."
    }
  ],

  // Notes data organized by category - merged from modules
  notes: {
    ...(typeof MODULE1_NOTES !== 'undefined' ? MODULE1_NOTES : {}),
    ...(typeof MODULE2_NOTES !== 'undefined' ? MODULE2_NOTES : {}),
    ...(typeof MODULE3_NOTES !== 'undefined' ? MODULE3_NOTES : {}),
    ...(typeof MODULE3_VARIABILITY_NOTES !== 'undefined' ? MODULE3_VARIABILITY_NOTES : {}),
    ...(typeof MODULE4_DISTRIBUTION_SHAPE_NOTES !== 'undefined' ? MODULE4_DISTRIBUTION_SHAPE_NOTES : {}),
    ...(typeof MODULE5_FIVE_NUMBER_SUMMARY_NOTES !== 'undefined' ? MODULE5_FIVE_NUMBER_SUMMARY_NOTES : {}),
    ...(typeof MODULE6_ASSOCIATION_MEASURES_NOTES !== 'undefined' ? MODULE6_ASSOCIATION_MEASURES_NOTES : {}),
    ...(typeof MODULE7_KEY_FORMULAS_NOTES !== 'undefined' ? MODULE7_KEY_FORMULAS_NOTES : {}),
    ...(typeof MODULE8_PROBABILITY_BASICS_NOTES !== 'undefined' ? MODULE8_PROBABILITY_BASICS_NOTES : {}),
    ...(typeof MODULE9_PROBABILITY_RULES_NOTES !== 'undefined' ? MODULE9_PROBABILITY_RULES_NOTES : {}),
    ...(typeof MODULE10_INDEPENDENCE_NOTES !== 'undefined' ? MODULE10_INDEPENDENCE_NOTES : {}),
    ...(typeof MODULE11_BAYES_NOTES !== 'undefined' ? MODULE11_BAYES_NOTES : {}),
    ...(typeof MODULE12_DISCRETE_DISTRIBUTIONS_NOTES !== 'undefined' ? MODULE12_DISCRETE_DISTRIBUTIONS_NOTES : {}),
    ...(typeof MODULE13_BINOMIAL_NOTES !== 'undefined' ? MODULE13_BINOMIAL_NOTES : {}),
    ...(typeof MODULE14_POISSON_NOTES !== 'undefined' ? MODULE14_POISSON_NOTES : {}),
    ...(typeof MODULE15_GLOSSARY_NOTES !== 'undefined' ? MODULE15_GLOSSARY_NOTES : {}),
    ...(typeof MODULE16_KEY_FORMULAS_NOTES !== 'undefined' ? MODULE16_KEY_FORMULAS_NOTES : {}),
    ...(typeof MODULE4_CONTINUOUS_DISTRIBUTIONS_NOTES !== 'undefined' ? MODULE4_CONTINUOUS_DISTRIBUTIONS_NOTES : {}),
    ...(typeof MODULE4_GLOSSARY_NOTES !== 'undefined' ? MODULE4_GLOSSARY_NOTES : {}),
    ...(typeof MODULE4_KEY_FORMULAS_NOTES !== 'undefined' ? MODULE4_KEY_FORMULAS_NOTES : {})
  },

  // All legacy content removed - now using modular approach with MODULE1_NOTES and MODULE2_NOTES

  }
