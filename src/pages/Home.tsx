import Header from "../components/Header";


const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="text-4xl font-bold">Welcome to My Book</h1>
        <p className="mt-4 text-lg">This is the home page of my book website.</p>
      </div>
    </>
  );
}

export default Home;