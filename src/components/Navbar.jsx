
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav style={{ listStyle: "none" }} aria-label='breadcrumb' className='navbar   breadcrumb justify-content-evenly h4 col-12 bg-transparent border border-top-0   my-5'>

                <li className='mb-2'>
                    <a className='navbar-brand me-5' type="collapsible" href="#"><img style={{ height: '6vh' }} src="https://tse3.mm.bing.net/th?id=OIP.PaoVLnoxaxdVH03_rZDiVwAAAA&pid=Api&P=0&h=180" alt="" /></a>
                </li>
                <li className='py-2  breadcrumb-item'>
                    <NavLink style={{ textDecoration: "none", color: "black" }}

                        className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-primary" : ""}
                        to="/"  >All</NavLink>
                </li>
                <li className='py-2  breadcrumb-item'>
                    <NavLink style={{ textDecoration: "none", color: "black" }}
                        className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-primary" : ""}

                        to="/fsd">Full Stack Development</NavLink>
                </li>
                <li className='py-2  breadcrumb-item'>
                    <NavLink style={{ textDecoration: "none", color: "black" }}
                        className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-primary" : ""}
                        to="/ds">Data Science</NavLink>
                </li>
                <li className='py-2  breadcrumb-item'>
                    <NavLink style={{ textDecoration: "none", color: "black" }}
                        className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-primary" : ""}
                        to="/cs">Cyber Security</NavLink>
                </li>
                <li className='py-2  breadcrumb-item'>
                    <NavLink style={{ textDecoration: "none", color: "black" }}
                        className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-primary" : ""}
                        to="/career">Career</NavLink>
                </li>
            </nav>
        </>
    )
}

export default Navbar 