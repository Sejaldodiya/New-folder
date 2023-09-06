//create collection employees having fields name,age,gender,salary,position,joining date 
//1) insert 7 records into employee collection.
// 2) find document by position full stack developer
// 3) retrive name of employee who are male and age is between 25 to 40
//4) name of employee with the highest salary .
// 5) name and position excluding the id field.
//6) employee who are ethier software develpoer and full satack developer and are below 30 
// 7) give a 5% salary recies to all data scienties.
//8) delete all employee older than 50 years.

const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/create').then(()=>{console.log('sucess')}).catch((err)=>{console.error(err)})
//mg.pluralize(null) -> this is for you can not pluralize the table name
const mySchema=new mg.Schema({name:String,age:Number,gender:String,salary:Number,position:String,joining_date:{type:Date,default:new Date()}})
const person=new mg.model('employee',mySchema)
const fun = async ()=>{
     const data = [{name:'sejal',age:20,gender:'Female',salary:50000,position:'Full stack developer'},
     {name:'foram',age:20,gender:'Female',salary:55000,position:'software developer'},
     {name:'abc',age:26,gender:'male',salary:60000,position:'Full stack developer'},
     {name:'def',age:58,gender:'male',salary:80000,position:'Full stack developer'},{name:'xyz',age:20,gender:'Female',salary:50000,position:'data scieties'},
     {name:'XYZ',age:35,gender:'Female',salary:65000,position:'software developer'},
     {name:'Sejal',age:20,gender:'Female',salary:50000,position:'data scieties'}]
     const result = []
     //result.push( await person.insertMany(data))
     result.push(await person.find({position:'Full stack developer'}))
     result.push(await person.find({$and:[{gender:'male'},{age:{$lt:40,$gt:25}}]}))
     result.push(await person.find({},{name:1}).sort({salary:-1}).limit(1))
     result.push(await person.find({},{name:1,position:1,_id:0}))
     result.push(await person.find({$and:[{age:{$lt:30}},{$or:[{position:'software developer'},{position:'Full stack developer'}]}]}))
     result.push(await person.updateMany({position:'data scieties'},{$mul:{salary:1.05}}))
     result.push(await person.deleteMany({age:{$gt:50}}))
     console.log(result)
}
fun()