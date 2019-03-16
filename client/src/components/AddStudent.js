import React, {Component} from 'react';
import {graphql} from "react-apollo";
import {getStudentsQuery} from "../queries/queries";

// const AddStudent = (props) => {
//   return (
//     <React.Fragment>
//       <div className="d-flex justify-content-center w-100 h-100">
//         <form className="card">
//           <div className="form-group px-3">
//             <label htmlFor="InputName">Name</label>
//             <input type="text" className="form-control " id="InputName" aria-describedby="emailHelp"
//              placeholder="Enter Name"/>
//           </div>
//           <div className="form-group px-3">
//             <label htmlFor="InputEmail">Email</label>
//             <input type="email" className="form-control" id="InputEmail" placeholder="Email"/>
//             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
//             </small>
//           </div>
//           {/*<div className="form-group form-check">*/}
//             {/*<input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
//               {/*<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
//           {/*</div>*/}
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </React.Fragment>
//   )
// }

class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state= {
      name: '',
      email: ''
    }
  }

  handleSubmit (e){
    e.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center w-100 h-100">
          <form className="card pt-2" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group px-3">
              <label htmlFor="InputName">Name</label>
              <input type="text" className="form-control " id="InputName" aria-describedby="emailHelp"
                     placeholder="Enter Name" onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className="form-group px-3">
              <label htmlFor="InputEmail">Email</label>
              <input type="email" className="form-control" id="InputEmail" placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
              </small>
            </div>
            {/*<div className="form-group form-check">*/}
            {/*<input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
            {/*<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
            {/*</div>*/}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default graphql(getStudentsQuery)(AddStudent);