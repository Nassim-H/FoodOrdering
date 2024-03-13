import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View , Image, FlatList} from 'react-native';


const ProductDetails = () => {

    const { id } = useLocalSearchParams();


    return (
        <View>
            <Stack.Screen options={{title: "Details " + id}} />

            <Text style={{ fontSize: 20}}>
                Coucou {id}  
            </Text>
        </View> 
    )
}
    
export default ProductDetails;