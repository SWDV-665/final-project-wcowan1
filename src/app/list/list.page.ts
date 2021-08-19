import { Component, OnInit } from '@angular/core';
import { ProjectcrudService } from './../projectcrud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  Project: any = [];

  constructor( private ProjectcrudService: ProjectcrudService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.ProjectcrudService.getProject(_id).subscribe((response) => {
      this.Project= response;
    })
  }

  removeProject(project: { _id: any; }, i: any) {
    if (window.confirm('Are you sure')) {
      this.ProjectcrudService.deleteProject(project._id)
      .subscribe(() => {
          this.Project.splice(i, 1);
          console.log('Project deleted!')
        }
      )
    }
  }


}




function _id(_id: any) {
  throw new Error('Function not implemented.');
}

