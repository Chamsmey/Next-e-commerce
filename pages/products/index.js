import Layout from "./layout";
import ListItem from '../../components/listItem';
export default function ProductPage(data) {
  return (
    <Layout>
        <div>
        <h1>Product packages</h1>
        <ListItem data={data}></ListItem>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let products = await fetch("https://fakestoreapi.com/products");

  let data = await products.json();
  console.log(data);
  return { props: {data }};
}