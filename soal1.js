var array_kode_barang = ["KD0023", "C42212", "D90312", "HI2020"];

var diskonA = 10

let harga_laptop_asus = 15000000

let harga_iphone = 12000000

let harga_xiaomi = 7000000

let harga_playstation = 15000000

var get_count = {}

var AExist = false

var BExist = false 

var CExist = false

var DExist = false 

var harga_1 = 0

var harga_2 = 0

var harga_3 = 0

var harga_4 = 0

let subtotal = 0 


console.log(checkout(array_kode_barang, diskonA))

///gue bilang Capital letter itu untuk kode barang
function checkout(array, diskonA)
{
    console.log ("item yang dibeli : ");
    
    array_kode_barang.sort();
    
     //access the x function
     array.forEach(function(x) 
     { 
        get_count[x] = (get_count[x] || 0) + 1; 
     });
     
     
    for (i = 0; i < array.length; i++)
    {
       switch(array[i])
       {
         //when A
         case "KD0023":
           AExist = true
           break;
         //when B
         case "C42212":
           BExist = true
           break;
         //when C
         case "D90312":
           CExist = true
           break;
         //when D
         case "HI2020":
           DExist = true
           break;
         
       }
    }
    

    if (AExist) {
       console.log("Laptop Asus")
       console.log(harga_laptop_asus * get_count["KD0023"])
       harga_1 = harga_laptop_asus * get_count["KD0023"]
    }
    
    if(BExist)
    {
       console.log("Iphone")
       console.log(harga_iphone * get_count["C42212"])
       harga_2 = harga_iphone * get_count["C42212"]
    }
    
    if(CExist)
    {
       console.log("Xiaomi")
       console.log(harga_xiaomi * get_count["D90312"])
       harga_3 = harga_xiaomi * get_count["D90312"]
    }
    
    if(DExist)
    {
       console.log("Playstation")
       console.log(harga_playstation * get_count["HI2020"])
       harga_4 = harga_playstation * get_count["HI2020"]
    }
    
    var subtotal =  harga_1 + harga_2 + harga_3 + harga_4
    
    var diskon = subtotal * diskonA/100

    console.log("Subtotal = " + subtotal)
    
    console.log("Diskon" + diskonA + "% = " + diskon)
    
    var totaltotal = subtotal - diskon
    console.log("Total Tagihan:")
    return totaltotal

    console.burn.all
  }
