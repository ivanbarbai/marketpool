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
        setItems({ ...itemInitialValues });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="card">
                <div className='card-header'>
                    <h2>New Item</h2>
                </div>
                <div className='card-content'>
                    <label className='labelForm' htmlFor="seller">Vendedor</label>
                    <input value={items.seller} className='inputForm' type="text" name="seller" onChange={handleInputChange} required />

                    <label className='labelForm' htmlFor="item">Producto a Vender</label>
                    <input value={items.item} className='inputForm' type="text" name="item" onChange={handleInputChange} required />

                    <label className='labelForm' htmlFor="price">Precio</label>
                    <input value={items.price} className='inputForm' type="number" name="price" onChange={handleInputChange} required />

                </div>
                <div className='card-footer'>
                    <button className='submitForm'>Enviar</button>
                </div>
            </form>
        </>
    )
}

export default ItemForm