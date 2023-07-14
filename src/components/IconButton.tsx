const IconButton = ({
  children,
  disabled,
}: {
  disabled: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="submit"
      className="btn btn-square mx-2 bg-primary"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;
