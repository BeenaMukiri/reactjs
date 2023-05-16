import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
      setItems(getItems());
      console.log("updating items");
      
    }, [getItems]);
  return (
    <div>
      {
        items.map((item) => {
          <div key={item}>
            {item}
          </div>;
        })
       }
       hi
    </div>
  );
};

export default List