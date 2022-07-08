import React, { useState } from 'react'

const ItemForm = props => {
    const itemInitialValues = {
        seller: "",
        item: "",
        price: "",
    };


    const [items, setItems] = useState(itemInitialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItems({ ...items, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEdit(items);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="main-form">
                <div className='formHeader'>
                    <h2>New Item</h2>
                </div>
                <div className='formContent'>
                    <label className='labelForm' htmlFor="seller">Vendedor</label>
                    <input className='inputForm' type="text" name="seller" onChange={handleInputChange} required />

                    <label className='labelForm' htmlFor="item">Producto a Vender</label>
                    <input className='inputForm' type="text" name="item" onChange={handleInputChange} required />

                    <label className='labelForm' htmlFor="price">Precio</label>
                    <input className='inputForm' type="number" name="price" onChange={handleInputChange} required />
                    <button className='submitForm'>Enviar</button>
                </div>
            </form>
        </>
    )
}

export default ItemForm