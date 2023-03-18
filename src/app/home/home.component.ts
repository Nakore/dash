import { Component } from '@angular/core';
import { TransactionService } from '@app/_services/transaction.service';
import { AuthenticationService } from '@app/_services';
import { UserService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user: any = [];
    transactions: any = [];
    admin: any = [];

    constructor(private userService: UserService, private transact: TransactionService, private auth: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        this.getFarmers();
        this.getTransactions();
        this.getAdmin();
        
    }

    public getFarmers() {
        this.userService.getAllFarmers().subscribe((res: any)=> {           
            for (let i = 0; i < res.farmers.length; i++) {
                this.user.push(res.farmers[i]);
                //console.log(res.farmers[i]);
            }
            
           console.log(this.user)
        })
    }

    public getTransactions() {
        this.transact.getAllTransactions().subscribe((res: any) => {
            for(let i = 0; i < res.transactions.length; i++) {
                this.transactions.push(res.transactions[i]);
                console.log(this.transactions[i]);
            }
        })
    }

    public getAdmin() {
        const list = this.auth.userValue
        for(let a in list) {
            //console.log(a);
            for(let i = 0; i < a.length; i++) {
                console.log(this.admin[i])
            }
        }
    }

    protected total() {
        this.transact.Total().subscribe((res)=>{
            for( let lo in res){
                console.log({'total': lo});
            }
        })
    }
    
}
