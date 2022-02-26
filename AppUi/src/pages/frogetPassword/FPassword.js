
import "./FPassword.css";

export const FPassword = () => {
  return (
    <div className="mainDiv">
      <div className="formDiv">
        <div className="sameHeight topDiv">
          <h4>Find Your Account</h4>
        </div>
        <hr />
        <div className="middleDiv">
          <p>
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <input type="text" placeholder="Email address" />
        </div>
        <hr />
        <div className="sameHeight">
          
          <div className="btnDiv">
              <button className="cBtn">Cancel</button>
              <button className="sBtn">Search</button>
          </div>
        </div>

      </div>
    </div>
  );
};
