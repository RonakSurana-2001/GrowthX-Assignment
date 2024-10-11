const swaggerSpecs = {
    "openapi": "3.0.0",
    "info": {
        "title": "Assignment Submission Portal",
        "description": "These are API Docs for Assignment Submission Portal.",
    },
    "servers": [
        {
            "url": "http://localhost:3000",
        },
        {
            "url": "https://growthx-assignment-oyx1.onrender.com",
        }
    ],
    "components": {
        "schemas": {
            "loginSchema": {
                "type": 'object',
                "properties": {
                    "userEmail": {
                        "type": "string",
                    },
                    "password": {
                        "type": "string"
                    },
                }
            },
            "Admin": { 
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string",
                        "example": "Ronak ADMIN"
                    },
                    "userEmail": {
                        "type": "string",
                        "example": "ronaknadmin@mail.com"
                    }
                }
            },
            "getAllAdminsResponseSchema": {
                "type": "object",
                "properties": {
                    "adminsData": {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Admin"
                        }
                    }
                }
            },
            "registerSchema": {
                "type": 'object',
                "properties": {
                    "userEmail": {
                        "type": "string",
                    },
                    "username": {
                        "type": "string",
                    },
                    "password": {
                        "type": "string"
                    },
                    "admin": {
                        "type": "boolean"
                    }
                }
            },
            "uploadSchema": {
                "type": 'object',
                "properties": {
                    "userEmail": {
                        "type": "string",
                    },
                    "adminEmail": {
                        "type": "string",
                    },
                    "task": {
                        "type": "string"
                    }
                }
            },
            "SuccessResponseWithMessage": {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                    },
                    "message": {
                        "type": "string",
                    }
                }
            },
            "ErrorResponseWithError": {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                    },
                    "message": {
                        "type": "string",
                    },
                    "error": {
                        "type": "string",
                    }
                }
            },
            "loginSuccessResponse": {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                    },
                    "message": {
                        "type": "string",
                    },
                    "existingUser": {
                        "type": "Object",
                    }
                }
            },
            "ErrorResponseWithoutError": {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean"
                    },
                    "message": {
                        "type": "string"
                    }
                }
            },
            "assignmentsListResponseSchema": {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                        "example": true
                    },
                    "assignmentslist": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "_id": {
                                    "type": "string",
                                    "example": "6709106b8e3939317b7791da"
                                },
                                "userEmail": {
                                    "type": "string",
                                    "example": "ronaknonadmin@mail.com"
                                },
                                "task": {
                                    "type": "string",
                                    "example": "First Task of day"
                                },
                                "adminEmail": {
                                    "type": "string",
                                    "example": "ronaknadmin@mail.com"
                                },
                                "verdict": {
                                    "type": "string",
                                    "enum": ["pending", "accepted", "not-accepted"],
                                    "example": "not-accepted"
                                },
                                "assignmentId": {
                                    "type": "string",
                                    "example": "e7ce2d83-1e9f-4f23-8eac-0cb8a0deec16"
                                },
                                "createdAt": {
                                    "type": "string",
                                    "format": "date-time",
                                    "example": "2024-10-11T11:47:56.001Z"
                                },
                                "updatedAt": {
                                    "type": "string",
                                    "format": "date-time",
                                    "example": "2024-10-11T13:05:47.153Z"
                                },
                                "__v": {
                                    "type": "integer",
                                    "example": 0
                                }
                            }
                        }
                    }
                }
            },
            "adminSchema": {
                "type": 'object',
                "properties": {
                    "userid": {
                        "type": "string",
                    },
                    "useremail": {
                        "type": "string"
                    },
                }
            },
        },
    },
    "paths": {
        "/register": {
            "post": {
                "tags": ["Register Login and get all admins"],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/registerSchema"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "All Admins List",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SuccessResponseWithMessage"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "User Already Exists",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithError"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Some Error Occurred",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithError"
                                }
                            }
                        }
                    },
                }
            }
        },
        "/login": {
            "post": {
                "tags": ["Register Login and get all admins"],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/loginSchema"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "User Logged In",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SuccessResponseWithMessage"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "User Not Registered or Incorrect Email or password",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Some Error Occurred",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithError"
                                }
                            }
                        }
                    },

                }
            }
        },
        "/admins": {
            "get": {
                "tags": ["Register Login and get all admins"],
                "responses": {
                    "200": {
                        "description": "All Admins List",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/getAllAdminsResponseSchema"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/upload": {
            "post": {
                "tags": ["Upload Assignment"],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/uploadSchema"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Upload Assignment Successful",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SuccessResponseWithMessage"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Validation failed or admin dont exist",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Some Error Occurred",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithError"
                                }
                            }
                        }
                    },

                }
            }
        },
        "/assignments": {
            "get": {
                "tags": ["Admin Specific"],
                "parameters": [
                    {
                        "in": "header",
                        "name": "userid",
                        "schema": {
                            "type": "string",
                            "format": "uuid"
                        },
                        "required": true,
                        "description": "User Id of Admin"
                    },
                    {
                        "in": "header",
                        "name": "useremail",
                        "schema": {
                            "type": "string",
                        },
                        "required": true,
                        "description": "Email Address of Admin"
                    },
                ],
                "responses": {
                    "200": {
                        "description": "List of all assignments tagged for Admin",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/assignmentsListResponseSchema"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Admin Dont Exists",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Some Error Occurred",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },

                }
            }
        },
        "/assignments/{id}/accept": {
            "post": {
                "tags": ["Admin Specific"],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "schema": {
                            "type": "string",
                        },
                        "required": true,
                        "description": "Assignment ID"
                    },
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/adminSchema"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Assignment Accepted",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SuccessResponseWithMessage"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Admin Dont Exists",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Some Error Occurred",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },

                }
            }
        },
        "/assignments/{id}/reject": {
            "post": {
                "tags": ["Admin Specific"],
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "schema": {
                            "type": "string",
                        },
                        "required": true,
                        "description": "Assignment ID"
                    },
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/adminSchema"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Assignment Not-Accepted",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/SuccessResponseWithMessage"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Admin Dont Exists",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Some Error Occurred",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ErrorResponseWithoutError"
                                }
                            }
                        }
                    },

                }
            }
        },
    }
}

module.exports = swaggerSpecs