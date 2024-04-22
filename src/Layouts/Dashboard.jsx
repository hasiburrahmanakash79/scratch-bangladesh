import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  FaUser,
  FaCalendarAlt,
  FaChartBar,
  FaHome,
  FaCog,
  FaWallet,
  FaComment,
} from 'react-icons/fa'
import { BiBookAdd } from 'react-icons/bi'
import { AiFillNotification } from 'react-icons/ai'
import { RiLiveFill } from 'react-icons/ri'
import { FaClipboardQuestion } from 'react-icons/fa6'
import { MdHomeWork } from 'react-icons/md'
import { IconContext } from 'react-icons'
import arrow from '../assets/control.png'

const Dashboard = () => {
  const [open, setOpen] = useState(true)

  const isAdmin = true

  // Add an useEffect to detect screen width on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }

    // Initial call
    handleResize()

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const iconMappings = {
    RoleHome: MdHomeWork,
    Users: FaUser,
    Schedule: FaCalendarAlt,
    Question: FaClipboardQuestion,
    Analytics: FaChartBar,
    Home: FaHome,
    Setting: FaCog,
    Payment: FaWallet,
    Live: RiLiveFill,
    Blog: FaComment,
    Notice: AiFillNotification,
    BookAdd: BiBookAdd
  }

  const Menus = [
    {
      title: 'Admin Home',
      path: '/dashboard/adminHome',
      icon: iconMappings.RoleHome,
      role: 'admin',
      gap: true
    },
    {
      title: 'Users',
      path: '/dashboard/manageUsers',
      icon: iconMappings.Users,
      role: 'admin'
    },
    {
      title: 'All Payments',
      path: '/dashboard/allPayments',
      icon: iconMappings.Payment,
      role: 'admin'
    },
    {
      title: 'Create Notice',
      path: '/dashboard/createNotice',
      icon: iconMappings.Notice,
      role: 'admin'
    },
    {
      title: 'Create Subject',
      path: '/dashboard/createSubject',
      icon: iconMappings.BookAdd,
      role: 'admin'
    },
    {
      title: 'Instructor Home ',
      path: '/dashboard/instructorHome',
      icon: iconMappings.RoleHome,
      role: 'instructor',
      gap: true
    },
    {
      title: 'Set Question',
      path: '/dashboard/createQues',
      icon: iconMappings.Question,
      role: 'instructor'
    },
    {
      title: 'Create Live Exam',
      path: '/dashboard/createLiveExam',
      icon: iconMappings.Live,
      role: 'instructor'
    },
    {
      title: 'Add Blog',
      path: '/dashboard/addBlog',
      icon: iconMappings.Blog,
      role: 'instructor'
    },
    {
      title: 'Written Answers Review',
      path: '/dashboard/written-review',
      icon: iconMappings.Blog,
      role: 'instructor'
    },
    {
      title: 'User Home',
      path: '/dashboard/userHome',
      icon: iconMappings.RoleHome,
      role: 'user',
      gap: true
    },
    {
      title: 'Payment History',
      path: '/dashboard/paymentHistory',
      icon: iconMappings.Payment,
      role: 'user'
    },
    {
      title: 'Notice Board',
      path: '/dashboard/noticeBoard',
      icon: iconMappings.Notice,
      role: 'user'
    },
    {
      title: 'Applied Live Exam',
      path: '/dashboard/appliedLiveExam',
      icon: iconMappings.Live,
      role: 'user'
    },
    {
      title: 'Student Analytics',
      path: '/dashboard/allgivenExam',
      icon: iconMappings.Analytics,
      role: 'user'
    },

    {
      title: 'Home ',
      path: '/',
      icon: iconMappings.Home,
      role: 'general',
      gap: true
    }
  ]

  const adminMenus = Menus.filter(menu => menu.role === 'admin')
  const userMenus = Menus.filter(menu => menu.role === 'user')
  const generalMenus = Menus.filter(menu => menu.role === 'general')

  return (
    <div className='flex '>
      {/* Dashboard Sidebar content */}
      <div
        className={` ${
          open ? 'w-56 p-4' : 'w-14 text-center '
        }   h-screen  fixed left-0 top-0 bottom-0 z-50 pt-8  duration-500 transition-all`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7  
			 border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <ul
          className={` ${
            open ? '' : ' flex flex-col items-center justify-center'
          }`}
        >
          {isAdmin
            ? adminMenus.map((Menu, index) => (
              <Link to={Menu.path}   key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${
                Menu.gap ? 'mt-9' : 'mt-2'
              } ${index === 0 && ' hover:bg-primary'}`}>
                <li
             
             className='flex items-center gap-x-4'
                >
                  
                    <IconContext.Provider value={{ className: 'react-icon' }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  
                </li>
                </Link>
              ))
            : //  Instructor menus
    
            // User menus
              userMenus.map((Menu, index) => (
                <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${
                  Menu.gap ? 'mt-9' : 'mt-2'
                } ${index === 0 && ' hover:bg-primary'}`}>
                <li
                  
                  className='flex items-center gap-x-4'
                >
                  
                    <IconContext.Provider value={{ className: 'react-icon' }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  
                </li>
                </Link>
              ))}
          {generalMenus.map((Menu, index) => (
            <Link  to={Menu.path}  key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${
              Menu.gap ? 'mt-9' : 'mt-2'
            } ${index === 0 && ' hover:bg-primary'}`}>
            <li
             
              className='flex items-center gap-x-4'
            >
              
                <IconContext.Provider value={{ className: 'react-icon' }}>
                  <Menu.icon />
                </IconContext.Provider>
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
            </li>
              </Link>
          ))}
        </ul>

      </div>
      {/* Dashboard main content */}
      <div
        className={` ${
          open ? 'pl-60 pr-4' : 'pl-16 pr-2'
        }  flex-1  overflow-y-auto  duration-500 transition-all h-[100vh] ${
          isAdmin
            ? ''
            :''
        }`}
      >
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard