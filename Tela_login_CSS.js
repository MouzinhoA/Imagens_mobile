import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      
</View>
  );
}
//tela maior CSS
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B2AED8",
    borderRadius: 30,
    alignSelf: "center",
    width: 334,
    height: 545,
    flexShrink: 0,
    fill: "#B2AED8",
  },
  shadowProp: {
    elevation: 20, 
    shadowColor: "black",    
  },
});

//box de texto menor
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
//botao 1
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A8A3E1",
    borderRadius: 49,
    alignSelf: "center",
    width: 175,
    height: 64,
   
  
  },
  shadowProp: {
    elevation: 120, 
    shadowColor: "black",    
  },
})
