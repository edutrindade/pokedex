import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={{ fontSize: 40 }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
