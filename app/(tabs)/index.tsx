import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// A mock icon component since we might not have vector icons set up yet
const MockIcon = ({ name, color }: { name: string, color: string }) => (
  <View className="w-8 h-8 rounded-full items-center justify-center" style={{ backgroundColor: `${color}20` }}>
    <Text style={{ color, fontSize: 16, fontWeight: 'bold' }}>{name[0]}</Text>
  </View>
);

export default function HomeScreen() {
  const quickLinks = [
    { id: 1, title: 'Belirti Takvimi', icon: 'Calendar', color: '#0ea5e9', route: '/(tabs)/symptoms' },
    { id: 2, title: 'Kan Tahlili', icon: 'Activity', color: '#10b981', route: '/(tabs)/medical' },
    { id: 3, title: 'Uzmana Sor', icon: 'MessageCircle', color: '#8b5cf6', route: '/(tabs)/medical' },
    { id: 4, title: 'Covid-19 Bilgi', icon: 'AlertCircle', color: '#f59e0b', route: '/(tabs)/info' },
  ];

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header Profile Section */}
      <View className="bg-primary pt-16 pb-6 px-6 rounded-b-3xl shadow-sm">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white/80 text-sm font-medium">Merhaba,</Text>
            <Text className="text-white text-2xl font-bold mt-1">Ahmet Yılmaz</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center border border-white/30">
              <Text className="text-white font-bold text-lg">A</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-6">
        {/* Daily Motivation/Status Card */}
        <View className="bg-surface rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <Text className="text-text font-bold text-lg mb-2">Bugün nasılsın?</Text>
          <Text className="text-textSoft mb-4">Semptomlarını kaydederek doktorunla daha verimli görüşmeler yapabilirsin.</Text>
          <TouchableOpacity
            className="bg-primary/10 py-3 rounded-xl items-center border border-primary/20"
            onPress={() => router.push('/(tabs)/symptoms')}
          >
            <Text className="text-primary font-bold">Günlük Durumunu Bildir</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Links Grid */}
        <Text className="text-text font-bold text-lg mb-4">Hızlı Erişim</Text>
        <View className="flex-row flex-wrap justify-between">
          {quickLinks.map((link) => (
            <TouchableOpacity
              key={link.id}
              className="w-[48%] bg-surface rounded-2xl p-4 shadow-sm border border-gray-100 mb-4"
              onPress={() => router.push(link.route as any)}
            >
              <MockIcon name={link.icon} color={link.color} />
              <Text className="text-text font-semibold mt-3">{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Latest Info/Article Card */}
        <View className="mt-2">
          <Text className="text-text font-bold text-lg mb-4">Senin İçin Önerilenler</Text>
          <TouchableOpacity
            className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            onPress={() => router.push('/(tabs)/info')}
          >
            <View className="h-32 bg-secondary/20 items-center justify-center">
              <Text className="text-secondary opacity-50">Görsel Alanı</Text>
            </View>
            <View className="p-4">
              <Text className="text-text font-bold text-base mb-1">Beslenme Önerileri</Text>
              <Text className="text-textSoft text-sm" numberOfLines={2}>
                Tedavi sürecinde bağışıklığı güçlendirecek günlük beslenme ipuçları ve dikkat edilmesi gerekenler.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
