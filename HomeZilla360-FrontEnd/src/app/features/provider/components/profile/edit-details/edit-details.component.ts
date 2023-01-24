import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from '../../../models/user';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
})
export class EditDetailsComponent implements OnInit {
  user: User;
  locationList: Array<string>;
  public userForm!: FormGroup;
  profilePicture!: File;
  constructor(
    private profileService: ProfileService,
    public fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.getProfileDetails();
    this.getLocation();
  }

  updateProviderProfilePicture() {
    console.log('okkk');
    this.profileService
      .updateProviderProfilePicture(this.profilePicture)
      .subscribe({
        next: (response) => {
          (response: any) => {
            console.log('Success!', response);
          };
          this.getProfileDetails();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  getProfileDetails() {
    this.profileService.getProviderProfileDetails().subscribe((user) => {
      this.user = user;
    });
  }
  getLocation() {
    this.profileService.getLocationData().subscribe((res) => {
      this.locationList = res;
    });
  }

  onSubmit() {
    this.profileService.updateProviderProfile(this.user).subscribe(
      (response) => {
        console.log('Success!', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Profile Updated Successfully',
          life: 3000,
        });
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
  onChange(event) {
    this.profilePicture = event.target.files[0];
  }
}
