import React from 'react';
import logo from './logo.svg';
import './App.css';
import graph from '../src/Capture.png';

import graph1 from '../src/Capture1.png';

import graph2 from '../src/Capture2.png';
function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
      <div class="d-flex h-100" id="wrapper">


<div class="bg-light border-right h-100" id="sidebar-wrapper">
  <div class="sidebar-heading">GET WORK </div>
  <div class="list-group list-group-flush">
    <a href="#" class="list-group-item list-group-item-action bg-light">Home</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Create Job</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Invite Companies</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Jobs</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Applicants Status</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Notices</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Connections</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Report</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">   Notices</a>
  </div>
</div>



<div id="page-content-wrapper" class="w-100 bg-light">


  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button class="btn btn-primary" id="menu-toggle">Home</button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

    <div class="row mx-5">
      <div  class="col-7 mx-3 my-2 d-flex border bg-dark text-light">
          <div>Universities with complete profile are noticed more by companies</div>
          <div>Updated Profile</div>
      </div>
      <div class="col-4 mx-3 my-2 border">
        <div class="context.font='20px sans-serif'; my-auto">Generated <strong>MHRD</strong> Report</div>
      </div>
    </div>
    <div class="row">
      <div class="col-2 mx-5 my-3 border rounded">
        <h2>Invite Companies</h2>
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight">Dell Incorporation</div>
        <div class="p-2 bd-highlight">Dell Incorporation</div>
        <div class="p-2 bd-highlight">Dell Incorporation</div>
    </div>
</div>
      <div class="col-3 mx-5 my-3 border rounded">
      <h2>New Jobs</h2>
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight">Sales Manager</div>
        <div class="p-2 bd-highlight">Sales Manager</div>
        <div class="p-2 bd-highlight">Sales Manager</div>
    </div>
      </div>
      <div class="col-5  mx-2 my-3 border rounded">
      <h2>CTC Offered (In Lacs - INR)</h2>
      <div class="d-flex flex-column bd-highlight mb-3">
        <img src={graph}/>
    </div>
       
      </div>
  </div>
  <div class="row">
            <div class="col-6">
               <div class="row">
                  <div class="col-6">
                    <div class="ml-4  border">
                    <div class="d-flex flex-row bd-highlight mb-3">
                          <div class="p-2 bd-highlight m-2">75000</div>
                          <div class="p-2 bd-highlight m-2">Sales Manager</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                  <div class="ml-4   border">
                  <div class="d-flex flex-row bd-highlight mb-3">
                          <div class="p-2 bd-highlight m-2">500</div>
                          <div class="p-2 bd-highlight m-2">Visited Companies</div>
                      </div>
                    </div>
                  </div>
              </div>
             <div class="row">
               <div class="ml-5">
               <img src={graph2} />
               </div>
             </div>
           </div>

            <div class="col-6">
              <div class="row" > 
              <div class="w-90">
              <div class="ml-5  border">
                    <div class="d-flex flex-row bd-highlight mb-3">
                          <div class="p-2 bd-highlight ml-5 my-auto font-weight-bolder">Most Popular skills your student have</div>
                          <div class="p-2 bd-highlight m-2">
                            <img src={graph1}></img>
                          </div>
                      </div>
                    </div>
                    </div>
              
              </div>
              <div class="row">
                <div class="col-4 border ml-5 mt-5 font-weight-bold">
                  <div>Students Placed</div>
                  <div>In 30 days</div>
                  <div>450/500</div>
                </div>
                <div class="col-6 border ml-5 mt-5">
                  <h5>Recent Notifications</h5>
                  <ul class="align-left">
                    <li>Company A invited you for placements</li>
                    <li>Company A invited you for placements</li>
                    <li>Company A invited you for placements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

</div>


</div>
    </div>
     );
}

export default App;
