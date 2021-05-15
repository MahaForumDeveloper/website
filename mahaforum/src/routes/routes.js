// Import Component
import Signup from "../pages/Signup/Signup"
import Login from "../pages/Login/Login"
import Profile from "../pages/Profile/Profile"
import About from "../pages/About/About"
import Landing from "../pages/Landing/Landing"
import Contact from "../pages/Contact/Contact"
import Creative from "../pages/Creative/Creative"
import Professional from "../pages/Professional/Professional"
import Explore from "../pages/Explore/Explore"
import Inbox from "../pages/Inbox/Inbox"
import Settings from "../pages/Settings/Settings"


// buat return {label,path,component} yang bakal di ambil di App.js
const route = (label, path, component) => ({
    label,
    path,
    component
})

// Bikin route

export const SIGNUP_PAGE = route("Signup","/signup",Signup)
export const LOGIN_PAGE = route('Login', '/login', Login)
export const PROFILE_PAGE = route("Profile","/profile",Profile)
export const CREATIVE_PAGE = route('Creative', '/creative', Creative)
export const PROFESSIONAL_PAGE = route('Professional', '/professional', Professional)
export const EXPLORE_PAGE = route('Explore', '/explore', Explore)
export const INBOX_PAGE = route('Inbox', '/inbox', Inbox)
export const SETTINGS_PAGE = route('Settings', '/settings', Settings)

//Misal nanti ada page ini:
export const LANDING_PAGE = route('Home', '/', Landing)
export const ABOUT_PAGE = route('About us', '/about', About)
export const CONTACT_PAGE = route('Contact us', '/contact', Contact)


// yang gak bisa diakses tanpa authentication
export const AllPrivateRoutes = [
    PROFILE_PAGE,
    CREATIVE_PAGE,
    PROFESSIONAL_PAGE,
    EXPLORE_PAGE,
    INBOX_PAGE,
    SETTINGS_PAGE
]

export const ThreeColsLayoutRoutes = [
    PROFILE_PAGE,
    CREATIVE_PAGE,
    PROFESSIONAL_PAGE,
    EXPLORE_PAGE,
    INBOX_PAGE,
    SETTINGS_PAGE
]

export const AllOpenRoutes = [
    LANDING_PAGE,
    LOGIN_PAGE,
    SIGNUP_PAGE,
    ABOUT_PAGE,
    CONTACT_PAGE,
]

export const NavbarRoutes = [
    LOGIN_PAGE,
]