import React from 'react'

const Error = ({ errorMessage }) => {
    return (
        <div className='text-danger fw-bold mt-3'>😨 {errorMessage}</div>
    )
}

export default Error