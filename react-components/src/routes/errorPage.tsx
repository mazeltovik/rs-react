import { Link } from 'react-router-dom';
import Shell from '../components/shell';
export default function ErrorPage() {
  return (
    <Shell>
      <div className="error-container">
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found!</h3>
        <Link to="/">Back Home</Link>
      </div>
    </Shell>
  );
}
