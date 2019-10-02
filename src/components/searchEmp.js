import React,{Component} from 'react';
import axios from 'axios';

export class searchEmp extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            id:'',
            employee:{},
            isLoaded:false
        }

        this.handleId=this.handleId.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
    }

    handleId(e)
  {
    console.log(e.target.value);
    this.setState({ id: e.target.value });
  }

  handleSearch(e){
    e.preventDefault();
    console.log(this.state.id);
    const url =`	http://dummy.restapiexample.com/api/v1/employee/${this.state.id}`;
    console.log(url);
    axios.get(url)  
      .then(res => {
        const employee = res.data;
        this.setState({ employee });
        console.log(this.state);
        console.log(this.state.employee);
        this.setState({isLoaded:true})
      })
  }

    render(){
        return(
        <div style={{width:"20em",margin:"auto",marginTop:"4em"}}>  
            <form onSubmit={this.handleSearch}>
                <div className="form-group">
                    <label >Employee Id</label>
                    <input type="number" className="form-control" id="eid" onChange={this.handleId} />
                </div>
                <button type="submit" className="btn btn-primary" style={{margin:"auto",display:"block"}}>Search Employee</button> 
            </form>

            {this.state.isLoaded ? 
            <table className="table" style={{marginTop:"2em"}}>
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Age</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{this.state.employee.id}</th> 
                    <td>{this.state.employee.employee_name}</td>
                    <td>{this.state.employee.employee_salary}</td>
                    <td>{this.state.employee.employee_age}</td>
                    </tr>
                </tbody>
            </table>
            : <div></div>
            }
        </div>  
        )
    }
}