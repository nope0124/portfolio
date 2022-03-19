import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import MailIcon from '@material-ui/icons/Mail'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'
import { green, blue, purple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <>
    <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold" id="works">
      <div className="flex flex-col justify-center items-center px-8">
        <span className="text-4xl text-gray-800 mb-8">Contact</span>
        <div className="flex flex-wrap mx-2">
          <Box className={classes.root} display='flex' justifyContent='center' p={1}>
            <Link href='https://twitter.com/kiu124' color='inherit' target="_blank">
              <Avatar className={classes.blue}>
                <TwitterIcon />
              </Avatar>
            </Link>
            <Link href='https://github.com/nope0124' color='inherit' target="_blank">
              <Avatar className={classes.purple}>
                <GitHubIcon />
              </Avatar>
            </Link>
          </Box>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Contact;