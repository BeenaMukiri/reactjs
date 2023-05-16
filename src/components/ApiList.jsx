import React, { useEffect, useState } from 'react'

const ApiList = ({ users }) => {
    const [userslits, setUserslist] = useState([])
    useEffect(() => {
      setUserslist(users);
      console.log("rendered");
      console.log(userslits)
    }, [users]);
  return <div>

  </div>;
};

export default ApiList