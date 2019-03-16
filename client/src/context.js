import React, { Component } from 'react';
import { Students, detailProduct } from './Data'

const StudentContext = React.createContext();

class StudentProvider extends Component {
    state={
        students: [],
        SampleDetail: detailProduct
    };

    componentDidMount(){
        this.setStudents();
    }

    setStudents = () =>{
        let tempStudents = [];
        Students.forEach(item => {
            const singleItem = { ...item };
            tempStudents = [ ...tempStudents,singleItem ];
        });
        this.setState(()=>{
            return { students : tempStudents };
        });
    };

    getStudent = id =>{
        return this.state.students.find(item=>item.id===id);
    };

    handleDetail = id =>{
        const stud = this.getStudent(id);
        this.setState(()=>{
            return { SampleDetail : stud };
        })
    };

    render() {
        return (
            <StudentContext.Provider value={{
                state: this.state,
                handleDetail: this.handleDetail,
            }}>
                {this.props.children}
            </StudentContext.Provider>
        )
    }
}

const StudentConsumer = StudentContext.Consumer;

export { StudentProvider, StudentConsumer };