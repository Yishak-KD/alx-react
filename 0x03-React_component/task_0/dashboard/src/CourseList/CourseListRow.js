import propTypes from 'prop-types';
import React from 'react'

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <>
          <th colSpan={2}>{textFirstCell}</th>
        </>
      )
    } else {
      return (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )
    }
  } else {
    return (
      <>
        <table>
          <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </tr>
        </table>
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