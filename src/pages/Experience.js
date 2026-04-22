import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    VerticalTimeline, VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import "../styles/Experience.css";

const workStyle = {
  background: 'rgba(59, 130, 246, 0.1)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
};

const eduStyle = {
  background: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  boxShadow: '0 0 20px rgba(139, 92, 246, 0.1)',
};

const workIconStyle = { background: '#1d4ed8', color: '#fff' };
const eduIconStyle  = { background: '#7c3aed', color: '#fff' };

function Experience() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-clear success message after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSubmitted(true);
        setErrors({});
      })
      .catch((error) => {
        setErrorMessage("Something went wrong. Please try again later.");
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="experience-page">
      <div className="experience-header">
        <h1 className="section-title">
          My <span className="gradient-text">Journey</span>
        </h1>
        <p className="section-subtitle">
          P.A.V.A.N. — Professional Achievements and Versatile Artistic Narrative
        </p>
      </div>

      <div className="timeline-wrap">
        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.25)">

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 - 2025"
            contentStyle={eduStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(139, 92, 246, 0.4)' }}
            iconStyle={eduIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="tl-title">IIT Roorkee</h3>
            <h4 className="tl-subtitle">Executive Post Graduate Degree</h4>
            <p className="tl-detail">Data Science and Artificial Intelligence</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            contentStyle={workStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(59, 130, 246, 0.4)' }}
            iconStyle={workIconStyle}
            icon={<WorkIcon />}
          >
            <h3 className="tl-title">Software Engineer 2</h3>
            <h4 className="tl-subtitle">Radiometer · Bengaluru, KA</h4>
            <p className="tl-detail">Leading RPA automation and AI-driven quality engineering initiatives in a global medical device company.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2022 - Oct 2023"
            contentStyle={workStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(59, 130, 246, 0.4)' }}
            iconStyle={workIconStyle}
            icon={<WorkIcon />}
          >
            <h3 className="tl-title">Software Engineer Intern</h3>
            <h4 className="tl-subtitle">Radiometer · Bengaluru, KA</h4>
            <p className="tl-detail">Built automation pipelines and ML prototypes across healthcare quality workflows.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2023"
            contentStyle={eduStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(139, 92, 246, 0.4)' }}
            iconStyle={eduIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="tl-title">MS Ramaiah Institute of Technology</h3>
            <h4 className="tl-subtitle">Master's Degree</h4>
            <p className="tl-detail">Computer Science and Engineering, Bengaluru</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            contentStyle={workStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(59, 130, 246, 0.4)' }}
            iconStyle={workIconStyle}
            icon={<WorkIcon />}
          >
            <h3 className="tl-title">Database Administrator</h3>
            <h4 className="tl-subtitle">Tata Consultancy Services · Bengaluru, KA</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            contentStyle={eduStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(139, 92, 246, 0.4)' }}
            iconStyle={eduIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="tl-title">PES College of Engineering, Mandya</h3>
            <h4 className="tl-subtitle">Bachelor of Engineering</h4>
            <p className="tl-detail">Computer Science and Engineering</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012 - 2014"
            contentStyle={eduStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(139, 92, 246, 0.4)' }}
            iconStyle={eduIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="tl-title">Alva's PU College, Moodabidri</h3>
            <h4 className="tl-subtitle">10+2 (PUC) — PCMC</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2012"
            contentStyle={eduStyle}
            contentArrowStyle={{ borderRight: '7px solid rgba(139, 92, 246, 0.4)' }}
            iconStyle={eduIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="tl-title">Pushpa High School, Periyapatna</h3>
            <h4 className="tl-subtitle">High School</h4>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>

      <hr className="section-divider" />

      <div className="contact-section">
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Have a project in mind? Let us talk.</p>

        {submitted ? (
          <div className="contact-success glass-card">
            <CheckCircleIcon style={{ fontSize: 48, color: '#06b6d4', animation: 'fadeInUp 0.6s ease both' }} />
            <h3>Message sent!</h3>
            <p>Thank you for reaching out. I will get back to you soon.</p>
            <p className="success-timer">This page will reset in a few seconds...</p>
          </div>
        ) : (
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="form-error-message">
                <span>{errorMessage}</span>
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or idea..."
                rows={5}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <CircularProgress size={16} style={{ marginRight: 8, color: 'inherit' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon style={{ fontSize: 16, marginRight: 8 }} />
                    Send Message
                  </>
                )}
              </button>
              <a
                href="https://www.linkedin.com/in/pavangv12/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline linkedin-btn"
              >
                <LinkedInIcon style={{ fontSize: 18, marginRight: 8 }} />
                Connect on LinkedIn
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Experience;
