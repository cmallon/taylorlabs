import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Taylorlabs - Bespoke Digital Agency focused on Web Development"
      />
      <section className="text-gray-700 body-font relative py-16 md:py-64">
        <div className="container px-5 mx-auto flex flex-col h-full justify-center items-center">
          <span className="text-pink-500 sm:screaming screaming text-center">
            taylorlabs.
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            We are a bespoke digital agency with a goal of improving your daily
            life through custom web development.
          </h1>
        </div>
      </section>
      <section className="body-font relative">
        <div className="container px-5 py-8 md:py-24 mx-auto flex flex-col">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pink-500">
            our mission.
          </h1>
          <p className="">
            Our aim is to work with you to create the best product possible, in
            the best way possible.
          </p>
          <p className="">
            We believe in helping to infuse business process with digital
            products to help increase your organizations overall efficiency.
          </p>
        </div>
      </section>
      <section>
        <div className="bg-white">
          <div className="container px-5 py-8 md:py-24 mx-auto flex flex-col h-full justify-center items-center py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl leading-9 font-extrabold text-pink-500 sm:text-5xl sm:leading-10">
                  our partners.
                </h2>
                <p className="">
                  We love to partner and work with company&apos;s that align
                  with our company&apos;s ethos.
                </p>
                <div className="mt-8 sm:flex">
                  <div className="">
                    <a
                      href="mailto:christopher@taylorlabs.co"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-700 bg-pink-100 hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:shadow-outline focus:border-pink-300 transition duration-150 ease-in-out"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center py-8 px-8 bg-pink-50">
                  <a href="https://libertysquaregroup.com/">
                    <img
                      className="max-h-12"
                      src="/lsg_icon.png"
                      alt="Liberty Square Group"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-pink-50">
                  <a href="https://duet.org/">
                    <img className="max-h-12" src="/duet_icon.png" alt="Duet" />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-pink-50">
                  <a href="https://compassfsslink.org">
                    <img
                      className="max-h-12"
                      src="/compass.png"
                      alt="Compass Working Capital"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
