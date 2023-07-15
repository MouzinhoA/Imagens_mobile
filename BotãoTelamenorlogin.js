import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C9C7E8",
    borderRadius: 49,
    alignSelf: "center",
    width: 274,
    height: 56,
  
  },
  shadowProp: {
    elevation: 10, 
    shadowColor: "black",    
  },
})
