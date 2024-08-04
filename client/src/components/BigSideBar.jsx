import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { Logo } from './index'
import NavLinks from './NavLinks'
import { useDashboardContext } from '../pages/DashboardLayout'

const BigSideBar = () => {
  const { showSidebar } = useDashboardContext()

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSideBar


// import React from 'react'
// import Wrapper from '../assets/wrappers/BigSidebar'

// import { Logo } from './index'
// // import NavLinks from './NavLinks'
// // import { useAppContext } from '../context/appContext'

// const BigSideBar = () => {
//    // const { showSidebar } = useAppContext()

//    return (
//       <Wrapper>
//          <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
//             <div className='content'>
//                <header>
//                   <Logo />
//                </header>
//                <NavLinks />
//             </div>
//          </div>

//       </Wrapper>
//    )
// }

// export default BigSideBar