import '@style/globals.css';

export const metadata = {
  title: 'user managment',
  description:
    'user interface capable of performing Create, Read, Update, and Delete (CRUD) operations on a list of users',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr'>
      <body>{children}</body>
    </html>
  );
}
