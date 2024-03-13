import { StyleSheet, View } from 'react-native';
import Heading from './components/Heading';
import LoremComponent from './components/LoremComponent';
import Information from './components/Information';
import TheLinks from './components/TheLinks';

export default function App() {
  return (
    <View style={styles.container}>
      <Heading></Heading>
      <LoremComponent></LoremComponent>
      <Information></Information>
      <TheLinks></TheLinks>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
});
