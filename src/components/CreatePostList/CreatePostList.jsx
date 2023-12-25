import styles from './CreatePostListStyle.module.css'
import { Post } from '../Post/Post'

export function CreatePostList({ users }) {

  if (!users || !users.users || !Array.isArray(users.users)) {
    return null;
  }

  const usersArray = users.users;

  return (
    <>
      <div className={styles.container}>
        {usersArray.map((user) => (
          <Post key={user.id} {...user} />
        ))}
      </div>
    </>
  )
}