const posts = [
  {
    id: 1,
    user: { name: 'alex', avatar: 'https://i.pravatar.cc/100?img=12' },
    image: 'https://images.news18.com/webstories/uploads/2024/12/SaveClip.App_337178060_909730700263210_7587554908137164166_n-2024-12-cde86a74dd884ed3d6fd70c2cdfa46d7.jpg',
    likes: 128,
    caption: 'Exploring golden hour trails and capturing the calm between the chaos. The light just hits different today.',
    comments: [
      { user: 'mira', text: 'The colors are unreal. Love this shot!' },
      { user: 'devon', text: 'Okay now I need to go outside 😅' },
      { user: 'sam', text: 'Where is this? Looks peaceful.' },
    ],
  },
  {
    id: 2,
    user: { name: 'alex', avatar: 'https://i.pravatar.cc/100?img=12' },
    image: 'https://images.news18.com/ibnlive/uploads/2022/08/virat-anushka-3.jpg',
    likes: 128,
    caption: 'Exploring golden hour trails and capturing the calm between the chaos. The light just hits different today.',
    comments: [
      { user: 'mira', text: 'The colors are unreal. Love this shot!' },
      { user: 'devon', text: 'Okay now I need to go outside 😅' },
      { user: 'sam', text: 'Where is this? Looks peaceful.' },
    ],
  },
  {
    id: 3,
    user: { name: 'alex', avatar: 'https://i.pravatar.cc/100?img=12' },
    image: 'https://images.unsplash.com/photo-1637088660675-6930e63e51a7?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 128,
    caption: 'Exploring golden hour trails and capturing the calm between the chaos. The light just hits different today.',
    comments: [
      { user: 'mira', text: 'The colors are unreal. Love this shot!' },
      { user: 'devon', text: 'Okay now I need to go outside 😅' },
      { user: 'sam', text: 'Where is this? Looks peaceful.' },
    ],
  },
  {
    id: 4,
    user: { name: 'jordan', avatar: 'https://i.pravatar.cc/100?img=32' },
    image: 'https://images.unsplash.com/photo-1755306064491-76a575cf0900?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 342,
    caption: 'Weekend ritual: coffee, vinyl, and a good book. Reset mode engaged.',
    comments: [
      { user: 'alex', text: 'This is the vibe 🔥' },
      { user: 'riley', text: 'What record is that? Cover looks dope.' },
    ],
  },
  {
    id: 5,
    user: { name: 'sana', avatar: 'https://i.pravatar.cc/100?img=5' },
    image: 'https://images.unsplash.com/photo-1560095633-1f27e954277c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 89,
    caption: 'Tiny moments, big memories. Filed under “joy I didn’t plan for.”',
    comments: [
      { user: 'jordan', text: 'This made my day 🫶' },
      { user: 'lee', text: 'The composition is perfect.' },
    ],
  },
  {
    id: 6,
    user: { name: 'sana', avatar: 'https://i.pravatar.cc/100?img=5' },
    image: 'https://plus.unsplash.com/premium_photo-1755105194934-18de204e9268?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 89,
    caption: 'Tiny moments, big memories. Filed under “joy I didn’t plan for.”',
    comments: [
      { user: 'jordan', text: 'This made my day 🫶' },
      { user: 'lee', text: 'The composition is perfect.' },
    ],
  }
]

import PostCard from '../components/PostCard.jsx'

export default function Home() {
  return (
    <div className="container">
      <div className="feed" aria-label="Home feed">
        {posts.map(post => (
          <PostCard
            key={post.id}
            username={post.user.name}
            avatarUrl={post.user.avatar}
            postImage={post.image}
            likesCount={post.likes}
            caption={post.caption}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  )
}