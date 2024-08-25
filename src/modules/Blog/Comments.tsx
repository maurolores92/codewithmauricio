import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "firebaseConfig";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'styles/comment.css';
import { TextBox } from "@components/textBox";

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  name: string;
  upvotes: number;
  downvotes: number;
  replies?: Comment[];
}

const Comments: React.FC<{ postId: string }> = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const querySnapshot = await getDocs(collection(db, 'comments'));
      const commentsData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          content: data.content,
          createdAt: data.createdAt.toDate(),
          name: data.name,
          upvotes: data.upvotes || 0,
          downvotes: data.downvotes || 0,
          replies: data.replies || [],
        } as Comment;
      });
      setComments(commentsData);
    };

    fetchComments();
  }, []);

  const handleAddComment = async () => {
    if (comment.trim() && name.trim()) {
      await addDoc(collection(db, 'comments'), {
        name: name,
        content: comment,
        createdAt: new Date(),
        upvotes: 0,
        downvotes: 0,
        replies: [],
      });
      setComment('');
      setName('');
      // Re-fetch comments
      const querySnapshot = await getDocs(collection(db, 'comments'));
      const commentsData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          content: data.content,
          createdAt: data.createdAt.toDate(),
          name: data.name,
          upvotes: data.upvotes || 0,
          downvotes: data.downvotes || 0,
          replies: data.replies || [],
        } as Comment;
      });
      setComments(commentsData);
    }
  };

  const handleUpvote = async (id: string) => {
    const commentRef = doc(db, 'comments', id);
    const comment = comments.find(c => c.id === id);
    if (comment) {
      await updateDoc(commentRef, { upvotes: comment.upvotes + 1 });
      setComments(comments.map(c => c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c));
    }
  };

  const handleDownvote = async (id: string) => {
    const commentRef = doc(db, 'comments', id);
    const comment = comments.find(c => c.id === id);
    if (comment) {
      await updateDoc(commentRef, { downvotes: comment.downvotes + 1 });
      setComments(comments.map(c => c.id === id ? { ...c, downvotes: c.downvotes + 1 } : c));
    }
  };

  return (
    <div className="comment-div">
      <h3>Comentarios</h3>
      <div className="comment-form">
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          className="name-input"
        />
        <TextField
          label="Comentario"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          variant="outlined"
          className="comment-input"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          className="submit-button"
          disabled={!name.trim() || !comment.trim()}
        >
          Enviar
        </Button>
      </div>
      <ul className="comment-list">
        {comments.map((c) => (
          <TextBox variant="background-text" style={{ marginBottom: '1rem' }} key={c.id}>
            <li>
              <div style={{display:"flex"}}>
                <AccountCircleIcon className="user-icon" />
                <strong className="comment-author">{c.name}</strong>
              </div>
              <div className="comment-content-wrapper">
                <p className="comment-content">{c.content}</p>
                <small className="comment-date">{c.createdAt.toLocaleString()}</small>
                <div className="comment-votes">
                  <Button onClick={() => handleUpvote(c.id)}><ThumbUpIcon /> {c.upvotes}</Button>
                  <Button onClick={() => handleDownvote(c.id)}><ThumbDownIcon /> {c.downvotes}</Button>
                </div>
                {c.replies && c.replies.length > 0 && (
                  <ul className="reply-list">
                    {c.replies.map((reply) => (
                      <li key={reply.id} className="reply-item">
                       <div style={{display:"flex"}}>
                          <img src="src/static/images/maurodev.webp" alt="MauroDev" className="user-icon" />
                          <strong className="comment-author">MauroDev</strong>
                        </div>
                        <div className="comment-content-wrapper">
                          <p className="comment-content">{reply.content}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </TextBox>
        ))}
      </ul>
    </div>
  );
};

export default Comments;