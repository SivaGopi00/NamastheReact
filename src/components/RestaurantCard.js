const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="image-style"
        src="https://b.zmtcdn.com/data/pictures/8/19937288/f678e47830f513389b78d4f2205bdb15_o2_featured_v2.jpg?output-format=webp"
        alt="resimage"
      />
      <h4>Restaurant Name</h4>
      <h4>costforTwo</h4>
      <h4>cuisines</h4>
    </div>
  );
};

export default RestaurantCard;
