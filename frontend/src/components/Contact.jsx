import { useState } from 'react';

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

import {
  sendContactMessage
} from '../services/api';

import '../styles/Contact.css';


function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const [submitting, setSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState('');

  const [errorMessage, setErrorMessage] =
    useState('');

  const [validationErrors, setValidationErrors] =
    useState([]);


  const handleChange = (event) => {

    const {
      name,
      value
    } = event.target;


    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));


    setSuccessMessage('');
    setErrorMessage('');
    setValidationErrors([]);
  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    setSubmitting(true);

    setSuccessMessage('');
    setErrorMessage('');
    setValidationErrors([]);


    try {

      const response =
        await sendContactMessage(formData);


      setSuccessMessage(
        response.message ||
        'Your message has been sent successfully.'
      );


      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });


    } catch (error) {

      console.error(
        'Contact form error:',
        error
      );


      const apiResponse =
        error.response?.data;


      if (
        apiResponse?.errors &&
        Array.isArray(apiResponse.errors)
      ) {

        setValidationErrors(
          apiResponse.errors
        );

      } else {

        setErrorMessage(
          apiResponse?.error ||
          'Unable to send your message. Please try again.'
        );

      }

    } finally {

      setSubmitting(false);

    }

  };


  return (
    <section
      className="contact"
      id="contact"
    >

      <div className="container">

        <div className="section-heading">

          <p className="section-label">
            Get In Touch
          </p>

          <h2>
            Let&apos;s Work Together
          </h2>

          <p className="contact-intro">
            Have a project, backend development
            opportunity, or AI-related idea?
            Feel free to send me a message.
          </p>

        </div>


        <div className="contact-container">

          <div className="contact-info">

            <div>

              <h3>
                Contact Information
              </h3>

              <p>
                I&apos;m open to discussing backend
                engineering, full-stack development,
                AI integration, and software
                development opportunities.
              </p>

            </div>


            <div className="contact-details">

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="contact-detail"
              >
                <FaEnvelope />

                <span>
                  YOUR_EMAIL@example.com
                </span>
              </a>


              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <FaGithub />

                <span>
                  GitHub
                </span>
              </a>


              <a
                href="https://linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <FaLinkedin />

                <span>
                  LinkedIn
                </span>
              </a>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project discussion"
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
              />

            </div>


            {validationErrors.length > 0 && (

              <div className="form-validation-errors">

                {validationErrors.map(
                  (error, index) => (

                    <p
                      key={`${error.field}-${index}`}
                    >
                      {error.message}
                    </p>

                  )
                )}

              </div>

            )}


            {errorMessage && (

              <p className="form-error">
                {errorMessage}
              </p>

            )}


            {successMessage && (

              <p className="form-success">
                {successMessage}
              </p>

            )}


            <button
              type="submit"
              className="contact-submit"
              disabled={submitting}
            >

              {submitting
                ? 'Sending...'
                : 'Send Message'}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}


export default Contact;