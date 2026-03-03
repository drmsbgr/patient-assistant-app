import { useCallback, useEffect, useState } from 'react';
import { db } from '../lib/db';

export interface Post {
    id: number;
    title: string;
    content: string;
    author_id: number;
    author_name: string;
    author_avatar: string;
    likes_count: number;
    created_at: string;
}

export interface Comment {
    id: number;
    post_id: number;
    author_id: number;
    author_name: string;
    author_avatar: string;
    content: string;
    created_at: string;
}

export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const loadPosts = useCallback(() => {
        setLoading(true);
        try {
            const allPosts = db.getAllSync<Post>(`
                SELECT p.*, u.name as author_name, u.avatar as author_avatar
                FROM posts p
                JOIN users u ON p.author_id = u.id
                ORDER BY p.created_at DESC
            `);
            setPosts(allPosts);
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const getPost = useCallback((postId: number): Post | null => {
        try {
            return db.getFirstSync<Post>(`
                SELECT p.*, u.name as author_name, u.avatar as author_avatar
                FROM posts p
                JOIN users u ON p.author_id = u.id
                WHERE p.id = ?
            `, [postId]);
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }, []);

    const getComments = useCallback((postId: number): Comment[] => {
        try {
            return db.getAllSync<Comment>(`
                SELECT c.*, u.name as author_name, u.avatar as author_avatar
                FROM comments c
                JOIN users u ON c.author_id = u.id
                WHERE c.post_id = ?
                ORDER BY c.created_at ASC
            `, [postId]);
        } catch (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
    }, []);

    const createPost = useCallback((title: string, content: string, currentUserId: number = 1) => {
        try {
            db.runSync(
                'INSERT INTO posts (author_id, title, content) VALUES (?, ?, ?)',
                [currentUserId, title, content]
            );
            loadPosts(); // refresh list
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }, [loadPosts]);

    const createComment = useCallback((postId: number, content: string, currentUserId: number = 1) => {
        try {
            db.runSync(
                'INSERT INTO comments (post_id, author_id, content) VALUES (?, ?, ?)',
                [postId, currentUserId, content]
            );
            // Optionally we might want to refresh comments, but we usually do that in the specific screen
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    }, []);

    const likePost = useCallback((postId: number) => {
        try {
            db.runSync(
                'UPDATE posts SET likes_count = likes_count + 1 WHERE id = ?',
                [postId]
            );
            loadPosts(); // refresh list
        } catch (error) {
            console.error('Error liking post:', error);
        }
    }, [loadPosts]);

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    return {
        posts,
        loading,
        loadPosts,
        getPost,
        getComments,
        createPost,
        createComment,
        likePost
    };
}
