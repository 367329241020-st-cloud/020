import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/ProjectStyles';

const MARKETS = [
  { 
    id: '1', 
    title: 'ทองคำ (XAUUSD)', 
    desc: 'ตลาดสินค้าโภคภัณฑ์ยอดนิยม ผันผวนสูง เหมาะกับสายทำกำไรระยะสั้น',
    // ใช้รูป gold01
    image: require('../assets/gold01.webp'), 
    fullDetail: 'ทองคำ (XAUUSD) เป็นหนึ่งในสินทรัพย์ที่มีสภาพคล่องสูงที่สุดในโลก ได้รับความนิยมสูงเนื่องจากมีความผันผวนของราคากว้าง เหมาะกับการทำกำไรทั้งฝั่ง Buy และ Sell ในระยะสั้น'
  },
  { 
    id: '2', 
    title: 'ตลาดอัตราแลกเปลี่ยน (Forex)', 
    desc: 'การเทรดคู่เงินสากล เช่น EUR/USD, GBP/USD เปิดทำการ 24 ชม.',
    // ใช้รูป images (1)
    image: require('../assets/images1.jpg'), 
    fullDetail: 'ตลาด Forex เป็นตลาดการเงินที่ใหญ่ที่สุดในโลก ทำการแลกเปลี่ยนสกุลเงินหลัก เช่น EUR/USD, GBP/USD, USD/JPY เปิดทำการตลอด 24 ชั่วโมง ตั้งแต่วันจันทร์ถึงวันศุกร์'
  },
  { 
    id: '3', 
    title: 'สินทรัพย์ดิจิทัล (Crypto)', 
    desc: 'การเทรดบิตคอยน์และอัลต์คอยน์ที่เปิดเทรดได้ตลอด 24/7',
    // ใช้รูป shutterstock_bitcoin-crypto
    image: require('../assets/shutterstock_bitcoin-crypto.jpg'), 
    fullDetail: 'สินทรัพย์ดิจิทัล หรือ คริปโทเคอร์เรนซี (เช่น BTC, ETH) ตลาดเปิดทำการตลอด 24 ชั่วโมง 7 วันต่อสัปดาห์ มีความผันผวนสูงและใช้เทคโนโลยีบล็อกเชนในการประมวลผล'
  },
];

export default function MarketScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>🌏 สินทรัพย์ & ประเภทตลาด</Text>
      <FlatList
        data={MARKETS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.card}
            onPress={() => navigation.navigate('Detail', { lesson: item })}
          >
            <Text style={globalStyles.cardTitle}>{item.title}</Text>
            <Text style={globalStyles.cardSubtitle}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}