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
  public dashboardform! : FormGroup;
  submitted = true;
  enable:boolean = true;

  constructor(
    
    private profileService : ProfilesService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,

  ){
    this.user = new User();
    this.dashboardform = this.formBuilder.group({      
      userName: [this.user.userName, Validators.required],
      firstName: [this.user.firstName,Validators.required],
      lastName: [this.user.lastName, Validators.required],
      mobileNumber: [this.user.mobileNumber, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      email: [this.user.email, [Validators.required, Validators.email]],  
      address: [this.user.address, Validators.required],
    })
  }

  async ngOnInit() {

    

         await this.getProfileDetails();
         

  }

  get d(){
    return this.dashboardform.controls;
  }
  getProfileDetails(){
    this.profileService.getProfileDetails().subscribe(user => {
      this.user = user;
      this.dashboardform = this.formBuilder.group({      
        userName: [this.user.userName, Validators.required],
        firstName: [this.user.firstName,Validators.required],
        lastName: [this.user.lastName, Validators.required],
        mobileNumber: [this.user.mobileNumber, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
        email: [this.user.email, [Validators.required, Validators.email]],  
        address: [this.user.address, Validators.required],
      })
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

  


