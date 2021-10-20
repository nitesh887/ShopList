import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../actions/Action'
import "bootstrap/dist/css/bootstrap.min.css"
import "./home.css"
import shortid from 'shortid'
import { useHistory } from 'react-router-dom'
import Dropdownn from './dropdown'
import Cat from './dropdown'
import { TextField, MenuItem } from "@material-ui/core";


const AddShop = () => {



  const history = useHistory();
  const dispatch = useDispatch();

  const [shopName, setShopName] = useState("")
  const [opening, setOpening] = useState()
  const [closing, setClosing] = useState()
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")


  const handleSelect = (e) => {
    console.log(e);
    setLocation(e)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const new_list = {
      id: shortid.generate(),
      name: shopName,
      opening,
      closing,
      area: location,
      category,
    }
    dispatch(addList(new_list));
    history.push("/")
    console.log(location);
  }


  return (

    <>
      <h1>Add a Shop</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>

          <label >Input Shop name</label>
          <input className="location"
            type="text"
            value={shopName}
            onChange={e => setShopName(e.target.value)}
            placeholder="eg: kirana store" />
        </div>

        <div>

          <label >opening date</label>
          <input className="location"
            type="date"
            value={opening}
            onChange={e => setOpening(e.target.value)}
          />
        </div>

        <div>

          <label >closing date</label>
          <input className="location"
            type="date"
            value={closing}
            onChange={e => setClosing(e.target.value)} />
        </div>

        <div className="settings__select">

          <label className="location">Select Location</label>
          <TextField
            select
            label="Select Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {

              Dropdownn.map((cat) => (
                <MenuItem key={cat.areaa}
                  value={cat.value}
                >
                  {cat.areaa}

                </MenuItem>
              ))
            }

          </TextField>



        </div>

        <div className="settings__select">

          <label className="location">Select Category</label>
          <TextField
            select
            label="Select Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem key="Grocery" value = "Grocery">

              Grocery
            </MenuItem>
            <MenuItem value = "Butcher">

              Butcher
            </MenuItem>
            <MenuItem value = "Bakery">

              Bakery
            </MenuItem>
            <MenuItem value = "Chemist">

              Chemist
            </MenuItem>
            <MenuItem value = "Stationary">

              Stationary
            </MenuItem>



          </TextField>



        </div>


        <button className="primary">Add a Shop</button>

      </form>

    </>
  )
}

export default AddShop
