import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToastrNotificationNgxToastr';

  constructor(private toastrService:ToastrService){}

  showToast(){
    this.toastrService.success("some text","title",{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing'
      
    })
    // this.toastrService.error("some text","title",{
    //   timeOut:1000,
    //   progressBar:true,
    //   progressAnimation:'increasing'
      
    // })

    // this.toastrService.warining("some text","title",{
    //   timeOut:1000,
    //   progressBar:true,
    //   progressAnimation:'increasing'
      
    // })

    // this.toastrService.info("some text","title",{
    //   timeOut:1000,
    //   progressBar:true,
    //   progressAnimation:'increasing'
      
    // })
  }
}
