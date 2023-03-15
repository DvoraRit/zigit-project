import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';
import DataTable from './DataTable/DataTable';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.personalDetails);

  const columns = Object.keys(user).map((key) => {
    return {
      Header: key,
      accessor: key,
    };
  });
  let data = [];
  data.push(useSelector((state) => state.auth.personalDetails));

  return (
    <main className={classes.profile}>
      <DataTable columns={columns} data={data} />
    </main>
  );
};

export default UserProfile;
