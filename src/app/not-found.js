'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const { back } = useRouter();
  return (
    <div className='flex items-center justify-center p-2 w-full'>
      <div className='flex flex-col p-5 max-w-md mx-auto'>
        <h1 className='text-3xl text-center text-primary font-extrabold mb-3'>
          متاسفیم...
        </h1>
        <h3 className='font-bold text-center text-xl'>
          صفحه مورد نظر پیدا نشد!
        </h3>
        <p className='text-center text-zinc-600 mt-4 mb-8'>
          چیزی که به دنبال آن بودید پیدا نشد ممکن است صفحه مورد نظر شما حذف شده
          باشد یا به آدرس دیگری منتقل شده باشد
        </p>

        <div className='flex flex-col gap-y-5'>
          <Link
            href='/'
            className='bg-primary text-white text-center px-4 py-4 rounded-md hover:bg-opacity-90 transition-colors duration-300'
            onClick={back}
          >
            بازگشت به صفحه اصلی
          </Link>
          <button className='border border-zinc-500 py-4 rounded-md text-zinc-500 hover:border-zinc-600 hover:text-zinc-600 transition-colors duration-300'>
            تماس با ما
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
