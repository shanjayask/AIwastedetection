# ♻️ AI-Based Waste Classification System

An intelligent, software-only computer vision application designed to automatically identify and classify municipal and domestic waste into **🌱 Organic**, **♻️ Recyclable**, and **🗑️ Non-Recyclable** categories using **Google Gemini Vision AI** and **Streamlit**.

---

## 1. Project Title
**AI-Based Waste Classification System**  
*College Mini-Project in Artificial Intelligence & Computer Vision (Academic Year 2026)*

---

## 2. Introduction
Rapid urbanization and consumer consumption generate billions of tons of solid municipal waste annually. Inefficient manual waste sorting causes contamination of recyclable materials, fills landfills prematurely, and accelerates greenhouse gas emissions. 

This project provides an automated, accessible software solution that enables users to upload or capture photos of waste items and instantly receive accurate waste categories, confidence metrics, and eco-friendly disposal recommendations.

---

## 3. Problem Statement
Traditional municipal waste management relies heavily on manual segregation at landfills and processing centers, leading to:
- High human labor costs and hazardous occupational exposure.
- Severe cross-contamination of recyclables due to mixed disposal at the point of origin.
- Lack of immediate citizen knowledge regarding local recycling rules.

There is a vital need for a lightweight, easily accessible, software-only AI tool capable of educating citizens and segregating waste instantaneously.

---

## 4. Objectives
1. **Accurate Image Classification**: Classify input waste images into exactly three distinct categories: *Organic*, *Recyclable*, and *Non-Recyclable*.
2. **Zero-Hardware Dependency**: Deliver a pure software application deployable on standard personal computers without expensive IoT or robotics.
3. **Actionable Recommendations**: Give clear, practical disposal guidelines for each identified object (e.g., rinse containers, remove bottle caps, compost organics).
4. **Transparent Confidence Metrics**: Provide clear confidence percentages for transparent AI decision-making.
5. **Interactive Educational Dashboard**: Include session history tracking, category statistics, visual charts, and an educational waste guide.

---

## 5. Features
- 📸 **Multiple Input Formats**: Supports JPEG, JPG, PNG, WEBP uploads, webcam captures, and preloaded sample testing.
- 🤖 **State-of-the-Art Gemini Vision AI**: Uses Google Gemini multimodal vision capabilities for robust object identification.
- 🎨 **Adaptive Color Coding**: Distinct visual card aesthetics (Emerald for Organic, Royal Blue for Recyclable, Crimson for Non-Recyclable).
- 📜 **Session History**: Logs all predictions with timestamps, filenames, detected item labels, categories, and confidence scores.
- 📊 **Visual Analytics**: Interactive distribution bar charts and session metrics.
- 📚 **Waste Segregation Guide**: Searchable compendium with Do's and Don'ts.
- 🛡️ **Graceful Error Handling**: Clear notifications for missing API keys, network issues, or malformed data.

---

## 6. Technologies Used
- **Programming Language**: Python 3.10+
- **Frontend / Framework**: Streamlit
- **Artificial Intelligence**: Google Gemini Vision API (`gemini-2.5-flash` / `gemini-1.5-flash`)
- **Image Processing**: Pillow (PIL)
- **Data Analytics**: Pandas
- **Environment Management**: python-dotenv

---

## 7. System Architecture

```text
┌────────────────────────┐
│      User Device       │
│  (Windows / VS Code)   │
└───────────┬────────────┘
            │ 1. Uploads Image (JPG/PNG/WEBP)
            ▼
┌────────────────────────┐
│  Streamlit Application │  <─── Reads config from .env
│       (app.py)         │
└───────────┬────────────┘
            │ 2. Preprocesses image (PIL)
            ▼
┌────────────────────────┐
│  Google GenAI SDK      │
└───────────┬────────────┘
            │ 3. Multimodal Prompt & Image Base64
            ▼
┌────────────────────────┐
│ Google Gemini Vision   │  <─── Cloud-hosted Pre-trained Model
│       API Model        │
└───────────┬────────────┘
            │ 4. Structured JSON Response (Item, Category, Confidence, Recommendation)
            ▼
┌────────────────────────┐
│  Streamlit UI Output   │
│ - Colored Result Card  │
│ - Confidence Bar       │
│ - History & Analytics  │
└────────────────────────┘
```

---

## 8. AI Model / Approach
Rather than spending weeks gathering and training a custom Convolutional Neural Network (CNN) from scratch—which often struggles with variable lighting, diverse object geometries, and complex backgrounds—this project adopts a **Pre-Trained Multimodal Vision Foundation Model (Google Gemini Vision)**.

### Advantages of Foundation Vision AI:
- **Zero-Shot Object Generalization**: Recognizes thousands of everyday domestic items effortlessly.
- **Contextual Reasoning**: Distinguishes between clean recyclables and greasy contaminated items (e.g., clean pizza box vs. grease-stained box).
- **Fast Development Cycle**: Allows building a fully working, robust demo within hours.

---

## 9. Waste Categories

| Category | Icon | Description | Common Examples | Proper Bin |
| :--- | :---: | :--- | :--- | :--- |
| **Organic** | 🌱 | Biodegradable matter that decomposes naturally | Fruits, vegetables, food leftovers, eggshells, leaves, tea bags | Green Bin (Wet) |
| **Recyclable** | ♻️ | Reprocessable dry materials | PET bottles, clean cardboard, paper, aluminum soda cans, glass jars | Blue Bin (Dry) |
| **Non-Recyclable** | 🗑️ | Residual, multi-layer, or contaminated refuse | Used tissues, chip wrappers, sachets, greasy boxes, styrofoam | Black Bin (Landfill) |

---

## 10. Project Structure

```text
AI-Waste-Classification/
│
├── app.py                 # Main Streamlit web application
├── requirements.txt       # Python package dependencies
├── .env                   # Environment variable for Gemini API key
├── .env.example           # Example configuration template
├── .gitignore             # Git ignore file (excludes secrets and venv)
├── README.md              # Comprehensive project documentation
├── DOCUMENTATION.md       # College mini-project formal report
├── PPT_SLIDES.md          # 10-Slide presentation script for viva
└── VIVA_QUESTIONS.md      # 18+ Viva exam questions and answers
```

---

## 11. Installation (Windows + VS Code)

Follow these step-by-step instructions in Windows using VS Code or Command Prompt:

### Step 1: Open Terminal in VS Code
Open the project folder in VS Code, then open a new terminal:
```powershell
Ctrl + `  (or Terminal -> New Terminal)
```

### Step 2: Create a Python Virtual Environment
```powershell
python -m venv venv
```

### Step 3: Activate the Virtual Environment
On Windows PowerShell:
```powershell
.\venv\Scripts\Activate.ps1
```
*(If PowerShell displays an Execution Policy restriction, run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`, or switch terminal to Command Prompt and run `venv\Scripts\activate.bat`)*

### Step 4: Upgrade pip and Install Dependencies
```powershell
pip install --upgrade pip
pip install -r requirements.txt
```

---

## 12. API Key Setup

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Sign in with your Google account and click **"Create API Key"** (Free tier available).
3. Open the `.env` file in the project directory.
4. Replace `YOUR_API_KEY_HERE` with your actual key:
   ```text
   GEMINI_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
5. Save the file (`Ctrl + S`).

*(Alternatively, you can paste the key directly into the sidebar text box inside the running app).*

---

## 13. How to Run

With your virtual environment activated, run:

```powershell
streamlit run app.py
```

The application will launch automatically in your default web browser at:
```text
http://localhost:8501
```

---

## 14. Expected Output

When you upload an image (e.g., a plastic water bottle):

```text
--------------------------------------------------------
[♻️ RECYCLABLE]
Detected Item : PET Plastic Water Bottle
Confidence    : 96.2%

💡 Disposal Recommendation:
Empty any leftover fluid, rinse lightly, crush the bottle
to conserve bin volume, and deposit into the blue recycling bin.
--------------------------------------------------------
```

---

## 15. Advantages
- **Fast Execution**: Classifies images in under 2 seconds.
- **Accurate & Versatile**: Detects complex, obscure objects without custom dataset labeling.
- **Cost Effective**: Runs completely within the Google Gemini API free tier.
- **Clean UI**: Built with Streamlit for a fast, responsive user interface.

---

## 16. Limitations
- Requires an active internet connection to contact the Gemini Vision API.
- Extreme occlusions or severely blurred images may reduce classification confidence.
- Municipal recycling capabilities vary by geographic jurisdiction.

---

## 17. Future Scope
- Mobile application deployment using Flutter or React Native.
- Edge AI inference using quantized lightweight models (TensorFlow Lite / ONNX).
- Real-time video stream detection with bounding boxes for conveyor-belt sorting.
- Geolocation-based routing to nearest specialized e-waste or hazardous disposal centers.

---

## 18. Conclusion
The **AI-Based Waste Classification System** successfully showcases how pre-trained computer vision models can democratize waste sorting. By pairing vision reasoning with an accessible user interface, this mini-project fulfills all college engineering curriculum goals while championing environmental sustainability.
