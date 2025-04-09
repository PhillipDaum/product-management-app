
function Nav() {

  const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <>
    {/* Container - Desktop: side by side, Tablet - Top and Bottom */}
    <div>
      {/* my comany box */}
      <h3>My company</h3>
      <p>Feedback Board</p>
    </div>

    <div>
      <button>all</button>
      {categories.map((item, index) => <button key={index}>{item}</button>)}
    </div>

    </>
  )
}

export default Nav
