import UserItem from "./UserItem";

const Users = (props) => {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  const usersList = props.data.map((user) => {
    console.log("user : ", user);
    return <UserItem key={user.id} data={user} />;
  });
  return (
    <div>
      <div style={style}>{usersList}</div>
    </div>
  );
};

export default Users;
