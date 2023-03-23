import '../styles/Header.css'
import logo from '../assets/americanas.png'

export default function Header() {
    return(
        <header>
            <div className="header-left">
                <img src={logo} alt="" height={30}/>
                <div>
                    <h1>Loja Online</h1>
                </div>
            </div>
        </header>
    )
}
