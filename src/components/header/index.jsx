import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <nav className="bg-white w-[80vw] h-10 m-auto mt-10 rounded-3xl flex">
            <img src="/images/phoenix.svg" className="ml-6" alt="" />
            <NavLink to="/films">Films</NavLink>
            <NavLink to="/livres">Livres</NavLink>
            <NavLink to="/musiques">Musiques</NavLink>
            <img src="/images/search.svg" className="ml-auto mr-10" alt="" />
        </nav>
    )
}