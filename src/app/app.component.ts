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
  public isError = false;
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
      this.userProfile.email = this.emailLint(this.userProfile.firstName, this.userProfile.lastName);
      this.clearSpinners();
      this.isError = false;
    }).catch((error) => {
      this.isError = true;
      this.error = error.error;
      this.clearSpinners();
      this.ngOnInit();
    })
  }

  saveProfile() {
    this.isSaving = true;
    this.isError = false;
    this.fName = this.firstName.nativeElement.value;
    this.lName = this.lastName.nativeElement.value;
    this.profile.setName(this.fName, this.lName).then((user) => {
      this.userProfile = user;
      console.log(this.userProfile);
      this.isError = false;

      this.profile.setUserEmailName(this.userProfile.firstName, this.userProfile.lastName).then((user) => { 
        console.log('email success');
       }).catch((error) => {
        this.setError(error.error);
    })
      this.userProfile.email = this.emailLint(this.fName, this.lName);
      this.clearSpinners();
    }).catch((error) => {
        this.setError(error.error);
    })
  }

  setError (msg) {
    this.isError = true;
    this.error = msg;
    this.clearSpinners();
  }

  emailLint(firstName, lastName) {
    return firstName.trim().replace(/ /g, "") + '.' + lastName.trim().replace(/ /g, "") + '@blueface.com'
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