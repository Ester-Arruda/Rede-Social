import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import styles from './PostStyle.module.css'
import { Comments } from '../Comments/Comments'


export function Post({img, imgProfile, profileComments, title, text, publicationDate, author, amountLikes, amountShares, authorComments, comment }) {

  const dataObjeto = new Date(publicationDate);
  const dataFormatada = format(dataObjeto, 'dd/MM/yyyy HH:mm');

  return (
    <Card className={styles.container}>
      <CardHeader
        avatar={
          <Avatar>
            <img src={img} className={styles.img} />
          </Avatar>
        }
        title={author}
        subheader={dataFormatada}
      />
      <CardContent className={styles.textCard}>
        <Typography variant="body2" color="text.secondary" className={styles.textTitle}>
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="294"
        image={img}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className={styles.textTitle}>
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
          {amountLikes}
        </IconButton>
        <IconButton>
          <ShareIcon />
          {amountShares}
        </IconButton>
      </CardActions>
      <Comments profileComments={profileComments} authorComments={authorComments} comment={comment} />
    </Card>
  );
}
