import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const mockContent = [
    { id: 1, title: 'Beslenme Rehberi', type: 'Makale', views: 1245 },
    { id: 2, title: 'Covid-19 Aşısı Güncellemesi', type: 'Duyuru', views: 342 },
    { id: 3, title: 'Egzersiz Önerileri', type: 'Makale', views: 56 },
];

export default function AdminContentScreen() {
    return (
        <ScrollView className="flex-1 bg-background pt-12">
            <View className="px-6 pb-20">
                <View className="flex-row items-center justify-between mb-8">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <View className="w-10 h-10 rounded-full bg-surface items-center justify-center border border-gray-200">
                            <Text className="text-xl font-bold text-text">{'<'}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-text flex-1">İçerikler</Text>
                    <TouchableOpacity className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Text className="text-primary font-bold">+ Ekle</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row mb-6">
                    <TouchableOpacity className="bg-primary px-4 py-2 rounded-full mr-2">
                        <Text className="text-white font-bold">Tümü</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-surface px-4 py-2 rounded-full border border-gray-200 mr-2">
                        <Text className="text-text font-bold">Makaleler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-surface px-4 py-2 rounded-full border border-gray-200">
                        <Text className="text-text font-bold">Duyurular</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-4">
                    {mockContent.map((item) => (
                        <View
                            key={item.id}
                            className="bg-surface rounded-2xl p-4 shadow-sm border border-gray-100 flex-row items-center justify-between mb-4"
                        >
                            <View className="flex-1 mr-4">
                                <View className="flex-row items-center mb-1">
                                    <View className={`px-2 py-0.5 rounded mr-2 ${item.type === 'Duyuru' ? 'bg-warning/10' : 'bg-primary/10'
                                        }`}>
                                        <Text className={`text-[10px] font-bold ${item.type === 'Duyuru' ? 'text-warning' : 'text-primary'
                                            }`}>{item.type}</Text>
                                    </View>
                                    <Text className="text-textSoft text-xs">{item.views} Görüntülenme</Text>
                                </View>
                                <Text className="text-text font-bold text-lg">{item.title}</Text>
                            </View>

                            <View className="flex-row">
                                <TouchableOpacity className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center mr-2">
                                    <Text className="text-slate-600">✏️</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="w-10 h-10 rounded-full bg-danger/10 items-center justify-center">
                                    <Text className="text-danger">🗑️</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
