export const getStaticPaths = async () => {
    console.log('hahaah');
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: { user: data },
  };
};

function UserDetail({ user }) {
  return (
    <div>
      This is {user.name}, id is {user.id}
      <div></div>
    </div>
  );
}

export default UserDetail;
