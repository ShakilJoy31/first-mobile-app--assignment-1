import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Heading() {
    return (
        <SafeAreaView>
            <View style={styles.container}>

                <Image
                    source={{ uri: "https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e" }}
                    style={styles.headingImage}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.headingText}>The October</Text>
                    <Text style={styles.aoctocat}>aoctocat</Text>
                    <Text style={styles.dateText}>Joined 25 Jan 2011</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    headingImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'red',
    },
    textContainer: {
        justifyContent: 'space-between',
        marginLeft: 20
    },
    headingText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    aoctocat: {
        color: 'blue',
        fontSize: 18,
    },
    dateText: {
        fontSize: 18,
        color: 'gray',
    }
});
