import {useMutation} from '@tanstack/react-query';
import {useRecoilState} from 'recoil';

import {Notification, UpdatePasswordForm} from './index';
import {UserService} from '../api/services';
import {notificationState} from '../recoil/atoms';

const UpdatePassword = () => {
  const [showNotification, setShowNotification] =
    useRecoilState(notificationState);

  const currentUserMutation = useMutation({
    mutationFn: UserService.updateUser,
    onSuccess: () => setTimeout(() => setShowNotification(false), 2000),
    onError: () => setShowNotification(false),
  });

  const notificationLabels = {
    loading: 'Updating Password',
    success: 'Password successfully updated',
  };

  return (
    <section className="px-2 pt-6 lg:p-6">
      <div className="flex w-full flex-col items-center space-x-2 lg:items-start lg:space-x-0">
        <h3 className="font-palanquin text-2xl font-medium tracking-tight dark:text-white">
          Password
        </h3>

        <h5 className="mt-1.5 scroll-m-20 font-montserrat text-lg font-normal text-gray-400">
          Update your password.
        </h5>

        <div className="mt-4 w-full xl:max-w-2xl">
          <UpdatePasswordForm onSubmit={currentUserMutation.mutateAsync} />
          {showNotification && <Notification labels={notificationLabels} />}
        </div>
      </div>
    </section>
  );
};

export default UpdatePassword;
