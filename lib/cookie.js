import Router from 'next/router'

export function getToken(req = { cookies: [] }) {
    if (!process.browser) {
        return ((req.cookies.Authorization) ? req.cookies.Authorization : null);
    } else {
        return _getCookieFromDoc('Authorization');
    }
}

export function setToken(token) {
    document.cookie = "Authorization=" + token;
}

export function removeToken(token) {
    document.cookie = "Authorization=";
}

export function isLoggedIn(req = {}) {
    const token = getToken(req);

    if (!token) {
        return false;
    }

    return true;
}

export function checkAuth(req = {}, res = {}) {

    const token = getToken(req);

    if (!token) {
        if (!process.browser)
            res.redirect('/');
        else
            Router.push('/');
    }
}

export function checkAuthForPublic(req = {}, res = {}) {

    const token = getToken(req);

    if (token) {
        if (!process.browser)
            res.redirect('/dashboard');
        else
            Router.push('/dashboard');
    }
}

function _getCookieFromDoc(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}