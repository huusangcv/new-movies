// src/Login.js
import React, { useEffect, useState } from 'react';
import styles from './ConfirmNewEmail.module.scss';
import classNames from 'classnames/bind';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userProfile } from '~/redux/selector/selector';
import user from '~/services/user';
const cx = classNames.bind(styles);
const ConfirmNewEmail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailCode = searchParams.get('emailCode');
  const [notification, setNotification] = useState('');

  const { id } = useSelector(userProfile);
  useEffect(() => {
    const fetchApiEmailUser = async () => {
      try {
        let response;
        if (id !== null) {
          response = await user.ConfirmNewEmail(id, emailCode);
        } else {
          response = await user.ConfirmNewEmail(0, emailCode);
        }

        if (response) {
          setNotification(response);
        } else {
          // Handle non-200 HTTP responses (e.g., 404, 500)
          console.error('Response not OK:', response);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchApiEmailUser();
  }, []);
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

export default ConfirmNewEmail;
