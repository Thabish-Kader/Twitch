# Twitch UI

## Next Js, Next Auth, Tailwind, Typescript

This twitch UI clone was built for the purpose of learning Next Auth. Users can sign in with either google or githyb. Upon signing up a message will appear on the top right hand side with users name. This application is completely mobile responsive styles ith tailwind css. Through the execution of this application i have new-found respect to the team behind Next JS and tailwind. I will be forever gratefult to them for createing such a platform that makes the lives of us developer so much easier.

Check out the [Live Demo](https://twitch-ui-ten.vercel.app/)

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

<img width="1666" alt="Screen Shot 2022-10-28 at 2 28 29 PM" src="https://user-images.githubusercontent.com/76642519/198571828-e591360f-b85b-4eb4-8a6d-01c8b01d5284.png">

<img width="1680" alt="Screen Shot 2022-10-28 at 2 26 59 PM" src="https://user-images.githubusercontent.com/76642519/198571928-5a16014c-129d-40df-a65f-8e1cc985b9d9.png">

<img width="1680" alt="Screen Shot 2022-10-28 at 2 25 39 PM" src="https://user-images.githubusercontent.com/76642519/198571936-51e372bb-20c0-451d-9f71-6badd453f774.png">

<img width="1680" alt="Screen Shot 2022-10-28 at 2 25 23 PM" src="https://user-images.githubusercontent.com/76642519/198571960-f290fd57-90d0-443e-832a-0fb31c918f70.png">

<img width="797" alt="Screen Shot 2022-10-28 at 2 24 55 PM" src="https://user-images.githubusercontent.com/76642519/198572001-190dbf87-5f36-47f6-af35-ba99a88bd848.png">

<img width="1680" alt="Screen Shot 2022-10-28 at 2 24 35 PM" src="https://user-images.githubusercontent.com/76642519/198572022-28a7981d-286b-40fb-ab9a-59037fb8e592.png">

