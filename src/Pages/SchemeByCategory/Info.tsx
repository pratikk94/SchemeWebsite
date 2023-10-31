import {
  HomeOutlined,
  InfoCircleOutlined,
  ManOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Card, Col, Collapse, Divider, Row, Typography, Space } from "antd";
const { Title, Text } = Typography;
const Info = ({ schemeData }: any) => {
  const schemeDataV = {
    id: "scheme_0007",
    name: "Support for Marginalized Individuals for Livelihood and Enterprise (SMILE)",
    type: ["Skill"],
    award_entitlement:
      "The scheme has the following components:<br/><ol><li>1.Scholarships for Transgender Students Scholarships will be available for studies in India only and will be awarded by the Ministry to Transgender students studying in classes IX and above (Prematric & Postmatric stage) to support parents of Transgender Children and to provide financial assistance to the Transgender students studying in classes IX and X, and at post matriculation or post-secondary stage and till post-graduation.The self-perceived gender identity of the Transgender persons up to the age of class 8th remains ambiguous to large extent and therefore the transgender identity of the children may not be established.  <br/>The scholarship shall be awarded to students studying in a government or private higher secondary school/college/university, including such residential institutes of the Government and eligible private institutes selected and notified in a transparent manner by the State Government/Union Territory Administration concerned. It will also cover technical and vocational courses in Industrial Training Institutes/ Industrial Training Centres affiliated with the National Council for Vocational Training (NCVT) of classes XI and XII level including Polytechnics and other courses (any course of less than one year duration is not covered under this scheme; Certificate courses are also not covered. <br/>All Graduate Degree & Post-graduate degree/Diploma /Diploma courses recognised by UGC/ AICTE shall all be covered. <br/><ol><li>A sum of Rs. 13,500 shall be given as postmatric/prematric scholarship to eligible transgender students.   </li><li>Scholarship shall be given in bulk once every academic year from 1st April or from the month of admission, whichever is later, to the month in which the examinations are completed, at the end of the academic year (including scholarship during holidays), provided that if the scholar secures admission after the 20th day of a month, the amount will be paid from the month following the month of admission. </li><li>In case of renewal of scholarship, it will be paid from the month following the month up to which scholarship was paid in the previous year.  </li><li>Students shall be encouraged to have Aadhar linked bank account to facilitate payments through Aadhar Payment Bridge while applying for the scholarship which should have the same name as stipulated in the transgender certificate issued through the National Portal for Transgender person of the Ministry of Social Justice & Empowerment</li></li><li>Skill Development and Livelihood for the empowerment of transgender community <br/><li>Create an ecosystem for the youth to make informed choices on the available skilling avenues.   </li><li>Provide support to youth for skill training and certification.  </li><li>Assistance under the scheme shall be provided for small business, which may equip the Transgender persons by upgrading their skills to enable them to start income generating activities through self-employment.</li></li><li>Composite Medical Health for Transgender persons <br/>The Transgender persons will be selected as per criteria indicated below:-  <li>The beneficiary should be a Transgender person as notified by Government of India holding a Transgender Certificate & Identity Card issued by the National Portal for Transgender Persons. </li><li>The beneficiary should not be availing similar benefits from any other schemes of Centre or state government. </li><li>Those Transgender persons who have already received their certificates from the National portal for Transgender persons would be automatically eligible to receive the insurance.   </li><li>The scheme shall supplement the support of various schemes being run by the Central and State Governments, and other similar programs which focus on providing medical intervention and support to transgender persons or wherever, such individuals could avail benefits of such schemes. Transgender Certificate issued by the Transgender portal being run by the Ministry of Social Justice & Empowerment to be considered as a valid document of proof for availing the benefits.     </li><li>Hospitals shall be identified from the empanelled list of institutions under the Ayushman Bharat Scheme to provide SexReassignment Surgeries for Transgender Persons, such hospitals and institutions shall open dedicated medical cells to conduct psychological care and sex reassignment surgeries inclusive of post operation care. </li></li><li>4.Housing in the form of ‘Garima Greh’ for Transgender Persons <br/>The main aim of Garima Greh’s to provide shelter to Transgender persons with basic amenities like shelter, food, medical care and recreational facilities for maximum of one year. Shelters will be a space for convergence and provisions of various entitlements of social security, food, education and health care systems. All homeless persons in the shelters should be given priority under various schemes, and government programmes.Besides, it will provide support for the capacity-building/skill development of Transgender persons.  <br/><li>To ensure the shelter home with facilities of lodging and boarding, clothing, recreation, medical and counselling.  </li><li>To maintain the uniformity in terms of infrastructure, manpower services in the Garima Greh.  </li><li>To safeguard the rights of TG persons and protect them from atrocities.  </li><li>To confirm the prevalence of congenial atmosphere in the Garima Greh by adopting uniform rules and regulations suitable to be followed by all TG persons.     </li><li>To empower a TG person through skill-development and skill upgradation programmes. </li></li>",
    min_age: 0,
    max_age: 200,
    gender: "Other",
    max_income: 100000,
    residence: ["GNTC of Delhi", "Pan India"],
    disability: "N/A",
    reservation: ["SC", "ST", "OBC", "Other", "Minority"],
    eligibility:
      "<ol><li>Scholarship Scheme<ol><li>The student should have a Transgender Certificate issued through the National Portal for Transgender person of the Ministry of Social Justice & Empowerment.<br/>The scholarships are open to Indian Nationals only.</li><li>The candidate should not be receiving any other central or state government funded Pre-Matric/Post-matric Scholarship. No scholarship will be paid to the students under this scheme from the date they accept another scholarship/stipend. The candidate can however, accept free lodging or a grant or ad-hoc monetary help from the State Government or any other source for the purchase of books, equipment or for meeting the expenses on board and lodging in addition to the scholarship amount paid under this scheme</li></ol><u>Criteria of selection for scholarship</u><br/>All eligible candidates identifying as Transgender Person will be considered forscholarship. As the number of scholarships for Transgender persons available in a year is fixed and limited, the selection of application would be on the basis of total marks achieved in the previous academic year as reflected in the marksheet.<br/>In case of the same merit, preference shall be generated from ‘Date of Birth’ criteria of the applicant (senior is preferred) and based on the availability of the slots.<br/>In the Scholarship, students applying for Post Matric shall be given preference over Pre-Matric Scholarship.<br/>The list of selected candidates would be displayed on the portal at a specified date considering, inter alia, the number of slots available for the scholarship.<u>Conditions for Scholarships for secondary school (IX & X) Transgender students including (I & II)</u><br/>The candidate should be a regular, full time student studying in a Government School or in a School recognized by Government or a Central/State Board of secondary education.<br/>Migration of students from one school/institute to another, the student shall submit a certificate from the competent authority, in this case the institution.<br/>Scholarships for studying in any class will be available for only one year. If a student has to repeat a class, the candidate would not get a scholarship for that class for a second (or subsequent) year.<br/><u>Conditions for Scholarships for senior secondary school (XI & XII) Transgender students including (I & II)</u></br>The candidate should be a regular, full time student studying in a Government School or in a School recognized by Government or a Central/State Board of secondary education.<br/>Migration of students from one school/institute to another, the student shall submit a certificate from the competent authority, in this case the institution.<br/>Scholarships for studying in any class will be available for only one year. If a student has to repeat a class, the candidate would not get a scholarship for that class for a second (or subsequent) year.<br/><u>Conditions for Scholarship for students (Under-graduate/Diploma) including (I & II)</u></br/>These scholarships will be given for the study of all recognized post-matriculation or post-secondary courses pursued in recognized institutions.<br/>Students, who pursue their studies through correspondence courses are also eligible.<br/>The term correspondence includes distant and continuing education recognised by the Ministry of Education or state government.<br/>Candidates who after passing one stage of education or studying in the same stage of education in a different subject e.g. B.Com after B.A or M.A in one subject after M.A in other subjects will not be eligible. However, students pursuing L.L.B/B.Ed/B.El.Ed. after passing B.A./B.Sc./B.E. etc. are eligible under the scholarships for students (Post-graduate) under this scheme.<br/>All Postgraduate degrees recognised by UGC/ AICTE shall all be covered.<br/><u>Conditions for Scholarship for students (Post-graduate) including (I & II)</u><br/>These scholarships will be given for the study of all recognized post-matriculation or post-secondary courses pursued in recognized institutions.<br/>Students, who pursue their studies through correspondence courses are also eligible<br/>The term correspondence includes distant and continuing education recognised by the Ministry of Education or state government.<br/>Students, who pursue their studies through correspondence courses are also eligible<br/>All Under-graduate Degree & Diploma courses recognised by UGC/ AICTE shall all be covered.</li><li>Skill Development and Lovelihood for the empowerment of Transgender Community<br/>The Transgender persons will be selected as per criteria indicated below:-   (a)The beneficiaries should belong to the Transgender community as notified by the Government of India. (b)The beneficiaries should not be receiving such benefits from any other Centre/ State scheme. (c)The Beneficiary shall hold a Transgender Certificate issued by the National Portal for Transgender Persons, Ministry of Social Justice & Empowerment.</li><li>Medical Insurance<br/>The Transgender persons will be selected as per criteria indicated below:-<ol><li>The beneficiary should be a Transgender person as notified by Government of India holding a Transgender Certificate & Identity Card issued by the National Portal for Transgender Persons. </li><li>The beneficiary should not be availing similar benefits from any other schemes of Centre or state government. </li></ol></li><li>Garima Greh<br/>The following are selection criteria for residents of Transgender Person: <ol><li>Transgender persons having a Transgender persons certificate issued by the National Portal for Transgender persons and preferably living below the poverty line.  </li><li>Transgender persons who are abandoned and aged above 18 years. </li><li>TGs should not be engaged in sex work and beggary </li><li>Transgender persons who are stigmatized and discriminated </li></ol></li></ol>",
    document_required:
      "<ol><li>Scholarship Scheme<br/>Fresh application for Scholarship:<br/><ol><li>Transgender Certificate issued through the National Portal for Transgender person of the Ministry of Social Justice & Empowerment</li><li>Transgender certificate issued through the National Portal for Transgender Persons of the Ministry of Social Justice & Empowerment</li><li>Self attested copy of Aadhar Card  </li><li>A declaration by the parents/guardians, stating that their ward is not availing such scholarship in any other scheme of Centre/ State Government for education.</li><li>Certificate of previous academic year’s mark sheet attested by Institute.</li><li>Transfer certificate in case the student has migrated to another</li><li>Institute verification form duly attested by the school/ college/ institute. </li></ol><br/>Application for Renewal of Scholaship:<li>Certificate of previous academic score not less than qualifying marks attested by institute.  </li><li>Skill Development and Livelihood for the empowerment of Transgender Community<br/>Apply through the National Portal for Transgender Person of the Ministry of Social Justice & Empowerment</li><li>Composite Medical Insurance<ol><li>Transgender Certificate issued through the National Portal for Transgender person of the Ministry of Social Justice & Empowerment</li><li>If not available, then such Transgender person not having a transgender certificate issued by the National portal shall be redirected to the website to obtain the certificate so as to become eligible for the Ayushman Transgender health package. After the verification process of the Transgender certificate, the eligible applicant will be issued with the Ayushman Transgender Health card.</li></li><ol>",
    application_link:
      "Support for Marginalized Individuals for Livelihood and Enterprise (SMILE) | Department of Social Justice and Empowerment - Government of India<br/><br/>chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://transgender.dosje.gov.in/docs/TG%20Scholarship%20Manual.pdf<br/><br/>National Portal For Transgender Persons <br/>Garima Greh Address: <br/>Mitr Trust Garima Greh B-51, <br/>B Block, SITA PURI, <br/>NEW DELHI-45 <br/>Landmark: Dabri police station        <br/>Ms Rudrani Chhetri Project Director        <br/>9910899755<a href='https://transgender.dosje.gov.in/Applicant/Registration/DisplayForm2'>Link</a>chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://transgender.dosje.gov.in/docs/TG%20Scholarship%20Manual.pdf",
    grievance_redressal:
      "<ol><li>For information about eligibility criteria, requisite documents and process of application visit the Portal Call: 011-23386981; General Number: 011-20893988; satvik.nisd@gmail.com</li><li>Skill development: National Backward Classes Finance & Development Corporation (NBCFDC) 5th Floor, NCUI Building, 3, August Kranti Marg, Siri Institutional Area, New Delhi, Delhi 110016Tel : 011-45854400; Toll Free No. : 18001023399 </li><li>Mitr Trust Garima Greh B-51, B Block, SITA PURI, NEW DELHI-45 Landmark: Dabri police station        Ms Rudrani Chhetri Project Director        9910899755</li><li>TECHNICAL<br/>+91 79 23268299<br/>tghelp@mail.inflibnet.ac.in<br/>10:00 AM to 17:00 PM<br/>Monday to Friday  <br/></li>",
  };
  const {
    name,
    award_entitlement,
    gender,
    max_income,
    residence,
    disability,
    eligibility,
    document_required,
    application_link,
    grievance_redressal,
  } = schemeDataV;

  return (
    <Space
      direction="vertical"
      style={{
        paddingTop: 120,
        width: "96%",
        margin: "2%",
      }}
    >
      <div style={{ background: "#ddd", padding: "2vw", borderRadius: "24px" }}>
        <Text style={{ fontSize: "24px" }}>{name}</Text>
        <Collapse
          collapsible="icon"
          defaultActiveKey={["1"]}
          items={[
            {
              label: "More info",
              children: (
                <Card
                  key={name}
                  title={
                    <Title style={{ marginTop: 24 }} level={2}>
                      {name}
                    </Title>
                  }
                  bordered
                  style={{
                    textAlign: "start",
                    backgroundColor: "#f1faff",
                    margin: "2vh",
                  }}
                >
                  <Title level={4}>
                    <InfoCircleOutlined /> Award/Entitlement:
                  </Title>
                  <div
                    dangerouslySetInnerHTML={{ __html: award_entitlement }}
                  ></div>

                  <Row
                    style={{ marginTop: 12, marginBottom: 12 }}
                    justify={"space-between"}
                  >
                    <Col>
                      <Title level={4}>Gender:</Title>
                      <Text>
                        {gender === "Female" ? (
                          <WomanOutlined />
                        ) : (
                          <ManOutlined />
                        )}{" "}
                        {gender}
                      </Text>
                    </Col>
                    <Col>
                      <Title level={4}>Max Family Income:</Title>
                      <Text>Rs.{max_income}</Text>
                    </Col>
                    <Col>
                      <Title level={4}>Disability:</Title>
                      <Text>{disability}</Text>
                    </Col>
                  </Row>
                  <Title level={4}>
                    <HomeOutlined /> Residence:
                  </Title>
                  <Text>{residence}</Text>

                  <Divider />

                  <Title level={4}>Eligibility:</Title>
                  <div dangerouslySetInnerHTML={{ __html: eligibility }}></div>

                  <Title level={4}>Document Required:</Title>
                  <div
                    dangerouslySetInnerHTML={{ __html: document_required }}
                  ></div>

                  <Title level={4}>Application Link:</Title>
                  <div
                    dangerouslySetInnerHTML={{ __html: application_link }}
                  ></div>

                  <Title level={4}>Grievance Redressal:</Title>
                  <div
                    dangerouslySetInnerHTML={{ __html: grievance_redressal }}
                  ></div>
                </Card>
              ),
            },
          ]}
        />
      </div>
    </Space>
  );
};

export default Info;
