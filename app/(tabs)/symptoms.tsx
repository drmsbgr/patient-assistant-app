import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const feelings = [
  { id: 1, label: 'Çok İyi', emoji: '😄', color: '#10b981' },
  { id: 2, label: 'İyi', emoji: '🙂', color: '#0ea5e9' },
  { id: 3, label: 'Normal', emoji: '😐', color: '#f59e0b' },
  { id: 4, label: 'Kötü', emoji: '😞', color: '#f97316' },
  { id: 5, label: 'Çok Kötü', emoji: '😣', color: '#ef4444' },
];

const symptoms = [
  'Ağrı', 'Yorgunluk', 'Bulantı', 'İshal', 'Kabızlık', 'İştahsızlık', 'Uyku Problemi'
];

export default function SymptomsScreen() {
  const [selectedFeeling, setSelectedFeeling] = useState<number | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSave = () => {
    // Mock save
    alert('Günlüğünüz kaydedildi!');
  };

  return (
    <ScrollView className="flex-1 bg-background pt-12">
      <View className="px-6 pb-20">
        <Text className="text-3xl font-bold text-primary mb-2">Günlük Takip</Text>
        <Text className="text-textSoft mb-6">Bugün kendini nasıl hissediyorsun?</Text>

        {/* Feeling Selection */}
        <View className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 mb-6 font-primary">
          <Text className="text-text font-bold mb-4">Genel Durum</Text>
          <View className="flex-row justify-between">
            {feelings.map((feeling) => (
              <TouchableOpacity
                key={feeling.id}
                className={`items-center p-2 rounded-xl flex-1 mx-1 ${selectedFeeling === feeling.id ? 'bg-primary/10 border border-primary/30' : ''}`}
                onPress={() => setSelectedFeeling(feeling.id)}
              >
                <Text className="text-2xl mb-1">{feeling.emoji}</Text>
                <Text className="text-xs text-textSoft text-center" numberOfLines={1}>{feeling.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Symptoms Selection */}
        <View className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <Text className="text-text font-bold mb-4">Belirtiler (Varsa seçiniz)</Text>
          <View className="flex-row flex-wrap">
            {symptoms.map((symptom) => {
              const isSelected = selectedSymptoms.includes(symptom);
              return (
                <TouchableOpacity
                  key={symptom}
                  className={`px-4 py-2 rounded-full border mb-3 mr-3 ${isSelected
                      ? 'bg-primary border-primary'
                      : 'bg-transparent border-gray-200'
                    }`}
                  onPress={() => toggleSymptom(symptom)}
                >
                  <Text className={isSelected ? 'text-white font-medium' : 'text-text'}>
                    {symptom}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Additional Notes */}
        <View className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <Text className="text-text font-bold mb-4">Ek Notlar</Text>
          <TextInput
            className="bg-background border border-gray-200 rounded-xl p-4 text-text min-h-[100px]"
            placeholder="Doktorunuza bahsetmek istediğiniz diğer detaylar..."
            placeholderTextColor="#94a3b8"
            multiline
            textAlignVertical="top"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          className="bg-primary py-4 rounded-xl items-center shadow-sm"
          onPress={handleSave}
        >
          <Text className="text-white font-bold text-lg">Günlüğü Kaydet</Text>
        </TouchableOpacity>

        {/* Calendar Link - Mock */}
        <TouchableOpacity className="mt-6 items-center">
          <Text className="text-primary font-medium">Geçmiş Kayıtları Görüntüle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
