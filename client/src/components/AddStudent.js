// import React, {Component} from 'react';
// import { graphql, compose } from "react-apollo";
// import { getStudentsQuery,addStudentsMutation } from "../queries/queries";

// class AddStudent extends Component {
//   constructor(props){
//     super(props);
//     this.state= {
//       name: '',
//       email: ''
//     }
//   }

//   handleSubmit (e){
//     e.preventDefault();
//     this.props.addStudentsMutation({
//       variables: {
//         name: this.state.name,
//         email: this.state.email
//       },
//       refetchQueries: [{
//         // query: getStudentsQuery
//       }]
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="d-flex justify-content-center w-100 h-100">
//           <form className="card pt-2" onSubmit={this.handleSubmit.bind(this)}>
//             <div className="form-group px-3">
//               <label htmlFor="InputName">Name</label>
//               <input type="text" className="form-control " id="InputName" aria-describedby="emailHelp"
//                      placeholder="Enter Name" onChange={(e)=>this.setState({name:e.target.value})}/>
//             </div>
//             <div className="form-group px-3">
//               <label htmlFor="InputEmail">Email</label>
//               <input type="email" className="form-control" id="InputEmail"
//                  placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}/>
//               <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
//               </small>
//             </div>
//             <button type="submit" className="btn bg-dark text-white text-monospace">Submit</button>
//           </form>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default compose(
//   graphql(getStudentsQuery,{name: "getStudentsQuery"}),
//   graphql(addStudentsMutation,{name:"addStudentsMutation"})
// )(AddStudent);