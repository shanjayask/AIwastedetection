# COLLEGE MINI-PROJECT DOCUMENTATION

## Project Title: AI-Based Waste Classification System
**Department:** Computer Science and Engineering  
**Academic Year:** 2026  
**Project Category:** Artificial Intelligence & Computer Vision (Software-Only)

---

### 1. ABSTRACT (185 Words)
Rapid urban development, population growth, and escalating consumer consumption patterns have exacerbated the global solid waste management crisis. Ineffective segregation at the source of generation is the primary bottleneck leading to landfill overfill, resource wastage, and soil and groundwater pollution. 

This project presents the design and implementation of an automated **AI-Based Waste Classification System** utilizing modern computer vision and multimodal foundation models. The system enables users to upload digital images or capture live photos of domestic waste items and automatically categorizes them into three mutually exclusive classes: **Organic**, **Recyclable**, and **Non-Recyclable**. 

Powered by the Google Gemini Vision foundation model via API integration and an intuitive Python Streamlit interface, the application evaluates visual characteristics, computes confidence metrics, and delivers context-aware, actionable disposal recommendations. Additionally, the platform provides session-based history logging, statistical analytics, and an educational segregation guide. 

By eliminating the necessity for costly hardware prototypes and prolonged neural network training regimes, this software solution achieves high diagnostic precision and rapid turnaround, serving as a scalable pedagogical and practical prototype for modern waste segregation.

---

### 2. PROBLEM STATEMENT (130 Words)
Municipal Solid Waste (MSW) sorting remains predominantly manual in most developing and developed nations. Manual sorting is labor-intensive, hygienically hazardous, and severely prone to human error, resulting in cross-contamination that degrades otherwise recyclable materials. 

Furthermore, urban citizens frequently lack precise understanding regarding the recyclability of specific items, such as multi-layer plastics, composite packaging, or grease-stained paper. While hardware-based automated sorting solutions exist, their prohibitive capital cost and installation complexity prevent widespread deployment at community and residential levels. 

Therefore, there is an urgent demand for a lightweight, software-only, easily accessible Artificial Intelligence tool that empowers everyday individuals, educational institutions, and facilities managers to accurately identify waste types, observe classification confidence, and receive immediate disposal guidance.

---

### 3. OBJECTIVES
1. **Develop an Accurate Computer Vision Classifier**: Accurately categorize input waste imagery into one of three defined categories: *Organic*, *Recyclable*, and *Non-Recyclable*.
2. **Implement Zero-Hardware Footprint**: Construct a pure software application executable on standard commodity personal computers without requiring robotics or external microcontroller sensors.
3. **Generate Actionable Disposal Recommendations**: Provide practical, item-specific post-classification guidance (e.g., wash instructions, bin assignment, composting suitability).
4. **Formulate High-Fidelity Confidence Metrics**: Deliver transparent, percentage-based confidence scores to assist user verification and academic validation.
5. **Architect an Educational Dashboard**: Incorporate historical logging, statistical distributions, and a comprehensive waste segregation guide.
6. **Ensure Rapid Deployment for Academic Demonstration**: Structure the codebase for effortless compilation, setup, and viva demonstration on Windows operating systems using Visual Studio Code.

---

### 4. METHODOLOGY
The system operates on an event-driven, pipeline-based methodology comprising six sequential stages:

1. **Acquisition**: The user supplies an image through drag-and-drop file upload (JPG, PNG, WEBP), live webcam feed, or curated demo sample selector.
2. **Preprocessing**: The raw input is validated for file format integrity and ingested via the Python Imaging Library (PIL). The image is converted into an in-memory buffer or Base64 byte array suitable for multimodal transmission.
3. **Multimodal API Dispatch**: The system packages the preprocessed image along with an engineered, schema-enforced prompt and transmits it to the Google Gemini Vision API via encrypted HTTPS.
4. **Zero-Shot Vision Inference**: The deep vision-language model evaluates surface textures, color profiles, structural contours, and contextual identifiers to isolate the waste object.
5. **Schema Parsing and Strict Validation**: The JSON payload returned by the model is decoded and validated against a schema whitelist. Any deviations in classification categories are normalized to strictly match the three permissible classes.
6. **Presentation and State Persistence**: The parsed output is rendered in the Streamlit graphical interface with category-specific color cards, progress bars, and recommendations, while appending the record to the session state log.

---

### 5. SYSTEM MODULES

#### Module 1: Image Upload Module
- Responsible for multi-source image acquisition.
- Supports file uploads (`.jpg`, `.jpeg`, `.png`, `.webp`) up to 200MB.
- Integrates browser-based camera inputs for direct photo capture.
- Provides built-in test sample objects for instant evaluation without requiring external image files.

#### Module 2: Image Preprocessing Module
- Utilizes the Python Imaging Library (Pillow).
- Manages image dimension checks, color mode normalization (RGB conversion), and file stream conversion.
- Generates display thumbnails and formats the image bytes for transmission over network protocols.

#### Module 3: AI Classification Module
- Connects to Google's state-of-the-art multimodal vision model.
- Transmits structured instructions that constrain model outputs to specific JSON schemas.
- Extracts item nomenclature, waste classification label, confidence level, and material properties.
- Includes exception handling routines for API timeouts, network disconnections, and rate-limit events.

#### Module 4: Result Display Module
- Dynamically renders tailored card interfaces based on predicted class:
  - *Organic*: Emerald green palette with leaf icon (`🌱`).
  - *Recyclable*: Sapphire blue palette with recycle icon (`♻️`).
  - *Non-Recyclable*: Crimson red palette with trash icon (`🗑️`).
- Displays a visual progress bar representing classification certainty.

#### Module 5: Recommendation Module
- Produces customized, actionable waste disposal steps based on the item identified.
- Alerts users to necessary pre-disposal steps, such as rinsing milk containers or detaching caps.
- Emphasizes the variance of regional municipal recycling regulations.

#### Module 6: History and Statistics Module
- Maintains an in-memory session ledger of all predictions.
- Structures entries into a Pandas DataFrame containing timestamps, item names, categories, and confidence figures.
- Generates bar charts summarizing category distributions.
- Supplies a one-click CSV export and history purge capability.

---

### 6. SYSTEM REQUIREMENTS

#### Software Requirements:
- **Operating System**: Windows 10 / Windows 11 (or Linux / macOS)
- **Programming Language**: Python 3.10.x or higher
- **Integrated Development Environment (IDE)**: Visual Studio Code
- **Key Libraries**: Streamlit (v1.35+), google-genai / google-generativeai, Pillow (PIL), Pandas, python-dotenv
- **Internet Access**: Active broadband connection for Gemini API calls

#### Hardware Requirements:
- **Processor**: Intel Core i3 / AMD Ryzen 3 or higher (Standard modern laptop/PC)
- **RAM**: Minimum 4 GB (8 GB recommended)
- **Storage**: Minimum 500 MB free hard disk space
- **Display**: Minimum 1280x720 screen resolution
- **Webcam**: Optional (only required if capturing live photos via webcam)

---

### 7. ADVANTAGES
- **Cost Effective**: Uses free-tier cloud vision APIs, eliminating expensive GPU cluster requirements.
- **High Accuracy**: Pre-trained on diverse datasets, yielding robust detection across lighting conditions and angles.
- **Zero Installation Overhead**: No complex database engines (e.g. MySQL, PostgreSQL) needed; runs seamlessly with Streamlit.
- **Demo-Ready**: Includes pre-loaded test items and clear status indicators ideal for viva and lab demonstrations.

---

### 8. LIMITATIONS
- **Internet Dependency**: As a cloud-API powered vision model, offline operation is currently not supported.
- **Session-Based State**: History is retained within the browser session and resets upon server restart.
- **Ambiguous Objects**: Severely crushed or deeply soiled objects without clear silhouettes may result in lower confidence ratings.

---

### 9. FUTURE SCOPE
- **Edge Deployment**: Porting the model to TensorFlow Lite or ONNX runtime for on-device, offline inference on smartphones or embedded boards.
- **Multi-Object Bounding Box Detection**: Identifying and segmenting multiple items simultaneously within a single frame.
- **GIS Integration**: Mapping nearby municipal recycling collection centers and hazardous waste disposal kiosks.
- **Gamification**: Awarding eco-points to citizens for proper segregation to incentivize civic recycling habits.

---

### 10. CONCLUSION
The **AI-Based Waste Classification System** illustrates the practical, impactful intersection of Artificial Intelligence and environmental stewardship. By developing a lightweight, reliable, and user-centric software application, this mini-project demonstrates that effective waste categorization can be achieved rapidly without prohibitive hardware expenses, making it an exemplary academic showcase for college curriculum evaluation.
