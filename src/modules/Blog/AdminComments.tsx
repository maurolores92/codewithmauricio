import React, { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "firebaseConfig";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'styles/adminComment.css';
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

const AdminComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [reply, setReply] = useState<{ [key: string]: string }>({});

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

  const handleAddReply = async (commentId: string) => {
    if (reply[commentId]?.trim()) {
      const commentRef = doc(db, 'comments', commentId);
      const comment = comments.find(c => c.id === commentId);
      if (comment) {
        const newReply = {
          id: new Date().toISOString(),
          content: reply[commentId],
          createdAt: new Date(),
          name: "Owner", // Change this to the owner's name or ID
          upvotes: 0,
          downvotes: 0,
        };
        const updatedReplies = [...(comment.replies || []), newReply];
        await updateDoc(commentRef, { replies: updatedReplies });
        setComments(comments.map(c => c.id === commentId ? { ...c, replies: updatedReplies } : c));
        setReply({ ...reply, [commentId]: '' });
      }
    }
  };

  return (
    <div className="comment-div">
      <h3>Administrar Comentarios</h3>
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
                <div className="reply-form">
                  <TextField
                    label="Respuesta"
                    value={reply[c.id] || ''}
                    onChange={(e) => setReply({ ...reply, [c.id]: e.target.value })}
                    variant="outlined"
                    className="reply-input"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddReply(c.id)}
                    className="submit-reply-button"
                    disabled={!reply[c.id]?.trim()}
                  >
                    Responder
                  </Button>
                </div>
                {c.replies && c.replies.length > 0 && (
                  <ul className="reply-list">
                    {c.replies.map((reply) => (
                      <li key={reply.id} className="reply-item">
                        <div style={{display:"flex"}}>
                          <img src="/src/static/images/maurodev.webp" alt="Owner" className="user-icon" />
                          <strong className="comment-author">{reply.name}</strong>
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

export default AdminComments;