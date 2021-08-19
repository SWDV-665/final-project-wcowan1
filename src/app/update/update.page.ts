import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProjectcrudService } from './../projectcrud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateprojectFg: FormGroup;
  id: any;

  constructor(
    private ProjectcrudService: ProjectcrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchProject(this.id);
    this.updateprojectFg = this.formBuilder.group({
      project_id:[''],
      name: [''],
      start_date:[''],
      end_date:[''],
      leader:[''],
      accountant:[''],
      report: ['']
      
    })
  }

  fetchProject(id) {
    this.ProjectcrudService.getProject(id).subscribe((data) => {
      this.updateprojectFg.setValue({
        name: data['name'],
        email: data['email'],
        username: data['username']
      });
    });
  }

  onSubmit() {
    if (!this.updateprojectFg.valid) {
      return false;
    } else {
      this.ProjectcrudService.updateProject(this.id, this.updateprojectFg.value)
        .subscribe(() => {
          this.updateprojectFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }


}
