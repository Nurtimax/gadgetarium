import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaUnderline,
} from "react-icons/fa";
import { styled } from "@mui/material";
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <StyledWrapper>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active btn" : "btn"}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active btn" : "btn"}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active btn" : "btn"}
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active btn" : "btn"}
      >
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active btn" : "btn"}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active btn" : "btn"}
      >
        <FaListOl />
      </button>
    </StyledWrapper>
  );
};

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({ placeholder: "Введите описание о товаре" }),
    ],
    content: ``,
  });

  return (
    <>
      <p>
        Описание <span style={{ color: "red" }}>* </span>
      </p>
      <MenuBar editor={editor} />
      <StyledTexteria>
        <EditorContent editor={editor} />
      </StyledTexteria>
    </>
  );
};
export default TextEditor;

const StyledWrapper = styled("main")(() => ({
  width: "812px",
  height: "68px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "4px",
  paddingLeft: "50px",
  border: "1px solid grey",
  borderBottom: "none",
  ".btn": {
    width: "28px",
    height: "28",
    marginRight: "80px",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
  ".is-active": {
    background: "rgb(197 197 197)",
    height: "30px",
    width: "30px",
  },
}));
const StyledTexteria = styled("div")(() => ({
  width: "812px",
  border: " 1px solid grey",
  borderRadius: "4px",
  ".ProseMirror": {
    border: "none",
    minHeight: "300px",
    padding: "20px",
  },
}));
