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
          <h6 className="bio">
          I am a Data Scientist who believes that every dataset has a story to tell. With a strong foundation in machine learning, predictive analytics, and statistical modeling, I turn complex data into valuable insights that drive meaningful impact.

From building predictive models that improve efficiency to uncovering hidden trends in large datasets, I love working at the intersection of data, technology, and decision-making. My experience spans classification, regression, and clustering, leveraging tools like Python, SQL, TensorFlow, and Scikit-learn to create solutions that matter.

Beyond my technical skills, I am a published researcher in cybersecurity, showcasing my analytical approach to problem-solving. I am constantly pushing the boundaries of my knowledge, exploring deep learning, AI, and time series forecasting to stay ahead in this fast-evolving field.

If you’re looking for a data-driven thinker who thrives on solving real-world challenges, let’s connect and create something impactful together.
</h6>


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
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Skills</h2>
            <span>
              Python, Scikit-leaern, SQL, Power BI, Tensor Flow, Pandas, EDA, Numpy,
              Matplotlib, Clustering, Regression, Classification, Neural Network, ASP.NET Core, C#, Blazor, WPF
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
