import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  // FAQs Data
  const faqs = [
    {
      title: "What is the definition of a resume?",
      content:
        "A resume is a concise document that summarizes your work experience, education, skills, qualities, and accomplishments. It’s used to showcase your qualifications to potential employers and helps you stand out.",
      link: {
        text: "Learn more in this article.",
        url: "https://resume.io/blog/2-pages-resume",
      },
    },
    {
      title: "What is the difference between a CV and a resume?",
      content:
        "A resume is typically shorter, highlighting relevant skills and experience for a specific job. A CV (curriculum vitae) is more detailed, focusing on your entire career.",
      link: {
        text: "Learn more in this article.",
        url: "https://resume.io/blog/resume-vs-cv-curriculum-vitae-the-complete-guide",
      },
    },
    {
      title: "How do I choose the right resume template?",
      content:
        "To choose the right resume template, consider the job you're applying for and your industry. If you're in a creative field, a more visually appealing template might be best. For traditional industries like finance or law, stick to a clean, professional layout.",
      link: {
        text: "Learn more in this article.",
        url: "https://help.resume.io/article/23-how-do-i-change-my-resume-template-or-design",
      },
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection id="hero" />

      {/* Features Section */}
      <FeaturesSection id="features" />

      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials" />

      {/* FAQs Section */}
      <FAQ faqs={faqs} />

      {/* Contact Us Section */}
      <ContactUs id="contact-us" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;