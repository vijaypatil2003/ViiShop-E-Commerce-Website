``` 
npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt 
```

**cors** – Allows frontend to talk to backend.

**dotenv** – Stores secret keys safely.

**express** – Builds the backend server.

**jsonwebtoken** – Handles login tokens.

**mongoose** – Connects and manages MongoDB.

**multer** – Uploads files or images.

**nodemon** – Auto-restarts server on code change.

**razorpay** – Handles Indian online payments.

**stripe** – Handles international payments.

**validator** – Checks if inputs are valid.

**cloudinary** – Stores and manages images online.

**bcrypt** – Encrypts passwords securely.

## **created folders controller, middleware, models, routers, config**
**controllers**/ → Handles logic for each route (e.g., add product, get cart).

**middleware/** → Functions that run before routes (e.g., auth check, validation).

**models/** → Mongoose schemas for MongoDB (e.g., User, Product).

**routers/** → Defines API routes and connects them to controllers.

**config/** → Stores configuration files (e.g., database connection, environment setup).