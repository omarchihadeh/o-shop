import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout title={"Contact Info"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        Any question or info about products or anything else, feel free to call/chat us anytime we are 24/7
                        available
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : omar.chihadeh.1@gmail.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : +961 81 893 423
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : +961 81 893 423
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;