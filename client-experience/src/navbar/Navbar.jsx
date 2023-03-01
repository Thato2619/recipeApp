import './navbar.css';

export default function Navbar() {
  return (
    <div className='nav-top'>
        <div className="nav-left">
            <h1>WeKnowYouHungry</h1>
        </div>
        <div className="nav-centre">

            <form action="">
            <input
            type="text"
            placeholder="search here"
            />
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            </form>
            
        </div>
        <div className="nav-right">
            <ul className='nav-list'>
                <li className='nav-list-items'>HOME</li>
                <li className='nav-list-items'>CONTACT</li>
                <li className='nav-list-items'>WRITE</li>
                <li className='nav-list-items'>LOGOUT</li>
            </ul>
        </div>
    </div>
  )
}
