let currentQuestionIndex = 0;
let correctAnswers = 0;
let attemptedQuestions = 0;
let unattemptedQuestions = 100; // Set total questions
let quizTimer;
let timeLeft = 60;
let selectedOption = null;

const questions = [

  {
    question: "Photosynthesis occurs in which part of plants?",
    options: ["Stem", "Root", "All green part", "Stomata"],
    correctAnswer: "c",
    explanation: "Photosynthesis occurs in all green parts of the plant that contain chlorophyll."
  },
  {
    question: "Which of the following is the ultimate source of energy for all living organisms?",
    options: ["Water", "Sun", "ATP", "Glucose"],
    correctAnswer: "b",
    explanation: "The Sun is the ultimate source of energy for all life on Earth."
  },
  {
    question: "Which pigment is responsible for capturing sunlight in photosynthesis?",
    options: ["Xanthophyll", "Carotene", "Chlorophyll", "Anthocyanin"],
    correctAnswer: "c",
    explanation: "Chlorophyll absorbs light energy needed for photosynthesis."
  },
  {
    question: "What is the correct sequence of parts in the human alimentary canal?",
    options: ["Mouth → Stomach → Small intestine → Esophagus", "Mouth → Esophagus → Stomach → Small intestine", "Mouth → Esophagus → Small intestine → Stomach", "Mouth → Stomach → Esophagus → Small intestine"],
    correctAnswer: "b",
    explanation: "Food passes from mouth → esophagus → stomach → small intestine."
  },
  {
    question: "Which part of nephron filters the blood?",
    options: ["Bowman's capsule", "Tubule", "Collecting duct", "Ureter"],
    correctAnswer: "a",
    explanation: "Bowman's capsule contains the glomerulus which filters the blood."
  },
  {
    question: "The process of breakdown of glucose in the absence of oxygen is called?",
    options: ["Aerobic respiration", "Anaerobic respiration", "Photosynthesis", "Digestion"],
    correctAnswer: "b",
    explanation: "Anaerobic respiration occurs without oxygen."
  },
  {
    question: "Which blood vessels carry blood away from the heart?",
    options: ["Veins", "Capillaries", "Arteries", "Lymph vessels"],
    correctAnswer: "c",
    explanation: "Arteries carry oxygenated blood away from the heart (except pulmonary artery)."
  },
  {
    question: "What is the function of bile juice in digestion?",
    options: ["Digest proteins", "Emulsify fats", "Absorb nutrients", "Digest starch"],
    correctAnswer: "b",
    explanation: "Bile emulsifies fats to increase surface area for enzyme action."
  },
  {
    question: "Which of these is not part of the human respiratory system?",
    options: ["Trachea", "Alveoli", "Bronchi", "Diaphragm"],
    correctAnswer: "d",
    explanation: "Diaphragm helps in breathing but is not part of the respiratory tract."
  },
  {
    question: "Which gas is exhaled during respiration?",
    options: ["Oxygen", "Carbon monoxide", "Carbon dioxide", "Nitrogen"],
    correctAnswer: "c",
    explanation: "Carbon dioxide is the waste product exhaled during respiration."
  },
  {
    question: "The energy currency of cells is:",
    options: ["Glucose", "Oxygen", "ATP", "DNA"],
    correctAnswer: "c",
    explanation: "ATP (adenosine triphosphate) stores and transports chemical energy."
  },
  {
    question: "Which part of the leaf allows gaseous exchange?",
    options: ["Midrib", "Petiole", "Veins", "Stomata"],
    correctAnswer: "d",
    explanation: "Stomata are small openings on leaves that allow gases to enter and exit."
  },
  {
    question: "Lymph is a fluid that transports:",
    options: ["Oxygen", "Hormones", "Fatty acids and white blood cells", "Enzymes"],
    correctAnswer: "c",
    explanation: "Lymph carries fatty acids, waste materials, and WBCs."
  },
  {
    question: "Which organ absorbs most of the nutrients during digestion?",
    options: ["Large intestine", "Stomach", "Small intestine", "Pancreas"],
    correctAnswer: "c",
    explanation: "The small intestine is responsible for absorbing nutrients."
  },
  {
    question: "In plants, water moves through:",
    options: ["Phloem", "Xylem", "Parenchyma", "Cortex"],
    correctAnswer: "b",
    explanation: "Xylem transports water and minerals from roots to other parts of the plant."
  },
  {
    question: "Which part of the brain controls involuntary actions like heartbeat?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
    correctAnswer: "c",
    explanation: "The medulla oblongata controls involuntary actions."
  },
  {
    question: "Which of these is a correct statement about blood?",
    options: ["Arteries have valves", "Veins carry oxygen-rich blood", "Pulmonary artery carries deoxygenated blood", "Capillaries are thick-walled"],
    correctAnswer: "c",
    explanation: "Pulmonary artery is the only artery that carries deoxygenated blood."
  },
  {
    question: "What is the main function of the human heart?",
    options: ["To digest food", "To purify blood", "To circulate blood", "To store blood"],
    correctAnswer: "c",
    explanation: "The heart pumps blood to supply oxygen and nutrients to the body."
  },
  {
    question: "The movement of food in the alimentary canal is due to:",
    options: ["Diffusion", "Peristalsis", "Assimilation", "Absorption"],
    correctAnswer: "b",
    explanation: "Peristalsis is the wave-like muscle contraction that moves food."
  },
  {
    question: "Which enzyme digests proteins in the stomach?",
    options: ["Pepsin", "Amylase", "Lipase", "Maltase"],
    correctAnswer: "a",
    explanation: "Pepsin breaks down proteins in the acidic environment of the stomach."
  },
  {
    question: "What is the function of guard cells?",
    options: ["Transport water", "Protect leaf", "Regulate opening and closing of stomata", "Absorb sunlight"],
    correctAnswer: "c",
    explanation: "Guard cells control the size of stomatal openings for gas exchange."
  },
  {
    question: "Blood from lungs to heart is carried by:",
    options: ["Pulmonary artery", "Aorta", "Pulmonary vein", "Vena cava"],
    correctAnswer: "c",
    explanation: "Pulmonary vein carries oxygenated blood from lungs to heart."
  },
  {
    question: "Which plant tissue helps in transport of food?",
    options: ["Xylem", "Phloem", "Cortex", "Cambium"],
    correctAnswer: "b",
    explanation: "Phloem transports food (glucose) from leaves to other plant parts."
  },
  {
    question: "The breakdown of pyruvate to give CO₂, water and energy takes place in:",
    options: ["Cytoplasm", "Chloroplast", "Mitochondria", "Nucleus"],
    correctAnswer: "c",
    explanation: "This aerobic breakdown occurs in mitochondria."
  },
  {
    question: "Which process in plants uses light energy to convert carbon dioxide and water into glucose?",
    options: ["Respiration", "Transpiration", "Photosynthesis", "Excretion"],
    correctAnswer: "c",
    explanation: "Photosynthesis converts CO₂ and water into glucose using sunlight."
  },

  {
    question: "The tiny pores in leaves through which gaseous exchange takes place are called?",
    options: ["Lenticels", "Stomata", "Hydathodes", "Vacuoles"],
    correctAnswer: "b",
    explanation: "Stomata are microscopic pores on the leaf surface used for gas exchange."
  },
  {
    question: "Which part of the nephron is responsible for reabsorption of useful substances?",
    options: ["Glomerulus", "Bowman's capsule", "Tubule", "Ureter"],
    correctAnswer: "c",
    explanation: "The tubule reabsorbs glucose, water, and salts back into the blood."
  },
  {
    question: "Which of these organisms uses pseudopodia for movement and ingestion?",
    options: ["Euglena", "Paramecium", "Amoeba", "Hydra"],
    correctAnswer: "c",
    explanation: "Amoeba uses pseudopodia for both movement and food intake."
  },
  {
    question: "What is the function of platelets in blood?",
    options: ["Fight infection", "Transport oxygen", "Clot blood", "Transport hormones"],
    correctAnswer: "c",
    explanation: "Platelets help in clotting blood at injury sites."
  },
  {
    question: "The rhythmic contraction and relaxation of the heart is called?",
    options: ["Heartbeat", "Pumping", "Circulation", "Pulse"],
    correctAnswer: "a",
    explanation: "Heartbeat involves rhythmic contraction and relaxation of heart chambers."
  },
  {
    question: "Which component of blood fights against infections?",
    options: ["RBC", "WBC", "Platelets", "Plasma"],
    correctAnswer: "b",
    explanation: "White Blood Cells (WBCs) defend the body against pathogens."
  },
  {
    question: "Lungs are covered by a protective membrane called:",
    options: ["Alveoli", "Pericardium", "Pleura", "Trachea"],
    correctAnswer: "c",
    explanation: "Pleura is a double-layered membrane covering the lungs."
  },
  {
    question: "What is the main function of the large intestine?",
    options: ["Digest food", "Absorb water", "Produce bile", "Digest protein"],
    correctAnswer: "b",
    explanation: "The large intestine absorbs water and forms solid waste."
  },
  {
    question: "Which process releases energy in cells?",
    options: ["Photosynthesis", "Respiration", "Fermentation", "Excretion"],
    correctAnswer: "b",
    explanation: "Cellular respiration releases energy from glucose."
  },
  {
    question: "The contraction of the diaphragm results in:",
    options: ["Exhalation", "Inhalation", "Sneezing", "Yawning"],
    correctAnswer: "b",
    explanation: "When diaphragm contracts, it pulls down, causing air to enter lungs."
  },
  {
    question: "Which vessel brings oxygen-poor blood to the heart?",
    options: ["Pulmonary vein", "Aorta", "Vena cava", "Pulmonary artery"],
    correctAnswer: "c",
    explanation: "The vena cava brings deoxygenated blood to the right atrium."
  },
  {
    question: "Which is not a function of the liver?",
    options: ["Bile production", "Storage of glycogen", "Digestion of protein", "Detoxification"],
    correctAnswer: "c",
    explanation: "Protein digestion is mainly in the stomach and small intestine."
  },
  {
    question: "What is the end product of digestion of carbohydrates?",
    options: ["Amino acids", "Fatty acids", "Glucose", "Glycerol"],
    correctAnswer: "c",
    explanation: "Carbohydrates are broken down into glucose."
  },
  {
    question: "The enzyme present in saliva is:",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    correctAnswer: "b",
    explanation: "Salivary amylase breaks down starch into sugar."
  },
  {
    question: "Blood pressure is measured using which instrument?",
    options: ["Thermometer", "Hygrometer", "Sphygmomanometer", "Barometer"],
    correctAnswer: "c",
    explanation: "Sphygmomanometer is used to measure blood pressure."
  },
  {
    question: "Which of the following organisms has a two-chambered heart?",
    options: ["Frog", "Fish", "Human", "Bird"],
    correctAnswer: "b",
    explanation: "Fish have a two-chambered heart consisting of one atrium and one ventricle."
  },
  {
    question: "Which of these is a heterotrophic mode of nutrition?",
    options: ["Autotrophic", "Saprotrophic", "Photosynthetic", "Chemosynthetic"],
    correctAnswer: "b",
    explanation: "Saprotrophic organisms feed on dead organic matter."
  },
  {
    question: "Which digestive organ has both exocrine and endocrine functions?",
    options: ["Liver", "Stomach", "Pancreas", "Gall bladder"],
    correctAnswer: "c",
    explanation: "Pancreas secretes digestive enzymes (exocrine) and insulin (endocrine)."
  },
  {
    question: "In which form do plants store energy?",
    options: ["Starch", "Glycogen", "Sucrose", "Glucose"],
    correctAnswer: "a",
    explanation: "Plants store excess glucose as starch."
  },
  {
    question: "Which organ in humans is responsible for filtration of blood?",
    options: ["Lungs", "Heart", "Kidney", "Liver"],
    correctAnswer: "c",
    explanation: "Kidneys filter waste from the blood and form urine."
  },
  {
    question: "The site of photosynthesis in a plant cell is:",
    options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
    correctAnswer: "b",
    explanation: "Chloroplast contains chlorophyll which captures sunlight."
  },
  {
    question: "The exchange of gases in alveoli takes place by:",
    options: ["Osmosis", "Diffusion", "Active transport", "Filtration"],
    correctAnswer: "b",
    explanation: "Oxygen and carbon dioxide move across alveoli membranes by diffusion."
  },
  {
    question: "Which component in food is digested only in the small intestine?",
    options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
    correctAnswer: "c",
    explanation: "Fats are emulsified and digested in the small intestine."
  },
  {
    question: "Which of these is not a life process?",
    options: ["Reproduction", "Respiration", "Transportation", "Walking"],
    correctAnswer: "d",
    explanation: "Walking is a movement, not essential for survival of individual organisms."
  },
  {
    question: "How many chambers are present in the human heart?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "c",
    explanation: "The human heart has 4 chambers – 2 atria and 2 ventricles."
  },
  {
    question: "Which blood vessel carries blood from the heart to the lungs?",
    options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
    correctAnswer: "a",
    explanation: "Pulmonary artery carries deoxygenated blood from the right ventricle to the lungs."
  },
  {
    question: "Which chamber of the heart receives oxygen-rich blood from the lungs?",
    options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
    correctAnswer: "b",
    explanation: "The left atrium receives oxygenated blood from the lungs via pulmonary veins."
  },
  {
    question: "Which of the following is NOT a function of saliva?",
    options: ["Lubrication of food", "Digestion of starch", "Digestion of protein", "Cleansing of mouth"],
    correctAnswer: "c",
    explanation: "Protein digestion starts in the stomach, not in the mouth."
  },
  {
    question: "The correct sequence of the path of food in the human body is:",
    options: ["Mouth → Stomach → Oesophagus → Intestine", "Mouth → Oesophagus → Stomach → Intestine", "Mouth → Intestine → Oesophagus → Stomach", "Stomach → Mouth → Intestine → Oesophagus"],
    correctAnswer: "b",
    explanation: "Food follows the path: mouth → oesophagus → stomach → small intestine → large intestine."
  },
  {
    question: "Which part of the nephron filters the blood?",
    options: ["Bowman’s capsule", "Loop of Henle", "Collecting duct", "Tubule"],
    correctAnswer: "a",
    explanation: "Filtration occurs in the Bowman’s capsule from the glomerulus."
  },
  {
    question: "Where does the oxygenation of blood take place?",
    options: ["Heart", "Liver", "Lungs", "Kidneys"],
    correctAnswer: "c",
    explanation: "Oxygen enters blood in the lungs at the alveoli."
  },
  {
    question: "Which structure in a leaf allows carbon dioxide to enter during photosynthesis?",
    options: ["Cuticle", "Veins", "Stomata", "Mesophyll"],
    correctAnswer: "c",
    explanation: "Stomata are the pores through which gases enter and exit the leaf."
  },
  {
    question: "Which one is the waste product of aerobic respiration?",
    options: ["Alcohol", "Carbon dioxide", "Lactic acid", "Ammonia"],
    correctAnswer: "b",
    explanation: "Aerobic respiration breaks down glucose to produce CO₂ and water."
  },
  {
    question: "Which of these organisms performs anaerobic respiration?",
    options: ["Amoeba", "Yeast", "Hydra", "Leech"],
    correctAnswer: "b",
    explanation: "Yeast performs anaerobic respiration and produces alcohol and CO₂."
  },
  {
    question: "Which of these organs is responsible for absorption of digested nutrients?",
    options: ["Stomach", "Liver", "Large intestine", "Small intestine"],
    correctAnswer: "d",
    explanation: "Villi in the small intestine absorb nutrients into the bloodstream."
  },
  {
    question: "The transport of soluble products of photosynthesis is called:",
    options: ["Respiration", "Transpiration", "Translocation", "Evaporation"],
    correctAnswer: "c",
    explanation: "Translocation is the movement of food from leaves to other parts of the plant."
  },
  {
    question: "Excretory product in amoeba is removed by:",
    options: ["Contractile vacuole", "Nephridia", "Flame cells", "Kidneys"],
    correctAnswer: "a",
    explanation: "Contractile vacuole collects and expels waste in amoeba."
  },
  {
    question: "Which organ system removes nitrogenous wastes in humans?",
    options: ["Digestive", "Circulatory", "Excretory", "Respiratory"],
    correctAnswer: "c",
    explanation: "The excretory system filters blood and removes urea, a nitrogenous waste."
  },
  {
    question: "Which component of food is digested in the stomach by pepsin?",
    options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
    correctAnswer: "b",
    explanation: "Pepsin is a protein-digesting enzyme in the stomach."
  },
  {
    question: "Which enzyme is released by the pancreas to digest fats?",
    options: ["Pepsin", "Amylase", "Lipase", "Maltase"],
    correctAnswer: "c",
    explanation: "Pancreatic lipase breaks down fats into fatty acids and glycerol."
  },
  {
    question: "Blood vessels that carry blood away from the heart are called:",
    options: ["Veins", "Capillaries", "Arteries", "Lymph vessels"],
    correctAnswer: "c",
    explanation: "Arteries carry oxygenated blood away from the heart."
  },
  {
    question: "What is the main nitrogenous waste excreted in human urine?",
    options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
    correctAnswer: "b",
    explanation: "Urea is the primary nitrogenous waste in human urine."
  },
  {
    question: "Which process involves the loss of water through leaves?",
    options: ["Translocation", "Transpiration", "Respiration", "Photosynthesis"],
    correctAnswer: "b",
    explanation: "Transpiration is the evaporation of water through stomata in leaves."
  },
  {
    question: "Which of the following is not part of the human circulatory system?",
    options: ["Heart", "Blood", "Lungs", "Blood vessels"],
    correctAnswer: "c",
    explanation: "Lungs belong to the respiratory system."
  },
  {
    question: "The energy currency of the cell is:",
    options: ["DNA", "Glucose", "ATP", "Protein"],
    correctAnswer: "c",
    explanation: "ATP (Adenosine Triphosphate) stores and provides energy for cellular processes."
  },
  {
    question: "Which plant tissue transports water?",
    options: ["Phloem", "Parenchyma", "Xylem", "Collenchyma"],
    correctAnswer: "c",
    explanation: "Xylem transports water and minerals from roots to other plant parts."
  },
  {
    question: "Which hormone regulates glucose in the blood?",
    options: ["Thyroxine", "Adrenaline", "Insulin", "Estrogen"],
    correctAnswer: "c",
    explanation: "Insulin helps cells absorb glucose and regulates blood sugar levels."
  },
  {
    question: "Which part of the digestive system kills bacteria in food?",
    options: ["Mouth", "Small intestine", "Stomach", "Large intestine"],
    correctAnswer: "c",
    explanation: "Hydrochloric acid in the stomach kills harmful bacteria in food."
  },
  {
    question: "The functional unit of the kidney is called:",
    options: ["Neuron", "Nephron", "Nephridia", "Glomerulus"],
    correctAnswer: "b",
    explanation: "Each nephron filters blood and forms urine."
  },
  {
    question: "The flap that prevents food from entering the windpipe is called:",
    options: ["Trachea", "Glottis", "Epiglottis", "Uvula"],
    correctAnswer: "c",
    explanation: "Epiglottis covers the windpipe while swallowing to prevent choking."
  },
  {
    question: "The primary site of water absorption in plants is:",
    options: ["Root hairs", "Xylem", "Phloem", "Stem"],
    correctAnswer: "a",
    explanation: "Root hairs increase surface area for water absorption from the soil."
  },
  {
    question: "Which pigment is mainly responsible for photosynthesis?",
    options: ["Chlorophyll", "Carotenoid", "Xanthophyll", "Anthocyanin"],
    correctAnswer: "a",
    explanation: "Chlorophyll absorbs sunlight and drives photosynthesis."
  },
  {
    question: "The opening and closing of stomata is controlled by:",
    options: ["Guard cells", "Xylem vessels", "Phloem vessels", "Root hairs"],
    correctAnswer: "a",
    explanation: "Guard cells regulate stomatal opening and closing."
  },
  {
    question: "The human excretory system mainly removes:",
    options: ["Carbon dioxide", "Water", "Urea", "Oxygen"],
    correctAnswer: "c",
    explanation: "Urea is a nitrogenous waste excreted by kidneys."
  },
  {
    question: "Which blood cells protect the body from infection?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    correctAnswer: "b",
    explanation: "White blood cells fight pathogens and infections."
  },
  {
    question: "The heart has how many chambers?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: "c",
    explanation: "The human heart has four chambers: two atria and two ventricles."
  },
  {
    question: "Which organ produces insulin in the human body?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correctAnswer: "b",
    explanation: "Pancreas secretes insulin to regulate blood sugar."
  },
  {
    question: "Which part of the plant transports food?",
    options: ["Xylem", "Phloem", "Root", "Stem"],
    correctAnswer: "b",
    explanation: "Phloem transports food from leaves to other parts."
  },
  {
    question: "The process of conversion of starch into sugar in plants is called:",
    options: ["Photosynthesis", "Transpiration", "Respiration", "Digestion"],
    correctAnswer: "d",
    explanation: "Plants digest stored starch to release sugar for energy."
  },
  {
    question: "Which blood vessels have valves to prevent backflow?",
    options: ["Arteries", "Veins", "Capillaries", "Lymph vessels"],
    correctAnswer: "b",
    explanation: "Veins have valves to maintain unidirectional blood flow."
  },
  {
    question: "The function of red blood cells is to:",
    options: ["Fight infection", "Transport oxygen", "Clot blood", "Digest food"],
    correctAnswer: "b",
    explanation: "Red blood cells carry oxygen using hemoglobin."
  },
  {
    question: "The part of brain responsible for involuntary actions is:",
    options: ["Cerebrum", "Medulla", "Cerebellum", "Spinal cord"],
    correctAnswer: "b",
    explanation: "Medulla controls involuntary functions like heartbeat."
  },
  {
    question: "Which enzyme breaks down proteins in the stomach?",
    options: ["Amylase", "Lipase", "Pepsin", "Maltase"],
    correctAnswer: "c",
    explanation: "Pepsin starts protein digestion in the stomach."
  },
  {
    question: "Transpiration helps in:",
    options: ["Transport of food", "Transport of water", "Cooling the plant", "Photosynthesis"],
    correctAnswer: "c",
    explanation: "Transpiration cools the plant by water evaporation."
  },
  {
    question: "The largest artery in the human body is:",
    options: ["Pulmonary artery", "Carotid artery", "Aorta", "Coronary artery"],
    correctAnswer: "c",
    explanation: "Aorta carries oxygenated blood from heart to the body."
  },
  {
    question: "Which part of the plant is mainly responsible for photosynthesis?",
    options: ["Stem", "Leaves", "Root", "Flower"],
    correctAnswer: "b",
    explanation: "Leaves contain chlorophyll and are the main site of photosynthesis."
  },
  {
    question: "The waste product removed by lungs is:",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Glucose"],
    correctAnswer: "b",
    explanation: "Carbon dioxide is expelled from lungs during respiration."
  },
  {
    question: "The xylem in plants transports:",
    options: ["Food", "Water and minerals", "Hormones", "Sugars"],
    correctAnswer: "b",
    explanation: "Xylem carries water and minerals from roots upwards."
  },
  {
    question: "Where does fertilization occur in humans?",
    options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
    correctAnswer: "c",
    explanation: "Fertilization occurs in the fallopian tube."
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin B", "Vitamin K", "Vitamin D"],
    correctAnswer: "c",
    explanation: "Vitamin K plays a key role in blood clotting."
  },
  {
    question: "Which part of the digestive system absorbs most nutrients?",
    options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
    correctAnswer: "b",
    explanation: "Small intestine absorbs most digested nutrients."
  },
  {
    question: "The muscle responsible for pumping blood in the heart is called:",
    options: ["Atria", "Ventricles", "Myocardium", "Pericardium"],
    correctAnswer: "c",
    explanation: "Myocardium is the heart muscle that contracts to pump blood."
  },
  {
    question: "Which process produces energy by breaking down glucose in cells?",
    options: ["Photosynthesis", "Respiration", "Digestion", "Excretion"],
    correctAnswer: "b",
    explanation: "Respiration releases energy by breaking down glucose."
  },
  {
    question: "Which part of the nervous system controls voluntary movements?",
    options: ["Autonomic nervous system", "Central nervous system", "Somatic nervous system", "Peripheral nervous system"],
    correctAnswer: "c",
    explanation: "Somatic nervous system controls voluntary muscle movements."
  },
  {
    question: "The root cap protects the:",
    options: ["Root tip", "Stem tip", "Leaf tip", "Flower tip"],
    correctAnswer: "a",
    explanation: "Root cap protects the growing root tip as it pushes through soil."
  },
    // Add more questions...
];

function startQuiz() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    showQuestion();
    startTimer();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        let optionsHTML = '';
        question.options.forEach((option, index) => {
            optionsHTML += `
                <button class="option-btn" id="option${index}" onclick="selectOption(${index})">
                    ${option}
                </button>
            `;
        });
        const questionHTML = `
            <h3>Q${currentQuestionIndex + 1}: ${question.question}</h3>
            <div id="options">${optionsHTML}</div>
        `;
        document.getElementById("question-container").innerHTML = questionHTML;
    }

    if (currentQuestionIndex === questions.length - 1) {
        document.querySelector('.next-btn').style.display = 'none';
        document.querySelector('.submit-btn').style.display = 'inline-block';
    } else {
        document.querySelector('.next-btn').style.display = 'inline-block';
        document.querySelector('.submit-btn').style.display = 'none';
    }
}

function selectOption(optionIndex) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => option.classList.remove('selected-option'));
    document.getElementById(`option${optionIndex}`).classList.add('selected-option');
    selectedOption = optionIndex;
}

function nextQuestion() {
    if (selectedOption !== null) {
        attemptedQuestions++;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        if (selectedOption === correctAnswer.charCodeAt(0) - 97) {
            correctAnswers++;
        }
    } else {
        unattemptedQuestions--;
    }

    currentQuestionIndex++;
    resetTimer();
    showQuestion();
}

function startTimer() {
    quizTimer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(quizTimer);
    timeLeft = 60;
    startTimer();
}

function submitQuiz() {
    if (selectedOption !== null) {
        attemptedQuestions++;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        if (selectedOption === correctAnswer.charCodeAt(0) - 97) {
            correctAnswers++;
        }
    }

    showResult();
}

function showResult() {
    const percentage = (correctAnswers / questions.length) * 100;
    document.getElementById("attempted").textContent = `Attempted Questions: ${attemptedQuestions}`;
    document.getElementById("unattempted").textContent = `Unattempted Questions: ${unattemptedQuestions}`;
    document.getElementById("correct").textContent = `Correct Answers: ${correctAnswers}`;
    document.getElementById("incorrect").textContent = `Incorrect Answers: ${attemptedQuestions - correctAnswers}`;
    document.getElementById("score").textContent = `Your Score: ${percentage}%`;

    if (percentage >= 33) {
        document.getElementById("celebration").style.display = "block";
    } else {
        document.getElementById("sad").style.display = "block";
    }

    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    attemptedQuestions = 0;
    unattemptedQuestions = questions.length;
    timeLeft = 60;
    document.getElementById("result").style.display = "none";
    document.getElementById("celebration").style.display = "none";
    document.getElementById("sad").style.display = "none";
    document.getElementById("instructions").style.display = "block";
}
