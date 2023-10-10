import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
const ChooseColorScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const [img, setImg] = useState(require('../assets/1.png'))
  const { updateImage } = route.params || {};
  // console.log('updateImage >>>>', updateImage)
  return (
    <View style={{marginTop: 50}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Quay lại</Text>
      </TouchableOpacity>
      <View style={{display: 'flex'}}>
        <Image 
        style={{width: 125, height: 125}}
        source={img} ></Image>
        <Text>Điện thoại Vsmart chính hãng</Text>
      </View>
      <View>
        <Text>Chọn một màu bên dưới</Text>
        <View>
          <Pressable 
          onPress={() => {
            updateImage(require('../assets/2.png'))
            setImg(require('../assets/2.png'))
          }}
          style={{width: 45, height: 45, backgroundColor: 'cyan', margin: 4}}
          ></Pressable>
          <Pressable 
          style={{width: 45, height: 45, backgroundColor: 'red', margin: 4}}
          onPress={() => {
            updateImage(require('../assets/3.png'))
            setImg(require('../assets/3.png'))
          }}
          ></Pressable>
          <Pressable
          onPress={() => { 
            updateImage(require('../assets/1.png'))
            setImg(require('../assets/1.png'))
          }}
          style={{width: 45, height: 45, backgroundColor: 'black', margin: 4}}
          ></Pressable>
          <Pressable 
          onPress={() => { 
            updateImage(require('../assets/4.png'))
            setImg(require('../assets/4.png'))
          }}
          style={{width: 45, height: 45, backgroundColor: 'blue', margin: 4}}
          ></Pressable>
        </View>
      </View>
      <TouchableOpacity
      style={{width:300, height:44, backgroundColor:'red', marginLeft: 30,
      display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40}}
      onPress={() => navigation.navigate('Home')}
      >
        <Text style={{color: 'white'}}>XONG</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChooseColorScreen