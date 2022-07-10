import React, { useEffect, useState } from 'react'
import { db } from '../../api/firebase';
import { addDoc, collection, doc, getDocs } from "firebase/firestore"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


const Transactions = () => {

  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, 'items');


  useEffect(() => {

    const getSells = async () => {

      const data = await getDocs(itemsCollectionRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    };

    getSells();
  }, [])

  return (
    <>

      <div className='card'>
        <div className='card-header'>
          <h2>Transactions</h2>
        </div>
        <div className='card-content'>
          {items.map((item) => {
            return (
              <div className='item-details item-sell' key={item.id}>
                <label className='item-name'>{item.item}</label>
                <label className='item-price'>${item.price.toFixed(2)}</label>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Transactions