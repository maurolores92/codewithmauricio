import React from 'react';
import Comments from '@modules/Blog/components/Comments';
import type { BlogPost } from '@utils/types';
import * as S from './styled';

interface BlogDetailProps {
  post: BlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  const renderContent = (content: any) => {
    return content.content.map((node: any, index: number) => {
      switch (node.nodeType) {
        case 'paragraph':
          return <S.Paragraph key={index}>{node.content.map(renderText)}</S.Paragraph>;
        case 'heading-1':
          return <h1 key={index}>{node.content.map(renderText)}</h1>;
        case 'heading-2':
          return <h2 key={index}>{node.content.map(renderText)}</h2>;
        case 'heading-3':
          return <h3 key={index}>{node.content.map(renderText)}</h3>;
        case 'heading-4':
          return <h4 key={index}>{node.content.map(renderText)}</h4>;
        case 'heading-5':
          return <h5 key={index}>{node.content.map(renderText)}</h5>;
        case 'heading-6':
          return <h6 key={index}>{node.content.map(renderText)}</h6>;
        case 'embedded-asset-block':
          return renderEmbeddedAsset(node, index);
        default:
          return null;
      }
    });
  };

  const renderText = (textNode: any, index: number) => {
    if (textNode.marks && textNode.marks.length > 0) {
      return textNode.marks.map((mark: any, markIndex: number) => {
        switch (mark.type) {
          case 'bold':
            return <strong key={markIndex}>{textNode.value}</strong>;
          default:
            return textNode.value;
        }
      });
    }
    return textNode.value;
  };

  const renderEmbeddedAsset = (node: any, index: number) => {
    const { fields } = node.data.target;
    const assetUrl = fields.file.url;
    const assetTitle = fields.title;

    return (
      <S.EmbeddedAsset key={index}>
        <S.CenteredImage src={assetUrl} alt={assetTitle} />
        <p>{assetTitle}</p>
      </S.EmbeddedAsset>
    );
  };

  return (
    <S.PageContent>
      <h1 style={{ textAlign: 'center' }}>{post.fields.title}</h1>
      <p style={{ fontSize: '20px' }}>Publicado el: {new Date(post.fields.publishDate).toLocaleDateString()}</p>
      <p style={{ fontSize: '20px' }}>Última actualización: {new Date(post.sys.updatedAt).toLocaleDateString()}</p>
      <p style={{ fontSize: '20px' }}>{post.fields.excerpt}</p>
      {post.fields.featuredImage && post.fields.featuredImage.length > 0 && (
        <S.FeaturedImage src={post.fields.featuredImage[0].fields.file.url} alt={post.fields.title} />
      )}
      <S.BlogContent>{renderContent(post.fields.content)}</S.BlogContent>
      <p>Tags: {post.fields.tags}</p>
      <div style={{ textAlign: 'center' }}>
        <S.StyledButton>
          <a href="/blog">Volver al blog</a>
        </S.StyledButton>
      </div>
      <Comments postId={post.sys.id} />
    </S.PageContent>
  );
};

export default BlogDetail;