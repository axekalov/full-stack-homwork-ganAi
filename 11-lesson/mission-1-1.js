const userProfile = {
    id:402,
    userName:"code_ninja",
    location:{
        country :"USA",
        city: "Seattle"
    },
    preferencea:{
        hobbiea: ["cycling","reding","gaming"]

    }

}
const {
    userName:handle,
    location:{city},
    preferencea:{ hobbiea :[first]}

}=userProfile
console.log(handle);
console.log(city);
console.log(first);


