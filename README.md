# USER MANAGEMENT APP

This project is a simple User Management system built with React. It includes components to manage users, display a list of users, and create or edit or delete user details

# Technologies used

    1.React
    2.Node.js
    3.Express.js
    4.Sqlite
    5.CSS

# componets structure

    1.UserList
        a.UserItem
    2.UserForm
    3.ErrorBoundary

# Must have functionality

    1.Display users List
        -- user list display in UserList component
        -- used 1`fetch` method to get data from backend
        -- displayed as column names  and values
            a.ID
            b.First Name
            c.Last Name
            d.Email
            e.Department
        -- Along with this used two buttons
            a.Edit button for editing exiting user
            b.Delete button for deleting user from ui and database

        -- Add User Button is used to navigate to UserForm component
    2.UserForm
        -- Create form with required fields with field level validations




# Backend

Created express.js environment connecting with sqlite database for Interations

# Tables contents

    1. id INTEGER PRIMARY KEY
    2. firstname VARCHAR(250)
    3. lastname VARCHAR(250)
    4. email VARCHAR(250)
    5. department VARCHAR(250)

# APIs

    -- created APIs for interactions
    1.getting users array
    2.get specific user using user id
    3.adding new user
    4.updating existing user details
    5.deleting user

# API Testing

    1. Postman
    2.REST Client in VSCODE

#
