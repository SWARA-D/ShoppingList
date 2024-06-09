import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddItem({submitHandler}) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const changeNameHandler = (val) => {
        setName(val);
    }

    const changeQuantityHandler = (val) => {
        setQuantity(val);
    }

    return(
        <View>
        <TextInput 
            style = {styles.input}
            placeholder='item name...'
            onChangeText={changeNameHandler}
        />
        <TextInput 
            style = {styles.input}
            placeholder='item quantity...'
            onChangeText={changeQuantityHandler}
        />
        <Button onPress={() => submitHandler(name, quantity)} title='add item' color='#a52a2a' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})