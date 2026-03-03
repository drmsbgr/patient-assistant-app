import * as SQLite from 'expo-sqlite';

// Open or create the database synchronously
export const db = SQLite.openDatabaseSync('patient_app.db');

export function initDatabase() {
    // We create the tables if they don't exist.
    // users: for mock author data
    // posts: main community posts
    // comments: comments on posts
    db.execSync(`
        PRAGMA journal_mode = WAL;
        
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            avatar TEXT
        );

        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            likes_count INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (author_id) REFERENCES users (id)
        );

        CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            post_id INTEGER NOT NULL,
            author_id INTEGER NOT NULL,
            content TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE,
            FOREIGN KEY (author_id) REFERENCES users (id)
        );
    `);

    // Insert some mock users if the table is empty
    const firstUser = db.getFirstSync<{ id: number }>('SELECT id FROM users LIMIT 1');
    if (!firstUser) {
        db.runSync(`
            INSERT INTO users (name, email, avatar) VALUES 
            ('Hasta Anonim', 'hasta@test.com', 'H'),
            ('Ahmet Yılmaz', 'ahmet@test.com', 'A'),
            ('Doktor Y.', 'doktor@test.com', 'D');
        `);

        // Insert a mock post to show something on first launch
        db.runSync(`
            INSERT INTO posts (author_id, title, content, likes_count) VALUES 
            (2, 'Tedavi Sürecimde Hissettiklerim', 'İlk kemoterapi seansımı dün aldım. Beklediğimden daha rahat geçti ama bugün biraz yorgun hissediyorum. Bol bol su içmek gerçekten işe yarıyor. Herkese şifalar dilerim.', 5),
            (3, 'Beslenme Önerisi', 'Tedavi sürecinde bağışıklığınızı güçlü tutmak için taze sebze tüketimine dikkat edin ve şekeri azaltın. Sorularınız olursa yorum bırakabilirsiniz.', 12);
        `);

        // Insert a mock comment
        db.runSync(`
            INSERT INTO comments (post_id, author_id, content) VALUES
            (1, 1, 'Geçmiş olsun Ahmet bey, ben de aynı durumu yaşamıştım. 2. günden sonra yorgunluk geçiyor.');
        `);
    }
}
