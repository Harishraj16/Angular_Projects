import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormControl, FormBuilder , ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'students-details-root',
    standalone: true,
    imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule,NgbHighlight],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'students-details';
    filter: FormControl;
    students: Array<any> =  [
        {
          "name": "John Doe",
          "city": "New York",
          "rollnumber": 1,
          "state": "New York",
          "country": "USA",
          "physics": 85,
          "chemistry": 78,
          "maths": 90,
          "computer": 88,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Jane Smith",
          "city": "Los Angeles",
          "rollnumber": 2,
          "state": "California",
          "country": "USA",
          "physics": 82,
          "chemistry": 85,
          "maths": 92,
          "computer": 90,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "David Lee",
          "city": "Chicago",
          "rollnumber": 3,
          "state": "Illinois",
          "country": "USA",
          "physics": 78,
          "chemistry": 80,
          "maths": 85,
          "computer": 87,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Emily Johnson",
          "city": "Houston",
          "rollnumber": 4,
          "state": "Texas",
          "country": "USA",
          "physics": 90,
          "chemistry": 88,
          "maths": 85,
          "computer": 82,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Michael Wang",
          "city": "San Francisco",
          "rollnumber": 5,
          "state": "California",
          "country": "USA",
          "physics": 85,
          "chemistry": 90,
          "maths": 92,
          "computer": 85,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Sophia Kim",
          "city": "Miami",
          "rollnumber": 6,
          "state": "Florida",
          "country": "USA",
          "physics": 88,
          "chemistry": 82,
          "maths": 90,
          "computer": 85,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Daniel Garcia",
          "city": "Dallas",
          "rollnumber": 7,
          "state": "Texas",
          "country": "USA",
          "physics": 85,
          "chemistry": 85,
          "maths": 88,
          "computer": 90,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Isabella Martinez",
          "city": "Phoenix",
          "rollnumber": 8,
          "state": "Arizona",
          "country": "USA",
          "physics": 80,
          "chemistry": 85,
          "maths": 90,
          "computer": 88,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Ethan Nguyen",
          "city": "Seattle",
          "rollnumber": 9,
          "state": "Washington",
          "country": "USA",
          "physics": 85,
          "chemistry": 90,
          "maths": 85,
          "computer": 88,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Olivia Brown",
          "city": "Atlanta",
          "rollnumber": 10,
          "state": "Georgia",
          "country": "USA",
          "physics": 82,
          "chemistry": 88,
          "maths": 85,
          "computer": 90,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
        "name": "William Johnson",
        "city": "Boston",
        "rollnumber": 11,
        "state": "Massachusetts",
        "country": "USA",
        "physics": 85,
        "chemistry": 88,
        "maths": 90,
        "computer": 85,
        "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Sophie Anderson",
          "city": "Denver",
          "rollnumber": 12,
          "state": "Colorado",
          "country": "USA",
          "physics": 82,
          "chemistry": 85,
          "maths": 92,
          "computer": 90,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "James Wilson",
          "city": "Austin",
          "rollnumber": 13,
          "state": "Texas",
          "country": "USA",
          "physics": 78,
          "chemistry": 80,
          "maths": 85,
          "computer": 87,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Emma Thompson",
          "city": "Portland",
          "rollnumber": 14,
          "state": "Oregon",
          "country": "USA",
          "physics": 90,
          "chemistry": 88,
          "maths": 85,
          "computer": 82,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Benjamin Davis",
          "city": "Philadelphia",
          "rollnumber": 15,
          "state": "Pennsylvania",
          "country": "USA",
          "physics": 85,
          "chemistry": 90,
          "maths": 92,
          "computer": 85,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Chloe White",
          "city": "Detroit",
          "rollnumber": 16,
          "state": "Michigan",
          "country": "USA",
          "physics": 88,
          "chemistry": 82,
          "maths": 90,
          "computer": 85,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Alexander Martinez",
          "city": "Las Vegas",
          "rollnumber": 17,
          "state": "Nevada",
          "country": "USA",
          "physics": 85,
          "chemistry": 85,
          "maths": 88,
          "computer": 90,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Mia Rodriguez",
          "city": "San Diego",
          "rollnumber": 18,
          "state": "California",
          "country": "USA",
          "physics": 80,
          "chemistry": 85,
          "maths": 90,
          "computer": 88,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Liam Harris",
          "city": "Minneapolis",
          "rollnumber": 19,
          "state": "Minnesota",
          "country": "USA",
          "physics": 85,
          "chemistry": 90,
          "maths": 85,
          "computer": 88,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      },
      {
          "name": "Charlotte Garcia",
          "city": "Orlando",
          "rollnumber": 20,
          "state": "Florida",
          "country": "USA",
          "physics": 82,
          "chemistry": 88,
          "maths": 85,
          "computer": 90,
          "studentImage":"https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.webp?b=1&s=170667a&w=0&k=20&c=RrvtNNmwGSJQn58gdYYM3xP-IVUIdKj29G4aJw-jJsE="
      }
    ];
    constructor(
      private fb: FormBuilder
    ){
      this.filter = this.fb.control("",{nonNullable: true});
    }
}
