import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import propTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses = [] }) {
    return (
        <>
            <table id='CourseList'>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Available courses" />
                    <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
                </thead>
                <tbody>
                    {
                        listCourses.length === 0 ? <CourseListRow isHeader={false} textFirstCell="No course available yet" /> : null
                    }
                    {
                        listCourses.map((e, index) => <CourseListRow key={index} isHeader={false} textFirstCell={e.name} textSecondCell={e.credit} />)
                    }
                </tbody>
            </table>
        </>
    )
}

CourseList.propTypes = {
    listCourses: propTypes.arrayOf(CourseShape)
}

export default CourseList;