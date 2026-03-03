import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Basic mock login - just route to tabs for now
        router.replace('/(tabs)');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-background"
        >
            <ScrollView contentContainerClassName="flex-grow justify-center p-6">
                <View className="items-center mb-10">
                    <Text className="text-4xl font-bold text-primary mb-2">Hoş Geldiniz</Text>
                    <Text className="text-textSoft text-center">Kolorektal Kanser Asistanı ile sağlığınızı takip edin.</Text>
                </View>

                <View className="space-y-4">
                    <View>
                        <Text className="text-text font-medium mb-1 ml-1">E-posta</Text>
                        <TextInput
                            className="bg-surface border border-gray-200 rounded-xl p-4 text-text"
                            placeholder="E-posta adresinizi girin"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <View>
                        <Text className="text-text font-medium mb-1 ml-1">Şifre</Text>
                        <TextInput
                            className="bg-surface border border-gray-200 rounded-xl p-4 text-text"
                            placeholder="Şifrenizi girin"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <TouchableOpacity className="mt-2 mb-4 items-end">
                        <Text className="text-primary font-medium">Şifremi Unuttum</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="bg-primary py-4 rounded-xl items-center shadow-sm"
                        onPress={handleLogin}
                    >
                        <Text className="text-white font-bold text-lg">Giriş Yap</Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-center mt-6">
                        <Text className="text-textSoft">Hesabınız yok mu? </Text>
                        <TouchableOpacity onPress={() => router.push('/register')}>
                            <Text className="text-primary font-bold">Kayıt Ol</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
