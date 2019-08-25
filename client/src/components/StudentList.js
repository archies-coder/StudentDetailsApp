import React, {Component} from "react";
import Student from "./Student";
// // import { graphql } from "react-apollo";
// import AuthContext from "../context";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "30px",
  width: "100%",
  height: "300px",
  textAlign: "center"
};

export default class StudentList extends Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }


  componentDidMount = () => {
    const getStudentsQuery = {
      query: `
      {
          students {
              name
          }
      }
  `
    };
    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(getStudentsQuery),
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resdata => {
        console.log(resdata)
      this.setState({data: resdata.data.students})
      })
      .catch(err => console.log(err))
  }
  render(){
  return (
    <React.Fragment>
          <div>
            <div className="container pb-2">
              <div style={gridStyle}>
                {
                  (this.state.data)?this.state.data.map(item => {
                    console.log(item)
                    return <Student key={item.name} id = {item.name} student={item}/>
                }): null
                }
              </div>
            </div>
          </div>
    </React.Fragment>
  );
  }
}

