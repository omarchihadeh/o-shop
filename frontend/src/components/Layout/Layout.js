import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Helmet from "react-helmet";
//import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
//import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children, title, descryption, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta name="descryption" content={descryption} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                <Toaster />
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: 'Ecommerce app',
    descryption: 'MERN stack project',
    keywords: 'mern, react, node, mongoDB',
    author: 'Omar Chihadeh'
}

export default Layout;