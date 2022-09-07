import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>Старінка не знайдена</h2>
      <Link to="/">На головну</Link>
    </div>
  );
};

export default NotFoundPage;
