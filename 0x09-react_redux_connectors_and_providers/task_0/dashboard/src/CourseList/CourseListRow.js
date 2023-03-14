import propTypes from 'prop-types';
import React from 'react'

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const row = {
    backgroundColor: '#f5f5f5ab'
  }

  const header = {
    backgroundColor: '#deb5b545'
  }


  return (
    <tr style={row}>
      isHeader ?
      (textSecondCell === null ? (
      <th style={header} colSpan={2}>{textFirstCell}</th>
      ): (
      <>
        <th style={header}>{textFirstCell}</th>
        <th style={header}>{textSecondCell}</th>
      </>
      )
      ) : (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
      )
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired])
}

// CourseListRow.defaultProps = {
//   isHeader: false,
//   textSecondCell: null
// }

export default CourseListRow;