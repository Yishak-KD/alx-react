import propTypes from 'prop-types';
import React from 'react'

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <>
          <tr>
            <th colSpan={2}>{textFirstCell}</th>
          </tr>
        </>
      )
    } else {
      return (
        <>
          <tr>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
        </>
      )
    }
  } else {
    return (
      <>
        <tr>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      </>
    )
  }
}

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.string.isRequired
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

export default CourseListRow;