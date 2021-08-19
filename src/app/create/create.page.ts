import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProjectcrudService } from './../projectcrud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  projectForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private ProjectcrudService: ProjectcrudService  
  ) {
    this.projectForm = this.formBuilder.group({
      project_id: [''],
      name: [''],
      start_date: [''],
      end_date: [''],
      leader: [''],
      accountant: [''],
      report: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.projectForm.valid) {
      return false;
    } else {
      this.ProjectcrudService.createProject(this.projectForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.projectForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }


}
