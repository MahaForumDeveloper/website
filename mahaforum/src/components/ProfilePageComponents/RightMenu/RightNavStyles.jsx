import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=> ({
    navTitle:{
        display: 'flex',
        flexDirection: 'column',
        fontSize:'.2px',
        padding:'.2rem'
    },

    navTitleText:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:'.8rem'
    },

    navTitleName:{
        fontSize:'18px',
    },

    navTitleJob:{
        fontSize:'15px',
    },

    navButton:{
        borderRadius:'50%',
        color:'black'
    },

    navContainer:{
        marginBottom:'8px'
    }
}))

export default useStyles