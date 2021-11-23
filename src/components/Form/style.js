import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   formContext:{
        flex: 1,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 30,
        marginTop: 30,
       
   },
   form:{
        width: "100%",
        height: "auto",
        paddingTop: 20,
   },
   formLabel:{
        color: "#000000",
        fontSize:18,
        paddingLeft:20,
   },
   input:{
       width: "90%",
       borderRadius: 50,
       backgroundColor: "#f6f6f6",
       height:40,
       margin: 12,
       paddingLeft:10,
      
   },
   button:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginLeft: 12,
    marginTop: 30,
    marginBottom:20,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#ff0043",
   },
   textButton:{
       fontSize:20,
       color:"#ffffff",
   },
   errorMessage:{
       fontSize:12,
       color:"red",
       fontWeight: "bold",
       paddingLeft: 20,
   },
   exibitionResultImc:{
        width: "100%",
        height: "50%",
   },
   listImc:{
        marginTop: 20,
   },
   resultImcItem:{
        fontSize: 24,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
  },
   textResultItemLits:{
        fontSize: 20,
        color: "red",
   }
});

export default styles;