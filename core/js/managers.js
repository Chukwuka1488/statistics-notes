// Manager classes - applying YAGNI principle by only including what's needed
const TabManager = {
    currentTab: 'week1',
    currentSubTab: 'overview',

    showTab: (tabName) => {
        Utils.hideAll('.tab-panel');
        Utils.removeActiveClass('.tab-btn');
        Utils.showElement(tabName);
        Utils.addActiveClass(event.target);
        
        TabManager.currentTab = tabName;
        
        if (tabName === 'week1') {
            TabManager.showSubTab(TabManager.currentSubTab);
        } else if (tabName === 'week2') {
            TabManager.showSubTab('overview2');
        } else if (tabName === 'week3') {
            TabManager.showSubTab('probabilityBasics');
        } else if (tabName === 'week4') {
            TabManager.showSubTab('continuousDistributions');
        } else if (tabName === 'week5') {
            TabManager.showSubTab('hypothesisBasics');
        } else if (tabName === 'week6') {
            TabManager.showSubTab('populationVariance');
        } else if (tabName === 'general') {
            NotesManager.displayGeneralNotes();
        }
    },

    showSubTab: (subTabName) => {
        Utils.hideAll('.sub-tab-panel');
        Utils.removeActiveClass('.sub-tab-btn');
        Utils.showElement(subTabName);
        Utils.addActiveClass(event.target);
        
        TabManager.currentSubTab = subTabName;
        
        const displayMap = {
            'overview': () => NotesManager.displayNotes('overview'),
            'types': () => NotesManager.displayNotes('types'),
            'dataTypes': () => NotesManager.displayNotes('dataTypes'),
            'scales': () => NotesManager.displayNotes('scales'),
            'quiz': () => QuizManager.displayQuiz(),
            'overview2': () => NotesManager.displayNotes('overview2'),
            'categorical': () => NotesManager.displayNotes('categorical'),
            'quantitative': () => NotesManager.displayNotes('quantitative'),
            'twoVariables': () => NotesManager.displayNotes('twoVariables'),
            'graphicalDisplay': () => NotesManager.displayNotes('graphicalDisplay'),
            'bestPractices': () => NotesManager.displayNotes('bestPractices'),
            'measuresOfLocation': () => NotesManager.displayMeasuresOfLocation(),
            'measuresOfVariability': () => NotesManager.displayNotes('measuresOfVariability'),
            'distributionShape': () => NotesManager.displayNotes('distributionShape'),
            'fiveNumberSummary': () => NotesManager.displayNotes('fiveNumberSummary'),
            'associationMeasures': () => NotesManager.displayNotes('associationMeasures'),
            'keyFormulasModule2': () => NotesManager.displayNotes('keyFormulas'),
            'quiz2': () => QuizManager.displayQuiz2(),
            'probabilityBasics': () => NotesManager.displayNotes('probabilityBasics'),
            'probabilityRules': () => NotesManager.displayNotes('probabilityRules'),
            'independence': () => NotesManager.displayNotes('independence'),
            'bayesTheorem': () => NotesManager.displayNotes('bayesTheorem'),
            'discreteDistributions': () => NotesManager.displayNotes('discreteDistributions'),
            'binomialDistribution': () => NotesManager.displayNotes('binomialDistribution'),
            'poissonDistribution': () => NotesManager.displayNotes('poissonDistribution'),
            'glossary': () => NotesManager.displayNotes('glossary'),
            'keyFormulas': () => NotesManager.displayNotes('keyFormulas'),
            'exam': () => QuizManager.displayExam(),
            'quiz3': () => QuizManager.displayQuiz3(),
            'continuousDistributions': () => NotesManager.displayNotes('continuousDistributions'),
            'uniformDistribution': () => NotesManager.displayNotes('uniformDistribution'),
            'normalDistribution': () => NotesManager.displayNotes('normalDistribution'),
            'exponentialDistribution': () => NotesManager.displayNotes('exponentialDistribution'),
            'samplingMethods': () => NotesManager.displayNotes('samplingMethods'),
            'centralLimitTheorem': () => NotesManager.displayNotes('centralLimitTheorem'),
            'intervalEstimation': () => NotesManager.displayNotes('intervalEstimation'),
                    'sampleSize': () => NotesManager.displayNotes('sampleSize'),
        'glossaryModule4': () => NotesManager.displayNotes('glossaryModule4'),
        'keyFormulasModule4': () => NotesManager.displayNotes('keyFormulasModule4'),
        'quiz4': () => QuizManager.displayQuiz4(),
        'exam4': () => QuizManager.displayExam4(),
        'hypothesisBasics': () => NotesManager.displayNotes('hypothesisBasics'),
        'onePopulationMean': () => NotesManager.displayNotes('onePopulationMean'),
        'populationMeanSigmaUnknown': () => NotesManager.displayNotes('populationMeanSigmaUnknown'),
        'populationProportion': () => NotesManager.displayNotes('populationProportion'),
        'pValueApproach': () => NotesManager.displayNotes('pValueApproach'),
        'typeITypeII': () => NotesManager.displayNotes('typeITypeII'),
        'twoPopulationMeans': () => NotesManager.displayNotes('twoPopulationMeans'),
        'matchedSamples': () => NotesManager.displayNotes('matchedSamples'),
        'practicalApplications': () => NotesManager.displayNotes('practicalApplications'),
        'glossaryModule5': () => NotesManager.displayNotes('glossaryModule5'),
                'keyFormulasModule5': () => NotesManager.displayNotes('keyFormulasModule5'),
        'quiz5': () => QuizManager.displayQuiz5(),
        'exam5': () => QuizManager.displayExam5(),
        'populationVariance': () => NotesManager.displayNotes('populationVariance'),
        'twoPopulationVariances': () => NotesManager.displayNotes('twoPopulationVariances'),
        'anova': () => NotesManager.displayNotes('anova'),
        'goodnessOfFit': () => NotesManager.displayNotes('goodnessOfFit'),
        'independence': () => NotesManager.displayNotes('independence'),
        'keyFormulasModule6': () => NotesManager.displayNotes('keyFormulasModule6'),
        'glossaryModule6': () => NotesManager.displayNotes('glossaryModule6'),
        'quiz6': () => QuizManager.displayQuiz6(),
        'exam6': () => QuizManager.displayExam6()
    };
        
        if (displayMap[subTabName]) {
            displayMap[subTabName]();
        }
    }
};

const NotesManager = {
    displayNotes: (category) => {
        // Handle special case for Module 2 Key Formulas
        let sectionId;
        if (TabManager.currentSubTab === 'keyFormulasModule2') {
            sectionId = 'keyFormulasModule2NotesSection';
        } else if (TabManager.currentSubTab === 'glossaryModule4') {
            sectionId = 'glossaryModule4NotesSection';
        } else if (TabManager.currentSubTab === 'keyFormulasModule4') {
            sectionId = 'keyFormulasModule4NotesSection';
        } else if (TabManager.currentTab === 'week5') {
            // Handle Module 5 notes from global variables
            sectionId = `${category}NotesSection`;
        } else {
            sectionId = `${category}NotesSection`;
        }
        
        const notesSection = document.getElementById(sectionId);
        if (!notesSection) {
            console.error(`Element with ID '${sectionId}' not found`);
            return;
        }
        notesSection.innerHTML = '';
        
        // Debug: Check if DATA is defined
        if (typeof DATA === 'undefined') {
            console.error('DATA is not defined');
            notesSection.innerHTML = '<p>Error: Data not loaded properly</p>';
            return;
        }
        
        // Handle Module 5 notes from global variables
        if (TabManager.currentTab === 'week5') {
            const module5NotesMap = {
                'hypothesisBasics': window.MODULE5_HYPOTHESIS_BASICS_NOTES?.hypothesisBasics,
                'onePopulationMean': window.MODULE5_ONE_POPULATION_MEAN_NOTES?.onePopulationMean,
                'populationMeanSigmaUnknown': window.MODULE5_POPULATION_MEAN_SIGMA_UNKNOWN_NOTES?.populationMeanSigmaUnknown,
                'populationProportion': window.MODULE5_POPULATION_PROPORTION_NOTES?.populationProportion,
                'pValueApproach': window.MODULE5_P_VALUE_NOTES?.pValueApproach,
                'typeITypeII': window.MODULE5_TYPE_I_TYPE_II_NOTES?.typeITypeII,
                'twoPopulationMeans': window.MODULE5_TWO_POPULATION_MEANS_NOTES?.twoPopulationMeans,
                'matchedSamples': window.MODULE5_MATCHED_SAMPLES_NOTES?.matchedSamples,
                'twoPopulationProportions': window.MODULE5_TWO_POPULATION_PROPORTIONS_NOTES?.twoPopulationProportions,
                'practicalApplications': window.MODULE5_PRACTICAL_APPLICATIONS_NOTES?.practicalApplications,
                'glossaryModule5': window.MODULE5_GLOSSARY_NOTES?.glossaryModule5,
                'keyFormulasModule5': window.MODULE5_KEY_FORMULAS_NOTES?.keyFormulasModule5
            };
            
            const module5Content = module5NotesMap[category];
            if (module5Content) {
                notesSection.innerHTML = module5Content;
            } else {
                console.warn(`No Module 5 notes found for category: ${category}`);
                notesSection.innerHTML = '<p>No content available for this section.</p>';
            }
        } else if (TabManager.currentTab === 'week6') {
            const module6NotesMap = {
                'populationVariance': window.MODULE6_POPULATION_VARIANCE_NOTES?.populationVariance,
                'twoPopulationVariances': window.MODULE6_TWO_POPULATION_VARIANCES_NOTES?.twoPopulationVariances,
                'anova': window.MODULE6_ANOVA_NOTES?.anova,
                'goodnessOfFit': window.MODULE6_GOODNESS_OF_FIT_NOTES?.goodnessOfFit,
                'independence': window.MODULE6_INDEPENDENCE_NOTES?.independence,
                'keyFormulasModule6': window.MODULE6_KEY_FORMULAS_NOTES?.keyFormulasModule6,
                'glossaryModule6': window.MODULE6_GLOSSARY_NOTES?.glossaryModule6
            };
            
            const module6Content = module6NotesMap[category];
            if (module6Content) {
                notesSection.innerHTML = module6Content;
            } else {
                console.warn(`No Module 6 notes found for category: ${category}`);
                notesSection.innerHTML = '<p>No content available for this section.</p>';
            }
        } else {
            // Handle nested structure of notes for other modules
            const categoryNotes = DATA.notes[category];
            if (categoryNotes) {
                // If it's a string (HTML content), display it directly
                if (typeof categoryNotes === 'string') {
                    notesSection.innerHTML = categoryNotes;
                }
                // If it's an array, use it directly
                else if (Array.isArray(categoryNotes)) {
                    categoryNotes.forEach((note, index) => {
                        const noteElement = Utils.createNoteElement(note);
                        notesSection.appendChild(noteElement);
                    });
                } 
                // If it's an object with nested categories, flatten them
                else if (typeof categoryNotes === 'object') {
                    Object.values(categoryNotes).forEach(noteArray => {
                        if (Array.isArray(noteArray)) {
                            noteArray.forEach(note => {
                                const noteElement = Utils.createNoteElement(note);
                                notesSection.appendChild(noteElement);
                            });
                        }
                    });
                }
            } else {
                console.warn(`No notes found for category: ${category}`);
                notesSection.innerHTML = '<p>No content available for this section.</p>';
            }
        }
        
        // Render Mermaid charts and Chart.js charts after content is loaded
        setTimeout(() => {
            Utils.renderMermaidCharts();
            Utils.renderCharts();
        }, 100);
    },

    displayGeneralNotes: () => {
        const notesSection = document.getElementById('generalNotesSection');
        notesSection.innerHTML = '';
        
        // General notes would be added here if needed
        // For now, it's empty as per YAGNI principle
    },

    displayMeasuresOfLocation: () => {
        const notesSection = document.getElementById('measuresOfLocationNotesSection');
        notesSection.innerHTML = '';

        // Helper function to extract notes from nested structure
        const extractNotes = (category) => {
            const notes = DATA.notes[category];
            if (!notes) return [];
            
            if (Array.isArray(notes)) {
                return notes;
            } else if (typeof notes === 'object') {
                return Object.values(notes).flat();
            }
            return [];
        };

        // Combine all measures of location notes into one comprehensive display
        const allMeasuresNotes = [
            ...extractNotes('overview3'),
            ...extractNotes('mean'),
            ...extractNotes('median'),
            ...extractNotes('mode'),
            ...extractNotes('percentiles')
        ];

        allMeasuresNotes.forEach(note => {
            const noteElement = Utils.createNoteElement(note);
            notesSection.appendChild(noteElement);
        });

        // Render charts and Mermaid diagrams after content is loaded
        Utils.renderMermaidCharts();
        Utils.renderCharts();
    }
};

const QuizManager = {
    displayQuiz: () => {
        const quizSection = document.getElementById('quizSection');
        quizSection.innerHTML = '';

        // Filter Module 1 quiz questions (IDs 1-20)
        const module1Questions = DATA.quizQuestions.filter(q => q.id >= 1 && q.id <= 20);
        
        module1Questions.forEach((question, index) => {
            const questionElement = Utils.createQuizElement(question, index);
            quizSection.appendChild(questionElement);
        });
    },

    showAnswer: (questionId, selectedOption) => {
        const question = DATA.quizQuestions.find(q => q.id === questionId);
        const answerDiv = document.getElementById(`answer-${questionId}`);
        
        answerDiv.style.display = 'block';
    },

    displayQuiz2: () => {
        const quizSection = document.getElementById('quiz2Section');
        quizSection.innerHTML = '';

        // Filter Module 2 quiz questions (IDs 21-40)
        const module2Questions = DATA.quizQuestions.filter(q => q.id >= 21 && q.id <= 40);
        
        module2Questions.forEach((question, index) => {
            const questionElement = Utils.createQuizElement(question, index);
            quizSection.appendChild(questionElement);
        });
    },

    displayQuiz3: () => {
        const quizSection = document.getElementById('quiz3Section');
        quizSection.innerHTML = '';

        // Filter Module 3 quiz questions (IDs 41-57)
        const module3Questions = DATA.quizQuestions.filter(q => q.id >= 41 && q.id <= 57);
        
        module3Questions.forEach((question, index) => {
            const questionElement = Utils.createQuizElement(question, index);
            quizSection.appendChild(questionElement);
        });
    },

    displayExam: () => {
        const examSection = document.getElementById('examSection');
        
        if (!examSection) {
            console.error('examSection element not found!');
            return;
        }
        
        examSection.innerHTML = '';

        // Add exam header
        const examHeader = document.createElement('div');
        examHeader.className = 'exam-header';
        examHeader.innerHTML = `
            <h2>Module 3 Exam</h2>
            <p><strong>Instructions:</strong> Answer all 25 questions. Each question is worth 4 points. Total: 100 points.</p>
            <p><strong>Time:</strong> This is a self-paced practice exam. Take your time to understand each concept.</p>
        `;
        examSection.appendChild(examHeader);

        // Filter exam questions (IDs 61-85)
        const examQuestions = DATA.quizQuestions.filter(q => q.id >= 61 && q.id <= 85);
        
        examQuestions.forEach((question, index) => {
            const questionElement = Utils.createQuizElement(question, index);
            examSection.appendChild(questionElement);
        });
    },

    displayQuiz4: () => {
        const quizSection = document.getElementById('quiz4Section');
        quizSection.innerHTML = '';

        // Filter Module 4 quiz questions (IDs 111-145)
        const module4Questions = DATA.quizQuestions.filter(q => q.id >= 111 && q.id <= 145);
        
        module4Questions.forEach((question, index) => {
            const questionElement = Utils.createQuizElement(question, index);
            quizSection.appendChild(questionElement);
        });
    },

    displayExam4: () => {
        const examSection = document.getElementById('exam4Section');
        
        if (!examSection) {
            console.error('exam4Section element not found!');
            return;
        }
        
        examSection.innerHTML = '';

        // Add exam header
        const examHeader = document.createElement('div');
        examHeader.className = 'exam-header';
        examHeader.innerHTML = `
            <h2>Module 4 Exam: Continuous Distributions & Sampling</h2>
            <p><strong>Instructions:</strong> Answer all 25 questions. Each question is worth 4 points. Total: 100 points.</p>
            <p><strong>Topics Covered:</strong> Binomial, Normal, Uniform, and Exponential distributions; Central Limit Theorem; Sampling distributions; Confidence intervals.</p>
            <p><strong>Time:</strong> This is a self-paced practice exam. Take your time to understand each concept.</p>
        `;
        examSection.appendChild(examHeader);

        // Filter Module 4 exam questions (IDs 86-110)
        const examQuestions = DATA.quizQuestions.filter(q => q.id >= 86 && q.id <= 110);
        
        examQuestions.forEach((question, index) => {
            const questionElement = Utils.createQuizElement(question, index);
            examSection.appendChild(questionElement);
        });
    },

    displayQuiz5: () => {
        const quizSection = document.getElementById('quiz5Section');
        quizSection.innerHTML = '';

        // Check if Module 5 quiz content is available
        if (window.MODULE5_PRACTICAL_APPLICATIONS_NOTES && window.MODULE5_PRACTICAL_APPLICATIONS_NOTES.module5Quiz) {
            quizSection.innerHTML = window.MODULE5_PRACTICAL_APPLICATIONS_NOTES.module5Quiz;
        } else {
            // Fallback if content not loaded
            quizSection.innerHTML = `
                <div style="text-align: center; color: #666; font-style: italic; margin: 40px;">
                    <p>Loading Module 5 quiz...</p>
                    <p>If this message persists, please refresh the page.</p>
                    <p>Debug: MODULE5_PRACTICAL_APPLICATIONS_NOTES = ${typeof window.MODULE5_PRACTICAL_APPLICATIONS_NOTES}</p>
                </div>
            `;
        }
    },

    displayExam5: () => {
        const examSection = document.getElementById('exam5Section');
        
        if (!examSection) {
            console.error('exam5Section element not found!');
            return;
        }
        
        examSection.innerHTML = '';

        // Add exam header
        const examHeader = document.createElement('div');
        examHeader.className = 'exam-header';
        examHeader.innerHTML = `
            <h2>Module 5 Exam: Hypothesis Tests & Mean Comparisons</h2>
            <p><strong>Instructions:</strong> Answer all questions. Each question is worth 4 points.</p>
            <p><strong>Topics Covered:</strong> Hypothesis testing procedures, p-values, Type I & II errors, one and two population means, matched samples.</p>
            <p><strong>Time:</strong> This is a self-paced practice exam. Take your time to understand each concept.</p>
        `;
        examSection.appendChild(examHeader);

        // Placeholder for Module 5 exam questions
        examSection.innerHTML += '<p style="text-align: center; color: #666; font-style: italic; margin: 40px;">Module 5 exam questions will be added soon...</p>';
    },

    displayQuiz6: () => {
        const quizSection = document.getElementById('quiz6Section');
        quizSection.innerHTML = '<p style="text-align: center; color: #666; font-style: italic; margin: 40px;">Module 6 quiz questions will be added soon...</p>';
    }
}; 