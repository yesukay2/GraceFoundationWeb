// import "./Blog.css";
// import { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// const Blog = () => {
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [upcoming, setUpcoming] = useState([]);
//   const [preventChronicDisease, setPreventChronicDisease] = useState([]);
//   const [saveTheBreast, setSaveTheBreast] = useState([]);
//   const [theKnowIt, setTheKnowIt] = useState([]);
//   const [stepUp, setStepUp] = useState([]);
//   const [screeningOutcomePdf, setScreeningOutcomePdf] = useState(null);

//   // Load images from assets folder
//   useEffect(() => {
//     const upComingModule = import.meta.glob(
//       "/src/assets/upcoming/*.{png,jpg,jpeg}"
//     );
//     const preventChronicModule = import.meta.glob(
//       "/src/assets/PreventChronicDisease/*.{png,jpg,jpeg}"
//     );
//     const saveTheBreastModule = import.meta.glob(
//       "/src/assets/SavetheBreasts/*.{png,jpg,jpeg}"
//     );
//     const theKnowItModule = import.meta.glob(
//       "/src/assets/TheKnowIt/*.{png,jpg,jpeg}"
//     );
//     const stepUpModule = import.meta.glob(
//       "/src/assets/TheStepUpProject/*.{png,jpg,jpeg}"
//     );
//     const screeningOutcome = import.meta.glob(
//       "/src/assets/OUTCOME OF HEALTH SCREENING BY GRACE MEDICAL FOUNDATION ON 18TH JUNE 2022 AT CAPE COAST.pdf"
//     );

//     setScreeningOutcomePdf(screeningOutcome);

//     // Helper function to load images asynchronously
//     const loadImages = async (module, setter) => {
//       const imagePromises = Object.keys(module).map(async (path) => {
//         const image = await module[path]();
//         return image.default;
//       });
//       const images = await Promise.all(imagePromises);
//       setter(images);
//     };

//     loadImages(upComingModule, setUpcoming);
//     loadImages(preventChronicModule, setPreventChronicDisease);
//     loadImages(saveTheBreastModule, setSaveTheBreast);
//     loadImages(theKnowItModule, setTheKnowIt);
//     loadImages(stepUpModule, setStepUp);
//   }, []);

//   const blogPosts = [
//     {
//       id: 1,
//       title: "Upcoming Event...",
//       thumbnails: upcoming,
//       shortDescription:
//         "Join Us for the 4th Edition of the Save The Breast Project!",
//       fullDescription: `We are thrilled to announce that Grace Medical Foundation is collaborating with NCVO Ghana to bring you an impactful event dedicated to breast cancer awareness and prevention. Date: Saturday, November 2, 2024. Location: Asebu Market, Central Region.
//       We're offering a FREE breast cancer screenings, an engaging health walk, and informative educational sessions to empower our community with knowledge about breast health. Together, we can make a difference!
//       Let's walk for awareness, screen for prevention, and educate for a healthier future!
//       For further enquiries, feel free to call or text us at 0546915200.
//       Don't miss out on this opportunity to take charge of your health.
//       Spread the word!!`,
//     },
//     {
//       id: 2,
//       title: "Prevent Chronic Disease",
//       thumbnails: preventChronicDisease,
//       shortDescription:
//         "Chronic diseases like diabetes, heart disease are preventable with simple lifestyle changes...",
//       fullDescription:
//         "Preventing chronic diseases is key to long-term health. The Grace Medical Foundation is dedicated to empowering women to take charge of their health and make informed decisions to prevent chronic diseases.",
//     },
//     {
//       id: 3,
//       title: "Save The Breast Project",
//       thumbnails: saveTheBreast,
//       shortDescription:
//         "Educating and empowering women to take charge of their breast health...",
//       fullDescription:
//         "Breast Cancer is a major health problem in today's world, and we are dedicated to empowering women by creating awareness through educational resources and mentorship. The Grace Medical Foundation is dedicated to empowering women to take charge of their health and make informed decisions to prevent breast cancer.",
//     },
//     {
//       id: 4,
//       title: "The Know It Project",
//       thumbnails: theKnowIt,
//       shortDescription:
//         "Creating awareness on female health and general wellbeing...",
//       fullDescription:
//         "Every female should be well informed on their health and wellbeing. The Grace Medical Foundation is dedicated to empowering women through education, talks, and workshops to raise awareness on female health and general wellbeing. Every female should KNOW IT all.",
//     },
//     {
//       id: 5,
//       title: "The Step Up Project",
//       thumbnails: stepUp,
//       shortDescription: "Empowering women: Step Up...",
//       fullDescription:
//         "The Step Up Project creates awareness on the general safety of women.",
//     },
//   ];

//   const handleBlogClick = (blog) => {
//     setScrollPosition(window.scrollY); // Save current scroll position
//     setSelectedBlog(blog);
//   };

//   const handleCloseBlog = () => {
//     setSelectedBlog(null);
//     window.scrollTo(0, scrollPosition); // Restore scroll position
//   };

//   return (
//     <div className="blog-container">
//       {selectedBlog ? (
//         <div className="blog-expanded">
//           <h2>{selectedBlog.title}</h2>
//           {selectedBlog.thumbnails && selectedBlog.thumbnails.length > 0 ? (
//             <Carousel
//               autoPlay
//               infiniteLoop
//               showThumbs={false}
//               showStatus={false}
//               interval={5000}
//             >
//               {selectedBlog.thumbnails.map((image, index) => (
//                 <div key={index}>
//                   <img src={image} alt={selectedBlog.title} />
//                 </div>
//               ))}
//             </Carousel>
//           ) : (
//             <p>No images available for this blog.</p>
//           )}
//           <p style={{ whiteSpace: "pre-line" }}>
//             {selectedBlog.fullDescription}
//           </p>
//           <button className="close-button" onClick={handleCloseBlog}>
//             Close
//           </button>
//         </div>
//       ) : (
//         <div className="blog-grid">
//           {blogPosts.map((blog, index) => (
//             <div
//               key={index}
//               className="blog-card"
//               onClick={() => handleBlogClick(blog)}
//             >
//               {blog.thumbnails && blog.thumbnails.length > 0 ? (
//                 <Carousel
//                   autoPlay
//                   infiniteLoop
//                   showThumbs={false}
//                   showStatus={false}
//                   interval={5000}
//                 >
//                   {blog.thumbnails.map((image, idx) => (
//                     <div key={idx}>
//                       <img src={image} alt={blog.title} />
//                     </div>
//                   ))}
//                 </Carousel>
//               ) : (
//                 <p>No images available</p>
//               )}
//               <h3>{blog.title}</h3>
//               <p>{blog.shortDescription}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blog;

import "./Blog.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

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
      "/src/assets/upcoming/*.{png,jpg,jpeg}"
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
    const screeningOutcome = import.meta.glob(
      "/src/assets/OUTCOME OF HEALTH SCREENING BY GRACE MEDICAL FOUNDATION ON 18TH JUNE 2022 AT CAPE COAST.pdf"
    );

    // Set PDF URL
    const loadPdf = async () => {
      const pdfPaths = Object.keys(screeningOutcome);
      const pdfUrl = pdfPaths.length > 0 ? pdfPaths[0] : null;
      setScreeningOutcomePdf(pdfUrl);
    };
    loadPdf();

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
      title: "Upcoming Event...",
      thumbnails: upcoming,
      shortDescription:
        "Join Us for the 4th Edition of the Save The Breast Project!",
      fullDescription: `We are thrilled to announce that Grace Medical Foundation is collaborating with NCVO Ghana to bring you an impactful event dedicated to breast cancer awareness and prevention. Date: Saturday, November 2, 2024. Location: Asebu Market, Central Region.
      We're offering a FREE breast cancer screenings, an engaging health walk, and informative educational sessions to empower our community with knowledge about breast health. Together, we can make a difference!
      Let's walk for awareness, screen for prevention, and educate for a healthier future!
      For further enquiries, feel free to call or text us at 0546915200.
      Don't miss out on this opportunity to take charge of your health.
      Spread the word!!`,
    },
    {
      id: 2,
      title: "Prevent Chronic Disease",
      thumbnails: preventChronicDisease,
      shortDescription:
        "Chronic diseases like diabetes, heart disease are preventable with simple lifestyle changes...",
      fullDescription:
        "Preventing chronic diseases is key to long-term health. The Grace Medical Foundation is dedicated to empowering women to take charge of their health and make informed decisions to prevent chronic diseases.",
    },
    {
      id: 3,
      title: "Save The Breast Project",
      thumbnails: saveTheBreast,
      shortDescription:
        "Educating and empowering women to take charge of their breast health...",
      fullDescription:
        "Breast Cancer is a major health problem in today's world, and we are dedicated to empowering women by creating awareness through educational resources and mentorship. The Grace Medical Foundation is dedicated to empowering women to take charge of their health and make informed decisions to prevent breast cancer.",
    },
    {
      id: 4,
      title: "The Know It Project",
      thumbnails: theKnowIt,
      shortDescription:
        "Creating awareness on female health and general wellbeing...",
      fullDescription:
        "Every female should be well informed on their health and wellbeing. The Grace Medical Foundation is dedicated to empowering women through education, talks, and workshops to raise awareness on female health and general wellbeing. Every female should KNOW IT all.",
    },
    {
      id: 5,
      title: "The Step Up Project",
      thumbnails: stepUp,
      shortDescription: "Empowering women: Step Up...",
      fullDescription:
        "The Step Up Project creates awareness on the general safety of women.",
    },
    {
      id: 6,
      title: "Health Screening Outcome Report",
      thumbnails: [], // No images for the PDF post
      shortDescription:
        "Read the detailed report on the health screening conducted by Grace Medical Foundation.",
      fullDescription: "Click the link above to view or download the report.",
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
              <p>
                <a
                  href={selectedBlog.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Report
                </a>
              </p>
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
