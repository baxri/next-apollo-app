import Router from 'next/router'

export function getToken(req = {}) {
    if (!process.browser) {
        return (req.cookies && req.cookies.Authorization) ? req.cookies.Authorization : '';
    } else {
        return _getCookieFromDoc('Authorization');
    }
}

export function setToken(token) {
    document.cookie = "Authorization=" + token;
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
            res.redirect('/login');
        else
            Router.push('/login');
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