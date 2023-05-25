import { Feed} from "@components";
// import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptia is a well Ai Prompting tool to use and It is free Also 
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
