import "./CreatePostPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { createPost } from "../api/postAPI";

function CreatePostPage() {
  const { boardType } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("boardType", boardType.toUpperCase());

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      await createPost(formData);
      alert("게시글이 등록되었습니다.");
      navigate(`/boards/${boardType}`);
    } catch (error) {
      alert("게시글 등록 실패: " + (error.response?.data || "서버 오류"));
    }
  };

  return (
    <div className="create-post-container">
      <h2 className="create-post-title">게시글 작성</h2>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="create-post-input"
        />

        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="create-post-textarea"
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="create-post-file"
        />

        <button type="submit" className="create-post-submit">
          등록하기
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
