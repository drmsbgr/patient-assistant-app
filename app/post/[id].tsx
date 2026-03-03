import { usePosts } from '@/hooks/usePosts';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PostDetailScreen() {
    const { id } = useLocalSearchParams();
    const { getPost, getComments, createComment, likePost } = usePosts();

    const [post, setPost] = useState<any>(null);
    const [comments, setComments] = useState<any[]>([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        if (id) {
            refreshData();
        }
    }, [id]);

    const refreshData = () => {
        const postId = parseInt(id as string, 10);
        const fetchedPost = getPost(postId);
        if (fetchedPost) {
            setPost(fetchedPost);
            setComments(getComments(postId));
        } else {
            router.back();
        }
    };

    const handleCreateComment = () => {
        if (!newComment.trim() || !post) return;
        createComment(post.id, newComment, 1); // Mock user 1
        setNewComment('');
        refreshData();
    };

    const handleLike = () => {
        if (!post) return;
        likePost(post.id);
        refreshData();
    };

    if (!post) {
        return <View className="flex-1 bg-background" />;
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-background"
        >
            <View className="flex-row items-center px-6 pt-12 pb-4 border-b border-gray-100 bg-surface">
                <TouchableOpacity onPress={() => router.back()} className="mr-4">
                    <Text className="text-xl font-bold text-text">{'<'} Geri</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold text-primary">Gönderi Detayı</Text>
            </View>

            <ScrollView className="flex-1">
                <View className="bg-surface p-6 shadow-sm border-b border-gray-100 mb-2">
                    <View className="flex-row justify-between items-center mb-4">
                        <View className="flex-row items-center">
                            <View className="w-12 h-12 rounded-full bg-secondary/20 items-center justify-center mr-3">
                                <Text className="text-secondary font-bold text-xl">{post.author_avatar}</Text>
                            </View>
                            <View>
                                <Text className="text-text font-bold text-lg">{post.author_name}</Text>
                                <Text className="text-textSoft text-sm">{new Date(post.created_at).toLocaleDateString()}</Text>
                            </View>
                        </View>
                    </View>

                    <Text className="text-primary font-bold text-xl mb-3">{post.title}</Text>
                    <Text className="text-text text-base leading-6 mb-6">{post.content}</Text>

                    <View className="flex-row justify-between pt-4 border-t border-gray-50">
                        <TouchableOpacity
                            className="flex-row items-center"
                            onPress={handleLike}
                        >
                            <Text className="text-2xl mr-2">❤️</Text>
                            <Text className="text-textSoft font-medium text-lg">{post.likes_count} Beğeni</Text>
                        </TouchableOpacity>
                        <View className="flex-row items-center">
                            <Text className="text-2xl mr-2">💬</Text>
                            <Text className="text-textSoft font-medium text-lg">{comments.length} Yorum</Text>
                        </View>
                    </View>
                </View>

                {/* Comments Section */}
                <View className="p-6">
                    <Text className="text-text font-bold text-lg mb-4">Yorumlar</Text>
                    {comments.length === 0 ? (
                        <Text className="text-textSoft text-center my-4">İlk yorumu sen yaz!</Text>
                    ) : (
                        <View className="space-y-4">
                            {comments.map((comment) => (
                                <View key={comment.id} className="bg-surface rounded-xl p-4 shadow-sm border border-gray-100 mb-3">
                                    <View className="flex-row items-center mb-2">
                                        <View className="w-8 h-8 rounded-full bg-primary/20 items-center justify-center mr-2">
                                            <Text className="text-primary font-bold text-sm">{comment.author_avatar}</Text>
                                        </View>
                                        <View>
                                            <Text className="text-text font-bold text-sm">{comment.author_name}</Text>
                                        </View>
                                    </View>
                                    <Text className="text-text leading-5">{comment.content}</Text>
                                    <Text className="text-textSoft text-xs mt-2 text-right">
                                        {new Date(comment.created_at).toLocaleDateString()}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </ScrollView>

            <View className="p-4 bg-surface border-t border-gray-200 flex-row items-center">
                <TextInput
                    className="flex-1 bg-background border border-gray-200 rounded-xl p-3 mr-3 max-h-24 text-text"
                    placeholder="Bir yorum yaz..."
                    value={newComment}
                    onChangeText={setNewComment}
                    multiline
                />
                <TouchableOpacity
                    className={`px-5 py-3 rounded-xl ${newComment.trim() ? 'bg-primary' : 'bg-gray-300'}`}
                    onPress={handleCreateComment}
                    disabled={!newComment.trim()}
                >
                    <Text className="text-white font-bold">Gönder</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
