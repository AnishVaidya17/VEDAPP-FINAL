import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaHome, FaAlignLeft } from 'react-icons/fa'
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
      
        <div className='btn-container'>
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar


// import React from 'react'
// import { useState } from 'react'

// import Wrapper from '../assets/wrappers/Navbar'

// import { Logo } from './index.jsx'

// import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa'

// // import { useAppContext } from '../context/appContext'


// const Navbar = () => {

//   // const { user, toggleSidebar, logoutUser } = useAppContext();
//   // const [showLogout, setShowLogout] = useState(false)


//   return (
//     <Wrapper>
//       <div className="nav-center">
//         <button
//           type='button'
//           className='toggle-btn'
//           onClick={toggleSidebar}
//         >
//           <FaAlignLeft />
//         </button>
//         <div>
//           <Logo />
//           <h3 className='logo-text'>Dashboard</h3>
//         </div>

//         <div className="btn-container">
//           <button type='button' className='btn' onClick={() => setShowLogout(!showLogout)}>
//             <FaUserCircle />
//             {user.name}
//             <FaCaretDown />
//           </button>
//           <div className={showLogout ? ' dropdown show-dropdown' : 'dropdown'}>
//             <button type='button' className='dropdown-btn' onClick={logoutUser}>
//               Logout
//             </button>
//           </div>
//         </div>

//       </div>
//     </Wrapper>
//   )
// }

// export default Navbar