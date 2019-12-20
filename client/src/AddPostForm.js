import React from 'react'

const AddItemForm = (props) => {
    const { handleCategoryChange, handleChange, handleContactChange, handleSubmit, name, url, price, inputs } = props
    return (
        <div className='form'>
            <h1>Add a new image</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    name="title"
                    
                    onChange={handleChange}
                    placeholder="Title" />
                <input
                    type="text"
                    name="url"
                    
                    onChange={handleChange}
                    placeholder="Image URL" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddItemForm 