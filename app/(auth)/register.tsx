import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // Basic mock register
        router.replace('/(tabs)');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-background"
        >
            <ScrollView contentContainerClassName="flex-grow justify-center p-6">
                <View className="items-center mb-8 mt-10">
                    <Text className="text-3xl font-bold text-primary mb-2">Kayıt Ol</Text>
                    <Text className="text-textSoft text-center">Size destek olabilmemiz için hesabınızı oluşturun.</Text>
                </View>

                <View className="space-y-4">
                    <View>
                        <Text className="text-text font-medium mb-1 ml-1">Ad Soyad</Text>
                        <TextInput
                            className="bg-surface border border-gray-200 rounded-xl p-4 text-text"
                            placeholder="Adınızı ve soyadınızı girin"
                            value={name}
                            onChangeText={setName}
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

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
                            placeholder="En az 6 karakter"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <View>
                        <Text className="text-text font-medium mb-1 ml-1">Şifre Tekrar</Text>
                        <TextInput
                            className="bg-surface border border-gray-200 rounded-xl p-4 text-text"
                            placeholder="Şifrenizi doğrulayın"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <TouchableOpacity
                        className="bg-primary py-4 rounded-xl items-center shadow-sm mt-6"
                        onPress={handleRegister}
                    >
                        <Text className="text-white font-bold text-lg">Hesap Oluştur</Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-center mt-6">
                        <Text className="text-textSoft">Zaten hesabınız var mı? </Text>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text className="text-primary font-bold">Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
