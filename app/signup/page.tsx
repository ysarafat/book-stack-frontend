import { SignUpForm } from "../components/signup/SignupForm";

const page = () => {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-72px)]  px-5">
      <div className="bg-blue-25 lg:w-1/2 w-full px-5 mx-auto border border-blue-50 hover:border-blue-500 rounded-lg duration-300">
        <div className="bg-blue-500 mb-5 w-1/2 mx-auto text-center py-3 rounded-b-xl shadow hover:shadow-xl cursor-default duration-300">
          <span className="text-white font-bold text-lg "> SIGN UP NOW</span>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
};

export default page;
