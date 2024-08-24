import React from 'react';
import type { BlogPost } from 'types';

interface BlogContentProps {
  posts: BlogPost[];
}

const BlogContent: React.FC<BlogContentProps> = ({ posts }) => {
  return (
    <div>
      <section className="introduction">
        <p>
          Bienvenidos a mi blog personal. He decidido crear este espacio para compartir los conocimientos que voy adquiriendo a lo largo de mi carrera en el desarrollo web, así como las tecnologías que estoy explorando e implementando en mis proyectos. Mi objetivo es no solo documentar mi aprendizaje, sino también ayudar a otros desarrolladores y entusiastas a conocer nuevas herramientas y técnicas que podrían serles útiles en su propio camino.
        </p>
        <p>
          Aquí encontrarás artículos sobre diversos temas, desde los fundamentos de la programación hasta las últimas tendencias en la industria. ¡Espero que disfrutes leyendo tanto como yo disfruto compartiendo!
        </p>
      </section>
      
      <ul>
        {posts.map(post => {
          const imageUrl = post.fields.featuredImage?.[0]?.fields?.file?.url;
          const publishDate = new Date(post.fields.publishDate).toLocaleDateString();

          return (
            <li className="blog-post card" key={post.sys.id}>
              {imageUrl ? (
                <div className="blog-post-image">
                  <img src={imageUrl} alt={post.fields.title} className="featured-image-main centered-image" />
                </div>
              ) : null}
              <div className="blog-post-content">
                <h4>{post.fields.title}</h4>
                <p className="publish-date">{publishDate}</p>
                <p>{post.fields.excerpt}</p>
                <a href={`/blog/${post.fields.slug}`}>Leer más</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogContent;