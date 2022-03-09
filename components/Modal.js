import React from "react";

function Modal({ content }) {
  return (
    <div className="modal" id="modal-2" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <a href="#" className="btn close" role="button" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </a>
          <h5 className="modal-title">Sign in to your account</h5>
          <p>{content}</p>
          <div className="text-right mt-10">
            {/* <a href="#modal-2" class="hyperlink">Forgot password?</a>  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
