import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";

export default function GetStarted() {
  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];

  return (
    <>
      <Head>
        <title>Contact us - wwsmind</title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Talk with us
              </h1>
              <p className='mt-3'>
                Address: {" "}
                <span className="">
                  Tan Lap Hamlet, Ba Hien Town, Binh Xuyen District, Vinh Phuc Province, Vietnam.
                </span>
              </p>
              <p className='mt-3'>
                Email: {" "}
                <a
                  href='mailto:connect@wwsmind.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 duration-150'>
                  connect@wwsmind.com.
                </a>
              </p>
              <p className='mt-3'>
                Phone number: {" "}
                <a
                  href='tel:+84 977 643 973'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 duration-150'>
                  +84 977 643 973.
                </a>
              </p>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='space-y-5 font-medium'>
                <div>
                  <label>Full name</label>
                  <Input
                    aria-label='Full name'
                    type='text'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label='Message'
                    required
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'></textarea>
                </div>
                <div className='pt-1'>
                  <Button className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring'>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
