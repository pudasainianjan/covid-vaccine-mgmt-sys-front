import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="py-3">
        <h1>Your Profile Status...</h1>
        <p className="lead">Appointment Status: <br></br><a class="ui teal tag label">Success...</a></p>
        <p className="lead"></p>

        <div class="ui success message">
          {/* <i class="close icon"></i> */}
          <div class="header">
            Your Appointment was successful.
          </div>
          <p>Please consult with your respective doctor...</p>
          </div>
         </div>

         <div class="ui equal width grid">

         <div class="column"></div>


         <div class="ui link cards column">
          <div class="card">
        <div class="image">
          <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </div>
        <div class="content">
          <div class="header">Ram Shrestha</div>
          <div class="meta">
          <span>
            <i class="user icon"></i>
          </span>
            <a>@ram123</a>
          </div>
          <div class="description">
            I need to get a covid-19 vaccine.
          </div>
        </div>
        <div class="extra content">
          
          <span class="right floated">
          </span>
          
          <br></br>
          Appointment Date: 2020/10/10
          <hr></hr>
          Appointed To: Dr. Hari

        </div>
      </div>
      </div>
      <div class="column"></div>
      </div>
    </div>

  );
};

export default Profile;
