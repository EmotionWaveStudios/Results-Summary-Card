const App = () => {
  return (
    <div className="font-sans">
      <div
        id="container"
        className="h-4/5 w-3/5 flex my-auto mx-auto rounded-3xl border-2 border-black"
      >
        <div
          id="purple_card"
          className=" w-1/2 rounded-2xl bg-gradient-to-b from-[#6743FF] to-[#312CEA] text-center text-white"
        >
          <h3 className="p-4 text-sm text-gray-200">Your Result</h3>
          <div className="w-24 h-24 bg-gradient-to-b from-[#4C22CA] to-transparent rounded-full mx-auto my-2">
            <h1 className="pt-6 text-4xl">76</h1>
            <h4 className="text-gray-400 text-xs">of 100</h4>
          </div>
          <h2 className="text-lg p-3 font-semibold">Great</h2>
          <p className="text-xs w-4/6 mx-auto pb-8 text-gray-300">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className=" w-1/2">
          <div id="white-card_container" className="w-3/4 mx-auto">
            <div></div>
            <h3 className="font-semibold py-4">Summary</h3>
            <div className="flex justify-between bg-red-100 rounded-md p-2 mb-2">
              <p className="font-semibold text-red-500 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-4 pr-1 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                Reaction
              </p>
              <p className="font-semibold text-xs">
                80<span className="text-gray-400"> / 100</span>
              </p>
            </div>

            <div className="flex bg-yellow-100 justify-between rounded-md p-2 mb-2">
              <p className="font-semibold text-yellow-500 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-4 pr-1 inline-block"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z"
                    clipRule="evenodd"
                  />
                </svg>
                Memory
              </p>
              <p className="font-semibold text-xs">
                92 <span className="text-gray-400"> / 100</span>
              </p>
            </div>

            <div className="flex bg-green-100 justify-between rounded-md p-2 mb-2">
              <p className="font-semibold text-green-400 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-4 pr-1 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                Verbal
              </p>
              <p className="font-semibold text-xs">
                61<span className="text-gray-400"> / 100</span>
              </p>
            </div>

            <div className="flex bg-blue-100 justify-between rounded-md p-2 mb-2">
              <p className="font-semibold text-blue-600 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-4 pr-1 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Visual
              </p>
              <p className="font-semibold text-xs">
                72<span className="text-gray-400"> / 100</span>
              </p>
            </div>
            <button className="bg-blue-900 w-full p-2 my-2 text-xs rounded-3xl text-white">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
