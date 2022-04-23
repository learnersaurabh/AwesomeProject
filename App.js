import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {

  return (<>
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>Restarting my mobile development</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto' />
  </>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: '#00ff00',
    marginTop: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
