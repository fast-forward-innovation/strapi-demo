import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutsBodyTextLandscapeImage extends Struct.ComponentSchema {
  collectionName: 'components_layouts_body_text_landscape_images';
  info: {
    description: '';
    displayName: 'Body Text - Landscape Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.String;
    Credit: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface LayoutsBodyTextPortraitImage extends Struct.ComponentSchema {
  collectionName: 'components_layouts_body_text_portrait_images';
  info: {
    displayName: 'Body Text - Portrait Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.String;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.String;
  };
}

export interface LayoutsLandscapeImageBodyText extends Struct.ComponentSchema {
  collectionName: 'components_layouts_landscape_image_body_texts';
  info: {
    displayName: 'Landscape Image - Body Text';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface LayoutsLayoutOne extends Struct.ComponentSchema {
  collectionName: 'components_layouts_layout_ones';
  info: {
    description: '';
    displayName: 'Layout One';
    icon: 'apps';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface LayoutsLayoutThree extends Struct.ComponentSchema {
  collectionName: 'components_layouts_layout_threes';
  info: {
    displayName: 'Layout Three';
    icon: 'archive';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface LayoutsLayoutTwo extends Struct.ComponentSchema {
  collectionName: 'components_layouts_layout_twos';
  info: {
    displayName: 'Layout Two';
    icon: 'arrowDown';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface LayoutsPortraitImageBodyText extends Struct.ComponentSchema {
  collectionName: 'components_layouts_portrait_image_body_texts';
  info: {
    displayName: 'Portrait Image - Body Text';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.String;
    Credit: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface SharedItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'Items';
    icon: 'apps';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMovieStory extends Struct.ComponentSchema {
  collectionName: 'components_shared_movie_stories';
  info: {
    description: '';
    displayName: 'Movement Story';
    icon: 'alien';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Layout: Schema.Attribute.Enumeration<['horizontal', 'vertical']> &
      Schema.Attribute.DefaultTo<'horizontal'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layouts.body-text-landscape-image': LayoutsBodyTextLandscapeImage;
      'layouts.body-text-portrait-image': LayoutsBodyTextPortraitImage;
      'layouts.landscape-image-body-text': LayoutsLandscapeImageBodyText;
      'layouts.layout-one': LayoutsLayoutOne;
      'layouts.layout-three': LayoutsLayoutThree;
      'layouts.layout-two': LayoutsLayoutTwo;
      'layouts.portrait-image-body-text': LayoutsPortraitImageBodyText;
      'shared.items': SharedItems;
      'shared.media': SharedMedia;
      'shared.movie-story': SharedMovieStory;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
    }
  }
}
