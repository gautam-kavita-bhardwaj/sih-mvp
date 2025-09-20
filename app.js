// Application Data
const appData = {
  "careers": [
    {
      "id": 1,
      "title": "Software Engineer",
      "description": "Design, develop, and maintain software applications and systems",
      "education_path": "B.Tech Computer Science → Specialization/Certification",
      "salary_range": "₹4-15 LPA",
      "growth_prospects": "Excellent - High demand, rapid career progression",
      "required_skills": ["Programming", "Problem Solving", "Logical Thinking", "Mathematics"],
      "personality_match": ["analytical", "logical", "detail-oriented"],
      "interest_areas": ["technology", "problem-solving", "innovation"]
    },
    {
      "id": 2,
      "title": "Civil Engineer",
      "description": "Plan, design, and oversee construction of infrastructure projects",
      "education_path": "B.Tech Civil Engineering → Site Experience → Project Management",
      "salary_range": "₹3-10 LPA",
      "growth_prospects": "Good - Steady demand from infrastructure development",
      "required_skills": ["Technical Drawing", "Project Management", "Problem Solving", "Team Leadership"],
      "personality_match": ["practical", "organized", "leadership-oriented"],
      "interest_areas": ["construction", "design", "public service"]
    },
    {
      "id": 3,
      "title": "Doctor (MBBS)",
      "description": "Diagnose and treat illnesses, promote health and wellness",
      "education_path": "NEET → MBBS (5.5 years) → Specialization (Optional)",
      "salary_range": "₹6-25+ LPA",
      "growth_prospects": "Excellent - Always in demand, high social respect",
      "required_skills": ["Empathy", "Critical Thinking", "Memory", "Communication", "Stress Management"],
      "personality_match": ["caring", "analytical", "responsible"],
      "interest_areas": ["biology", "helping-others", "science"]
    },
    {
      "id": 4,
      "title": "Chartered Accountant",
      "description": "Manage financial records, taxation, and provide business advisory services",
      "education_path": "12th Commerce → CA Foundation → CA Intermediate → CA Final",
      "salary_range": "₹5-20+ LPA",
      "growth_prospects": "Excellent - High demand in business and finance",
      "required_skills": ["Numerical Ability", "Attention to Detail", "Analytical Skills", "Communication"],
      "personality_match": ["detail-oriented", "analytical", "ethical"],
      "interest_areas": ["mathematics", "business", "finance"]
    },
    {
      "id": 5,
      "title": "Teacher/Professor",
      "description": "Educate and inspire students, contribute to academic research",
      "education_path": "B.Ed/B.A./B.Sc → M.A./M.Sc → Ph.D (for Professor)",
      "salary_range": "₹3-12 LPA",
      "growth_prospects": "Steady - Respected profession with job security",
      "required_skills": ["Communication", "Patience", "Subject Knowledge", "Leadership", "Creativity"],
      "personality_match": ["patient", "communicative", "nurturing"],
      "interest_areas": ["teaching", "research", "working-with-people"]
    },
    {
      "id": 6,
      "title": "Graphic Designer",
      "description": "Create visual content for digital and print media",
      "education_path": "B.Des/BFA → Portfolio Building → Specialization",
      "salary_range": "₹2.5-8 LPA",
      "growth_prospects": "Good - Growing digital marketing industry",
      "required_skills": ["Creativity", "Visual Arts", "Software Skills", "Communication"],
      "personality_match": ["creative", "artistic", "detail-oriented"],
      "interest_areas": ["arts", "creativity", "technology"]
    },
    {
      "id": 7,
      "title": "IAS Officer",
      "description": "Civil service administration and policy implementation",
      "education_path": "Any Graduation → UPSC Preparation → Civil Services Exam",
      "salary_range": "₹8-25+ LPA",
      "growth_prospects": "Excellent - High prestige and social impact",
      "required_skills": ["Leadership", "Decision Making", "Communication", "General Knowledge", "Ethics"],
      "personality_match": ["leadership-oriented", "responsible", "ethical"],
      "interest_areas": ["public-service", "leadership", "social-impact"]
    }
  ],
  "colleges": [
    {
      "id": 1,
      "name": "Delhi University",
      "location": "New Delhi, Delhi",
      "type": "Central University",
      "courses": ["B.A.", "B.Sc.", "B.Com", "B.Tech", "M.A.", "M.Sc."],
      "fees": "₹15,000-45,000/year",
      "ranking": "NIRF Rank 12 (2024)",
      "admission_process": "CUET/Merit Based",
      "facilities": ["Library", "Hostel", "Sports Complex", "Research Centers"],
      "placement_rate": "78%",
      "contact": "admission@du.ac.in",
      "deadline": "June 30, 2025",
      "cutoff": "90%+ for popular courses"
    },
    {
      "id": 2,
      "name": "Jawaharlal Nehru University",
      "location": "New Delhi, Delhi",
      "type": "Central University",
      "courses": ["B.A.", "M.A.", "M.Phil", "Ph.D", "MCA"],
      "fees": "₹20,000-60,000/year",
      "ranking": "NIRF Rank 2 (University Category)",
      "admission_process": "JNUEE/NET",
      "facilities": ["Central Library", "Hostels", "Cultural Centers", "Research Institutes"],
      "placement_rate": "65%",
      "contact": "admissions@jnu.ac.in",
      "deadline": "May 15, 2025",
      "cutoff": "85%+ for most programs"
    },
    {
      "id": 3,
      "name": "University of Mumbai",
      "location": "Mumbai, Maharashtra",
      "type": "State University",
      "courses": ["B.A.", "B.Sc.", "B.Com", "B.Tech", "MBA"],
      "fees": "₹12,000-35,000/year",
      "ranking": "NIRF Rank 25",
      "admission_process": "MH-CET/Merit Based",
      "facilities": ["Multiple Campuses", "Industry Partnerships", "Research Labs"],
      "placement_rate": "72%",
      "contact": "info@mu.ac.in",
      "deadline": "July 15, 2025",
      "cutoff": "80%+ for engineering, 70%+ for arts/commerce"
    },
    {
      "id": 4,
      "name": "University of Calcutta",
      "location": "Kolkata, West Bengal",
      "type": "State University",
      "courses": ["B.A.", "B.Sc.", "B.Com", "LLB", "M.A.", "M.Sc."],
      "fees": "₹8,000-25,000/year",
      "ranking": "NIRF Rank 30",
      "admission_process": "Merit Based/Entrance",
      "facilities": ["Historic Campus", "Libraries", "Cultural Programs"],
      "placement_rate": "68%",
      "contact": "registrar@caluniv.ac.in",
      "deadline": "June 20, 2025",
      "cutoff": "75%+ for honors programs"
    },
    {
      "id": 5,
      "name": "Madras University",
      "location": "Chennai, Tamil Nadu",
      "type": "State University",
      "courses": ["B.A.", "B.Sc.", "B.Com", "B.Tech", "M.A.", "MBA"],
      "fees": "₹10,000-30,000/year",
      "ranking": "NIRF Rank 35",
      "admission_process": "TNEA/Merit Based",
      "facilities": ["Marine Campus", "Research Centers", "Sports Facilities"],
      "placement_rate": "70%",
      "contact": "admission@unom.ac.in",
      "deadline": "July 1, 2025",
      "cutoff": "85%+ for engineering, 75%+ for other courses"
    },
    {
      "id": 6,
      "name": "Rajasthan University",
      "location": "Jaipur, Rajasthan",
      "type": "State University",
      "courses": ["B.A.", "B.Sc.", "B.Com", "BBA", "M.A.", "M.Sc."],
      "fees": "₹6,000-20,000/year",
      "ranking": "NIRF Rank 45",
      "admission_process": "Merit Based",
      "facilities": ["Spacious Campus", "Hostels", "Library", "Cultural Centers"],
      "placement_rate": "60%",
      "contact": "info@uniraj.ac.in",
      "deadline": "June 25, 2025",
      "cutoff": "70%+ for most programs"
    }
  ],
  "assessment_questions": {
    "interests": [
      {
        "question": "Which subject do you find most engaging?",
        "options": [
          {"text": "Mathematics & Physics", "scores": {"analytical": 3, "technical": 3, "logical": 2}},
          {"text": "Biology & Chemistry", "scores": {"scientific": 3, "caring": 2, "analytical": 2}},
          {"text": "History & Literature", "scores": {"creative": 2, "communicative": 3, "research": 2}},
          {"text": "Business Studies & Economics", "scores": {"leadership": 3, "analytical": 2, "business": 3}},
          {"text": "Arts & Design", "scores": {"creative": 3, "artistic": 3, "innovative": 2}}
        ]
      },
      {
        "question": "What type of activities do you enjoy most?",
        "options": [
          {"text": "Solving puzzles and coding", "scores": {"logical": 3, "analytical": 3, "technical": 2}},
          {"text": "Helping and caring for others", "scores": {"caring": 3, "empathetic": 3, "social": 2}},
          {"text": "Leading group projects", "scores": {"leadership": 3, "organized": 2, "communicative": 2}},
          {"text": "Creating art or writing", "scores": {"creative": 3, "artistic": 3, "innovative": 2}},
          {"text": "Researching and analyzing data", "scores": {"analytical": 3, "research": 3, "detail-oriented": 2}}
        ]
      },
      {
        "question": "Which work environment appeals to you?",
        "options": [
          {"text": "High-tech office with latest equipment", "scores": {"technical": 3, "innovative": 2, "modern": 2}},
          {"text": "Hospital or clinic helping patients", "scores": {"caring": 3, "service": 3, "medical": 2}},
          {"text": "Corporate boardroom making decisions", "scores": {"leadership": 3, "business": 3, "strategic": 2}},
          {"text": "Creative studio or workshop", "scores": {"creative": 3, "artistic": 3, "flexible": 2}},
          {"text": "Government office serving public", "scores": {"service": 3, "stable": 2, "administrative": 3}}
        ]
      }
    ],
    "personality": [
      {
        "question": "In group projects, you typically:",
        "options": [
          {"text": "Take charge and organize everyone", "scores": {"leadership": 3, "organized": 2, "extroverted": 2}},
          {"text": "Focus on getting your part done perfectly", "scores": {"detail-oriented": 3, "responsible": 2, "introverted": 1}},
          {"text": "Help others and ensure everyone contributes", "scores": {"cooperative": 3, "empathetic": 2, "team-player": 3}},
          {"text": "Come up with creative solutions", "scores": {"creative": 3, "innovative": 3, "open": 2}},
          {"text": "Research and provide accurate information", "scores": {"analytical": 3, "research": 2, "conscientious": 2}}
        ]
      },
      {
        "question": "When facing a difficult problem, you:",
        "options": [
          {"text": "Break it down systematically", "scores": {"analytical": 3, "logical": 3, "organized": 2}},
          {"text": "Ask for help from others", "scores": {"collaborative": 2, "social": 2, "humble": 2}},
          {"text": "Try different creative approaches", "scores": {"creative": 3, "flexible": 2, "experimental": 2}},
          {"text": "Research similar problems online", "scores": {"research": 3, "methodical": 2, "self-reliant": 2}},
          {"text": "Take time to think it through carefully", "scores": {"thoughtful": 3, "patient": 2, "reflective": 2}}
        ]
      }
    ],
    "aptitude": [
      {
        "question": "If a book costs ₹120 and is sold at 25% profit, what was the cost price?",
        "options": [
          {"text": "₹90", "scores": {"mathematical": 0}},
          {"text": "₹96", "scores": {"mathematical": 3}},
          {"text": "₹100", "scores": {"mathematical": 0}},
          {"text": "₹80", "scores": {"mathematical": 0}}
        ]
      },
      {
        "question": "Complete the sequence: 2, 6, 12, 20, 30, ?",
        "options": [
          {"text": "40", "scores": {"logical": 0}},
          {"text": "42", "scores": {"logical": 3}},
          {"text": "45", "scores": {"logical": 0}},
          {"text": "36", "scores": {"logical": 0}}
        ]
      }
    ],
    "values": [
      {
        "question": "What matters most to you in a career?",
        "options": [
          {"text": "High salary and financial security", "scores": {"financial": 3, "security": 2, "materialistic": 1}},
          {"text": "Making a positive impact on society", "scores": {"service": 3, "altruistic": 3, "meaningful": 2}},
          {"text": "Personal growth and learning", "scores": {"growth": 3, "learning": 3, "development": 2}},
          {"text": "Work-life balance and flexibility", "scores": {"balance": 3, "flexible": 2, "personal-time": 2}},
          {"text": "Recognition and prestige", "scores": {"recognition": 3, "prestige": 2, "status": 2}}
        ]
      },
      {
        "question": "Your ideal work schedule would be:",
        "options": [
          {"text": "Standard 9-5 office hours", "scores": {"structured": 2, "traditional": 2, "stable": 2}},
          {"text": "Flexible hours, work from anywhere", "scores": {"flexible": 3, "independent": 2, "modern": 2}},
          {"text": "Project-based with varying schedules", "scores": {"dynamic": 3, "adaptable": 2, "variety": 2}},
          {"text": "Extended hours for higher rewards", "scores": {"ambitious": 3, "dedicated": 2, "career-focused": 3}}
        ]
      }
    ]
  }
};

// Global Variables
let currentStep = 1;
let userResponses = {};
let userProfile = {};
let savedColleges = [];
let assessmentCompleted = false;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');
    loadUserData();
    renderColleges();
    updateDashboard();
    
    // Add event listeners for college filters
    const collegeSearch = document.getElementById('collegeSearch');
    const stateFilter = document.getElementById('stateFilter');
    const courseFilter = document.getElementById('courseFilter');
    
    if (collegeSearch) collegeSearch.addEventListener('input', filterColleges);
    if (stateFilter) stateFilter.addEventListener('change', filterColleges);
    if (courseFilter) courseFilter.addEventListener('change', filterColleges);
    
    // Add event listeners for form validation
    const formInputs = ['userName', 'userClass', 'userState', 'userGender'];
    formInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('change', checkStepCompletion);
            input.addEventListener('input', checkStepCompletion);
        }
    });
});

// Section Navigation - Fixed
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('Section shown successfully:', sectionId);
        
        // Update dashboard when showing it
        if (sectionId === 'dashboard') {
            updateDashboard();
        }
    } else {
        console.error('Section not found:', sectionId);
    }
}

// Assessment Functions - Fixed
function startAssessment() {
    console.log('Starting assessment');
    currentStep = 1;
    userResponses = {};
    showSection('assessment');
    renderAssessmentStep();
    updateProgress();
}

function renderAssessmentStep() {
    console.log('Rendering step:', currentStep);
    
    // Hide all assessment steps
    const steps = document.querySelectorAll('.assessment-step');
    steps.forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    const currentStepElement = document.getElementById(`step${currentStep}`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
        
        // Render questions for current step
        if (currentStep === 2) {
            renderQuestions('interests', 'interestQuestions');
        } else if (currentStep === 3) {
            renderQuestions('personality', 'personalityQuestions');
        } else if (currentStep === 4) {
            renderQuestions('aptitude', 'aptitudeQuestions');
        } else if (currentStep === 5) {
            renderQuestions('values', 'valuesQuestions');
        }
    }
    
    updateNavigationButtons();
}

function renderQuestions(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    const questions = appData.assessment_questions[category];
    if (!questions) {
        console.error('Questions not found for category:', category);
        return;
    }
    
    container.innerHTML = questions.map((q, index) => `
        <div class="question-container">
            <div class="question-text">${q.question}</div>
            <div class="question-options">
                ${q.options.map((option, optIndex) => `
                    <button class="option-button" onclick="selectOption('${category}', ${index}, ${optIndex})">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function selectOption(category, questionIndex, optionIndex) {
    console.log('Option selected:', category, questionIndex, optionIndex);
    
    if (!userResponses[category]) {
        userResponses[category] = {};
    }
    
    userResponses[category][questionIndex] = optionIndex;
    
    // Update UI
    const categoryContainer = document.getElementById(`${category}Questions`);
    if (categoryContainer) {
        const questionContainers = categoryContainer.querySelectorAll('.question-container');
        if (questionContainers[questionIndex]) {
            const buttons = questionContainers[questionIndex].querySelectorAll('.option-button');
            buttons.forEach((btn, idx) => {
                btn.classList.toggle('selected', idx === optionIndex);
            });
        }
    }
    
    // Check if all questions are answered
    checkStepCompletion();
}

function checkStepCompletion() {
    let isComplete = false;
    
    if (currentStep === 1) {
        const nameEl = document.getElementById('userName');
        const classEl = document.getElementById('userClass');
        const stateEl = document.getElementById('userState');
        const genderEl = document.getElementById('userGender');
        
        const name = nameEl ? nameEl.value : '';
        const userClass = classEl ? classEl.value : '';
        const state = stateEl ? stateEl.value : '';
        const gender = genderEl ? genderEl.value : '';
        
        isComplete = name && userClass && state && gender;
    } else if (currentStep === 2) {
        isComplete = userResponses.interests && Object.keys(userResponses.interests).length === 3;
    } else if (currentStep === 3) {
        isComplete = userResponses.personality && Object.keys(userResponses.personality).length === 2;
    } else if (currentStep === 4) {
        isComplete = userResponses.aptitude && Object.keys(userResponses.aptitude).length === 2;
    } else if (currentStep === 5) {
        isComplete = userResponses.values && Object.keys(userResponses.values).length === 2;
    }
    
    // Enable/disable buttons
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (nextBtn && submitBtn) {
        if (currentStep < 5) {
            nextBtn.style.display = 'block';
            nextBtn.disabled = !isComplete;
            submitBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
            submitBtn.disabled = !isComplete;
        }
    }
}

function nextStep() {
    console.log('Next step clicked, current step:', currentStep);
    
    if (currentStep === 1) {
        // Save basic info
        const nameEl = document.getElementById('userName');
        const classEl = document.getElementById('userClass');
        const stateEl = document.getElementById('userState');
        const genderEl = document.getElementById('userGender');
        
        userProfile.name = nameEl ? nameEl.value : '';
        userProfile.class = classEl ? classEl.value : '';
        userProfile.state = stateEl ? stateEl.value : '';
        userProfile.gender = genderEl ? genderEl.value : '';
    }
    
    if (currentStep < 5) {
        currentStep++;
        renderAssessmentStep();
        updateProgress();
    }
}

function previousStep() {
    console.log('Previous step clicked, current step:', currentStep);
    
    if (currentStep > 1) {
        currentStep--;
        renderAssessmentStep();
        updateProgress();
    }
}

function updateProgress() {
    const progress = (currentStep / 5) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `Step ${currentStep} of 5`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (prevBtn) {
        prevBtn.style.display = currentStep > 1 ? 'block' : 'none';
    }
    
    if (nextBtn && submitBtn) {
        if (currentStep < 5) {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        }
    }
    
    checkStepCompletion();
}

function submitAssessment() {
    console.log('Submitting assessment');
    
    // Calculate personality scores
    const personalityScores = calculatePersonalityScores();
    const careerMatches = calculateCareerMatches(personalityScores);
    
    userProfile.personalityScores = personalityScores;
    userProfile.careerMatches = careerMatches;
    userProfile.assessmentDate = new Date().toISOString();
    
    assessmentCompleted = true;
    saveUserData();
    
    showSection('results');
    renderResults();
}

function calculatePersonalityScores() {
    const scores = {};
    
    // Process interest responses
    if (userResponses.interests) {
        Object.keys(userResponses.interests).forEach(questionIndex => {
            const optionIndex = userResponses.interests[questionIndex];
            const option = appData.assessment_questions.interests[questionIndex].options[optionIndex];
            
            Object.keys(option.scores).forEach(trait => {
                scores[trait] = (scores[trait] || 0) + option.scores[trait];
            });
        });
    }
    
    // Process personality responses
    if (userResponses.personality) {
        Object.keys(userResponses.personality).forEach(questionIndex => {
            const optionIndex = userResponses.personality[questionIndex];
            const option = appData.assessment_questions.personality[questionIndex].options[optionIndex];
            
            Object.keys(option.scores).forEach(trait => {
                scores[trait] = (scores[trait] || 0) + option.scores[trait];
            });
        });
    }
    
    // Process aptitude responses
    if (userResponses.aptitude) {
        Object.keys(userResponses.aptitude).forEach(questionIndex => {
            const optionIndex = userResponses.aptitude[questionIndex];
            const option = appData.assessment_questions.aptitude[questionIndex].options[optionIndex];
            
            Object.keys(option.scores).forEach(trait => {
                scores[trait] = (scores[trait] || 0) + option.scores[trait];
            });
        });
    }
    
    // Process values responses
    if (userResponses.values) {
        Object.keys(userResponses.values).forEach(questionIndex => {
            const optionIndex = userResponses.values[questionIndex];
            const option = appData.assessment_questions.values[questionIndex].options[optionIndex];
            
            Object.keys(option.scores).forEach(trait => {
                scores[trait] = (scores[trait] || 0) + option.scores[trait];
            });
        });
    }
    
    return scores;
}

function calculateCareerMatches(personalityScores) {
    return appData.careers.map(career => {
        let matchScore = 0;
        let totalPossible = 0;
        
        // Calculate match based on personality traits
        career.personality_match.forEach(trait => {
            if (personalityScores[trait]) {
                matchScore += personalityScores[trait];
            }
            totalPossible += 3; // Max score per trait
        });
        
        // Calculate match based on interest areas
        career.interest_areas.forEach(interest => {
            if (personalityScores[interest]) {
                matchScore += personalityScores[interest];
            }
            totalPossible += 3;
        });
        
        const percentage = totalPossible > 0 ? Math.round((matchScore / totalPossible) * 100) : 0;
        
        return {
            ...career,
            matchPercentage: Math.min(Math.max(percentage, 40), 95) // Cap between 40-95%
        };
    }).sort((a, b) => b.matchPercentage - a.matchPercentage);
}

function renderResults() {
    console.log('Rendering results');
    
    // Render user summary
    const userSummary = document.getElementById('userSummary');
    if (userSummary) {
        userSummary.innerHTML = `
            <p><strong>Name:</strong> ${userProfile.name}</p>
            <p><strong>Class:</strong> ${userProfile.class}</p>
            <p><strong>State:</strong> ${userProfile.state}</p>
            <p><strong>Assessment Date:</strong> ${new Date(userProfile.assessmentDate).toLocaleDateString()}</p>
        `;
    }
    
    // Render charts and career matches
    setTimeout(() => {
        renderPersonalityChart();
        renderInterestChart();
        renderCareerMatches();
    }, 100);
}

function renderPersonalityChart() {
    const chartElement = document.getElementById('personalityChart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    const scores = userProfile.personalityScores;
    
    const topTraits = Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 6);
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: topTraits.map(([trait]) => trait.charAt(0).toUpperCase() + trait.slice(1)),
            datasets: [{
                label: 'Your Personality Profile',
                data: topTraits.map(([,score]) => score),
                fill: true,
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: '#1FB8CD',
                pointBackgroundColor: '#1FB8CD',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function renderInterestChart() {
    const chartElement = document.getElementById('interestChart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    const scores = userProfile.personalityScores;
    
    const interestAreas = ['technical', 'creative', 'analytical', 'social', 'leadership', 'caring'];
    const data = interestAreas.map(area => scores[area] || 0);
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: interestAreas.map(area => area.charAt(0).toUpperCase() + area.slice(1)),
            datasets: [{
                data: data,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function renderCareerMatches() {
    const container = document.getElementById('careerMatches');
    if (!container) return;
    
    const topMatches = userProfile.careerMatches.slice(0, 5);
    
    container.innerHTML = topMatches.map(career => `
        <div class="career-match-card">
            <div class="career-match-header">
                <h3 class="career-title">${career.title}</h3>
                <span class="match-percentage ${getMatchClass(career.matchPercentage)}">${career.matchPercentage}% Match</span>
            </div>
            <p>${career.description}</p>
            <div class="career-details">
                <div class="detail-item">
                    <div class="detail-label">Education Path</div>
                    <div class="detail-value">${career.education_path}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Salary Range</div>
                    <div class="detail-value">${career.salary_range}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Growth Prospects</div>
                    <div class="detail-value">${career.growth_prospects}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Required Skills</div>
                    <div class="detail-value">
                        <div class="skills-list">
                            ${career.required_skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getMatchClass(percentage) {
    if (percentage >= 80) return 'status--high-match';
    if (percentage >= 60) return 'status--medium-match';
    return 'status--low-match';
}

// College Functions
function renderColleges() {
    const container = document.getElementById('collegeGrid');
    if (!container) return;
    
    container.innerHTML = appData.colleges.map(college => createCollegeCard(college)).join('');
}

function createCollegeCard(college) {
    const isSaved = savedColleges.includes(college.id);
    
    return `
        <div class="college-card">
            <div class="college-header">
                <h3 class="college-name">${college.name}</h3>
                <button class="save-button ${isSaved ? 'saved' : ''}" onclick="toggleSaveCollege(${college.id})">
                    ${isSaved ? '★' : '☆'}
                </button>
            </div>
            <div class="college-location">${college.location} • ${college.type}</div>
            <div class="college-info">
                <div class="info-row">
                    <span class="info-label">Courses</span>
                    <span class="info-value">${college.courses.slice(0, 3).join(', ')}${college.courses.length > 3 ? '...' : ''}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Fees</span>
                    <span class="info-value">${college.fees}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Ranking</span>
                    <span class="info-value">${college.ranking}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Placement Rate</span>
                    <span class="info-value">${college.placement_rate}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Application Deadline</span>
                    <span class="info-value">${college.deadline}</span>
                </div>
            </div>
        </div>
    `;
}

function toggleSaveCollege(collegeId) {
    console.log('Toggle save college:', collegeId);
    
    const index = savedColleges.indexOf(collegeId);
    if (index > -1) {
        savedColleges.splice(index, 1);
    } else {
        savedColleges.push(collegeId);
    }
    
    saveUserData();
    renderColleges();
    updateDashboard();
}

function filterColleges() {
    const searchEl = document.getElementById('collegeSearch');
    const stateEl = document.getElementById('stateFilter');
    const courseEl = document.getElementById('courseFilter');
    
    const searchTerm = searchEl ? searchEl.value.toLowerCase() : '';
    const stateFilter = stateEl ? stateEl.value : '';
    const courseFilter = courseEl ? courseEl.value : '';
    
    const filtered = appData.colleges.filter(college => {
        const matchesSearch = college.name.toLowerCase().includes(searchTerm) || 
                            college.location.toLowerCase().includes(searchTerm);
        const matchesState = !stateFilter || college.location.includes(stateFilter);
        const matchesCourse = !courseFilter || college.courses.includes(courseFilter);
        
        return matchesSearch && matchesState && matchesCourse;
    });
    
    const container = document.getElementById('collegeGrid');
    if (container) {
        container.innerHTML = filtered.map(college => createCollegeCard(college)).join('');
    }
}

function clearFilters() {
    const searchEl = document.getElementById('collegeSearch');
    const stateEl = document.getElementById('stateFilter');
    const courseEl = document.getElementById('courseFilter');
    
    if (searchEl) searchEl.value = '';
    if (stateEl) stateEl.value = '';
    if (courseEl) courseEl.value = '';
    
    renderColleges();
}

// Dashboard Functions
function updateDashboard() {
    updateProfileSummary();
    updateSavedColleges();
    updateDashboardCareers();
}

function updateProfileSummary() {
    const container = document.getElementById('profileSummary');
    if (!container) return;
    
    if (assessmentCompleted && userProfile.name) {
        container.innerHTML = `
            <p><strong>Name:</strong> ${userProfile.name}</p>
            <p><strong>Class:</strong> ${userProfile.class}</p>
            <p><strong>Assessment Completed:</strong> ${new Date(userProfile.assessmentDate).toLocaleDateString()}</p>
            <p><strong>Top Career Match:</strong> ${userProfile.careerMatches[0].title} (${userProfile.careerMatches[0].matchPercentage}%)</p>
            <button class="btn btn--outline" onclick="showSection('results')">View Full Results</button>
        `;
    } else {
        container.innerHTML = `
            <p>Complete your career assessment to see your personalized dashboard.</p>
            <button class="btn btn--primary" onclick="showSection('assessment')">Take Assessment</button>
        `;
    }
}

function updateSavedColleges() {
    const container = document.getElementById('savedColleges');
    if (!container) return;
    
    if (savedColleges.length > 0) {
        const saved = savedColleges.map(id => appData.colleges.find(c => c.id === id)).filter(Boolean);
        container.innerHTML = saved.map(college => `
            <div class="deadline-item">
                <div class="deadline-text">${college.name}</div>
                <div class="deadline-date">${college.deadline}</div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<p>No colleges saved yet. Browse colleges to add them to your list.</p>';
    }
}

function updateDashboardCareers() {
    const container = document.getElementById('dashboardCareers');
    if (!container) return;
    
    if (assessmentCompleted && userProfile.careerMatches) {
        const top3 = userProfile.careerMatches.slice(0, 3);
        container.innerHTML = top3.map(career => `
            <div class="deadline-item">
                <div class="deadline-text">${career.title}</div>
                <div class="deadline-date">${career.matchPercentage}% Match</div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<p>Complete your assessment to see career recommendations.</p>';
    }
}

// Data Management
function saveUserData() {
    const userData = {
        userProfile,
        savedColleges,
        assessmentCompleted,
        userResponses
    };
    
    // Simple in-memory storage simulation
    window.userData = userData;
    console.log('User data saved:', userData);
}

function loadUserData() {
    // Simple in-memory storage simulation
    if (window.userData) {
        const data = window.userData;
        userProfile = data.userProfile || {};
        savedColleges = data.savedColleges || [];
        assessmentCompleted = data.assessmentCompleted || false;
        userResponses = data.userResponses || {};
        console.log('User data loaded:', data);
    }
}

// Export Functions
function exportResults() {
    if (!assessmentCompleted) {
        alert('Please complete your assessment first.');
        return;
    }
    
    // Create a simple text report
    let report = `Career Assessment Report\n`;
    report += `========================\n\n`;
    report += `Name: ${userProfile.name}\n`;
    report += `Class: ${userProfile.class}\n`;
    report += `Assessment Date: ${new Date(userProfile.assessmentDate).toLocaleDateString()}\n\n`;
    report += `Top Career Recommendations:\n`;
    report += `---------------------------\n`;
    
    userProfile.careerMatches.slice(0, 5).forEach((career, index) => {
        report += `${index + 1}. ${career.title} (${career.matchPercentage}% Match)\n`;
        report += `   ${career.description}\n`;
        report += `   Education: ${career.education_path}\n`;
        report += `   Salary: ${career.salary_range}\n\n`;
    });
    
    // Create and download file
    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `career-assessment-${userProfile.name || 'report'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}