import './Profile.css';

const Profile = ({avatar, cover, name, age, city, followers, likes, posts}) => {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src={cover} alt="cover pic" className="profile__cover-image" />
        <img src={avatar} alt="profile pic" className="profile__avatar-image" />
      </div>

      <div className="profile__details">
        <p className="profile__name">
          {name}
          <span className="profile__age">{age}</span>
        </p>
        <p className="profile__city">{city}</p>
        <div className="profile__stats">
          <p>
            <span className="profile__stats-data">{followers}</span>
            <br />
            Followers
          </p>
          <p>
            <span className="profile__stats-data">{likes}</span>
            <br />
            Likes
          </p>
          <p>
            <span className="profile__stats-data">{posts}</span>
            <br />
            Posts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
