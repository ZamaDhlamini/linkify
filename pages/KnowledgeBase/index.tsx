import Home from "../../components/KnowlegdeBaseHome";

const KnowledgeBasePage = () => {
    const pageData = {
      fields: {
        kb_home_image: "/path-to-image.jpg", // Replace with the actual path to your image
        kb_home_hero_title: "How can we help you!",
        kb_home_hero_subtitle: "Lost? Need help to navigate Linkify?",
        kb_home_hero_text: "We are here to assist you and all your needs?",
        kb_home_sections: [
          {
            fields: {
              kb_section_name: "How To's",
              kb_section_description: "How to use Linkify app, how to apply for a grant, view profile, view Sassa branches, booking an appointment at nearest branches.",
            },
            slug: "section-1",
          },
          {
            fields: {
              kb_section_name: "FAQ",
              kb_section_description: "This section is for frequently asked questions that you may have when navigating this application",
            },
            slug: "section-2",
          },
          {
              fields: {
                kb_section_name: "Getting Started",
                kb_section_description: "Articles to get you up easy. these will help in navigating the page",
              },
              slug: "section-3",
          }
          // Add more sections as needed
        ],
      },
    };
  
    return <Home pageData={pageData} />;
  };
  
  export default KnowledgeBasePage;
  