import { defaultPizza } from '@/components/ProductListItem';
import products from '@assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View , Image, StyleSheet, Pressable} from 'react-native';
import { useState } from 'react';
import { getBackgroundColorAsync } from 'expo-system-ui';
import Button from '@/components/Button';
import { useCart } from '@/providers/CartProvider';
import { PizzaSize } from '@/types';

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];


const ProductDetails = () => {

    const { id } = useLocalSearchParams();
    
    const [selectedSize, setSelectSize] = useState<PizzaSize>('M');

    const product = products.find((p) => p.id.toString() === id);

    const {addItem} = useCart();

    const addToCart = () => {
        if (!product) {
            console.log('Product not found');
            return;
        }
        addItem(product, selectedSize);
        console.log('added to cart', addItem);
    }

    if (!product) {
        return <Text>Product not found</Text>
    }

    


    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product.name}} />
            
            <Image source={{ uri: product.image || defaultPizza}} style={styles.image} />
            
            <Text>Select size</Text>
            
            <View style={styles.sizes}>
            {sizes.map(size => (
                <Pressable 
                onPress={() => setSelectSize(size)}
                key={size} 
                style={[styles.size, {backgroundColor: selectedSize == size ?  'gainsboro' : 'white' } ]}>
                    
                    <Text style={[styles.sizeText, {color: selectedSize == size ? 'black' : 'gray'}]}>{size}</Text>
                
                </Pressable>)
                )}

            </View>


            <Text style={{ fontSize: 20}}>
                {product.price}€
            </Text>

                <Button text="Add to cart !" onPress={() => {addToCart()}} />

        </View> 
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    size: {
        backgroundColor: 'lightgrey',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
    
export default ProductDetails;