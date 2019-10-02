import React,{Component} from 'react';
import axios from 'axios';
export class employeeList extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        employees:[]
        }
    }

    componentDidMount()
    {
        axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(res => {
            const employees = res.data;
            this.setState({ employees });
            console.log(this.state.employees);
        })
    };

    render(){
        return(
            <div>
            <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Age</th>
            </tr> 
        </thead>
        <tbody>
             { this.state.employees.map(e => 
            <tr key={e.id}>
            <th scope="row">{e.id}</th>
            <td>{e.employee_name}</td>
            <td>{e.employee_salary}</td>
            <td>{e.employee_age}</td>
            </tr>
           )} 
        </tbody>
        </table>
        </div>
        )
    }
}