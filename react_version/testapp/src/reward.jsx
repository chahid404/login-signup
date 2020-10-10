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
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="rewards.html">Rewards <span className="sr-only">(current)</span></a>
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
    <div className="card ">
        <div className="card-header d-flex justify-content-between aring4zero">
            <h5>Country </h5>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Worldwide
              </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Tunisia</a>
                    <a className="dropdown-item" href="#">La Marsa</a>
                    <a className="dropdown-item" href="#">Cap Zebi</a>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <h5 className="card-header">Points</h5>
        <div className="card-body">
            {/* Progress bar 1 */}
            <div className="progress mx-auto" data-value={33}>
                <span className="progress-left">
                    <span className="progress-bar border-primary" />
                </span>
                <span className="progress-right">
                    <span className="progress-bar border-primary" />
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">33</div>
                </div>
            </div>
            {/* END */}
            <h5 className="card-title cardh5txt">Your Credits</h5>
        </div>
    </div>
    <div className="card">
        <h5 className="card-header">Top Rewards</h5>
        <div className="card-body cardreward">
            <ul className="list-group">
                <li className="list-group-item align-items-center lireward">
                    <a href="#" className="badge badge-light extra d-flex justify-content-between" data-toggle="modal" data-target="#exampleModal">
                        <div><img src="img/btc.png" width={30} height={30} className="rounded-circle" alt="" /> 3$</div>
                        <div><span className="badge badge-primary badge-pill spane">3000p</span></div>
                    </a>
                </li>
                <li className="list-group-item align-items-center lireward">
                    <a href="#" className="badge badge-light extra d-flex justify-content-between">
                        <div><img src="img/btc.png" width={30} height={30} className="rounded-circle" alt="" /> 5$</div>
                        <div><span className="badge badge-primary badge-pill spane">5000p</span></div>
                    </a>
                </li>
                <li className="list-group-item align-items-center lireward">
                    <a href="#" className="badge badge-light extra d-flex justify-content-between">
                        <div><img src="img/btc.png" width={30} height={30} className="rounded-circle" alt="" /> 10$</div>
                        <div><span className="badge badge-primary badge-pill spane">10000p</span></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    {/* ########################### model ################################## */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">REEDEM</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label d-flex justify-content-around">
                                <div className="frodiv">
                                    <h6 className="h6modal">Method :</h6>
                                </div>
                                <div className="frodiv"><h6>Bitcoin</h6></div>
                            </label>
                            <label htmlFor="recipient-name" className="col-form-label d-flex justify-content-around">
                                <div className="frodiv">
                                    <h6 className="h6modal">Reward :</h6>
                                </div>
                                <div className="frodiv"><h6>3$</h6></div>
                            </label>
                            <label htmlFor="recipient-name" className="col-form-label d-flex justify-content-around">
                                <div className="frodiv">
                                    <h6 className="h6modal">Costs :</h6>
                                </div>
                                <div className="frodiv"><h6>3000p</h6></div>
                            </label>
                            <br />
                            <input type="text" className="form-control" id="recipient-name" />
                            <p className="pmodal">Input Email where we can send your reward</p>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="recipient-name" />
                            <p className="pmodal">Extra info (BTC address, note about transfer
                      etc.)</p>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">CONFIRM</button>
                </div>
            </div>
        </div>
    </div>
    {/* ########################### End model ################################## */}
    <div className="card">
        <div className="card-body cardreward">
            <ul className="list-group">
                <li className="list-group-item align-items-center lireward">
                    <a className="badge badge-light extra d-flex justify-content-between" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                        <div><img src="img/roblox.png" width={30} height={30} className="rounded-circle" alt="" /> 10$</div>
                        <div><span className="badge badge-primary badge-pill spane">2</span></div>
                    </a>
                </li>
                <div className="collapse" id="collapseExample1">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Roblox Card 5$
                    <span className="badge badge-primary badge-pill">5000p</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Roblox Card 10$
                    <span className="badge badge-primary badge-pill">10000p</span>
                        </li>
                    </ul>
                </div>
                <li className="list-group-item align-items-center lireward">
                    <a className="badge badge-light extra d-flex justify-content-between" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                        <div><img src="img/amazon.png" width={30} height={30} className="rounded-circle" alt="" /> 10$</div>
                        <div><span className="badge badge-primary badge-pill spane">10000p</span></div>
                    </a>
                </li>
                <div className="collapse" id="collapseExample2">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Amazon Gift Card 5$
                    <span className="badge badge-primary badge-pill">5000p</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Amazon Gift Card 10$
                    <span className="badge badge-primary badge-pill">10000p</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Amazon Gift Card 20$
                    <span className="badge badge-primary badge-pill">20000p</span>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    </div>
    <div className="card">
        <h5 className="card-header"><button type="button" className="btn btn-primary btn-lg btn-block">Your REDEEMS</button>
        </h5>
    </div>
</div>