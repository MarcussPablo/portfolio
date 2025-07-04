import posts from '../../../src/data/posts.json'
import { AddBanner } from '../../components/AddBanner/AddBanner';

function Blog() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>Blog de Histórias Assombradas</h1>
      <AddBanner/>
      {posts.map(post => (
        <article key={post.id} style={{ marginBottom: 40 }}>
          <h2>{post.title}</h2>
          <small>{new Date(post.date).toLocaleDateString()}</small>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}

export default Blog;
