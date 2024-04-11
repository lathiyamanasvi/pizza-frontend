import { Axios } from "axios";
import React, { useState } from "react";

const Admin_Add = () => {
    const [foodData, setFoodData] = useState([]);
    const [foodName, setFoodName] = useState('');
    const [foodImage, setFoodImage] = useState(null);
    
    
    const Food_Add = async() => {
       let rec=await Axios.get(`http://localhost:8000/foodAdd`)
        .then((res)=>{
            // setFoodData(res.data);
            console.log(res.record);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    return (
        <table border={1}>
            
        </table>
    )
}

export default Admin_Add;