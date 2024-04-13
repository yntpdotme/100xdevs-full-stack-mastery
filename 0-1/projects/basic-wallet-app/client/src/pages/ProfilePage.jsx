import {UpdateProfileForm} from '../components';

const ProfilePage = () => {
  return (
    <section className="px-2 pt-6 lg:p-6">
      <div className="flex w-full flex-col items-center space-x-2 lg:items-start lg:space-x-0">
        <h3 className="font-palanquin text-2xl font-medium tracking-tight dark:text-white">
          My Details
        </h3>

        <h5 className="mt-1.5 scroll-m-20 font-montserrat text-lg font-normal text-gray-400">
          Manage your profile details.
        </h5>

        <div className="mt-4 w-full xl:max-w-2xl">
          <UpdateProfileForm />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
