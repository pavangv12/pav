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
          <p> I am a dedicated professional with a strong academic background in Computer Science and Engineering, holding a Bachelor's degree from PES College of Engineering and an M.Tech from M.S Ramaiah Institute of Technology. In my current role as a Software Engineer Intern at Beckman Coulter India Pvt. Ltd, Radiometer Opco, I actively contribute to Windows application development and log data analysis. I also have experience as a Database Administrator at Cisco through Tata Consultancy Services Pvt Ltd, where I managed databases and led disaster recovery initiatives.</p>
          <p>I am passionate about research and innovation, as evidenced by projects such as analyzing Named Data Networks under Distributed Denial of Service attacks during my M.Tech final year. I have a diverse skill set including programming, databases, networking, and operating systems, and I'm keen to apply my expertise to tackle challenges in the dynamic technology landscape. With a strong commitment to learning, I am excited to bring my skills to an organization that values innovation and continuous growth. </p>

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
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
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
        </ol>
      </div>
    </div>
  );
}

export default Home;
