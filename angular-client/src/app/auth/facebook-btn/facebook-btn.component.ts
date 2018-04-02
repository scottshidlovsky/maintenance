import { Component } from '@angular/core';

@Component({
  selector: 'cm-facebook-btn',
  template: `
      <a class="anchor-btn" href="/login">
        <span class="login-page__facebook-container">
          <span class="login-page__facebook-img-container">
            <img class="login_page__facebook-img" 
                 alt="facebook logo"
                 src="/assets/fb-logo.png" />
          </span>
          <span class="login-page__facebook-text">Continue with Facebook</span>
        </span>
      </a>
    `,
  styleUrls: ['./facebook-btn.component.scss']
})
export class FacebookBtnComponent {}
