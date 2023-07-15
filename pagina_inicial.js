import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      </View>

  );
}
//box maior
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B2AED8",
    borderRadius: 17,
    alignSelf: "center",
    width: 337,
    height: 291,
   
  
  },
  shadowProp: {
    elevation: 120, 
    shadowColor: "black",    
  },
})

//box menor 

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C9C7E8",
    borderRadius: 15,
    alignSelf: "center",
    width: 276,
    height: 174,
   
  
  },
  shadowProp: {
    elevation: 20, 
    shadowColor: "darkorchid",    
    shadowOpacity: 0.8
  },
})

//box rodapé

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B2AED8",
    borderRadius: 49,
    alignSelf: "center",
    width: 353,
    height: 67,
   
  
  },
  shadowProp: {
    elevation: 20, 
    shadowColor: "black",    
    shadowOpacity: 0.8
  },
})
