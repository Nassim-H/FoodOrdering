import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Text, View , Image} from 'react-native';


const ProductListItem = ({ product }) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: product.image}} style={styles.image}/>
        
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    );
  }

  export default ProductListItem;


  
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10, 
      },
  
  
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 10,
      textAlign: 'center',
  
  
    },
    
    price: {
      color: Colors.light.tint,
      fontWeight: 'bold',
      textAlign: 'center',
  
    },
  
    image: {
      width: '100%',
      aspectRatio: 1
    }
  });
  