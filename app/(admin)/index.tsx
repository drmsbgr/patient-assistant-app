import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function AdminDashboardScreen() {
    const stats = [
        { id: 1, title: 'Toplam Hasta', value: '1,245', icon: '👥', color: '#0ea5e9' },
        { id: 2, title: 'Aktif Semptom Kaydı', value: '842', icon: '📝', color: '#10b981' },
        { id: 3, title: 'Yeni Deneyimler', value: '15', icon: '💭', color: '#8b5cf6' },
    ];

    return (
        <ScrollView className="flex-1 bg-background pt-12">
            <View className="px-6 pb-20">
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-3xl font-bold text-slate-800">Yönetim Paneli</Text>
                    <TouchableOpacity
                        className="bg-slate-200 px-4 py-2 rounded-full"
                        onPress={() => router.replace('/(tabs)')}
                    >
                        <Text className="text-slate-700 font-bold">Çıkış</Text>
                    </TouchableOpacity>
                </View>

                {/* Stats Grid */}
                <View className="flex-row flex-wrap justify-between mb-8">
                    {stats.map((stat) => (
                        <View
                            key={stat.id}
                            className="w-[48%] bg-surface rounded-2xl p-4 shadow-sm border border-gray-100 mb-4"
                        >
                            <View className="w-10 h-10 rounded-full items-center justify-center mb-3" style={{ backgroundColor: `${stat.color}20` }}>
                                <Text className="text-xl">{stat.icon}</Text>
                            </View>
                            <Text className="text-2xl font-bold text-text mb-1">{stat.value}</Text>
                            <Text className="text-textSoft text-xs font-medium">{stat.title}</Text>
                        </View>
                    ))}
                </View>

                {/* Admin Navigation */}
                <Text className="text-text font-bold text-xl mb-4">Hızlı İşlemler</Text>
                <View className="space-y-4">
                    <TouchableOpacity
                        className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 flex-row items-center"
                        onPress={() => router.push('/(admin)/users')}
                    >
                        <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center mr-4">
                            <Text className="text-xl">👤</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="text-text font-bold text-lg">Kullanıcı Yönetimi</Text>
                            <Text className="text-textSoft text-sm">Hasta profillerini ve yetkileri düzenle</Text>
                        </View>
                        <Text className="text-textSoft font-bold">{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 flex-row items-center"
                        onPress={() => router.push('/(admin)/content')}
                    >
                        <View className="w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mr-4">
                            <Text className="text-xl">📚</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="text-text font-bold text-lg">İçerik Yönetimi</Text>
                            <Text className="text-textSoft text-sm">Makale ve bilgilendirme yazılarını ekle/düzenle</Text>
                        </View>
                        <Text className="text-textSoft font-bold">{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 flex-row items-center"
                    >
                        <View className="w-12 h-12 rounded-full bg-warning/10 items-center justify-center mr-4">
                            <Text className="text-xl">🚨</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="text-text font-bold text-lg">Duyuru Yönetimi</Text>
                            <Text className="text-textSoft text-sm">Sistem geneli bildirimler ve uyarılar</Text>
                        </View>
                        <Text className="text-textSoft font-bold">{'>'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
