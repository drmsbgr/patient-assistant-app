# Hasta Asistanı - Kolorektal Kanser Takip Platformu

Bu proje, Kolorektal Kanser (Kalın Bağırsak Kanseri) hastaları ve hasta yakınları için tasarlanmış kapsamlı bir dijital sağlık takip ve bilgilendirme mobil uygulamasıdır. React Native (Expo) kullanılarak geliştirilmiş olup, modern bir kullanıcı deneyimi sunar.

## Demo Videosu

Uygulamanın genel kurgusu ve özelliklerinin nasıl çalıştığına dair demo videosunu aşağıdan izleyebilirsiniz:

[![Hasta Asistanı Uygulama Demotsy](https://img.youtube.com/vi/k7rGuVeAR1I/hqdefault.jpg)](https://www.youtube.com/watch?v=k7rGuVeAR1I)

## Özellikler

### 1. Sosyal Destek (Kaderdaşlar Modülü) - **Aktif Olarak Yayında!**
- **Deneyim Paylaşımı (CRUD):** Tedavi gören veya süreci atlatmış hastaların hikayelerini paylaşabildiği sosyal ağ görünümü. Local SQLite veritabanı sayesinde gönderiler kaydedilir ve gerçek zamanlı listelenir.
- **Detaylı Gönderi İnceleme:** Her gönderiye tıklanarak açılan izole bir detay ekranı.
- **Geri Bildirim Sistemi:** Gönderilere "beğen" (like) atma ve bağımsız alt yorumlar ekleyebilme özellikleri.
- **Psikolojik Destek:** Zor anlarda doğrudan uzman psikologlara ulaşma imkanı.

### 2. Bilgi ve Farkındalık (Eğitim Modülü)
- **Hastalık Rehberi:** Kolorektal kanserin ne olduğu, risk faktörleri ve tedavi süreçleri hakkında eğitici makaleler.
- **Covid-19 Uyarıları:** Bağışıklık sistemi hassas olan kanser hastaları için güncel Covid-19 ve hijyen uyarıları.
- **Beslenme & Yaşam Tarzı:** Tedavi sürecini destekleyecek günlük beslenme ve hafif egzersiz önerileri.

### 3. Semptom Takibi (Günlük Modülü)
- **Duygu Durumu:** Kullanıcının genel hissiyatını günlük olarak kaydedebilmesi.
- **Belirti Seçimi:** Ağrı, yorgunluk, bulantı, sindirim sorunları gibi yaygın semptomların kolayca işaretlenmesi.
- **Özel Notlar:** Doktor görüşmeleri için ayrılmış serbest metin alanı.

### 4. Tıbbi Takip (Sağlık Modülü)
- **Tahlil Sonuçları:** Kan tahlili sonuçlarının tarihsel kaydı ve durum takibi.
- **Uzmana Sor:** Hastaların sağlık profesyonellerine doğrudan soru iletebileceği iletişim arayüzü.

### 5. Kullanıcı ve İçerik Yönetimi (Admin Paneli)
- **Admin Dashboard:** Toplam hasta, aktif günlük kaydı ve yeni paylaşımların özetini sunan yönetim paneli.
- **Güvenli Çıkış (Logout):** Admin profilleri için oturumu tamamen sonlandıran çıkış sistemi.
- **İçerik Yönetimi:** Uygulama içindeki makalelerin, duyuruların ve beslenme önerilerinin yönetimi.

## Teknoloji Yığını

- **[React Native](https://reactnative.dev/):** Çapraz platform mobil uygulama geliştirme çerçevesi.
- **[Expo (SDK 54)](https://expo.dev/):** Gelişmiş derleme ve routing özellikleri.
- **[Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/):** Verilerin cihaz hafızasında güvenle ve hızlı (sekronize) saklanması için kurulan yerel veritabanı.
- **[Expo Router](https://docs.expo.dev/router/introduction/):** Dosya tabanlı sayfa ve detay ekranı yönlendirmesi (`app/` dizini).
- **[NativeWind](https://www.nativewind.dev/):** React Native için Tailwind CSS entegreli stil sistemi.

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### Gereksinimler
- Node.js (v18 veya üzeri önerilir)
- npm veya yarn
- Expo Go uygulaması (iOS / Android), iOS Simulator veya Android Emulator.

### Adımlar

1. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

2. Uygulamayı başlatın:
   ```bash
   npm start
   ```

3. Ekranda beliren QR kodunu:
   - **iOS cihazlarda:** Kamera uygulaması ile okutarak Expo Go uygulamasında açın.
   - **Android cihazlarda:** Expo Go uygulaması içinden QR okuyucu ile tarayın.
   - Veya terminalde `i` tuşuna basarak simulator'u, `a` tuşuna basarak emulator'u başlatabilirsiniz.

*Not: Veritabanı tabloları, uygulama ilk açıldığında `lib/db.ts` üzerinden otomatik olarak oluşturulmaktadır.*

## Geliştirme Notları & Gelecek Planları

- Şu anda "Kaderdaşlar" modülü bir veritabanı mimarisi (SQLite) üzerine inşa edilmiştir ve uygulamanın canlı CRUD mimarisini sergilemektedir.
- Diğer bölümlerde yer alan test formları şimdilik UI olarak hazırdır. 
- Gerçek bir canlı ortama geçiş için `lib/db.ts` içindeki ve `hooks/usePosts.ts` içindeki SQLite metodları Supabase veya Firebase gibi bir Backend mimarisi ile kolayca değiştirilebilir. Geri kalan hiçbir sayfa koduna dokunulması gerekmez!
