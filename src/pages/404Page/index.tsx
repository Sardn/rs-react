import styles from './404Page.module.css';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  const HTTP_STATUS_NOT_FOUND = 404;

  const pageReload = () => {
    window.location.reload();
  };

  const notFound = (): JSX.Element => {
    return (
      <div className={styles.page}>
        <div className="">
          <h1 className="">
            <span className="">🙁</span>
            <br />
            Nothing found
          </h1>
          <p className={styles.descr}>Unfortunately this page is missing...</p>
        </div>
        <Link className="" to="/">
          Go Home
        </Link>
      </div>
    );
  };

  const someError = (): JSX.Element => {
    return (
      <div className={styles.page}>
        <div className="">
          <h1 className="">
            <span className="">🙁</span>
            <br />
            Nothing found
          </h1>
          <p className={styles.descr}>Unfortunately this page is missing...</p>
        </div>
        <button onClick={pageReload}>Reload page</button>
      </div>
    );
  };

  return isRouteErrorResponse(error) && error.status === HTTP_STATUS_NOT_FOUND
    ? notFound()
    : someError();
}

export default ErrorPage;
