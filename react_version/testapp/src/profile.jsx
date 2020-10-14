import React from 'react';
import './App.css';

function profile() {
    return (
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
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Profile<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="invite.html">Referral</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* ###################### end nav ############################# */}
            <div className="card text-center">
                <div className="card-header">
                    <h5>Your Account</h5>
                </div>
                <div className="card-body getpointsul">
                    <table className="table">
                        <tbody><tr className="cardtd">
                            <td><i className="fas fa-user fa-4x" /></td>
                        </tr>
                            <tr>
                                <td>
                                    test123@gmail.com
                  </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="badge badge-danger">NOT CONFIRMED</span>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
                <div className="card-footer text-muted">
                    <a href="#" className="btn btn-primary">Resend</a>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    <h5>LANGUAGE</h5>
                </div>
                <div className="card-body d-flex justify-content-between aring4zero">
                    <h5>Country </h5>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            English
              </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">English</a>
                            <a className="dropdown-item" href="#">Franche</a>
                            <a className="dropdown-item" href="#">Arabic</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    <h5>Payment History</h5>
                </div>
                <div className="card-body getpointsdiv">
                    <ul className="list-group getpointsul">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="text-dark badge badge-light extra">
                                <img src="img/20.png" width={37} height={37} className="rounded-circle" alt="" /> 20-08-2020
                </a>
                            <span className="badge badge-danger">DENIED</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="text-dark badge badge-light extra">
                                <img src="img/5.png" width={37} height={37} className="rounded-circle" alt="" /> 01-08-2020
                </a>
                            <span className="badge badge-success">SENT</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="text-dark badge badge-light extra">
                                <img src="img/10.png" width={37} height={37} className="rounded-circle" alt="" /> 03-08-2020
                </a>
                            <span className="badge badge-warning">WAITING</span>
                        </li>
                    </ul>
                </div>
            </div>





            // #################completed offers#####################


            <div className="card text-center">
                <div className="card-header">
                    <h5>Completed Offers</h5>
                </div>
                <div className="card-body getpointsdiv">
                    <ul className="list-group getpointsul">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row">
                                <img src="img/reward.png" width={45} height={45} className="rounded-circle" alt="" />
                                <div className="d-flex flex-column pl-2">
                                    <span><h6>Offer Name 1</h6> </span>
                                    <span className="text-secondary">03-08-2020</span>
                                </div>
                            </div>
                            <span className="badge badge-success">+1200p</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row">
                                <img src="img/reward.png" width={45} height={45} className="rounded-circle" alt="" />
                                <div className="d-flex flex-column pl-2">
                                    <span><h6>Offer Name 2</h6> </span>
                                    <span className="text-secondary">03-08-2020</span>
                                </div>
                            </div>
                            <span className="badge badge-success">+1200p</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row">
                                <img src="img/reward.png" width={45} height={45} className="rounded-circle" alt="" />
                                <div className="d-flex flex-column pl-2">
                                    <span><h6>Offer Name 3</h6> </span>
                                    <span className="text-secondary">03-08-2020</span>
                                </div>
                            </div>
                            <span className="badge badge-success">+1200p</span>
                        </li>
                    </ul>
                </div>
            </div>


            
        </div>

    );
}