import { Text , View , StyleSheet } from "react-native";

export default function about() {
    return (
        <View style={style.container}>
            <Text style={style.text}>About</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#327fa8'
    },
    text : {
        color:'#fff',
        fontSize: 20 ,
        fontWeight : 800
    }
});