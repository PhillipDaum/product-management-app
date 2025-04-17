import "./FeedbackCard.css";
// icons: speach bubble

function FeedbackCard(item) {
  return (
    <div className="feedback-card">
      <h3>{item.item.title}</h3>
      <p>{item.item.detail}</p>
      <button>{item.item.category}</button>
      {/* can add later: upvotes and comments + count*/}
    </div>
  );
}

export default FeedbackCard;
