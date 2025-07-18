import { HashLink as Link } from "react-router-hash-link";

const SingleBlogContentV1 = ({ blog }) => {
  const { _id, thumb, blogTitle, date,mainText, authorName } = blog;

  return (
    <>
      <div className="blog-style-one item">
        <div className="thumb">
          <Link to={`/blog/${_id}#`}>
            <img src={thumb} alt="Image Not Found" />
          </Link>
        </div>
        <div className="info">
          <div className="meta">
            <ul>
              <li>
                <Link to="#">{authorName}</Link>
              </li>
              <li>{date}</li>
            </ul>
          </div>
          <h2>
            <Link to={`/blog/${_id}#`}>{blogTitle}</Link>
          </h2>
          <p>{mainText}</p>
          <Link to={`/blog/${_id}#`} className="button-regular">
            Continuar Lendo <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlogContentV1;
