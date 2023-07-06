const Alert = ({ message }: { message: string }) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Alert;
