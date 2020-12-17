import React from 'react'
import {View, StyleSheet, Text} from 'react-native'


export default props => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                Developed by ML Developer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        backgroundColor : '#EEE',
        alignItems : 'center',
        justifyContent : 'space-around',
        paddingTop : 2,
        paddingHorizontal : 20,

    },
    label : {
        fontSize :14,
        color : '#8ca3a3',
        fontWeight : 'bold'
    }
})