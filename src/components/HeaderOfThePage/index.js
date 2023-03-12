import React, { Component } from 'react';
import "../HeaderOfThePage/index.css"
import StudentRegistration from '../RegistrationForms/StudentRegistartionForm';
import TeacherRegistrationForm from '../RegistrationForms/TeacherRegistrationForm'
class Header extends Component {
    state = {
        teacherStatus: false,
        studentStatus: false,
    }
    handleTeacher = () => {
        this.setState({ teacherStatus: true })

    }
    handleStudent = () => {
        this.setState({ studentStatus: true })
    }
    render() {
        const { teacherStatus, studentStatus } = this.state
        console.log(teacherStatus, studentStatus)
        return (
            <>
                {studentStatus ? <StudentRegistration /> : null}
                {teacherStatus ? <TeacherRegistrationForm/> : null}

                {(studentStatus || teacherStatus) === false ? <div className='avatar-container'>
                    <div className='avatar-profile'>
                        <div>
                            <img onClick={this.handleTeacher} className='teacher-avatar' src='https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg' alt='teacher'></img>
                            <p  className='headings'>Teacher </p>
                        </div>
                        <div> <img onClick={this.handleStudent} className='student-avatar' src='https://img.freepik.com/premium-vector/girl-holding-book-isolated-cartoon-character-elementary-school-student-with-backpack_71593-230.jpg' alt='teacher'></img>
                            <p className='headings'>Student</p>
                        </div>
                    </div>


                </div> : null
                }

            </>
        );
    }
}

export default Header;