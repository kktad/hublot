import { ImageField, Field, Image, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type Product = ComponentProps & {
  fields: {
    image: ImageField;
    title: Field<string>;
    price: Field<string>;
  };
};
type ProductsProps = ComponentProps & {
  fields: {
    product_list: Product[];
  };
};

function Products(props: ProductsProps): JSX.Element {
  // console.log(props.fields.product_list);
  return (
    <div className="allproducts">
      {props.fields.product_list.map((listitem, index) => (
        <a key={null} href={`${listitem.fields.title.value}`}>
          <article key={index} className="product">
            <div className="productimage">
              <Image field={listitem.fields.image} />
            </div>
            <div>
              <h3>{listitem.fields.title.value}</h3>
              <p>INR {listitem.fields.price.value}</p>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}

export default withDatasourceCheck()<ProductsProps>(Products);
