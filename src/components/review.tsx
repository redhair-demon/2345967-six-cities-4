import { Review } from '../types/rewiew';

type ReviewProps = {
  review: Review;
}

function ReviewItem({review}: ReviewProps): JSX.Element {
  return (
    <li key={review.id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar.src} width="54" height="54" alt={review.user.avatar.alt} />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={new Date(review.date).toISOString()}> {new Date(review.date).toDateString()}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
