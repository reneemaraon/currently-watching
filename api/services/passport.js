const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const User = require("../models/user");
const { Strategy } = require("@superfaceai/passport-twitter-oauth2");

// const keys = require("./keys");
// const User = require("../models/user");

const updateDetails = async (id, profile) => {
  await User.findByIdAndUpdate(id, {
    $set: {
      name: profile._json.name,
      screenName: profile._json.screen_name,
      twitterId: profile._json.id_str,
      profilePhotoUrl: profile._json.profile_image_url,
      joinedDate: profile._json.created_at,
    },
  });
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: `${process.env.BASE_URL}/api/v1/auth/twitter/callback/`,
    },
    async (token, tokenSecret, profile, done) => {
      // Find user in User model
      const currentUser = await User.findOne({
        twitterId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          screenName: profile._json.screen_name,
          twitterId: profile._json.id_str,
          profilePhotoUrl: profile._json.profile_image_url,
          joinedDate: profile._json.created_at,
        }).save();

        if (newUser) {
          done(null, newUser);
          return;
        }
      }
      await updateDetails(currentUser._id, profile);
      done(null, currentUser);
    }
  )
);

// passport.use(
//   // <2> Strategy initialization
//   new Strategy(
//     {
//       clientID: process.env.TWT_CLIENT_ID,
//       clientSecret: process.env.TWT_CLIENT_SECRET,
//       clientType: 'confidential',
//       callbackURL: '/api/v1/auth/twitter/callback',
//     },
//     // <3> Verify callback
//     (accessToken, refreshToken, profile, done) => {
//       console.log('Success!', { accessToken, refreshToken });
//       return done(null, profile);
//     }
//   )
// );
