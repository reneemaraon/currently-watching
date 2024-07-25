// Import necessary libraries
require('dotenv').config();
const mongoose = require('mongoose');
const recalculateRatings = require('./cronjobs/showUpdateRatings');
const updateReviews = require('./cronjobs/updateReviews');
const removeDuplicates = require('./cronjobs/removeDuplicates');
const populateDb = require('./cronjobs/populateDb');
const connectDB = require('./db/connect');
const updateShows = require('./cronjobs/updateShows');
const deleteNonKor = require('./cronjobs/deleteNonKr');

// Logic to perform the job
async function runJobs() {
  try {
    // Call your recalculateRatings function or any other logic here
    await connectDB(process.env.MONGO_URI);

    await updateShows();
    await populateDb();
    await updateReviews();
    await removeDuplicates();
    await recalculateRatings();
    // console.log('Recalculated show items  successfully.');

    // await deleteNonKor();
    // console.log('Updated review like and comments counts successfully.');

    // console.log('Jobs completed successfully.');
  } catch (error) {
    console.error('Error running jobs:', error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
}

// Execute the job
runJobs();
