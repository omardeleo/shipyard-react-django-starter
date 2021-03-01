import { Card, Box, Link } from '@material-ui/core';

import logo from '../assets/images/logo.png';

function ReloadCard(props) {
  const { classes } = props;

  const codeBlock_1 = `18 |    "start": "react-scripts start",`;
  const codeBlock_2 = `38 |  CMD ["poetry", "run", "python", "src/manage.py", "runserver", "0:8080"]`;

  return (
    <Card className={classes.card}>
      <h2 className={props.classes.cardHeader}>See code changes instantly</h2>
      <p>
        When you make changes to the frontend code and save the file,{' '}
        <b>the app will automatically reload</b> only the module that was
        updated, allowing you to <b>see changes instantly</b> without having to
        refresh your browser.
      </p>
      <p>
        This is made possible by{' '}
        <Link
          className={classes.link}
          target="_blank"
          rel="noopener"
          href="https://webpack.js.org/concepts/hot-module-replacement"
        >
          webpack Hot Module Replacement
        </Link>
        , which comes installed with this React starter in a package called{' '}
        <b>react-scripts</b>. This script is invoked when we start our project
        in development mode. The command is located in{' '}
        <code>
          <Link
            className={classes.link}
            href={`${process.env.REACT_APP_STARTER_REPO_URL}frontend/package.json#L18`}
            target="_blank"
            rel="noopener"
          >
            frontend/package.json
          </Link>
        </code>
        :
      </p>
      <pre>
        <code className="language-js">{codeBlock_1}</code>
      </pre>
      <p>
        Changes to the backend code don't require a server restart, but you will
        need to refresh your browser to see changes. This Django backend starts
        a development server by running the{' '}
        <code>
          <Link
            className={classes.link}
            href="https://docs.djangoproject.com/en/3.1/ref/django-admin/#django-admin-runserver"
            target="_blank"
            rel="noopener"
          >
            runserver
          </Link>
        </code>{' '}
        command.
      </p>
      <p>
        You can find the <code>runserver</code> command in{' '}
        <code>
          <Link
            className={classes.link}
            href={`${process.env.REACT_APP_STARTER_REPO_URL}backend/Dockerfile#L38`}
            target="_blank"
            rel="noopener"
          >
            backend/Dockerfile
          </Link>
        </code>
        :
      </p>
      <pre>
        <code className="language-js">{codeBlock_2}</code>
      </pre>
    </Card>
  );
}

export default ReloadCard;
