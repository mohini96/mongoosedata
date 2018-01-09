var express=require('express');
var bodyParser=require('body-parser');
var a=express();
var arr=[]
var arr1=[]
a.get('/',(req,res)=>{
   console.log('hi')
});

a.get('/names/:arr',(req,res)=>{
    res.send(arr[req.params.arr]);
});
a.use(bodyParser.json())
a.post('/name',(req,res)=>
{
       console.log("twst");
     console.log(req.body.arr);
     arr1=req.body.arr;
    res.send("your array"+arr1);
     console.log(arr1);
});
a.get('/name',(req,res)=>
{
    console.log(arr1);
});
a.get('/name/:id',(req,res)=>
{
    var id=req.params.id;
    console.log(id);
    console.log("value of index:"+id+"="+arr1[`${id}`]);
    res.send("value of index:"+id+"="+arr1[`${id}`])
   // console.log("remove value of index:"+id+"="+arr1.splice(id,1));

});
//delete element
a.delete('/name/:id',(req,res)=>{
    var id=req.params.id;
    console.log("remove value of index:"+id+"="+arr1.splice(id,1));
    console.log("array after removing value:"+" "+arr1);
    res.send("array after removing value:"+" "+arr1);

})
//put the value
a.put('/name/id',(req,res)=>{
    console.log("adding value...:");
    arr1.push(9)
    console.log(arr1);
    res.send("array after add"+arr1);
})
//maximamu
a.get('/Max/:id',(req,res)=>
{
    a=[]
    str='';
   a=arr1.sort();
    console.log(a);
    for(let x in a)
    {
        a[x]=a[x].toString();
    }
    console.log(a);
   a.forEach((x)=>{
        str+=x;
    });
    console.log("minimum number");
    console.log(str)
    console.log("maximum number");
    var min_sort=[];
    min_sort=arr1.sort().reverse();
    console.log(min_sort);
    var strmin=''
    min_sort.forEach((x)=>{
        strmin+=x;
    });
    console.log(str);
    res.send("mini value"+str);
    //console.log(a.reverse());
});
a.listen(3000,()=>{
    console.log("started");
})
