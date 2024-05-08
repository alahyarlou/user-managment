'use client';
import store from '@core/redux/store';
import '@style/globals.css';
import { Provider } from 'react-redux';

// export const metadata = {
//   title: 'user managment',
//   description:
//     'user interface capable of performing Create, Read, Update, and Delete (CRUD) operations on a list of users',
// };

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang='en' dir='ltr'>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
