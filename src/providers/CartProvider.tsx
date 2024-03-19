import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "crypto";

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
        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1
        };

        setItems([newCartItem, ...items])

    }

    // const updateQuantity: (itemId: string, amout: -1 | 1) => {
        
    // }


    return (
        <CartContext.Provider 
        value={{item: items, onAddItem: () => {addItem()}}}>
            {children}
        </CartContext.Provider>
    );
    };

export default CartProvider;

export const useCart = () => useContext(CartContext)