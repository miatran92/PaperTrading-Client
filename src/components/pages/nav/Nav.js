import './Nav.css';
import {FaBars, FaTimes, FaNewspaper} from 'react-icons/fa'
import {FiActivity} from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react';
import {MdSpaceDashboard} from 'react-icons/md'
import {AiOutlineStock} from 'react-icons/ai'
import {BsArrowLeftRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {GrDocumentPerformance} from 'react-icons/gr'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
// click outside to close
  let menuRef = useRef()
  useEffect(() => {
    let handler = (event) => {
      if(!menuRef.current.contains(event.target)){
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown",handler)
    return() => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <div ref={menuRef} className='nav'>
        <div className="nav-wrapper">
          <div className="nav-left">
            <Link to='/'><span className='logo'>investopia</span></Link>
            <span className='circle'></span>
          </div>
          <div className="nav-right">
            {menuOpen 
            ? <FaTimes onClick={handleClick}/> 
            : <FaBars onClick={handleClick}/>}
          </div>
          <div className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <Link to='/'><span className="menu-item" onClick={handleClick}>Dashboard <MdSpaceDashboard/></span></Link>
            <Link to='/performance'><span className="menu-item" onClick={handleClick}>Performance<GrDocumentPerformance/></span></Link>
            <Link to='/positions'><span className="menu-item" onClick={handleClick}>Positions<AiOutlineStock/></span></Link>
            <Link to='/orderhistory'><span className="menu-item" onClick={handleClick}>Order History<FiActivity/></span></Link>
            <Link to='/trade'><span className="menu-item" onClick={handleClick}>Trade<BsArrowLeftRight/></span></Link>
            <Link to='/news'><span className="menu-item" onClick={handleClick}>News<FaNewspaper/></span></Link>
          </div>
        </div>
    </div>
  )
}
export default Nav