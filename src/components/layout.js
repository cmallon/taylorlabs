import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full px-4 mx-auto">{children}</main>
      <footer className="text-gray-300 body-font ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-current text-pink-500"
        >
          <path
            fillOpacity="1"
            d="M0,128L21.8,122.7C43.6,117,87,107,131,112C174.5,117,218,139,262,138.7C305.5,139,349,117,393,122.7C436.4,128,480,160,524,181.3C567.3,203,611,213,655,197.3C698.2,181,742,139,785,106.7C829.1,75,873,53,916,80C960,107,1004,181,1047,186.7C1090.9,192,1135,128,1178,117.3C1221.8,107,1265,149,1309,186.7C1352.7,224,1396,256,1418,272L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-pink-500">
          <div className="container px-5  mx-auto flex md:items-center lg:items-start flex-col bg-pink-500">
            <div className="w-full flex flex-col">
              <h1 className="screaming text-white">Let&apos;s do this!</h1>
              <h2 className="text-3xl max-w-xl text-white">
                Tell us about what you want to build, or what part of your
                business needs a digital boost.
              </h2>
              <h2 className="text-3xl pb-4 underline text-white">
                <a href="mailto:christopher@taylorlabs.co">
                  christopher@taylorlabs.co
                </a>
              </h2>
            </div>
          </div>
          <div className="container px-5 py-8 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col bg-pink-500">
            <div className="w-full md:w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10 text-white p-2 bg-white rounded-full"
                  viewBox="0 0 100 125"
                  enableBackground="new 0 0 100 100"
                  x="0px"
                  y="0px"
                ></svg>
                <h1 className="ml-3 text-xl text-white tracking-wider">
                  taylorlabs
                </h1>
              </a>
              <p className="mt-2 text-white text-base leading-7">
                taylorlabs is a full-service website design company & web
                development agency. TaylorLabs offers the following services:
                digital strategy, web design, web development, Wordpress
                websites, and content creation.
              </p>
            </div>
            <div className="w-1/4"></div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left w-full md:w-2/3 -mx-4">
              <div className="w-1/2 px-4">
                <h2 className="title-font font-bold text-gray-900 tracking-wide text-xl mb-3">
                  Offices
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <p className="leading-none tracking-wide text-white text-base">
                      Portland, ME
                    </p>
                    <p className="leading-none tracking-wide text-white text-base">
                      christopher@taylorlabs.co
                    </p>
                    <p className="leading-none tracking-wide text-white text-base">
                      630.306.2065
                    </p>
                  </li>
                </nav>
              </div>
              <div className="w-1/2 px-4">
                <h2 className="title-font font-bold text-gray-900 tracking-wide text-xl mb-3">
                  Learn More
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a
                      href="#aboutus"
                      className="text-gray-100 hover:text-gray-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-100 hover:text-gray-200"
                      href="mailto:christopher@taylorlabs.co"
                    >
                      Contact Us
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-900 text-center sm:text-left text-base mt-0 leading-none">
              © 2020 taylorlabs
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-700">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-700">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
