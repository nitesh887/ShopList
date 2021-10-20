
import { ADD_SHOP, EDIT_SHOP, DELETE_SHOP } from "../Constant/types"



export const addList = (shopDetail) => {

    return {
        type: "ADD_SHOP",
        payload: shopDetail,
    }
}

export const editList = (id) => ({
    type: "EDIT_LIST",
    payload: id,
})

export const deleteShop = (id) => ({
    type: "DELETE_SHOP",
    payload: id
})
