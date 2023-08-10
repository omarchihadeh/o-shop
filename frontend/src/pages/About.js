import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify">
            <b>Welcome to O'Shop,</b> your premier online shopping destination where
            convenience, quality, and style converge. At O'Shop, we're committed
            to bringing you an unparalleled shopping experience, right from the
            comfort of your home. Our mission is to provide a diverse range of
            products that cater to your every need, all while delivering
            exceptional customer service and value.
          </p>
          <p className="text-justify mt-2">
            O'Shop was born from a vision to revolutionize the way you shop. Our
            goal is to create an online marketplace that reflects your unique
            tastes and preferences, offering a curated selection of products
            that cater to different lifestyles and aspirations. We envision
            O'Shop as a platform where you can explore, discover, and acquire
            items that resonate with your individuality.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
