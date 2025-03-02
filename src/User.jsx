function User(data) {
  console.log(data.userObj);
  return (
    <div>
      <h2>User Component</h2>
      <h3>{data.userObj.userName}</h3>
      <h3>{data.userObj.userAge}</h3>
      <h3>{data.userObj.userEmail}</h3>
    </div>
  );
}

export default User;