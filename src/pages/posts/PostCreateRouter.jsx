import { useParams } from "react-router-dom";
import CreatePostPage from "./CreatePostPage";
import CreateGalleryPage from "./CreateGalleryPage";

function PostCreateRouter() {
  const { boardType } = useParams();
  const galleryBoards = [
    "GALLERY",
    "HOUSING",
    "EDUCATION",
    "FINANCE",
    "POLICY",
  ];

  if (galleryBoards.includes(boardType.toUpperCase())) {
    return <CreateGalleryPage />;
  }
  return <CreatePostPage />;
}

export default PostCreateRouter;
