import React,{Component} from 'react';
import axios from 'axios';

export class createEmp extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            salary:'',
            age:'',
            success:false
        }
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

  handleCreate=(e)=>{ 
    e.preventDefault();
    console.log(this.state) 
    let newEmployee={
      age:this.state.age,
      name:this.state.name,
      salary:this.state.salary,
    }
    console.log('new Employee data',newEmployee)
    axios.post(`http://dummy.restapiexample.com/api/v1/create`,
    JSON.stringify(newEmployee),
     { 'Content-Type': 'application/json','Accept':'application/json' } 
    )    
      .then(res => {
        console.log(res.data);
        this.setState({success:true})
      })
      
    // let url="http://dummy.restapiexample.com/api/v1/create";
    // let data={
    //   age:this.state.age,
    //   name:this.state.name,
    //   salary:this.state.salary,
    // };
    // fetch(url,{
    //   method:'POST',
    //   headers:{
    //     "Content-Type":"application/json",
    //     "Accept":"application/json"
    //   },
    //   body:JSON.stringify(data)
    // }).then((result)=>{
    //   result.json().then((resp)=>{
    //     console.warn("resp",resp);
    //   })  
    // })
  }

    render(){
        return(
        <div>
        <div style={{width:"20em",margin:"auto",marginTop:"4em"}}>  
            <form onSubmit={this.handleCreate}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" id="ename" onChange={this.handleName} />
                </div>
                <div className="form-group">
                    <label >Salary</label>
                    <input type="number" className="form-control" id="esalary" onChange={this.handleSalary} />
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input type="number" className="form-control" id="eage" onChange={this.handleAge} />
                </div>
                <button type="submit" className="btn btn-primary" style={{margin:"auto",display:"block"}}>Create Employee</button> 
            </form>  
        </div>  
        {this.state.success ? <h4 style={{textAlign:"center"}}>Employee Created Successfully</h4> : <h1></h1>}
        </div>
        )
    }
}