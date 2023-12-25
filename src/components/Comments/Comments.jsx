import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import styles from './CommentsStyle.module.css'

export function Comments({ profileComments, authorComments, comment }) {

  return (
    <CardHeader
      avatar={
        <Avatar>
          <img src={profileComments} className={styles.img} />
        </Avatar>
      }
      title={authorComments}
      subheader={comment}
    />
  )
}
