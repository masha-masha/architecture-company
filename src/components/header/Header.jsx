import "./Header.css";

const Header = () => {
 return (
  <header className="header container">
   <div className="header-top">
    <div className="header-top-left-side">
     WE CREATE THE FUTURE IN YOUR HOME
    </div>
    <div className="header-top-right-side">
     <img src="/images/logo-line.png" alt="logo" />
    </div>
   </div>
   <div className="header-bottom">
    <div className="header-bottom-left-side">
     <h2>INTERIOR SOLUTIONS COMPANY</h2>
     <nav className="header-bottom-nav">
      <ul>
       <li>
        <span>&mdash;</span>
        <a href="#about">About</a>
       </li>
       <li>
        <span>&mdash;</span>
        <a href="#mission">Mission</a>
       </li>
       <li>
        <span>&mdash;</span>
        <a href="#portfolio">Portfolio</a>
       </li>
      </ul>
     </nav>
     <p>
      We will turn the idea into reality. We do it when others refuse. If you
      have non-standard ideas, but you don"t know how to turn them into reality,
      then come to us. Your ideas are our ideas.
     </p>
    </div>
    <div className="header-bottom-right-side">
     <img src="/images/image 1.png" alt="image 1" />
     <div>Order a disign</div>
    </div>
   </div>
  </header>
 );
};

export default Header;
