import { inject } from "@angular/core"
import { AuthgaurdService } from "./Services/authgaurd.service"
import { Router } from "@angular/router";

export const CanActivate = () => {
    const authService = inject(AuthgaurdService);
    const router = inject(Router);

    if(authService.isLoggedIn){
        return true;
    } else {
        router.navigate(['']);
        return false;
    }

}