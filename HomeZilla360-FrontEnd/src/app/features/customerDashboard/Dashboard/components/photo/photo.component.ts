import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard-main/dashboard.component';
import { ProfileService } from 'src/app/customerDashboard/Services/profile.service';
import { MessageService } from 'primeng/api';
import { User } from '../../models/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
 
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
  
    // onSubmit(){
    // this.profileService.updateProfile(this.user).subscribe({
    //   next: (response) => {
    //     this.messageService.add({severity: 'success', summary:'successfully changed', life: 3000});
    //   },
    //   error: (error) => {
    //     this.messageService.add({severity:'error', summary: 'error', life: 3000});
    //   }
    // });
    // }
  
    onChange(event:any)
    {
      this.profilePicture = event.target.files[0];
    }
      
  
    }
  
    
  
  
  