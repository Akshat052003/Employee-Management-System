import React, { useState , useContext, useEffect } from 'react'
import { setLocalStorage, getLocalStorage  } from '../../utils/LocalStorage'
import { AuthContext } from '../../context/AuthProvider'

const Header = (props) => {
  const { userData } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser).data); // ✅ Fix: Extracting the `data` object
    }
  }, []);

  // Debugging
  console.log("Stored User Data:", loggedInUser);
  console.log("User Data from Context:", userData);

  // Set first name or default to "Admin"
  const firstName = loggedInUser ? loggedInUser.firstName : 'Admin';

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{firstName} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header