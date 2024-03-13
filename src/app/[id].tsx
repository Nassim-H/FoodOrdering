import { useLocalSearchParams } from 'expo-router';
import { Text, View , Image, FlatList} from 'react-native';


const ProductDetails = () => {

    const { id } = useLocalSearchParams();


    return (
        <View>
            <Text style={{ fontSize: 20}}>
                Coucou {id}  
            </Text>
        </View> 
    )
}
    
export default ProductDetails;