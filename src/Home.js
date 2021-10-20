import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux'
import List from './Components/List'


const Home = () => {

    const shops = useSelector(state => state.shops.shops)


    return (
        <div>
            <table class="table shadow container ">
                <thead style={{ backgroundColor: "#DC143C", color: "white" }}>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Shop Name</th>
                        <th scope="col">Area</th>
                        <th scope="col">Category</th>
                        <th scope="col">Opening</th>
                        <th scope="col">Closing</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shops.map((shops) => (
                           <List shops={shops} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home
