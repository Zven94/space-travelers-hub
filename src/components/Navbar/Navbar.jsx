import logoPlanet from '../assets/image/logo-planet.png'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <main className="nav">
      <header className="nav-header">
        <img src={logoPlanet} className='nav-logoPlanet'></img>
        <h2>Space Traveler's Hub</h2>
        <lu>
          <li className='header-li' >
            <NavLink to="/"> Rockets </NavLink>
            <NavLink to="/missions"> Missions</NavLink>
            <NavLink></NavLink>
          </li>
        </lu>
      </header>
    </main>
  )
}