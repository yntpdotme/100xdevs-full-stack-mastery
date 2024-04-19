import {useQuery} from '@tanstack/react-query';
import {UserService} from '../api/services';

const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await UserService.getCurrentUser();
      return response.data.data.currentUser;
    },
    placeholderData: {
      data: {
        currentUser: {
          name: `User's Name`,
          email: `user@email.com`,
          avatar: `https://ui-avatars.com/api/?name=U&size=250&background=4d2be2&color=ffffff`,
        },
      },
    },
  });
};

export default useCurrentUser;
