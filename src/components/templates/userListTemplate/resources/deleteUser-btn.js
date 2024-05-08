import { DeleteUser } from '@core/services/apis';
import { Button, Popconfirm, notification } from 'antd';

export default function DeleteUserButton({ record, getData }) {
  const onDelete = async () => {
    const res = await DeleteUser(record.id);
    if (res?.status === 204) {
      notification.success({
        message: 'successfully deleted',
      });
      getData();
    } else {
      notification.open({
        message: `Error ${res?.status}`,
      });
    }
  };
  return (
    <Popconfirm
      title='Are you sure delete user?'
      onConfirm={onDelete}
      okText='Yes'
      cancelText='No'
      okButtonProps={{
        type: 'dashed',
      }}
    >
      <Button danger>delete</Button>
    </Popconfirm>
  );
}
