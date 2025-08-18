
import ReviewList from '@/components/ReviewList'

export default function ReviewsPage() {
  // TODO: fetch global reviews for marketing/social proof
  const reviews = [
    { id: 'r1', stars: 5, text: 'Amazing artistry and professionalism.', authorName: 'Priya' },
    { id: 'r2', stars: 4, text: 'Loved the intricate patterns!', authorName: 'Keerthi' }
  ]
  return (
    <div className="grid">
      <h2>Latest Reviews</h2>
      <ReviewList reviews={reviews} />
    </div>
  )
}
