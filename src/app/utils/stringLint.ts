
export default class StringLint {
    stringLint(username, firstName, lastName) {
        const userName = firstName.trim().replace(/ /g, "") + '.' + lastName.trim().replace(/ /g, "");
        const email = userName + '@blueface.com'
        if (username) {
            return userName
        } else {
            return email
        }
    }
}