import React from "react";
import Snackbar from "node-snackbar";
import CopyToClipboard from "react-copy-to-clipboard";
function Modal({ content, handleRefresh }) {
  const toBeCopiedRef = React.useRef(null);
  const [isCopied, setIsCopied] = React.useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    Snackbar.show({
      text: "Copied to clipboard",
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: "Close",
        onPress: () => {
          Snackbar.dismiss();
        },
      },
    });
  };

  return (
    <div className="modal" id="modal-2" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content w-md-three-quarter">
          <a href="#" className="btn close" role="button" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </a>
          <p className="w-24">{content}</p>

          {/* */}
          <div className="text-right mt-10 d-flex justify-content-end align-items-center">
            <div>
              <a
                href="#modal-2"
                className="hyperlink btn"
                onClick={handleRefresh}
              >
                refresh
              </a>
            </div>
            &nbsp;
            <CopyToClipboard onCopy={handleCopy} text={content}>
              <button className="btn">{isCopied ? "Copied" : "Copy"}</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
