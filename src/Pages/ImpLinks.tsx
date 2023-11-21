import React from "react";
import "../CSS/Home.css";
import { Table } from "antd";
import "../CSS/ImpLinks.css";
import Footer from "../component/Footer";
let data = [
  {
    "S. No.": 1,
    Resources: "List of Helpline Numbers",
    "Links/ Numbers":
      "Child Helpline: 1098\r\nWomen Helpine- 1091\r\nPolice- 112\r\nCovid Helpline- 1075 \r\nDCPCR Helpline- 9311551393",
  },
  {
    "S. No.": 2,
    Resources: "Child related legislations/ guidelines",
    "Links/ Numbers": (
      <p>
        Juvenile Justice Act (Care and Protection of Children) Act, 2015 and
        Model Rules
        <br />
        <a href="https://www.indiacode.nic.in/handle/123456789/2148?sam_handle=123456789/1362">
          India Code: Juvenile Justice (Care and Protection of Children) Act,
          2015.{" "}
        </a>{" "}
        <br />
        Protection of Children from Sexual Offences Act, 2012{" "}
        <a href="https://www.indiacode.nic.in/handle/123456789/2079?sam_handle=123456789/1362">
          India Code: Protection of Children from Sexual Offences Act, 2012{" "}
        </a>{" "}
        <br />
        Child and Adolescent Labour (Prohibition and Regulation) Act, 1986{" "}
        <a href="https://www.indiacode.nic.in/handle/123456789/1848?sam_handle=123456789/1362">
          India Code: Child and Adolescent Labour (Prohibition and Regulation)
          Act, 1986{" "}
        </a>
        <br />
        Prohibition of Child Marriage Act, 2006{" "}
        <a href="https://www.indiacode.nic.in/handle/123456789/2055?view_type=search&sam_handle=123456789/1362">
          India Code: Prohibition of Child Marriage Act, 2006{" "}
        </a>
        <br />
        Right of Children to Free and Compulsory Education Act, 2009{" "}
        <a href="https://www.indiacode.nic.in/handle/123456789/2086?sam_handle=123456789/1362">
          India Code: Right of Children to Free and Compulsory Education Act,
          2009{" "}
        </a>
        <br />
        Commissions for Protection of Child Rights Act, 2005{" "}
        <a href="https://www.indiacode.nic.in/handle/123456789/2056?sam_handle=123456789/1362">
          India Code: Commissions for Protection of Child Rights Act, 2005{" "}
        </a>
        <br />
        Guidelines for Mission Vatsalya Guidelines of Mission Vatsalya |
        Ministry of Women & Child Development{" "}
        <a href="https://wcd.nic.in/acts/guidelines-mission-vatsalya"></a>
        <br />
        ICDS<a href=""></a>
        <br />
        Guidelines for Mission Shakti Anganwadi and Poshan 2.0
        chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://wcd.nic.in/sites/default/files/Final_Saksham_Anganwadi_and_Mission_2.0_guidelines_July_29_2022.pdf{" "}
      </p>
    ),
  },
  {
    "S. No.": 3,
    Resources: "Important websites",
    "Links/ Numbers": (
      <p>
        Delhi Government Website
        <a href="https://portal.delhi.gov.in/"> : Click to know more</a>
        <br />
        Department of WCD Website
        <a href="http://www.wcddel.in/"> Click to know more</a>
        <br />
        Delhi Commission for Protection of Child Rights Website
        <a href="https://dcpcr.delhi.gov.in/"> : Click to know more</a>
        <br />
        CARA Website
        <a href="http://cara.nic.in/"> : Click to know more</a>
        <br />
        Juvenile Justice Committee of Delhi High Court Website
        <a href="http://jjcdhc.nic.in/"> : Click to know more</a>
        <br />
        Special Police Unit for Women & Children (SPUWAC)
        <a href="http://spuwac.com/"> : Click to know more</a>
        <br />
        Delhi State Legal Services Authority
        <a href="https://dslsa.org/"> : Click to know more</a>
        <br />
      </p>
    ),
  },
  {
    "S. No.": 4,
    Resources: "List of Police Stations",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/5b0a9fb6-9ad8-4613-8b55-059aa4ba9739/page/y6atC">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 5,
    Resources: "List of Govt. Schools",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/48c94ee6-7c2e-417b-b5e4-23382f61e69c/page/p_yllgqs6g2c">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 6,
    Resources: "List of Govt. Hospitals",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/8029cd6f-f62e-4862-98a5-f61364e11ed3/page/p_87w3odhevc">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 7,
    Resources: "List of DMs/SDMs",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/1af9f683-446c-4605-b6c2-415b97cb5f97/page/p_43rcafwxwc">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 8,
    Resources: "List of JJBs",
    "Links/ Numbers": (
      <a href="http://jjcdhc.nic.in/?page_id=14">Click to know more</a>
    ),
  },
  {
    "S. No.": 9,
    Resources: "List of DDEs",
    "Links/ Numbers": (
      <a href="https://www.edudel.nic.in/mis/mismail/frmComposeMailDirectory.aspx">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 10,
    Resources: "List of CWCs",
    "Links/ Numbers": (
      <a href="http://jjcdhc.nic.in/?page_id=16">Click to know more</a>
    ),
  },
  {
    "S. No.": 11,
    Resources: "List of DCPUs",
    "Links/ Numbers": (
      <a href="http://jjcdhc.nic.in/?page_id=18">Click to know more</a>
    ),
  },
  {
    "S. No.": 12,
    Resources: "List of CCIs",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/7c2ac3e1-0553-4c66-852a-db398765f645/page/p_0feylzhdvc">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 13,
    Resources: "List of SJPUs",
    "Links/ Numbers": (
      <a href="http://jjcdhc.nic.in/?page_id=20">Click to know more</a>
    ),
  },
  {
    "S. No.": 14,
    Resources: "List of Anganwadis",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/2949d73b-9129-4c32-af1a-5aa8988e6195/page/p_hmixlqwxwc">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 15,
    Resources: "MCD/NDMC/DCB Schools",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/835aec49-521b-49e4-84a0-054c2faa8249/page/p_rcbnl26g2c">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 16,
    Resources: "List of childline coordinators",
    "Links/ Numbers": (
      <a href="https://lookerstudio.google.com/u/0/reporting/39c0d592-8468-47f3-9f03-f7f1ddd9593a/page/p_dw1copo1vc">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 17,
    Resources: "List of District Officers (WCD)",
    "Links/ Numbers": (
      <a href="http://jjcdhc.nic.in/?page_id=18">Click to know more</a>
    ),
  },
  {
    "S. No.": 18,
    Resources: "List of Child Development Project Officers (CDPO)",
    "Links/ Numbers": (
      <a href="http://wcd.delhigovt.nic.in/list-child-development-project-officer-dept-women-and-child-development">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 19,
    Resources: "List of Protection Officers",
    "Links/ Numbers": (
      <a href="http://wcd.delhigovt.nic.in/protection-officers">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 20,
    Resources: "List of Family Counseling Centres",
    "Links/ Numbers": (
      <a href="http://wcd.delhigovt.nic.in/family-counselling-centres">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 21,
    Resources: "List of MCD Offices",
    "Links/ Numbers": (
      <a href="https://mcdonline.nic.in/portal/zones;jsessionid=A46E2DCC30D1A98841DBBBE8911E0699.np1#home">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 22,
    Resources: "List of Tehsildars",
    "Links/ Numbers": (
      <a href="https://revenue.delhi.gov.in/revenue/list-tehsildar-revenue-department">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 23,
    Resources: "List of Mohalla Clinic",
    "Links/ Numbers": (
      <a href="https://dgehs.delhi.gov.in/dghs/aam-aadmi-mohalla-clinics">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 24,
    Resources: "List of One Stop Centres",
    "Links/ Numbers": (
      <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/http://wcddel.in/pdf/OneStopCenterWEC_2021.pdf ">
        Click to know more
      </a>
    ),
  },
  {
    "S. No.": 25,
    Resources: "Common Service Centres",
    "Links/ Numbers": (
      <a href="https://www.apnacsconline.in/csc-locator/delhi/delhi-672/">
        Click to know more
      </a>
    ),
  },
];
let column = [
  {
    title: <p style={{ fontSize: "20px", color: "#1A196F" }}>Sr. No.</p>,
    dataIndex: "S. No.",
    key: "S. No.",
    render: (description: string) => (
      <div className="pre-lineS">{description}</div>
    ),
  },
  {
    title: <p style={{ fontSize: "20px", color: "#1A196F" }}>Resources</p>,
    dataIndex: "Resources",
    key: "Resources",
    render: (description: string) => (
      <div className="pre-line">{description}</div>
    ),
  },
  {
    title: <p style={{ fontSize: "20px", color: "#1A196F" }}>Links/ Numbers</p>,
    dataIndex: "Links/ Numbers",
    key: "Links/ Numbers",
    render: (description: string) => (
      <div className="pre-lineR">{description}</div>
    ),
  },
];
const ImpLinks: React.FC = () => (
  <div className="App" style={{ background: "white" }}>
    <header className="App-header"></header>
    <div className="home" style={{ backgroundColor: "#fcfcff" }}>
      <div className="container-type" style={{ height: "80vh" }}>
        <center>
          <h1
            style={{
              marginTop: "40vh",
              marginBottom: "32px",
              fontSize: "48px",
              color: "#1A196F",
            }}
          >
            Resources
          </h1>

          <Table
            dataSource={data}
            columns={column}
            style={{ width: "80vw" }}
            className="table table-bordered table-hover table-condensed"
          ></Table>
        </center>
        <div style={{ height: "20vh", backgroundColor: "#03051E" }}>
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default ImpLinks;
