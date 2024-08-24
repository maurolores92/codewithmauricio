import React from 'react';
import type { BlogPost } from 'types';

interface BlogPostDetailProps {
  post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const renderContent = (content: any) => {
    return content.content.map((node: any) => {
      switch (node.nodeType) {
        case 'paragraph':
          return <p className="paragraph">{node.content.map(renderText).join('')}</p>;
        case 'heading-1':
          return <h1>{node.content.map(renderText).join('')}</h1>;
        case 'heading-2':
          return <h4>{node.content.map(renderText).join('')}</h4>;
        case 'embedded-asset-block':
          return renderEmbeddedAsset(node);
        default:
          return '';
      }
    });
  };

  const renderText = (textNode: any) => {
    if (textNode.marks && textNode.marks.length > 0) {
      return textNode.marks.map((mark: any) => {
        switch (mark.type) {
          case 'bold':
            return <strong>{textNode.value}</strong>;
          default:
            return textNode.value;
        }
      });
    }
    return textNode.value;
  };

  const renderEmbeddedAsset = (node: any) => {
    const { fields } = node.data.target;
    const assetUrl = fields.file.url;
    const assetTitle = fields.title;

    return (
      <div className="embedded-asset">
        <img className="centered-image" src={assetUrl} alt={assetTitle} />
        <p>{assetTitle}</p>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{post.fields.title}</h1>
      <p style={{ fontSize: '20px' }}>Publicado el: {new Date(post.fields.publishDate).toLocaleDateString()}</p>
      <p style={{ fontSize: '20px' }}>Última actualización: {new Date(post.sys.updatedAt).toLocaleDateString()}</p>
      <p style={{ fontSize: '20px' }}>{post.fields.excerpt}</p>
      {post.fields.featuredImage && post.fields.featuredImage.length > 0 && (
        <img className="featured-image" src={post.fields.featuredImage[0].fields.file.url} alt={post.fields.title} />
      )}
      <div className="blog-content">{renderContent(post.fields.content)}</div>
      <p>Tags: {post.fields.tags}</p>
      <div style={{ textAlign: 'center' }}>
        <button className="styled-button">
          <a href="/blog">Volver al blog</a>
        </button>
      </div>
    </div>
  );
};

export default BlogPostDetail;