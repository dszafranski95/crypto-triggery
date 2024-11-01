import { Metadata } from 'next';
import Form from './Form';
import Navbar from '@/components/app/Navbar'; // Import Navbar component

export const metadata: Metadata = {
  title: 'Crypto Triggery App',
};

export default async function CryptoTriggeryApp() {
  return (
    <div>
      <Navbar /> {/* Use Navbar component */}
      <Form />
    </div>
  );
}
