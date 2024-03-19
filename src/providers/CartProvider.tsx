import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem['size']) => void;
    // updateQuantity: (itemId: string, amout: -1 | 1) => void;


}



export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    // updateQuantity: () => {}
});

const CartProvider = ({ children }: PropsWithChildren) => {

    const  [items, setItems] = useState<CartItem[]>([])

    const addItem = (product: Product, size: CartItem['size']) => {
        console.log("addItem")



        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1
        };

        setItems([newCartItem, ...items])
        console.log('added to cart', newCartItem);

    }

    // const updateQuantity: (itemId: string, amout: -1 | 1) => {
        
    // }


    return (
        <CartContext.Provider 
        value={{items, addItem}}>
            {children}
        </CartContext.Provider>
    );
    };

export default CartProvider;

export const useCart = () => useContext(CartContext)