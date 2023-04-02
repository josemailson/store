import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [shop, setShop] = useState([]);
    
    useEffect(() => {
        listItens();
      }, []);

      const handleClickAdd = (idProduct, image, title, price) => {
        let array = localStorage.getItem("list");
        if (!array) {
          localStorage.setItem("list", JSON.stringify([]));
          array = [];
        } else {
          array = JSON.parse(array);
        }
    
        let existingItemIndex = array.findIndex(item => item.id === idProduct);
        if (existingItemIndex !== -1) {
          array[existingItemIndex].quantity += 1;
        } else {
          let newItem = {
            id: idProduct,
            image: image,
            title: title,
            price: price,
            quantity: 1,
          };
          array.push(newItem);
        }
    
        setShop(oldArray => [...array]);
        saveLocalStorage(array);
    };

    const handleClickRemove = (id,value)=>{
        let array = localStorage.getItem("list");
        if(!array){
            localStorage.setItem("list",JSON.stringify([]));
            array = [];
        } else {
            array = JSON.parse(array)
        }
        array.pop(array.id);
        setShop(oldArray => [...array]);
        saveLocalStorage(array);
    }

    const handleClickClearList = ()=>{
        let newArray = []
        setShop(oldArray => newArray);
        localStorage.removeItem("list");
    }

    const saveLocalStorage = (item)=>{
        let newArray = item;
        localStorage.setItem("list",JSON.stringify(newArray));
    }

    const listItens = () => {
        let array = localStorage.getItem("list")
        if(!array){
            localStorage.setItem("list",JSON.stringify([]));
            array = [];
        } else {
            array = JSON.parse(array)
        }
        setShop(oldArray => [...array]);
    }

    return (
        <CartContext.Provider value={{ handleClickAdd, handleClickRemove, handleClickClearList, saveLocalStorage, listItens, shop }}> 
            {children} 
        </CartContext.Provider>
    )
}