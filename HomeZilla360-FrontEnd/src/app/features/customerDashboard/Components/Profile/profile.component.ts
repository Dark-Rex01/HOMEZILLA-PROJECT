import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProfilesService } from '../../Services/profiles.service';
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
  submitted = false;
  enable:boolean = true;

  constructor(
    
    private profileService : ProfilesService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ){
    this.user = new User();
  }

  ngOnInit() {

    this.dashboardform = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address:  ['', Validators.required],      
    })

         this.getProfileDetails();
         

  }

  get d(){
    return this.dashboardform.controls;
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
    this.submitted = true;
    if(this.dashboardform.invalid)
    {
      return;
    }
    else{
      this.user = this.dashboardform.value;
      this.profileService.updateProfile(this.user).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', summary:'successfully changed', life: 3000});
        },
        error: (error) => {
          this.messageService.add({severity:'error', summary: 'error', life: 3000});
        }
      });
    }
 
  }

  onChange(event:any)
  {
    this.profilePicture = event.target.files[0];
    this.enable = false;
  }
    

  }

  


