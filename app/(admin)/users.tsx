import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const mockUsers = [
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'Hasta', status: 'Aktif' },
    { id: 2, name: 'Ayşe Kaya', email: 'ayse@example.com', role: 'Hasta', status: 'Aktif' },
    { id: 3, name: 'Dr. Mehmet Demir', email: 'mehmet@example.com', role: 'Uzman', status: 'Aktif' },
];

export default function AdminUsersScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <ScrollView className="flex-1 bg-background pt-12">
            <View className="px-6 pb-20">
                <View className="flex-row items-center justify-between mb-6">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <View className="w-10 h-10 rounded-full bg-surface items-center justify-center border border-gray-200">
                            <Text className="text-xl font-bold text-text">{'<'}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-text flex-1">Kullanıcılar</Text>
                    <TouchableOpacity className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Text className="text-primary font-bold">+ Yeni</Text>
                    </TouchableOpacity>
                </View>

                {/* Search */}
                <View className="mb-6">
                    <TextInput
                        className="bg-surface border border-gray-200 rounded-xl p-4 text-text"
                        placeholder="İsim veya e-posta ile ara..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor="#94a3b8"
                    />
                </View>

                {/* Users List */}
                <View className="bg-surface rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {mockUsers.map((user, index) => (
                        <View
                            key={user.id}
                            className={`p-4 flex-row items-center ${index !== mockUsers.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <View className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center mr-3">
                                <Text className="text-slate-500 font-bold">{user.name[0]}</Text>
                            </View>
                            <View className="flex-1">
                                <Text className="text-text font-bold mb-0.5">{user.name}</Text>
                                <Text className="text-textSoft text-xs">{user.email}</Text>
                            </View>
                            <View className="items-end">
                                <View className={`px-2 py-1 rounded border mb-1 ${user.role === 'Uzman' ? 'bg-secondary/10 border-secondary/20' : 'bg-primary/10 border-primary/20'
                                    }`}>
                                    <Text className={`text-[10px] font-bold ${user.role === 'Uzman' ? 'text-secondary' : 'text-primary'
                                        }`}>{user.role}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text className="text-primary text-xs font-bold">Düzenle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

            </View>
        </ScrollView>
    );
}
