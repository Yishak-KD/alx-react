import propTypes from 'prop-types';
import React from 'react'

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <>
          <table>
            <tr>
              <th colSpan={2}>textFirstCell</th>
            </tr>
          </table>
        </>
      )
    } else {
      return (
        <>
          <table>
            <tr>
              <th>textFirstCell</th>
              <th>textSecondCell</th>
            </tr>
          </table>
        </>
      )
    }
  } else {
    return (
      <>
        <table>
          <tr>
            <td>textFirstCell</td>
            <td>textSecondCell</td>
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