import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
 
  const paths = await getAllIds();

  
  console.log(paths);
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.post_title}</h5>
       
          <p className="card-text">content: {itemData.post_content}</p>
          
        </div>
      </article>
    </Layout>
  );
}