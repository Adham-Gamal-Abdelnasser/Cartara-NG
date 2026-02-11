import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const _platform_id = inject(PLATFORM_ID)
  const _router = inject(Router)
  
  if (isPlatformBrowser(_platform_id)) {
    const token = localStorage.getItem("userToken")
    if (token) {
      return true
    }
  }
  return _router.parseUrl('/login')
};