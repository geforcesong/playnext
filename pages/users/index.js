import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};

function Users({ users }) {
  return (
    <div>
      <h2>Total user count is {users.length}</h2>
      <br />
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
