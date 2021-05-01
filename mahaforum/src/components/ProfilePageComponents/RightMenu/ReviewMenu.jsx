import React from 'react';
import { Card, Typography, Grid, Button} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import useStyles from './ReviewMenuStyles'
import ReviewData from './data'

const ReviewMenu = () => {
    const classes=useStyles();

    return (
        <Card className={classes.cardContainer} >

            {/* Review Title */}
            <Grid container justify='left' alignItems='center' className={classes.reviewTitle} >
                <Grid item>
                    <Typography variant='h6' className={classes.reviewTitleBold} >
                        Reviews
                    </Typography>
                </Grid>
                <Grid item>
                    <StarIcon className={classes.reviewStarIcon}/>
                </Grid>
                <Grid item>
                    <Typography variant='p'>
                        4.9
                    </Typography>
                </Grid>
            </Grid>


            {/* Review Main Menu */}
        {
            ReviewData.map((data,idx)=>{
                return(
                <Grid container xs={12} className={classes.reviewItemContainer} key={idx}>
                    {/* Left part just from User Icon */}
                    <Grid item xs={2}>
                        <AccountCircleOutlinedIcon />
                    </Grid>

                    {/* Right part from the rest item */}
                    <Grid item xs={10}>
                        <Grid container className={classes.reviewItemHead} >

                            <Grid item xs={9}>
                                <Typography variant='h6'>
                                    {data.title}
                                </Typography>
                            </Grid>

                            <Grid item >
                                <StarIcon className={classes.reviewStarIcon}/>
                            </Grid>

                            <Grid item >
                                <Typography variant='p' className={classes.reviewDate} >
                                    {data.star}
                                </Typography>
                            </Grid>

                        </Grid>
    
                        <Typography variant='p' className={classes.reviewDesc} >
                            {data.desc}
                        </Typography>

                        <Typography className={classes.reviewDate} >
                            {data.date}
                        </Typography>

                    </Grid>
                </Grid> 
                )
            })
            
        }

        <Grid container justify='center'>
            <Button className={classes.reviewSeeMore} >
                <Typography className={classes.reviewSeeMoreText} >
                    See More
                </Typography>
            </Button>
        </Grid>



        </Card>
    );
}

export default ReviewMenu;
