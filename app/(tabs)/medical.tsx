import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const testResults = [
    { id: 1, date: '15 Mart 2024', type: 'Tam Kan Sayımı', status: 'Normal', color: '#10b981' },
    { id: 2, date: '28 Şubat 2024', type: 'CEA (Karsinoembriyonik Antijen)', status: 'İnceleme Gerekli', color: '#f59e0b' },
    { id: 3, date: '10 Ocak 2024', type: 'Biyokimya', status: 'Normal', color: '#10b981' },
];

export default function MedicalScreen() {
    return (
        <ScrollView className="flex-1 bg-background pt-12">
            <View className="px-6 pb-20">
                <Text className="text-3xl font-bold text-primary mb-6">Tıbbi Takip</Text>

                {/* Quick Actions */}
                <View className="flex-row justify-between mb-8">
                    <TouchableOpacity className="flex-1 bg-surface rounded-2xl p-4 shadow-sm border border-gray-100 mr-2 items-center">
                        <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mb-2">
                            <Text className="text-xl">🩺</Text>
                        </View>
                        <Text className="text-text font-bold text-center">Uzmana Sor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 bg-surface rounded-2xl p-4 shadow-sm border border-gray-100 ml-2 items-center">
                        <View className="w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-2">
                            <Text className="text-xl">💊</Text>
                        </View>
                        <Text className="text-text font-bold text-center">İlaç Takvimi</Text>
                    </TouchableOpacity>
                </View>

                {/* Latest Test Results */}
                <View className="flex-row justify-between items-end mb-4">
                    <Text className="text-text font-bold text-xl">Son Kan Tahlilleri</Text>
                    <TouchableOpacity>
                        <Text className="text-primary font-medium">Tümünü Gör</Text>
                    </TouchableOpacity>
                </View>

                <View className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    {testResults.map((result, index) => (
                        <TouchableOpacity
                            key={result.id}
                            className={`p-4 flex-row justify-between items-center ${index !== testResults.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <View>
                                <Text className="text-text font-bold mb-1">{result.type}</Text>
                                <Text className="text-textSoft text-xs">{result.date}</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Text className="text-xs font-bold mr-2" style={{ color: result.color }}>
                                    {result.status}
                                </Text>
                                <Text className="text-textSoft font-bold">{'>'}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Doctor AI / Recommendations */}
                <Text className="text-text font-bold text-xl mb-4">Size Özel Öneriler</Text>
                <View className="bg-primary/5 rounded-2xl p-5 border border-primary/20">
                    <Text className="text-primary font-bold mb-2">💡 Günlük İpucu</Text>
                    <Text className="text-text leading-5">
                        Son 3 gündür "Yorgunluk" belirtisi kaydetmişsiniz. Bol sıvı tüketmeye ve gün içinde kısa dinlenme araları vermeye özen gösterin. Eğer devam ederse doktorunuzla iletişime geçin.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
