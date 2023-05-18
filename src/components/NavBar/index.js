import './index.css'

const NavBar = prop => {
  const {score, timer} = prop
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="log-size"
      />
      <ul className="nav-menu">
        <li>
          <p className="score-heading">
            Score: <span className="score">{score}</span>
          </p>
        </li>

        <li className="timer-container">
          <img
            className="timer-img"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="score">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
