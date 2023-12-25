import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './FriendsList.module.css'

export function FriendsList({ img, name,  amountCommonFriends }) {
  
  return (
    <Card className={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${amountCommonFriends} amigos em comum`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
