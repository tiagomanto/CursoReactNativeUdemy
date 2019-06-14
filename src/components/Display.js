import React from 'react'
import {
    StyleSheet,
    Text,
    Views,
}from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex:1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end', //alinhar a direita
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',

    }
})

export default props =>

    <Views style={styles.display}>
        <Text style={styles.displayValue} 
        numberOfLines={1}>{props.value}></Text>
    </Views>