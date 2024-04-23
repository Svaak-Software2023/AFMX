import { useState } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Avatar from "../../assets/bot.jpg";
import "./style.css";

const theme = {
  background: "#E3FEF7",
  headerBgColor: "#0C359E",
  headerFontColor: "white",
  headerFontSize: "18px",
  botBubbleColor: "#31363F",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#344955f5",
};

const Review = ({ steps }) => {
  const { name, gender, age } = steps;

  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const Intellichat = () => {
  const [state, setState] = useState({
    userInfo: {
      name: "",
      gender: "",
      age: "",
    },
    selectedOption: "",
    question: "",
    issueDetails: "",
  });

  const handleEndStep = (data) => {
    setState((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^(\+\d{1,3}\s?)?((\(\d{1,3}\))|\d{1,3})[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return re.test(String(phone).toLowerCase());
  }

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="IntelliChat"
        botAvatar={Avatar}
        avatarStyle={{
          height: "50px",
          width: "50px",
        }}
        steps={[
          {
            id: "1",
            message: "Welcome to IntelliChat! How can we assist you today?",
            trigger: "option-selection",
          },

          {
            id: "option-selection",
            options: [
              {
                value: "Ask a question",
                label: "Ask a question",
                trigger: "ask-question",
              },
              {
                value: "Connect to sales",
                label: "Connect to sales",
                trigger: "connect-to-sales",
              },
              {
                value: "Report an issue",
                label: "Report an issue",
                trigger: "report-issue",
              },
              {
                value: "Learn more about Afmx",
                label: "Learn more about Afmx",
                trigger: "learn-more",
              },
              {
                value: "Watch what's new on demand",
                label: "Watch what's new on demand",
                trigger: "watch-new",
              },
            ],
          },
          {
            id: "ask-question",
            message: "What is your question related to?",
            trigger: "ask-question-categories",
            options: [
              { value: "product", label: "Product" },
              { value: "service", label: "Service" },
              { value: "support", label: "Support" },
              { value: "other", label: "Other" },
            ],
          },
          {
            id: "ask-question-categories",
            options: [
              {
                value: "product",
                label: "Product",
                trigger: "ask-question-product",
              },
              {
                value: "service",
                label: "Service",
                trigger: "ask-question-service",
              },
              {
                value: "support",
                label: "Support",
                trigger: "ask-question-support",
              },
              { value: "other", label: "Other", trigger: "ask-question-other" },
            ],
          },
          {
            id: "ask-question-product",
            message: "Please provide your question related to our products.",
            trigger: "question-product-details",
          },
          {
            id: "question-product-details",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter a valid question.";
              }
            },
            trigger: "get-user-details",
          },
          {
            id: "ask-question-service",
            message: "Please provide your question related to our services.",
            trigger: "question-service-details",
          },
          {
            id: "question-service-details",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter a valid question.";
              }
            },
            trigger: "get-user-details",
          },
          {
            id: "ask-question-support",
            message:
              "Please provide your question related to our support services.",
            trigger: "question-support-details",
          },
          {
            id: "question-support-details",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter a valid question.";
              }
            },
            trigger: "get-user-details",
          },
          {
            id: "ask-question-other",
            message: "Please provide your question.",
            trigger: "question-other-details",
          },
          {
            id: "question-other-details",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter a valid question.";
              }
            },
            trigger: "get-user-details",
          },

          {
            id: "connect-to-sales",
            message: "How can we assist you with our sales?",
            trigger: "connect-to-sales-options",
            options: [
              {
                value: "speak-to-rep",
                label: "Speak to a Sales Representative",
              },
              { value: "other", label: "Other" },
            ],
          },
          {
            id: "connect-to-sales-options",
            options: [
              {
                value: "speak-to-rep",
                label: "Speak to a Sales Representative",
                trigger: "speak-to-rep",
              },
              {
                value: "other",
                label: "Other",
                trigger: "connect-to-sales-other",
              },
            ],
          },

          {
            id: "speak-to-rep",
            message:
              "Please provide your contact details, and a sales representative will get in touch with you shortly.",
            trigger: "get-user-details",
          },

          {
            id: "connect-to-sales-other",
            message:
              "Please provide details regarding your sales-related inquiry.",
            trigger: "connect-to-sales-other-details",
          },
          {
            id: "connect-to-sales-other-details",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter valid details.";
              }
            },
            trigger: "get-user-details",
          },
          {
            id: "report-issue",
            message: "What is your issue related to?",
            trigger: "issue-categories",
            options: [
              { value: "product", label: "Product" },
              { value: "service", label: "Service" },
              { value: "support", label: "Support" },
              { value: "other", label: "Other" },
            ],
          },
          {
            id: "issue-categories",
            options: [
              {
                value: "product",
                label: "Product",
                trigger: "ask-issue",
              },
              {
                value: "service",
                label: "Service",
                trigger: "ask-issue",
              },
              {
                value: "support",
                label: "Support",
                trigger: "ask-issue",
              },
              { value: "other", label: "Other", trigger: "ask-issue" },
            ],
          },
          {
            id: "ask-issue",
            message: "Please provide details about the issue you're facing.",
            trigger: "issue-detail",
          },
          {
            id: "issue-detail",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter valid issue details.";
              }
            },
            trigger: "get-user-details",
          },
          {
            id: "learn-more",
            message: "What would you like to learn about Afmx?",
            trigger: "learn-more-options",
            options: [
              {
                value: "company",
                label: "Company Information",
                trigger: "learn-more-company",
              },
              {
                value: "services",
                label: "Services Offered",
                trigger: "learn-more-services",
              },
              {
                value: "careers",
                label: "Careers at Afmx",
                trigger: "learn-more-careers",
              },
            ],
          },
          {
            id: "learn-more-options",
            options: [
              {
                value: "company",
                label: "Company Information",
                trigger: "learn-more-company",
              },
              {
                value: "services",
                label: "Services Offered",
              },
              {
                value: "careers",
                label: "Careers at Afmx",
              },
            ],
          },

          {
            id: "other-issue",
            message: "Please ask your question.",
            trigger: "question-details",
          },
          {
            id: "question-details",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter a valid question.";
              }
            },
            trigger: "end-message",
          },

          {
            id: "issue-details",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter valid issue details.";
              }
            },
            trigger: "end-message",
          },
          {
            id: "learn-more-company",
            message:
              "You can learn more about Afmx on our website: https://americasfinestmaintenance.com/#/",
            trigger: "end-message",
          },
          {
            id: "watch-new",
            message:
              "Check out our latest updates and product demos on our YouTube channel: https://www.youtube.com/afmx",
            trigger: "end-message",
          },

          {
            id: "get-user-details",
            message: "Can you please tell me your name?",
            trigger: "get-name",
          },
          {
            id: "get-name",
            user: true,
            validator: (value) => {
              if (value.trim()) {
                return true;
              } else {
                return "Please enter your name.";
              }
            },
            trigger: "get-contact-info",
          },
          {
            id: "get-contact-info",
            message: "Do you prefer to be contacted by email or phone?",
            trigger: "get-contact-options",
            options: [
              { value: "email", label: "Email" },
              { value: "phone", label: "Phone" },
            ],
          },
          {
            id: "get-contact-options",
            options: [
              {
                value: "email",
                label: "Email",
                trigger: "get-email",
              },
              {
                value: "phone",
                label: "Phone",
                trigger: "get-phone",
              },
            ],
          },
          {
            id: "get-email",
            message: "Sure thing! Can you please tell me your email address?",
            trigger: "get-email-input",
          },
          {
            id: "get-email-input",
            user: true,
            validator: (value) => {
              if (value.trim() && validateEmail(value)) {
                return true;
              } else {
                return "Please enter a valid email address.";
              }
            },
            trigger: "end-message",
          },
          {
            id: "get-phone",
            message: "Sure thing! Can you please tell me your phone number?",
            trigger: "get-phone-input",
          },
          {
            id: "get-phone-input",
            user: true,
            validator: (value) => {
              if (value.trim() && validatePhone(value)) {
                return true;
              } else {
                return "Please enter a valid phone number.";
              }
            },
            trigger: "end-message",
          },

          {
            id: "end-message",
            message: "Thank you for contacting IntelliChat. Have a great day!",
            end: true,
          },
        ]}
        handleEnd={handleEndStep}
      />
    </ThemeProvider>
  );
};

export default Intellichat;
