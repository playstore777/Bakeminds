import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = (props) => {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGaps: "1rem",
  };

  console.log("props.data : ", props.data);
  let usersList = [];
  if (props.data.items) {
    usersList = props.data.items.map((user) => {
      console.log("user : ", user);
      return <UserItem key={user.id} data={user} />;
    });
  }
  // console.log(usersList);
  return props.loading ? (
    <Spinner />
  ) : (
    <div>
      <div style={style}>{usersList}</div>
    </div>
  );
};

export default Users;
