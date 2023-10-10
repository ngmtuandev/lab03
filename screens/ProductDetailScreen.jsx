import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const ProductDetailScreen = () => {
  // console.log()
    const navigation = useNavigation()
    const [imgCurr, setImgCurr] = useState(require('../assets/1.png'))
    // useEffect(() => {
    //   setImgCurr(require(data?.route?.params?.uri))
    // }, [])
    const updateImage = (newImageSource) => {
      setImgCurr(newImageSource);
    };
  return (
    <View style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
        <View>
          <Image
          source={imgCurr}
          style={{width: 300, height: 300, marginLeft: 30}}
          />
        </View>
        <Text style={{fontWeight: 500, fontSize: 22}}>Điện thoại Vsmart JOY - Chính hãng</Text>
        <View className='flex-row' style={{marginBottom: 20, marginTop: 30}}>
          <View className='flex-row'>
            <Image 
            // style={{width: '25px', height: '25px'}}
            source={require('../assets/star.png')}/>
            <Image 
            // style={{width: '25px', height: '25px'}}
            source={require('../assets/star.png')}/>
            <Image 
            // style={{width: '25px', height: '25px'}}
            source={require('../assets/star.png')}/>
            <Image 
            // style={{width: '25px', height: '25px'}}
            source={require('../assets/star.png')}/>
            <Image 
            // style={{width: '25px', height: '25px'}}
            source={require('../assets/star.png')}/>
          </View>
          <Text style={{marginLeft: 10, marginTop: 3,fontWeight: 600 , fontSize: 18}}>(Xem đánh giá)</Text>
        </View>
        <View className='flex-row'>
          <Text style={{fontWeight: 500, fontSize: 21}}>1.790.000 đ</Text>
          <Text style={{textDecorationLine: 'line-through', fontSize: 18, marginTop: 2, marginLeft: 10}}>2.000.000 đ</Text>
        </View>
        <Text style={{color: 'red', fontWeight: 500, marginTop: 10}}>Ở đâu rẻ hơn hoàn tiền</Text>
      <TouchableOpacity 
      style={{width:300, height:44, backgroundColor:'red', marginLeft: 30,
      display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40}}
      onPress={() => navigation.navigate('Option', {updateImage, imgCurr})}>
        <Text style={{color: 'white'}}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductDetailScreen