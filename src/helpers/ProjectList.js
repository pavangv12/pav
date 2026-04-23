import Proj1 from "../assets/ToDoList.png";
import Proj2 from "../assets/Portfolio.jpg"
import Proj3 from "../assets/Proj3.jpg";
import Proj4 from "../assets/Proj4.jpeg"
import Proj5 from "../assets/Kidneydisease_Image.png";
import Proj6 from "../assets/airQuality.png";
import Proj7 from "../assets/heartdisease.png";
import Proj8 from "../assets/Customer_churn_using_ANN.png";
import Proj9 from "../assets/Books_Recommendation_using_LLM.png";
import Proj10 from "../assets/rag-chatbot.jpg";
import Proj11 from "../assets/APEX.png";



export const ProjectList = [
    {
    name: "APEX – Applicant Profile Evaluator using eXplainable AI",
    description: "Automated resume screening system that uses Google's Gemini AI and semantic embeddings to evaluate applicant profiles with full explainability. Extracts key competencies, experience levels, and skill matches to provide transparent candidate evaluation scores.",
    image: Proj11,
    skills: "Streamlit, Google Generative AI (Gemini), SentenceTransformers, PyPDF2, ReportLab, scikit-learn, dotenv",
    github: "https://github.com/pavangv12/apex",
    demo: "https://apexai.streamlit.app/",
  },

  {
    name: "Book Recommendation using LLM",
    image: Proj9,
    description: "Intelligent book recommendation engine leveraging LLMs and vector embeddings to provide semantic similarity-based suggestions. Enables users to find books through natural language queries and sentiment-based filtering for personalized reading recommendations.",
    skills: "Built a Semantic Book Recommender using LLMs, LangChain, Gradio, and ChromaDB to enable natural language-based recommendations, classification, and sentiment-based filtering of books.",
    github: "https://github.com/pavangv12/Book-recommender-using-LLM",
  },
  {
    name: "Medical Chatbot using RAG",
    image: Proj10,
    description: "Conversational medical knowledge system using Retrieval-Augmented Generation (RAG) to answer health-related questions based on medical documents. Combines LLMs with FAISS vector search to provide accurate, source-backed medical information.",
    skills: "Pipenv, langchain, langchain_huggingface, huggingface_hub, faiss-cpu, pypdf, streamlit",
    github: "https://github.com/pavangv12/Medical-Chatbot-using-RAG",
  },
  {
    name: "Deep learning Kidney Disease Classification ",
    image: Proj5,
    description: "Deep learning model for early detection of kidney disease using medical imaging data and TensorFlow. Implements a CNN-based classifier with DVC for experiment tracking, achieving high accuracy in disease classification and stratification.",
    skills: "Python, tensorflow, DVC",
    github: "https://github.com/pavangv12/Deep-learning-Kidney-Disease-Classification",
  },
  {
    name: "India’s Air – Analysis and prediction of Air Quality in Indian cities",
    image: Proj6,
    description: "Comprehensive analysis of air quality trends across major Indian cities with predictive modeling for pollutant levels. Combines exploratory data analysis with time series forecasting to provide insights for environmental monitoring and public health.",
    skills: "Ppandas, matplotlib, seaborn, numpy, ipywidgets, ipython",
    github: "https://github.com/pavangv12/Analysis-and-prediction-of-Air-Quality-in-Indian-cities",
  },
  {
    name: "Heart Disease Prediction",
    image: Proj7,
    description: "Machine learning classifier that predicts heart disease risk based on clinical features like age, cholesterol, and blood pressure. Implements multiple algorithms with scikit-learn for patient risk stratification and early intervention.",
    skills: "Python, Pandas, Scikit-learn, Matplotlib, KaggleAPI, Machine Learning Techniques",
    github: "https://github.com/pavangv12/Heart-Disease-Prediction",
  },
    {
    name: "Stock Market Analysis and Prediction on Time Series Data",
    image: Proj3,
    description: "Advanced time series analysis for stock price prediction using neural networks and statistical modeling. Implements feature engineering, LSTM models, and trend analysis to forecast market movements for informed investment decisions.",
    skills: "Python, Pandas, Numpy, Matplotlib, Scikit-learn, Tensorflow, Feature Engineering, Statistical Modeling",
    github: "https://github.com/pavangv12/Time-series-analysis-predict-stock-price",
  },
  {
    name: "Nifty 50 Analysis",
    image: Proj4,
    description: "Interactive dashboard for analyzing India's Nifty 50 stock market index built with Streamlit. Provides real-time metrics, trend analysis, and performance visualizations for tracking major Indian market movements and sectors.",
    skills: "Python, Machine Learning, Streamlit",
    github: "https://github.com/pavangv12/NIFTY-50-Stock-Analysis",
  },
  {
    name: "Bank Customer Churn Prediction",
    image: Proj8,
    description: "Artificial Neural Network model to predict customer churn for retention strategy optimization. Features comprehensive data preprocessing, hyperparameter tuning, and ANN architecture design to identify at-risk customers proactively.",
    skills: "Python, Machine Learning, TensorFlow, Numpy, Pandas, Scikit-learn",
    github: "https://github.com/pavangv12/Bank_customer_churn_ANN",
  },
  {
    name: "Personal Portfolio",
    image: Proj2,
    description: "Modern, responsive portfolio website showcasing data science and AI projects with a glassmorphism design and dark theme. Built with React for interactivity and deployed on Netlify with optimized performance and SEO.",
    skills: "React,Node.js,MongoDB",
    github: "https://github.com/pavangv12/pav",
  },
  {
    name: "To-Do List App",
    image: Proj1,
    description: "Desktop productivity application for task management built with C# and WPF. Provides intuitive interface for creating, organizing, and tracking daily tasks with persistent storage and user-friendly task categorization.",
    skills: "C#, WPF",
    github: "https://github.com/pavangv12/ToDo-List-App",
  },
];
