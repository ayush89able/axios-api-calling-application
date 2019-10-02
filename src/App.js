import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { searchEmp } from './components/searchEmp';
import { createEmp } from './components/createEmp';
import { deleteEmp } from './components/deleteEmp';
import { updateEmp } from './components/updateEmp';
import { employeeList } from './components/emplyeeList';

class App extends Component{

  render(){
  return ( 
    <Router>
      <div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/employees/" className="nav-link">Employees</Link>
            </li>
            <li className="nav-item">
              <Link to="/search/" className="nav-link">Search Employee</Link>
            </li>
            <li className="nav-item">
              <Link to="/create/" className="nav-link">Create Employee</Link>
            </li>
            <li className="nav-item">
              <Link to="/update/" className="nav-link">Update Employee</Link>
            </li>
            <li className="nav-item">
              <Link to="/delete/" className="nav-link">Delete Employee</Link>
            </li>
          </ul>

        <Route path="/" exact component={employeeList} /> 
        <Route path="/employees/" component={employeeList} />  
        <Route path="/search/" component={searchEmp} /> 
        <Route path="/create/" component={createEmp} />
        <Route path="/delete/" component={deleteEmp} />
        <Route path="/update/" component={updateEmp} />
      </div>
    </Router>
  );
  }
}

export default App;
