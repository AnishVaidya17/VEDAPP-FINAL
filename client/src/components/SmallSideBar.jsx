import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import Logo from './Logo'
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const SmallSideBar = () => {

  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar


// import React from 'react'
// import Wrapper from '../assets/wrappers/SmallSidebar.js'

// import { Logo } from './index.jsx'
// // import NavLinks from './NavLinks'

// import { FaTimes } from 'react-icons/fa'

// // import { useAppContext } from '../context/appContext.js'



// const SmallSideBar = () => {
//    // const { showSidebar, toggleSidebar } = useAppContext()

//    return (
//       <Wrapper>
//          <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
//             <div className='content'>
//                <button type='button' className='close-btn' onClick={toggleSidebar}>
//                   <FaTimes />
//                </button>
//                <header>
//                   <Logo />
//                </header>
//                <NavLinks toggleSidebar={toggleSidebar} />
//             </div>
//          </div>
//       </Wrapper>
//    )
// }

// export default SmallSideBar