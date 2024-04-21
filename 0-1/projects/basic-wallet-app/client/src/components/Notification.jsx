import {useRecoilValue, useSetRecoilState} from 'recoil';
import {formSubmissionState, notificationState} from '../recoil/atoms';
import {closeIcon} from '../assets';

const Notification = ({labels}) => {
  const formSubmission = useRecoilValue(formSubmissionState);
  const setShowNotification = useSetRecoilState(notificationState);

  return (
    <section tabIndex="-1">
      <ol className="fixed bottom-0 right-5 z-40 w-full max-w-[22rem] translate-y-[-30px] transform transition-all delay-[1000ms] duration-300 ease-in-out">
        <li className="w-full rounded-lg border border-gray-200 bg-popover p-3 shadow-lg dark:border-dark-800 dark:shadow-2xl dark:shadow-primary/40">
          <div className="flex items-center">
            {formSubmission ? (
              <div className="flex items-center">
                <div className="mr-3 inline-block size-7 animate-spin rounded-full border-[4px] border-gray-200 border-t-primary dark:border-gray-600 dark:border-t-primary"></div>
                <span className="sr-only">Loading...</span>
              </div>
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

            <div className="font-montserrat text-[16px] font-medium text-gray-400">
              {formSubmission ? labels?.loading : labels?.success}
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
