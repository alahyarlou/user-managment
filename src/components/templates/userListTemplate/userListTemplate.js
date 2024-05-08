'use client';
import { useEffect, useState } from 'react';
import { Button, Pagination, Space, Table } from 'antd';
import { GetListUsers } from '@core/services/apis';
import Image from '@atom/Image';
import Link from 'next/link';
import DeleteUserButton from './resources/deleteUser-btn';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersFailure, fetchUsersSuccess } from '@core/redux/actions';

export default function UserListTemplate() {
  const [pagenation, setPagenation] = useState(1);
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  const getData = async () => {
    try {
      const response = await GetListUsers(pagenation);
      if (response.status === 200) {
        dispatch(fetchUsersSuccess(response.data));
      } else {
        dispatch(fetchUsersFailure(error.message));
      }
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };

  useEffect(() => {
    getData();
  }, [pagenation]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='p-2 m-10'>
      <h2 className='font-bold'>List Of Users</h2>
      <Table
        dataSource={users.data || []}
        columns={userListColumns(getData)}
        pagination={false}
        loading={loading}
        size={'large'}
        footer={() => (
          <Pagination
            defaultCurrent={users?.page}
            showSizeChanger={false}
            pageSize={users?.per_page}
            total={users?.total}
            onChange={(pagenation) => setPagenation(pagenation)}
          />
        )}
      />
    </div>
  );
}

const userListColumns = (getData) => [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (value, record) => (
      <span className='w-full h-full rounded-full overflow-hidden'>
        <Image
          src={value}
          alt={record.id}
          width={50}
          height={50}
          className='rounded-full'
        />
      </span>
    ),
  },
  {
    title: 'first Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'action',
    dataIndex: 'action',
    key: 'action',
    render: (value, record) => (
      <Space>
        <Link target='_blank' href={`/detail-user/${record.id}`}>
          <Button>detail</Button>
        </Link>
        <DeleteUserButton record={record} getData={getData} />
      </Space>
    ),
  },
];
