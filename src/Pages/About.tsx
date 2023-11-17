import React from "react";
import "../CSS/Home.css";
import image from "../images/bg_blur.png";
import Footer from "../component/Footer";

const AboutUs: React.FC = () => {
  return (
    <div className="App" style={{ backgroundImage: image }}>
      <header className="App-header"></header>
      <div className="home">
        <div
          className="container-type"
          style={{ height: "100vh", width: "100vw" }}
        >
          <center>
            <p
              style={{
                margin: "2vw",
                fontSize: "48px",
                fontWeight: 900,
                marginTop: "60vh",
                color: "#1A196F",
              }}
            >
              About Us
            </p>
          </center>
          <h1
            style={{
              textAlign: "left",
              marginTop: "40px",
              marginLeft: "16vw",
              marginRight: "16vw",
              marginBottom: "10px",
              color: "#1A196F",
            }}
          >
            Purpose of the Website
          </h1>
          <p
            style={{
              marginLeft: "16vw",
              marginRight: "16vw",
              fontSize: "20px",
              whiteSpace: "pre-line",
              textAlign: "justify",
            }}
          >
            The socioeconomic conditions of a family play a significant role in
            rendering children more susceptible to adversity. Increasing
            awareness of government social security initiatives and resources as
            well as linking these households with various schemes can mitigate
            the vulnerability of the entire family unit. Consequently, this
            endeavour of empowering such households with awareness of their
            rights and entitlements as well as assisting/collaborating with
            stakeholders in connecting them to various schemes can make a
            substantial contribution to enhancing child welfare and safety in
            Delhi. <br />
            <br />
            This website is a joint initiative between Delhi Commission for
            Protection of Child Rights, Govt of NCT of Delhi and British Asian
            Trust. The website aims to have a comprehensive list of social
            security schemes, scholarships, resources, essential documents and
            compensations available for children and households in Delhi. It
            will serve as a centralised platform with this information in a
            user-friendly format with all relevant links and resources available
            in one place for children, their families and all stakeholders to
            fill the gap in knowledge and awareness on various social security
            schemes, resources, scholarships etc. that are available to
            residents of Delhi.
          </p>
          <h1
            style={{
              textAlign: "justify",
              marginTop: "80px",
              marginLeft: "16vw",
              marginRight: "16vw",
              marginBottom: "10px",
              color: "#1A196F",
              whiteSpace: "pre-line",
            }}
          >
            Delhi Commission for Protection of Child Rights
          </h1>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "16vw",
              marginRight: "16vw",
              fontSize: "20px",
              whiteSpace: "pre-line",
            }}
          >
            The Delhi Commission for Protection of Child Rights (DCPCR), Govt of
            NCT of Delhi, has been constituted under the Commission for
            Protection of Child Rights (CPCR) Act, 2005. The Commission is
            responsible for monitoring the implementation of the rights of the
            children, conducting research, inquiring into complaints and
            violations of child rights, and advising the Government on policy
            matters on the issue of early childhood care and development, school
            education, protection of children from physical, mental and sexual
            violence, child labour, early marriage, substance abuse, and
            trafficking.
          </p>

          <h1
            style={{
              textAlign: "left",
              marginTop: "80px",
              marginLeft: "16vw",
              marginRight: "16vw",
              marginBottom: "10px",
              color: "#1A196F",
            }}
          >
            Disclaimer
          </h1>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "16vw",
              marginRight: "16vw",
              fontSize: "20px",
            }}
          >
            This Website is maintained by Delhi Commission for Protection of
            Child Rights, Government of National Capital Territory of Delhi and
            the British Asian Trust.
            <br />
            <br />
            The contents of this website are for information purposes only,
            enabling the public at large to have a quick and an easy access to
            information and do not have any legal sanctity. Though every effort
            is made to provide accurate and updated information, it is likely
            that the some details may have changed prior to their update in the
            website. Hence, we do not assume any legal liability on the
            completeness, accuracy or usefulness of the contents provided in
            this website.
            <br />
            <br />
            The links are provided to other external sites in some web
            pages/documents. We do not take responsibility for the accuracy of
            the contents in those sites. The hyperlink given to external sites
            do not constitute an endorsement of information, products or
            services offered by these sites. Users are advised to verify/check
            any information with the relevant Government department(s) and/or
            other source(s), and to obtain any appropriate professional advice
            before acting on the information provided in this Website.
            <br />
            <br />
            We welcome your suggestions to improve this website and request that
            error (if any) may kindly be brought to our notice.
          </p>
          <div
            style={{
              backgroundColor: "#03051E",
            }}
          >
            <center>
              <Footer />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
