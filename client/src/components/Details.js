// import React from 'react';
// import { Link } from 'react-router-dom';
// import { StudentConsumer } from '../context';
// import './Details.css';
//
// const StudentDetails = () => {
//     return(
//       <StudentConsumer>
//         {
//           context => {
//             const {
//               id,
//               name,
//               email,
//               phone,
//               city,
//               state,
//               country,
//               organization,
//               jobProfile,
//               additionalInfo,
//             } = context.state.SampleDetail;
//             return (
//               <React.Fragment>
//                 {/* Title */}
//                 <div className="container py-3 display-4">
//                   <div className="row">
//                     <div className="col-10 mx-auto text-center text-blue">
//                       <h1>{name}</h1>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Info */}
//                 <div className="row d.flex">
//                   <div className="col-10 mx-auto col-md-6 my-4 text-capitalize details-img" />
//                   <div className="col-10 mx-auto col-md-6 my-4 text-capitalize font-weight-light">
//                     <h4>
//                       ID :
//                       {' '}
//                       {id}
//                     </h4>
//                     <h4>
//                       Email :
//                       {' '}
//                       {email}
//                     </h4>
//                     <h4>
//                       Phone :
//                       {' '}
//                       {phone}
//                     </h4>
//                     <h4>
//                       City :
//                       {' '}
//                       {city}
//                     </h4>
//                     <h4>
//                       State :
//                       {' '}
//                       {state}
//                     </h4>
//                     <h4>
//                       Country :
//                       {' '}
//                       {country}
//                     </h4>
//                     <h4>
//                       Organization :
//                       {' '}
//                       {organization}
//                     </h4>
//                     <h4>
//                       Job profile :
//                       {' '}
//                       {jobProfile}
//                     </h4>
//                     <h4>
//                       Additional Info :
//                       {' '}
//                       {additionalInfo}
//                     </h4>
//                   </div>
//                 </div>
//                 <div className="btn-container mx-auto my-2 text-center">
//                   <Link to="/list" className=" details-link">
//                     <button>
//                       Back
//                     </button>
//                   </Link>
//                 </div>
//               </React.Fragment>
//             )
//           }
//         }
//       </StudentConsumer>
//     )
// };
//
// export default StudentDetails;