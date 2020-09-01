import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProfile, ProfileService } from './services/profile/profile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'Profile';
  public userProfile;
  public fName;
  public lName;
  public error;
  public emailError;
  public isLoading = false;
  public isSaving = false;
  public isEmailError = false;
  public isToast = false;
  @ViewChild('firstName', null) firstName: ElementRef;
  @ViewChild('lastName', null) lastName: ElementRef;

  public user: IProfile;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading = true;
    this.profile.getProfileUser().then((profile) => {
      this.userProfile = profile;
      this.setEmail(this.userProfile.firstName, this.userProfile.lastName);
      this.clearSpinners();
      this.isToast = false;
    }).catch((error) => {
      this.setToast(error.error);
      this.ngOnInit();
    })
  }

  saveProfile() {
    this.isSaving = true;
    this.isToast = false;
    this.fName = this.firstName.nativeElement.value;
    this.lName = this.lastName.nativeElement.value;
    this.profile.setName(this.fName, this.lName).then((user) => {
      this.userProfile = user;
      console.log(this.userProfile);
      this.isToast = false;
      this.setEmail(this.userProfile.firstName, this.userProfile.lastName);
      this.clearSpinners();
    }).catch((error) => {
      this.setToast(error.error);
    })
  }

  setToast(msg) {
    this.isToast = true;
    this.error = msg;
    this.clearSpinners();
  }

  setEmail(firstName, lastName) {
    this.profile.setUserEmailName(firstName, lastName).then((email) => {
      this.userProfile.email = email;
    }).catch((error) => {
      this.setToast(error.error);
    })
  }

  clearSpinners() {
    this.isLoading = false;
    this.isSaving = false;
  }

  languageToggle(language) {
    switch (language) {
      case 'english': {
        this.title = 'Profile'
        break;
      }
      case 'italian': {
        this.title = 'Profilo';
        break;
      }
      case 'french': {
        this.title = 'Profil';
        break;
      }
      default: {
        this.title = 'Profile'
        break;
      }
    }
  }

}