import React, {useState} from "react";
import NavBar from "../../Components/NavBarComponent/NavBar";
import Footer from "../../Components/FooterComponent/Footer";
import SignupValidate from "./SignupValidate";
import BusinessRegistrationForm from "../BusinessProfile/BusinessProfile";

function Signup() {

  // State for Signup
  const [hasSignedup, setHasSignedup] = useState(false);

  const showBusinessProfileForm = () => {
    setHasSignedup(true);
  };

  return (
    <React.Fragment>
      <NavBar />

      <>
      {hasSignedup ? <BusinessRegistrationForm/>  : 
      <SignupValidate showBusinessProfileForm={showBusinessProfileForm} />
        }
      </>
      <Footer />
    </React.Fragment>
  );
}

export default Signup;
