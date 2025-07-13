const employees = [
  {
    id: "emp1",
    email: "john.doe@example.com",
    password: "abc",
    tasks: [
      {
        title: "Build login UI",
        description: "Design and implement the login screen.",
        date: "2025-07-12",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix auth bug",
        description: "Resolve the token expiration issue.",
        date: "2025-07-10",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare project report",
        description: "Document the weekly progress.",
        date: "2025-07-08",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "emp2",
    email: "jane.smith@example.com",
    password: "abc",
    tasks: [
      {
        title: "Design dashboard UI",
        description: "Create wireframes and prototypes for admin dashboard.",
        date: "2025-07-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Set up CI/CD",
        description: "Configure GitHub Actions and deployment pipeline.",
        date: "2025-07-05",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update README",
        description: "Improve documentation for open-source project.",
        date: "2025-07-07",
        category: "Docs",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Implement auth logic",
        description: "Add role-based access control.",
        date: "2025-07-13",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "emp3",
    email: "michael.lee@example.com",
    password: "abc",
    tasks: [
      {
        title: "Create REST API",
        description: "Develop CRUD endpoints for tasks.",
        date: "2025-07-10",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize DB queries",
        description: "Improve MongoDB performance.",
        date: "2025-07-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code cleanup",
        description: "Remove unused imports and functions.",
        date: "2025-07-08",

        category: "Refactor",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: "emp4",
    email: "sara.khan@example.com",
    password: "abc",
    tasks: [
      {
        title: "Bug hunt in dashboard",
        description: "Fix layout breaking in small screens.",
        date: "2025-07-11",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Increase coverage to 90%.",
        date: "2025-07-07",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Design error pages",
        description: "Create custom 404 and 500 error screens.",
        date: "2025-07-09",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Setup Tailwind config",
        description: "Update theme and color tokens.",
        date: "2025-07-08",
        category: "Styling",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "emp5",
    email: "david.jones@example.com",
    password: "abc",
    tasks: [
      {
        title: "Integrate payment gateway",
        description: "Add Razorpay checkout in orders page.",
        date: "2025-07-12",
        category: "API",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review pull requests",
        description: "Merge feature branches after testing.",
        date: "2025-07-10",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Setup Google Auth",
        description: "Implement OAuth login flow.",
        date: "2025-07-11",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix cart bug",
        description: "Items not updating on quantity change.",
        date: "2025-07-09",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: "admin1",
    email: "admin@example.com",
    password: "abc"
  }
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
        localStorage.setItem('admin', JSON.stringify(admin));

}

export const  getLocalStorage=()=>{
    const employees=  JSON.parse(localStorage.getItem('employees'));
    const admin=  JSON.parse(localStorage.getItem('admin'));
    console.log(employees,admin)
}