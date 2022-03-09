import React from "react";
function InstructionBoard() {
  return (
    <div className="card">
      <div>
        <p>
          Start converting your JPEG, JPG, or PNG image to text by adding a
          task.
        </p>
        <span className="text-danger">
          NOTE: <br />
          <ul>
            <li>Image size must not be more than 1mb</li>
            <li>Image is automatically deleted after conversion</li>
            <li>
              Image is automatically deleted if unused for a short period of
              time
            </li>
            <li>
              Toggle dark mode with <code>SHIFT + D</code>
            </li>
          </ul>
        </span>
      </div>
      <div className="text-center">
        <code>
          Made with ❤ by <a href="https://iamdellyson.com">Dellyson</a>
        </code>
      </div>
    </div>
  );
}

export default InstructionBoard;
