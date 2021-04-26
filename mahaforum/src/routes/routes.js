// Import Component
import Signup from "../pages/Signup/Signup"
import Login from "../pages/Login/Login"
import Profile from "../pages/Profile/Profile"
import About from "../pages/About/About"
import Landing from "../pages/Landing/Landing"
import Contact from "../pages/Contact/Contact"

// buat return {label,path,component} yang bakal di ambil di App.js
const route = (label, path, component) => ({
    label,
    path,
    component
})

// Bikin route
export const LOGIN_PAGE = route("Login","/login",Login)
export const SIGNUP_PAGE = route("Signup","/signup",Signup)
export const PROFILE_PAGE = route("Profile","/profile",Profile)


//Misal nanti ada page ini:
export const LANDING_PAGE = route('Home', '/', Landing)
export const ABOUT_PAGE = route('About us', '/about', About)
export const CONTACT_PAGE = route('Contact us', '/contact', Contact)


// yang gak bisa diakses tanpa authentication
export const AllPrivateRoutes = [
    PROFILE_PAGE
]

// yang bisa diakses tanpa authentication
export const AllOpenRoutes = [
    LANDING_PAGE,
    LOGIN_PAGE,
    SIGNUP_PAGE,
    ABOUT_PAGE,
    CONTACT_PAGE,
]

export const NavbarRoutes = [
    LANDING_PAGE,
    ABOUT_PAGE,
    CONTACT_PAGE,
]