import { ADD_SHOP, DELETE_SHOP, EDIT_SHOP } from "../Constant/types";




const initialState = {

    shops: [
        {
            "id": 1,
            "name": "Raj Kirana",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "area": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "area": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
       
    ],
    edits: null,


}







export const shopReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_SHOP":

            return {
                ...state,
                shops: [action.payload, ...state.shops],
            }

        case "EDIT_SHOP":

            let arr = state.shops.filter(shops => shops.id == action.payload);
            arr = arr.values();
            for (let val of arr) {
                arr = val;
            }

            return {
                ...state,
                edits: arr,

            }

            case DELETE_SHOP: 
            return{

                ...state, 
                shops:state.shops.filter(shops=>shops.id != action.payload)
            }
        default:

            return state;

    }
}
