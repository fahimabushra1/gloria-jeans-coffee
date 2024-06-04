
const SingleUser = ({user}) => {
    console.log(user)
    return (
        <tr className="bg-base-200">
        <th>{user.uid} </th>
        <td>
          {user.displayName}
        </td>
        <td>{user.email}</td>
        <td>{user.metadata.lastSignInTime}</td>
        <td>{user.accessToken.slice(0,10)}...</td>
      </tr>
    );
};

export default SingleUser;