import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Pavan</h2>
          <div className="prompt">
          <div className="bio">
  <p>I’m Pavan, a Data Scientist passionate about turning raw data into meaningful, real-world solutions.</p>
  <p>Having worked in domains like healthcare, automation, and quality engineering, I apply machine learning, Generative AI, and statistical modeling to solve real-world problems and build scalable systems.</p>
  <p>My stack includes Python, SQL, Scikit-learn, TensorFlow, and LangChain, with growing interest in LLMs, data storytelling, and real-time analytics.</p>
  <p>I’ve also contributed to academic research in network security, reflecting a mindset grounded in exploration and rigor.</p>
  <p>Outside work, I enjoy badminton, gardening, and watching films that make me think.</p>
  <p>I'm always open to collaborations, ideas, and data-driven opportunities that create impact.</p>
</div>
          <a
            href="https://www.linkedin.com/in/pavangv12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto: pavangv12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/pavangv12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
  <h1>Skills</h1>
  <div className="list">
      <ul>
        <li><strong>Programming & Data Handling:</strong> Python, SQL, Pandas, NumPy</li>
        <li><strong>Machine Learning & AI:</strong> Scikit-learn, TensorFlow, Neural Networks, Deep Learning, OpenAI GPT</li>
        <li><strong>ML Techniques:</strong> Regression, Classification, Clustering, Dimensionality Reduction</li>
        <li><strong>Data Processing:</strong> Feature Engineering, Data Preprocessing, Exploratory Data Analysis (EDA)</li>
        <li><strong>Visualization & Statistical Modeling:</strong> Matplotlib, Seaborn, Power BI</li>
        <li><strong>Advanced AI Solutions:</strong> Retrieval-Augmented Generation (RAG), web scraping with FAISS and OpenAI for real-time knowledge retrieval.</li>
      </ul>
  </div>
</div>
</div>
  );
}

export default Home;
