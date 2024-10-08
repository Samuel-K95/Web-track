/**
 * Loading page Component
 */
const Loading = () => {
  return (
    <div
      data-id="load-spinner"
      className="flex items-center justify-center h-screen w-screen"
    >
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default Loading;
