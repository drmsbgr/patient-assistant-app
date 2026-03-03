import { usePosts } from '@/hooks/usePosts';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const experiences = [
    {
        id: 1,
        author: 'Ayşe T.',
        date: '2 Gün Önce',
        title: 'Ameliyat Sonrası İlk Haftam',
        content: 'İlk günler zor geçse de doktorumun verdiği beslenme planına harfiyen uymak çok işe yaradı. Özellikle bol sıvı tüketmek enerjimi yerine getirdi.',
        likes: 24,
        comments: 5
    },
    {
        id: 2,
        author: 'Mehmet K.',
        date: '1 Hafta Önce',
        title: 'Kemoterapi Günlüğü',
        content: 'Bulantılar için zencefil çayı inanılmaz etkili oluyor. Doktorumun da onayıyla günde bir fincan içmeye başladım.',
        likes: 45,
        comments: 12
    }
];

export default function CommunityScreen() {
    const { posts, loading, createPost, likePost } = usePosts();
    const [isCreateModalVisible, setCreateModalVisible] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleCreatePost = () => {
        if (!newTitle.trim() || !newContent.trim()) return;
        createPost(newTitle, newContent, 1); // Mock user 1
        setNewTitle('');
        setNewContent('');
        setCreateModalVisible(false);
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-background">
                <ActivityIndicator size="large" color="#0ea5e9" />
            </View>
        );
    }

    return (
        <>
            <ScrollView className="flex-1 bg-background pt-12">
                <View className="px-6 pb-20">
                    <View className="flex-row justify-between items-center mb-6 mt-6">
                        <Text className="text-3xl font-bold text-primary">Kaderdaşlar</Text>
                        <TouchableOpacity
                            className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20"
                            onPress={() => setCreateModalVisible(true)}
                        >
                            <Text className="text-primary font-bold">Deneyim Paylaş</Text>
                        </TouchableOpacity>
                    </View>

                    <Text className="text-textSoft mb-6 leading-5">
                        Yalnız değilsiniz. Süreci başarıyla atlatanların veya şu an tedavi görenlerin hikayelerinden ilham alın.
                    </Text>

                    <View className="space-y-4">
                        {posts.length === 0 ? (
                            <Text className="text-center text-textSoft mt-4">Henüz paylaşım yok.</Text>
                        ) : (
                            posts.map((post) => (
                                <TouchableOpacity
                                    key={post.id}
                                    className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 mb-4"
                                    onPress={() => router.push(`/post/${post.id}`)}
                                >
                                    <View className="flex-row justify-between items-center mb-3 border-b border-gray-100 pb-3">
                                        <View className="flex-row items-center">
                                            <View className="w-10 h-10 rounded-full bg-secondary/20 items-center justify-center mr-3">
                                                <Text className="text-secondary font-bold text-lg">{post.author_avatar}</Text>
                                            </View>
                                            <View>
                                                <Text className="text-text font-bold">{post.author_name}</Text>
                                                <Text className="text-textSoft text-xs">{new Date(post.created_at).toLocaleDateString()}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Text className="text-textSoft font-bold">⋮</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <Text className="text-primary font-bold text-lg mb-2">{post.title}</Text>
                                    <Text className="text-text leading-5 mb-4" numberOfLines={3}>{post.content}</Text>

                                    <View className="flex-row justify-between pt-3 border-t border-gray-50">
                                        <TouchableOpacity
                                            className="flex-row items-center"
                                            onPress={() => likePost(post.id)}
                                        >
                                            <Text className="text-xl mr-2">❤️</Text>
                                            <Text className="text-textSoft font-medium">{post.likes_count} Beğeni</Text>
                                        </TouchableOpacity>
                                        <View className="flex-row items-center">
                                            <Text className="text-xl mr-2">💬</Text>
                                            <Text className="text-textSoft font-medium">Yorumlar</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        )}
                    </View>

                    {/* Support Call to Action */}
                    <View className="mt-6 bg-secondary/10 rounded-2xl p-5 border border-secondary/20 items-center">
                        <Text className="text-2xl mb-2">🤝</Text>
                        <Text className="text-text font-bold text-lg mb-2 text-center">Psikolojik Destek</Text>
                        <Text className="text-textSoft text-center mb-4 leading-5">
                            Zorlandığınız anlarda profesyonel destek almaktan çekinmeyin. Uzman psikologlarımız yanınızda.
                        </Text>
                        <TouchableOpacity className="bg-secondary px-6 py-3 rounded-xl w-full">
                            <Text className="text-white font-bold text-center">Destek Talebi Oluştur</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Create Post Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isCreateModalVisible}
                onRequestClose={() => setCreateModalVisible(false)}
            >
                <View className="flex-1 justify-end bg-black/50">
                    <View className="bg-white rounded-t-3xl p-6 h-[80%]">
                        <View className="flex-row justify-between items-center mb-6">
                            <Text className="text-2xl font-bold text-text">Yeni Paylaşım</Text>
                            <TouchableOpacity onPress={() => setCreateModalVisible(false)} className="p-2">
                                <Text className="text-textSoft font-bold text-lg">✕</Text>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            className="bg-surface border border-gray-200 rounded-xl p-4 text-text mb-4 text-lg font-bold"
                            placeholder="Başlık"
                            value={newTitle}
                            onChangeText={setNewTitle}
                            placeholderTextColor="#94a3b8"
                        />

                        <TextInput
                            className="bg-surface border border-gray-200 rounded-xl p-4 text-text flex-1 mb-4 text-base"
                            placeholder="Neler hissediyorsunuz? Deneyimlerinizi yazın..."
                            value={newContent}
                            onChangeText={setNewContent}
                            multiline
                            textAlignVertical="top"
                            placeholderTextColor="#94a3b8"
                        />

                        <TouchableOpacity
                            className={`py-4 rounded-xl items-center shadow-sm ${newTitle && newContent ? 'bg-primary' : 'bg-gray-300'}`}
                            onPress={handleCreatePost}
                            disabled={!newTitle || !newContent}
                        >
                            <Text className="text-white font-bold text-lg">Paylaş</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}
