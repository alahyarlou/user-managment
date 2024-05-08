'use client';
import GetSingleUser from '@core/services/apis/user/get-single-user';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function UserInfoTemplate() {
  const [dataSchema, setDataSchema] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await GetSingleUser(id);
      if (response.status === 200) {
        setDataSchema(response.data.data);
        setLoading(false);
      } else {
        setDataSchema([]);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      setDataSchema(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>single user data</h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul className='flex flex-col gap-y-4'>
          <li>id:{dataSchema?.id}</li>
          <li>name:{dataSchema?.first_name + ' ' + dataSchema?.last_name}</li>
          <li>email:{dataSchema?.email}</li>
        </ul>
      )}
    </div>
  );
}
