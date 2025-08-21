import "./PostDetailPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById } from "../../api/postAPI";
import { useAuth } from "../../context/AuthContext";

function PostDetailPage() {
  const { boardType, postId } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const isAdmin = userInfo?.role === "ADMIN";

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getPostById(postId);
        setPost(data);
      } catch (e) {
        setErr("게시글을 불러오지 못했습니다.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [postId]);

  if (loading) {
    return <div className="post-detail-page">로딩 중...</div>;
  }

  if (err || !post) {
    return <div className="post-detail-page not-found">존재하지 않거나 삭제된 게시글입니다.</div>;
  }

  const created = new Date(post.createdAt);
  const formattedDate = `${created.getFullYear()}-${String(created.getMonth() + 1).padStart(2, "0")}-${String(
    created.getDate()
  ).padStart(2, "0")}`;

  return (
    <div className="post-detail-page">
      <h1 className="post-detail-title">{post.title}</h1>

      <div className="post-detail-meta">
        <span className="meta-author">{post.author?.name ?? "작성자"}</span>
        <span className="meta-dot">·</span>
        <span className="meta-date">{formattedDate}</span>
        <span className="meta-dot">·</span>
        <span className="meta-views">조회 {post.viewContent ?? 0}</span>
      </div>

      {/* 내용 */}
      <div className="post-detail-content">{post.content || ""}</div>

      {/* 첨부 이미지가 있다면 보여주기 (일반형도 이미지 지원) */}
      {post.images && post.images.length > 0 && (
        <div className="post-detail-images">
          {post.images.map((img) => (
            <img key={img.id} src={img.imageUrl} alt="첨부 이미지" />
          ))}
        </div>
      )}

      {/* 하단 우측 버튼: 수정(관리자만), 목록으로 */}
      <div className="post-detail-actions">
        {isAdmin && (
          <button className="board-write-btn" onClick={() => navigate(`/boards/${boardType}/${postId}/edit`)}>
            수정하기
          </button>
        )}
        <button className="board-write-btn cancel-btn" onClick={() => navigate(`/boards/${boardType}`)}>
          목록으로
        </button>
      </div>
    </div>
  );
}

export default PostDetailPage;
