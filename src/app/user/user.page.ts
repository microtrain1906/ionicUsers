import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id:string):void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
        console.log(this.user)
      }
    );
  }

  userEdit(): void{
    this.usersService.editUser(this.user).subscribe(
      (response:any)=>{
        this.user = response.user;
      console.log(this.user)}
    );
  }

  deleteUser(id:string):void {
    if(confirm('Are you sure you want to delete '+this.user._id)){
      this.usersService.deleteUser(id).subscribe(
        (response:any)=>{
        console.log(this.user)}
    );
    }
  }

}