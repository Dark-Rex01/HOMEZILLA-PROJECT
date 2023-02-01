import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TopNavComponent } from 'src/app/shared/components/top-nav/top-nav.component';
import { User } from '../../../models/user';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
})
export class EditDetailsComponent implements OnInit {
  user: User ;
  locationList: Array<string>;
  public userForm: FormGroup;
  submitted = true;
  profilePicture!: File;
  enable:boolean=true;
  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder,
    private messageService: MessageService,
    public topNav: TopNavComponent
  ) 
  {
    this.user = new User();
    this.userForm = this.fb.group({
      firstName: [this.user.firstName,Validators.required],
      lastName: [this.user.lastName, Validators.required],
      userName: [this.user.userName, Validators.required],
      mobileNumber: [this.user.mobileNumber, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
      email: [this.user.email, [Validators.required, Validators.email]],
      location: [this.user.location,Validators.required],
      description:[this.user.description]
    })
  }

  async ngOnInit() {
    
    await this.getProfileDetails();
    this.getLocation();
    
  }
  
  updateProviderProfilePicture() {

   
    this.profileService
      .updateProviderProfilePicture(this.profilePicture)
      .subscribe({
        next: (response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Profile Picture Uploaded Successfully',
              life: 3000,
            });
          this.topNav.ngOnInit();
          this.getProfileDetails();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Please Select the appropriate file type',
            life: 3000,
          });
        },
      });
    
  }
  getProfileDetails() {
    this.profileService.getProviderProfileDetails().subscribe((user) => {
      this.user = user;
      this.userForm = this.fb.group({
        firstName: [this.user.firstName,Validators.required],
        lastName: [this.user.lastName, Validators.required],
        userName: [this.user.userName, Validators.required],
        mobileNumber: [this.user.mobileNumber, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],
        email: [this.user.email, [Validators.required, Validators.email]],
        location: [this.user.location,Validators.required],
        description:[this.user.description]
      })
      
    });
  }
  get f() { return this.userForm.controls; }
  getLocation() {
    this.profileService.getLocationData().subscribe((res) => {
      this.locationList = res;
    });
  }

  onSubmit() {
    
    this.submitted = true;
    if(this.userForm.invalid)
    {
      return;
    }
    else{
    this.user = this.userForm.value;
    this.profileService.updateProviderProfile(this.user).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Profile Updated Successfully',
          life: 3000,
        });
        this.topNav.ngOnInit();
      },

      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Please fill out all valid fields',
          life: 3000,
        });
      }
    );
  }
}
  onChange(event) {
    this.profilePicture = event.target.files[0];
    this.enable=false;
  }
}
