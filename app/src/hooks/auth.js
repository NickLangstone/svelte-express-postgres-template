
import { browser } from '$app/env';
import { writable } from 'svelte/store';


const user = 'nick@gmail.com'
const pass = '123456'

function setCookie(cname, cvalue, exdays) {
    if( browser )
        window.localStorage.setItem(cname, cvalue);
  }
  
function getCookie(cname){
    if ( browser )
        return window.localStorage.getItem(cname);
    else
        return '';
}


/**
 * @type {any}
 */
export const checkLoggedIn = function checkLoggedIn(){
    if ( getCookie('isLoggedIn') == "1" )  

        return true;
    else
        return false;
}

/**
 * @type {any}
 */
export const getUsersName = function getUsersName(){
    return getCookie('LoggedInUser').split("@")[0];
}

// Logout - just clear the session data
/**
 * @type {any}
 */
 export const logout = function logout(){
    setCookie('isLoggedIn', "0", 0);
    setCookie('LoggedInUser', "", 0);
}

// return 1 if the user details are correct
export const getUserDetails = async ( username, password ) => {
    // in real life - need to read from the DB and check credentials in the backend ....

    // we are keeping the loggerd in state and username in session variable - so if the user navigates to a different route
    // and the app gets reloaded we do not loose the loggedin state
	//if ( username === user && password === pass ){
    if ( password === pass ){
        setCookie('isLoggedIn', "1", 0);
        setCookie('LoggedInUser', username, 0);
       
		return 1
    }
}