import { Text , StyleSheet , View } from "react-native";
import { Link } from "expo-router";

export default function index() {
    return (
        // แบบที่ 1
        // <Text style={{ color: 'red',fontSize:25 }}>Home</Text>
        // แบบที่2
        <View style={style.container}>
            <Text style={style.text}>Home</Text>
            <Link href={"/about"} style={style.button}>
                ไปหน้า About
            </Link>
        </View>
    ) ;
}

const style = StyleSheet.create({
    text : {
        color : 'red',
        fontSize : 20,
        fontWeight : 900,
    },
    container : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#32a877'
    },
    button : {
        fontSize : 10,
        color : "#fff"
    }

});