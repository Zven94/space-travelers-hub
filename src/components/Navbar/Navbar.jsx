import { NavLink } from 'react-router-dom';
import logoPlanet from '../assets/image/logo-planet.png';

export default function Navbar() {
  return (
    <main className="nav">
      <header className="nav-header">
        <img src={logoPlanet} className="nav-logoPlanet" alt="logoPlanet" />
        <h2>Space Traveler`s Hub</h2>
        <lu>
          <li className="header-li">
            <NavLink to="/"> Rockets </NavLink>
            <NavLink to="/missions"> Missions</NavLink>
            <NavLink />
          </li>
        </lu>
      </header>
    </main>
  );
}
