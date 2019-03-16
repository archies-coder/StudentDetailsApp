import React from 'react';
import Student from './Student';
import {graphql} from "react-apollo";
import { getStudentsQuery} from "../queries/queries";

const gridStyle = {
  display:'grid',
  gridTemplateColumns : '1fr 1fr 1fr',
  gridGap : '30px',
  width :"100%",
  height:"300px",
  textAlign : "center",
};

const StudentList = (props) => {
  const getStuds = () =>{
    const data = {...props.data}
    if(data.loading){
      return <h1>Loading</h1>
    } else {
      return data.students.map( item => {
        return <Student id = {item.name} student={item}/>
      })
    }
  };
  return(
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div style={gridStyle}>
            {
              getStuds()
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default graphql(getStudentsQuery)(StudentList);
// export default StudentList;

