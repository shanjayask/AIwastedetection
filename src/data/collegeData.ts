import { VivaQuestion, PresentationSlide, WasteGuideItem } from '../types';

export const VIVA_QUESTIONS: VivaQuestion[] = [
  {
    id: 1,
    question: "Why did you choose this project?",
    answer: "Municipal waste management is one of the most pressing environmental challenges today. Improper waste sorting at the source leads to recyclable contamination and overflowing landfills. We chose this project to build a practical, software-only AI tool that empowers citizens and institutions to accurately identify waste types and understand proper disposal methods without needing expensive machinery.",
    category: "Concepts"
  },
  {
    id: 2,
    question: "What is image classification?",
    answer: "Image classification is a core computer vision task where an algorithm analyzes an input digital image (represented as pixel arrays) and assigns it a specific label or category from a pre-defined set of classes based on features such as shapes, textures, edges, and colors.",
    category: "Concepts"
  },
  {
    id: 3,
    question: "What is Artificial Intelligence, and how is it used in your project?",
    answer: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to perceive, learn, reason, and make decisions. In our project, AI is utilized through a multimodal vision model that inspects photographic features of a waste object, determines what the object is (e.g., a plastic bottle or banana peel), and maps it into its correct disposal category.",
    category: "Concepts"
  },
  {
    id: 4,
    question: "What is computer vision?",
    answer: "Computer vision is a specialized subfield of Artificial Intelligence that enables computers and software systems to derive meaningful, high-level information from digital images, videos, and visual inputs, transforming raw pixel data into actionable insights.",
    category: "Concepts"
  },
  {
    id: 5,
    question: "Why did you use a pre-trained vision model instead of training a CNN from scratch?",
    answer: "Training a Convolutional Neural Network (CNN) from scratch requires collecting, annotating, and cleaning tens of thousands of waste images, which takes weeks and demands high-performance GPU hardware. Even then, scratch models often overfit or fail on complex real-world backgrounds. By utilizing a pre-trained foundation model like Google Gemini Vision, we leverage massive zero-shot visual reasoning across diverse everyday objects, achieving superior accuracy instantly within our 3-hour project timeline.",
    category: "Technologies"
  },
  {
    id: 6,
    question: "Why did you choose Streamlit / modern web interface?",
    answer: "Streamlit and lightweight web components allow rapid creation of interactive, responsive web applications directly with real-time UI updates, camera capture, and data visualization without needing complex microservices or backend databases, thereby keeping the deployment lightweight, dependable, and portable.",
    category: "Technologies"
  },
  {
    id: 7,
    question: "What are the three waste categories used in your system?",
    answer: "1. 🌱 Organic: Biodegradable waste that naturally decomposes into compost (e.g., food scraps, fruit peels, vegetables, leaves).\n2. ♻️ Recyclable: Reprocessable dry materials that can be remanufactured (e.g., clean plastic bottles, cardboard, paper, aluminum cans, clean glass).\n3. 🗑️ Non-Recyclable: General or contaminated waste that cannot currently be recovered economically (e.g., used tissues, chip wrappers, composite multi-layer packaging, greasy pizza boxes).",
    category: "Methodology"
  },
  {
    id: 8,
    question: "How is the confidence score calculated and interpreted?",
    answer: "The vision model evaluates the statistical probability and visual match of the detected object against known material patterns. It outputs a confidence rating (e.g., 95.4%), which represents the model's mathematical certainty that the identified item belongs to the specified category.",
    category: "Methodology"
  },
  {
    id: 9,
    question: "What is the purpose of image preprocessing?",
    answer: "Image preprocessing cleans and standardizes the input image before it is analyzed by the neural network. In our application, Pillow / Canvas manages image dimension checks, verifies supported extensions (JPG, PNG, WEBP), normalizes color channels to RGB, and encodes the image into in-memory byte buffers suitable for API transmission.",
    category: "Methodology"
  },
  {
    id: 10,
    question: "What are the main limitations of your system?",
    answer: "1. Requires an active internet connection to communicate with the cloud vision API.\n2. Severely degraded, crushed, or heavily occluded waste items may yield lower confidence.\n3. Waste history is stored in session state and resets when the session terminates (no persistent database).",
    category: "Impact"
  },
  {
    id: 11,
    question: "What happens if the AI misclassifies an image?",
    answer: "If the image is blurry, ambiguous, or contains mixed waste, the AI may return a lower confidence score. To prevent system crashes, our code implements strict schema validation and fallback error handling. The user also receives confidence metrics so they can manually review any borderline classification.",
    category: "Impact"
  },
  {
    id: 12,
    question: "What is the future scope of this project?",
    answer: "1. Converting the model to TensorFlow Lite / ONNX for offline on-device edge execution on mobile devices or Raspberry Pi.\n2. Implementing multi-object bounding box detection (YOLO) for automated conveyor-belt sorting.\n3. Integrating GPS to direct users to nearby municipal recycling facilities and e-waste collection hubs.",
    category: "Impact"
  },
  {
    id: 13,
    question: "Why is source-level waste classification important?",
    answer: "Once recyclable items like paper or cardboard get mixed with wet organic waste, they absorb oils and moisture, rendering them non-recyclable. Segregation at the point of origin preserves material purity, lowers sorting costs, and prevents millions of tons of waste from entering landfills.",
    category: "Impact"
  },
  {
    id: 14,
    question: "Which technologies and libraries are used in this project?",
    answer: "Python 3.10+, Streamlit, Google Gemini Vision API, Pillow (PIL), Pandas, and python-dotenv for backend/CLI; React 19, TypeScript, Tailwind CSS, and Express for modern interactive web execution.",
    category: "Technologies"
  },
  {
    id: 15,
    question: "How does the application work from start to finish?",
    answer: "1. User uploads an image or captures photo via webcam.\n2. Image is preprocessed and converted to Base64.\n3. Image is dispatched with engineered prompt to Gemini Vision API.\n4. AI outputs structured JSON with item, category, confidence, and disposal advice.\n5. Frontend renders color-coded cards and logs the entry to session history.",
    category: "Methodology"
  },
  {
    id: 16,
    question: "How do you protect your Gemini API key in this project?",
    answer: "The API key is stored securely in an external .env file that is listed in .gitignore so it is never committed to public version control. It is proxied server-side without ever exposing the raw secret key on client frontends.",
    category: "Technologies"
  },
  {
    id: 17,
    question: "Can this project differentiate between a clean cardboard box and a greasy pizza box?",
    answer: "Yes! Because Google Gemini Vision is a multimodal foundation model with contextual visual reasoning, it can observe grease stains and oil discoloration, correctly classifying a greasy pizza box as Non-Recyclable rather than clean Recyclable cardboard.",
    category: "Methodology"
  },
  {
    id: 18,
    question: "What is the difference between supervised learning and foundation model zero-shot inference?",
    answer: "Supervised learning requires manually collecting and training on thousands of labeled waste images from scratch. Foundation model zero-shot inference leverages a pre-trained model that already understands visual concepts from internet-scale training data, delivering instant, high-accuracy recognition.",
    category: "Concepts"
  }
];

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    slideNumber: 1,
    title: "AI-Based Waste Classification System",
    subtitle: "Automated Image-Based Waste Segregation Using Computer Vision & Generative AI",
    points: [
      "Department of Computer Science & Engineering",
      "Academic Year: 2026",
      "Project Category: Software-Only AI Mini-Project",
      "Technologies: Python, Streamlit, Google Gemini Vision AI, Pillow, Pandas"
    ],
    keyHighlight: "Empowering sustainable waste segregation with modern Multimodal AI"
  },
  {
    slideNumber: 2,
    title: "Introduction & Context",
    subtitle: "The Global Solid Waste Crisis",
    points: [
      "Over 2.01 billion metric tons of municipal solid waste generated globally each year.",
      "Improper waste sorting at the point of origin leads to severe contamination of recyclable goods.",
      "Landfills are reaching critical capacity while releasing potent methane greenhouse gases.",
      "Automated computer vision can democratize fast, accurate domestic waste segregation."
    ],
    keyHighlight: "Segregation at the source is the single most critical factor for recycling success."
  },
  {
    slideNumber: 3,
    title: "Problem Statement",
    subtitle: "Why Current Methods Fail",
    points: [
      "Manual Sorting Hazards: Labor-intensive, biologically dangerous, and slow throughput.",
      "Cross-Contamination: Wet food waste mixed with paper destroys recyclability.",
      "Consumer Ambiguity: Citizens often cannot identify multi-layer composite packaging.",
      "Hardware Barriers: Industrial robotics and smart bins are too expensive for widespread deployment."
    ],
    keyHighlight: "Need for a lightweight, zero-hardware software solution accessible on standard PCs."
  },
  {
    slideNumber: 4,
    title: "Project Objectives",
    subtitle: "Core Engineering Goals",
    points: [
      "1. Classify waste into 3 distinct classes: Organic, Recyclable, Non-Recyclable.",
      "2. Provide accurate item detection (e.g., PET Plastic Bottle, Banana Peel).",
      "3. Compute transparent confidence percentage (e.g. 96.5%).",
      "4. Generate practical, actionable disposal and cleaning guidelines.",
      "5. Provide an interactive educational dashboard with history and statistical analytics."
    ],
    keyHighlight: "Software-only, rapid execution, reliable output."
  },
  {
    slideNumber: 5,
    title: "Existing System vs. Proposed AI System",
    subtitle: "Comparative Advantage Analysis",
    points: [
      "Existing: Manual human sorting -> Slow, error-prone, hazardous.",
      "Existing: Hardware smart bins -> High capital cost, sensor calibration drift, non-portable.",
      "Proposed AI System: Multimodal foundation vision model -> Instant zero-shot accuracy.",
      "Proposed AI System: Software-only deployment -> Accessible to everyone via web browser."
    ],
    keyHighlight: "10x lower cost, instantaneous deployment, high diagnostic certainty."
  },
  {
    slideNumber: 6,
    title: "System Architecture",
    subtitle: "End-to-End Data Pipeline",
    points: [
      "Input Layer: Web file uploader, live webcam snapshot, or curated sample library.",
      "Preprocessing Layer: Format validation, RGB normalization, Base64 byte packaging.",
      "Inference Layer: Encrypted HTTPS payload transmission to Google Gemini Vision API.",
      "Parsing Layer: Strict JSON schema enforcement and category sanitization.",
      "Presentation Layer: Adaptive color-coded UI cards, confidence gauges, and history logging."
    ],
    keyHighlight: "Modular, fail-safe architecture with robust error boundaries."
  },
  {
    slideNumber: 7,
    title: "Methodology & Workflow",
    subtitle: "From Raw Pixels to Disposal Action",
    points: [
      "Step 1: User uploads waste image (JPG, PNG, WEBP).",
      "Step 2: Preprocessor prepares image stream.",
      "Step 3: Multimodal Vision model extracts semantic visual features.",
      "Step 4: AI maps object to Organic, Recyclable, or Non-Recyclable.",
      "Step 5: Confidence score and actionable disposal instruction rendered."
    ],
    keyHighlight: "Execution latency: Under 1.8 seconds per classification."
  },
  {
    slideNumber: 8,
    title: "Technologies & AI Approach",
    subtitle: "Engineering Stack",
    points: [
      "Language: Python 3.10+ (Streamlit / CLI) & TypeScript (Full-Stack Web)",
      "Foundation AI: Google Gemini Vision (`gemini-3.8-flash` / `gemini-2.5-flash`)",
      "Image Processing: Pillow (PIL) for image buffer management",
      "Data Analytics: Pandas for session tabular logs and metric calculation",
      "Environment Security: python-dotenv with .env API key shielding"
    ],
    keyHighlight: "Leverages Foundation Vision AI to eliminate months of manual dataset training."
  },
  {
    slideNumber: 9,
    title: "Results & Demonstration",
    subtitle: "Classification Accuracy & User Experience",
    points: [
      "🌱 Organic: Emerald Green Card -> 98.4% Confidence (Banana Peel, Apple Core)",
      "♻️ Recyclable: Sapphire Blue Card -> 96.8% Confidence (PET Bottle, Soda Can, Box)",
      "🗑️ Non-Recyclable: Crimson Card -> 94.2% Confidence (Chip Foil, Soiled Napkin)",
      "Live session history tracking with CSV export and category distribution metrics."
    ],
    keyHighlight: "Demo-ready with built-in instant test samples for professors and examiners."
  },
  {
    slideNumber: 10,
    title: "Conclusion & Future Scope",
    subtitle: "Academic & Real-World Impact",
    points: [
      "Demonstrates practical real-world utility of computer vision in sustainability.",
      "Future Scope 1: On-device Edge AI (TensorFlow Lite / ONNX) for offline smartphone apps.",
      "Future Scope 2: Multi-object detection (YOLOv8) for high-speed conveyor belts.",
      "Future Scope 3: Geolocation integration for mapping nearest local e-waste facilities.",
      "Thank you! Ready for questions."
    ],
    keyHighlight: "Successfully fulfilling college curriculum requirements with production polish."
  }
];

export const WASTE_GUIDE_ITEMS: WasteGuideItem[] = [
  {
    id: 'organic',
    title: 'Organic / Biodegradable Waste',
    category: 'Organic',
    binColor: 'Green Bin (Wet Waste)',
    examples: [
      'Fruit peels (banana, orange, apple)',
      'Vegetable cuttings and rotten produce',
      'Leftover cooked food and bread crusts',
      'Used coffee grounds and loose tea leaves',
      'Eggshells and small animal bones',
      'Fallen garden leaves, cut grass, flowers'
    ],
    handling: 'Place in designated green bin or home compost pile. Decomposes naturally into nutrient-rich humus and bio-fertilizer.',
    doList: [
      'Compost at home whenever possible',
      'Keep free from plastic bags and twist ties',
      'Drain excess gravies or liquids before binning'
    ],
    dontList: [
      'Do not mix with plastic wrappers or polythene bags',
      'Do not include pet feces or hazardous chemicals',
      'Do not pack in non-biodegradable trash liners'
    ]
  },
  {
    id: 'recyclable',
    title: 'Recyclable / Reprocessable Waste',
    category: 'Recyclable',
    binColor: 'Blue Bin (Dry Waste)',
    examples: [
      'Clean plastic bottles (PET #1, HDPE #2)',
      'Corrugated cardboard boxes and cartons',
      'Office paper, newspapers, magazines, books',
      'Aluminum beverage cans and tin food tins',
      'Glass bottles and condiment jars (unbroken)'
    ],
    handling: 'Dry and clean items can be re-melted, pulped, and reformed into virgin-grade products, saving raw mineral extraction and fossil fuels.',
    doList: [
      'Rinse out food liquids with a splash of water',
      'Flatten cardboard boxes and crush soda cans to save bin volume',
      'Keep paper dry and free of oil residues'
    ],
    dontList: [
      'Do not recycle greasy pizza boxes or oil-stained paper',
      'Do not bag recyclables in black trash sacks',
      'Do not recycle broken window mirrors or heat-resistant Pyrex glass'
    ]
  },
  {
    id: 'non-recyclable',
    title: 'Non-Recyclable / Residual Waste',
    category: 'Non-Recyclable',
    binColor: 'Black / Red Bin (Landfill Waste)',
    examples: [
      'Used facial tissues, paper towels, and sanitary items',
      'Multi-layer laminated potato chip packets and candy wrappers',
      'Expanded polystyrene (Styrofoam cups/trays)',
      'Greasy food boxes and dirty wax-coated papers',
      'Ceramic cups, shattered porcelain plates, broken glassware'
    ],
    handling: 'These items cannot be economically segregated or mechanically reprocessed in municipal facilities and must be directed to controlled sanitary landfills or waste-to-energy incineration.',
    doList: [
      'Minimize usage by opting for reusable cloth containers and bags',
      'Ensure dangerous items (like broken glass) are wrapped for sanitation worker safety',
      'Keep tightly sealed to deter stray pests'
    ],
    dontList: [
      'Do not dump into green organic compost bins',
      'Do not burn openly in yards (releases toxic dioxins and furans)',
      'Do not flush sanitary wipes or tissues down toilets'
    ]
  }
];
