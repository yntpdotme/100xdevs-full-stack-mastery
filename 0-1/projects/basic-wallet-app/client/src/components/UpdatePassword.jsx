import {UpdatePasswordForm} from './index';

const UpdatePassword = () => {
  return (
    <section className="px-2 pt-6 lg:p-6">
      <div className="flex w-full flex-col items-center space-x-2 lg:items-start lg:space-x-0">
        <h3 className="font-palanquin text-2xl font-medium tracking-tight dark:text-white">
          Password
        </h3>

        <h5 className="mt-1.5 scroll-m-20 font-montserrat text-lg font-normal text-gray-400">
          Update your password.
        </h5>

        <div className="mt-8 w-full xl:max-w-2xl">
          <UpdatePasswordForm />
        </div>
      </div>
    </section>
  );
};

export default UpdatePassword;
