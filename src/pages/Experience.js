import React from 'react'
import {
    VerticalTimeline, VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DownloadIcon from '@mui/icons-material/Download';
import "../styles/Experience.css"
import { Button } from '@mui/material';

function Experience() {
  const onButtonClick = () => {
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })

  } 
  return (
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer 2 - Radiometer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru, KA</h4>
            <p>C#.NET, WPF, Python</p>
          </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2022 - Oct 2023"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern - Radiometer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru, KA</h4>
            <p>Working on Log analysis using machine learning</p>
          </VerticalTimelineElement>
          
          
          
  
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              MS Ramaiah Institute of Technology, Bengaluru, Karnataka.
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">
              Master's Degree
            </h4>
  
            <p> Computer science and Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Database Administrator - Tata Consultancy Services.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru, KA</h4>
            <p>Developed the backend infrastructure for 3 projects.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              PES College of Engineering, Mandya, Karnataka.
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree
            </h4>
  
            <p> Computer science and Engineering</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012 - 2014"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Alva's PU College, Moodabidri, Karnataka.
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">10+2(PUC)</h4>
  
            <p> PCMC</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2012"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Pushpa High School, Periyapatna, Karnataka.
            </h3>
            <p> High School</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--education"
            
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DownloadIcon />}
          >
          {/*<Button onClick={onButtonClick} align = "center"> Download Resume!</Button>*/}
          </VerticalTimelineElement>
        </VerticalTimeline>
        
      </div>
    );
  }
  
  export default Experience;
  