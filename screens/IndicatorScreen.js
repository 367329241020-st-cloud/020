import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/ProjectStyles';

const INDICATORS = [
  { 
    id: '1', 
    title: 'RSI (Relative Strength Index)', 
    desc: 'เครื่องมือวัดภาวะการซื้อเกิน (Overbought) หรือขายเกิน (Oversold)',
    // ใช้รูป 0_4CFFr9Jo1BNUDQUI (หรือเปลี่ยนชื่อไฟล์ตามที่คุณอัปโหลดลงโฟลเดอร์ assets)
    image: require('../assets/0_4CFFr9Jo1BNUDQUI.png'), 
    fullDetail: 'RSI เป็นตัวชี้วัดที่มีกรอบ 0-100 หากค่าเกิน 70 ถือเป็นภาวะการซื้อมากเกินไป (Overbought) มีโอกาสปรับตัวลง ส่วนค่าต่ำกว่า 30 ถือเป็นภาวะขายมากเกินไป (Oversold) มีโอกาสกลับตัวขึ้น'
  },
  { 
    id: '2', 
    title: 'MACD (Moving Average Convergence Divergence)', 
    desc: 'ตัวชี้วัดทิศทางแนวโน้มและแรง momentum ของราคา',
    // ใช้รูป วิธีอ่านสัญญาณ-MACD
    image: require('../assets/MACD.webp'), 
    fullDetail: 'MACD ใช้ดูความสัมพันธ์ของเส้นค่าเฉลี่ย 2 เส้น เมื่อเส้น MACD ตัดเส้น Signal ขึ้นจะเป็นสัญญาณซื้อ (Bullish) และเมื่อตัดลงจะเป็นสัญญาณขาย (Bearish)'
  },
  { 
    id: '3', 
    title: 'Moving Average (MA)', 
    desc: 'เส้นค่าเฉลี่ยเคลื่อนที่เพื่อหาแนวรับ-แนวต้าน',
    // ใช้รูป images
    image: require('../assets/images.jpg'), 
    fullDetail: 'Moving Average (MA) ช่วยกรองความผันผวนของราคาเพื่อแสดงทิศทางแนวโน้มหลัก นิยมใช้เส้น EMA 20, 50, 200 เพื่อดูแนวรับ-แนวต้านและจุดเข้าเทรด'
  },
];

export default function IndicatorScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>📊 เครื่องมือวิเคราะห์ (Technical)</Text>
      <FlatList
        data={INDICATORS}
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