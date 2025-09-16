import "./Mission.css";

const Mission = () => {
 return (
  <section className="section-mission container">
   <div className="section-mission-left-side">
    <div className="section-mission-left-side-top">
     <h2>Our Mission make your dreams come true</h2>
     <p>
      We will help you at every step: from the author"s interior design, to
      repair and furniture selection. The team works every day to make the
      arrangement of your home as convenient and enjoyable as possible.
     </p>
     <button className="btn">Open more</button>
    </div>
    <div className="section-mission-left-side-bottom">
     <h3>We understand you</h3>
     <p>
      We know the value of your personal time and do everything so that you do
      not waste it on unnecessary meetings, shopping trips, organizing meetings
      and monitoring performers. We know that repairs are a big expense for you,
      so we give you the opportunity to save your budget on everything from
      materials and furniture to services, without compromising the quality of
      goods and services.
     </p>
    </div>
   </div>
   <div className="section-mission-right-side">
    <img src="/images/olga-zabegina.png" alt="olga zabegina" />
   </div>
  </section>
 );
};

export default Mission;
