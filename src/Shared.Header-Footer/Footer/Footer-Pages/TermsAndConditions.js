import React from 'react';
import './LegalPages.css';

const TermsAndConditions = () => {
  return (
    <div className="legal-page">
      <h1>Terms and Conditions</h1>
      <p>Effective date: January 13, 2025</p>
      <section>
        <h2>Introduction</h2>
        <p>
          These Terms and Conditions govern your use of the Next Soft SRL website and services. By accessing our website, you agree to comply with these terms.
        </p>
      </section>
      <section>
        <h2>Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions.
        </p>
      </section>
      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website is the property of Next Soft SRL and is protected by copyright laws.
        </p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@nextsoft.com">info@nextsoft.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
