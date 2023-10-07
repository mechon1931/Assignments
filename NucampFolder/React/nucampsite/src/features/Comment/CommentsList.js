import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    if(isLoading) {
        return (
            <Col md='5' className='m-1'>
                <Loading />
            </Col>
        );
    };

    if(errMsg) {
        return (
            <Col md='5' className='m-1'>
                <Error errMsg={errMsg} />
            </Col>
        );
    };

    return (
        <Col md='5' className='m-1'>
          <h4>Comments</h4>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))
          ) : (
            <p>There are no comments for this campsite yet.</p>
          )}
          <CommentForm campsiteId={campsiteId} />
        </Col>
      );
    };

export default CommentsList;