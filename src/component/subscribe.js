const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe-header">
          Subscribe our newsletter to be notified when it'll be live.
        </div>

        <form className="form-inline">
          <input
            type="emil"
            placeholder="Email address"
            className="form-control"
          />
          <input type="button" value="Subscribe" className="subscribe_button" />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
