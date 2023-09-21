
import { StyleSheet, Text, View,Style,TouchableOpacity, Alert } from 'react-native';
import styles from './Style';



 
const Welcomescreen=({navigation})=>{
  
    return(
        <View style={styles.startpage} >
            <Text style={styles.welcometext}>
                Welcome Back....!
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('LOGIN')}>
                <Text style={styles.loginbutton}>Login</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SIGNUP')}>
                <Text style={styles.signupbutton}>Signup</Text>
                </TouchableOpacity>
        </View>
    );

};
export default Welcomescreen;