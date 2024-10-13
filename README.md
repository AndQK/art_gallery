# Nimi

Antonio Skondras

# Linkki nettisivuille

https://art-gallery-green.vercel.app/

# Tunnit

noin 40 tuntia

# Virheet

Ulkoinen kirjasto "yet-another-react-lightbox/styles.css" aiheittaa projektissani kolme virhettä, mutta ne eivät vaikuta sivuston käytettävyyteen eli käytettävyys ok.

# Projektin eteneminen

Tuli kiire ja jouduin tietyissä asioissa tekemään yksinkertaistuksia enkä esimerkiksi voinut viilata tyylejä enemmän.

# Komponentit

Sivusto sisältää neljä sivua, kuten Home, Gallery, Quiz ja PageNotFound.
Navigoimiseen käytetty Reactin routereita.
Home-sivulla esitellään sivusto ja sen tarkoitus.
Gallery sivulla pääsee tutustumaan AI:lla tehtyihin kuviin, niiden prompteihin, genreen ja sivustoon, jossa kuva luotiin. Kuvat ovat interaktiivisia ja niitä pystyy klikata, jolloin avautuu ImageViewer, joka on luotu ulkoisen kirjastokomponentin avulla. Kuvaa pääsee tarkastelemaan paremmin ja myös zoomaamaan.
Quiz sivusto on kolmiosainen eli se koostuu introsta, itse kyselystä ja result-osiosta.
Introssa kerrotaan käyttäjälle kyselystä ja kysymyksien määrä.
Itse kyselyssä ponnahtaa aina kaksi kuvaa ja käyttäjän pitää klikata jompaa kumpaa kuvista. Jos käyttäjä arvaa oikein, mikä kuvista oli ihmisen tekemä, käyttäjä saa pisteen. Kyselyn loputtua ponnahtaa result-osio, jossa käyttäjälle kerrotaan tulos ja näytetään, mitkä vastaukset oli oikein ja mitkä ei. Tieto tarjotaan taulukko muodossa, jossa kerrotaan teoksen nimi, artisti, vuosi, vastauksen status ja linkki sivustolle, josta saa enemmän tietoa taulusta.
PageNotFound on vain sitä varten, jos käyttäjä näppäilee urlin väärin. Sivulla kerrotaan, että käyttäjän näppäilemää sivua ei ole olemassa ja tarjotaan linkki takaisin home-sivulle.

# Palvelumuotoilu

Käyttäjä on kiinnostunut AI-taiteesta, mutta ei vielä tiedä, mihin AI kykenee. Sivuston tarkoitus on tutustuttaa käyttäjä AI-taiteeseen ja sivustoihin, joilla samanlaisia kuvia on mahdollista luoda.

# UX

Sovellukselle on toteutettu reititys ja sivujen määrä on yhteensä 4.
Sivulle tultaessa käyttäjä näkee taustan, joka on tehty AI:lla ja kerrotaan vähän sivusta ja esitellään nappula, jonka kautta käyttäjä pääsee tarkastelemaan taideteoksia. Siirtymisen voi tehdä myös navbarista.
Kaikilla sivuilla käyttäjä scrollaa alaspain, mutta quiz-sivulla käyttäjä klikkaa eteenpäin.

Sivuston call to actionit ovat sivuston jakaminen someen ja ne esitellään vasta footer kohdassa, kun käyttäjä on scrollannut alas.

# UI

Sivu on minimalistinen ja sisältöä on hyvin vähän, tyhjää tilaa on paljon. Valitsin kaksi tummaa turkoosin väriä aksenttiväreiksi, sillä ne mielestäni säilyttävät erinomaisesti kontrastieron taustan ja tekstin välillä. Lisäksi kyseiset värit antavat sivustolle eloisamman olemuksen. Taustavärinä käytetty valkoista, joka mielestäni sopii hyvin taideteemaan. Musta väri (#333333) antaa hyvän sävyn sivuston pääkomponenteille (navbar, footer) ja tekstille.
Fonteiksi valitsin Playfair Display & Montserrat, koska ne antaa sivustolle todella siistin ja esteettisen viban. Kyseiset vibat sopivat sivustolleni, koska sivusto on minimalistinen ja kyseiset fontit elävöittävät tyhjän tilan. Lisäksi sivuston tarkoitus on esitellä taidetta ja kyseiset fontit sopivat tähän teemaan.

Navigaatio on rakennettu sivuston yläpalkkiin ja se skrollaa mukana, kun käyttäjä skrollaa alas.

# Interaktiivinen elementti
Quiz (Esitelty Komponentit-osiossa)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
