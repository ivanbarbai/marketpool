import React, { useState, useEffect } from 'react'
import ItemForm from './ItemForm';

import { db } from '../api/firebase';
import { addDoc, collection } from 'firebase/firestore';

const Items = () => {

    const itemsCollectionRef = collection(db, 'items');

    //****** Add new items  ********/
    const addOrEdit = async (itemObject) => {
        await addDoc(itemsCollectionRef, {
            seller: itemObject.seller,
            item: itemObject.item,
            price: parseInt(itemObject.price),
        });
    }

    return (
        <ItemForm addOrEdit={addOrEdit} />
    )
}

export default Items