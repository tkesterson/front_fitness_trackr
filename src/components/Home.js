const Home = ({ currentUser }) => {
  return (
    <div>
      <h1>Welcome Home{currentUser ? `, ${currentUser}.` : "."}</h1>
    </div>
  );
};
export default Home;
