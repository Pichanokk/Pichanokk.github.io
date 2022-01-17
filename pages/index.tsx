import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
  } from "next";

  const About: NextPage = () => {
  
    return (
      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <h6 className="my-3 text-base font-medium">
          I am currently pursuing B.Tech Degree(Final Year) in Computer Science
          Engineering from Academy of Technology. I have 3+ years of experience in
          Web Development and I have a Youtube Channel where I teach Full Stack
          Web Development
        </h6>
        </div>
    );
  };
export default About;