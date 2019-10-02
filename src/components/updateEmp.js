import React,{Component} from 'react';
import axios from 'axios';

export class updateEmp extends Component{ 

    constructor(props)
    {
        super(props);
        this.state={
            age:'',
            name:'',
            salary:'',
            success:false
        }

        this.handleId=this.handleId.bind(this);
    }

    handleId(e)
  {
    console.log(e.target.value);
    this.setState({ id: e.target.value });
  }

  handleName=(e)=>{
    console.log(e.target.value);
    this.setState({name:e.target.value});

  }

  handleSalary=(e)=>{
    console.log(e.target.value);
    this.setState({salary:e.target.value});
  }

  handleAge=(e)=>{
    console.log(e.target.value);
    this.setState({age:e.target.value});
  }


    handleUpdate=(e)=>{
        e.preventDefault();
        console.log(this.state)
        let updateEmployee={
          age:this.state.age,
          name:this.state.name,
          salary:this.state.salary,
        }
        console.log('new Employee data',updateEmployee)
        axios.put(`http://dummy.restapiexample.com/api/v1/update/${this.state.id}`,
        JSON.stringify(updateEmployee),
         { 'Content-Type': 'application/json','Accept':'application/json' } 
        )    
          .then(res => {
            console.log(res.data);
            this.setState({success:true})
          })
      }

    render(){
        return(
        <div>
        <div style={{width:"20em",margin:"auto",marginTop:"4em"}}>  
            <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" id="ename" onChange={this.handleName} />
                </div>
                <div className="form-group">
                    <label >Id</label>
                    <input type="number" className="form-control" id="eid" onChange={this.handleId} />
                </div>
                <div className="form-group">
                    <label >Salary</label>
                    <input type="number" className="form-control" id="esalary" onChange={this.handleSalary} />
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input type="number" className="form-control" id="eage" onChange={this.handleAge} />
                </div>
                <button type="submit" className="btn btn-primary" style={{margin:"auto",display:"block"}} >Update Employee</button> 
            </form>
        </div>  
        {this.state.success ? <h4 style={{textAlign:"center"}}>Employee Updated Successfully</h4> : <h1></h1>}
        </div>
        )
    }
}