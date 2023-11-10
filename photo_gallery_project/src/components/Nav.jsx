import { NavLink,useNavigate } from 'react-router-dom';

function Nav(){
  const navigate = useNavigate();



  return (
    <nav className="main-nav">
      <ul>
      <li><NavLink to='/cats'>Cats</NavLink></li>
      <li><NavLink to='/dogs'>Dogs</NavLink></li>
      <li><NavLink to='/computers'>Computers</NavLink></li>

      </ul>
    </nav>
  );
}

export default Nav;