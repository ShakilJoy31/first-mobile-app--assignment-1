import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.repo}>
                <Text>Repos</Text>
                <Text style={[styles.informationNumber, styles.individual8]}>8</Text>
            </View>


            <View style={styles.follower}>
                <Text>Followers</Text>
                <Text style={styles.informationNumber}>39938</Text>
            </View>


            <View style={styles.following}>
                <Text>Following</Text>
                <Text style={[styles.informationNumber, styles.individual]}>9</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        backgroundColor: 'rgba(225, 225, 225, 0.663)',
        padding: 20,
        borderRadius: 5,
    },
    informationNumber:{
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        flexDirection: 'row',
    },
    individual:{
        marginLeft: 22
    },
    individual8:{
        marginLeft: 13
    },
    repo: {

    }
});
