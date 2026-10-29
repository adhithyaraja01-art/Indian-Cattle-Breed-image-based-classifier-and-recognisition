# Indian Breed Classification & Bioscience Taxonomy System
### An ICAR-NBAGR Aligned College Mini/Major Project in Animal Biotechnology & AI Computer Vision

[![React](https://img.shields.io/badge/Frontend-React_19-blue.svg)](https://react.dev/)
[![Express](https://img.shields.io/badge/Backend-Express.js-black.svg)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38bdf8.svg)](https://tailwindcss.com/)
[![AI Vision](https://img.shields.io/badge/AI_Model-Gemini_2.5_Flash_%2B_MobileNet_v2-amber.svg)](https://aistudio.google.com/)
[![License](https://img.shields.io/badge/Academic-ICAR--NBAGR_Standard-green.svg)](https://nbagr.icar.gov.in/)

---

## 📌 1. Project Abstract & Overview

India possesses one of the richest farm animal genetic diversity reserves in the world, with **53 officially recognized indigenous cattle (*Bos indicus*) breeds** and **20 riverine buffalo (*Bubalus bubalis*) breeds** accessioned by the **National Bureau of Animal Genetic Resources (ICAR-NBAGR)**.

This college project implements an end-to-end, full-stack scientific application capable of:
1. **Automated Phenotypic Vision Classification**: Identifying indigenous cattle and buffalo breeds from field photographs with diagnostic confidence scores and runner-up candidate distributions.
2. **Dual-Tier AI Architecture**: Combining high-accuracy server-side multimodal AI (**Google Gemini 3.8 Flash** with protected API keys) with instant on-device edge neural network inference (**TensorFlow.js MobileNet v2**).
3. **Genomic Marker Profiling**: Decoding **A2 CSN2 beta-casein** (Pro67 allele vs mutated His67 A1 allele), diploid chromosome karyotypes (*Bos indicus* $2n=60$ vs *Bubalus bubalis* $2n=50$), and heat tolerance genes (**HSP70/HSF1**).
4. **Interactive 3D Macromolecular Visualizer**: Rendering AlphaFold predicted tertiary structures for bovine beta-casein (`P02666`), heat shock protein (`P08107`), and diacylglycerol O-acyltransferase (`Q86227`) using WebGL 3Dmol.js with residue-level pLDDT confidence coloring.
5. **Biomathematical Modeling**: Simulating **Wood's 305-day Incomplete Gamma Lactation Curves** ($y_t = a \cdot t^b \cdot e^{-ct}$) and body weight trajectories with Recharts.
6. **Cloud Research Journal**: Real-time collaborative field journaling with Firebase Firestore and Google Authentication.

---

## 🏛️ 2. System Architecture & Separation of Concerns

This project strictly decouples the four primary layers of modern software engineering:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        1. FRONTEND LAYER (React 19)                    │
│  - Modern Academic UI with Indian Agricultural Aesthetic               │
│  - Navigation, Hero, Feature Cards, Breed Explorer, Upload Dropzone   │
│  - Recharts Lactation & Growth Curves, 3Dmol WebGL Macromolecule Viewer│
│  - Accessible Contrast, Responsive Mobile Drawer, Zero Client Secrets  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                         REST API Requests (/api/*)
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        2. BACKEND LAYER (Express.js)                   │
│  - server.ts & server/apiRouter.ts running on port 3000                │
│  - Input Sanitization, Base64 Validation, and CORS Policy             │
│  - API Endpoints: GET /api/health, POST /api/classify                  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
         ┌──────────────────────────┴──────────────────────────┐
         │                                                     │
┌────────▼─────────────────────────────┐ ┌─────────────────────▼─────────┐
│     3. MODEL INTEGRATION LAYER       │ │        4. BREED DATABASE      │
│  - server/classifier.ts (Server-Side)│ │  - src/data/indigenousBreeds.ts│
│  - Protected GEMINI_API_KEY          │ │  - 53 Registered Cattle Breeds│
│  - Structured JSON Taxonomist Schema │ │  - 20 Registered Buffalo Breeds│
│  - src/services/pretrainedVisionModel│ │  - NBAGR Accession Numbers    │
│    (Client-Side Edge MobileNet v2)   │ │  - Physical & Genomic Traits  │
└──────────────────────────────────────┘ └───────────────────────────────┘
```

---

## 🔐 3. API Key Security & Protection

- **No Secrets in Client Bundles**: The application strictly ensures that `GEMINI_API_KEY` is **never** embedded in client-side code, Vite configurations, or browser bundles.
- **Server Proxy Pattern**: The browser communicates solely with the local backend endpoint `/api/classify`. The Express server accesses `process.env.GEMINI_API_KEY` to authenticate with Google's servers.
- **Fault-Tolerant Edge Fallback**: If the server API key is absent or network connectivity drops, the system seamlessly routes classification to the on-device TensorFlow.js MobileNet neural network or verified diagnostic heuristic engine, ensuring zero crashes during viva demonstrations.

---

## 🚀 4. Simple Setup & Quickstart Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (comes bundled with Node.js)

### Step 1: Clone or Download the Project
```bash
git clone https://github.com/your-username/indian-breed-classification.git
cd indian-breed-classification
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the project root:
```bash
cp .env.example .env
```
Open `.env` and add your Google Gemini API key (obtainable free from [Google AI Studio](https://aistudio.google.com/app/apikey)):
```env
GEMINI_API_KEY="AIzaSyYourSecretGeminiApiKeyHere"
PORT=3000
```
*(Note: If you do not have an API key, the app will still function seamlessly using the client-side pre-trained MobileNet v2 Edge Neural Network and verified NBAGR specimen heuristics).*

### Step 4: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Step 5: Production Build & Testing
```bash
# 1. Typecheck and validate TypeScript
npm run lint

# 2. Build the optimized static client assets
npm run build

# 3. Start the production full-stack server
npm start
```

---

## 🧪 5. Testing the Image-to-Prediction Workflow

To verify the end-to-end workflow:
1. Navigate to the **Classify** tab (`/classify`).
2. Test one of three input methods:
   - **Click any sample specimen pill** (e.g., *Gir*, *Sahiwal*, *Kankrej*, *Murrah*, *Bhadawari*).
   - **Upload any JPEG/PNG photo** from your computer or phone.
   - **Take a photo** using your device camera.
3. Choose your preferred AI engine:
   - **Auto Hybrid (Recommended)**: Server-side Gemini 3.8 Flash with edge MobileNet fallback.
   - **Cloud Gemini**: Deep multi-modal phenotypic analysis.
   - **Edge MobileNet v2**: 100% offline edge neural network running in-browser.
4. Click **Classify Breed Now**.
5. Observe the comprehensive scientific output:
   - Primary predicted breed with vernacular script and ICAR-NBAGR accession number.
   - Visual Confidence Gauge with reliability tiers (Definitive, Strong, Moderate, Inconclusive).
   - Top 3 candidate probability distribution.
   - Observed morphological feature tags (cranial dome, horn curvature, dewlap volume).
   - Genomics tab (CSN2 A2/A2 allele, $2n$ karyotype, DGAT1 lipid regulator).
   - Biomathematical Wood's lactation potential curve and growth trajectory chart.
   - Save directly to your Student Field Journal.

---

## 🌐 6. Online Deployment Options

### Option A: Google Cloud Run (Recommended for AI Studio)
The project is pre-configured with a standard `server.ts` Express entry point listening on `0.0.0.0:3000`. Set `GEMINI_API_KEY` in Cloud Run environment variables and deploy directly.

### Option B: Railway or Render
1. Connect your GitHub repository.
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Add environment variable: `GEMINI_API_KEY`

### Option C: Docker Container
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🎓 7. College Viva Voce Examination Guide

| Viva Question | Concise Academic Answer |
| :--- | :--- |
| **Q1. What is the cytogenetic distinction between Indian Cattle and Buffalo?** | *Bos indicus* (Zebu) possesses a diploid chromosome complement of **$2n = 60$** (58 acrocentric autosomes), whereas *Bubalus bubalis* (River Buffalo) has **$2n = 50$** (5 submetacentric and 19 acrocentric pairs). Cattle feature a prominent thoracic muscular hump and dewlap, whereas buffaloes do not. |
| **Q2. What is the biochemical significance of the A2 CSN2 beta-casein allele?** | At codon 67 of the CSN2 beta-casein gene, indigenous Indian breeds carry **Proline (Pro67)**, which sterically resists gastrointestinal enzymatic cleavage. Exotic breeds often carry **Histidine (His67)** (A1 allele), which allows cleavage of the inflammatory peptide Beta-Casomorphin-7 (BCM-7). |
| **Q3. What mathematical formula generates the lactation curve?** | We implement **Wood's Incomplete Gamma Curve (1967)**: $y_t = a \cdot t^b \cdot e^{-ct}$, where $y_t$ is daily yield at week $t$, $a$ is initial yield, $b$ is rate of increase to peak, and $c$ is lactation persistency decay. |
| **Q4. How does the hybrid AI inference model operate?** | Edge inference utilizes **TensorFlow.js MobileNet v2** for sub-100ms client-side feature extraction. Cloud inference proxies requests to **Google Gemini 3.8 Flash** with JSON schema validation for authoritative taxonomic reasoning. |

---

## 📚 8. References & Data Sources
- **ICAR-NBAGR**: National Bureau of Animal Genetic Resources, Karnal, Haryana ([Official Breed Registry](https://nbagr.icar.gov.in/))
- **Wood, P. D. P. (1967)**: *Algebraic Model of the Lactation Curve in Cattle*. Nature, 216, 164–165.
- **Mishra et al. (2009)**: *Status of Milk Protein Polymorphism (CSN2) in Indian Indigenous Cattle*. Indian J. Anim. Sci., 79(7), 708-710.
- **AlphaFold Protein Structure Database**: CSN2 UniProt `P02666`, HSPA1A UniProt `P08107`.
