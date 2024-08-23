// types.ts
export interface Author {
    name: string;
}

export interface FeaturedImage {
    fields: {
        file: {
            url: string;
        };
    };
}

// types.ts
export interface BlogPost {
    sys: {
      id: string;
      createdAt: string;
      updatedAt: string;
    };
    fields: {
      title: string;
      slug: string;
      publishDate: string;
      author: {
        sys: {
          id: string;
        };
        fields: {
          name: string;
        };
      };
      featuredImage: {
        fields: {
          file: {
            url: string;
          };
        };
      }[];
      excerpt: string;
      content: {
        data: {};
        content: any[];
        nodeType: string;
      };
      tags: string;
    };
  }
