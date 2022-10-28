# Twitch UI

## Next Js, Next Auth, Tailwind, Typescript

This twitch UI clone was built for the purpose of learning Next Auth. Users can sign in with either google or githyb. Upon signing up a message will appear on the top right hand side with users name. This application is completely mobile responsive styles ith tailwind css. Through the execution of this application i have new-found respect to the team behind Next JS and tailwind. I will be forever gratefult to them for createing such a platform that makes the lives of us developer so much easier.

## Skills Aquired

-   Next Auth
-   Tailwind layout techniques
-   Typescript Concepts (Extending interface to follow the DRY concept)

### Problems Faced

-   During the implementaion of the authentication whenever, i was clicking the log in button it was taking me to another page which again told me to login through the provider. After some research in the docs I found that by calling the 
 ```login('provider name',{ callbackUrl: 'http://localhost:3000/' })``` this could be solved.
-   Another problem was in the \_app.tsx page while implementing the session provider. Typescript gave a message saying "there is such name session". After further research with the help of StackOverflow this was also solved. You can find the page [here](https://stackoverflow.com/questions/73668032/nextauth-type-error-property-session-does-not-exist-on-type).

This was the code that saved me which you can find on the page

```
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
```

### ScreenShots

<img width="1680" alt="Screen Shot 2022-10-28 at 2 24 35 PM" src="https://user-images.githubusercontent.com/76642519/198567156-6574fc23-527e-4540-a89a-afebd6d42583.png">

<img width="1680" alt="Screen Shot 2022-10-28 at 2 25 23 PM" src="https://user-images.githubusercontent.com/76642519/198567225-4781a84b-36cf-48cc-ae8b-8ed3610e329a.png">

<img width="797" alt="Screen Shot 2022-10-28 at 2 24 55 PM" src="https://user-images.githubusercontent.com/76642519/198567199-9f5f9dfd-ddc1-42eb-a191-ba08200bb923.png">

<img width="1680" alt="Screen Shot 2022-10-28 at 2 25 39 PM" src="https://user-images.githubusercontent.com/76642519/198567278-78edf31f-056d-41a7-a751-7bba5121016d.png">

<img width="1680" alt="Screen Shot 2022-10-28 at 2 26 59 PM" src="https://user-images.githubusercontent.com/76642519/198567303-4d55c01e-1d8d-4348-b545-4369b8241d9f.png">

<img width="1666" alt="Screen Shot 2022-10-28 at 2 28 29 PM" src="https://user-images.githubusercontent.com/76642519/198567319-1a2e8364-f3f3-45dc-ad44-5c7cdbbc7b3f.png">









