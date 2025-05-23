import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
    VerticalTimeline, VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Experience.css";
import { Button, TextField, Box } from '@mui/material';

function Experience() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send("service_h9fcp8n", "template_f3166zs", templateParams, "7ni3RvLAz2Jr5qzWl")
      .then((response) => {
        alert("Thank you for reaching out! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Something went wrong. Please try again later.");
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleLinkedInRedirect = () => {
    window.open("https://www.linkedin.com/in/pavangv12/", "_blank");
  };

  return (
    <div className="experience">
      <h5>P.A.V.A.N. - Professional Achievements and Versatile Artistic Narrative</h5>
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Indian Institute of Technology, Roorkee
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Executive Post Graduate Degree
          </h4>

          <p> Data Science & Artificial Intelligence</p>
        </VerticalTimelineElement>
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
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MS Ramaiah Institute of Technology, Bengaluru, Karnataka.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>

          <p> Computer Science and Engineering</p>
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
            Bachelor's Degree in Computer Science and Engineering
          </h4>
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

          <h4 className="vertical-timeline-element-subtitle">10+2(PUC) - PCMC</h4>
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
      </VerticalTimeline>

      <Box className="contact-form" p={2} mt={4} border={1} borderRadius={2} borderColor="#3e497a">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Box>

      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedInIcon />}
          onClick={handleLinkedInRedirect}
        >
          Connect with LinkedIn
        </Button>
      </Box>
    </div>
  );
}

export default Experience;