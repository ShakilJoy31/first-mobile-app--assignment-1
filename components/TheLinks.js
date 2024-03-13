import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.firstLink}>
                <Image
                    source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg" }}
                    style={styles.linkImage}
                />
                <Text style={{fontSize: 18}}>San Francisco</Text>
            </View>



            <View style={styles.firstLink}>
                <Image
                    source={{ uri: "https://cdn2.vectorstock.com/i/1000x1000/96/86/link-icon-vector-21679686.jpg" }}
                    style={styles.linkImage}
                />
                <Text style={{fontSize: 18}}>https://github.blog</Text>
            </View>



            <View style={styles.firstLink}>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/733/733635.png" }}
                    style={styles.linkImage}
                />
                <Text style={{fontSize: 18}}>Not Available</Text>
            </View>



            <View style={styles.firstLink}>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/602/602182.png" }}
                    style={styles.linkImage}
                />
                <Text style={{fontSize: 18}}>agithub</Text>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 30,
        gap: 20,
    },

    linkImage:{
        width: 30,
        height: 30
    },
    firstLink: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        gap: 20
    }
});
