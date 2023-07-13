const ImageSelector = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-4 flex">
      <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-primary">
        {children}
      </div>
    </div>
  );
};

export default ImageSelector;
