export async function loadNav(){
    try {
        const response = await fetch("/nav.html");
    
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        const nav = await response.text();
        //console.log(nav);
        document.querySelector(".nav-placeholder").innerHTML = nav
    
    } catch (error) {
      console.log(error)  
    }
    }
    
    
    // //load footer
    // async function loadFooter(){
    //     try {
            
    //     } catch (error) {
            
    //     }
    
    // }
