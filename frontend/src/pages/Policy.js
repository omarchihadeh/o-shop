import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy and Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <br />
          <p>
            <b>How We Use Your Information:</b>
          </p>
          <p>
            Order Processing: We use your personal information to process and
            fulfill your orders, send order confirmations, and provide customer
            support.
          </p>
          <p>
            Communication: We may use your contact information to send you
            transactional emails, promotional offers, newsletters, and important
            updates about our products and services. You can opt-out of
            receiving marketing communications at any time.
          </p>
          <p>
            Personalization: We may use your information to personalize your
            shopping experience, recommend products, and display targeted
            advertisements based on your preferences and browsing history.
          </p>
          <p>
            Analytics: We use usage information to analyze trends, monitor the
            effectiveness of our Site, and improve our services.
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
