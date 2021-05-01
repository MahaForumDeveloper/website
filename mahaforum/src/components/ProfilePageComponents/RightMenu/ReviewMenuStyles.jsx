import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=> ({
  container:{

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
  }
}))

export default useStyles