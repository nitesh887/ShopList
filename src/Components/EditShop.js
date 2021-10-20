import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addList ,editList } from '../actions/Action'
import "bootstrap/dist/css/bootstrap.min.css"
import "./home.css"
import shortid from 'shortid'
import { useHistory } from 'react-router-dom'
import Dropdownn from './dropdown'
import Cat from './dropdown'
import { TextField, MenuItem } from "@material-ui/core";
import { useParams } from 'react-router-dom'


const EditShop = () => {

let {id} =useParams();

  const history = useHistory();
  const dispatch = useDispatch();
const edits = useSelector(state=>state.shops.edits)
  const [shopName, setShopName] = useState("")
  const [opening, setOpening] = useState()
  const [closing, setClosing] = useState()
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")


  const handleSelect = (e) => {
    console.log(e);
    setLocation(e)
  }

  useEffect(() => {
    if (edits != null) {
      setShopName(edits.name);
      setOpening(edits.opening);
      setClosing(edits.closing);
      setLocation(edits.location);
      setCategory(edits.category);
    }
    dispatch(editList(id));
  }, [edits]);

  const handleSubmit = e => {
    e.preventDefault()
    const update_list = Object.assign(edits,{ name: shopName,
        opening,
        closing,
        area: location,
        category,})
     
     

    dispatch(addList(update_list));
    history.push("/")
    
  }


  return (

    <>
      <h1>Edit a Shop</h1>
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


        <button className="primary">Make Changes</button>

      </form>

    </>
  )
}

export default EditShop
