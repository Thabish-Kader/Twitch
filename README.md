# Twitch UI

## Next Js, Next Auth, Tailwind, Typescript

This twitch UI clone was built for the purpose of learning Next Auth. Users can sign in with either google or githyb. Upon signing up a message will appear on the top right hand side with users name. This application is completely mobile responsive styles ith tailwind css. Through the execution of this application i have new-found respect to the team behind Next JS and tailwind. I will be forever gratefult to them for createing such a platform that makes the lives of us developer so much easier.

Check out the [Live Demo](twitch-ui-ten.vercel.app)

## Skills Aquired

-   Next Auth
-   Tailwind layout techniques
-   Typescript Concepts (Extending interface to follow the DRY concept)

### Problems Faced

-   During the implementaion of the authentication whenever, i was clicking the log in button it was taking me to another page which again told me to login through the provider. After some research in the docs I found that by calling the login('provider name',{ callbackUrl: 'http://localhost:3000/' } ) this could be solved.
-   Another problem was in the \_app.tsx page while implementing the session provider. Typescript gave a message saying "there is such name session". After further research with the help of StackOverflow this was also solved. You can find the page [here](https://stackoverflow.com/questions/73668032/nextauth-type-error-property-session-does-not-exist-on-type).

This was the code that saved me which you can find on the page
function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
return (
<>
<SessionProvider session={pageProps.session}>
<Navbar />
<Component {...pageProps} />
</SessionProvider>
</>
);
}

### ScreenShots

![](../../../Desktop/Screen%20Shot%202022-10-28%20at%202.24.35%20PM.png)

![](../../../Desktop/Screen%20Shot%202022-10-28%20at%202.24.55%20PM.png)

![](../../../Desktop/Screen%20Shot%202022-10-28%20at%202.25.23%20PM.png)

![](../../../Desktop/Screen%20Shot%202022-10-28%20at%202.25.39%20PM.png)

![](../../../Desktop/Screen%20Shot%202022-10-28%20at%202.26.59%20PM.png)

![](../../../Desktop/Screen%20Shot%202022-10-28%20at%202.28.29%20PM.png)
