// read opration means find method.
const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/1').then(()=>{console.log('sucess')}).catch((err)=>{console.error(err)})
//mg.pluralize(null) -> this is for you can not pluralize the table name
const mySchema=new mg.Schema({name:{type:String,require:true},age:Number,gender:String,active:Boolean,date:{type:Date,default:new Date()}})
const person=new mg.model('user',mySchema)

const getDoc =  async ()=>{
     // const result = await person.find({name:'abc'}).limit(1)
     //const result = await person.find({$and:[{age:{$lt:70,$gt:25}}]})
     const result = await person.find().sort({name:-1})
     console.log(result)
}
getDoc()
