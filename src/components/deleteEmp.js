import React,{Component} from 'react';
import axios from 'axios';
export class deleteEmp extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            id:'',
            success:false
        }

        this.handleId=this.handleId.bind(this);
    }

    handleId(e)
    {
        console.log(e.target.value);
        this.setState({ id: e.target.value });
    }

    handleDelete=(e)=>{ 
        e.preventDefault();
        console.log(this.state.id);
        axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${this.state.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({success:true})
        })
      }

    render(){
        return(
        <div>
        <div style={{width:"20em",margin:"auto",marginTop:"4em"}}>  
            <form onSubmit={this.handleDelete}>
                <div className="form-group"> 
                    <label >Employee Id</label> 
                    <input type="number" className="form-control" id="eid" onChange={this.handleId} />
                </div>
                <button type="submit" className="btn btn-primary" style={{margin:"auto",display:"block"}}>Delete Employee</button> 
            </form>
        </div>  
        {this.state.success ? <h4 style={{textAlign:"center"}}>Employee Deleted Successfully</h4> : <h1></h1>}
        </div>
        )
    }
}