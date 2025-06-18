import type { Schema, Struct } from '@strapi/strapi';

export interface RepeatersHonorees extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_honorees';
  info: {
    displayName: 'Honorees';
    icon: 'alien';
  };
  attributes: {
    Color: Schema.Attribute.Enumeration<['red', 'green', 'blue']>;
    honorees_person: Schema.Attribute.Relation<
      'oneToOne',
      'api::honoree.honoree'
    >;
  };
}

export interface RepeatersNewComponent extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_new_components';
  info: {
    displayName: 'new-component';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedGroupOne extends Struct.ComponentSchema {
  collectionName: 'components_shared_group_ones';
  info: {
    displayName: 'group-one';
    icon: 'alien';
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

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'repeaters.honorees': RepeatersHonorees;
      'repeaters.new-component': RepeatersNewComponent;
      'shared.group-one': SharedGroupOne;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
