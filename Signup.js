import { StyleSheet, Text, View, Style, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import styles from './Style';
import React, { useState } from 'react';


const Signupscreen = ({ navigation }) => {
   const [number, onChangeNumber] = React.useState('');
   const [email, setEmail] = React.useState('');
   const [name, setname] = React.useState('');
   const [dob, setdob] = React.useState('');
   const [Password, setpassword] = React.useState('');
   const [confirmpassword, setconfirmpassword] = React.useState('');
   const [showAlert, setShowAlert] = useState(false)
   return (
      <ScrollView >
         <View style={styles.Signup}>
            <View style={styles.bg}>
               <Text style={styles.creacc}>
                  Create a new accound
               </Text>
               <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
                  <TextInput
                     style={styles.input}
                     onChangeText={onChangeNumber}
                     value={number}
                     placeholder="Phone Number"
                     keyboardType="number-pad" />

                  <TextInput
                     style={styles.input}
                     onChangeText={setEmail}
                     value={email}
                     placeholder="Emailid"
                     keyboardType="email-address" />

                  <TextInput
                     style={styles.input}
                     onChangeText={setname}
                     value={name}
                     placeholder="Name" />
                  <TextInput
                     style={styles.input}
                     onChangeText={setdob}
                     value={dob}
                     placeholder="Date of birth(mm-dd-yyyy)"
                     keyboardType='numeric' />
                  <TextInput
                     style={styles.input}
                     value={Password}
                     onChangeText={setpassword}
                     placeholder="EnterPassword"
                     secureTextEntry={true} />
                  <TextInput
                     style={styles.input}
                     value={confirmpassword}
                     onChangeText={setconfirmpassword}
                     placeholder="Confirm Password"
                     secureTextEntry={true} />
               </View>
               <View>
                  <TouchableOpacity style={styles.creat} onPress={() => { setShowAlert(true); showAlert & navigation.navigate('LOGIN'); null }}><Text>Create</Text></TouchableOpacity>
               </View>
               {
                  showAlert && alert("Created Successfully")
               }
            </View>
         </View>
      </ScrollView>

   );

};
export default Signupscreen;