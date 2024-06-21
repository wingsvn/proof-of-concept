> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# PLUS gen Z engagementpage: recipe detailpage
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
Voor de PLUS heb ik gewerkt aan een recepten/maaltijd detailpagina. Op deze pagina kun je een recept vinden met daarvan de bereiding, de ingredienten en een lijst met de producten die je kunt toevoegen aan je winkelmandje. Het is de bedoeling dat de klant het recept naar wens kan aanpassen door ingredienten toe te voegen of te verwijderen. Ook heeft de klant de optie voor alternatieve producten/ingredienten en kan die evt. ook kiezen voor basis ingredienten als peper, zout en olie.
<!-- Voeg een mooie poster visual toe 📸 -->
<img width="387" alt="image" src="https://github.com/wingsvn/proof-of-concept/assets/144009709/83fd746f-9ed5-4347-bfaf-0e82964d254e">
<img width="323" alt="image" src="https://github.com/wingsvn/proof-of-concept/assets/144009709/42524429-0782-46b6-a2ae-63d3d5c00741">
<img width="348" alt="image" src="https://github.com/wingsvn/proof-of-concept/assets/144009709/9a385087-7c08-4877-919a-04b4912a168a">
<img width="1194" alt="image" src="https://github.com/wingsvn/proof-of-concept/assets/144009709/68631c5f-923b-4ca8-bc0c-b43815f1958d">
<img width="1198" alt="image" src="https://github.com/wingsvn/proof-of-concept/assets/144009709/ee0533a0-f7b9-4ed9-9be4-c42f5304e163">


<!-- Voeg een link toe naar Github Pages 🌐-->

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
user story: als klant kan ik het recept aanpassen anar wens door producten te verwijderen of juist toe te voegen. Ook kan ik als klant producten wijzigen en vervangen anar andere mogelijkheden die passen bij mijn behoeftes.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

Mijn html structuur ziet er als volgt uit: header, main en een boodschappenlijstje. De main bestaat weer uit verschillende secties voor de verschillende delen binnen de pagina. De ingredienten zijn ingedeeld via CSS grid. Met javascript heb ik gezorgd voor de toggle en animatie op de boodschappenlijst. Ook heb ik met javascript gezorgd voor het converteren van de prijzen naar een Nederlandse prijsformaat. De content is dynamisch gegenereerd vanuit de directus API, dit wordt opgehaald via de server.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Installeer NodeJs
1. Fork deze repository
2. Open het in je code editor
3. Download nodejs,
4. Voer npm install in de terminal
5. Run de command npm start

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
