export const validate = (data,type) => {
    const errors = {};
    if (type === "Signup") {
        if (!data.name.trim()) {
            errors.name = "Username required"
        } else {
            delete errors.name
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = "confirmPassword is required"
        } else if (data.confirmPassword !== data.password){
            errors.confirmPassword = "Password do not match"
        } else {
            delete errors.confirmPassword
        }
        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Accept our requlations"
        }
    }
    if (!data.email) {
        errors.email = "Email required"
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = "Email address is invalid"
    } else {
        delete errors.email
    }
    if (!data.password) {
        errors.password = "Password is required"
    } else if (data.password.length<6){
        errors.password = "Password need to be 6 character or mor"
    } else {
        delete errors.password
    }

    return errors;
}