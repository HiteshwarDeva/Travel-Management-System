const validation = (values) => {
    let error = {}
    const passwordpattern = /^.{8,}$/
    if(values.name === ""){
        error.name = "name should not be Empty"
    }else{
        error.name = ""
    }
    if(values.username ===""){
        error.username = "Username should not be Empty"
    }
    else{
        error.username = ""
    }
    if(error.password === ""){
        error.password = "Password should not be Empty"
    }
    else if(!passwordpattern.test(values.password)){
        error.password = "Password minimum length should be 8 characters"
    }
    else{
        error.password = ""
    }
    return error
}

export default validation