import Link from "next/link";

function user({ users }) {
  console.log(users);
  return (
    <div>
      <h2>All Users</h2>

      {users.map((user) => {
        return (
          <>
            <Link href={`user/${user.id}`} legacyBehavior passHref>
              <a>
                <h3>{user.name}</h3>
              </a>
            </Link>
            <p>{user.email}</p>
            <hr />
            <br />
          </>
        );
      })}
    </div>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default user;
