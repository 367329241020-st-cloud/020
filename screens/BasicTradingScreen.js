import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/ProjectStyles';

const BASIC_LESSONS = [
  { 
    id: '1', 
    title: '1. การอ่านกราฟแท่งเทียน (Candlestick)', 
    desc: 'เรียนรู้เรื่องราคาเปิด ราคาปิด และเนื้อเทียน',
    image: require('../assets/photo.jpg'),
    fullDetail: 'กราฟแท่งเทียนบอกความเคลื่อนไหวของราคาในแต่ละช่วงเวลา โดยประกอบด้วย แท่งเขียว (ราคาปิดสูงกว่าราคาเปิด = ฝั่งซื้อชนะ) และ แท่งแดง (ราคาปิดต่ำกว่าราคาเปิด = ฝั่งขายชนะ) ไส้เทียนบนและล่างบอกราคาสูงสุดและต่ำสุดของการเทรดในรอบนั้นๆ'
  },
  { 
    id: '2', 
    title: '2. ทำความเข้าใจ Pip & Lot Size', 
    desc: 'วิธีคำนวณการเปลี่ยนแปลงของราคาและขนาดสัญญา',
    image: require('../assets/photo1.jpg'),
    fullDetail: 'Pip (Percentage in Point) คือหน่วยวัดการขยับของราคา เช่น EURUSD ขยับจาก 1.0800 เป็น 1.0801 นับเป็น 1 Pip ส่วน Lot Size คือขนาดสัญญาการเทรด เช่น 1.0 Standard Lot = $10/pip, 0.1 Mini Lot = $1/pip และ 0.01 Micro Lot = $0.10/pip'
  },
  { 
    id: '3', 
    title: '3. การวาง Stop Loss (SL) & Take Profit (TP)', 
    desc: 'วินัยการบริหารความเสี่ยงเพื่อตัดขาดทุนและล็อกกำไร',
    image: require('../assets/Stop-Loss-Order-Example.png'),
    fullDetail: 'Stop Loss (SL) คือคำสั่งตัดขาดทุนอัตโนมัติเมื่อราคาขยับไปผิดทาง เพื่อปกป้องพอร์ตไม่ให้ล้างพอร์ต ส่วน Take Profit (TP) คือคำสั่งปิดทำกำไรอัตโนมัติเมื่อราคาชนเป้าหมายที่วิเคราะห์ไว้ การตั้ง SL/TP ทุกครั้งช่วยให้เทรดได้อย่างมีวินัยและควบคุมความเสี่ยงได้ชัดเจน'
  },
];

export default function BasicTradingScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>📘 พื้นฐานการเทรด</Text>
      <FlatList
        data={BASIC_LESSONS}
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