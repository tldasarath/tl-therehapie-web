import React from 'react';
import { Layout } from '../../layouts/Layout';

export const Terms = () => {
  return (
    <Layout breadcrumbTitle={"Terms and conditions"} breadcrumbSubtitle={"Terms and conditions"}>
    <div className="container-fluid py-5 bg-white">
      <div className="container">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-bottom py-4">
            <div className="d-flex align-items-center justify-content-between">
              <h1 className="mb-0 text-dark">Terms & Conditions</h1>
              <span className="text-muted small">Last Updated: March 4, 2025</span>
            </div>
          </div>
          
          <div className="card-body">
            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">1. Introduction</h2>
              <p className="text-secondary">
                theREHApie Consultants provides <strong>rehabilitation consulting services</strong> to manufacturers, 
                distributors, and healthcare providers in the Middle East. We connect businesses 
                with market opportunities and assist in navigating regulatory requirements.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">2. Use of Website</h2>
              <div className="card bg-light">
                <div className="card-body">
                  <p>By using this website, you agree to:</p>
                  <ul className="list-unstyled">
                    <li>✔ Access and use the site only for lawful purposes</li>
                    <li>✔ Not distribute, modify, or reproduce content without prior permission</li>
                    <li>✔ Not attempt to interfere with the website's functionality or security</li>
                  </ul>
                  <p className="card-text mt-3 text-muted fst-italic">
                    We reserve the right to modify or discontinue the website at any time without notice.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">3. Services & Disclaimer</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">We strive to provide accurate, up-to-date information, but we do not guarantee:</p>
                  <ul className="text-secondary">
                    <li>That the information is always complete, accurate, or free from errors</li>
                    <li>That our services will meet all client expectations or business outcomes</li>
                    <li>Any liability for external partnerships, distributor relationships, or business risks</li>
                  </ul>
                  <p className="card-text mt-3 text-danger">
                    <strong>Medical Disclaimer:</strong> We do not provide medical treatment or diagnosis. 
                    Our services focus on business consulting in the rehabilitation industry.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">4. Intellectual Property Rights</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    All content, including text, graphics, logos, and website design, is owned by 
                    <strong> theREHApie Consultants</strong> and protected by international copyright laws.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="h5 text-dark">✔ Permitted Use:</h3>
                      <p className="text-secondary">You may browse and share content for non-commercial purposes.</p>
                    </div>
                    <div className="col-md-6">
                      <h3 className="h5 text-dark">❌ Restricted Use:</h3>
                      <p className="text-secondary">You may not copy, modify, or distribute our content without written consent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">5. Payment Terms (If Applicable)</h2>
              <div className="card border-light">
                <div className="card-body">
                  <ul className="text-secondary">
                    <li>Payments for consulting services must be made as per the agreed contract terms</li>
                    <li>Invoices must be cleared within the specified timeframe to avoid service delays</li>
                    <li>Refunds are only applicable as per the refund policy in individual service agreements</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">6. Third-Party Links & Services</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">Our website may contain links to external sites. We are not responsible for:</p>
                  <ul className="text-secondary">
                    <li>The accuracy or reliability of third-party content</li>
                    <li>Transactions or agreements made with third-party businesses</li>
                  </ul>
                  <p className="text-secondary">Users must review the privacy policies and terms of third-party sites before engaging.</p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">7. Limitation of Liability</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary"><strong>theREHApie Consultants</strong> is not liable for:</p>
                  <ul className="text-secondary">
                    <li>Any direct, indirect, or incidental damages arising from website use</li>
                    <li>Any loss of business, profits, or data due to service disruptions</li>
                    <li>Any unauthorized access or security breaches beyond our control</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">8. Privacy & Data Protection</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">We prioritize data security. Any information collected will be handled as per our <strong>Privacy Policy</strong>.</p>
                  <ul className="text-secondary">
                    <li>Personal data is used only for business and communication purposes</li>
                    <li>We do not sell or share user data without consent, except as required by law</li>
                  </ul>
                  <p className="text-secondary">For more details, please refer to our <strong>Privacy Policy</strong> [here].</p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">9. Governing Law</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    These terms are governed by the laws of <strong>Dubai, UAE</strong>. 
                    Any disputes shall be resolved through arbitration or legal proceedings in UAE courts.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">10. Changes to Terms & Conditions</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    We may update these terms from time to time. Continued use of our website 
                    after any changes indicates acceptance of the new terms.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">11. Contact Us</h2>
              <div className="card border-light">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-3">📞</span>
                    <span className="text-secondary">+971 50 136 1586</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-3">✉️</span>
                    <span className="text-secondary">abdul.rahiman@therehapie.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-3">🌐</span>
                    <span className="text-secondary">www.theREHApie.com</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center mt-4 pt-3 border-top">
              <p className="text-muted">
                By using our website and services, you acknowledge that you have read, 
                understood, and agreed to these <strong>Terms & Conditions</strong>. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}