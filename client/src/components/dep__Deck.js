import React, { useState, useEffect } from 'react';
import { baseUrl } from '../config';
import { useSelector } from 'react-redux'


function Deck() {
  const [data, setData] = useState([]);
  const userId = useSelector((state) => state.authentication.user.id)

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userId),
    }
    async function test() {
    const response = await fetch(`${baseUrl}/deck/cards`, requestOptions)
    const newData = await response.json()
    setData(newData)
    }
    test()
  },[userId]);

    return (
        <>
            {/* <div>{console.log(data)}</div> */}
        </>
    );
}
export default Deck;
