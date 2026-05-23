//for
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
    
}
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i+ "*"+j +"="+i*j)
        
        
    }
    
    
}


//break and continue

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        if(j==6){
            console.log("detected 6")
            //break
            continue// one step stop and next step print 
        }

        console.log(i+ "*"+j +"="+i*j)
        
        
    }
    
    
}