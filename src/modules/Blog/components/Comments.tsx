import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@utils/firebaseConfig";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import { TextBox } from "@components/textBox";

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  name: string;
  replies?: Comment[];
  request: number; // Agregar el campo request
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
          replies: data.replies || [],
          request: data.request || 0, 
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
        replies: [],
        request: 0, // Incluir el campo request con valor 0
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
          replies: data.replies || [],
          request: data.request || 0, // Asegurarse de que el campo request esté presente
        } as Comment;
      });
      setComments(commentsData);
    }
  };

  return (
    <Box sx={{ margin: '6rem auto' }}>
      <h3>Comentarios</h3>
      <Box
        component="form"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 2,
          margin: '2rem auto',
        }}
      >
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          sx={{ gridColumn: 'span 3' }}
        />
        <TextField
          label="Comentario"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          variant="outlined"
          sx={{ gridColumn: 'span 7' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          sx={{ gridColumn: 'span 2' }}
          disabled={!name.trim() || !comment.trim()}
        >
          Enviar
        </Button>
      </Box>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {comments.map((c) => (
          <TextBox variant="background-text" style={{ marginBottom: '1rem' }} key={c.id}>
            <li>
              <Box sx={{ display: 'flex' }}>
                <AccountCircleIcon className="user-icon" />
                <strong className="comment-author">{c.name}</strong>
              </Box>
              <Box className="comment-content-wrapper">
                <p className="comment-content">{c.content}</p>
                <small className="comment-date">{c.createdAt.toLocaleString()}</small>
                {c.replies && c.replies.length > 0 && (
                  <ul className="reply-list">
                    {c.replies.map((reply) => (
                      <li key={reply.id} className="reply-item">
                        <Box sx={{ display: 'flex' }}>
                          <img src="/maurodev.webp" alt="MauroDev" className="user-icon" />
                          <strong className="comment-author">MauroDev</strong>
                        </Box>
                        <Box className="comment-content-wrapper">
                          <p className="comment-content">{reply.content}</p>
                        </Box>
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            </li>
          </TextBox>
        ))}
      </ul>
    </Box>
  );
};

export default Comments;