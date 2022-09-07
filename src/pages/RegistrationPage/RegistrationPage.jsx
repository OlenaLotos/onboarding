import styles from './registration.module.css';

const RegistrationPage = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>Реєстрація</h2>
      <div className={styles.registration_wrapper}>
        <p>Вітаємо</p>
        <p>Для замовлення картки вам потрібно</p>
        <ul>
          <li>15 хвилин вільного часу</li>
          <li>застосунок Дія з ID-карткою або закордонним паспортом</li>
        </ul>
        <p>Ви також можете замовити фізичну картку</p>
        <button className={styles.registration_button}>Розпочати</button>
        <p>
          Натискаючи "Розпочати", ви підтверджуєте, що ознайомлені з
          <span>
            <a className={styles.registration_link} href="#!">
              {' '}
              Умовами надання послуг
            </a>
          </span>
          ,
          <span>
            <a className={styles.registration_link} href="#!">
              {' '}
              Договорoм
            </a>
          </span>
          та
          <span>
            <a className={styles.registration_link} href="#!">
              {' '}
              Політикою конфіденційності
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
