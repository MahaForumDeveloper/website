import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( (theme)=> ({
    navTitle:{
        display: 'flex',
        flexDirection: 'column',
        fontSize:'.2px',
        padding:'.2rem'
    },
    navIcon:{
        width:"2.4rem",
        height:"2.4rem"
    },

    navTitleText:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:'.7rem'
    },

    navTitleName:{
        fontSize:'1rem',
    },

    navTitleJob:{
        fontSize:'0.9rem',
    },

    navButton:{
        borderRadius:'50%',
        color:'black'
    },

    navContainer:{
        marginBottom:'0.5rem'
    }
}))

export default useStyles