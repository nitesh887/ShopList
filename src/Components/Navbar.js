import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"


const Navbar = () => {
    return (
        <>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">ShopList</a>


                    <div className="d-flex">

                        <Link to="addshop" className="btn btn-light" >Add Shop</Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
