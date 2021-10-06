function About({ history }) {
  return (
    <>
      <p>Hello About ! </p>
      <button onClick={() => history.goBack()}>Go Back</button>
      <button onClick={() => history.goForward()}>Go Forward</button>
      <button onClick={() => history.push("/posts")}>Go to Posts - Push</button>
      <button onClick={() => history.replace("/posts")}>
        Go to Posts - Replace
      </button>
    </>
  );
}

export default About;
