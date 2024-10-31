// src/Login.js
import React, { useEffect, useState } from 'react';
import styles from './ConfirmNewEmail.module.scss';
import classNames from 'classnames/bind';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { userProfile } from '~/redux/selector/selector';
const cx = classNames.bind(styles);
const ConfirmNewEmail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailCode = searchParams.get('emailCode');
  const [notification, setNotification] = useState('');
  const [cookies] = useCookies(['token']);
  const token = cookies['token'];

  const { id } = useSelector(userProfile);
  useEffect(() => {
    const fetchApiEmailUser = async () => {
      try {
        const response = await fetch(`https://api.newmoviesz.online/api/confirm-update-profile/${id}/${emailCode}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
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
