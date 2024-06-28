const testEmail = (value)=> {
const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
return emailPattern.test(value)
}

const testPhone = (value)=>{
    const phonePatern = /^(\+98|0)?9\d{9}$/
    return phonePatern.test(value)
}

export default {
    testEmail,
   testPhone
}