# Hasta Asistanı - Kolorektal Kanser Takip Platformu

Bu proje, Kolorektal Kanser (Kalın Bağırsak Kanseri) hastaları ve hasta yakınları için tasarlanmış kapsamlı bir dijital sağlık takip ve bilgilendirme mobil uygulamasıdır. React Native (Expo) kullanılarak geliştirilmiş olup, modern bir kullanıcı deneyimi sunar.

VIDEO : https://www.youtube.com/watch?v=k7rGuVeAR1I

## Özellikler

### 1. Bilgi ve Farkındalık (Eğitim Modülü)
- **Hastalık Rehberi:** Kolorektal kanserin ne olduğu, risk faktörleri ve tedavi süreçleri hakkında eğitici makaleler.
- **Covid-19 Uyarıları:** Bağışıklık sistemi hassas olan kanser hastaları için güncel Covid-19 ve hijyen uyarıları.
- **Beslenme & Yaşam Tarzı:** Tedavi sürecini destekleyecek günlük beslenme ve hafif egzersiz önerileri.

### 2. Semptom Takibi (Günlük Modülü)
- **Duygu Durumu:** Kullanıcının genel hissiyatını günlük olarak kaydedebilmesi.
- **Belirti Seçimi:** Ağrı, yorgunluk, bulantı, sindirim sorunları gibi yaygın semptomların kolayca işaretlenmesi.
- **Özel Notlar:** Doktor görüşmeleri için ayrılmış serbest metin alanı.

### 3. Tıbbi Takip (Sağlık Modülü)
- **Tahlil Sonuçları:** Kan tahlili (Tam kan, CEA vb.) sonuçlarının tarihsel kaydı ve durum takibi.
- **Uzmana Sor:** Hastaların sağlık profesyonellerine doğrudan soru iletebileceği iletişim arayüzü.
- **Kişiselleştirilmiş Öneriler:** Kaydedilen semptomlara dayalı olarak sistemin sunduğu günlük ipuçları (Örn: "Son 3 gündür yorgunluk işaretlediniz, bol sıvı tüketin").

### 4. Sosyal Destek (Kaderdaşlar Modülü)
- **Deneyim Paylaşımı:** Tedavi gören veya süreci atlatmış hastaların hikayelerini paylaşabildiği sosyal ağ görünümü.
- **Psikolojik Destek:** Zor anlarda doğrudan uzman psikologlara ulaşma imkanı.

### 5. Kullanıcı ve İçerik Yönetimi (Admin Paneli)
- **Admin Dashboard:** Toplam hasta, aktif günlük kaydı ve yeni paylaşımların özetini sunan yönetim paneli.
- **Kullanıcı Yönetimi:** Hasta ve Uzman rollerine göre kullanıcı listeleme ve yetkilendirme.
- **İçerik Yönetimi:** Uygulama içindeki makalelerin, duyuruların ve beslenme önerilerinin yönetimi.

## Teknoloji Yığını

- **[React Native](https://reactnative.dev/):** Çapraz platform mobil uygulama geliştirme çerçevesi.
- **[Expo](https://expo.dev/):** React Native için geliştirme, yapılandırma ve derleme araçları seti.
- **[Expo Router](https://docs.expo.dev/router/introduction/):** Dosya tabanlı sayfa yönlendirmesi (Routing) (`app/` dizini).
- **[NativeWind](https://www.nativewind.dev/):** React Native için Tailwind CSS tabanlı stil sistemi.

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### Gereksinimler
- Node.js (v18 veya üzeri önerilir)
- npm veya yarn
- Expo Go uygulaması (iOS veya Android cihazınızda) veya iOS Simulator / Android Emulator.

### Adımlar

1. Dizin içerisine girin:
   ```bash
   cd c:/Projects/patient-assistant-app
   ```

2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```
   *(Eğer hata alırsanız `npm install --legacy-peer-deps` kullanabilirsiniz)*

3. Uygulamayı başlatın:
   ```bash
   npm start
   # veya
   npx expo start
   ```

4. Ekranda beliren QR kodunu:
   - **iOS cihazlarda:** Kamera uygulaması ile okutarak Expo Go uygulamasında açın.
   - **Android cihazlarda:** Expo Go uygulaması içinden QR okuyucu ile tarayın.
   - Veya terminalde `i` tuşuna basarak iOS Simulator'u, `a` tuşuna basarak Android Emulator'u başlatabilirsiniz.

## Proje Yapısı

```
patient-assistant-app/
├── app/
│   ├── (auth)/             # Giriş ve Kayıt ekranları
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/             # Ana uygulama sekmeleri
│   │   ├── _layout.tsx
│   │   ├── index.tsx       # Ana Dashboard
│   │   ├── symptoms.tsx    # Belirti Takip
│   │   ├── medical.tsx     # Tıbbi Tahliller ve Uzmana Sor
│   │   ├── community.tsx   # Deneyim Paylaşımları
│   │   └── info.tsx        # Eğitim Makaleleri
│   ├── (admin)/            # Yönetim Paneli
│   │   ├── _layout.tsx
│   │   ├── index.tsx       # Admin Dashboard
│   │   ├── users.tsx       # Kullanıcı Yönetimi
│   │   └── content.tsx     # İçerik Yönetimi
│   ├── _layout.tsx         # Kök Düzeni ve global stiller
│   └── +not-found.tsx      # 404 Sayfası
├── components/             # Yeniden kullanılabilir UI bileşenleri
├── assets/                 # Resimler ve fontlar
├── constants/              # Renkler ve sabit veriler
├── global.css              # Tailwind global stilleri
├── tailwind.config.js      # NativeWind/Tailwind konfigürasyonu
├── babel.config.js         # Babel eklentileri (NativeWind vb.)
├── metro.config.js         # Metro bundler konfigürasyonu
└── package.json
```

## Geliştirme Notları
- Bu sürüm, uygulamanın **Önyüz (Frontend) MVP** yapısını içermektedir. Şifreleme, veri tabanı kayıtları ve içerik eşitleme gibi kısımlar şu an için mock (sahte) veriler ile sağlanmaktadır.
- Tam teşekküllü kullanım için Supabase, Firebase veya özel bir Node.js/Python arka ucu (Backend) entegre edilmelidir.
