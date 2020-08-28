import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
  providers: [AuthService],
})
export class SendEmailComponent  {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc:AuthService) { }

  onSendEmail(): void{
    this.authSvc.sendVerificationEmail();
  }
}
