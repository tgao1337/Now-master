# NOW
Now is a task management website where users estimate the required time to complete a white-collar task, deadline, and write positive and negative consequences for completing that task.

This repository is a backup of the original at https://github.com/MatheMaddox/Now due to some merge problems. It should be fixed now.

## Audience
The website targets individuals who task white-collar tasks longer than 1 hour on a daily basis. According to StudyMode, online education company, between 40 to 50% of college students procrastinate because the upcoming tasks feel overwhelming. Now caters to high-school, college and white-collar professionals because it requires users to break down tasks.
Through our initial surveys, we noticed that many students and professionals answered that guilt spurs them to take action and mitigate procrastination. In Now, users are required to write out positive and negative outcomes depending on the completion of a task.

## Experience
A user visits our website when they feel overwhelmed by upcoming white-collars tasks that require more than 1 hour. The user relieves the feeling of being overwhelmed by breaking down tasks into at least one sub-task and writes down the instant reward and positive outcome when completed the main task.

# Technical
## Models
<li>Tasks</li>
<li>Users</li>

## Views
<img src="/Users/yizu/Documents/GitHub/Now/PaperPrototype.jpg" alt="">
<li>index.hbs: Tasks to complete page</li>
<li>new.hbs: New task form</li>
<li>error.hbs: Error page</li>
<li>completed.hbs: Completed tasks</li>
<li>completedconfirm.hbs: Confirmation page for task completion</li>
<li>confirm.hbs: Confirmation form for task completion </li>
<li>delete.hbs: Confirmation for deleting one task</li>
<li>edit.hbs: Edit current task</li>
<li>error.hbs: Error page</li>
<li>login.hbs: Log-in page</li>
<li>viewtask.hbs: View specific task details</li>

## Routes
[What routes will we need? What will they do?]

Index/Home
<li> POST http://localhost:3000/</li>
<li> GET http://localhost:3000/</li>

View Specific tasks
<li> GET http://localhost:3000/tasks/:task.id</li>
<li> POST http://localhost:3000/tasks/:task.id</li>

Edit Specific tasks
<li> GET http://localhost:3000/tasks/:task.id/edit</li>

Confirm Completion of tasks
<li> USE http://localhost:3000/tasks/:task.id/confirm</li>

Update Completed Task
<li> POST http://localhost:3000/tasks/:task.id</li>

Login
<li> GET http://localhost:3000/login</li>
<li> POST http://localhost:3000/login</li>
<li> GET http://localhost:3000/login/fail</li>

Register
<li> GET http://localhost:3000/users/new</li>
<li> POST http://localhost:3000/users/new</li>
<li> GET http://localhost:3000/users/new/confirm</li>
<li> POST http://localhost:3000/users/new/confirm</li>
<li> GET http://localhost:3000/users/new/format</li>
<li> POST http://localhost:3000/users/new/format</li>
<li> GET http://localhost:3000/users/new/taken</li>
<li> POST http://localhost:3000/users/new/taken</li>

Completed Tasks
<li> GET http://localhost:3000/completed</li>

Clear All Completed tasks
<li> GET http://localhost:3000/deletecompletedconfirm</li>
<li> POST http://localhost:3000/deletecompletedconfirm</li>

View stars
<li> GET http://localhost:3000/stars</li>

Loading screen while Undoing Tasks
<li> GET http://localhost:3000/undo/:task.id</li>

Loading screen while deleting tasks
<li> GET http://localhost:3000/deleted/:task.id</li>

Delete Task Confirmation
<li> GET http://localhost:3000/tasks/:task.id/delete</li>

Create a new Task
<li> GET http://localhost:3000/new</li>
<li> POST http://localhost:3000/new</li>

## Other

Used components from Material Design Lite: https://getmdl.io/index.html

# Daily Milestones

## Monday

Outline design document

## Tuesday

<li> Complete MVP features </li>
<li>Landing page</li>
<li>Create dates</li>
<li>Color palettes</li>
<li>Completed button</li>
<li>Check-box for tasks</li>


## Wednesday

<li>Complete usable build</li>
<li>User testing at end of day</li>
<li>Diagnose potential bugs</li>

## Thursday

<li>Complete all features</li>
<li>Fix potential bugs</li>
<li>Add additional features: (Subtasks, rewards)</li>


## Friday

<li>Polish website</li>
<li>Fix final bugs</li>
