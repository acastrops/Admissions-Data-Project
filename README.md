# Admissions-Data-Project
Repository for the second project of the Data Visualization class, Spring 2018.

As of March 29th (this will be updated as the project unfolds):

## Group

Adriana Souza, [Roger Filmyer](https://github.com/rfilmyer), [Lydia LaSeur](https://github.com/lydialaseur).

## Data
Our data was kindly provided to us by the Admissions Office of New College of Florida. We have 3 datasets: _Enrolled Student Data_, _Admitted Student Data_, and _Denied Student Data_. Here is a breakdown of the variables:

+ `Ref`: Internal reference number for the student.
+ `First`: First name.
+ `Middle`: Middle name.
+ `Last`: Last name.
+ `App Student Type`: In these sets it tends to be "Freshman."
+ `Round`: Semester of application
+ `Decision`: Accepted or Denied.
+ `Course Selection Rating`: Variable that tries to capture the rigor of the students' high school education curriculum, 1-8.
+ `Final NCF GPA`: Internal calculation of GPA based on NCF's appraisal of the high school's curriculum rigor; mostly to avoid inflated GPAs.
+ `ACT Composite`
+ `SAT I Superscore (CR + M) - Verified`
+ `SAT R Superscore`
+ `Essay Rating`: Internal rating of the application essay for New College.


## Goal

Our goal is to standardize the way students are being admitted by creating a very simple model that weights each of the application elements according to what New College is looking for in terms of applicants. We would also like to create visualizations that help tell this story, beyond the formula (e.g. a visual profile on the average/accepted/denied applicant at New College).

## Audience

We have two separate audiences: the people who want to use the formula we come up with for weighting each element and, ideally, prospective students who would like to apply. The students could have a quick, visual representation of what is required to get in, for example. This is open to discussion.

## Graphs

Depending on the exact story we decide would be most useful for prospective students, the type of graph will vary. However, the variables we will use are `Final NCF GPA`, all of the `SAT` and `ACT` variables, and `Decision`. There are many examples online of visualizations for accepted students in colleges.

## Interactivity

We would like the visualization to be interactive but simple; hovering over for more details, etc.

## Software
We will use a combination of RStudio, Python, Tableau, and whatevet else may come up that we find useful.
