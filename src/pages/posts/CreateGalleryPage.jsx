import "./CreatePostPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import { createPost } from "../../api/postAPI";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GalleryImageItem from "./GalleryImageItem";

function CreateGalleryPage() {
  const { boardType } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const fileWithPreview = newFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...fileWithPreview]);
  };

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setFiles((prevFiles) =>
      update(prevFiles, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevFiles[dragIndex]],
        ],
      })
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", ""); // 갤러리 게시물은 내용 비움
    formData.append("boardType", boardType.toUpperCase());

    files.forEach((f) => {
      formData.append("files", f.file);
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

        <DndProvider backend={HTML5Backend}>
          <div className="image-grid">
            {files.map((f, idx) => (
              <GalleryImageItem
                key={f.preview}
                index={idx}
                id={f.preview}
                preview={f.preview}
                moveImage={moveImage}
              />
            ))}
          </div>
        </DndProvider>

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

export default CreateGalleryPage;
