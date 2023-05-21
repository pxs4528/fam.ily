import "../css/feedpage.css";

function AddButton() {
  return (
    <div class="add-post-button">
      <button class="button1">
        <div className="circle">
        <span style={{"position":"relative", "bottom":"2px"}}>
          +
        </span>
        </div>
        <span className="font-semibold">
        Add a post
        </span>
      </button>
    </div>
  );
}
export default AddButton;