// src/Login.js
import React, { useState } from 'react';
import styles from './Verify.module.scss';
import classNames from 'classnames/bind';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';
const cx = classNames.bind(styles);
const Verify = () => {
  const { token } = useParams();
  const [notification, setNotification] = useState('');
  useState(() => {
    const fetchApiEmailUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/email-token/${token}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.text();
          setNotification(data);
        } else {
          // Handle non-200 HTTP responses (e.g., 404, 500)
          console.error('Response not OK:', response.status);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchApiEmailUser();
  }, [token]);

  return (
    <div className={cx('wrapper')}>
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <div className={cx('column')} dangerouslySetInnerHTML={{ __html: notification }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verify;
