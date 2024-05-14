import React, { useState, useEffect } from "react";
import {Text, FlatList, StyleSheet, View} from "react-native";

export default function Usuario() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("http://academico3.rj.senac.br/usuario");
    const data = await resp.json();
    console.log(data);
    setData(data);
  };

  
  useEffect(() => {
    fetchData();
  }, []);
  
  const renderItem = 
    ({ item }) => (
    <View style={styles.listItem}>
      <View style={{flex:1}}>
        <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, paddingBottom: 10}}>{item.usuario_nome}</Text>
        <Text style={{alignItems:"left"}}>E-mail: {item.usuario_email}</Text>
        <Text style={{alignItems:"left"}}>CPF: {item.usuario_cpf}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
          />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7'
      },
      listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"90%",
        flex:1,
        alignSelf:"center",
        flexDirection:"column",
        borderRadius:5
      },
  });