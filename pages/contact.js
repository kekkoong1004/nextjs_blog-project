import Head from 'next/head';
import ContactPage from '@/components/contact/contact-form';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta
          name="description"
          content="Contact us so that we are able to know your concern."
        />
      </Head>
      <ContactPage />
    </>
  );
}
