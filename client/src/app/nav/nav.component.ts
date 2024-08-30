import { Component, OnInit, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    BsDropdownModule,
    RouterLink,
    RouterLinkActive,
    TitleCasePipe,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  accountService = inject(AccountService);
  private router = inject(Router);
  private toast = inject(ToastrService);
  model: any = {};

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (_) => {
        this.router.navigateByUrl('/members');
      },
      error: (error) => this.toast.error(error.error),
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
