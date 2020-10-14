<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light main-navigation">
    <a className="logo navbar-brand" href="#">
      <img src="img/unnamed.png" width={30} height={30} className="d-inline-block align-top" alt="" />
            Our-App
          </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <a className="nav-link" href="index.html">Home </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="rewards.html">Rewards</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="profile.html">Profile</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Referral</a>
        </li>
      </ul>
    </div>
  </nav>
  {/* ###################### end nav ############################# */}
  <div className="card text-center">
    <div className="card-header">
      <h5>Your Referral</h5>
    </div>
    <div className="card-body">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div><i className="fas fa-user-friends" />
                  Mambers Referred</div>
          <span className="badge badge-primary badge-pill">0</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div><i className="fas fa-coins" /> Referral Points Earned</div>
          <span className="badge badge-primary badge-pill">0</span>
        </li>
      </ul>
    </div>
  </div>
  <div className="card text-center">
    <div className="card-header">
      <h5>Refer &amp; Eran</h5>
    </div>
    <div className="card-body">
      <p className="card-text">Earn unlimited rewards by referring your friends family and followers. You'll earn
      100 for every user you refer and your referal gets 100 Points too. Keep referring more friends and
              watch your earnings grow up!</p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="https://chagmagame" aria-label="Recipient's username" aria-describedby="basic-addon2" id="myInput" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onclick="copyFunction()"><i className="fas fa-copy" /></button>
        </div>
      </div>
      <p className="card-text">Share above Referral Link or unique Referral Code <span className="spaninvi">D7VL6P
              </span> to your Friends &amp; Family</p>
      <div className="entry-social">
        <div className="fb">
          <a href="Your_Facebok_Page" target="_blank">Share on Facebook</a>
        </div>
        <div className="twitter">
          <a href="Your_twitter_Profile" target="_blank">Share on Twitter</a>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <h5 className="card-header">How To Refer</h5>
    <div className="card-body">
      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa" />
              <span className="time-wrapper"><span className="time">Invite a Friend</span></span>
            </div>
            <div className="desc">Share your referral link with your friends,family and followers.</div>
          </div>
        </li>
        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="hexa" />
              <span className="time-wrapper"><span className="time">Friend Joins</span></span>
            </div>
            <div className="desc">Your referral clicks on the shared link and register as a member.</div>
          </div>
        </li>
        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="hexa" />
              <span className="time-wrapper"><span className="time">Both Get Bonus</span></span>
            </div>
            <div className="desc">You'll earn 100 Points for each user refer and your referral</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>