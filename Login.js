import { ScrollView,StyleSheet, TextInput, Text, View, Style, TouchableOpacity, Alert } from 'react-native';
import styles from './Style';



const Loginscreen = ({navigation})=> {
   return (
      <ScrollView >

         <View style={styles.loginpage}>
            <Text style={styles.welcomepagetext}>
               LoginPage...!
            </Text>
            <View>
               <Text style={styles.usernametext}>UserName</Text>
               <TextInput style={styles.placeholder} 
               keyboardType='email-address'
               placeholder='Enter UserName'>
               </TextInput>
            </View>
            <View>
               <Text style={styles.usernametext}>
                  Password
               </Text>
               <TextInput style={styles.placeholder} secureTextEntry={true} placeholder='Enter Password'>
               </TextInput>
               <TouchableOpacity>
                  <Text style={styles.forgot} onPress={() => {}}>forgot.?</Text>
               </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('PROFILE')}>
               <Text>Login</Text>
            </TouchableOpacity>

         </View>
      </ScrollView>




   );

};
export default Loginscreen;