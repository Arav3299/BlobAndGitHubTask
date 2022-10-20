import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor(private service : ApiService,private sanitizer:DomSanitizer) { }

  dummy = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]

  searchText:any;

  staffArray:any;



  blobData:any =[];
  obj:any=[]
  image:any;

  id!:string;
 
 
  ngOnInit(): void {
    this.getStaffDetails();
 }
  // getStaffDetails() {

  //   this.service.getAllStaffDetails().subscribe((data)=>{
    
  //     this.staffArray=data;
  //     console.log(data);
      
 
  //     this.blobData=this.staffArray;

  //     console.log(this.blobData.data[0].about);
      
  //     this.blobData= btoa(this.blobData.data[2].about)

  //     console.log(this.blobData);
      


  //     // this.obj=this.blobData.data;

  //     // console.log(this.obj[0].about);

  //     // this.obj=this.blobData.data[0].about.toString();

  //     // this.obj = URL.createObjectURL(this.obj[0].about);
  //     // console.log(this.obj);


  //     let blob = new Blob( [this.blobData], {type: 'image/any'})
  //     this.image = URL.createObjectURL(blob);
  //     console.log(this.image);
      
  //     this.image = this.sanitizer.bypassSecurityTrustUrl(this.image);

  //     console.log(this.image);
      
  //     // const reader = new FileReader();
     
    
  //   // console.log(reader.readAsDataURL(this.blobData));

  //   const reader = new FileReader();
     

  //       reader.readAsDataURL(this.blobData); 

  //       console.log(reader);
    
  // }


  //     // const reader = new FileReader();
  //     //   reader.onloadend = () => {
  //     //     var base64data = reader.result;                
  //     //         console.log(base64data);
  //     //   }
//   )}

getStaffDetails(){


 
    this.service.getAllStaffDetails().then(response => {
      this.staffArray = response;
      console.log(this.staffArray);
      
      
      for (var i = 0; i < this.staffArray.data.length; i++) {
        
        // TO_GET_IMG_URL_AND_TEXT_FROM_HTML----------------START----------------

        // console.log(window.btoa(this.staffArray.data[i].about));
        
        var decodedContent = window.atob(this.staffArray.data[i].about);
        
        console.log(decodedContent);
        
        var m,urls = [],str = decodedContent,rex = /<img[^>]+src="?([^">]+)/g;
        while (m = rex.exec(str)) {
          urls.push(m[1]);
        }
        var imgUrl = urls[0];
        
        // TO_GET_IMG_URL_AND_TEXT_FROM_HTML-----------------END----------------
        
        this.blobData.push({
          
          "contentType": 'news',
          "imgUrl": imgUrl,
          "arav":i+1
           
        });
     
      }
      this.blobData.map((r: any) =>{
        r.title = "Players";
        console.log(r)
       });

      this.obj=this.blobData

      //alert(JSON.stringify(this.blobData))

     

      }).catch(error => {
      console.log("Unable to fetch news details: ", error);
    })
  


}

findThatDeck(data: any) {
 // alert(data)
 //this.blobData=localStorage.getItem("array")
 console.log(this.blobData);
 
 //alert(JSON.stringify(this.blobData))

 let blob = this.obj;
 let NewBlob ;
for(let i=0; i < blob.length;i++){
  //alert(JSON.stringify(Blob[i]));
  if(blob[i]["arav"] == data){
    //alert('if');
     NewBlob = {"contentType":blob[i]["contentType"],"imgUrl":blob[i]["imgUrl"]};
    //alert(JSON.stringify(NewBlob));
  }
}
this.blobData = [];

this.blobData.push(NewBlob);
//  var setdata=this.blobData.filter((p:any) => {
//   alert(JSON.stringify(p[0s]))
//   p.arav==data
//   return p;
// }
//   );
//   alert(setdata);
//   this.blobData=setdata;
//   console.log(this.blobData);
  
// }



}

}
