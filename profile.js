import { ScrollView, StyleSheet, TextInput, Text, View, Style, TouchableOpacity, Alert } from 'react-native';
import styles from './Style';

const Profile = ({ navigation }) => {
    return (
        <ScrollView >
            <View style={styles.profilepage} >
                <TouchableOpacity style={styles.  signout} onPress={() => { navigation.navigate('WELCOME') }}>
                    <Text style={{ color: "#ffff" }}>
                        Sign out
                    </Text>
                </TouchableOpacity>
                <View style={styles.profile1}>
                    <Text style={styles.profiletext1}>Welcome to profile</Text>
                </View>
            </View>
        </ScrollView>




    );

};
export default Profile;