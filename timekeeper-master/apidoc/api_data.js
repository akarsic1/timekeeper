define({ "api": [
  {
    "type": "post",
    "url": "/api/calendar",
    "title": "Creating a calendar",
    "name": "CreateCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/api/calendar",
    "title": "Listing all calendars",
    "name": "ListCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>Calendar Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/api/calendar",
    "title": "Listing a calendar by Id",
    "name": "ListCalendarById",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/api/calendar",
    "title": "Reading a calendar by Id",
    "name": "ReadCalendarById",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "delete",
    "url": "/api/calendar",
    "title": "Removing a calendar",
    "name": "RemoveCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "removes",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "put",
    "url": "/api/calendar",
    "title": "Updating a calendar by Id",
    "name": "UpdateCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "updates",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/api/customer",
    "title": "Creating a Customer",
    "name": "CreateCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customer/:id",
    "title": "Finding a Customer by Id",
    "name": "FindCustomerById",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customer",
    "title": "Listing all Customers",
    "name": "ListCustomers",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customer/:id",
    "title": "Reading a Customer by ID",
    "name": "ReadCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/api/customer/:id",
    "title": "Removing a Customer",
    "name": "RemoveCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "removes",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/api/customer/:id",
    "title": "Updating a Customer",
    "name": "UpdateCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "updates",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/people",
    "title": "Creating a person",
    "name": "CreatePerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "post",
    "url": "/api/people",
    "title": "Listing a person",
    "name": "ListPerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>Person Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "get",
    "url": "/api/people",
    "title": "Listing a person by Id",
    "name": "ListPersonById",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "get",
    "url": "/api/people",
    "title": "Reading a person by Id",
    "name": "ReadPersonById",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "delete",
    "url": "/api/people",
    "title": "Removing a person",
    "name": "RemovePerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "removes",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "put",
    "url": "/api/calendar",
    "title": "Updating a person by Id",
    "name": "UpdatePerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "updates",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "  {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "post",
    "url": "/api/projects",
    "title": "Creating a project",
    "name": "Createproject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"name\":\"zakir\",\n        \"description\":\"opis\",\n        \"teamId\":\"asdj234io2j3ifjsodf\"\n        \"status\":\"ok\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/api/projects",
    "title": "Deleting a project",
    "name": "DeleteProject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/projects",
    "title": "Getting a project by Id",
    "name": "GettingAProjectById",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n    \"name\":\"zakir\",\n    \"description\":\"opis\",\n    \"teamId\":\"asdj234io2j3ifjsodf\"\n    \"status\":\"ok\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/projects",
    "title": "Listing all projects",
    "name": "ListingAllproject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>Project Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n    \"name\":\"zakir\",\n    \"description\":\"opis\",\n    \"teamId\":\"asdj234io2j3ifjsodf\"\n    \"status\":\"ok\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/projects",
    "title": "Reading a project by Id",
    "name": "ReadProjectById",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/api/projects",
    "title": "Updating a project by Id",
    "name": "UpdateProject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for teams with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/team.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for teams",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/team.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for projects with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/project.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for projects",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/project.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for people with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/person.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for people",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/person.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for projects with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for calendar",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/calendar.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for customers with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/customer.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for customers",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/customer.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for calendar with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/calendar.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "post",
    "url": "/api/team",
    "title": "Creating a Team",
    "name": "CreateTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/api/team",
    "title": "Listing all Teams",
    "name": "ListTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/api/team",
    "title": "Listing a Team by Id",
    "name": "ListTeamById",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/api/team",
    "title": "Reading a Team",
    "name": "ReadATeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "delete",
    "url": "/api/team",
    "title": "Removing a Team",
    "name": "RemoveTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "removes",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "put",
    "url": "/api/team",
    "title": "Updating a Team",
    "name": "UpdateTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "updates",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "post",
    "url": "/api/calendar",
    "title": "Creating a calendar",
    "name": "CreateCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/api/calendar",
    "title": "Listing all calendars",
    "name": "ListCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>Calendar Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/api/calendar",
    "title": "Listing a calendar by Id",
    "name": "ListCalendarById",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/api/calendar",
    "title": "Reading a calendar by Id",
    "name": "ReadCalendarById",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "returns",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "delete",
    "url": "/api/calendar",
    "title": "Removing a calendar",
    "name": "RemoveCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "removes",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "put",
    "url": "/api/calendar",
    "title": "Updating a calendar by Id",
    "name": "UpdateCalendar",
    "group": "Calendar",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Calendar",
            "optional": false,
            "field": "updates",
            "description": "<p>a Calendar Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/calendar.controller.js",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/api/customer",
    "title": "Creating a Customer",
    "name": "CreateCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customer",
    "title": "Listing a Customer by Id",
    "name": "ListCustomerById",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customer",
    "title": "Listing all Customers",
    "name": "ListCustomers",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customer",
    "title": "Reading a Customer",
    "name": "ReadCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "returns",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/api/customer",
    "title": "Removing a Customer",
    "name": "RemoveCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "removes",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/api/customer",
    "title": "Updating a Customer",
    "name": "UpdateCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Customer",
            "optional": false,
            "field": "updates",
            "description": "<p>a Customer Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/people",
    "title": "Creating a person",
    "name": "CreatePerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "post",
    "url": "/api/people",
    "title": "Listing a person",
    "name": "ListPerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>Person Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "get",
    "url": "/api/people",
    "title": "Listing a person by Id",
    "name": "ListPersonById",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "get",
    "url": "/api/people",
    "title": "Reading a person by Id",
    "name": "ReadPersonById",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "returns",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "delete",
    "url": "/api/people",
    "title": "Removing a person",
    "name": "RemovePerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "removes",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "put",
    "url": "/api/calendar",
    "title": "Updating a person by Id",
    "name": "UpdatePerson",
    "group": "Person",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Person",
            "optional": false,
            "field": "updates",
            "description": "<p>a Person Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "  {\n        \"_id\": \"5c98d07a210e8333b42f43c6\",\n        \"firstName\": \"neko\",\n        \"engagements\": [],\n        \"__v\": 0,\n        \"currentMonth\": \"5c98d5954c52050c1c974ee8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/person.controller.js",
    "groupTitle": "Person"
  },
  {
    "type": "post",
    "url": "/api/projects",
    "title": "Creating a project",
    "name": "Createproject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        \"name\":\"zakir\",\n        \"description\":\"opis\",\n        \"teamId\":\"asdj234io2j3ifjsodf\"\n        \"status\":\"ok\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/api/projects",
    "title": "Deleting a project",
    "name": "DeleteProject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/projects",
    "title": "Getting a project by Id",
    "name": "GettingAProjectById",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n    \"name\":\"zakir\",\n    \"description\":\"opis\",\n    \"teamId\":\"asdj234io2j3ifjsodf\"\n    \"status\":\"ok\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/projects",
    "title": "Listing all projects",
    "name": "ListingAllproject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>Project Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n    \"name\":\"zakir\",\n    \"description\":\"opis\",\n    \"teamId\":\"asdj234io2j3ifjsodf\"\n    \"status\":\"ok\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/api/projects",
    "title": "Reading a project by Id",
    "name": "ReadProjectById",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/api/projects",
    "title": "Updating a project by Id",
    "name": "UpdateProject",
    "group": "Project",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Project",
            "optional": false,
            "field": "returns",
            "description": "<p>a Project Document</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n        date: \"01.05.2005\",\n        employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n        type: \"tip\",\n        hours: 8,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for calendar with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/calendar.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for teams",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/team.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for projects with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/project.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for projects",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/project.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for people with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/person.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for teams with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/team.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for people",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/person.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for calendar",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/calendar.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for projects with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET and POST methods for customers",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/customer.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "Routing",
    "url": "Routing",
    "title": "GET, PUT AND DELETE methods for customers with specified ID",
    "name": "Router",
    "group": "Routes",
    "version": "1.0.0",
    "filename": "src/routes/customer.route.js",
    "groupTitle": "Routes"
  },
  {
    "type": "post",
    "url": "/api/team",
    "title": "Creating a Team",
    "name": "CreateTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/api/team",
    "title": "Listing all Teams",
    "name": "ListTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/api/team",
    "title": "Listing a Team by Id",
    "name": "ListTeamById",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/api/team",
    "title": "Reading a Team",
    "name": "ReadATeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "returns",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "delete",
    "url": "/api/team",
    "title": "Removing a Team",
    "name": "RemoveTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "removes",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "put",
    "url": "/api/team",
    "title": "Updating a Team",
    "name": "UpdateTeam",
    "group": "Team",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Team",
            "optional": false,
            "field": "updates",
            "description": "<p>a Team Documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>should be 200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": " {\n       date: \"01.05.2005\",\n       employeeId: \"asdaisdhadi234io2h43h234uiofsd\",\n       type: \"tip\",\n       hours: 8,\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/team.controller.js",
    "groupTitle": "Team"
  },
  {
    "type": "",
    "url": "Creates",
    "title": "creates instances of repository for each model",
    "name": "UnitOfWork",
    "group": "UnitOfWork",
    "version": "1.0.0",
    "filename": "src/repositories/unitOfWork.js",
    "groupTitle": "UnitOfWork"
  }
] });
