import userPlaceholder from "../assets/placeholderUserImage.png";

const PlaceholderUserImage = () => {
  return (
    <img
      className="inline-block h-12 w-12 rounded-full object-cover"
      src={userPlaceholder}
    />
  );
};

export default PlaceholderUserImage;
