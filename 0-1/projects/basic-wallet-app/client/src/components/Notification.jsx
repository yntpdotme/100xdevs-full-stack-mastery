import {useRecoilValue, useSetRecoilState} from 'recoil';
import {formSubmissionState, notificationState} from '../recoil/atoms';
import {closeIcon} from '../assets';

const Notification = ({labels}) => {
  const formSubmission = useRecoilValue(formSubmissionState);
  const setShowNotification = useSetRecoilState(notificationState);

  return (
    <section tabIndex="-1">
      <ol className="absolute right-5 top-20 m-0 w-full max-w-[22rem]">
        <li className="mb-4 w-full rounded-lg border border-gray-200 bg-popover p-3 shadow-lg dark:border-dark-800 dark:shadow-2xl dark:shadow-primary/40">
          <div className="flex items-end">
            {formSubmission ? (
              <div className="mr-3 h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-gray-200"></div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-3 size-7 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
            <div>
              <div className="font-montserrat text-[16px] font-medium leading-normal text-gray-400">
                {formSubmission ? labels?.loading : labels?.success}
              </div>
            </div>

            <button type="button" onClick={() => setShowNotification(false)}>
              <img
                src={closeIcon}
                alt=""
                className="absolute right-3 top-4 size-6 dark:invert dark:filter"
              />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Notification;
