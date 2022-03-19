import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

// 画像ファイルをインポート
import ImageFile from '../static/images/my_avatar.jpg'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box display='flex' justifyContent='center' p={1} >
        <Avatar
          alt='Ryota Kamimura'
          src={ImageFile}
          className={classes.large}
        />
      </Box>
      <Box display='flex' justifyContent='center' p={1} >
        <Typography variant='body1' align="center">
          <div className="text-gray-800 font-bold">
            Name:  上村亮太(nope)<br />
            University:  筑波大学新B4<br />
            Interest:  ゲーム開発 / 機械学習 / 競プロ
          </div>
        </Typography>
      </Box>
    </>
  );
}

export default MyAvatar;