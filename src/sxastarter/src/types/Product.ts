import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export type Product = {
  fields: {
    image: ImageField;
    title: Field<string>;
    price: Field<string>;
  };
};
