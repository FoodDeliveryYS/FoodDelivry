var sandwiches=[{
    name:'thon',
    price:4000,
    image:""
},{
    name:'fromage',
    price:3200,
    image:""
},{
    name:'jambon',
    price:3000,
    image:""
},{
    name:'salami',
    price:3500,
    image:""
},{
    name:'escalope',
    price:5000,
    image:""
},{
    name:'viande',
    price:5500,
    image:""
},{
    name:'thon fromage',
    price:5000,
    image:""
},{
    name:'escalope fromage',
    price:6500,
    image:""
},{
    name:'viande fromage',
    price:7000,
    image:""
},{
    name:'double fromage',
    price:4000,
    image:""
},{
    name:'salami fromage',
    price:4500,
    image:""
},{
    name:'thon oeuf',
    price:4700,
    image:""
},{
    name:'oeuf fromage',
    price:4000,
    image:""
},{
    name:'thon oeuf fromage',
    price:5500,
    image:""
}]
var jus=[{name:'jus de citron ',
price:3500,
image:''},
{name:"jus de d'orange ",
price:4000,
image:''},{name:"jus d'ananas" ,
price:6000,
image:''},{name:'jus de fraise ',
price:5000,
image:''},{name:'jus de cerise ',
price:6000,
image:''},{name:'jus de mangue ',
price:5000,
image:''},{name:'jus de peche ',
price:4500,
image:''},{name:'jus de abricot ',
price:4500,
image:''},{name:'jus de menthe ',
price:2500,
image:''},]
var iceCream=[{name:'glace a la fraise',
price:3500,
image:''},{name:'glace a la vanille',
price:3500,
image:''},{name:'glace au citron',
price:3500,
image:''},{name:'glace a la pistache',
price:3500,
image:''},{name:'glace a la chwingum',
price:3500,
image:''},{name:'glace au chocolat',
price:3500,
image:''},{name:'glace a la noisette',
price:3500,
image:''}]

var pizza=[{
    name : 'Margerita' ,
    size : 'S',
    price : 5000 , 
    image : ''
},
{
    name : 'Margerita' ,
    size : 'M',
    price : 7000 , 
    image : ''
},
{
name : 'Margherita' ,
    size : 'L',
    price : 17000 ,
    image : '' 
},
{
    name : 'Siciliana' ,
    size : 'S',
    price : 6500 , 
    image : ''
},
{
    name : 'Siciliana' ,
    size : 'M',
    price : 9500 , 
    image : ''
},
{
name : 'Siciliana' ,
    size : 'L',
    price : 19000 , 
    image : ''
},
{
    name : 'Tonno' ,
    size : 'S',
    price : 6500 , 
    image : ''
},
{
    name : 'Tonno' ,
    size : 'M',
    price : 9500 , 
    image : ''
},
{
name : 'Tonno' ,
    size : 'L',
    price : 19000 , 
    image : ''
},
{
    name : 'Regina' ,
    size : 'S',
    price : 6500 , 
    image : ''
},
{
    name : 'Regina' ,
    size : 'M',
    price : 9500 , 
    image : ''
},
{
name : 'Regina' ,
    size : 'L',
    price : 19000 , 
    image : ''
},
{
    name : 'Peperoni' ,
    size : 'S',
    price : 8000 , 
    image : ''
},
{
    name : 'Peperoni' ,
    size : 'M',
    price : 11000 , 
    image : ''
},
{
name : 'Peperoni' ,
    size : 'L',
    price : 22000 , 
    image : ''
},
{
    name : 'Frutti Di Mare' ,
    size : 'S',
    price : 16000 , 
    image : ''
},
{
    name : 'Frutti Di Mare' ,
    size : 'M',
    price : 22000 , 
    image : ''
},
{
    name : 'Frutti Di Mare' ,
    size : 'L',
    price : 39000 , 
    image : ''
}]


var Crepe = [{

    type : 'Sweet crepes',
    name : 'Nutella', 
    price : 8000, 
    image : ''
},
{
    type : 'Sweet crepes',
    name : 'Nutella and Bananas', 
    price : 12000, 
    image : ''
},
{
    type : 'Sweet crepes',
    name : 'Apple Cinnamon Brown Sugar ', 
    price : 12000, 
    image : ''
}, 
{
    type : 'Sweet crepes',
    name : 'Smores Nutella', 
    price : 12000, 
    image : ''
    
},  
{
    type : 'Savory crepes',
    name : 'Cheese', 
    price : 12000, 
    image : ''
},
{
    type : 'Savory crepes',
    name : 'Ham and Cheese', 
    price : 12000, 
    image : ''
}, 
{
    type : 'Savory crepes',
    name : 'Chiken and cheese', 
    price : 12000, 
    image : ''
}, 
{
    type : 'Savory crepes',
    name : 'Thon', 
    price : 12000, 
    image : ''
},     
]
var restos=[{name:'baguette & baguette',id:0,adresse:'menzeh 6',menu:sandwiches,category:'sandwiches', 
image : '../IMG/restaurant/baguette.jpg'},
{name:'paradice',id:1,adresse:'lac ',menu:iceCream,category:'ice cream', 
image : ''},
{name:'fruit land',id:2,adresse:'Ariana ',menu:jus,category:'jus', 
image : ''},
{name:'popolare',id:3,adresse:'Nasr',menu:pizza,category:'pizza', 
image : ''},
{name:'Crepe Factory',id:4,adresse:'menzeh 9',menu:Crepe,category:'crepe', 
image : ''}]
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }


    each(restos,function(e){ 

$('#resto').append(`<h1 id=${e.id}  class='' >${e.name}</h1>`)
        $('#resto').append('<br>')
      
    $('#resto').append(`<h2>${e.category}</h2>`)
  $('#resto').append('<br>')
  $('#resto').append(`<img src=${e.image}>`)
   $('#resto').append(`<h2>${e.adresse}</h2>`)
        $('#resto').append('<br>')
})

$('#retour').append(`<button id=ret>retour</button>`)

$('#ret').click(function(){
    $('#menu').css("display", "none");
    $('#resto').css("display", "block");
    $('#retour').css("display", "none");
     $('#menu').empty()
   })

$('#0').click( function(e){
    $('#retour').css("display", "block");
    $('#resto').css("display", "none");
    $('#menu').css("display", "block");

    each(restos[0].menu , function(element,i){
        $('#menu').append(`<h1>${element.name}</h1>`)
        $('#menu').append(`<button id=b${i}>ajouter au panier</button>`)
        $('#menu').append(`<h2>${element.price}</h2>`)
        $('#menu').append(`<img src=${element.image}>`)
  var count =1
        $(`#b${i}`).click(function (e){
  if(count===1){
   var name=element.name;
   
    var res=[];
    res.push([name])
    res.push([element.price])
    
    res.push(['x'],[count])
                localStorage[i]=[res]

count=count+1

  }
  else if(count!==1){
    var name=element.name;
   
    var res=[];
    res.push([name])
    res.push([element.price])
    
    res.push(['x'],[count])
                localStorage[i]=[res]

count=count+1

  }
   
   
 
           
    })
   
 })
       
})



$('#1').click( function(e){
    $('#retour').css("display", "block");

    $('#resto').css("display", "none");
    $('#menu').css("display", "block");

    each(restos[1].menu , function(element,i){
        $('#menu').append(`<h1>${element.name}</h1>`)
        $('#menu').append(`<button id=bb${i}>ajouter au panier</button>`)
        $('#menu').append(`<h2>${element.price}</h2>`)
        $('#menu').append(`<img src=${element.image}>`)
        var count =1
        $(`#bb${i}`).click(function (e){
            if(count===1){
                var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
               else if(count!==1){
                 var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
                
                
              
        })
    })
})
    $('#2').click( function(e){
        $('#resto').css("display", "none");
        $('#menu').css("display", "block");
        $('#retour').css("display", "block");
    
        each(restos[2].menu , function(element,i){
            $('#menu').append(`<h1>${element.name}</h1>`)
            $('#menu').append(`<button id=bbb${i}>ajouter au panier</button>`)
            $('#menu').append(`<h2>${element.price}</h2>`)
            $('#menu').append(`<img src=${element.image}>`)
            var count =1
            $(`#bbb${i}`).click(function (e){
                if(count===1){
                    var name=element.name;
                    
                     var res=[];
                     res.push([name])
                     res.push([element.price])
                     
                     res.push(['x'],[count])
                                 localStorage[i]=[res]
                 
                 count=count+1
                 
                   }
                   else if(count!==1){
                     var name=element.name;
                    
                     var res=[];
                     res.push([name])
                     res.push([element.price])
                     
                     res.push(['x'],[count])
                                 localStorage[i]=[res]
                 
                 count=count+1
                 
                   }
                    
                    
                  
            })
        })

})

$('#3').click( function(e){
    $('#retour').css("display", "block");

    $('#resto').css("display", "none");
    $('#menu').css("display", "block");

    each(restos[3].menu , function(element,i){
        $('#menu').append(`<h1>${element.name}</h1>`)
        $('#menu').append(`<button id=bbbb${i}>ajouter au panier</button>`)
        $('#menu').append(`<h2>${element.size}</h2>`)
        $('#menu').append(`<h2>${element.price}</h2>`)
        $('#menu').append(`<img src=${element.image}>`)
        var count =1
        $(`#bbbb${i}`).click(function (e){

            if(count===1){
                var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
               else if(count!==1){
                 var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
                
                
              
        })
    })
})

$('#4').click( function(e){
    $('#retour').css("display", "block");

    $('#resto').css("display", "none");
    $('#menu').css("display", "block");

    each(restos[4].menu , function(element,i){
        $('#menu').append(`<h1>${element.name}</h1>`)
        $('#menu').append(`<button id=bbbbb${i}>ajouter au panier</button>`)
        
        $('#menu').append(`<h2>${element.price}</h2>`)
        $('#menu').append(`<img src=${element.image}>`)
        var count =1
        $(`#bbbbb${i}`).click(function (e){
         
            if(count===1){
                var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
               else if(count!==1){
                 var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
                
                
              
        })
    })
})
   
each(restos,function(e,i){ 
           
$('#categ').append(`<h1 id=c${i}>${e.category}</h1>`)
        $('#resto').append('<br>')  
})

$('#c0').click(function(){
    $('#back').css("display", "block");
    $('#categ').css("display", "none");
    $('#menuu').css("display", "block");
each(sandwiches,function(element,i){
    $('#menuu').append(`<h1 >${element.name}</h1>`)
    $('#menuu').append(`<h1>${element.price}</h1>`)
    $('#menuu').append(`<img src=${element.image}>`)
    $('#menuu').append(`<button id=p${i}>ajouter au panier</button>`)
    var count =1
    $(`#p${i}`).click(function (e){
     
        if(count===1){
            var name=element.name;
            
             var res=[];
             res.push([name])
             res.push([element.price])
             
             res.push(['x'],[count])
                         localStorage[i]=[res]
         
         count=count+1
         
           }
           else if(count!==1){
             var name=element.name;
            
             var res=[];
             res.push([name])
             res.push([element.price])
             
             res.push(['x'],[count])
                         localStorage[i]=[res]
         
         count=count+1
         
           }
            
            
          
    })
})
})

$('#c1').click(function(){
    $('#back').css("display", "block");
    $('#categ').css("display", "none");
    $('#menuu').css("display", "block");
    each(iceCream,function(element,i){
        $('#menuu').append(`<h1 >${element.name}</h1>`)
        $('#menuu').append(`<h1>${element.price}</h1>`)
        $('#menuu').append(`<img src=${element.image}>`)
        $('#menuu').append(`<button id=pp${i}>ajouter au panier</button>`)
        var count =1
        $(`#pp${i}`).click(function (e){
         
            if(count===1){
                var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
               else if(count!==1){
                 var name=element.name;
                
                 var res=[];
                 res.push([name])
                 res.push([element.price])
                 
                 res.push(['x'],[count])
                             localStorage[i]=[res]
             
             count=count+1
             
               }
                
                
              
        })
    })
    })
    $('#c2').click(function(){
        $('#back').css("display", "block");
        $('#categ').css("display", "none");
        $('#menuu').css("display", "block");
        each(jus,function(element,i){
            
            $('#menuu').append(`<h1 >${element.name}</h1>`)
            $('#menuu').append(`<h1>${element.price}</h1>`)
            $('#menuu').append(`<img src=${element.image}>`)
            $('#menuu').append(`<button id=ppp${i}>ajouter au panier</button>`)
            var count =1
            $(`#ppp${i}`).click(function (e){
             
                if(count===1){
                    var name=element.name;
                    
                     var res=[];
                     res.push([name])
                     res.push([element.price])
                     
                     res.push(['x'],[count])
                                 localStorage[i]=[res]
                 
                 count=count+1
                 
                   }
                   else if(count!==1){
                     var name=element.name;
                    
                     var res=[];
                     res.push([name])
                     res.push([element.price])
                     
                     res.push(['x'],[count])
                                 localStorage[i]=[res]
                 
                 count=count+1
                 
                   }
                    
                    
                  
            })
        })
        })
        $('#c3').click(function(){
            $('#back').css("display", "block");
            $('#categ').css("display", "none");
            $('#menuu').css("display", "block");
            each(pizza,function(element,i){
                $('#menuu').append(`<h1 >${element.name}</h1>`)
                $('#menuu').append(`<h1>${element.price}</h1>`)
                $('#menuu').append(`<img src=${element.image}>`)
                $('#menuu').append(`<button id=pppp${i}>ajouter au panier</button>`)
                var count =1
                $(`#pppp${i}`).click(function (e){
                 
                    if(count===1){
                        var name=element.name;
                        
                         var res=[];
                         res.push([name])
                         res.push([element.price])
                         
                         res.push(['x'],[count])
                                     localStorage[i]=[res]
                     
                     count=count+1
                     
                       }
                       else if(count!==1){
                         var name=element.name;
                        
                         var res=[];
                         res.push([name])
                         res.push([element.price])
                         
                         res.push(['x'],[count])
                                     localStorage[i]=[res]
                     
                     count=count+1
                     
                       }
                        
                        
                      
                })
            })
            })
            $('#c4').click(function(){
                $('#back').css("display", "block");
                $('#categ').css("display", "none");
                $('#menuu').css("display", "block");
                each(Crepe,function(element,i){
                    $('#menuu').append(`<h1>${element.name}</h1>`)
                    $('#menuu').append(`<h1>${element.price}</h1>`)
                    $('#menuu').append(`<img src=${element.image}>`)
                    $('#menuu').append(`<button id=ppppp${i}>ajouter au panier</button>`)
                    var count =1
                    $(`#ppppp${i}`).click(function (e){
                     
                        if(count===1){
                            var name=element.name;
                            
                             var res=[];
                             res.push([name])
                             res.push([element.price])
                             
                             res.push(['x'],[count])
                                         localStorage[i]=[res]
                         
                         count=count+1
                         
                           }
                           else if(count!==1){
                             var name=element.name;
                            
                             var res=[];
                             res.push([name])
                             res.push([element.price])
                             
                             res.push(['x'],[count])
                                         localStorage[i]=[res]
                         
                         count=count+1
                         
                           }
                            
                            
                          
                    })
                })
                })

                $('#back').append(`<button id=backe>back</button>`)
                $('#back').css("display", "none");
$('#backe').click(function(){
    $('#categ').css("display", "block");
    $('#menuu').css("display", "none");
    $('#menuu').empty()
    $('#back').css("display", "none");
   })

   var values=Object.values(localStorage)
   var cart=[]
   
each(localStorage,function(e,i){ 
  
  
    var s=e.toString()
    var res=s.split(',')
 if(res[0]===undefined || res[2]===undefined){
 }
 else{
$('#cart').append(`<h1 id=h${i}>${res[0]}</h1>`) 
$('#cart').append(`<h2 id=hh${i}>${res[1]}</h2>`) 
$('#cart').append(`<h2 id=hhh${i}>${res[2]+res[3]}</h2>`)
$('#cart').append(`<button id=s${i}>remove</button>`)

    $(`#s${i}`).click(function (){
        if(res[3]*1>1){
        res[3]=(res[3]*1)-1
        $(`#hhh${i}`).empty()
        $(`#hhh${i}`).append(`<h2 id=hhh${i}>${res[2]+res[3]}</h2>`)

  localStorage.setItem(i,res)
        }
        else if(res[3]*1===1 ){
            $(`#hhh${i}`).css("display", "none");
            $(`#hh${i}`).css("display", "none");
            $(`#h${i}`).css("display", "none");
            $(`#s${i}`).css("display", "none"); 
        localStorage.removeItem(i)
        }
    
    })
  }

})

$(`#total`).click(function(){
    var total=0
   
each(localStorage,function(e,i){
    var s=e.toString()
    var res=s.split(',')
    if(res[0]===undefined || res[2]===undefined){
    }
else{   
    total=total+(res[1]*1)*(res[3]*1)
    console.log(total)
    }
    
})
$(`#all`).append(`<h2 >Total=${total}</h2>`)

$(`#clt`).append(`<input placeholder=write your name please id=in1 >`)
$(`#clt`).append(`<input placeholder=write your adresse please id=in2>`)
$(`#clt`).append(`<input placeholder=write your phone number please id=in3>`)
$('#clt').append(`<button id=client >confirme</button>`)
$(`#cart`).css("display", "none");
$("#client").click(function(){
   
    console.log('hello')
    var name=$(`#in1`).val()
   
    var adresse=$(`#in2`).val()
    var phone=$(`#in3`).val()
    $(`#clt`).css("display", "none");
    $(`#all`).css("display", "none");
    $(`#last`).append(`<h2>thank you mister/miss ${name} ,the delivry guy will call you on the ${phone} when he arrive to your location ${adresse}   </h2>`)
})
})


$(`#remove`).click(function(){
    localStorage.clear()
    $(`#cart`).css("display", "none");
})



