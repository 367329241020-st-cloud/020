import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/ProjectStyles';

export default function DetailScreen({ route }) {
  const { lesson } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>{lesson.title}</Text>
      
      {lesson.image && (
        <Image
          source={lesson.image}
          style={globalStyles.detailImage}
          resizeMode="cover"
        />
      )}

      <Text style={[globalStyles.detailText, { fontWeight: 'bold', color: '#38BDF8', marginBottom: 8 }]}>
        {lesson.desc}
      </Text>
      
      {/* ดึงข้อความรายละเอียดตามบทเรียนที่ส่งมาแสดงตรงนี้ */}
      <Text style={globalStyles.detailText}>
        {lesson.fullDetail}
      </Text>
    </ScrollView>
  );
}