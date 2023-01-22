import React, { useRef } from "react";
import JoditEditor from "jodit-react";
const Editor = ({ value, onChange }) => {
  const editor = useRef(null);
  const config = {
    buttons: ["bold", "italic", "underline", "ol", "ul"],
    placeholder: "Введите описание о товаре",
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
