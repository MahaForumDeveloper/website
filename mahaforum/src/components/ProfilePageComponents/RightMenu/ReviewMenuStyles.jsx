import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=> ({
  container:{
   fontSize:"0.8rem",
    backgroundColor: 'blue',
  },
  star:{
    padding:'2px',
  },
  reviewDesc:{
    fontSize: '1rem'
  },
  reviewDate:{
    fontSize: '0.8rem'
  },

  cardContainer:{
    padding: '1rem'
  },

  reviewTitle:{
    marginBottom: '10px',
  },

  reviewTitleBold:{
    fontSize:'2.2rem'
  },

  reviewStarIcon:{
    color: 'orange',
  },

  reviewItemHead:{

  },

  reviewItemContainer:{
    marginBottom:'20px'
  },

  reviewSeeMore:{
    margin:'20px',
    fontSize:'1.5rem',
  },

  reviewSeeMoreText:{
    fontSize:'1.5rem',
    color:'#5a27ab',
    fontWeight:'50rem',
  },
}))

export default useStyles