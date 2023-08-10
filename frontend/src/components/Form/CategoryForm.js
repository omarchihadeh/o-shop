import React from 'react'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-1">
                    <strong>Category:</strong>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Add new category' value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-secondary">Submit Category</button>
                </div>
            </form>
        </>
    )
}

export default CategoryForm
