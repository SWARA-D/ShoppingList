import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import ShoppingItem from './components/shoppingItem'
import AddItem from './components/addItem';

export default function App() {
  const [items, setItems] = useState([
    { name: 'Butter', quantity: '100gm', key: '1'}
    ])

    const submitHandler = (name, quantity) => {
      if(name.length > 1 && quantity.length > 1)
      {
        setItems((prevItems) => {
          return [
            {name: name , quantity: quantity, key: Math.random().toString()},
            ...prevItems
          ];
        })
      }
      else {
        Alert.alert('OOPS!', 'Name and/or Quantity cannot be empty.', [
          {text: 'Understood'}
        ])
      }
    }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddItem submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={items}
              renderItem={({ item }) => (
                <ShoppingItem item = {item}/>
              )}
              />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: '#ffebcd'
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
