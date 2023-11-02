import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

const Comment = () => {
    const [commment, setComment] = useState([])
    
  return (
    <View
      className="bg-white flex-1 relative "
      contentContainerStyle={{ paddingBottom: 30 }}
    >
        
        <StatusBar style={"light"} />
        <View className="bg-white px-2 h-[45%]">
            <View className="flex flex-row gap-3 items-center">
                <Icon name="file-text-o" size={21} />
                <TextInput  className="py-4 w-[80%] px-5 bg-[#ccc] rounded-xl" placeholder='Bình luận món ăn...'/>
            </View>
            <Text className="mt-5">Bình luận</Text>
            <ScrollView  
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
            // className="h-[200px]"
            className="space-y-30"
    
        >
            <View className="flex flex-row items-center gap-5">
                <Image className="h-[50px] w-[50px]" source={require("../../../assets/images/login.png")}/>
                <Text>Ngon quá nè</Text>
            </View>
            <View className="flex flex-row items-center gap-5">
                <Image className="h-[50px] w-[50px]" source={require("../../../assets/images/login.png")}/>
                <Text>Ngon quá nè</Text>
            </View><View className="flex flex-row items-center gap-5">
                <Image className="h-[50px] w-[50px]" source={require("../../../assets/images/login.png")}/>
                <Text>Ngon quá nè</Text>
            </View>
        </ScrollView>
        </View>
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({})