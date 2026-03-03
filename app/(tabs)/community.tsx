import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

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
    return (
        <ScrollView className="flex-1 bg-background pt-12">
            <View className="px-6 pb-20">
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-3xl font-bold text-primary">Kaderdaşlar</Text>
                    <TouchableOpacity className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Text className="text-primary font-bold">Deneyim Paylaş</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-textSoft mb-6 leading-5">
                    Yalnız değilsiniz. Süreci başarıyla atlatanların veya şu an tedavi görenlerin hikayelerinden ilham alın.
                </Text>

                <View className="space-y-4">
                    {experiences.map((exp) => (
                        <View key={exp.id} className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
                            <View className="flex-row justify-between items-center mb-3 border-b border-gray-100 pb-3">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 rounded-full bg-secondary/20 items-center justify-center mr-3">
                                        <Text className="text-secondary font-bold text-lg">{exp.author[0]}</Text>
                                    </View>
                                    <View>
                                        <Text className="text-text font-bold">{exp.author}</Text>
                                        <Text className="text-textSoft text-xs">{exp.date}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Text className="text-textSoft font-bold">⋮</Text>
                                </TouchableOpacity>
                            </View>

                            <Text className="text-primary font-bold text-lg mb-2">{exp.title}</Text>
                            <Text className="text-text leading-5 mb-4">{exp.content}</Text>

                            <View className="flex-row justify-between pt-3 border-t border-gray-50">
                                <TouchableOpacity className="flex-row items-center">
                                    <Text className="text-xl mr-2">❤️</Text>
                                    <Text className="text-textSoft font-medium">{exp.likes} Beğeni</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-row items-center">
                                    <Text className="text-xl mr-2">💬</Text>
                                    <Text className="text-textSoft font-medium">{exp.comments} Yorum</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
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
    );
}
