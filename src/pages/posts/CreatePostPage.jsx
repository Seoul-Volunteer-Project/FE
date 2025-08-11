import "./CreatePostPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { createPost } from "../../api/postAPI";
import { motion, AnimatePresence } from "framer-motion";

function CreatePostPage() {
  const { boardType } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileDelete = (indexToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("제목을 입력해주세요.");
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

        {/* 커스텀 파일 선택 UI */}
        <label className="custom-file-upload">
          이미지 업로드
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>

        {/* 선택한 파일 목록 */}
        {files.length > 0 && (
          <ul className="create-post-file-list">
            <AnimatePresence>
              {files.map((file, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="create-post-file-item"
                >
                  <span>{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleFileDelete(index)}
                    className="delete-file-btn"
                  >
                    ✕
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}

        <div className="create-post-buttons">
          <button type="submit" className="board-write-btn">
            등록하기
          </button>
          <button
            type="button"
            className="board-write-btn cancel-btn"
            onClick={() => navigate(`/boards/${boardType}`)}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
