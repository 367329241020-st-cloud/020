import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/ProjectStyles';

export default function RiskCalcScreen() {
  const [balance, setBalance] = useState('');
  const [riskPercent, setRiskPercent] = useState('1');
  const [result, setResult] = useState(null);

  const calculateRisk = () => {
    const bal = parseFloat(balance);
    const risk = parseFloat(riskPercent);

    if (isNaN(bal) || isNaN(risk)) {
      Alert.alert('ข้อผิดพลาด', 'กรุณากรอกตัวเลขให้ถูกต้อง');
      return;
    }

    const maxLoss = (bal * risk) / 100;
    setResult(maxLoss);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>🧮 เครื่องมือคำนวณ Risk Management</Text>
      
      <Text style={{ color: '#94A3B8', marginBottom: 8 }}>เงินทุนในพอร์ต ($):</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="เช่น 1000"
        placeholderTextColor="#64748B"
        keyboardType="numeric"
        value={balance}
        onChangeText={setBalance}
      />

      <Text style={{ color: '#94A3B8', marginBottom: 8 }}>ความเสี่ยงต่อไม้ (%):</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="เช่น 1 หรือ 2"
        placeholderTextColor="#64748B"
        keyboardType="numeric"
        value={riskPercent}
        onChangeText={setRiskPercent}
      />

      <TouchableOpacity style={globalStyles.button} onPress={calculateRisk}>
        <Text style={globalStyles.buttonText}>คำนวณความเสี่ยง</Text>
      </TouchableOpacity>

      {result !== null && (
        <View style={[globalStyles.card, { marginTop: 24 }]}>
          <Text style={globalStyles.cardSubtitle}>จำนวนเงินที่ยอมเสียได้สูงสุดต่อไม้:</Text>
          <Text style={[globalStyles.cardTitle, { fontSize: 28, color: '#4ADE80', marginTop: 8 }]}>
            ${result.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
}