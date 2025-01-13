import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p>Effective date: January 13, 2025</p>
      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Next Soft SRL. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.
        </p>
      </section>
      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Usage data (pages visited, time spent on the site, etc.)</li>
        </ul>
      </section>
      <section>
        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Communicate with you</li>
          <li>Ensure security and prevent fraud</li>
        </ul>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@nextsoft.com">info@nextsoft.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
