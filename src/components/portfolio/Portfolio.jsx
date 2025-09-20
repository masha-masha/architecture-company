import "./Portfolio.css";

const Portfolio = () => {
 return (
  <section className="section-portfolio container">
   <div className="portfolio-card card-with-text">
    <h3>Portfolio</h3>
    <p>
     The perfect combination of interior items creates a complete picture.
     Impressions about the apartment, decorated in a modern style - light, air,
     space, harmony. Our team are true professionals with extensive experience.
     Each of our employees has excellent coding skills to create the best
     websites.
    </p>
    <button className="btn">Open more</button>
   </div>
   <div className="portfolio-card">
    <img src="/images/portfolio-1.png" alt="portfolio-1" />
   </div>
   <div className="portfolio-card">
    <img src="/images/portfolio-2.png" alt="portfolio-2" />
   </div>
   <div className="portfolio-card">
    <img src="/images/portfolio-3.png" alt="portfolio-3" />
   </div>
   <div className="portfolio-card">
    <img src="/images/portfolio-4.png" alt="portfolio-4" />
   </div>
   <div className="portfolio-card">
    <img src="/images/portfolio-5.png" alt="portfolio-5" />
   </div>
  </section>
 );
};

export default Portfolio;
