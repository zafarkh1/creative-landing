import Navbar from "./Navbar";
import Showcase from "./Showcase";

function Header(props) {
  return (
    <div
      className="bg-primary text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/assets/header/bg-image.png")' }}
    >
      <Navbar />
      <div className="myContainer lg:pt-24">
        <Showcase />
      </div>
    </div>
  );
}

export default Header;
