import React, { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@utils/firebaseConfig";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import $ from 'jquery';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'; // Importar estilos de DataTables
import 'admin-lte/dist/css/adminlte.min.css'; // Importar estilos de AdminLTE
import 'datatables.net-bs4';

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  name: string;
  upvotes: number;
  downvotes: number;
  replies?: Comment[];
  request: number; // Agregar el campo request
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [reply, setReply] = useState<string>('');
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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
          request: data.request || 0, // Obtener el valor de request desde la base de datos
        } as Comment;
      });
      setComments(commentsData);
    };

    fetchComments();
  }, []);

  useEffect(() => {
    $('#commentsTable').DataTable();
  }, [comments]);

  const handleAddReply = async () => {
    if (reply.trim() && selectedCommentId) {
      const commentRef = doc(db, 'comments', selectedCommentId);
      const comment = comments.find(c => c.id === selectedCommentId);
      if (comment) {
        const newReply: Comment = {
          id: new Date().toISOString(),
          content: reply,
          createdAt: new Date(),
          name: "MauroDev", 
          upvotes: 0,
          downvotes: 0,
          request: 0, // Añadir la propiedad request
        };
        const updatedReplies = [...(comment.replies || []), newReply];
        await updateDoc(commentRef, { replies: updatedReplies, request: 1 }); // Actualizar el campo request a 1
        setComments(comments.map(c => c.id === selectedCommentId ? { ...c, replies: updatedReplies, request: 1 } : c));
        setReply('');
        setOpen(false);
      }
    }
  };

  const handleClickOpen = (commentId: string) => {
    setSelectedCommentId(commentId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReply('');
  };

  const getRequestStatus = (request: number) => {
    return request === 1 ? "Respondido" : "No respondido";
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Comentarios</h3>
      </div>
      <div className="card-body">
        <table id="commentsTable" className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Comentario</th>
              <th>Fecha</th>
              <th>Respuesta</th> {/* Nueva columna */}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((c) => (
              <tr key={c.id}>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AccountCircleIcon className="user-icon" />
                    <strong className="comment-author" style={{ marginLeft: '0.5rem' }}>{c.name}</strong>
                  </div>
                </td>
                <td>{c.content}</td>
                <td>{c.createdAt.toLocaleString()}</td>
                <td>{getRequestStatus(c.request)}</td> {/* Mostrar el estado de request */}
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleClickOpen(c.id)}
                    className="submit-reply-button"
                  >
                    Responder
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Responder Comentario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Respuesta"
            type="text"
            fullWidth
            variant="outlined"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAddReply} color="primary" disabled={!reply.trim()}>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Comments;