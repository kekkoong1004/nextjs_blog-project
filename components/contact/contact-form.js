import { useRef, useState, useReducer, useEffect } from 'react';
import Notification from '../ui/notification';
import styles from './contact-form.module.css';

function ContactPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState({
    status: null,
    title: null,
    message: null,
  });
  const enteredEmailRef = useRef();
  const enteredNameRef = useRef();
  const enteredMessageRef = useRef();

  useEffect(() => {
    if (notificationStatus.status !== null) {
      setShowNotification(true);
    }
  }, [notificationStatus.status]);

  useEffect(() => {
    let timer;
    if (
      notificationStatus.status !== null ||
      notificationStatus.status !== 'pending'
    ) {
      timer = setTimeout(() => {
        setShowNotification(false);
        setNotificationStatus({
          status: null,
          title: null,
          message: null,
        });
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [notificationStatus.status]);

  const submitHandler = e => {
    e.preventDefault();
    setNotificationStatus({
      status: 'pending',
      title: 'Sending...',
      message: 'Please wait for a moment...',
    });
    const contactInfo = {
      email: enteredEmailRef.current.value,
      name: enteredNameRef.current.value,
      message: enteredMessageRef.current.value,
    };

    fetch('/api/contact/new', {
      method: 'POST',
      body: JSON.stringify(contactInfo),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(data => {
            throw new Error(data.message);
          });
        }
        return response.json();
      })
      .then(data => {
        setNotificationStatus({
          status: 'success',
          title: 'Sent',
          message: data.message || 'Your contact info is sent.',
        });
        // console.log('Output message: ', data);
      })
      .catch(err => {
        setNotificationStatus({
          status: 'error',
          title: 'Error',
          message: err.message || 'Something went wrong.',
        });
        console.log('Error!:', err.message);
      });

    enteredEmailRef.current.value = '';
    enteredNameRef.current.value = '';
    enteredMessageRef.current.value = '';
  };

  return (
    <>
      <section className={styles.contact}>
        <h1>Contact us</h1>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles.controls}>
            <div className={styles.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={enteredEmailRef} />
            </div>
            <div className={styles.control}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required ref={enteredNameRef} />
            </div>
          </div>
          <div className={styles.control}>
            <label htmlFor="name" id="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              ref={enteredMessageRef}
              required
            ></textarea>
          </div>
          <div className={styles.actions}>
            <button>Send</button>
          </div>
        </form>
      </section>
      {showNotification && <Notification type={notificationStatus} />}
    </>
  );
}

export default ContactPage;
