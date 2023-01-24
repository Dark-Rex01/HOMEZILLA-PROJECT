import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProfileService } from '../../Services/profile.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit{
  user: User;
  profilePicture!: File;
  display: boolean = false;
  dashboardform! : FormGroup;
  query: string= "";
  location:string= "";
  pageNumber: number=1;
  
  constructor(
    
    private profileService : ProfileService,
    private messageService: MessageService,
  ){
    this.user = new User();
  }

  ngOnInit() {
         this.getProfileDetails();
         

  }
  getProfileDetails(){
    this.profileService.getProfileDetails().subscribe(user => {
      this.user = user;
    }); 
  }

  updateProfilePicture() {
    this.profileService.updateProfilePicture(this.profilePicture).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'successfully changed', life: 3000});
        this.getProfileDetails();
      },
      error: (error) => {
        this.messageService.add({severity:'error', summary: 'error', life: 3000});
      }
  });
  }

  onSubmit(){
  this.profileService.updateProfile(this.user).subscribe({
    next: (response) => {
      this.messageService.add({severity: 'success', summary:'successfully changed', life: 3000});
    },
    error: (error) => {
      this.messageService.add({severity:'error', summary: 'error', life: 3000});
    }
  });
  }

  onChange(event:any)
  {
    this.profilePicture = event.target.files[0];
  }
    

  }

  


