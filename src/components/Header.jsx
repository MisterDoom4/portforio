import '../css/Header.css'
function Header() {
    return (
        <>
            <div id="cabecalho">
                <figure className='figura'>
                    <img src="https://static.wixstatic.com/media/94b54e_b7dad22513964731bf8a2a2fabc09890~mv2.png/v1/fill/w_212,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AEW-Official-Logo-2021.png" alt="logo" className="logo" />
                </figure>
        
                <ul className="nav justify-content-center my_nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" role="button" aria-expanded="false">
                    Roster
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/listAll">Wrestlers</a></li>
                    <li><a className="dropdown-item" href="/listAllTags">Tag Team</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                    Ranks
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/showRank?main=true&genre=M">Wrestler</a></li>
                    <li><a className="dropdown-item" href="/showRankTag?genre=M">Tag</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                    Match
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/pagmatch">Wrestler</a></li>
                    <li><a className="dropdown-item" href="/pagmatchTag">Tag</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <form action="/reset" method="POST">
                    <button className ="btn btn-outline-success my-2 my-sm-0" id="reset" type="submit">Reset</button>
                    </form>
                </li>
                </ul>
        </div>
    </>
    )
}

export default Header