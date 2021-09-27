const UserItem = (props) => {
  return (
    <div className="card text-center">
      <img
        src={props.data.avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{props.data.login}</h3>
      <div>
        <a href={props.data.html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
