import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const articles = [
    {
        id: 1,
        title: 'Kolorektal Kanser Nedir?',
        summary: 'Kalın bağırsak kanseri hakkında bilmeniz gereken temel bilgiler ve risk faktörleri.',
        category: 'Eğitim',
        readTime: '5 dk',
    },
    {
        id: 2,
        title: 'Kemoterapi Sürecinde Beslenme',
        summary: 'Tedavi sırasında enerji seviyenizi korumak için önerilen diyet listeleri ve kaçınılması gerekenler.',
        category: 'Beslenme',
        readTime: '8 dk',
    },
    {
        id: 3,
        title: 'Günlük Egzersiz Rutini',
        summary: 'Yorgunlukla başa çıkmanıza yardımcı olacak hafif fiziksel aktivite önerileri.',
        category: 'Yaşam Tarzı',
        readTime: '4 dk',
    }
];

export default function InfoScreen() {
    return (
        <ScrollView className="flex-1 bg-background pt-12">
            <View className="px-6 pb-20">
                <Text className="text-3xl font-bold text-primary mb-6">Bilgi & Farkındalık</Text>

                {/* Covid-19 Alert Card */}
                <View className="bg-warning/10 rounded-2xl p-5 border border-warning/30 mb-8">
                    <View className="flex-row items-center mb-2">
                        <View className="w-8 h-8 rounded-full bg-warning/20 items-center justify-center mr-3">
                            <Text className="text-warning font-bold">!</Text>
                        </View>
                        <Text className="text-text font-bold text-lg">Covid-19 Bilgilendirmesi</Text>
                    </View>
                    <Text className="text-textSoft text-sm leading-5">
                        Kanser hastalarının bağışıklık sistemi daha hassastır. Kalabalık ortamlarda maske takmaya ve hijyen kurallarına uymaya özen gösterin. Aşı takviminiz için doktorunuza danışın.
                    </Text>
                </View>

                {/* Educational Content Section */}
                <View className="flex-row justify-between items-end mb-4">
                    <Text className="text-text font-bold text-xl">Makaleler & Rehberler</Text>
                    <TouchableOpacity>
                        <Text className="text-primary font-medium">Tümünü Gör</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-4">
                    {articles.map((article) => (
                        <TouchableOpacity
                            key={article.id}
                            className="bg-surface rounded-2xl p-4 shadow-sm border border-gray-100 mb-4"
                        >
                            <View className="flex-row justify-between mb-2">
                                <View className="bg-primary/10 px-2 py-1 rounded-md">
                                    <Text className="text-primary text-xs font-bold">{article.category}</Text>
                                </View>
                                <Text className="text-textSoft text-xs">{article.readTime} okuma</Text>
                            </View>
                            <Text className="text-text font-bold text-lg mb-2">{article.title}</Text>
                            <Text className="text-textSoft text-sm" numberOfLines={2}>
                                {article.summary}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* FAQ Section */}
                <View className="mt-6 mb-4">
                    <Text className="text-text font-bold text-xl mb-4">Sıkça Sorulan Sorular</Text>
                    <TouchableOpacity className="bg-surface rounded-2xl p-4 border border-gray-100 flex-row justify-between items-center mb-3">
                        <Text className="text-text font-medium flex-1 mr-2">Randevumu nasıl iptal edebilirim?</Text>
                        <Text className="text-primary font-bold">+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-surface rounded-2xl p-4 border border-gray-100 flex-row justify-between items-center mb-3">
                        <Text className="text-text font-medium flex-1 mr-2">Reçetemi uygulamadan görebilir miyim?</Text>
                        <Text className="text-primary font-bold">+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
