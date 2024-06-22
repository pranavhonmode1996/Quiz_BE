const express = require('express');
const bodyParserMiddleware = require('./src/moddlewares/BodyParser');
const questionRoutes = require('./src/routes/admin/QuestionsRoutes');
const authRoutes = require('./routes/authRoutes');
// const errorHandler = require('./utils/errorHandler');
const authMiddleware = require('./utils/authMiddleware');

const app = express();
const port = 3000;

// Middleware
bodyParserMiddleware(app);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', authMiddleware, questionRoutes);

// Error Handling
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
