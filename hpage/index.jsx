var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* External css */}
                <link rel="stylesheet" href="style/style.css" />
                <title>Document</title>
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
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="rewards.html">Rewards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="profile.html">Profile</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="invite.html">Referral</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* ###################### end nav ############################# */}
                <div className="card">
                    <div className="card-header spacejustified">
                        <h5 style={{ marginBottom: '0%', marginTop: '5px' }}>Extra Points</h5><button type="button" className="btn btn-primary" style={{ opacity: '0.75' }}>
                            <i className="fas fa-undo-alt" /> Points <span className="badge badge-light">16000</span>
                        </button></div>
                    <div className="card-body">
                        <p className="card-text">Get extra points by sharing with social media</p>
                        {/* <hr class="style13"> */}
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" className="badge badge-light extra">
                                    <img src="img/fb.png" width={30} height={30} className="rounded-circle" alt="" /> Share a Story
                  </a>
                                <span className="badge badge-primary badge-pill">+14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" className="badge badge-light extra">
                                    <img src="img/Twitter logo 2012.png" width={30} height={30} className="rounded-circle" alt="" /> tweet
                    a Story
                  </a>
                                <span className="badge badge-primary badge-pill">+2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a href="#" className="badge badge-light extra">
                                    <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Get Apps For
                    Free
                  </a>
                                <span className="badge badge-primary badge-pill">+1</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <h5 className="card-header">Get Points</h5>
                    <div className="card-body" style={{ padding: '0%' }}>
                        <ul className="centerelement nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ padding: '12px', paddingBottom: '0%' }}>
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Install</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Survey</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Sign Up</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <p style={{ marginLeft: '1.2rem' }}>Install app to get points</p>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra" data-toggle="modal" data-target=".bd-example-modal-sm">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" /> App1
                      </a>
                                        <span className="badge badge-primary badge-pill">+14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" data-toggle="modal" data-target=".bd-example-modal-sm" />App2
                      </a>
                                        <span className="badge badge-primary badge-pill">+2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> App3
                      </a>
                                        <span className="badge badge-primary badge-pill">+1</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <p style={{ marginLeft: '1.2rem' }}>Complete surveys to get more points</p>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Survey1
                      </a>
                                        <span className="badge badge-primary badge-pill">+14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Survey2
                      </a>
                                        <span className="badge badge-primary badge-pill">+2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Survey3
                      </a>
                                        <span className="badge badge-primary badge-pill">+1</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Survey4
                      </a>
                                        <span className="badge badge-primary badge-pill">+14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Survey5
                      </a>
                                        <span className="badge badge-primary badge-pill">+2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Survey6
                      </a>
                                        <span className="badge badge-primary badge-pill">+1</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <p style={{ marginLeft: '1.2rem' }}>Sign-up for free and get points</p>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Sign
                        Up1
                      </a>
                                        <span className="badge badge-primary badge-pill">+14</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Sign
                        Up2
                      </a>
                                        <span className="badge badge-primary badge-pill">+2</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a href="#" className="badge badge-light extra">
                                            <img src="img/unnamed.png" width={30} height={30} className="rounded-circle" alt="" /> Sign
                        Up3
                      </a>
                                        <span className="badge badge-primary badge-pill">+1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{ marginBottom: '0.8rem' }}>
                                <h5 className="modal-title" id="exampleModalLongTitle"><img src="img/unnamed.png" width={40} height={40} className="rounded-circle" alt="" /> App Title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="motal-body d-flex justify-content-around main-navigation" style={{ paddingBottom: '10px' }}>
                                <div><i className="fas fa-trophy" style={{ fontSize: '200%', color: '#007bf0' }} /> +1300p</div>
                                <div><i className="fas fa-user-friends mx-auto" style={{ fontSize: '200%', color: '#007bf0' }} /> +25%</div>
                            </div>
                            <div className="modal-body main-navigation">
                                <i className="fas fa-exclamation mx-auto" style={{ color: 'brown' }} /> No rewards if you have previously
                  completed the offer
                </div>
                            <div className="modal-body">
                                <i className="fas fa-info" style={{ color: 'darkblue' }} /> Install + Buy first bid pack
                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Get
                    App</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h5 className="card-header">Network</h5>
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: 'center' }}>Friendes</h5>
                        {/* Progress bar 1 */}
                        <div className="progress mx-auto" data-value={50}>
                            <span className="progress-left">
                                <span className="progress-bar border-primary" />
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar border-primary" />
                            </span>
                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">50</div>
                            </div>
                        </div>
                        {/* END */}
                        {/* Demo info */}
                        <div className="row text-center mt-4">
                            <div className="col-6 border-right">
                                <div className="h4 font-weight-bold mb-0">28</div><span className="small text-gray">Last
                    week</span>
                            </div>
                            <div className="col-6">
                                <div className="h4 font-weight-bold mb-0">60</div><span className="small text-gray">Last
                    month</span>
                            </div>
                        </div>
                        {/* END */}
                        <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold' }}>From their rewards</p>
                        <a href="invite.html" className="btn btn-primary btn-lg btn-block">Get More Friendes</a>
                    </div>
                </div>
                <div className="card">
                    <h5 className="card-header"><button type="button" className="btn btn-primary btn-lg btn-block">Like Us <span style={{ fontSize: '80%' }}>(10 points)</span></button></h5>
                </div>
            </div>
        );
    }
});