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


  // @utils/types.ts
export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    excerpt: string;
    publishDate: string;
    content: {
      data: {};
      content: any[];
      nodeType: string;
    };
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    }[];
    tags: string[];
  };
}
