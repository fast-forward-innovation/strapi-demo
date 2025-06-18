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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'repeaters.honorees': RepeatersHonorees;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
    }
  }
}
