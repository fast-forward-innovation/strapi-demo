import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutsBlockQuote extends Struct.ComponentSchema {
  collectionName: 'components_layouts_block_quotes';
  info: {
    displayName: 'Block Quote';
    icon: 'stack';
  };
  attributes: {
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
  };
}

export interface LayoutsBlockQuoteBodyText extends Struct.ComponentSchema {
  collectionName: 'components_layouts_block_quote_body_texts';
  info: {
    displayName: 'Block Quote - Body Text';
    icon: 'stack';
  };
  attributes: {
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
    Text: Schema.Attribute.Text;
  };
}

export interface LayoutsBlockQuoteLandscapeImage
  extends Struct.ComponentSchema {
  collectionName: 'components_layouts_block_quote_landscape_images';
  info: {
    displayName: 'Block Quote - Landscape Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
  };
}

export interface LayoutsBlockQuotePortraitImage extends Struct.ComponentSchema {
  collectionName: 'components_layouts_block_quote_portrait_images';
  info: {
    displayName: 'Block Quote - Portrait Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
  };
}

export interface LayoutsBodyTextBlockQuote extends Struct.ComponentSchema {
  collectionName: 'components_layouts_body_text_block_quotes';
  info: {
    displayName: 'Body Text - Block Quote';
    icon: 'stack';
  };
  attributes: {
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
    Text: Schema.Attribute.Text;
  };
}

export interface LayoutsBodyTextDualLandscapeImage
  extends Struct.ComponentSchema {
  collectionName: 'components_layouts_body_text_dual_landscape_images';
  info: {
    displayName: 'Body Text - Dual Landscape Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Caption2: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Credit2: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Image2: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface LayoutsBodyTextDualPortraitImage
  extends Struct.ComponentSchema {
  collectionName: 'components_layouts_body_text_dual_portrait_images';
  info: {
    displayName: 'Body Text - Dual Portrait Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Caption2: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Credit2: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Image2: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

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

export interface LayoutsDualLandscapeImageBodyText
  extends Struct.ComponentSchema {
  collectionName: 'components_layouts_dual_landscape_image_body_texts';
  info: {
    displayName: 'Dual Landscape Image - Body Text';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Caption2: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Credit2: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Image2: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface LayoutsDualPortraitImageBodyText
  extends Struct.ComponentSchema {
  collectionName: 'components_layouts_dual_portrait_image_body_texts';
  info: {
    displayName: 'Dual Portrait Image - Body Text';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Caption2: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Credit2: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Image2: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface LayoutsLandscapeImageBlockQuote
  extends Struct.ComponentSchema {
  collectionName: 'components_layouts_landscape_image_block_quotes';
  info: {
    displayName: 'Landscape Image - Block Quote';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
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

export interface LayoutsPortraitImageBlockQuote extends Struct.ComponentSchema {
  collectionName: 'components_layouts_portrait_image_block_quotes';
  info: {
    displayName: 'Portrait Image - Block Quote';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
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

export interface LayoutsQuadImageBodyText extends Struct.ComponentSchema {
  collectionName: 'components_layouts_quad_image_body_texts';
  info: {
    displayName: 'Quad Image - Body Text';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Credit2: Schema.Attribute.Text;
    Credit3: Schema.Attribute.Text;
    Credit4: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Image2: Schema.Attribute.Media<'images' | 'files'>;
    Image3: Schema.Attribute.Media<'images' | 'files'>;
    Image4: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsBlockQuote extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_block_quotes';
  info: {
    description: '';
    displayName: 'Block Quote';
    icon: 'quote';
  };
  attributes: {
    Quote: Schema.Attribute.Text;
    Source: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsBodyBoldStatement
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_body_bold_statements';
  info: {
    description: '';
    displayName: 'Body Bold Statement';
    icon: 'stack';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Text2: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsBodyText extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_body_texts';
  info: {
    displayName: 'Body Text';
    icon: 'stack';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsBodyTextLandscapeImage
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_body_text_landscape_images';
  info: {
    description: '';
    displayName: 'Body Text - Landscape Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsBodyTextPortraitImage
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_body_text_portrait_images';
  info: {
    description: '';
    displayName: 'Body Text - Portrait Image';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsBodyVeryBoldStatement
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_body_very_bold_statements';
  info: {
    description: '';
    displayName: 'Body - Very Bold Statement';
    icon: 'stack';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Text2: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsBoldStatementBoxed
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_bold_statement_boxed';
  info: {
    displayName: 'Bold Statement - Boxed';
    icon: 'stack';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsCircleGraphicStatement
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_circle_graphic_statement';
  info: {
    description: '';
    displayName: 'Circle Graphic - Statement';
    icon: 'stack';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsLandscapeImageBodyText
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_landscape_image_body_text';
  info: {
    description: '';
    displayName: 'Landscape Image - Body Text';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsLargeImageBoldCaption
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_large_image_bold_caption';
  info: {
    description: '';
    displayName: 'Large Image - Bold Caption';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsLargeImageBoldCaptionAbove
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_large_image_bold_caption_above';
  info: {
    description: '';
    displayName: 'Large Image - Bold Caption Above';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsPortraitImageBodyText
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_portrait_image_body_text';
  info: {
    description: '';
    displayName: 'Portrait Image - Body Text';
    icon: 'stack';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Credit: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsSemiBoldStatement
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_semi_bold_statement';
  info: {
    description: '';
    displayName: 'Semi Bold Statement';
    icon: 'stack';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsSquareGraphicStatement
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_square_graphic_statements';
  info: {
    description: '';
    displayName: 'Square Graphic Statement';
    icon: 'stack';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsStatementCircleGraphic
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_statement_circle_graphics';
  info: {
    description: '';
    displayName: 'Statement Circle Graphic';
    icon: 'stack';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsStatementSquareGraphic
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_statement_square_graphics';
  info: {
    description: '';
    displayName: 'Statement Square Graphic';
    icon: 'stack';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Text;
  };
}

export interface PillarStoryLayoutsVeryBoldStatement
  extends Struct.ComponentSchema {
  collectionName: 'components_pillar_story_layouts_very_bold_statement';
  info: {
    description: '';
    displayName: 'Very Bold Statement';
    icon: 'stack';
  };
  attributes: {
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
    movements: Schema.Attribute.Relation<'oneToMany', 'api::movement.movement'>;
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
      'layouts.block-quote': LayoutsBlockQuote;
      'layouts.block-quote-body-text': LayoutsBlockQuoteBodyText;
      'layouts.block-quote-landscape-image': LayoutsBlockQuoteLandscapeImage;
      'layouts.block-quote-portrait-image': LayoutsBlockQuotePortraitImage;
      'layouts.body-text-block-quote': LayoutsBodyTextBlockQuote;
      'layouts.body-text-dual-landscape-image': LayoutsBodyTextDualLandscapeImage;
      'layouts.body-text-dual-portrait-image': LayoutsBodyTextDualPortraitImage;
      'layouts.body-text-landscape-image': LayoutsBodyTextLandscapeImage;
      'layouts.body-text-portrait-image': LayoutsBodyTextPortraitImage;
      'layouts.dual-landscape-image-body-text': LayoutsDualLandscapeImageBodyText;
      'layouts.dual-portrait-image-body-text': LayoutsDualPortraitImageBodyText;
      'layouts.landscape-image-block-quote': LayoutsLandscapeImageBlockQuote;
      'layouts.landscape-image-body-text': LayoutsLandscapeImageBodyText;
      'layouts.portrait-image-block-quote': LayoutsPortraitImageBlockQuote;
      'layouts.portrait-image-body-text': LayoutsPortraitImageBodyText;
      'layouts.quad-image-body-text': LayoutsQuadImageBodyText;
      'pillar-story-layouts.block-quote': PillarStoryLayoutsBlockQuote;
      'pillar-story-layouts.body-bold-statement': PillarStoryLayoutsBodyBoldStatement;
      'pillar-story-layouts.body-text': PillarStoryLayoutsBodyText;
      'pillar-story-layouts.body-text-landscape-image': PillarStoryLayoutsBodyTextLandscapeImage;
      'pillar-story-layouts.body-text-portrait-image': PillarStoryLayoutsBodyTextPortraitImage;
      'pillar-story-layouts.body-very-bold-statement': PillarStoryLayoutsBodyVeryBoldStatement;
      'pillar-story-layouts.bold-statement-boxed': PillarStoryLayoutsBoldStatementBoxed;
      'pillar-story-layouts.circle-graphic-statement': PillarStoryLayoutsCircleGraphicStatement;
      'pillar-story-layouts.landscape-image-body-text': PillarStoryLayoutsLandscapeImageBodyText;
      'pillar-story-layouts.large-image-bold-caption': PillarStoryLayoutsLargeImageBoldCaption;
      'pillar-story-layouts.large-image-bold-caption-above': PillarStoryLayoutsLargeImageBoldCaptionAbove;
      'pillar-story-layouts.portrait-image-body-text': PillarStoryLayoutsPortraitImageBodyText;
      'pillar-story-layouts.semi-bold-statement': PillarStoryLayoutsSemiBoldStatement;
      'pillar-story-layouts.square-graphic-statement': PillarStoryLayoutsSquareGraphicStatement;
      'pillar-story-layouts.statement-circle-graphic': PillarStoryLayoutsStatementCircleGraphic;
      'pillar-story-layouts.statement-square-graphic': PillarStoryLayoutsStatementSquareGraphic;
      'pillar-story-layouts.very-bold-statement': PillarStoryLayoutsVeryBoldStatement;
      'shared.items': SharedItems;
      'shared.media': SharedMedia;
      'shared.movie-story': SharedMovieStory;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
    }
  }
}
