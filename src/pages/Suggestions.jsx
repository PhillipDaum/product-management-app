import Nav from "../components/nav/Nav";
// import feedbackcard

function Suggestions() {
  return (
    <>
      {/* Nav */}
      <Nav />
      {/* SortByAndFeedback */}
      <div>
        {/* some icon */}
        {/* make number dynamic */}
        <h3>6 Suggestions</h3>
        <button>+ Add Feedback</button>
      </div>
      <div>
        {/* if there are suggestions */}
        {/* map all of the suggestions here */}
        {/* else, render this */}
        <div>
          <img src="./detective.svg" alt="detective illustration" />
          <h1>There is no feedback yet.</h1>
          <p>Got a suggestion? Found a bug that needs to be squashed?</p>
          <p>We love hearing about new ideas to imrove our app.</p>
          <button>+ Add Feedback</button>
        </div>
      </div>
    </>
  );
}

export default Suggestions;
