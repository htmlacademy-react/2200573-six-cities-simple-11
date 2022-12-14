import { useAppSelector } from '../../hooks';
import { getIsAuthorised } from '../../store/user-process/selectors';
import { Comment } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

type ReviewsProps = {
  comments: Comment[];
  offerId: number;
}


function Reviews({comments, offerId}:ReviewsProps) : JSX.Element
{
  const count = comments.length;
  const isAuthorised = useAppSelector(getIsAuthorised);
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{count}</span></h2>
      <ul className="reviews__list">
        {comments.map((item: Comment) => (<Review key={item.id} comment={item}/>))}
      </ul>
      {isAuthorised &&
        <ReviewForm offerId={offerId}/>}
    </section>
  );
}

export default Reviews;
