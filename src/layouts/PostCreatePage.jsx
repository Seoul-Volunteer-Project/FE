import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { createPost } from "../../api/postAPI"; // POST 요청 함수

function PostCreatePage() {
  const navigate = useNavigate();
  const { boardType: routeBoardType } = useParams(); // /youthInfo/:boardType/create 등에서 사용
  const location = useLocation();

  // 경로 기반으로 게시판 타입 결정
  const boardType = location.pathname.startsWith("/youthInfo/")
    ? routeBoardType?.toUpperCase()
    : location.pathname.startsWith("/support/")
    ? "SUPPORT"
    : location.pathname.startsWith("/community/board")
    ? "COMMUNITY"
    : "GALLERY";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("boardType", boardType);
    if (imageFile) formData.append("image", imageFile);

    try {
      await createPost(formData); // API 호출
      alert("게시글이 등록되었습니다.");
      navigate(-1); // 뒤로가기 or 목록으로
    } catch (err) {
      alert("게시글 등록 실패");
    }
  };

  return (
    <div className="post-create-page">
      <h2>게시글 작성</h2>

      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="post-title-input"
      />

      <textarea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="post-content-textarea"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="post-image-upload"
      />

      <button onClick={handleSubmit} className="post-submit-button">
        작성 완료
      </button>
    </div>
  );
}

export default PostCreatePage;
