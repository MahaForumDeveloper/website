import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=> ({
  container:{
   fontSize:"0.8rem",
    backgroundColor: 'blue',
  },

  card:{
    borderRadius:'40px',
    padding:'2rem',
    boxShadow:'2px 2px 3px solid black',
    border:'1px solid rgba(0,0,0,0.1)'
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
    marginBottom: '30px',
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
    padding:'10px',
    borderRadius:'5px'
  },

  reviewSeeMoreText:{
    fontSize:'1.5rem',
    color:'#5a27ab',
    fontWeight:'50rem',
    textTransform:'none'
  },

  reviewSeeMoreLink:{
    textDecoration:'none',
    color:'#5a27ab',
    fontSize:'1.1rem',
    fontWeight:'100rem',
    transition: 'all 0.5s ease',
    '&:hover':{
      textDecoration:'none',
      opoacity:'0.7',
      textShadow: '0.15px 0.15px 1px rgba(0,0,0,0.3)'
    }
  },

}))

export default useStyles