

const conectDatabase= async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI).then((data)=>{
            console.log(`mongoDB telah tersambung`)
        })
    } catch (error) {
        console.log(`conection error : ${error.message}`)
        process.exit(1)
        
    }
}

module.exports = conectDatabase;