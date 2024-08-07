import PropTypes from "prop-types";

const VideoInfo = ({
  channelImage,
  channelName,
  subscribers,
  description,
  //   onSubscribe,
}) => {
  return (
    <div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="mt-2 h-12 w-12 shrink-0">
            <img
              src={channelImage}
              alt={channelName}
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="block">
            <p className="text-gray-200">{channelName}</p>
            <p className="text-sm text-gray-400">{subscribers} Subscribers</p>
          </div>
        </div>
        <div className="block">
          <button
            className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"
            // onClick={onSubscribe}
          >
            <span className="inline-block w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                ></path>
              </svg>
            </span>
            <span className="group-focus/btn:hidden">Subscribe</span>
            <span className="hidden group-focus/btn:block">Subscribed</span>
          </button>
        </div>
      </div>
      <hr className="my-4 border-white" />
      <div className="h-5 overflow-hidden group-focus:h-auto">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

VideoInfo.propTypes = {
  channelImage: PropTypes.string,
  channelName: PropTypes.string,
  subscribers: PropTypes.number,
  description: PropTypes.string,
  //   onSubscribe: PropTypes.,
};

export default VideoInfo;
