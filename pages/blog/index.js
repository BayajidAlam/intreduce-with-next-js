import Link from "next/link";

function POstList({ data }) {
  console.log(data);
  return (
    <div>
      <h1>Post list page</h1>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`} legacyBehavior>
              <a>
                <h1>{post.title}</h1>
              </a>
            </Link>
            <p>{post.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default POstList;
