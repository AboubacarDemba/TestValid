import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  request:any={"username":"Abou","pasword":"root"};

  constructor( private service:JwtClientService) { }

  ngOnInit(): void {
    this.generateToken(this.request);
  }

  public generateToken(request:any){

    this.service.generateToken(request).subscribe(data=>{
      console.log("Token :"+data);
    })


  }

}
