import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { getColorByLetter } from '../utils/index';

export default function ContactsCard({ contactInfo }) {
   const { firstName } = contactInfo
   const color = '#898989'
   
   // console.log(contactInfo);
   return (
      <View style={styles.card}>
         <View style={styles.infoContainer}>
            <View style={{...styles.icon, backgroundColor: color}}>
                <Text style={styles.iconContent}>{}</Text> 
            </View>
            <Text style={styles.primaryText}>{firstName}</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   card: {
      padding: 10,
      margin: 5
   },
   infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5
   },
   primaryText: {
      fontSize: 18
   },
   iconContent: {
      flex: 1,
      paddingVertical: 5,
      fontSize: 24,
      color: 'white',
      marginHorizontal: 10
   },
   icon:{
      borderRadius: 25,
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15,
      padding: 1,
      backgroundColor: 'green'
   }
})