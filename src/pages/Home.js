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
                  <h6 className="bio"> I am a dynamic and results-driven Software Engineer with a robust academic foundation in Computer Science and Engineering, complemented by degrees from PES College of Engineering and M.S. Ramaiah Institute of Technology. With expertise spanning software development, data science, and database management, I bring a versatile skill set to the table. At Beckman Coulter India Pvt. Ltd., Radiometer Opco, I have been instrumental in driving innovation through Windows application development, log data analysis, and data science initiatives, leveraging machine learning to extract actionable insights. My prior experience at Cisco, via Tata Consultancy Services, involved managing critical databases and spearheading disaster recovery strategies. Passionate about solving complex challenges, I excel at bridging technology and business needs to deliver impactful solutions. With a strong commitment to continuous learning and innovation, I aim to contribute to transformative projects that shape the future of technology.</h6>

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
          {/*
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li> 
          */ }
        </ol>
      </div>
    </div>
  );
}

export default Home;
