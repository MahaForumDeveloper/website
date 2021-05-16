import React from 'react';
import { Card, Typography, Grid} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import useStyles from './ReviewMenuStyles'


const ReviewMenu = () => {
    const classes=useStyles();
    const ReviewData = []
    return (
        <Card classes={{ root: classes.card }} >

            {/* Review Title */}
            <Grid container justify='left' alignItems='center' className={classes.reviewTitle} >
                <Grid item>
                    <Typography variant='h6' className={classes.reviewTitleBold} >
                        Reviews
                    </Typography>
                </Grid>
                <Grid style={{marginLeft:"1rem",marginTop:"0.2rem"}}  item>
                    <Typography variant='h6'>
                       0 
                    </Typography>
                </Grid>
                <Grid style={{marginLeft:".2rem",marginTop:"0.1rem"}}  item>
                    <StarIcon className={classes.reviewStarIcon}/>
                </Grid>
            </Grid>


            {/* Review Main Menu */}
        {
            (ReviewData.length === 0)
            ?
            <div style={{height:"55vh"}}>
                <span>There is no review yet!</span>
            </div>
            :
            ReviewData.map((data,idx)=>{
                return(
                    <ReviewText idx={idx} data={data}/>
               )
            })
            
        }


        <Grid container justify='center'>
            <a href="#" className={classes.reviewSeeMoreLink}>See More</a>
        </Grid>



        </Card>
    );
}

export default ReviewMenu;

function ReviewText({data,idx}){
    const classes=useStyles();
    return (
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
}