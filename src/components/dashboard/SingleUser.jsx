
const SingleUser = ({user,userInfo}) => {
    console.log(user)
    return (
        <tr className="bg-base-200">
        <th>{userInfo._id} </th>
        <td>
          {userInfo.displayName}
        </td>
        <td>{userInfo.email}</td>
        {/* <td>{user.metadata.lastSignInTime}</td>
        <td>{user.accessToken.slice(0,10)}...</td> */}
      </tr>
    );
};

export default SingleUser;