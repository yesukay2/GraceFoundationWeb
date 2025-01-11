
import "./Blog.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 



import pdfReport from "../assets/report.pdf"
console.log(pdfReport);

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [upcoming, setUpcoming] = useState([]);
  const [preventChronicDisease, setPreventChronicDisease] = useState([]);
  const [saveTheBreast, setSaveTheBreast] = useState([]);
  const [theKnowIt, setTheKnowIt] = useState([]);
  const [stepUp, setStepUp] = useState([]);
  const [screeningOutcomePdf, setScreeningOutcomePdf] = useState(null);

  // Load images from assets folder
  useEffect(() => {
    const upComingModule = import.meta.glob(
      "/src/assets/SavetheBreast2024/*.{png,jpg,jpeg}"
    );
    const preventChronicModule = import.meta.glob(
      "/src/assets/PreventChronicDisease/*.{png,jpg,jpeg}"
    );
    const saveTheBreastModule = import.meta.glob(
      "/src/assets/SavetheBreasts/*.{png,jpg,jpeg}"
    );
    const theKnowItModule = import.meta.glob(
      "/src/assets/TheKnowIt/*.{png,jpg,jpeg}"
    );
    const stepUpModule = import.meta.glob(
      "/src/assets/TheStepUpProject/*.{png,jpg,jpeg}"
    );
    
    setScreeningOutcomePdf(pdfReport);
    // Helper function to load images asynchronously
    const loadImages = async (module, setter) => {
      const imagePromises = Object.keys(module).map(async (path) => {
        const image = await module[path]();
        return image.default;
      });
      const images = await Promise.all(imagePromises);
      setter(images);
    };

    loadImages(upComingModule, setUpcoming);
    loadImages(preventChronicModule, setPreventChronicDisease);
    loadImages(saveTheBreastModule, setSaveTheBreast);
    loadImages(theKnowItModule, setTheKnowIt);
    loadImages(stepUpModule, setStepUp);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Save The Breast: 4th Edition",
      thumbnails: upcoming,
      shortDescription:
        "Grace Medical Foundation Activity Report: Save the Breast Project (4th Edition)",
      fullDescription: `Grace Medical Foundation Activity Report: Save the Breast Project (4th Edition)
Date: Saturday, November 2, 2024
Location: Asebu Market, Central Region
Attendees: 150 Community Members
Overview

The Save the Breast Project, now in its 4th edition, is a breast cancer awareness and screening initiative by Grace Medical Foundation. This year's event was held at Asebu Market in the Central Region on November 2, 2024. The program aimed to promote breast health, offer essential screenings, and provide health consultations to the local community. Activities included breast cancer education, free breast screenings, and general health checkups.
Services Offered and Outcomes
1. Breast Cancer Screening and Education
As part of the event's focus on breast cancer awareness, attendees received free breast cancer screenings and educational sessions about breast health. The education sessions emphasized the importance of regular screenings and self-exams for early detection.

Outcome: 4 individuals were identified with breast lumps and referred to a partner hospital for further diagnostic evaluations and management.

2. Vital Signs and Basic Health Screenings
Health screenings included measurements of blood pressure, blood sugar, weight, height, and body mass index (BMI), aimed at identifying underlying health issues such as hypertension, diabetes, and obesity.

Outcomes:
▪ Hypertension: 20 individuals presented with elevated blood pressure and were advised on lifestyle modifications and medication adherence. They were referred for additional follow-up.
▪ Diabetes: 2 individuals with diabetes had defaulted on their medications. They were counseled on the importance of medication adherence and referred for further management.

3. Consultations and Referrals
Medical consultations were provided based on the screening outcomes. Attendees also had the opportunity for general health consultations. The consultations offered attendees insights into their health status and provided recommendations for further care where necessary.
Referrals: Individuals with serious findings were referred to a nearby hospital partnering with Grace Medical Foundation. This partnership enabled referred individuals to access advanced diagnostic services and receive continuous care.
 
Additional Activities
• Community Engagement and Health Education: Throughout the event, the team engaged community members in discussions on health topics, emphasizing preventive care and lifestyle modifications for better health outcomes.
Summary
The Save the Breast Project successfully engaged 150 individuals from Asebu and surrounding areas, providing vital health services and raising awareness on breast cancer. Through our ongoing efforts, Grace Medical Foundation continues to promote preventive healthcare and early intervention within local communities.
Conclusion
This outreach underscores the commitment of Grace Medical Foundation to fostering health awareness and improving access to healthcare. We are grateful to our partners and volunteers who made this event successful and look forward to expanding our efforts in future editions.
For more information, follow us on Instagram at @grace_medical_foundation or contact us at 0546915200.
`,
    },
    {
      id: 2,
      title: "Prevent Chronic Disease",
      thumbnails: preventChronicDisease,
      shortDescription:
        "Chronic diseases like diabetes, heart disease are preventable with simple lifestyle changes...",
      fullDescription:
        "PREVENT chronic disease, is an initiative aimed at reducing the prevalence of chronic diseases amongst women.",
    },
    {
      id: 3,
      title: "Save The Breast Project",
      thumbnails: saveTheBreast,
      shortDescription:
        "Educating and empowering women to take charge of their breast health...",
      fullDescription:
        "Save the BREASTS Project, an initiative to create awareness about breast cancer and to support breast cancer patients",
    },
    {
      id: 4,
      title: "The Know It, Have It Project",
      thumbnails: theKnowIt,
      shortDescription:
        "Creating awareness on female health and general wellbeing...",
      fullDescription:
        "The KIHI Project is committed to inspiring and building the capacity of girls in rural communities through sexual and reproductive health education and training. These girls are given free sanitary pads to help ease the burden of a lack of menstrual products during menstruation since this is one of the leading causes of teenage pregnancy and teen school dropout in rural communities in Ghana.",
    },
    {
      id: 5,
      title: "The Step Up Project",
      thumbnails: stepUp,
      shortDescription: "Empowering women: Step Up...",
      fullDescription:
        "The STEP UP Project is an initiative to empower girls through career guidance, and skills training to unleash their potential in STEM.",
    },
    {
      id: 6,
      title: "Health Screening Outcome Report",
      thumbnails: [], // No images for the PDF post
      shortDescription:
        "Read the detailed report on the health screening conducted by Grace Medical Foundation.",
      fullDescription: "Read the detailed 2022 report on the health screening conducted by Grace Medical Foundation",
      pdfUrl: screeningOutcomePdf,
    },
  ];

  const handleBlogClick = (blog) => {
    setScrollPosition(window.scrollY); // Save current scroll position
    setSelectedBlog(blog);
  };

  const handleCloseBlog = () => {
    setSelectedBlog(null);
    window.scrollTo(0, scrollPosition); // Restore scroll position
  };

  return (
    <div className="blog-container">
      {selectedBlog ? (
        <div className="blog-expanded">
          <h2>{selectedBlog.title}</h2>
          {selectedBlog.thumbnails && selectedBlog.thumbnails.length > 0 ? (
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={5000}
            >
              {selectedBlog.thumbnails.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={selectedBlog.title} />
                </div>
              ))}
            </Carousel>
          ) : selectedBlog.pdfUrl ? (
            <div>
              <iframe
                src={selectedBlog.pdfUrl}
                width="100%"
                height="600px"
                title="PDF Viewer"
              ></iframe>
              <div className="pdfViewButton">
                <a
                  href={selectedBlog.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View 
                </a>
              </div>
            </div>
          ) : (
            <p>No images available for this blog.</p>
          )}
          <p style={{ whiteSpace: "pre-line" }}>
            {selectedBlog.fullDescription}
          </p>
          <button className="close-button" onClick={handleCloseBlog}>
            Close
          </button>
        </div>
      ) : (
        <div className="blog-grid">
          {blogPosts.map((blog, index) => (
            <div
              key={index}
              className="blog-card"
              onClick={() => handleBlogClick(blog)}
            >
              {blog.thumbnails && blog.thumbnails.length > 0 ? (
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  interval={5000}
                >
                  {blog.thumbnails.map((image, idx) => (
                    <div key={idx}>
                      <img src={image} alt={blog.title} />
                    </div>
                  ))}
                </Carousel>
              ) : blog.pdfUrl ? (
                <p>PDF Report Available</p>
              ) : (
                <p>No images available</p>
              )}
              <h3>{blog.title}</h3>
              <p>{blog.shortDescription}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
