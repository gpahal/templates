import { StyleSheet, Text, View } from 'react-native';
import { NextPage } from 'next';

const App: NextPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo from Next.js!!!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
