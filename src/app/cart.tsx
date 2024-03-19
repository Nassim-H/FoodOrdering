import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, FlatList } from 'react-native';
import { useCart } from '@/providers/CartProvider';
import CartListItem  from '../components/CartListItem';
import { Stack } from 'expo-router';


const Cart = () => {
    const { items } = useCart();
    
    return (
        <View>
            <Stack.Screen options={{title: "My Cart"}} />
            <FlatList 
                data={items} 
                renderItem={({ item }) => <CartListItem cartItem={item}/>} 
                contentContainerStyle={{padding: 10, gap:10}}
            />

            <StatusBar style={Platform.OS == 'ios' ? 'light' : 'auto'} />
        </View>
    );
};

export default Cart;