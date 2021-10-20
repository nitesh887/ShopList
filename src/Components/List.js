import React from 'react'
import {FaEdit,FaRemoveFormat} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { deleteShop } from '../actions/Action'
import { useDispatch } from 'react-redux'

import "../App.css"

const List = ({ shops }) => {
    const {id}= shops
    const dispatch = useDispatch()
    return (

        <tr>
            <th scope="row">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </th>
            <td>{shops.name}</td>
            <td>{shops.area}</td>
            <td>{shops.category}</td>
            <td>{shops.opening}</td>
            <td>{shops.closing}</td>
            <td></td>
            <td >  <Link to= {`/editshop/:${id}`}  className=" text-dark act"><FaEdit/></Link> 
            <span onClick={()=>dispatch(deleteShop(id))} ><FaRemoveFormat className="text-danger  act"/></span> 
            </td>
        </tr>

    )
}

export default List
