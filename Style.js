import { StyleSheet,} from 'react-native';

const styles = StyleSheet.create({

    loginpage: {
        backgroundColor: 'skyblue',
        marginTop: 60,
        marginHorizontal: 10,
        borderTopEndRadius: 90,
        borderBottomLeftRadius: 90,
        height: 650
    },
    startpage: {
        flex: 1,
        backgroundColor: 'skyblue',

    },
    welcometext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        paddingTop: 300,
        paddingLeft: 50
    },
    loginbutton: {
        backgroundColor: 'orange',
        padding: 20,
        margin: 20,
        borderRadius: 20,
        textAlign: 'center'
    },
    signupbutton: {
        backgroundColor: 'grey',
        padding: 20,
        margin: 20,
        borderRadius: 20,
        textAlign: 'center'
    },
    welcomepagetext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        top: 50,
        left: 20,
        padding: 60
    },
    usernametext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        top: 20

    },
    placeholder: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        margin: 30,
        marginVertical: 30,
        fontSize: 20,
        top: 1


    },
    btn: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        alignItems: 'center'
    },
    forgot: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 310,
        color: '#E55451'
    },
    //signup
    Signup: {
        backgroundColor: "skyblue",
        height: 800,
    },
    creacc: {
        fontSize: 30,
        fontWeight: "bold",
        margin:10

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    creat: {
        backgroundColor: "orange",
        height: 40,
        width: "80%",
        borderRadius: 100,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20
    },
    bg: {
        backgroundColor: "#ffff",
        padding: 30,
        height: "80%",
        marginTop: 40,
        marginHorizontal: 10,
        borderTopLeftRadius: 80,
        borderBottomEndRadius: 80,
    },
    //"PROFILE"
    profilepage: {
        backgroundColor: "lightblue",
        height: 800,
        width: "100%",

    },
    profile1: {
        backgroundColor: "orange",
        height: "30%",
        width: "80%",
        marginHorizontal: 40,
        marginTop: 10,
        borderRadius: 110,
        alignItems: "center",
        justifyContent: "center",
    },
    profiletext1: {
        fontWeight: "bold",
        fontSize: 50,
    },
    signout: {
        backgroundColor: "blue",
        marginLeft: "80%",
        marginRight: 10,
        marginTop: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }
});
export default styles;